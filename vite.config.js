import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
   allowedHosts: ['epyc-a40', 'localhost'],
   port: 5030 },
  build: { outDir: 'build' }, // keeps CRA's output folder, so the Dockerfile/CI still work
});
