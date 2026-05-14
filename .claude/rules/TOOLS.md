# Tool & CLI Preferences

To ensure maximum efficiency and consistency, follow these tool-specific preferences when interacting with the project via terminal.

## 1. Content Searching

- **Prefer `git grep`** over standard `grep` or `rg` (ripgrep) for searching file contents.
- **Rationale**: `git grep` is optimized for git repositories, faster in large codebases, and automatically respects `.gitignore` rules.

## 2. File Discovery

- **Prefer `git ls-files`** over `find` for listing or finding files in the project.
- **Rationale**: It only lists tracked files, avoiding `node_modules` or build artifacts without complex exclusion flags.

---
*Optimizing for speed and repository context.*
