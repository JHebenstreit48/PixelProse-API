import fs from "fs";
import path from "path";
import { toFullPath } from "@/scripts/notes/paths";

export type ExportedNote = {
  fullPath: string;
  title: string;
  category: string;
  bodyMd: string;
};

export type SitemapEntry = {
  path: string;
  title: string;
  category: string;
};

export async function exportContentJson(
  files: string[],
  baseDir: string,
  outPath: string = path.join(process.cwd(), "content.json")
): Promise<void> {
  const content: Record<string, ExportedNote> = {};
  const sitemap: SitemapEntry[] = [];

  for (const abs of files) {
    const fullPath = toFullPath(baseDir, abs);

    try {
      const raw = fs.readFileSync(abs, "utf8");
      const matter = (await import("gray-matter")).default;
      const { data, content: body } = matter(raw);

      if (!body || !body.trim()) continue;

      const title =
        (typeof data?.title === "string" && data.title.trim()) ||
        path.basename(fullPath);

      const category =
        (typeof data?.category === "string" && data.category.trim()) ||
        path.dirname(fullPath).replace(/\\/g, "/");

      content[fullPath] = {
        fullPath,
        title,
        category,
        bodyMd: body,
      };

      sitemap.push({ path: fullPath, title, category });

    } catch (err) {
      console.warn(`⚠️ Export skipped: ${fullPath}`, err);
    }
  }

  // Write content.json
  fs.writeFileSync(outPath, JSON.stringify(content, null, 2), "utf8");
  console.log(`\n📦 Exported ${Object.keys(content).length} notes → ${outPath}`);

  // Write sitemap.json alongside content.json
  const sitemapPath = path.join(path.dirname(outPath), "sitemap.json");
  fs.writeFileSync(sitemapPath, JSON.stringify(sitemap, null, 2), "utf8");
  console.log(`🗺️  Sitemap written → ${sitemapPath}`);
}