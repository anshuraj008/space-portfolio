# Repository overview

- Name: space-portfolio
- Framework: Next.js (App Router)
- Language: TypeScript + React 19
- Styling: Tailwind CSS v4
- Animation/3D: framer-motion, @react-three/fiber, @react-three/drei, three

## Scripts
- dev: next dev --turbopack
- build: next build
- start: next start
- lint: next lint

## Key structure
- app/
  - layout.tsx (global layout with StarsCanvas, Navbar, Footer)
  - page.tsx (Hero, About, Skills, Encryption, Projects)
  - globals.css (Tailwind v4 + custom styles)
- components/
  - main/ (Navbar, Hero, About, Skills, Encryption, Projects, StarBackground, Footer)
  - sub/ (HeroContent, ProjectCard, SkillDataProvider, SkillText)
- constants/ (skills, socials, resume path)
- utils/ (motion variants)
- public/ (images, videos, pdf)

## Notable configuration
- next.config.ts: default
- postcss.config.mjs: uses @tailwindcss/postcss
- eslint.config.mjs: Next + TS flat config
- tsconfig.json: strict true, bundler resolution, next plugin

## Recent fixes applied
- Removed unused `maath` import from StarBackground to prevent runtime error.
- Fixed CSS transform typo in Skills (`scale(0.9)`).
- Moved runtime libraries to dependencies in package.json (framer-motion, @react-three/*, three, react-intersection-observer).
- Updated missing project image paths in Projects to existing files (`/macbook.png`, `/glaxy.png`).

## Follow-ups recommended
- Replace placeholder project images/titles with real assets.
- Convert Footer items to real links.
- Consider aligning Navbar anchors with available sections (no `#experience` section present).
- Normalize asset names (avoid spaces and duplicate extensions).