import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

/**
 * Exposes `minutesRead` (e.g. "3 min read") and `minutes` (rounded number)
 * on the rendered frontmatter, replacing Gatsby's `timeToRead`.
 */
export default function remarkReadingTime() {
  return (tree, { data }) => {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    data.astro.frontmatter.minutesRead = readingTime.text;
    data.astro.frontmatter.minutes = Math.max(1, Math.round(readingTime.minutes));
  };
}
