export type ProjectCategory = "DE" | "AIDE" | "MLAI" | "DA" | "DS"
export type ProjectActionKey =
  | "caseStudy"
  | "repo"
  | "data"
  | "architecture"
  | "executionProof"
  | "docs"
  | "screenshots"
  | "mlPipeline"
  | "sqlAnalysis"
  | "live"
  | "comingSoon"

export interface PortfolioProject {
  category: ProjectCategory
  homepageFeatured?: boolean
  featuredLabel?: string
  topLabel?: string
  liveLabel?: string
  status?: string
  title: string
  subtitle: string
  image?: string
  imageAlt?: string
  imageFit?: "cover" | "contain"
  imageAspect?: "4:3"
  caseStudyUrl?: string
  reportUrl?: string
  repoUrl?: string
  dataUrl?: string
  architectureUrl?: string
  executionProofUrl?: string
  docsUrl?: string
  screenshotsUrl?: string
  mlPipelineUrl?: string
  sqlAnalysisUrl?: string
  liveUrl?: string
  stack: string[]
  highlights: string[]
  homepageHighlightLimit?: number
  showHighlights?: boolean
  cardActions?: ProjectActionKey[]
}

export const projects: PortfolioProject[] = [
  {
    category: "DE",
    homepageFeatured: false,
    featuredLabel: "AZURE DATA ENGINEERING",
    title: "NYC 311 Service Requests Lakehouse",
    subtitle:
      "Azure-first medallion lakehouse for NYC 311 operational analytics, transforming raw API data into analytics-ready bronze, silver, and gold datasets.",
    image: "/projects/nyc-311-lakehouse.jpg",
    caseStudyUrl: "/projects/nyc-311-service-requests-lakehouse",
    repoUrl: "https://github.com/rihua-tech/nyc-311-service-requests-lakehouse",
    architectureUrl: "/projects/nyc-311-service-requests-lakehouse#architecture",
    executionProofUrl: "/projects/nyc-311-service-requests-lakehouse#execution-proof",
    docsUrl: "https://github.com/rihua-tech/nyc-311-service-requests-lakehouse/tree/main/docs",
    stack: [
      "Azure Data Factory",
      "ADLS Gen2",
      "Databricks",
      "PySpark",
      "Delta Lake",
      "Python",
      "SQL",
      "Power BI",
      "GitHub Actions",
    ],
    highlights: [
      "Azure Data Factory -> ADLS Gen2 -> Databricks pipeline with proven raw landing and medallion processing",
      "Reusable data quality checks, dimensional models, and reporting marts",
      "Architecture notes, runbooks, SQL assets, notebook exports, and cloud execution proof",
    ],
    cardActions: ["caseStudy", "repo", "architecture", "executionProof"],
  },
  {
    category: "DE",
    topLabel: "REAL AWS CLOUD PROOF",
    title: "Cloud Flight Fare Pipeline",
    subtitle:
      "Real AWS cloud proof project showing EventBridge Scheduler -> ECS/Fargate -> Flight API -> S3 Bronze -> Redshift Serverless -> dbt staging/marts/tests -> CloudWatch Logs, with proof screenshots, runbooks, and cost/secret safety notes.",
    image: "/projects/cloud-flight-fare-pipeline.jpg",
    caseStudyUrl: "/projects/cloud-flight-fare-pipeline",
    repoUrl: "https://github.com/rihua-tech/cloud-flight-fare-pipeline",
    architectureUrl: "/projects/cloud-flight-fare-pipeline#architecture",
    executionProofUrl: "/projects/cloud-flight-fare-pipeline#execution-proof",
    docsUrl: "https://github.com/rihua-tech/cloud-flight-fare-pipeline/tree/main/docs",
    stack: ["AWS", "ECS/Fargate", "EventBridge", "S3", "Redshift", "dbt", "Docker", "CloudWatch"],
    highlights: [
      "Proven AWS path: EventBridge Scheduler -> ECS/Fargate -> S3 Bronze -> Redshift Serverless -> dbt marts/tests",
      "CloudWatch success logs, proof screenshots, runbooks, and cost/secret safety notes",
      "Docker batch runner, Redshift COPY load, dbt models/tests, and mart verification",
    ],
    cardActions: ["caseStudy", "repo", "architecture", "executionProof"],
  },
  {
    category: "DE",
    title: "Travelpayouts Flight Collector",
    topLabel: "PYTHON DATA INGESTION",
    subtitle:
      "Python API ingestion project that collects live Travelpayouts flight fare data and publishes dated CSV snapshots for analytics.",
    image: "/projects/travelpayouts-flight-collector.jpg",
    repoUrl: "https://github.com/rihua-tech/travelpayouts-flight-collector",
    dataUrl: "https://github.com/rihua-tech/flight-price-data",
    stack: ["Python", "API Ingestion", "CSV", "Scheduling", "pytest", "GitHub Actions"],
    highlights: [
      "Collects live flight pricing data from the Travelpayouts API",
      "Generates immutable daily CSV snapshots",
      "Includes tests, CI, and automated scheduling",
    ],
  },
  {
    category: "MLAI",
    homepageFeatured: true,
    topLabel: "NLP CLASSIFICATION / MODEL EVALUATION",
    status: "COMPLETED V1–V2 STUDY",
    title: "Financial Complaint Auto-Routing with NLP",
    subtitle:
      "Leakage-safe eight-class CFPB text-classification study comparing a locked TF-IDF + Linear SVM benchmark with a frozen DistilBERT challenger and human-in-the-loop routing.",
    image: "/projects/financial-complaint-nlp-routing-architecture-v3.jpg",
    imageAlt:
      "Financial Complaint Auto-Routing NLP workflow showing leakage-safe preparation, TF-IDF and DistilBERT evaluation, selective routing, and retrospective validation.",
    imageFit: "contain",
    imageAspect: "4:3",
    repoUrl:
      "https://github.com/rihua-tech/financial-complaint-auto-routing-nlp",
    caseStudyUrl: "/projects/financial-complaint-auto-routing-nlp",
    reportUrl:
      "https://github.com/rihua-tech/financial-complaint-auto-routing-nlp/blob/main/Financial_Complaint_Auto_Routing_NLP_Project_Report.pdf",
    architectureUrl:
      "https://github.com/rihua-tech/financial-complaint-auto-routing-nlp#architecture-overview",
    stack: [
      "Python",
      "scikit-learn",
      "TF-IDF",
      "Linear SVM",
      "PyTorch",
      "DistilBERT",
      "Model Evaluation",
    ],
    highlights: [
      "Removed duplicate-text leakage and used group-aware 2024 development/test splits with zero normalized-text overlap.",
      "On the shared 2024 benchmark, the frozen DistilBERT challenger increased Macro F1 from 0.7671 to 0.7949; both frozen models were later compared on a 30,156-row retrospective 2025 cohort.",
    ],
    homepageHighlightLimit: 2,
    showHighlights: true,
    cardActions: ["repo", "caseStudy", "architecture"],
  },
  {
    category: "AIDE",
    homepageFeatured: true,
    topLabel: "APPLIED AI / RAG EVALUATION",
    status: "HOSTED PORTFOLIO DEMO",
    title: "CivicLens RAG — NYC 311 Operations Copilot",
    subtitle:
      "Hosted hybrid RAG application for grounded NYC 311 documentation Q&A with semantic + full-text retrieval, validated citations, safe abstention, and bounded analytics.",
    image: "/projects/civiclens-rag-nyc311-hosted-v2.jpg",
    imageAlt:
      "CivicLens hybrid RAG workflow showing NYC 311 document ingestion, pgvector retrieval, cited answers, Next.js UI, analytics routing, and local evaluation.",
    imageFit: "contain",
    repoUrl: "https://github.com/rihua-tech/civiclens-rag-nyc311",
    caseStudyUrl: "/projects/civiclens-rag-nyc311",
    liveUrl: "https://civiclens-rag-nyc311.vercel.app",
    liveLabel: "Live Demo",
    architectureUrl:
      "https://github.com/rihua-tech/civiclens-rag-nyc311/blob/main/docs/architecture.md",
    screenshotsUrl:
      "https://github.com/rihua-tech/civiclens-rag-nyc311/tree/main/docs/screenshots",
    stack: [
      "Python",
      "Hybrid Retrieval",
      "RRF",
      "PostgreSQL",
      "pgvector",
      "FastAPI",
      "RAG Evaluation",
    ],
    highlights: [
      "Combined semantic search and PostgreSQL full-text retrieval with deterministic Reciprocal Rank Fusion (RRF) over curated NYC 311 knowledge.",
      "In the approved real-local evaluation, hybrid retrieval reached 83.9% Recall@5 and 92.9% expected-source retrieval across 14 retrieval-eligible questions.",
    ],
    homepageHighlightLimit: 2,
    showHighlights: true,
    cardActions: ["live", "caseStudy", "repo", "architecture"],
  },
  {
    category: "DS",
    topLabel: "DATA SCIENCE",
    title: "Flight Price Analytics",
    subtitle:
      "Time-based Buy/Wait classification and fare forecasting using route-level price snapshots, feature engineering, and backtesting.",
    image: "/projects/flight-price-analytics.png",
    repoUrl: "https://github.com/rihua-tech/flight-price-analytics",
    mlPipelineUrl:
      "https://github.com/rihua-tech/flight-price-analytics/blob/main/09_flight_buy_wait_ml.py",
    stack: ["Python", "scikit-learn", "Forecasting", "Time-Based Split", "Power BI"],
    highlights: ["Exploratory modeling", "Feature insights", "Prediction angle"],
    cardActions: ["repo", "mlPipeline"],
  },
  {
    category: "DA",
    topLabel: "DATA ANALYTICS",
    title: "Floral Daily SKU Analysis",
    subtitle:
      "Daily SKU sales, margin, promotion, holiday, and waste analysis using Python, SQL, and Power BI to support inventory and business decisions.",
    image: "/projects/floral-sku-analysis.jpg",
    repoUrl: "https://github.com/rihua-tech/floral_daily_sku_analysis",
    sqlAnalysisUrl:
      "https://github.com/rihua-tech/floral_daily_sku_analysis/blob/main/05_Floral_%20Department_%20Analytics.sql",
    stack: ["Python", "SQL", "Power BI", "Inventory Analytics", "Trend Analysis"],
    highlights: ["SKU trends", "Daily insights", "Inventory and sales analytics"],
    cardActions: ["repo", "sqlAnalysis"],
  },
  {
    category: "DA",
    topLabel: "AI REPORTING SAAS",
    title: "Sumryze - AI-Powered SEO Reporting Dashboard",
    subtitle:
      "SaaS-style dashboard for automated SEO reporting, AI-generated summaries, analytics visualizations, and client-ready insights.",
    image: "/projects/sumryze-seo-reporting-dashboard.jpg",
    repoUrl: "https://github.com/rihua-tech/sumryze-saas-website",
    liveUrl: "https://sumryze-saas-website.vercel.app/",
    liveLabel: "Live Site",
    stack: ["Next.js", "TypeScript", "Tailwind", "OpenAI", "REST APIs", "Vercel"],
    highlights: [
      "Automated SEO reporting workflows",
      "Analytics visualizations for performance summaries",
      "AI-generated insights for reporting output",
    ],
  },
]
