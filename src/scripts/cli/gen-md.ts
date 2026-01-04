import pages from "@/Navigation/Combined/Core/Pages";
import type { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

import path from "node:path";
import { parseArgs, matchesFilter } from "@/scripts/core/args";
import { flattenNav } from "@/scripts/core/flattenNav";
import { deriveMd } from "@/scripts/core/derive-md";
import { config } from "@/scripts/config";
import { ensureDir, exists, writeText } from "@/scripts/core/fs";
import { matchesWithin } from "../core/within";

function main() {
  const args = parseArgs(process.argv.slice(2));
  const limit = args.limit ?? config.defaultLimit;

  const leaves = flattenNav(pages as unknown as Subpage[]);
  const derived = leaves
    .filter((l) => matchesWithin(args.within, l.crumbs)) // NEW
    .map((l) => deriveMd(l))
    .filter((d) => matchesFilter({ tab: args.tab, topic: args.topic }, d));

  let created = 0;
  let skipped = 0;

  for (const d of derived) {
    if (created >= limit) break;

    if (exists(d.mdFsPath)) {
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
    `gen:md tab=${args.tab ?? "(all)"} topic=${
      args.topic ?? "(all)"
    } dryRun=${!!args.dryRun}`
  );
  console.log(`Created: ${created}`);
  console.log(`Skipped (already existed): ${skipped}`);
  if (created >= limit) console.log(`Stopped early due to --limit ${limit}`);
}

main();