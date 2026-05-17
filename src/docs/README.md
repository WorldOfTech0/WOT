# 📖 Documentation Guides

This directory contains the source markdown files for the **WorldOfTech Documentation Portal**. These files are dynamically fetched and rendered within the application to provide users with high-quality, interactive tool guides.

## 📁 Directory Structure

- `information_tools/`: Specialized guides for various tool categories.

  - `audio-tools/`: Audio editing, production, and system utilities.
  - `video-tools/`: Professional-grade video editing, players, and downloaders.
  - `developer-tools/`: Essential tools for software development, hosting, and learning.
  - `image-tools/`: Image editing, creation, and design resources.
  - `system-tools/`: Hardware diagnostics, OS customization, and system utilities.
  - ... and others like `gaming-tools`, `file-tools`, `internet-tools`, and `social-tools`.

- `information_library/`: Comprehensive resource lists and databases.

  - `ai/`: AI chatbots, writing assistants, and generation tools.
  - `audio/`: Streaming services, tracking, and audio ripping resources.
  - `downloading/`: Software sites, torrent clients, and Usenet guides.
  - `educational/`: Courses, learning platforms, and skill-building sites.
  - `media/`: Subtitle tools, live sports, and media tracking.
  - `mobile/`: Android APKs, emulators, and mobile-specific tools.
  - `privacy-security/`: VPNs, adblocking, and web privacy resources.
  - `miscellaneous/`: Shopping, travel, health, and other useful site indexes.

- `more/`: Dedicated directory for uncategorised or miscellaneous tech archives.
  - `uncategorised/`: Specialised, custom libraries and extra development tools.

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
