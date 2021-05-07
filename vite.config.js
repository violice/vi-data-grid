import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import * as path from 'path';

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [reactRefresh()],
// })

module.exports = {
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/DataGrid/index.js'),
      name: 'vi-data-grid',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    optimizeDeps: {
      include: ['clsx', 'prop-types', 'immer', '@popperjs/core', 'react-popper'],
    },
  },
};
