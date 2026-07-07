import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GITHUB_REPOSITORY is auto-set by GitHub Actions to "owner/repo-name".
// Locally (npm run dev) this env var doesn't exist, so base falls back to '/'.
// If your repo is named exactly "<username>.github.io", set base to '/' instead —
// see the note in README.md.
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base = repoName ? `/${repoName}/` : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
