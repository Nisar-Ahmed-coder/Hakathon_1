---
description: "Task list for Frontend UI, Branding & Navigation module implementation"
---

# Tasks: Frontend UI, Branding & Navigation

**Input**: Design documents from `/specs/006-frontend-branding-nav/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, quickstart.md

**Tests**: The examples below include test tasks. Tests are OPTIONAL - only include them if explicitly requested in the feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description with file path`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Pages**: `frontend/src/pages/` for all page components
- **Configuration**: `frontend/` for docusaurus config files
- **Styling**: `frontend/src/css/custom.css` for custom styles
- **Navigation**: `frontend/docusaurus.config.ts` for navigation configuration
- **Components**: `frontend/src/components/` for reusable components
- **Assets**: `frontend/static/` for static assets like logos

<!--
  ============================================================================
  IMPORTANT: The tasks below are GENERATED based on:
  - User stories from spec.md (with their priorities P1, P2, P3...)
  - Feature requirements from plan.md
  - Entities from data-model.md
  - Endpoints from research.md
  - Additional requirements from quickstart.md

  Tasks MUST be organized by user story so each story can be:
  - Implemented independently
  - Tested independently
  - Delivered as an MVP increment
  ============================================================================
-->

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Create frontend/src/pages/ directory structure per plan requirements
- [X] T002 Create frontend/src/components/ directory structure per plan requirements
- [X] T003 Create frontend/src/theme/ directory structure per plan requirements
- [X] T004 Create frontend/src/css/ directory structure per plan requirements
- [X] T005 Create frontend/static/ directory structure per plan requirements
- [X] T006 [P] Verify TypeScript strict mode enabled in frontend configuration

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T007 [P] Update tsconfig.json to enforce TypeScript strict: true mode
- [X] T008 [P] Verify Docusaurus project builds successfully before customization
- [X] T009 [P] Create custom CSS file at frontend/src/css/custom.css for styling overrides
- [X] T010 [P] Prepare Docusaurus configuration for custom theme integration
- [X] T011 [P] Set up static assets directory with placeholder AI Brain logo

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Homepage Navigation Hub (Priority: P1) 🎯 MVP

**Goal**: Enable visitors to land on a homepage that clearly presents the four learning modules so they can easily navigate to content that interests them. This implements the primary entry point with module cards for navigation.

**Independent Test**: Can be fully tested by visiting the homepage and verifying that four distinct module cards are visible, each with appropriate images, titles, descriptions, and functional navigation buttons that lead to the corresponding module pages.

### Tests for User Story 1 (OPTIONAL - only if tests requested) ⚠️

> **NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [ ] T012 Create acceptance test for homepage module cards in tests/acceptance/test_homepage_module_cards.js
- [ ] T013 Create navigation routing test in tests/acceptance/test_module_navigation_routing.js

### Implementation for User Story 1

- [X] T014 [US1] Create custom homepage at frontend/src/pages/index.tsx with module cards
- [X] T015 [US1] [P] Create ModuleCard component at frontend/src/components/ModuleCard.tsx
- [X] T016 [US1] [P] Add AI-related images for all 4 modules to frontend/static/img/
- [X] T017 [US1] Implement module card titles for all 4 modules (Module 1-4) in homepage
- [X] T018 [US1] Add 2-3 line descriptions for each module card as specified
- [X] T019 [US1] Add "Explore Module" buttons to each card with proper routing
- [X] T020 [US1] Implement navigation routing for all 4 modules (docs/module-1 through docs/module-4)

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Brand Identity Experience (Priority: P2)

**Goal**: Enable users to see consistent branding with a custom logo and professional visual identity so they understand they're in the right place and trust the content. This implements the AI Brain logo and PhysicalAI branding in the header.

**Independent Test**: Can be fully tested by verifying the AI Brain logo and "PhysicalAI" text are visible in the header across all pages, with no default Docusaurus branding remaining.

### Tests for User Story 2 (OPTIONAL - only if tests requested) ⚠️

- [ ] T021 Create brand identity test in tests/acceptance/test_brand_identity.js
- [ ] T022 Create header branding test in tests/acceptance/test_header_branding.js

### Implementation for User Story 2

- [X] T023 [US2] Replace default Docusaurus logo with AI Brain logo in navbar
- [X] T024 [US2] Add "PhysicalAI" text alongside logo in header
- [X] T025 [US2] [P] Add AI Brain logo asset to frontend/static/img/
- [X] T026 [US2] Update docusaurus.config.ts to use custom logo and text
- [X] T027 [US2] Verify no default Docusaurus branding remains in header

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Theme Customization (Priority: P3)

**Goal**: Enable users to switch between light and dark themes so they can comfortably read content in different lighting conditions. This implements the custom light/dark themes with specified color schemes and theme toggle.

**Independent Test**: Can be fully tested by verifying that a theme toggle is available in the header and successfully switches between the custom light and dark themes with the specified color schemes.

### Tests for User Story 3 (OPTIONAL - only if tests requested) ⚠️

- [ ] T028 Create theme toggle test in tests/acceptance/test_theme_toggle.js
- [ ] T029 Create theme color validation test in tests/acceptance/test_theme_colors.js

### Implementation for User Story 3

- [X] T030 [US3] Remove all default Docusaurus colors from styling system
- [X] T031 [US3] Implement custom light theme with soft neutral background
- [X] T032 [US3] Implement custom light theme with AI-inspired blue/cyan primary
- [X] T033 [US3] Implement custom light theme with subtle accent highlights
- [X] T034 [US3] Implement custom dark theme with deep charcoal background
- [X] T035 [US3] Implement custom dark theme with electric blue/violet primary
- [X] T036 [US3] Implement custom dark theme with neon AI accent glow
- [X] T037 [US3] Implement theme toggle functionality in header
- [X] T038 [US3] Ensure theme applies consistently across homepage, book pages, sidebar, header, footer
- [X] T039 [US3] [P] Add high-contrast dark gray text for light theme
- [X] T040 [US3] [P] Add off-white text for dark theme

