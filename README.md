# Minimal Astro v5 Blog starter
- blog writeup https://jldec.me/blog/astro-v5-blog-starter
- preview https://astro-v5-blog-starter.jldec.me/
- screenshot
  ![Screenshot 2024-12-30 at 13 39 09](https://github.com/user-attachments/assets/a805e393-0b1c-4755-bb8a-1a321ffeed82)


### Features
- Image optimization with `<Image>`
- Tailwind CSS
- Blog authoring with Markdown

### Files
```text
├── LICENSE
├── README.md
├── astro.config.mjs
├── package.json
├── public
│   ├── _headers
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── AstroLogo.astro
│   ├── content
│   │   ├── blog
│   │   │   ├── 2nd-post.md
│   │   │   └── first-post.md
│   │   └── images
│   │       ├── birch-trees.webp
│   │       └── sunset-cambridge.jpg
│   ├── content.config.ts
│   ├── layouts
│   │   └── Layout.astro
│   ├── pages
│   │   ├── 404.astro
│   │   ├── blog
│   │   │   └── [id].astro
│   │   └── index.astro
│   └── styles
│       └── global.css
├── tailwind.config.mjs
├── tsconfig.json
└── wrangler.toml
```

### Usage
| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Installs dependencies                            |
| `pnpm dev`                | Starts local dev server at `localhost:4321`      |
| `pnpm build`              | Build your production site to `./dist/`          |
| `pnpm preview`            | Preview your build locally, before deploying     |


### Deploy to Cloudflare Pages
Cloudflare Pages will auto-build and republish on every commit if you [link to your git repo](https://developers.cloudflare.com/pages/get-started/git-integration/).

Alternatively, you can push builds directly from your local machine using Wrangler.
- Modify the name in `wrangler.toml` to suit your project
- `pnpm wrangler login` - authenticates with Cloudflare (one time)
- `pnpm ship` - runs astro build && wrangler pages deploy

> [!TIP]
> Set the site name in `astro.config` to generate canonical URLs.

### To learn more
- [Astro docs](https://docs.astro.build) | [Astro Discord](https://astro.build/chat).
- [Cloudflare Pages docs](https://developers.cloudflare.com/pages/get-started/git-integration/) | [Cloudflare Discord](https://discord.cloudflare.com/)

---
Copyright (c) 2024-present, Jürgen Leschner (@jldec)
MIT License
