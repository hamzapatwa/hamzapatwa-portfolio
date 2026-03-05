# Hamza Patwa — Portfolio

A fast, fully-animated personal portfolio. No build step, no framework, no dependencies — just four files.

## Files

| File | Purpose |
|---|---|
| `config.js` | **Edit this to customize everything** — content, colors, links |
| `index.html` | Static shell; loads libraries and the four files |
| `main.js` | Renders all sections from `CONFIG`; GSAP + Lenis animations |
| `styles.css` | All layout and styling; colors driven by CSS vars set in `config.js` |

## Customization

Open `config.js` — it's the only file you ever need to touch:

- **Colors** → `CONFIG.theme`
- **Content** (name, bio, projects, experience…) → the relevant section objects
- **SEO** (title, meta description) → `CONFIG.seo`
- **Social links / resume URL** → `CONFIG.socials`, `CONFIG.resumeUrl`

## Resume PDF

Place your resume at the root as `hamzaresume.pdf` (or update `CONFIG.resumeUrl` in `config.js` to any path/URL).

## Running Locally

No install needed. Open `index.html` directly in a browser, or serve it with any static file server:

```bash
# Python
python3 -m http.server 3000

# Node (npx)
npx serve .
```

## Deployment

Drop all four files (plus `hamzaresume.pdf`) into any static host — Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.

## Libraries (CDN, no install)

- [GSAP 3 + ScrollTrigger](https://greensock.com/gsap/) — animations
- [Lenis](https://lenis.darkroom.engineering/) — smooth scroll
- [Bebas Neue + DM Sans](https://fonts.google.com/) — typography

## License

MIT
