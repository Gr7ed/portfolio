# Copilot instructions

## Commands

Install dependencies with `npm install`.

- Start the Vite dev server: `npm run dev` (or `npm start`)
- Build for production: `npm run build`
- Preview the production build: `npm run preview`
- Run tests in watch mode: `npm test`
- Run the full test suite once: `npm run test:run`
- Run one test file: `npm run test:run -- src/App.test.tsx`
- Run matching tests by name: `npm run test:run -- -t "project detail"`
- Type-check without emitting files: `npm run typecheck`

There is no lint script configured in `package.json`.

## Architecture

- This is a Vite-powered React 19 + TypeScript app. `src/main.tsx` mounts `App` inside `StrictMode` and `BrowserRouter`, and imports the global stylesheet.
- `src/App.tsx` owns the top-level shell, mobile menu state, hash-based section navigation, and the two application routes:
  - `/` renders the composed home page (`Hero`, `Services`, `About`, `Work`, and `Footer`).
  - `/projects/:projectId` renders `ProjectDetail`.
- `src/data/projects.ts` is the single source of truth for project cards and detail metadata. `Work` maps this data into navigable cards; `ProjectDetail` resolves the route parameter against the same list.
- Components are grouped by responsibility under `src/components/layout`, `src/components/sections`, and `src/components/ui`; page-level route views live under `src/pages`.
- Images are bundled through imports from `src/assets/images` (and `src/assets/logo.jpg`), so project records should reference imported asset URLs rather than source-relative strings.
- `useReveal` centralizes scroll-reveal behavior, including reduced-motion and missing-`IntersectionObserver` fallbacks. Sections that use reveal styling should follow this hook/class pattern.
- Styling is centralized in `src/styles.css`; components primarily apply the established semantic class names rather than introducing component-specific styling systems.

## Conventions

- Use named React components for reusable UI and keep route/page components responsible for navigation and page composition.
- Keep project content in `src/data/projects.ts` and preserve the `Project` shape in `src/types.ts` when adding or editing portfolio entries.
- Use `react-router-dom` navigation (`useNavigate`, `Link`-style hrefs, and route params) instead of manually assigning `window.location`. Home section navigation uses URL hashes such as `/#work`.
- Preserve accessible semantics: interactive cards are buttons, navigation controls expose labels/state, images have meaningful alt text when informative, and tests query roles/names where possible.
- Tests use Vitest with a `jsdom` environment configured in `vitest.config.mjs` and `src/test/setup.ts`. Keep tests near the implementation and use `MemoryRouter` for components that depend on routing.
- Keep the existing formatting/style: double-quoted TypeScript imports and strings, semicolons, trailing commas, strict TypeScript, and no emitted type-check output.
- The deployed site uses `BrowserRouter`; the hosting platform must rewrite unknown paths to `/index.html` so direct `/projects/:projectId` visits work.
