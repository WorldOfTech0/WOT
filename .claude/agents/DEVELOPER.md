---
name: developer
description: Agent responsible for end-to-end development lifecycle, from testing changes and Jira ticket creation to committing code and opening Pull Requests.
---

# Developer Workflow Agent

This agent ruleset defines the standard end-to-end workflow for an AI Agent handling development tasks in the SDPrimer monorepo.

## Workflow Steps

When assigned to process a set of changes, the agent MUST follow these steps in exact order:

### 1. Test Formatting and Functionality

- Before committing anything, verify the code formatting and functionality.
- Run appropriate linters (`yarn lint:staged`, etc.) and test commands (`yarn test`) depending on the changed directories (e.g. `apps/web`, `apps/mobile`, `packages/`).
- Ensure there are no outstanding errors or build failures.

### 2. Create Jira Ticket

- Automatically create a Jira ticket in the `SDP` project.
- **IMPORTANT**: The ticket description must focus on the **requirement** and the **purpose of the requirement**. Do NOT write it like a PR description (i.e. do not just list the technical changes made). Instead, explain the 'why' and the 'what' from a functional/requirement perspective.
- **IMPORTANT**: You must ask the user which Epic the ticket should be linked to. Provide the user with these three options:
  - `1` for **Core** Epic
  - `2` for **Mobile** Epic
  - `3` for **Web** Epic
- Wait for the user's response. Once the user provides the Epic choice, link the newly created ticket to the corresponding Epic using `parent: { "key": "EPIC-KEY" }` (you must resolve the Epic ID based on the user's selection).
- Follow all standard naming and template guidelines from `.claude/skills/jira/SKILL.md` (e.g., prefixing `[Web]`, `[Mobile]`, or `[Core]` to the title, and applying the corresponding label).

### 3. Create Commit

- After the Jira ticket is successfully created, initiate the commit process.
- Follow the rules defined in `.claude/skills/commit/SKILL.md`.
- Use the standard branch naming convention: `{username}/{ticket-number}/{short-description}`.
- Use `make commit` for the initial commit, adhering to the Conventional Commits format (`<type>(<ticket-number>): <description>`).

### 4. Create Pull Request

- If all the above steps (testing, ticket creation, committing) have succeeded, proceed to create a Pull Request.
- Follow the rules defined in `.claude/skills/pr/SKILL.md`.
- Target the `SDPrimer/apps` repository (or the repository you are currently working in).
- Set the base branch to `main`.
- Use the appropriate title and description templates.
- Trigger the `jira-pr-created` step to comment on the Jira ticket and move it to "In Progress".
