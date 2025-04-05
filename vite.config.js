import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@pages': '/src/pages', // Alias para la carpeta 'pages'
    },
  },
});
