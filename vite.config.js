import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  server: {
    port: 3000,
    open: true
  },
  plugins: [
    {
      name: 'shopify-mock-endpoints',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          // Serve mock product alternate view
          if (req.url.startsWith('/products/') && req.url.includes('view=alternate')) {
            const match = req.url.match(/\/products\/([a-zA-Z0-9_-]+)/);
            if (match) {
              const handle = match[1];
              const filePath = path.join(import.meta.dirname, 'public', 'mock_products', `${handle}.html`);
              if (fs.existsSync(filePath)) {
                res.setHeader('Content-Type', 'text/html; charset=utf-8');
                return res.end(fs.readFileSync(filePath));
              }
            }
          }
          next();
        });
      }
    }
  ]
});
