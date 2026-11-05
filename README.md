# Getting Started
Install the dependencies and run the project
```
npm install
npm start
```

The development server runs at http://localhost:5300. Port 5300 is configured
explicitly to avoid Windows-reserved port ranges that can cause Vite's default
port fallback to fail with an `EACCES` error.

Head over to https://vitejs.dev/ to learn more about configuring vite

## Deployment

This app uses `BrowserRouter`, so the hosting platform must rewrite unknown
paths to `/index.html`. Configure the equivalent SPA fallback for your host so
direct visits to `/projects/:projectId` work after deployment.

For Netlify, the included `public/_redirects` file configures this rewrite
automatically.

For Cloudflare Workers, use the included `wrangler.toml` configuration:

```bash
npm run build
npx wrangler deploy
```

The `[assets]` section must point to `./dist`; leaving it empty causes
Cloudflare to report that the required `directory` property is missing.
