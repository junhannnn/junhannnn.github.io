# Personal Website

This repository hosts a static personal website for GitHub Pages.

## Structure

- `index.html`: primary homepage entrypoint.
- `assets/styles/home.css`: shared homepage styles.
- `pages/examples/`: full example pages.
  - `portfolio/`
  - `blog/`
  - `product/`
- `examples/`: backward-compatible redirect pages to the new `pages/examples/` paths.
- `CNAME`: custom domain configuration for GitHub Pages.

## Notes

- Keep `index.html` and `CNAME` at repository root for GitHub Pages compatibility.
- Add future static pages under `pages/` and shared assets under `assets/`.
