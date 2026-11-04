import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

// Every HTML page must be listed here, otherwise `npm run build`
// only bundles index.html and the other pages (and their CSS) are missing.
const page = (file) => fileURLToPath(new URL(file, import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: page('./index.html'),
        main: page('./main.html'),
        login: page('./login.html'),
        addHike: page('./addHike.html'),
        eachHike: page('./eachHike.html'),
        skeleton: page('./skeleton.html'),
      },
    },
  },
});
