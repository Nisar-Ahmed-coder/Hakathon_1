<!--
SYNC IMPACT REPORT
Version change: N/A -> 1.0.0
Modified principles: N/A (new constitution)
Added sections: All sections from user-provided constitution
Removed sections: Template placeholders
Templates requiring updates: N/A (templates are generic, no specific constitution references found)
Follow-up TODOs: None
-->
# AI/Spec-Driven Book Project Constitution

## Core Principles

### Core Principles - Type Safety Above All
The entire project MUST be written in TypeScript, with strict: true enabled. No JavaScript files are permitted except where tooling absolutely requires it. All development MUST be performed in an isolated environment with Node.js version management via nvm, package management via pnpm, and no global dependencies allowed. The book content, structure, and evolution MUST be driven by Spec-Kit Plus for specifications and Claude Code for AI-assisted authoring.

### Project Structure (Mandatory)
The project structure is NON-NEGOTIABLE with frontend/ directory containing all UI, styling, and documentation code, specs/ for specifications, and specific required files like .nvmrc, pnpm-lock.yaml, and README.md.

### Technology Stack - Documentation Framework
The project SHALL use Docusaurus with TypeScript template, custom theme overrides, and strict typing enabled. The book MUST be deployed to GitHub Pages using static build output and automated deployment workflow.

### Styling & Theming (Strict Rule)
All default Docusaurus styling is forbidden. All default colors, fonts, and visual styles MUST be overridden including primary & secondary color palette, background and text colors, typography, and light/dark mode customization. All styling changes MUST be defined in frontend/src/css/custom.css.

### Specification-Driven Book Creation
The book MUST originate from a written specification specs/book.spec.md that defines book purpose, chapter structure, tone and language, and target audience. Claude Code MUST be used to generate chapters, refine language, and ensure consistency with the spec.

### Language & Content Rules
The entire book MUST be written in English with formal, constitutional, technical but readable tone. Content integrity requires no speculative content outside the spec and every chapter must map to a defined requirement.

## Tooling Rules
TypeScript Configuration (Mandatory) with strict: true, noImplicitAny: true, strictNullChecks: true. No Bypassing Type Safety - any is forbidden and @ts-ignore is forbidden.

## Compliance & Enforcement
Any violation of this Constitution INVALIDATES the contribution. All pull requests MUST demonstrate type safety, spec compliance, theming compliance. Non-conforming code SHALL NOT be merged.

## Governance
This Constitution is hereby adopted as the supreme authority governing the AI/Spec-Driven Book Project and shall remain binding unless amended through a documented, spec-driven process.

**Version**: 1.0.0 | **Ratified**: 2026-01-03 | **Last Amended**: 2026-01-03