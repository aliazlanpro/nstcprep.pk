import { allAuthors, AuthorSlug } from "@/content/authors";
import Image from "next/image";

export function Authors({ authorSlugs }: { authorSlugs: AuthorSlug[] }) {
  return (
    <div className="">
      <h3 className="text-sm font-semibold">
        Author{authorSlugs.length > 1 ? "s" : ""}
      </h3>
      <div className="flex gap-4 items-center flex-wrap mt-3">
        {authorSlugs.map((slug) => {
          const author = allAuthors[slug];
          return (
            <div
              key={slug}
              className="flex items-center gap-2 border p-1.5 bg-fd-card rounded-lg"
            >
              <Image
                src={`/images/authors/${slug}.jpg`}
                alt={author.name}
                width={100}
                height={100}
                className="size-6 rounded-full border"
              />
              <p className="text-sm">{author.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
