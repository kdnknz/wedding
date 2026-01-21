---
inclusion: always
---

# Technology Stack

## Frontend Framework

The project uses a modern frontend framework that supports static builds. Options include:
- React + Vite (recommended based on node_modules)
- Svelte
- Vue
- Plain HTML + CSS + JavaScript

## Build System

- **Vite**: Fast build tool for modern web projects
- Output: Single `index.html` + static assets (CSS, JS, images, audio)

## Core Dependencies

Based on installed packages:
- **React**: UI library
- **React DOM**: React rendering
- **Vite**: Build tool and dev server
- **Firebase**: Cloud database for guest greetings/comments

## Database

- **Firebase Firestore** (recommended): NoSQL cloud database
  - Real-time data synchronization
  - Accessed directly from client-side JavaScript
  - No custom backend server required
  - Security rules configured in Firebase console

Alternative options: Firebase Realtime Database or Supabase

## Common Commands

```bash
# Development
npm run dev          # Start development server

# Build
npm run build        # Create production build

# Preview
npm run preview      # Preview production build locally
```

## Data Management

- Single configuration file (`data.js` or `data.json`) for invitation content
- All text, dates, locations, and settings centralized in this file
- Easy content updates without touching code

## Audio

- JavaScript Audio API for background music
- Auto-play on page load (with user interaction fallback)
- Play/pause controls

## Styling

- CSS with Flexbox/Grid for layouts
- Media queries for responsive design
- Mobile-first approach
