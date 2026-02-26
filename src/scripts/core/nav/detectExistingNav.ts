export type FoundNav =
  | { kind: "marked"; start: number; end: number }
  | { kind: "xrefNav"; start: number; end: number }
  | { kind: "legacy"; start: number; end: number };

export const DETECT_EXISTING_NAV_VERSION = "v7-balanced-div-xrefNav";

/**
 * Optional marker support.
 * If you don't want markers, leave these empty and the detector will skip this mode.
 *
 * IMPORTANT: typed as string (not literal "") so TS doesn't treat branches as impossible.
 */
const NAV_START: string = "";
const NAV_END: string = "";

/**
 * Finds the end index (exclusive) of the </div> that closes the <div ...> that begins at `openIndex`.
 * Uses a simple balanced-parser for <div ...> and </div>.
 *
 * Returns: index right AFTER the closing `</div>` tag, or -1 if not found.
 */
function findBalancedDivClose(html: string, openIndex: number): number {
  let i = openIndex;
  let depth = 0;

  while (i < html.length) {
    const nextLt = html.indexOf("<", i);
    if (nextLt === -1) return -1;

    // Find the end of the tag
    const nextGt = html.indexOf(">", nextLt + 1);
    if (nextGt === -1) return -1;

    const tag = html.slice(nextLt, nextGt + 1);

    // opening div: <div ...>
    // note: ignore closing </div>
    if (tag.startsWith("<div") || tag.startsWith("<div ")) {
      depth++;
    } else if (tag.startsWith("</div")) {
      depth--;
      if (depth === 0) {
        return nextGt + 1; // exclusive end
      }
    }

    i = nextGt + 1;
  }

  return -1;
}

export function detectExistingNav(md: string): FoundNav | null {
  // 1) Prefer markers (if enabled)
  if (NAV_START.length > 0 && NAV_END.length > 0) {
    const s = md.lastIndexOf(NAV_START);
    const e = md.lastIndexOf(NAV_END);
    if (s !== -1 && e !== -1 && e > s) {
      return { kind: "marked", start: s, end: e + NAV_END.length };
    }
  }

  // 2) Canonical xrefNav block (last occurrence)
  const needle = '<div class="xrefNav">';
  const x = md.lastIndexOf(needle);
  if (x !== -1) {
    const end = findBalancedDivClose(md, x);
    if (end !== -1) return { kind: "xrefNav", start: x, end };
  }

  // 3) Legacy patterns (simple)

  // xrefBox (balanced not needed because it typically isn't nested deeply, but we can still do it safely)
  const xb = md.lastIndexOf('<div class="xrefBox">');
  if (xb !== -1) {
    const end = findBalancedDivClose(md, xb);
    if (end !== -1) return { kind: "legacy", start: xb, end };
    // fallback naive close if malformed
    const close = md.indexOf("</div>", xb);
    if (close !== -1) return { kind: "legacy", start: xb, end: close + 6 };
  }

  // loose "Next:" div (your older incorrect example)
  const loose = md.lastIndexOf("\n<div");
  if (loose !== -1) {
    const slice = md.slice(loose);
    if (slice.includes("\nNext:") || slice.includes(">Next:") || slice.includes("Next:\n")) {
      const end = findBalancedDivClose(md, loose);
      if (end !== -1) return { kind: "legacy", start: loose, end };
      const close = md.indexOf("</div>", loose);
      if (close !== -1) return { kind: "legacy", start: loose, end: close + 6 };
    }
  }

  return null;
}