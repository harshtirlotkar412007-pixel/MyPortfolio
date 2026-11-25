# Harsh Tirlotkar — Personal Portfolio

A simple, responsive student portfolio built with React and Vite. The visual style follows the supplied reference: off-white background, muted blue accents, balanced spacing, and a centered navigation bar.

## Requirements
- Node.js 18 or newer
- npm

## Run locally
1. Extract the ZIP.
2. Open the project folder in VS Code or a terminal.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Create a production build
```bash
npm run build
npm run preview
```

## Project structure
```text
harsh-personal-portfolio/
├── public/
│   ├── images/
│   │   ├── hero-code.svg
│   │   ├── bitebox.svg
│   │   ├── medishield.svg
│   │   ├── chalochale.svg
│   │   └── shopcart.svg
│   └── Harsh-Tirlotkar-Resume.pdf
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── SectionTitle.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
└── README.md
```

## Personal information
Education, contact details, project names, technologies, and project descriptions are based on the supplied resume. The downloadable PDF in `public/` is the uploaded resume.

## GitHub project links
The portfolio links to the supplied GitHub profile. Individual project repository links are intentionally omitted because the project repositories could not be independently verified as belonging to this profile.

## Editing content
- Update project text and skill labels in `src/App.jsx`.
- Update colors and layout in `src/styles.css`.
- Replace the resume PDF at `public/Harsh-Tirlotkar-Resume.pdf` if you later update your resume.
- Replace the SVG preview assets in `public/images/` with your own screenshots whenever you have them.
