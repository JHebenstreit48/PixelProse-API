import path from "path";

// IMPORTANT: This must match the old script exactly.
// Old script did: path.join(__dirname, "..", "seeds", "Notes")
// where __dirname was the directory containing importNotes.ts (src/scripts).
export function getBaseDir(importNotesDir: string) {
  return path.join(importNotesDir, "..", "seeds", "Notes");
}

export function toFullPath(baseDir: string, abs: string): string {
  return path
    .relative(baseDir, abs)
    .replace(/\\/g, "/")
    .replace(/\.md$/i, "");
}

export function docIdFor(siteId: string, fullPath: string): string {
  return `${siteId}:${fullPath.replace(/\//g, "__")}`;
}