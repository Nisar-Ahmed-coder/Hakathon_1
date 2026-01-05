# Research: Book Page Routing & Hero Alignment Fix

## Decision: Docusaurus Book Page Routing
**Rationale**: The specification requires updating the Book navigation link to route to /docs to fix the "Page Not Found" error. This will be implemented by updating the docusaurus.config.ts file to ensure the docs plugin has the correct routeBasePath and that a proper index page exists.
**Alternatives considered**: Creating a custom route handler, using client-side redirects, implementing a catch-all route

## Decision: Hero Section Center Alignment
**Rationale**: The specification requires centering the hero section text both horizontally and vertically. This will be implemented using CSS flexbox or grid properties in the custom CSS file to ensure proper alignment in both light and dark themes.
**Alternatives considered**: Using CSS text-align only, margin auto approach, transform-based centering

## Decision: Docusaurus Sidebar Integration
**Rationale**: When the Book link is clicked, the sidebar must be visible to provide module navigation. This requires ensuring the docs plugin configuration properly includes sidebar functionality.
**Alternatives considered**: Custom sidebar implementation, client-side sidebar injection, separate navigation system

## Decision: Theme Consistency for Alignment
**Rationale**: The alignment fix must work consistently across both light and dark themes, requiring CSS that works with Docusaurus theme variables.
**Alternatives considered**: Separate CSS for each theme, JavaScript-based alignment, inline styles