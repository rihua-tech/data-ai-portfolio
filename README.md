# Data Engineer Portfolio

[![CI](https://github.com/rihua-tech/data-engineer-portfolio/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/rihua-tech/data-engineer-portfolio/actions/workflows/ci.yml?query=branch%3Amain)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://data-engineer-portfolio-eta.vercel.app/)

Recruiter-facing portfolio site for data engineering roles, built with Next.js, TypeScript, and Tailwind CSS. The site highlights production-minded pipeline work, analytics-ready data modeling, and supporting analytics/data science projects.


## What this project shows

- Clear data engineering positioning for portfolio and job-application use
- Featured project with repository, architecture, and documentation links
- Supporting analytics and data science work in the same visual system
- Resume, GitHub, LinkedIn, and direct contact entry points

## Featured work

- **Cloud Flight Fare Pipeline**: end-to-end ELT workflow covering ingestion, storage, dbt marts, analytics outputs, and project documentation
- **Travelpayouts Flight Collector**: scheduled Python ingestion pipeline that publishes dated flight-fare snapshots for downstream analysis
- **Floral Daily SKU Analysis**: SQL-based analysis focused on daily sales and inventory behavior
- **Flight Price Analytics**: exploratory analysis and modeling work around flight-price behavior

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Vercel Analytics

## Local development

```bash
npm ci
npm run dev
```

The app runs locally at `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Deployment

This repository is standardized on `npm` and is ready for Vercel deployment using `package-lock.json`.

- No app-specific environment variables are required for a base deployment
- Metadata, `robots`, and `sitemap` use `NEXT_PUBLIC_SITE_URL` if you set it
- If `NEXT_PUBLIC_SITE_URL` is not set, the app falls back to Vercel system URLs in production and `http://localhost:3000` in local development

## Repository structure

- `app/`: App Router entrypoints, global metadata, and metadata routes
- `components/`: UI sections and reusable components
- `data/`: portfolio project and skills content
- `public/`: icons, resume, and project images

## Notes for reviewers

- The portfolio is intentionally a focused single-page site
- Project links on the site point to supporting repositories and documentation
- The codebase is validated with linting, TypeScript checks, and a production build
