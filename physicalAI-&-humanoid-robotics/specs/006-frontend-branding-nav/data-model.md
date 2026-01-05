# Data Model: Frontend UI, Branding & Navigation

## Module Card
- **name**: string - The module name (e.g., "Robotic Nervous System (ROS 2)")
- **title**: string - The display title for the card
- **description**: string - Short description (2-3 lines)
- **imageUrl**: string - Path to the AI-related image
- **buttonText**: string - Text for the navigation button (default: "Explore Module")
- **navigationPath**: string - Route to the corresponding module page
- **validation**: All fields required

## Theme Configuration
- **name**: string - Theme identifier ("light" or "dark")
- **colors**: object - Color scheme with properties:
  - backgroundColor: string
  - primaryColor: string
  - accentColor: string
  - textColor: string
- **validation**: All properties required for both light and dark themes

## Navigation Item
- **label**: string - Display text for the navigation link
- **path**: string - Route path
- **icon**: string (optional) - Icon identifier if applicable
- **validation**: label and path required

## Static Page Content
- **title**: string - Page title
- **content**: string - Page content in markdown format
- **sections**: array - Array of content sections if needed
- **validation**: title and content required