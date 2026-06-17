/**
 * Recreates `gatsby-remark-images`' `showCaptions` behaviour: a standalone
 * image whose markdown `title` is set (e.g. `![alt](src 'caption')`) gets
 * wrapped in a <figure> with the title rendered as a <figcaption>.
 */
function isWhitespace(node) {
  return node.type === 'text' && node.value.trim() === '';
}

function onlyImageChild(node) {
  if (node.type !== 'element' || node.tagName !== 'p') return null;
  const meaningful = node.children.filter((child) => !isWhitespace(child));
  if (meaningful.length !== 1) return null;
  const [child] = meaningful;
  if (child.type === 'element' && child.tagName === 'img' && child.properties && child.properties.title) {
    return child;
  }
  return null;
}

function walk(node) {
  if (!node || !Array.isArray(node.children)) return;

  for (const child of node.children) {
    const img = onlyImageChild(child);

    if (img) {
      const caption = String(img.properties.title);
      // Drop the title attribute so it isn't shown twice (as tooltip + caption)
      delete img.properties.title;

      child.tagName = 'figure';
      child.properties = {};
      child.children = [
        img,
        {
          type: 'element',
          tagName: 'figcaption',
          properties: {},
          children: [{ type: 'text', value: caption }],
        },
      ];
    } else {
      walk(child);
    }
  }
}

export default function rehypeFigureCaptions() {
  return (tree) => walk(tree);
}
