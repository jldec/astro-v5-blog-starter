---
date: '2024-12-01'
title: 'My First Blog Post'
image:
  src: '../images/birch-trees.webp'
---

## Markdown is

- a lightweight markup language
- for decorating plain text
- with things like headings, lists, links, and blockquotes
- making minimal assumptions about formatting.

#### Here is an inline image:

![sunset](../images/sunset-cambridge.jpg)

### src/content/blog/first-post.md

```markdown
---
date: '2024-12-01'
title: 'My First Blog Post'
image:
  src: '../images/birch-trees.webp'
---

## Markdown is

- a lightweight markup language
- for decorating plain text
- with things like headings, lists, links, and blockquotes
- making minimal assumptions about formatting.

#### Here is an inline image:

![sunset](../images/sunset-cambridge.jpg)
```

### HTML

```html
<img
  src="/_astro/birch-trees.DrRha0ED_9bfrU.webp"
  alt=""
  width="2016"
  height="955"
  loading="lazy"
  decoding="async"
  class="w-full h-60 object-cover object-bottom"
/>
<article class="prose mx-auto p-4">
  <h1>My First Blog Post</h1>
  <a href="/">&lt;&lt; Back</a>
  <h2 id="markdown-is">Markdown is</h2>
  <ul>
    <li>a lightweight markup language</li>
    <li>for decorating plain text</li>
    <li>with things like headings, lists, links, and blockquotes</li>
    <li>making minimal assumptions about formatting.</li>
  </ul>
  <h4 id="here-is-an-inline-image">Here is an inline image:</h4>
  <p>
    <img
      alt="sunset"
      width="1343"
      height="683"
      loading="lazy"
      decoding="async"
      src="/_astro/sunset-cambridge.7ZAluiBF_15WAVg.webp"
    />
  </p>
</article>
```
