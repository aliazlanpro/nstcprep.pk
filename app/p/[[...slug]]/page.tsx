import { source } from "@/lib/source";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
  DocsCategory,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { Authors } from "@/components/authors";
import { GDriveIframe } from "@/components/gdrive-iframe";
import { Quiz } from "@/components/quiz";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { Microscope } from "lucide-react";
import { Calculator } from "lucide-react";
import { Atom } from "lucide-react";
import { Magnet } from "lucide-react";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      tableOfContent={{
        style: "clerk",
        single: false,
        footer: (
          <div className="text-sm text-fd-muted-foreground ">
            {page.data.lastModified || ""}
          </div>
        ),
      }}
      editOnGithub={{
        owner: "aliazlanpro",
        repo: "nstcprep.pk",
        sha: "main",
        // file path, make sure it's valid
        path: `content/pages/${page.file.path}`,
      }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="mb-0">
        {page.data.description}
      </DocsDescription>
      {page.data.authors && <Authors authorSlugs={page.data.authors} />}
      <DocsBody className="mt-8">
        <MDX
          components={{
            ...defaultMdxComponents,
            DocsCategory: () => <DocsCategory page={page} from={source} />,
            GDriveIframe,
            Quiz,
            Accordion,
            Accordions,
            Microscope,
            Calculator,
            Atom,
            Magnet,
          }}
        />
        {page.data.index ? <DocsCategory page={page} from={source} /> : null}
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
