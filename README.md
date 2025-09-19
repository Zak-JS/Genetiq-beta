# Theming & Internationalization Implementation

## Architecture Decisions

### 1. Theming — React Context (not Redux)

For theme management I chose **React Context** over **Redux Toolkit**. Your
Redux store currently handles minimal state (primarily category selection), and
extending it for theming would introduce unnecessary boilerplate for what is
essentially a simple UI preference. Multiple contexts are already present in the
codebase (`CameraContext`, `ModelTransitionContext`), indicating Context is your
preferred pattern for UI state.

**Recommendation:** Given the limited complexity of your state, I'd suggest
gradually migrating away from Redux unless there's a compelling cross-cutting
need to keep it. A modern stack typically benefits more from specialized tools:
**React Query** for server state and **Context** for client-side UI state,
rather than Redux's one-size-fits-all model.

### 2. Styling — CSS Custom Properties (CSS variables)

Since no UI framework or opinionated styling system is in use, **CSS Custom
Properties** were the most appropriate choice. They provide maximum flexibility
without framework dependencies, align with web standards, and avoid the runtime
overhead of JavaScript-driven style updates. This approach also future-proofs
theming: it allows for native `prefers-color-scheme` integration, multiple theme
variants via `[data-theme]`, and easy extension into a design token pipeline or
style dictionary workflow.

### 3. Internationalization — react-i18next

While I prefer to avoid introducing new dependencies, internationalization is a
clear requirement and **react-i18next** is the established standard. I
implemented a complete i18n setup with English and French, including browser
language detection, localStorage persistence, and integration with the theme
selector. For proof of concept, I translated navigation, dashboard widgets, and
selector interfaces.

### 4. Organization — File Structure

I introduced a dedicated `theme.scss` separate from `Global.scss` to isolate
theme variables from base styles. This separation improves maintainability and
creates a scalable foundation for future theme additions.

### 5. Tooling — ESLint & Module Type Alignment

The ESLint configuration had been upgraded to the modern flat config with ES
module imports, but `package.json` still declared `"type": "commonjs"`. This
mismatch caused Node.js to expect `require()` while encountering `import`. I
updated `"type": "module"` to resolve the inconsistency.

**Benefits:**

- **Tooling alignment:** The project already uses ES module-based tooling (Vite,
  TypeScript, React)
- **Future-proofing:** ES modules are the JavaScript standard and the direction
  of the ecosystem
- **Consistency:** Allows ESLint flat config to work without file-extension
  workarounds or syntax conversions
- **Minimal impact:** The codebase is TypeScript-first (`.ts`/`.tsx`), so this
  change has negligible effect on existing code

## Results

- Production-ready theming system with 4 themes (Light, Dark, Ocean Blue, Forest
  Green)
- Complete bilingual implementation (English/French) with persistent preferences
- Framework-agnostic implementation maintaining maximum architectural
  flexibility
- CSS data attributes approach for theme color previews without JavaScript color
  duplication
- Resolved linting pipeline compatibility issues
