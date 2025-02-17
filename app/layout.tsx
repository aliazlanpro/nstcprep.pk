import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/icons";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseUrl, createMetadata } from "@/lib/metadata";
import { Viewport } from "next";

export const metadata = createMetadata({
  title: {
    template: "%s | NSTC Preparations",
    default: "NSTC Preparations",
  },
  description: "Prepare for NSTC with our free resources.",
  metadataBase: baseUrl,
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
    { media: "(prefers-color-scheme: light)", color: "#fff" },
  ],
};

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          search={{
            options: {
              type: "static",
            },
          }}
        >
          <DocsLayout
            tree={source.pageTree}
            {...baseOptions}
            links={[
              {
                type: "icon",
                url: "https://instagram.com/nstcprep",
                text: "Instagram",
                icon: <InstagramIcon />,
              },
              {
                type: "icon",
                url: "https://facebook.com/nstcprep",
                text: "Facebook",
                icon: <FacebookIcon />,
              },
              {
                type: "icon",
                url: "https://x.com/nstcprep",
                text: "X",
                icon: <XIcon />,
              },
              {
                type: "icon",
                url: "https://www.linkedin.com/company/nstcprep",
                text: "LinkedIn",
                icon: <LinkedInIcon />,
              },
              // {
              //   type: "icon",
              //   url: "https://www.youtube.com/@nstcprep",
              //   text: "Youtube",
              //   icon: <YoutubeIcon />,
              // },
              {
                type: "icon",
                url: "https://github.com/aliazlanpro/nstcprep.pk",
                text: "Github",
                icon: (
                  <svg role="img" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                ),
                external: true,
              },
            ]}
          >
            {children}
          </DocsLayout>
          <div className=" border-t bg-fd-card w-full">
            <div className="px-4 md:px-6 py-4  xl:mx-auto  prose text-sm">
              Developed with ❤️ by{" "}
              <a href="https://aliazlan.me" target="_blank">
                Ali Azlan
              </a>
            </div>
          </div>
        </RootProvider>
      </body>
    </html>
  );
}
