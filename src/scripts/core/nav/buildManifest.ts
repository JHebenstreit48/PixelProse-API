export type BoundaryMode = "next-topic" | "stop";
export type TitleKind = "same-group" | "cross-group" | "cross-topic";

export type NavTarget = {
  href: string;
  title: string; // SHORT label only
  kind: TitleKind;
};

export type ManifestEntry = {
  sectionCrumb: string; // tab
  topicCrumb: string;   // topic
  crumbs: string[];
  urlPath: string;
  mdFsPath: string;
  pageTitle: string;
  back?: NavTarget;
  next?: NavTarget;
};

type LeafInput = {
  urlPath: string;
  crumbs: string[];
  derived: { mdFsPath: string };
};

function groupLabel(crumbs: string[]): string {
  const groups = crumbs.slice(2, -1);
  return groups.at(-1) ?? "";
}

function topicLabel(crumbs: string[]): string {
  return crumbs[1] ?? "";
}

function leafLabel(crumbs: string[]): string {
  return crumbs.at(-1) ?? "";
}

function makeShortTitle(opts: {
  from: LeafInput;
  to: LeafInput;
}): { title: string; kind: TitleKind } {
  const fromTopic = topicLabel(opts.from.crumbs);
  const toTopic = topicLabel(opts.to.crumbs);
  const fromGroup = groupLabel(opts.from.crumbs);
  const toGroup = groupLabel(opts.to.crumbs);
  const toLeaf = leafLabel(opts.to.crumbs);

  // If crossing topics, show only the topic name (short)
  if (fromTopic !== toTopic) {
    return { title: toTopic || toLeaf, kind: "cross-topic" };
  }

  // If crossing groups, show only the group (short)
  if (fromGroup && toGroup && fromGroup !== toGroup) {
    return { title: toGroup || toLeaf, kind: "cross-group" };
  }

  // Same group/topic: show only the destination leaf
  return { title: toLeaf, kind: "same-group" };
}

export function buildManifest(
  leaves: LeafInput[],
  opts: { boundary: BoundaryMode }
): ManifestEntry[] {
  const out: ManifestEntry[] = [];

  for (let i = 0; i < leaves.length; i++) {
    const cur = leaves[i];
    const prev = leaves[i - 1];
    const next = leaves[i + 1];

    const [sectionCrumb = "Misc", topicCrumb = "Topic"] = cur.crumbs;

    const entry: ManifestEntry = {
      sectionCrumb,
      topicCrumb,
      crumbs: cur.crumbs,
      urlPath: cur.urlPath,
      mdFsPath: cur.derived.mdFsPath,
      pageTitle: leafLabel(cur.crumbs),
    };

    if (prev) {
      const t = makeShortTitle({ from: cur, to: prev });
      if (opts.boundary === "next-topic" || topicLabel(prev.crumbs) === topicLabel(cur.crumbs)) {
        entry.back = { href: prev.urlPath, title: t.title, kind: t.kind };
      }
    }

    if (next) {
      const t = makeShortTitle({ from: cur, to: next });
      if (opts.boundary === "next-topic" || topicLabel(next.crumbs) === topicLabel(cur.crumbs)) {
        entry.next = { href: next.urlPath, title: t.title, kind: t.kind };
      }
    }

    out.push(entry);
  }

  return out;
}