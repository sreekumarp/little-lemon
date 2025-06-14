import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,          // ✅ allows expect() globally
    environment: 'jsdom',   // ✅ enables DOM
    setupFiles: './tests/setup.js',  // ✅ runs your jest-dom once
  },
});
