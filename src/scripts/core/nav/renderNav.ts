import type { NavTarget } from "@/scripts/core/nav/buildManifest";

function item(href: string, btnText: string, title?: string) {
  // Match the canonical/human format:
  // <a ...>...</a>
  // <div class="xrefTitle">...</div>
  if (!title) {
    return `  <div class="xrefItem">
    <a class="xrefBtn" href="${href}">${btnText}</a>
  </div>`;
  }

  return `  <div class="xrefItem">
    <a class="xrefBtn" href="${href}">${btnText}</a>
    <div class="xrefTitle">${title}</div>
  </div>`;
}

function emptyItem() {
  return `  <div class="xrefItem"></div>`;
}

export function renderNav(back?: NavTarget, next?: NavTarget): string {
  const left = back ? item(back.href, "← Back", back.title) : emptyItem();
  const right = next ? item(next.href, "Next →", next.title) : emptyItem();

  return `<div class="xrefNav">
${left}

${right}
</div>`;
}