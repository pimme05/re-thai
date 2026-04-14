# AETHER — Semicon & Advanced Electronics Platform

A workforce development platform connecting Thai university students with semiconductor and advanced electronics companies through task-based simulations and verified micro-credentials.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** (dev/build)
- **Tailwind CSS** + **shadcn/ui**
- **React Router v6**
- **TanStack Query**
- **Framer Motion**
- **Recharts**

## Getting Started

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/      # Layout & shared UI
├── pages/           # Route-level pages
│   ├── Landing.tsx
│   ├── Marketplace.tsx
│   ├── StudentDashboard.tsx
│   ├── CompanyDashboard.tsx
│   ├── UniversityDashboard.tsx
│   ├── AdminDashboard.tsx
│   ├── Workspace.tsx
│   ├── Credentials.tsx
│   ├── Opportunities.tsx
│   └── SimulationDetail.tsx
├── lib/
│   └── mockData.ts  # Sample data
└── index.css        # Global styles
```

## Deployment

This project is ready to deploy to **Vercel**, **Netlify**, or **GitHub Pages**.

For Vercel/Netlify: connect your GitHub repo and set the build command to `npm run build` with output directory `dist`.
