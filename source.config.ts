import {
  defineDocs,
  defineConfig,
  frontmatterSchema,
} from "fumadocs-mdx/config";
import { z } from "zod";
import { allAuthorSlugs } from "./content/authors";

export const pages = defineDocs({
  dir: "content/pages",
  docs: {
    schema: frontmatterSchema.extend({
      authors: z.array(z.enum(allAuthorSlugs)).optional(),
      index: z.boolean().optional(),
    }),
  },
});

export default defineConfig({
  lastModifiedTime: "git",
  mdxOptions: {
    // MDX options
  },
});
