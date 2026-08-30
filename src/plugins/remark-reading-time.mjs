import { toString } from 'mdast-util-to-string';

/**
 * Reproduces Hugo's `.ReadingTime`, which hugo-coder rendered under each post
 * title and which had no equivalent after the Astro port.
 *
 * Hugo computes it as a ceiling over a fixed rate (hugolib/page__content.go):
 *
 *     readingTime = (wordCount + 211) / 212     // integer division
 *
 * i.e. ceil(wordCount / 212).
 */
const WORDS_PER_MINUTE = 212;

export function remarkReadingTime() {
  return (tree, file) => {
    // Hugo counted words in `.Plain` — the rendered HTML with its tags
    // stripped — so an image contributed nothing. `includeImageAlt` defaults
    // to true here and would count alt text, inflating the count.
    const text = toString(tree, { includeImageAlt: false });
    const words = text.split(/\s+/).filter(Boolean).length;

    file.data.astro.frontmatter.readingTime = Math.ceil(words / WORDS_PER_MINUTE);
  };
}
