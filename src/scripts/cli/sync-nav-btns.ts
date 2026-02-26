import pages from "@/domain/navigation/mainTabs";
import path from "node:path";

import { parseArgs, matchesFilter } from "@/scripts/core/args";
import { flattenNav } from "@/scripts/core/flattenNav";
import { deriveMd } from "@/scripts/core/derive-md";
import { config } from "@/scripts/config";
import { exists, readText, writeText } from "@/scripts/core/fs";
import { matchesWithin } from "@/scripts/core/within";
import { buildManifest, type ManifestEntry } from "@/scripts/core/nav/buildManifest";
import { patchMarkdownWithNav } from "@/scripts/core/nav/patchMarkdown";
import { detectExistingNav } from "@/scripts/core/nav/detectExistingNav";
import { renderNav } from "@/scripts/core/nav/renderNav";

const SCRIPT_VERSION = "sync-nav-btns.ts v5 (whitespace-tolerant compare)";

function pickTargets(all: ManifestEntry[], args: ReturnType<typeof parseArgs>) {
  if (args.file) {
    const abs = path.isAbsolute(args.file) ? args.file : path.join(process.cwd(), args.file);
    return all.filter((m) => path.normalize(m.mdFsPath) === path.normalize(abs));
  }

  return all.filter((m) => {
    if (!matchesWithin(args.within, m.crumbs)) return false;
    if (!matchesFilter({ tab: args.tab, topic: args.topic }, m)) return false;
    return true;
  });
}

/**
 * Comparison helper:
 * - normalizes CRLF vs LF
 * - trims trailing whitespace per-line
 * - collapses "extra blank lines"
 * - collapses whitespace BETWEEN HTML tags (">   <" => "><")
 *
 * This prevents "update churn" when the only difference is harmless whitespace.
 */
function normalizeForCompare(s: string): string {
  const lf = s.replace(/\r\n/g, "\n");

  const trimmedLineEnds = lf
    .split("\n")
    .map((line) => line.replace(/[ \t]+$/g, ""))
    .join("\n");

  const collapseBlankRuns = trimmedLineEnds.replace(/\n{3,}/g, "\n\n");

  // IMPORTANT: only affects compare (does not change what you write),
  // and it only removes whitespace between tags, not inside text.
  const collapseBetweenTags = collapseBlankRuns.replace(/>\s+</g, "><");

  return collapseBetweenTags.trim();
}

function normalizeNavForCompare(s: string): string {
  return normalizeForCompare(s);
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const limit = args.limit ?? config.defaultLimit;

  console.log(`[sync-nav-btns] ${SCRIPT_VERSION}`);

  // Leaf list from nav
  const leaves = flattenNav(pages as any).map((l) => ({
    ...l,
    derived: deriveMd(l),
  }));

  const manifest = buildManifest(leaves, {
    boundary: args.boundary ?? "next-topic",
  });

  const targets = pickTargets(manifest, args);

  let changed = 0;
  let skippedMissing = 0;
  let untouched = 0;

  for (const m of targets) {
    if (changed + untouched + skippedMissing >= limit) break;

    if (!exists(m.mdFsPath)) {
      skippedMissing++;
      continue;
    }

    const before = readText(m.mdFsPath);
    const after = patchMarkdownWithNav(before, m);

    const beforeCmp = normalizeForCompare(before);
    const afterCmp = normalizeForCompare(after);

    if (afterCmp === beforeCmp) {
      untouched++;
      continue;
    }

    if (args.dryRun) {
      const found = detectExistingNav(before);
      const hasNav = before.includes('<div class="xrefNav">');
      const navHtml = renderNav(m.back, m.next);
      const newNavCmp = normalizeNavForCompare(navHtml);

      let reason = "unknown";
      if (before.trim().length === 0) reason = "blank";
      else if (!found) reason = "noNav";
      else {
        const existingNav = before.slice(found.start, found.end);
        const existingCmp = normalizeNavForCompare(existingNav);
        reason = existingCmp === newNavCmp ? "formatting-churn" : "navMismatch";
      }

      console.log(
        `[dry-run] would update ${m.mdFsPath} (reason=${reason}, found=${found?.kind ?? "none"}, hasNav=${hasNav}, len ${before.length}->${after.length})`
      );

      changed++;
      continue;
    }

    writeText(m.mdFsPath, after);
    console.log(`updated ${m.mdFsPath}`);
    changed++;
  }

  console.log(`sync-nav-btns dryRun=${!!args.dryRun} boundary=${args.boundary ?? "next-topic"}`);
  console.log(`Updated: ${changed}`);
  console.log(`Untouched (already correct): ${untouched}`);
  console.log(`Skipped missing .md: ${skippedMissing}`);
  if (changed + untouched + skippedMissing >= limit) console.log(`Stopped early due to --limit ${limit}`);
}

main();