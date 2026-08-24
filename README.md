# portfolio

Static portfolio and writing site built with Astro and MDX. Cloudflare serves the generated files as an assets-only Worker.

## Development

```sh
pnpm install
pnpm dev
```

The production build and local preview commands are:

```sh
pnpm build
pnpm preview
```

## Content

- `src/content/projects/` contains project metadata and detail-page copy.
- `src/content/writing/` contains MDX articles.
- `src/content/colophon.md` contains the terminal-only colophon.

## Terminal

Click the blinking prompt at the bottom of any page to activate the terminal. It supports an allowlisted virtual filesystem through `whoami`, `ls`, and `cat`; it does not execute shell commands or fetch arbitrary URLs.

## Deployment

```sh
pnpm deploy
```

The deploy script builds the static site and publishes `dist/` with Wrangler.
