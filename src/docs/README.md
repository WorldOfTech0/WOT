# 📖 Documentation Guides

This directory contains the source markdown files for the **WorldOfTech Documentation Portal**. These files are dynamically fetched and rendered within the application to provide users with high-quality, interactive tool guides.

## 📁 Directory Structure

- `tools/`: Contains specialized guides for various tool categories.
  - `audio_tools.md`: Curated audio editing and production tools.
  - `video_tools.md`: Professional-grade video editing and processing software.
  - `developer_tools.md`: Essential tools for software development and engineering.
  - ... and other category-specific guides.

## ✍️ Contributing New Guides

To add a new tool guide or update an existing one, follow these steps:

1. **Create/Edit Markdown File**: Add a new `.md` file in the appropriate subfolder (e.g., `tools/`).
2. **Formatting**: Use standard Markdown syntax. The `MdPreview` component supports:
   - Nested headings (H1 to H6)
   - Code blocks with syntax highlighting
   - Interactive link previews
   - Tables and lists
3. **Internal Links**: Use relative paths if you need to link to other documentation files.
4. **Tool Metadata**: Ensure that the corresponding entry in `src/data/categories/subcategories.ts` is updated to point to the new markdown file.

## 🚀 Dynamic Rendering

The content is rendered using the `@uiw/react-markdown-preview` library with custom styling to match the WOT violet aesthetic. The `TableOfContents` component automatically extracts headings from these files to provide sticky navigation.

---

_Help us build the most comprehensive free tool catalog on Earth._
