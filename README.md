# Ján Perháč — Academic Portfolio

Personal academic website built with Astro, TypeScript, and Tailwind CSS v4. Content is written in English and maintained in Markdown.

## Development

Requires Node.js **22.12.0 or newer**.

```bash
npm ci
npm run dev
```

The development server runs at `http://localhost:4321`.

| Command | Purpose |
| --- | --- |
| `npm run build` | Build the site into `dist/` |
| `npm run preview` | Preview the production build locally |

## Content and configuration

| Location | Purpose |
| --- | --- |
| `src/content/bio.md`, `src/content/cv.md` | Biography and CV |
| `src/content/` | Projects, teaching, talks, publications, and posts |
| `src/content.config.ts` | Content schemas and required frontmatter |
| `src/config/site.ts` | Site metadata, themes, and analytics |
| `src/config/pages.ts` | Page titles and section settings |
| `src/config/navigation.ts` | Navigation links |
| `src/config/social.ts` | Contact and social links |
| `src/config/themes.ts` | Theme palettes |
| `src/styles/global.css` | Global styles |
| `public/` | Static assets |

See [CONTENT-SOURCES.md](CONTENT-SOURCES.md) for content sources and remaining details to fill in. Original template content is archived in `example_contents/shannon/`.

## Deployment

Before publishing, set the public URL in both `astro.config.mjs` (`site`) and `src/config/site.ts` (`SITE.website`). Adjust Astro's `base` if deploying under a subpath.

Run `npm run build` and deploy the contents of `dist/` to a static host.

## Attribution

Based on [Academic Portfolio Astro](https://github.com/rubzip/academic-portfolio-astro). See [LICENSE](LICENSE).
