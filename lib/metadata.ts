import type { Metadata } from "next/types";

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: "https://nstcprep.pk",
      images: "/banner.jpg",
      siteName: "NSTC Preparations",
      type: "website",
      ...override.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      creator: "@AliAzlanReal",
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: "/banner.jpg",
      ...override.twitter,
    },
  };
}

export const baseUrl =
  process.env.NODE_ENV === "development"
    ? new URL("http://localhost:3000")
    : new URL(`https://nstcprep.pk`);
