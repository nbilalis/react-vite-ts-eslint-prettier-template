import react from '@vitejs/plugin-react';

import { reactScopedCssPlugin } from 'rollup-plugin-react-scoped-css';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), reactScopedCssPlugin()],
  base: '',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/variables";`,
      },
    },
  },
});
