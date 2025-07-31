import { defineConfig } from '@vben/vite-config';

export default defineConfig(async () => {
  return {
    application: {},
    vite: {
      server: {
        proxy: {
          '/api': {
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ''),
            // mock代理目标地址
            target: 'http://localhost:5320/api',
            ws: true,
          },
          '/stock-api': {
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/stock-api/, ''),
            // mock代理目标地址
            target: 'http://instock.hongdadata.com',
            timeout: 60000,
            ws: true,
          },
        },
      },
    },
  };
});
