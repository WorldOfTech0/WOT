---
name: commit
description: Manage Conventional Commits, branch naming conventions, and interactive commit workflows using the project's standardized makefile commands.
trigger: /commit
---

# Commit Command

This file provides guidance for using Claude Code to commit changes following the project's Commit Workflow.

> [!IMPORTANT]
> You MUST always use `make commit` to initiate a commit. This ensures all commits follow the conventional commit standard.

## Commit Workflow

1. Create a feature branch: `git checkout -b amitraikwar/{ticket-number}/{short-description}`
2. Stage your changes: `git add <files>`
3. Create initial commit: `make commit` (opens interactive conventional commit prompt)
4. Amend with detailed message: `git commit --amend` to add requirements and detailed descriptions of changes
5. Amend with detailed message: `git commit --amend` to add requirements and detailed descriptions of changes.

## Branch Naming

All feature and fix branches MUST follow this naming pattern:

`amitraikwar/{ticket-number}/{short-description}`

**Example:**
`amitraikwar/WOT-18/update-branding`

## Commit Message Format

> [!IMPORTANT]
> Always use `make commit` for the initial commit. DO NOT use `git commit -m`.

When using Claude Code to commit changes:

- For initial commit with conventional commit format: Use the `/commit` skill or run `make commit`
- For amending with detailed description: Use `git commit --amend` via bash tool
- Always follow the conventional commits format: `<type>(<ticket-number>): <description>`

## Examples

### Initial Commit

To provide all inputs in one go (recommended for AI agents):

```bash
# Pattern: printf "tag_index\nscope\ntitle\nbody\n\n" | make commit
printf "2\nWOT-19\nadd branding and skills\nAdd WorldOfTech branding.\n\n" | make commit
```

### Initial Commit (Interactive)

```bash
git add src/components/NewFeature.tsx
make commit
# Select type: feat, fix, etc.
# Enter ticket number as scope (e.g. WOT-19)
# Enter brief description
```

### Amend Commit

```bash
git commit --amend
# Edit the commit message to add:
# - Detailed description of changes
# - Requirements addressed
# - Any breaking changes or special notes
```

## Best Practices

- Keep subject line under 50 characters
- Use body to explain "why" not just "what"
- Reference related issues if applicable
- Ensure commit passes linting and tests before pushing
