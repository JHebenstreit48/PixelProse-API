import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

marked.setOptions({ async: false });

export type ParsedNote = {
  title: string;
  category: string;
  bodyMd: string;
  bodyHtml: string;
  sourceUpdatedAt: Date; // markdown file mtime
};

export function parseNotes(abs: string, fullPath: string): ParsedNote | null {
  const raw = fs.readFileSync(abs, "utf8");
  const { data, content } = matter(raw);

  if (!content || !content.trim()) return null;

  const title =
    (typeof data?.title === "string" && data.title.trim()) ||
    path.basename(fullPath);

  const category =
    (typeof data?.category === "string" && data.category.trim()) ||
    path.dirname(fullPath).replace(/\\/g, "/");

  const bodyMd = content;
  const bodyHtml = marked.parse(bodyMd) as string;

  const { mtime } = fs.statSync(abs);

  return { title, category, bodyMd, bodyHtml, sourceUpdatedAt: mtime };
}