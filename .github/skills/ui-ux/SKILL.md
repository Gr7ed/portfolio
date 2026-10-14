---
name: ui-ux
description: Apply user research, accessibility, visual hierarchy, typography, responsive layout, and color principles when designing or reviewing portfolio interfaces.
---

# UI/UX design skill

Use this skill when a task changes the portfolio's interface, layout, styling, interaction design, or conversion flow.

## Workflow

1. Identify the user goal, primary action, affected viewport sizes, and current component/style patterns.
2. Review white space, alignment, contrast, scale, typography, hierarchy, color meaning, and interaction states before editing.
3. Make the smallest coherent change that improves the experience across desktop and mobile.
4. Validate keyboard and screen-reader behavior, focus states, contrast, reduced-motion behavior, and route/hash navigation.
5. Add or update focused Vitest/Testing Library coverage for changed behavior and run the applicable type-check, test, and build commands.
6. For uncertain product decisions, define a hypothesis and success metric before recommending an Optimizely A/B test or Hotjar instrumentation.

## Design standards

- Maintain clear padding, margin, and section rhythm.
- Keep related content aligned to the same layout edges and grid.
- Meet WCAG 2.2 AA contrast targets: 4.5:1 for normal text and 3:1 for large text, UI components, and graphical objects.
- Prefer responsive `rem`/`em`-based sizing and adaptive layouts over fixed viewport-specific values.
- Use at most two font families and create hierarchy with scale, weight, style, spacing, letter spacing, color, and placement.
- Give each element a clear level of importance; preserve strong visual prominence for primary actions.
- Use color intentionally: green can communicate growth or wealth, while black can communicate luxury or sophistication, but never rely on color alone to convey meaning.
- Consider default, hover, focus, active, disabled, error, and reduced-motion states as part of the design.

## Implementation boundaries

- Follow existing React component boundaries and CSS conventions.
- Reuse existing assets, design tokens, and `useReveal` behavior.
- Keep route and project metadata behavior intact unless the task explicitly changes it.
- Prefer semantic HTML and accessible names over visual-only fixes.
