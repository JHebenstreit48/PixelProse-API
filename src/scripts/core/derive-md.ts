import path from "node:path";
import { config } from "@/scripts/config";
import { pascalize, sectionFolderName, topicFolderName } from "@/scripts/core/naming";
import { lastUrlSegment } from "@/scripts/core/md";

export type DerivedMd = {
  sectionCrumb: string;
  topicCrumb: string;
  sectionFolder: string;
  topicFolder: string;
  groupFolders: string[];
  mdBaseName: string;
  mdFsPath: string;
  urlPath: string;
};

function normKey(s: string): string {
  return s
    .replace(/&/g, "and")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function lookupGroupFolderName(groupCrumb: string): string | undefined {
  const want = normKey(groupCrumb);
  const map = config.groupFolderNameMap ?? {};

  for (const [k, v] of Object.entries(map)) {
    if (normKey(k) === want) return v;
  }
  return undefined;
}

function mapGroupFolderName(groupCrumb: string): string {
  const mapped = lookupGroupFolderName(groupCrumb);
  return mapped ?? pascalize(groupCrumb);
}

export function deriveMd(leaf: { urlPath: string; crumbs: string[] }): DerivedMd {
  const [sectionCrumb = "Misc", topicCrumb = "Topic", ...rest] = leaf.crumbs;

  const sectionFolder = sectionFolderName(sectionCrumb);
  const topicFolder = topicFolderName(topicCrumb);

  // folders between topic and leaf (exclude the leaf crumb)
  const groupsRaw = rest.slice(0, -1);
  const groupFolders = groupsRaw.map(mapGroupFolderName);

  // filename from URL segment
  const mdBaseName = pascalize(lastUrlSegment(leaf.urlPath)) || "Page";

  const mdFsPath = path.join(
    process.cwd(),
    config.notesRoot,
    sectionFolder,
    topicFolder,
    ...groupFolders,
    `${mdBaseName}.md`
  );

  return {
    sectionCrumb,
    topicCrumb,
    sectionFolder,
    topicFolder,
    groupFolders,
    mdBaseName,
    mdFsPath,
    urlPath: leaf.urlPath,
  };
}