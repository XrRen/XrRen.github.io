import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// This repo is a GitHub user/org page (named "<username>.github.io"),
// which is served from the domain root — so base is always '/'.
const base = '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
