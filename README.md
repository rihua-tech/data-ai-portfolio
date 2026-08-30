# Data Science & Applied AI Portfolio

[![CI](https://github.com/rihua-tech/data-ai-portfolio/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/rihua-tech/data-ai-portfolio/actions/workflows/ci.yml?query=branch%3Amain)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://rihua.dev/)

Portfolio focused on applied data science, NLP, model evaluation, hybrid RAG, retrieval experimentation, and practical AI systems, with cloud data engineering and analytics projects as supporting technical foundations.

## Live Portfolio

**[rihua.dev](https://rihua.dev/)**

## Featured Applied AI & Data Science Projects

### Financial Complaint Auto-Routing with NLP

Offline, leakage-safe eight-class CFPB complaint-classification study comparing a TF-IDF + Linear SVM benchmark with a frozen DistilBERT challenger and model-specific Auto-Route / Human Review policies.

- Identified substantial evaluation leakage: 3,876 of 9,840 original test rows (39.39%) overlapped training; rebuilt the 2024 split with group-aware validation and zero normalized-text overlap.
- On the corrected shared benchmark, DistilBERT improved Macro F1 from 0.7671 to 0.7949 and increased coverage, while the Linear SVM retained slightly better routed accuracy and misroute rate.
- Retrospective evaluation on 30,156 leakage-resistant 2025 rows reproduced the same trade-off; V1 remains the temporally validated benchmark while V2 remains a frozen challenger pending a new untouched period.

**Evidence:** [Case Study](https://rihua.dev/projects/financial-complaint-auto-routing-nlp) · [Repository](https://github.com/rihua-tech/financial-complaint-auto-routing-nlp) · [Full Project Report](https://github.com/rihua-tech/financial-complaint-auto-routing-nlp/blob/main/Financial_Complaint_Auto_Routing_NLP_Project_Report.pdf) · [Shared 2024 Evaluation](https://github.com/rihua-tech/financial-complaint-auto-routing-nlp/blob/main/reports/v1_v2_2024_comparison.md) · [2025 Retrospective Evaluation](https://github.com/rihua-tech/financial-complaint-auto-routing-nlp/blob/main/reports/v2_2025_retrospective_results.md)

### CivicLens RAG — NYC 311 Operations Copilot

Hosted non-production hybrid RAG application for grounded NYC 311 documentation Q&A, combining retrieval experimentation, citation validation, explicit abstention handling, and bounded analytics.

- Built hybrid retrieval using semantic search, PostgreSQL full-text search, and deterministic Reciprocal Rank Fusion over a curated NYC 311 corpus, with grounded answers and validated citations.
- On the approved 24-question local evaluation, hybrid retrieval achieved 83.9% Recall@5 and 92.9% expected-source retrieval across 14 retrieval-eligible questions; reranking improved MRR but slightly reduced Recall@5.
- Delivered a hosted Next.js → FastAPI → PostgreSQL/pgvector application with four allowlisted read-only analytics tools and explicit non-production boundaries.

**Evidence:** [Live Demo](https://civiclens-rag-nyc311.vercel.app) · [Case Study](https://rihua.dev/projects/civiclens-rag-nyc311) · [Repository](https://github.com/rihua-tech/civiclens-rag-nyc311) · [Architecture](https://github.com/rihua-tech/civiclens-rag-nyc311/blob/main/docs/architecture.md) · [Evaluation Report](https://github.com/rihua-tech/civiclens-rag-nyc311/blob/main/docs/evaluation-report.md)

## Data & Cloud Foundations

### NYC 311 Service Requests Lakehouse

Azure-first medallion lakehouse using Azure Data Factory, ADLS Gen2, Databricks, PySpark, and Delta Lake to produce bronze, silver, and gold datasets. The repository includes reusable data-quality checks, dimensional models, reporting marts, cloud execution evidence, and Power BI-ready outputs.

**Links:** [Case Study](https://rihua.dev/projects/nyc-311-service-requests-lakehouse) · [Repository](https://github.com/rihua-tech/nyc-311-service-requests-lakehouse)

### Cloud Flight Fare Pipeline

Proven AWS batch path using EventBridge Scheduler, ECS/Fargate, S3 Bronze storage, Redshift Serverless, dbt staging/marts/tests, CloudWatch logs, and a Docker batch runner. The project includes successful cloud-execution proof, runbooks, and cost/secret safety notes.

**Links:** [Case Study](https://rihua.dev/projects/cloud-flight-fare-pipeline) · [Repository](https://github.com/rihua-tech/cloud-flight-fare-pipeline)

## Supporting Analytics Projects

- **[Flight Price Analytics](https://github.com/rihua-tech/flight-price-analytics):** Time-based Buy/Wait classification and fare forecasting with feature engineering and backtesting.
- **[Floral Daily SKU Analysis](https://github.com/rihua-tech/floral_daily_sku_analysis):** Daily sales, margin, promotion, holiday, and waste analysis using Python, SQL, and Power BI.
- **[Travelpayouts Flight Collector](https://github.com/rihua-tech/travelpayouts-flight-collector):** Python API ingestion that publishes dated flight-fare CSV snapshots with tests and automated scheduling.
- **[Sumryze — AI-Powered SEO Reporting Dashboard](https://github.com/rihua-tech/sumryze-saas-website):** SaaS-style SEO reporting dashboard with analytics visualizations and AI-generated summaries.

## Skills & Methods

- **Programming & Analysis:** Python, SQL, pandas, Statistical Analysis
- **Machine Learning & NLP:** scikit-learn, TF-IDF, Linear SVM, PyTorch, Transformers, DistilBERT, Text Classification
- **Model Evaluation & Experimentation:** Macro F1, Accuracy, Coverage, Model Comparison, Error Analysis, Leakage Prevention, Group-Aware Validation, Time-Based Validation, Backtesting
- **AI / RAG:** Embeddings, Vector Search, Hybrid Retrieval, RRF, PostgreSQL/pgvector, Retrieval Evaluation, Grounded Generation
- **Data & Analytics:** PostgreSQL, PySpark, Delta Lake, dbt, Databricks, Power BI
- **Engineering & Cloud:** FastAPI, Docker, GitHub Actions, Azure, AWS, Apache Airflow

## Portfolio Website Stack

- Next.js / React / TypeScript
- Tailwind CSS
- Vercel deployment and analytics

## Development

```bash
npm ci
npm run dev
npm run lint
npx tsc --noEmit
npm run build
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

The portfolio is deployed on Vercel; individual project deployments, including CivicLens, use their own documented application architectures.
