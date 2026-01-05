# Data Model: Book Page & Git Ignore

## Book Page Entity
- **route**: string - The route for the book page ("/docs")
- **title**: string - The title of the book page ("Book Documentation")
- **description**: string - Brief description of the book content
- **modules**: array - List of available modules with links
- **sidebarVisible**: boolean - Whether the documentation sidebar is visible
- **validation**: route must be "/docs", title and description required

## Navigation Link Entity
- **label**: string - The display text for the navigation link ("Book")
- **route**: string - The destination route ("/docs")
- **position**: string - Where the link appears in the navigation ("left", "right")
- **visibility**: boolean - Whether the link is visible in the header
- **validation**: label and route required

## Git Ignore Configuration
- **entries**: array - List of file patterns to ignore
  - node_modules/: directory pattern to ignore all node modules
  - .docusaurus/: directory pattern to ignore Docusaurus build artifacts
  - build/: directory pattern to ignore build output
  - .env*: file pattern to ignore environment files
- **validation**: All required patterns must be present

## Documentation System Properties
- **routeBasePath**: string - Base path for documentation ("/docs")
- **sidebarVisibility**: boolean - Whether sidebar is visible on docs pages
- **indexPageExists**: boolean - Whether docs index page exists to prevent 404
- **moduleNavigation**: boolean - Whether module navigation is available
- **validation**: routeBasePath required and must start with "/"