---
description: "Task list for Book Page Routing & Hero Alignment Fix implementation"
---

# Tasks: Book Page Routing & Hero Alignment Fix

**Input**: Design documents from `/specs/007-book-routing-hero-fix/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, quickstart.md

**Tests**: The examples below include test tasks. Tests are OPTIONAL - only include them if explicitly requested in the feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description with file path`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Configuration**: `frontend/` for docusaurus config files
- **Styling**: `frontend/src/css/custom.css` for custom styles
- **Navigation**: `frontend/docusaurus.config.ts` for navigation configuration
- **Pages**: `frontend/src/pages/index.tsx` for homepage

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

- [X] T001 Verify frontend directory exists with proper structure per plan requirements
- [X] T002 Verify TypeScript strict mode enabled in project configuration
- [X] T003 Verify Docusaurus project builds successfully before customization
- [X] T004 Verify docusaurus.config.ts file exists and accessible

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T005 Update tsconfig.json to enforce TypeScript strict: true mode if not already configured
- [X] T006 Verify custom CSS file exists at frontend/src/css/custom.css for styling overrides
- [X] T007 Prepare Docusaurus configuration for custom route integration
- [X] T008 Set up development environment with Node.js and pnpm

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Fix Book Navigation (Priority: P1) 🎯 MVP

**Goal**: Enable users to click the "Book" link in the navigation and see the documentation system with the sidebar visible, so that they can access the learning modules. This fixes the critical "Page Not Found" error when clicking the Book link.

**Independent Test**: Can be fully tested by clicking the "Book" link in the header and verifying that the documentation system loads with the sidebar visible and module navigation available.

### Tests for User Story 1 (OPTIONAL - only if tests requested) ⚠️

> **NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [ ] T009 Create navigation test for Book link routing in tests/unit/test_book_navigation.js
- [ ] T010 Create sidebar visibility test in tests/unit/test_sidebar_visibility.js

### Implementation for User Story 1

- [X] T011 [US1] Update Book navigation link in docusaurus.config.ts to route to /docs endpoint
- [X] T012 [US1] Verify docs plugin has correct routeBasePath configuration in docusaurus.config.ts
- [X] T013 [US1] Ensure docs index page exists to prevent 404 errors in documentation system
- [X] T014 [US1] Verify sidebar loads when Book link is clicked and module navigation is available
- [X] T015 [US1] Test that clicking Book link shows documentation system with sidebar
- [X] T016 [US1] Confirm no "Page Not Found" error occurs when clicking Book link

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Fix Hero Section Alignment (Priority: P2)

**Goal**: Enable visitors to see the hero section text properly centered both horizontally and vertically, so that the page appears professionally designed and visually appealing. This improves the visual presentation and professional appearance of the homepage.

**Independent Test**: Can be fully tested by visiting the homepage and verifying that the hero text is properly centered in both light and dark themes.

### Tests for User Story 2 (OPTIONAL - only if tests requested) ⚠️

- [ ] T017 Create hero alignment test in tests/unit/test_hero_alignment.js
- [ ] T018 Create theme consistency test in tests/unit/test_theme_consistency.js

### Implementation for User Story 2

- [X] T019 [US2] Implement horizontal centering of hero section text in custom CSS
- [X] T020 [US2] Implement vertical centering of hero section text within hero container
- [X] T021 [US2] Apply center-aligned text styling to hero content in custom CSS
- [X] T022 [US2] Ensure alignment works properly in both Light and Dark themes
- [X] T023 [US2] Test hero alignment on homepage in both themes
- [X] T024 [US2] Verify hero text appears centered horizontally and vertically

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: Local Verification & Testing

**Goal**: Complete local testing and verification of all implemented functionality

### Implementation for Local Verification

- [X] T025 Run local development server to test all functionality
- [X] T026 Click Book link and verify no 404 errors occur
- [X] T027 Reload homepage and verify hero section remains centered
- [X] T028 Test functionality across different browsers and screen sizes
- [X] T029 Verify all navigation elements work correctly
- [X] T030 Confirm all styling appears correctly in both themes

---

## Phase N: Finalization & Quality Assurance

**Goal**: Complete final checks and ensure all acceptance criteria are met

### Implementation for Finalization

- [X] T031 Verify Book page loads correctly with no errors
- [X] T032 Verify hero section is centered with no layout regressions
- [X] T033 Run complete build to ensure production build works
- [X] T034 Verify all acceptance criteria from spec are met
- [X] T035 Update feature status to complete in project documentation
- [X] T036 Document any lessons learned during implementation

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2)
- **Phase 5**: Depends on all desired user stories being complete
- **Phase N**: Depends on all previous phases being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - May reference concepts from US1 but should be independently testable

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
- Styling tasks in Phase 2 can run in parallel [P]
- Asset creation tasks can run in parallel [P]

### Parallel Example: Book Routing Implementation

```bash
# Launch all book routing tasks together:
Task: "Update Book navigation link in docusaurus.config.ts to route to /docs endpoint"
Task: "Verify docs plugin has correct routeBasePath configuration in docusaurus.config.ts"
Task: "Ensure docs index page exists to prevent 404 errors in documentation system"
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
4. Add Local Verification → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1 (Book Routing)
   - Developer B: User Story 2 (Hero Alignment)
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