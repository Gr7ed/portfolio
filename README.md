# Getting Started
Install the dependencies and run the project
```
npm install
npm start
```

Head over to https://vitejs.dev/ to learn more about configuring vite

## Deployment

This app uses `BrowserRouter`, so the hosting platform must rewrite unknown
paths to `/index.html`. Configure the equivalent SPA fallback for your host so
direct visits to `/projects/:projectId` work after deployment.

