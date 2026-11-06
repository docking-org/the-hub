import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
   allowedHosts: ['localhost', 'docking.org'],
   port: 8000 },
  build: { outDir: 'build' }, // keeps CRA's output folder, so the Dockerfile/CI still work
});
