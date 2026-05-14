# Contributing to WorldOfTech

First off, thanks for taking the time to contribute! ❤️

All types of contributions are encouraged and valued. See the [Table of Contents](#table-of-contents) for different ways to help and details about how this project handles them. Please make sure to read the relevant section before making your contribution. It will make it a lot easier for us maintainers and smooth out the experience for all involved. The community looks forward to your contributions. 🎉

> And if you like the project, but just don't have time to contribute, that's fine. There are other easy ways to support the project and show your appreciation, which we would also be very happy about:
>
> - Star the project
> - Tweet about it
> - Refer this project in your project's readme
> - Mention the project at local meetups and tell your friends/colleagues

<!-- omit in toc -->

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [I Have a Question](#i-have-a-question)
- [I Want To Contribute](#i-want-to-contribute)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)
- [Your First Code Contribution](#your-first-code-contribution)
- [Improving The Documentation](#improving-the-documentation)
- [Styleguides](#styleguides)
- [Commit Messages](#commit-messages)
- [Join The Project Team](#join-the-project-team)

## Code of Conduct

This project and everyone participating in it is governed by the
[WorldOfTech Code of Conduct](https://github.com/WorldOfTech0/WOT/blob/development/CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code. Please report unacceptable behavior
to <raikwar.amit.1603@gmail.com>.

## I Have a Question

> If you want to ask a question, we assume that you have read the available [Documentation](file:///Users/mr.robot/z-stash/WorldOfTech/WOT/AGENT.md).

Before you ask a question, it is best to search for existing [Issues](https://github.com/WorldOfTech0/WOT/issues) that might help you. In case you have found a suitable issue and still need clarification, you can write your question in this issue. It is also advisable to search the internet for answers first.

If you then still feel the need to ask a question and need clarification, we recommend the following:

- Open an [Issue](https://github.com/WorldOfTech0/WOT/issues/new).
- Provide as much context as you can about what you're running into.
- Provide project and platform versions (nodejs, npm, etc), depending on what seems relevant.

We will then take care of the issue as soon as possible.

## I Want To Contribute

> ### Legal Notice <!-- omit in toc -->
>
> When contributing to this project, you must agree that you have authored 100% of the content, that you have the necessary rights to the content and that the content you contribute may be provided under the project licence.

### Reporting Bugs

#### Before Submitting a Bug Report

A good bug report shouldn't leave others needing to chase you up for more information. Therefore, we ask you to investigate carefully, collect information and describe the issue in detail in your report. Please complete the following steps in advance to help us fix any potential bug as fast as possible.

- Make sure that you are using the latest version.
- Determine if your bug is really a bug and not an error on your side e.g. using incompatible environment components/versions (Make sure that you have read the [documentation](file:///Users/mr.robot/z-stash/WorldOfTech/WOT/AGENT.md)).
- Check the [bug tracker](https://github.com/WorldOfTech0/WOT/issues?q=label%3Abug) to see if it's already reported.
- Collect information: Stack trace, OS, Node.js/Yarn versions, and reproduction steps.

#### How Do I Submit a Good Bug Report?

> You must never report security related issues, vulnerabilities or bugs including sensitive information to the issue tracker. Instead, send them to <raikwar.amit.1603@gmail.com>.

We use GitHub issues to track bugs. If you run into an issue:

- Open an [Issue](https://github.com/WorldOfTech0/WOT/issues/new).
- Explain the expected vs actual behavior.
- Provide clear reproduction steps.

### Suggesting Enhancements

Enhancement suggestions are tracked as [GitHub issues](https://github.com/WorldOfTech0/WOT/issues).

- Use a **clear and descriptive title**.
- Provide a **step-by-step description** of the suggested enhancement.
- **Describe the current behavior** and explain what you'd like to see instead.
- **Explain the utility** to the majority of WorldOfTech users.

### Your First Code Contribution

#### Setup

1. **Clone the repository**: `git clone git@github.com:WorldOfTech0/WOT.git`
2. **Install dependencies**: `yarn install` (Ensure you have Yarn 4.x installed)
3. **Start development server**: `yarn start`

#### Development Workflow

1. **Find/Create a Jira Ticket**: All work must be linked to a Jira story in the `WOT` project.
2. **Create a branch**: `amitraikwar/{ticket-number}/{short-description}`
3. **Make changes**: Follow the project's [Project Rules](file:///Users/mr.robot/z-stash/WorldOfTech/WOT/.claude/rules/PROJECT.md).
4. **Run Validation**:
   - `yarn lint`
   - `yarn test`
   - `yarn build`
5. **Commit**: Use `make commit` for Conventional Commits.
6. **Open PR**: Target the `development` branch.

### Improving The Documentation

Documentation is a critical part of WorldOfTech. You can contribute by:

- Updating `README.md`, `CLAUDE.md`, or `AGENT.md`.
- Improving the source markdown guides in `src/docs/`.
- Ensuring all documentation is synchronized with code changes.

## Styleguides

### Commit Messages

We strictly follow [Conventional Commits](https://www.conventionalcommits.org/).

- **Initial Commit**: Always use `make commit`.
- **Format**: `<type>(<ticket-number>): <short description>`
- **Detailed Body**: Every commit MUST include a detailed body explaining the "Why" and "What".

### Coding Standards

- **React**: Use functional components and hooks.
- **TypeScript**: Strictly adhere to path aliases and type definitions.
- **Styling**: Use Chakra UI v3 tokens; avoid hardcoded colors.
- **State**: Use Zustand v5 with `useShallow` for optimization.

## Join The Project Team

If you're interested in joining the core team, please reach out via email <support@worldoftech.co.in>.

<!-- omit in toc -->

## Attribution

This guide is based on the [contributing.md](https://contributing.md/generator)!
