export default {
    root: './',
    outDir: 'dist',
    base: '/',
    server: {
      port: 3001,
      open: true,
    },
    build: {
      minify: 'terser',
      lib: false,
      rollupOptions: {
        input: {
          main: './public/index.html',
        },
      },
    },
  };