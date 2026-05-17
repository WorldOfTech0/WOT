# Project Rules

These are the mandatory rules for all development work in the **WorldOfTech** project.

## 1. Documentation Integrity

- **Mandatory Updates**: Whenever any changes are made to the project (new features, refactors, dependency updates), the following files **MUST** be updated to reflect the current state:
  - `README.md` (Root)
  - `CLAUDE.md` (inside `.claude/`)
  - `AGENT.md` (Root)
- **Rationale**: Keeps the codebase self-documenting and ensures AI assistants always have the latest context.

## 2. Testing Requirements

- **New Files**: Every newly added component, hook, or utility file MUST have a corresponding test file (e.g., `__tests__/FileName.test.tsx`).

* **Existing Changes**: Any modification to existing logic MUST be accompanied by updated or new tests to prevent regressions.

- **Verification**: All tests MUST pass locally (`yarn test`) before submitting a Pull Request.

## 3. Sitemap & Search Engine Optimization (SEO)

- **Mandatory Sitemap Re-generation**: Before making any commit or submitting a Pull Request, you **MUST** run the sitemap generator script (`node scripts/generate-sitemap.js`) locally.
- **Verification**: Ensure that the script runs successfully, compiles the categories configuration without errors, dynamically maps all 250+ routes, and updates `public/sitemap.xml` and `public/robots.txt` correctly.

---

_Failure to follow these rules may result in PR rejection._
