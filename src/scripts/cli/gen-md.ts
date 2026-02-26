import pages from "@/domain/navigation/mainTabs";
import type { Subpage } from "@/types/navigation";

import path from "node:path";
import { parseArgs, matchesFilter } from "@/scripts/core/args";
import { flattenNav } from "@/scripts/core/flattenNav";
import { deriveMd } from "@/scripts/core/derive-md";
import { config } from "@/scripts/config";
import { ensureDir, exists, writeText } from "@/scripts/core/fs";
import { matchesWithin } from "../core/within";

function altPathUsingGroupMap(mdFsPath: string): string[] {
  // If someone changes crumbs, derive might build a different group folder name.
  // This creates alternate candidates by swapping any folder segment that matches
  // a mapped folder VALUE (or potential pascalized key) — conservative.
  //
  // For your immediate case: RxJSAndReactiveProgramming -> RxJSAndReactive
  const alts: string[] = [];

  const map = config.groupFolderNameMap ?? {};
  const values = Object.values(map);

  // Also consider passthrough of values; if mdFsPath already uses value, this does nothing.
  for (const v of values) {
    // no-op placeholder: kept for clarity if you expand this later
    void v;
  }

  // Specific swap: if path includes any pascalized key but you mapped to a shorter folder,
  // rewrite it. Since we don't have pascalize imported here, we do a simple heuristic:
  // try replacing any *key-derived* folder that appears literally in path.
  for (const [k, v] of Object.entries(map)) {
    // best-effort: many of your pascalize outputs match this style already
    const keyLike = k.replace(/&/g, "And").replace(/[^a-zA-Z0-9]/g, "");
    if (mdFsPath.includes(path.sep + keyLike + path.sep)) {
      alts.push(mdFsPath.replace(path.sep + keyLike + path.sep, path.sep + v + path.sep));
    }
  }

  return alts;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const limit = args.limit ?? config.defaultLimit;

  const leaves = flattenNav(pages as unknown as Subpage[]);
  const derived = leaves
    .filter((l) => matchesWithin(args.within, l.crumbs))
    .map((l) => deriveMd(l))
    .filter((d) => matchesFilter({ tab: args.tab, topic: args.topic }, d));

  let created = 0;
  let skipped = 0;

  for (const d of derived) {
    if (created >= limit) break;

    // primary exists check
    if (exists(d.mdFsPath)) {
      skipped++;
      continue;
    }

    // safety fallback: check alternate mapped paths (prevents duplicate creates)
    const alts = altPathUsingGroupMap(d.mdFsPath);
    const hit = alts.find((p) => exists(p));
    if (hit) {
      skipped++;
      continue;
    }

    if (args.dryRun) {
      console.log(`[dry-run] would create ${d.mdFsPath}`);
      created++;
      continue;
    }

    ensureDir(path.dirname(d.mdFsPath));
    writeText(d.mdFsPath, ""); // empty markdown
    console.log(`created ${d.mdFsPath}`);
    created++;
  }

  console.log(
    `gen:md tab=${args.tab ?? "(all)"} topic=${args.topic ?? "(all)"} dryRun=${!!args.dryRun}`
  );
  console.log(`Created: ${created}`);
  console.log(`Skipped (already existed): ${skipped}`);
  if (created >= limit) console.log(`Stopped early due to --limit ${limit}`);
}

main();