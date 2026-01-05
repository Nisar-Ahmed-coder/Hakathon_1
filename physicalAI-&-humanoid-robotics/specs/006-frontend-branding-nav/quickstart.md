# Quickstart Guide: Frontend UI, Branding & Navigation

## Development Setup

1. Ensure you have Node.js and pnpm installed
2. Navigate to the frontend directory: `cd frontend`
3. Install dependencies: `pnpm install`
4. Start the development server: `pnpm start`

## Key Files to Modify

- `src/pages/index.tsx` - Homepage with module cards
- `docusaurus.config.ts` - Site configuration including navbar
- `src/css/custom.css` - Custom styling overrides
- `static/` - Add custom logo and images here

## Implementation Steps

1. Replace the default Docusaurus logo with AI Brain logo in the navbar
2. Implement the custom theme with light/dark variants
3. Create the homepage with four module cards as specified
4. Add About and Contact pages
5. Update navigation links in the header
6. Test theme toggle functionality

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