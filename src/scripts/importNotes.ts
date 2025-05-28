import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Note from "@/models/notes";
import { connectToDb } from "@/Utility/connection";

const baseDir = path.join(__dirname, "..", "seeds", "Notes");

const loadMarkdownNotes = (dir: string): any[] => {
  const entries: any[] = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      entries.push(...loadMarkdownNotes(fullPath)); // Recursive
    } else if (item.endsWith(".md")) {
      const raw = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(raw);

      // 🛡️ Guard against missing or empty content
      if (!content || content.trim() === "") {
        console.warn(`⚠️ Skipping "${fullPath}" — content is missing or empty.`);
        continue;
      }

      const relativeCategory = path.relative(baseDir, path.dirname(fullPath)).replace(/\\/g, "/");
      const title = data.title || item.replace(".md", "");
      const notePath = `${relativeCategory}/${title}`;

      entries.push({
        title,
        category: data.category || relativeCategory,
        path: notePath,
        content,
      });
    }
  }

  return entries;
};

const seedNotes = async () => {
  await connectToDb();
  const notes = loadMarkdownNotes(baseDir);
  const operations = notes.map(note => ({
    updateOne: {
      filter: { path: note.path },    // Unique identifier
      update: { $set: note },
      upsert: true
    }
  }));
  
  await Note.bulkWrite(operations);
  console.log(`✅ Upserted/updated ${notes.length} notes.`);
  
  // Optional cleanup: remove entries no longer in the file system
  const allPaths = notes.map(note => note.path);
  const deleted = await Note.deleteMany({ path: { $nin: allPaths } });

  console.log(`🧹 Removed ${deleted.deletedCount} stale notes.`);
  
  console.log(`📦 Seeding complete. ${notes.length} upserted, ${deleted.deletedCount} removed.`);
  
  process.exit(0);
};

seedNotes();
