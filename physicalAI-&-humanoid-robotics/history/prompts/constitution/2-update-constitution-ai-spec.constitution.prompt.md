---
id: 2
title: Update Constitution to AI Spec Driven Book Project
stage: constitution
date: 2026-01-03
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: 001-ros2-educational-ai
user: Claude
command: sp.constitution
labels: [constitution, spec-driven, ai]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
tests:
 - none
---

## Prompt

```text
Constitution of the AI/Spec-Driven Book Project
Preamble

We, the contributors of this project, establish this Constitution to ensure a strictly typed, AI-assisted, spec-driven, and professionally structured system for authoring, building, and deploying a book using modern tooling and best practices.

Article I – Core Principles

Type Safety Above All
The entire project MUST be written in TypeScript, with strict: true enabled.
No JavaScript files are permitted except where tooling absolutely requires it.

Isolated Development Environment
All development MUST be performed in an isolated environment:

Node.js version management via nvm

Package management via pnpm

No global dependencies allowed

AI & Spec-Driven Development
The book content, structure, and evolution MUST be driven by:

Spec-Kit Plus for specifications

Claude Code for AI-assisted authoring

Article II – Project Structure (Mandatory)

The following structure is NON-NEGOTIABLE:

project-root/
│
├── frontend/
│   ├── docusaurus.config.ts
│   ├── sidebars.ts
│   ├── src/
│   │   ├── css/
│   │   │   └── custom.css
│   │   └── theme/
│   ├── docs/
│   │   └── constitution.md
│   ├── static/
│   └── package.json
│
├── specs/
│   └── book.spec.md
│
├── .nvmrc
├── pnpm-lock.yaml
└── README.md


All frontend-related work MUST live inside frontend/

No UI, styling, or documentation code is allowed outside this directory

Article III – Technology Stack

Documentation Framework
The project SHALL use Docusaurus with:

TypeScript template

Custom theme overrides

Strict typing enabled

Deployment Platform
The book MUST be deployed to GitHub Pages using:

Static build output

Automated deployment workflow

Article IV – Styling & Theming (Strict Rule)

Default Docusaurus Styling is Forbidden
All default colors, fonts, and visual styles MUST be overridden.

Mandatory Customization Includes:

Primary & secondary color palette

Background and text colors

Typography (fonts, headings, spacing)

Light and dark mode customization

All styling changes MUST be defined in:

frontend/src/css/custom.css

Article V – Specification-Driven Book Creation

The book MUST originate from a written specification:

specs/book.spec.md


This specification SHALL define:

Book purpose

Chapter structure

Tone and language

Target audience

Claude Code MUST be used to:

Generate chapters

Refine language

Ensure consistency with the spec

Article VI – Language & Content Rules

Language Requirement

The entire book MUST be written in English

Tone

Formal

Constitutional

Technical but readable

Content Integrity

No speculative content outside the spec

Every chapter must map to a defined requirement

Article VII – Tooling Rules

TypeScript Configuration (Mandatory)

{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}


No Bypassing Type Safety

any is forbidden

@ts-ignore is forbidden

Article VIII – Compliance & Enforcement

Any violation of this Constitution INVALIDATES the contribution.

All pull requests MUST demonstrate:

Type safety

Spec compliance

Theming compliance

Non-conforming code SHALL NOT be merged.

Ratification

This Constitution is hereby adopted as the supreme authority governing the AI/Spec-Driven Book Project and shall remain binding unless amended through a documented, spec-driven process.
```

## Response snapshot

I've updated the project constitution based on the provided content for the AI/Spec-Driven Book Project. The constitution now includes 8 articles covering core principles, project structure, technology stack, styling rules, specification-driven creation, language rules, tooling requirements, and compliance enforcement.

## Outcome

- ✅ Impact: Updated constitution file with comprehensive principles for AI/Spec-Driven Book Project
- 🧪 Tests: none
- 📁 Files: Updated .specify/memory/constitution.md with new constitution content
- 🔁 Next prompts: Continue with spec-driven development workflow
- 🧠 Reflection: Constitution now provides clear governance for the project with type safety, structure, and compliance requirements

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): standard constitution update
- Next experiment (smallest change to try): implement first feature following the new constitution