import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Future-tech-club-website/',  
  build: {
    outDir: 'dist',
  },
  server: {
    historyApiFallback: true,
  },
});
