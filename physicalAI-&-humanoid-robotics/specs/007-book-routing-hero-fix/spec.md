# Feature Specification: Book Page Routing & Hero Alignment Fix

**Feature Branch**: `007-book-routing-hero-fix`
**Created**: 2026-01-04
**Status**: Draft
**Input**: User description: "Short Specification: Book Page Routing & Hero Alignment Fix
Spec ID

SPEC-FE-FIX-02
Scope: Frontend (Docusaurus)
Language: English
Strictness: Mandatory

1. Book Page Routing Fix
Problem

Clicking Book results in:

Page Not Found

Requirement

The Book navigation link MUST load the documentation system.

When Book is clicked:

The docs MUST render

The sidebar MUST be visible

Module navigation MUST be available

Implementation Rule

The Book link SHALL route to:

/docs


The docs plugin MUST have a valid routeBasePath

A docs index page MUST exist to prevent 404

Acceptance

✔ Clicking Book opens docs with sidebar
✔ No “Page Not Found” error

2. Hero Section Alignment Fix
Requirement

The homepage hero text:

AI/Spec-Driven Book
A Book about Robotics and AI


MUST be:

Horizontally centered

Vertically centered within the hero section

Center-aligned text

Implementation Rule

Hero container MUST use center alignment

Text alignment MUST be center

Applies to both Light and Dark themes

Acceptance

✔ Hero text appears centered
✔ Layout consistent across themes

Final Declaration

This specification fixes Book page routing and homepage hero alignment. No other UI or functional changes are permitted under this spec."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Fix Book Navigation (Priority: P1)

As a user of the PhysicalAI Book Platform, I want to click the "Book" link in the navigation and see the documentation system with the sidebar visible, so that I can access the learning modules.

**Why this priority**: This is a critical navigation issue that prevents users from accessing the main content of the platform. Without this fix, the Book link is broken and results in a "Page Not Found" error.

**Independent Test**: Can be fully tested by clicking the "Book" link in the header and verifying that the documentation system loads with the sidebar visible and module navigation available.

**Acceptance Scenarios**:

1. **Given** I am on any page of the platform, **When** I click the "Book" link in the header, **Then** I see the documentation system with the sidebar and module navigation
2. **Given** I click the "Book" link, **When** the page loads, **Then** there is no "Page Not Found" error and the documentation is displayed

---

### User Story 2 - Fix Hero Section Alignment (Priority: P2)

As a visitor to the PhysicalAI Book Platform homepage, I want to see the hero section text properly centered both horizontally and vertically, so that the page appears professionally designed and visually appealing.

**Why this priority**: This is a visual presentation issue that affects the user experience and professional appearance of the homepage. Proper alignment improves the overall aesthetic.

**Independent Test**: Can be fully tested by visiting the homepage and verifying that the hero text is properly centered in both light and dark themes.

**Acceptance Scenarios**:

1. **Given** I am on the homepage, **When** I view the hero section, **Then** the title and subtitle text are horizontally and vertically centered
2. **Given** I switch between light and dark themes, **When** I view the hero section, **Then** the text alignment remains centered in both themes

---

### Edge Cases

- What happens when the browser window is resized?
- How does the hero alignment look on mobile devices?
- What if the documentation system has missing or incomplete content?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST route the Book navigation link to /docs endpoint
- **FR-002**: System MUST render the documentation system when Book link is clicked
- **FR-003**: System MUST display the sidebar when Book link is clicked
- **FR-004**: System MUST make module navigation available when Book link is clicked
- **FR-005**: System MUST prevent "Page Not Found" error when clicking Book link
- **FR-006**: System MUST center the hero section text horizontally
- **FR-007**: System MUST center the hero section text vertically within the hero section
- **FR-008**: System MUST use center-aligned text for hero content
- **FR-009**: System MUST apply proper alignment in both Light and Dark themes
- **FR-010**: System MUST ensure the docs plugin has a valid routeBasePath
- **FR-011**: System MUST ensure a docs index page exists to prevent 404 errors

### Key Entities *(include if feature involves data)*

- **Navigation Link**: Header navigation element with label and destination route
- **Documentation System**: Content management system with sidebar and module navigation
- **Hero Section**: Page header component with title, subtitle, and alignment properties

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of users can click the Book link and see the documentation system with sidebar
- **SC-002**: 0% of users encounter "Page Not Found" error when clicking Book link
- **SC-003**: Hero text appears centered horizontally and vertically on homepage
- **SC-004**: Layout remains consistent across both Light and Dark themes
- **SC-005**: Module navigation is available when Book link is accessed
- **SC-006**: Documentation system renders properly when accessed via Book link