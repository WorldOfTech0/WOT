# CLAUDE.md

This file provides a high-level entry point for AI assistants working in the **WorldOfTech** repository.

## Overview

WorldOfTech is a premium React-based technical directory for free internet resources.

- **Framework**: React 18.3+ (Vite/Craco)
- **Routing**: React Router v7
- **State Management**: Zustand v5
- **UI Library**: Chakra UI v3
- **Search**: Fuse.js (Modal-based)
- **i18n**: i18next

## 📘 Primary Documentation

For comprehensive technical documentation, architectural decisions, and agent-specific skills, always refer to:

👉 **[AGENT.md](file:///Users/mr.robot/z-stash/WorldOfTech/WOT/AGENT.md)**
👉 **[DESIGN.md](file:///Users/mr.robot/z-stash/WorldOfTech/WOT/DESIGN.md)**

## Essential Commands

These are the most common commands for development:

```bash
yarn install    # Install dependencies
yarn start      # Start local development server
yarn build      # Create production build
yarn test       # Run unit tests (Jest)
yarn cy:open    # Open Cypress for E2E testing
yarn lint       # Run ESLint
yarn healthier  # Format code with Prettier
```

## Antigravity Skills

Advanced agent instructions are modularized in the `.claude/skills/` directory.

- [Commit Workflow](file:///.claude/skills/commit/SKILL.md)
- [Jira Management](file:///.claude/skills/jira/SKILL.md)
- [Pull Request Skill](file:///.claude/skills/pr/SKILL.md)
- [Frontend Design](file:///.claude/skills/frontend-design/SKILL.md)
- [Web Development](file:///.claude/skills/web/SKILL.md)

---
*Note: Do not modify files in `skills/` or `agents/` unless explicitly requested.*
