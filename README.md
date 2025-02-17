# NSTC Preparations

A comprehensive Next.js application for NSTC Preparations.

## Getting Started

First, clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/nstcprep.pk.git
cd nstcprep.pk
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Documentation built with Fumadocs UI
- MDX content support
- Built-in components for YouTube embeds and quizzes
- SEO optimized with OpenGraph and Twitter cards
- Responsive design

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [Fumadocs UI](https://fumadocs.vercel.app/) - Documentation UI components
- [MDX](https://mdxjs.com/) - Markdown with JSX
- [TailwindCSS](https://tailwindcss.com/) - Styling

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm postinstall` - Run Fumadocs MDX setup

## Contributing

Contributions from NSTC Alumni and other contributors are welcome! Follow these steps to contribute:

### Content Contributions

1. All website content is located in the `content/pages` directory as MDX files
2. You can modify existing content or add new pages through Pull Requests

Note: Each [website page](https://nstcprep.pk) has an "Edit on GitHub" button at the bottom that also links directly to the source MDX file

### First Time Contributors

1. Add your author information to [content/authors.ts](content/authors.ts):

```typescript
export const allAuthorSlugs = ["ali-azlan", "your-slug"] as const;

export const allAuthors = {
  "ali-azlan": { name: "Ali Azlan" },
  "your-slug": { name: "Your Name" },
};
```

2. Use your author slug in the frontmatter of your MDX files:

```md
---
title: Your Page Title
author: ["your-slug"] # or for multiple authors ["ali-azlan", "your-slug"]
---
```

### Development Setup

1. Fork and clone the repository
2. Install dependencies with `pnpm install`
3. Run `pnpm dev` to start local development
4. Make your changes
5. Submit a Pull Request with a clear description

Please ensure your contributions follow our content guidelines and code style. Feel free to open an issue first to discuss major changes.

## License

[MIT License](LICENSE)
