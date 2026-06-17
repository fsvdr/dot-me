/**
 * Ports the custom inline-code marker that the old `gatsby-remark-vscode`
 * setup used: `` `js ·· someCode` `` renders the text after the `··` marker as
 * inline code (the part before the marker was a language hint). We keep the
 * language as a class so it can be styled, and tag everything with
 * `inline-code` to match the original look.
 */
const MARKER = '··'; // "··"

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function walk(node) {
  if (!node || !Array.isArray(node.children)) return;

  node.children = node.children.map((child) => {
    if (child.type === 'inlineCode' && child.value.includes(MARKER)) {
      const markerIndex = child.value.indexOf(MARKER);
      const lang = child.value.slice(0, markerIndex).trim();
      const code = child.value.slice(markerIndex + MARKER.length).trim();
      const langClass = lang ? ` language-${lang}` : '';

      return {
        type: 'html',
        value: `<code class="inline-code${langClass}">${escapeHtml(code)}</code>`,
      };
    }

    walk(child);
    return child;
  });
}

export default function remarkInlineCode() {
  return (tree) => walk(tree);
}
