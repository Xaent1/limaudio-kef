import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // На проде (GitHub Pages) база — /limaudio-kef/, в dev — корень
  base: command === 'build' ? '/limaudio-kef/' : '/',
}))
