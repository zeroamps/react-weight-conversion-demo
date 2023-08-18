import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/react-weight-conversion-demo/',
  build: {
    outDir: 'docs'
  },
  plugins: [react()]
});
