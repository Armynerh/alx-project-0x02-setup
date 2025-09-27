# Next.js Project Setup and Basics.

A Basic Project Setup to learn Next.js.

---

## Project Structure

- **components/**  
  Contains reusable React components.  
  - `common/Card.tsx`: Displays property info (image, title, description).  
  - `common/Button.tsx`: Reusable button for actions like "Book Now" and "Details".

- **interfaces/**  
  Holds TypeScript interfaces to define props and types used across the app.  
  - `index.ts`: Placeholder interfaces for `CardProps` and `ButtonProps`.

- **constants/**  
  Central location for reusable constants, API URLs, config values, and static UI texts.  
  - `index.ts`: Stores API_URL and UI text constants.

- **public/assets/**  
  Stores images, SVGs, and other static assets for the app. Example: `placeholder.jpg`.

---

## Running the Project

1. Install dependencies:
   ```bash
   npm install
