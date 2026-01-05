# Data Model: Book Page Routing & Hero Alignment Fix

## Navigation Link
- **label**: string - The display text for the navigation link ("Book")
- **route**: string - The destination route ("/docs")
- **visibility**: boolean - Whether the link is visible in the header
- **validation**: label and route required

## Hero Section
- **title**: string - The main title text ("AI/Spec-Driven Book")
- **subtitle**: string - The subtitle text ("A Book about Robotics and AI")
- **alignment**: object - Alignment properties with values:
  - horizontal: string (e.g., "center", "left", "right")
  - vertical: string (e.g., "center", "top", "bottom")
- **themeCompatibility**: object - Theme support with values:
  - lightTheme: boolean
  - darkTheme: boolean
- **validation**: title and subtitle required, alignment values must be valid CSS alignment values

## Documentation System Properties
- **routeBasePath**: string - Base path for documentation ("/docs")
- **sidebarVisibility**: boolean - Whether sidebar is visible on docs pages
- **indexPageExists**: boolean - Whether docs index page exists to prevent 404
- **moduleNavigation**: boolean - Whether module navigation is available
- **validation**: routeBasePath required and must start with "/"