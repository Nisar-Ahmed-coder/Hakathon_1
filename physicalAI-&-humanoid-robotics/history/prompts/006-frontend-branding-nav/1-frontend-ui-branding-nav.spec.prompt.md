---
id: 1
title: Frontend UI Branding Nav
stage: spec
date: 2026-01-04
surface: agent
model: claude-sonnet-4-5-20250929
feature: 006-frontend-branding-nav
branch: 006-frontend-branding-nav
user: Claude
command: sp.specify
labels: [frontend, branding, navigation, docusaurus]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - specs/006-frontend-branding-nav/spec.md
  - specs/006-frontend-branding-nav/checklists/requirements.md
tests: []
---

## Prompt

Specification: Frontend UI, Branding & Navigation
PhysicalAI Book Platform
Specification ID

Spec ID: SPEC-FE-UI-01
Project: PhysicalAI – AI-Driven Robotics Book
Scope: Frontend (Docusaurus only)
Language: English (Mandatory)
Typing Rule: TypeScript strict mode
Location Constraint: All frontend work MUST exist inside /frontend

1. Purpose

This specification defines the visual identity, homepage layout, navigation structure, and branding rules for the PhysicalAI book platform built using Docusaurus.

2. Global Rules (Non-Negotiable)

The default Docusaurus color scheme SHALL NOT be used.

A custom Light Theme and Dark Theme MUST be created.

All UI work MUST be implemented in TypeScript.

The Docusaurus logo SHALL be replaced.

No backend code is allowed in this scope.

The site MUST run locally via localhost.

3. Homepage Specification
3.1 Homepage Role

The homepage SHALL act as:

A visual entry point

A module navigation hub

A brand identity surface

3.2 Module Cards (Mandatory)

The homepage SHALL contain exactly four (4) cards, one per module.

Each Card MUST include:

AI-related image (illustrative, non-stock cliché)

Module title

Short description (2–3 lines)

Primary button labeled:

Explore Module

Navigation behavior:

Button routes to the corresponding module index page

3.3 Card-to-Module Mapping
Card    Module
Card 1    Module 1 – Robotic Nervous System (ROS 2)
Card 2    Module 2 – Digital Twin (Gazebo & Unity)
Card 3    Module 3 – AI-Robot Brain (NVIDIA Isaac™)
Card 4    Module 4 – Vision–Language–Action (VLA)
4. Theming & Color System
4.1 Theme Replacement Rule

All default Docusaurus colors MUST be fully overridden.

4.2 Custom Themes (Mandatory)
Light Theme

Background: Soft neutral (non-white)

Primary: AI-inspired blue / cyan

Accent: Subtle neon highlight

Text: High-contrast dark gray

Dark Theme

Background: Deep charcoal / near-black

Primary: Electric blue / violet

Accent: AI-neon glow

Text: Off-white (not pure white)

4.3 Theme Behavior

User MUST be able to toggle Light/Dark

Theme applies consistently across:

Homepage

Book pages

Sidebar

Header

Footer

5. Header & Branding
5.1 Logo Replacement (Mandatory)

The default Docusaurus logo SHALL be replaced with:

Icon: AI Brain logo (custom or open-licensed)

Text Name: PhysicalAI

5.2 Header Contents

The header MUST contain:

AI Brain Logo + PhysicalAI text

Navigation links:

Home

Book

About

Contact

Theme toggle (Light / Dark)

6. Book Page Structure
6.1 Book Entry Page

There SHALL be a dedicated Book page.

This page:

Hosts the documentation system

Uses the sidebar for navigation

6.2 Sidebar Rules

The sidebar MUST list:

Module 1

Module 2

Module 3

Module 4

Each module:

Expands into its internal sections

Appears in sequential order only

7. Static Pages
7.1 About Page

The platform MUST include an About page describing:

Vision of PhysicalAI

AI + Robotics focus

Educational purpose

7.2 Contact Page

The platform MUST include a Contact page containing:

Contact form or contact information

No backend processing required

Frontend-only implementation

8. Folder & Code Constraints
frontend/
├── src/
│   ├── pages/
│   │   ├── index.tsx        # Home page
│   │   ├── about.tsx
│   │   └── contact.tsx
│   ├── theme/
│   └── components/
├── docs/
└── docusaurus.config.ts


All React files MUST be .tsx

TypeScript strict: true is mandatory

9. Local Development Requirement
9.1 Agent Instruction (Mandatory)

At the end of implementation, the AI agent MUST:

Start the local development server

Ensure the site runs on:

http://localhost:3000


or equivalent Docusaurus port

Verify:

Homepage cards work

Theme toggle works

Navigation works

Book pages load correctly

10. Acceptance Criteria

This specification is considered fulfilled only if:

✔ Homepage shows 4 functional module cards

✔ Default Docusaurus colors are fully removed

✔ Custom Light & Dark themes exist

✔ AI Brain logo + PhysicalAI branding is visible

✔ Book page sidebar lists all modules

✔ About & Contact pages exist

✔ Site runs successfully on localhost

Final Declaration

This specification defines the complete visual identity, navigation system, and frontend UX of the PhysicalAI book platform. No deviation is permitted without a formal spec amendment.

## Response snapshot

Successfully created a comprehensive feature specification for the Frontend UI, Branding & Navigation of the PhysicalAI Book Platform. The specification includes:

1. Four prioritized user stories covering:
   - Homepage Navigation Hub (P1)
   - Brand Identity Experience (P2)
   - Theme Customization (P3)
   - Static Pages Access (P3)

2. Functional requirements (FR-001 through FR-011) covering all aspects of the frontend UI, branding, and navigation requirements

3. Key entities including Module Card, Theme, Navigation Item, and Static Page

4. Success criteria (SC-001 through SC-009) with measurable outcomes for the feature

5. Edge cases for accessibility and error conditions

A quality checklist was also created to validate the specification completeness.

## Outcome

- ✅ Impact: Complete feature specification created for frontend branding and navigation
- 🧪 Tests: No tests executed (specification phase)
- 📁 Files: 2 files created (spec.md and requirements checklist)
- 🔁 Next prompts: Ready for planning phase (/sp.plan)
- 🧠 Reflection: Specification captures all requirements from the original specification document with proper user focus

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): Specification quality check - PASS
- Prompt variant (if applicable): Standard specification creation prompt
- Next experiment (smallest change to try): Proceed to planning phase