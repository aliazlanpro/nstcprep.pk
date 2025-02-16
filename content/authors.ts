export const allAuthorSlugs = ["ali-azlan"] as const;
export type AuthorSlug = (typeof allAuthorSlugs)[number];

export const allAuthors: Record<AuthorSlug, { name: string }> = {
  "ali-azlan": {
    name: "Ali Azlan",
  },
};
