# Quickstart Guide: Book Page Routing & Hero Alignment Fix

## Development Setup

1. Ensure you have Node.js and pnpm installed
2. Navigate to the frontend directory: `cd frontend`
3. Install dependencies: `pnpm install`
4. Start the development server: `pnpm start`

## Key Files to Modify

- `docusaurus.config.ts` - Site configuration including Book route
- `src/css/custom.css` - Custom styling overrides for hero alignment
- `src/pages/index.tsx` - Homepage hero section (if needed)

## Implementation Steps

1. Update the Book link in docusaurus.config.ts to route to /docs
2. Verify docs plugin has correct routeBasePath configuration
3. Ensure docs index page exists to prevent 404 errors
4. Implement CSS changes to center hero section text both horizontally and vertically
5. Test alignment in both Light and Dark themes
6. Verify sidebar loads when Book link is clicked

## Running the Site

```bash
cd frontend
pnpm start  # Runs on http://localhost:3000
```

## Building for Production

```bash
cd frontend
pnpm build
```