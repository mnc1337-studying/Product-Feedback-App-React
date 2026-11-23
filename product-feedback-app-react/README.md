# Product Feedback App (React)

A component-based web application designed for displaying, filtering, and sorting user feedback. Built with React and Vite, preserving semantic HTML5 markup and a modular SCSS architecture (7-1 Pattern) using the BEM methodology.

---

## Tech Stack

* **React** — Reusable functional components, `props` & `children` composition, and declarative list rendering;
* **Vite** — Next-generation frontend tooling for instant server start and optimized builds;
* **SCSS (Sass)** — Modern `@use` syntax, design variables, mixins, and modular architecture;
* **BEM (Block Element Modifier)** — Clean and scalable CSS class naming convention;
* **Flexbox & CSS Grid** — Responsive layouts and element positioning.

---

## Folder Structure

The project combines a component-based React structure with an adapted SCSS **7-1 Pattern**:

```text
product-feedback-app-react/
├── public/
│   └── favicon.svg         # Icon for HTML page
├── src/
│   ├── assets/
│   │   ├── fonts/          # Local font files
│   │   ├── icons/          # SVG icons
│   ├── components/         # Reusable React UI components (Button, Tag, Toolbar, Suggestions, etc.)
│   ├── styles/
│   │   ├── abstract/       # Variables (_variables.scss) and mixins (_mixins.scss)
│   │   ├── base/           # CSS resets (_reset.scss) and typography (_fonts.scss)
│   │   ├── layout/         # Page scaffolding (_board.scss, _container.scss, _main.scss)
│   │   ├── components/     # Component-specific styles
│   │   └── main.scss       # Main SCSS entry point
│   ├── App.jsx             # Root application component
│   └── main.jsx            # Application entry point
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML template
├── package.json            # Project dependencies and scripts
└── vite.config.js          # Vite configuration
```

---

## Available Scripts

In the project directory, you can run:

* `npm install` — Installs all project dependencies;
* `npm run dev` — Starts the local development server;
* `npm run build` — Builds the app for production into the `dist` folder;
* `npm run lint` — Checks code for linting errors and style issues using ESLint;
* `npm run preview` — Previews the production build locally.
