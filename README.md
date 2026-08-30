# Data Science & Applied AI Portfolio

[![CI](https://github.com/rihua-tech/data-ai-portfolio/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/rihua-tech/data-ai-portfolio/actions/workflows/ci.yml?query=branch%3Amain)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://rihua.dev/)

Portfolio focused on applied data science, NLP, model evaluation, hybrid RAG, retrieval experimentation, and practical AI systems, with cloud data engineering and analytics projects as supporting technical foundations.

## Live Portfolio

**[rihua.dev](https://rihua.dev/)**

## Featured Applied AI & Data Science Projects

### Financial Complaint Auto-Routing with NLP

Leakage-safe, eight-class CFPB complaint-classification and selective-routing study. The project compares a locked TF-IDF + Linear SVM benchmark with a frozen DistilBERT challenger and routes cases to either an Auto-Route recommendation or Human Review using model-specific score and margin policies.

- An audit found that 3,876 of 9,840 original test rows (39.39%) shared normalized complaint text with training. The corrected group-aware 2024 split reduced development/final-test normalized-text overlap to zero.
- On the shared 2024 benchmark, Macro F1 increased from 0.7671 for V1 to 0.7949 for V2. V2 also increased coverage, while V1 retained slightly better routed accuracy and misroute rate.
- Both frozen models were compared retrospectively on a 30,156-row leakage-resistant 2025 cohort. V2 again improved aggregate classification and coverage but did not establish a sufficient routing-risk advantage for promotion.
- V1 remains the temporally validated benchmark; V2 remains the frozen challenger pending evidence from a new untouched period. This is an offline decision-support study, not a deployed complaint-routing service.

**Evidence:** [Case Study](https://rihua.dev/projects/financial-complaint-auto-routing-nlp) · [Repository](https://github.com/rihua-tech/financial-complaint-auto-routing-nlp) · [Full Project Report](https://github.com/rihua-tech/financial-complaint-auto-routing-nlp/blob/main/Financial_Complaint_Auto_Routing_NLP_Project_Report.pdf) · [Shared 2024 Evaluation](https://github.com/rihua-tech/financial-complaint-auto-routing-nlp/blob/main/reports/v1_v2_2024_comparison.md) · [2025 Retrospective Evaluation](https://github.com/rihua-tech/financial-complaint-auto-routing-nlp/blob/main/reports/v2_2025_retrospective_results.md)

### CivicLens RAG — NYC 311 Operations Copilot

Hosted, non-production hybrid RAG portfolio application for grounded NYC 311 documentation Q&A and bounded approved analytics. It separates the recruiter-facing product UI from retrieval, generation, citation validation, and analytics orchestration.

- Semantic retrieval and PostgreSQL full-text search are fused with deterministic Reciprocal Rank Fusion over a manifest-controlled corpus. PostgreSQL remains authoritative for text and provenance; pgvector provides dense retrieval.
- Grounded generation receives allowlisted evidence, while CivicLens validates stable citations and provides explicit abstention handling for unsupported or uncited answers.
- The approved local evaluation uses a 24-question fixture with 14 retrieval-eligible questions. Hybrid retrieval reached 83.9% Recall@5 and 92.9% expected-source retrieval; reranking improved MRR but slightly reduced Recall@5.
- Hosted path: browser → Vercel Next.js → Render FastAPI → CivicLens orchestration → Neon PostgreSQL + pgvector. Streamlit remains a separate engineering, validation, and debugging client.
- Analytics is limited to four typed, allowlisted, read-only tools over checked-in sample CSV outputs—not unrestricted text-to-SQL or autonomous tool execution.

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

- Next.js 16.1.6 with the App Router
- React and React DOM 19.2.4
- TypeScript 5.7.3
- Tailwind CSS 4.2.1
- Vercel Analytics 1.6.1

## Local Development

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Deployment

The portfolio website is deployed on Vercel using the committed `package-lock.json`. Portfolio deployment is separate from the CivicLens application architecture described above.

## Repository Structure

- `app/` — App Router pages, case studies, metadata, and metadata routes
- `components/` — Homepage sections and reusable UI components
- `data/` — Project and skills content rendered by the portfolio
- `public/` — Resume, profile, and project image assets
- `styles/` — Global stylesheet entrypoint

## Notes for Reviewers

- The portfolio is positioned for Data Scientist, Applied AI, NLP/model-evaluation, and RAG/retrieval-evaluation roles.
- Claims clearly separate measured experiment evidence, retrospective comparisons, hosted portfolio demonstrations, and production claims.
- Project case studies and source repositories contain the deeper architecture, evaluation, limitations, and execution proof.
- Azure and AWS projects remain supporting evidence of cloud data-platform and analytics-engineering capability.
