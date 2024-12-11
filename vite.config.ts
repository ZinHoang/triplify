import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    logOverride: {
      'react-is-declared-but-its-value-is-never-read': 'silent', // suppress React unused import warnings for Netlify deployment
    },
  },
});