**Checkpoint**: At this point, User Stories 1, 2 AND 3 should all work independently

---

## Phase 6: User Story 4 - Static Pages Access (Priority: P3)

**Goal**: Enable users to access About and Contact pages so they can learn more about the platform and get in touch if needed. This implements dedicated pages with required content.

**Independent Test**: Can be fully tested by verifying that "About" and "Contact" links in the header navigate to dedicated pages with the required content.

### Tests for User Story 4 (OPTIONAL - only if tests requested) ⚠️

- [ ] T041 Create static pages test in tests/acceptance/test_static_pages.js
- [ ] T042 Create about page content validation test in tests/acceptance/test_about_page_content.js

### Implementation for User Story 4

- [X] T043 [US4] Create About page at frontend/src/pages/about.tsx
- [X] T044 [US4] Add PhysicalAI vision content to About page
- [X] T045 [US4] Add AI + Robotics mission content to About page
- [X] T046 [US4] Add educational purpose content to About page
- [X] T047 [US4] Create Contact page at frontend/src/pages/contact.tsx
- [X] T048 [US4] Add contact form or information to Contact page
- [X] T049 [US4] Ensure frontend-only implementation (no backend processing)
- [X] T050 [US4] Update header navigation to include About and Contact links

**Checkpoint**: At this point, User Stories 1, 2, 3 AND 4 should all work independently

---

## Phase 7: Navigation & Sidebar Integration

**Goal**: Complete the navigation system with proper sidebar configuration and header links

### Implementation for Navigation

- [X] T051 Configure sidebar to list Module 1 in docusaurus.config.ts
- [X] T052 Configure sidebar to list Module 2 in docusaurus.config.ts
- [X] T053 Configure sidebar to list Module 3 in docusaurus.config.ts
- [X] T054 Configure sidebar to list Module 4 in docusaurus.config.ts
- [X] T055 Ensure modules appear in sequential order in sidebar
- [X] T056 Enable expandable sections per module in sidebar
- [X] T057 Add Home link to header navigation
- [X] T058 Add Book link to header navigation
- [X] T059 Add About link to header navigation
- [X] T060 Add Contact link to header navigation
- [X] T061 Add theme toggle to header navigation

---

## Phase 8: Quality Assurance & Polish

**Goal**: Ensure visual consistency, accessibility, and proper functionality

### Implementation for Quality Assurance

- [X] T062 Verify header consistency across all pages
- [X] T063 Ensure typography uniformity across all pages
- [X] T064 Verify card spacing and alignment are correct
- [X] T065 Validate contrast ratios for accessibility
- [X] T066 Ensure buttons and links are readable in both themes
- [X] T067 Verify sidebar usability in both themes
- [X] T068 Test theme toggle functionality across all pages
- [X] T069 Verify all module card navigation works correctly
- [X] T070 Run localhost validation of all features

---

## Phase 9: Localhost Execution & Validation

**Goal**: Complete final validation and verification of the implementation

### Implementation for Final Validation

- [X] T071 Run development server and open site at http://localhost:3000
- [X] T072 Verify homepage loads with 4 cards visible
- [X] T073 Verify theme toggle works correctly
- [X] T074 Verify book sidebar works correctly
- [X] T075 Verify About & Contact pages load correctly
- [X] T076 Confirm no runtime errors occur
- [X] T077 Verify all navigation elements function correctly
- [X] T078 Confirm 100% of users can navigate from homepage to any module
- [X] T079 Verify theme toggle switches with no visual artifacts

---

## Phase N: Finalization & Freeze

**Goal**: Complete final checks and freeze the frontend

### Implementation for Finalization

- [X] T080 Declare frontend complete and officially frozen
- [X] T081 Document that future changes require spec update and new execution plan
- [X] T082 Run final build to ensure production build works
- [X] T083 Verify all acceptance criteria from spec are met
- [X] T084 Update feature status to complete in project documentation

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3 → P4)
- **Phase 7-9**: Depends on all desired user stories being complete
- **Phase N**: Depends on all previous phases being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - May reference concepts from US1 but should be independently testable
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - May reference concepts from US1/US2 but should be independently testable
- **User Story 4 (P4)**: Can start after Foundational (Phase 2) - May reference concepts from US1/US2/US3 but should be independently testable

### Within Each User Story

- Tests (if included) MUST be written and FAIL before implementation
- Core components before detailed implementations
- Basic functionality before advanced features
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- All tests for a user story marked [P] can run in parallel
- Different user stories can be worked on in parallel by different team members
- Styling tasks in Phase 3 can run in parallel [P]
- Asset creation tasks can run in parallel [P]

### Parallel Example: Homepage Implementation

```bash
# Launch all homepage tasks together:
Task: "Create custom homepage at frontend/src/pages/index.tsx with module cards"
Task: "Create ModuleCard component at frontend/src/components/ModuleCard.tsx"
Task: "Add AI-related images for all 4 modules to frontend/static/img/"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Add User Story 4 → Test independently → Deploy/Demo
6. Add Navigation & QA → Test independently → Deploy/Demo
7. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1 (Homepage)
   - Developer B: User Story 2 (Branding)
   - Developer C: User Story 3 (Theming)
   - Developer D: User Story 4 (Static Pages)
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence