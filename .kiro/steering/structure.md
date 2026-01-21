---
inclusion: always
---

# Project Structure

## Expected Directory Layout

```
/
├── src/                    # Source code
│   ├── components/         # React components
│   ├── pages/             # Page components
│   │   ├── Home.jsx       # Cover page
│   │   └── Invitation.jsx # Main invitation page
│   ├── data/              # Configuration
│   │   └── data.js        # Centralized content data
│   ├── assets/            # Static assets
│   │   ├── images/        # Photos, backgrounds
│   │   └── audio/         # Background music
│   ├── styles/            # CSS files
│   ├── utils/             # Helper functions
│   │   └── firebase.js    # Firebase configuration
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── public/                # Public static files
├── dist/                  # Build output (generated)
├── node_modules/          # Dependencies
├── package.json           # Project dependencies and scripts
├── vite.config.js         # Vite configuration
└── index.html             # HTML template
```

## Page Structure

### 1. Home (Cover Page)
- Background image/theme
- Couple names
- Event date
- "Open Invitation" button
- Navigation to main page

### 2. Main Invitation Page
- Event details (ceremony and reception)
- Location and time information
- Additional content (quotes, narrative)
- Guest greeting/comment section
- Optional: photo gallery, map, RSVP

## Component Organization

- Keep components small and focused
- Separate presentational and container components
- Store reusable components in `/components`
- Page-level components in `/pages`

## Data File Pattern

The `data.js` file should contain all customizable content:
- Couple names
- Event dates and times
- Venue addresses
- Text content and quotes
- Image paths
- Music file path
- Firebase configuration

## Firebase Integration

- Initialize Firebase in `utils/firebase.js`
- Store API keys in environment variables (not committed to repo)
- Implement security rules to prevent abuse
- Structure Firestore collections for greetings and comments

## Build Output

- Single `index.html` file
- Bundled JavaScript and CSS
- Optimized images and assets
- All files in `/dist` directory ready for static hosting
