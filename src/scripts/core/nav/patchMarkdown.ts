import type { ManifestEntry } from "@/scripts/core/nav/buildManifest";
import { detectExistingNav } from "@/scripts/core/nav/detectExistingNav";
import { renderNav } from "@/scripts/core/nav/renderNav";

/**
 * Remove UTF-8 BOM if present.
 */
function stripBom(s: string): string {
  return s.replace(/^\uFEFF/, "");
}

function isBlank(md: string): boolean {
  return stripBom(md).trim().length === 0;
}

/**
 * Normalize ONLY for comparison so whitespace differences
 * don't cause rewrites. Never write the normalized text.
 *
 * Rules:
 * - normalize CRLF -> LF
 * - trim trailing whitespace per-line
 * - collapse runs of 3+ newlines to 2
 * - collapse whitespace between HTML tags (">   <" -> "><")
 * - trim ends
 */
function normalizeForCompare(s: string): string {
  const lf = s.replace(/\r\n/g, "\n");

  const trimmedLineEnds = lf
    .split("\n")
    .map((line) => line.replace(/[ \t]+$/g, ""))
    .join("\n");

  const collapseBlankRuns = trimmedLineEnds.replace(/\n{3,}/g, "\n\n");

  // Ignore whitespace-only differences between tags
  const collapseBetweenTags = collapseBlankRuns.replace(/>\s+</g, "><");

  return collapseBetweenTags.trim();
}

/**
 * Your required scaffold for totally blank files.
 * NOTE: We do NOT add an extra newline at EOF.
 */
function blankScaffold(title: string): string {
  return `## ${title}\n---\n\n`;
}

/**
 * Ensure exactly one blank line before nav *when appending*,
 * without forcing blank lines at EOF.
 */
function ensureOneBlankLineBeforeAppend(md: string): string {
  // Remove trailing spaces/tabs on lines, but preserve internal formatting.
  const cleaned = md.replace(/[ \t]+$/gm, "");

  // Remove ALL trailing whitespace/newlines, then add "\n\n"
  return cleaned.replace(/\s*$/, "") + "\n\n";
}

export function patchMarkdownWithNav(beforeRaw: string, m: ManifestEntry): string {
  const before = stripBom(beforeRaw);

  // canonical nav as produced by renderNav
  const newNav = renderNav(m.back, m.next).trim();
  const _newNavCmp = normalizeForCompare(newNav); // kept in case you want it later

  // 1) Blank file → scaffold + nav (no extra EOF newline)
  if (isBlank(before)) {
    const out = blankScaffold(m.pageTitle) + newNav;
    return out.replace(/\s*$/, ""); // no trailing newline/blank line
  }

  const found = detectExistingNav(before);

  // 2) No nav found → append nav (no extra EOF newline)
  if (!found) {
    const out = ensureOneBlankLineBeforeAppend(before) + newNav;
    return out.replace(/\s*$/, "");
  }

  // 3) Nav found → treat existing nav as canonical (idempotent)
  // If it's there, we do NOT rewrite it.
  return before;
}