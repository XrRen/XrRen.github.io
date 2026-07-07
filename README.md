# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## Deploying to GitHub Pages

This project auto-deploys via GitHub Actions (`.github/workflows/deploy.yml`).

1. Push this project to a GitHub repo.
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` — the workflow builds the site and publishes it automatically.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

**One exception:** if your repo is named exactly `<your-username>.github.io` (a user/org
page, not a project page), the site is served from the domain root instead of a subpath.
In that case, open `vite.config.js` and change:
```js
const base = repoName ? `/${repoName}/` : '/'
```
to simply:
```js
const base = '/'
```
