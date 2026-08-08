
# Data & AI Engineering Portfolio

[![CI](https://github.com/rihua-tech/data-ai-portfolio/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/rihua-tech/data-ai-portfolio/actions/workflows/ci.yml?query=branch%3Amain)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://rihua.dev/)

Recruiter-facing portfolio for data engineering, applied AI/ML, and analytics roles, built with Next.js, TypeScript, and Tailwind CSS. The site showcases cloud data platforms, AI/RAG-enabled applications, analytics-ready datasets, proof-based case studies, and reviewer-friendly documentation.

## Live site

- Portfolio: https://rihua-dev.vercel.app/

## What this portfolio shows

- Azure lakehouse project with ADF, ADLS Gen2, Databricks, PySpark, Delta Lake, and Power BI
- AWS batch data pipeline with ECS/Fargate, S3, Redshift Serverless, dbt, and CloudWatch proof
- AI Data Engineering / Hybrid RAG project with PostgreSQL/pgvector, Streamlit, cited answers, and evaluation checks
- Recruiter-friendly case study pages with architecture, proof, screenshots, and documentation links
- Skills and tools grouped by orchestration, cloud execution, storage, modeling, AI/RAG, quality checks, and analytics enablement

## Featured projects

### NYC 311 Service Requests Lakehouse

Azure-first medallion lakehouse for NYC 311 operational analytics. The project demonstrates API ingestion, ADLS Gen2 storage, Databricks/PySpark processing, Delta Lake bronze/silver/gold layers, data quality checks, dimensional models, reporting marts, and Power BI-ready outputs.

Links:
- Case Study: [/projects/nyc-311-service-requests-lakehouse](https://rihua-dev.vercel.app/projects/nyc-311-service-requests-lakehouse)
- Repository: https://github.com/rihua-tech/nyc-311-service-requests-lakehouse

### Cloud Flight Fare Pipeline

AWS cloud proof project with EventBridge Scheduler, ECS/Fargate, S3 Bronze landing, Redshift Serverless loading, dbt staging/marts/tests, CloudWatch logs, architecture diagrams, runbooks, and cost/secret safety notes.

Links:
- Case Study: [/projects/cloud-flight-fare-pipeline](https://rihua-dev.vercel.app/projects/cloud-flight-fare-pipeline)
- Repository: https://github.com/rihua-tech/cloud-flight-fare-pipeline

### CivicLens RAG - NYC 311 Operations Copilot

Local AI Data Engineering / Hybrid RAG prototype for grounded NYC 311 documentation Q&A with citations, PostgreSQL/pgvector retrieval, sample analytics, Streamlit UI, GitHub Actions CI, pytest coverage, and an 18-question evaluation set.

Links:
- Case Study: [/projects/civiclens-rag-nyc311](https://rihua-dev.vercel.app/projects/civiclens-rag-nyc311)
- Repository: https://github.com/rihua-tech/civiclens-rag-nyc311

## Supporting projects

- Travelpayouts Flight Collector: Python API ingestion project that collects flight fare data and publishes dated CSV snapshots for analysis.
- Sumryze AI-powered SEO Reporting Dashboard: Dashboard project for SEO reporting workflows, analytics visualizations, and client-ready summaries.
- Floral Daily SKU Analysis: Sales and inventory analysis focused on daily SKU movement and reporting support.
- Flight Price Analytics: Exploratory analysis and modeling path for flight price behavior.

## Skills represented

- Orchestration & Workflow: Apache Airflow, Azure Data Factory, EventBridge Scheduler, GitHub Actions
- Cloud Execution & Containers: Docker, ECS/Fargate, ECR, CloudWatch Logs
- Storage, Lakehouse & Warehouse: ADLS Gen2, Delta Lake, Databricks, Amazon S3, Redshift Serverless, PostgreSQL
- Transformation & Modeling: Python, SQL, PySpark, dbt, dimensional modeling
- AI / RAG Engineering: RAG, vector search, embeddings, pgvector, cited answers, Streamlit, AI evaluation
- Data Quality & CI: dbt tests, pytest, data validation, validation SQL, GitHub Actions
- Analytics Enablement: Power BI, SQL marts, KPI design, BI handoff, documentation

## Website stack

- Next.js 16 App Router
- React 19
- TypeScript 5.7
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

This repository is configured for Vercel deployment with `npm` and `package-lock.json`.

No app-specific environment variables are required for a base deployment. Metadata, `robots`, and `sitemap` use `NEXT_PUBLIC_SITE_URL` when it is set, otherwise they fall back to Vercel system URLs in production and `http://localhost:3000` locally.

## Repository structure

- `app/`: App Router entrypoints, project case studies, global metadata, and metadata routes
- `components/`: UI sections and reusable components
- `data/`: portfolio project and skills content
- `public/`: icons, resume, and project images
- `styles/`: global stylesheet entrypoint

## Notes for reviewers

- This portfolio is intentionally focused on recruiter-facing data engineering work.
- Project links point to supporting repositories, case studies, architecture diagrams, screenshots, and proof documentation.
- CivicLens RAG is a completed local prototype, not a deployed production AI system.
- The codebase is validated with linting, TypeScript checks, and a production build.
