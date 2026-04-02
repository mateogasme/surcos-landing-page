# AGENTS.md - Coding Guidelines for Surcos Web

## Overview

This is an Astro + TypeScript + Tailwind CSS v4 project. The codebase uses Spanish for content but code must be in English.

---

## Commands

```bash
# Development
npm run dev              # Start dev server at localhost:4321
npm run build            # Production build to ./dist
npm run preview          # Preview production build locally

# Code quality
npm run lint             # Run ESLint
npm run format           # Run Prettier (write changes)
npm run format -- --check  # Check formatting without writing
npm run astro check      # Run Astro type checking

# There are no tests configured - skip test-related commands
```

---

## TypeScript Configuration

- Uses `astro/tsconfigs/strict` as base (strict mode enabled)
- Path alias: `@/*` maps to `src/*`
- Example: `import Button from '@/components/Button.astro'`

---

## Code Style

### Formatting (Prettier)
- Print width: 100
- Tab width: 2 spaces
- No semicolons
- Single quotes
- Trailing commas: all
- Bracket spacing: enabled
- Astro files use `prettier-plugin-astro`

### Linting (ESLint)
- `no-console`: warn (logs are allowed but flagged)
- `no-unused-vars`: off (TypeScript rule enabled)
- `@typescript-eslint/no-unused-vars`: error
- `eqeqeq`: error (strict equality required)
- `no-var`: error (const/let only)

### Naming Conventions
- Components: PascalCase (`HeroSection.astro`, `Card.tsx`)
- Variables/functions: camelCase
- Constants: UPPER_SNAKE_CASE
- Files: kebab-case for non-component files
- Astro components: PascalCase

### Imports
- Use path aliases: `import x from '@/components/x'`
- Group imports: external → path aliases → relative
- No barrel files (index.ts) - import directly

### Error Handling
- Use try/catch for async operations
- Return typed results, avoid throwing in non-exception flows
- No bare `console.log` - use sparingly with comment explaining why

---

## Astro-Specific Guidelines

### Component Structure
```astro
---
// Frontmatter: imports, interfaces, logic
interface Props {
  title: string;
}
const { title } = Astro.props;
---

<!-- Template with scoped styles -->
<h1>{title}</h1>

<style>
  h1 {
    color: var(--color-primary);
  }
</style>
```

### Passing Data to Components
- Use typed interfaces for Props
- Destructure props in frontmatter
- Use `slot` for content projection

### Client Directives
- Only add `client:*` when interactivity is needed
- Prefer `client:visible` over `client:load` for below-fold content
- Default to server-rendered (no directive) for static content

---

## Tailwind CSS v4

- Uses Tailwind v4 with `@tailwindcss/vite` plugin
- No `tailwind.config.js` needed - uses CSS-first configuration
- Custom properties defined in global CSS files
- Use `@theme` block in CSS for custom tokens

### Example
```css
@theme {
  --color-primary: oklch(0.7 0.2 250);
  --font-display: 'Onest', sans-serif;
}
```

---

## UI/UX Guidelines (from emil-design-eng skill)

### Animation Principles
- UI animations should stay under 300ms
- Use `ease-out` for entering elements (responsive feel)
- Never use `ease-in` for UI - feels sluggish
- Custom easing: `cubic-bezier(0.23, 1, 0.32, 1)`
- Avoid `transition: all` - specify exact properties
- Prefer CSS transitions over keyframes for interruptible UI

### Button Interactions
- Add `transform: scale(0.97)` on `:active` for press feedback
- Use 160ms duration for button transitions

### Entry Animations
- Never animate from `scale(0)` - looks unnatural
- Start from `scale(0.95)` with `opacity: 0`
- Use `@starting-style` for modern CSS entry animations

### Accessibility
- Always respect `prefers-reduced-motion`
- Gate hover animations: `@media (hover: hover) and (pointer: fine)`
- Popovers should use `transform-origin` pointing to trigger

---

## Project Structure

```
src/
├── assets/          # Static assets (images, fonts)
├── components/      # Astro components
├── data/            # Static data files
├── i18n/            # Internationalization
├── layouts/         # Page layouts
├── pages/           # Route pages
└── styles/         # Global CSS
```

---

## Tips for AI Agents

1. Before adding any animation, check frequency: 100+ times/day = no animation
2. Use `translateY(100%)` over pixel values for position-based animations
3. Test animations in slow motion before finishing
4. For UI components, default to server rendering - add interactivity only when needed
5. Keep bundle size small - only import what you need from libraries
6. Follow Astro's "Islands Architecture" - hydrate only interactive parts