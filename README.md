# Data Engineer Portfolio

[![CI](https://github.com/rihua-tech/data-engineer-portfolio/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/rihua-tech/data-engineer-portfolio/actions/workflows/ci.yml?query=branch%3Amain)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://data-engineer-portfolio-eta.vercel.app/)

Recruiter-facing portfolio site for data engineering roles, built with Next.js, TypeScript, and Tailwind CSS. The site showcases real cloud data engineering projects, analytics-ready datasets, proof-based case studies, and supporting analytics/web work.

## Live site

- Portfolio: https://rihua-dev.vercel.app/

After the custom domain is connected, this will move to https://rihua.dev.

## What this portfolio shows

- Azure lakehouse project with ADF, ADLS Gen2, Databricks, PySpark, Delta Lake, and Power BI
- AWS cloud proof project with EventBridge Scheduler, ECS/Fargate, S3, Redshift Serverless, dbt, and CloudWatch Logs
- Reproducible project documentation, architecture diagrams, proof screenshots, and runbooks
- Analytics-ready marts, SQL outputs, validation checks, and reviewer-friendly case study pages
- Contact links for GitHub, LinkedIn, resume, and email

## Featured projects

### NYC 311 Service Requests Lakehouse

Azure-first medallion lakehouse for NYC 311 operational analytics. The project demonstrates API ingestion, ADLS Gen2 storage, Databricks/PySpark processing, Delta Lake bronze/silver/gold layers, quality checks, dimensional models, reporting marts, and Power BI-ready outputs.

Links:
- Case study: `/projects/nyc-311-service-requests-lakehouse`
- Repository: https://github.com/rihua-tech/nyc-311-service-requests-lakehouse

### Cloud Flight Fare Pipeline

Real AWS cloud proof project showing EventBridge Scheduler, ECS/Fargate, Flight API ingestion, S3 Bronze landing, Redshift Serverless loading, dbt staging/marts/tests, and CloudWatch execution logs.

Links:
- Case study: `/projects/cloud-flight-fare-pipeline`
- Repository: https://github.com/rihua-tech/cloud-flight-fare-pipeline

### Travelpayouts Flight Collector

Python API ingestion project that collects flight fare data and publishes dated CSV snapshots for downstream analysis.

### Supporting analytics and web projects

- Sumryze: AI-powered SEO reporting dashboard
- Floral Daily SKU Analysis
- Flight Price Analytics

## Skills represented

- Orchestration & Workflow: Apache Airflow, Azure Data Factory, EventBridge Scheduler, GitHub Actions
- Cloud Execution & Containers: Docker, ECS/Fargate, ECR, CloudWatch Logs
- Storage, Lakehouse & Warehouse: ADLS Gen2, Delta Lake, Databricks, Amazon S3, Redshift Serverless, PostgreSQL
- Transformation & Modeling: Python, SQL, PySpark, dbt, Dimensional Modeling
- Data Quality & CI: dbt Tests, pytest, Data Validation, Validation SQL, GitHub Actions
- Analytics Enablement: Power BI, SQL Marts, KPI Design, BI Handoff, Documentation

## Website stack

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

No app-specific environment variables are required for a base deployment.

Metadata, `robots`, and `sitemap` use `NEXT_PUBLIC_SITE_URL` if it is set.

If `NEXT_PUBLIC_SITE_URL` is not set, the app falls back to Vercel system URLs in production and `http://localhost:3000` in local development.

## Repository structure

- `app/`: App Router entrypoints, global metadata, and metadata routes
- `components/`: UI sections and reusable components
- `data/`: portfolio project and skills content
- `public/`: icons, resume, and project images

## Notes for reviewers

- This portfolio is intentionally focused on recruiter-facing data engineering work.
- Project links point to supporting repositories, architecture diagrams, execution proof, and documentation.
- The codebase is validated with linting, TypeScript checks, and a production build.
- Case study pages separate proven cloud execution, local validation paths, and downstream analytics outputs to avoid overclaiming.
