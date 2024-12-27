# Minimal Astro v5 Blog starter
https://astro-v5-blog-starter.pages.dev/

![Screenshot 2024-12-27 at 22 26 06](https://github.com/user-attachments/assets/37de9c8c-4a82-437b-8682-92a6eeb7e382)

## Includes
- Blog with Markdown support
- Tailwind CSS
- Image optimization with `<Image>`

## 🚀 Project Structure
```text
├── README.md
├── astro.config.mjs
├── package.json
├── public
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
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
│   │   ├── blog
│   │   │   └── [id].astro
│   │   └── index.astro
│   └── styles
│       └── global.css
├── tailwind.config.mjs
└── tsconfig.json
```

## 🧞 Command
| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Installs dependencies                            |
| `pnpm dev`                | Starts local dev server at `localhost:4321`      |
| `pnpm build`              | Build your production site to `./dist/`          |
| `pnpm preview`            | Preview your build locally, before deploying     |

## 👀 Want to learn more?
Read the [Astro docs](https://docs.astro.build) or jump into the [Astro Discord](https://astro.build/chat).
