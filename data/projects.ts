export type ProjectCategory = "DE" | "AIDE" | "MLAI" | "DA" | "DS"
export type ProjectActionKey =
  | "caseStudy"
  | "repo"
  | "data"
  | "architecture"
  | "executionProof"
  | "docs"
  | "screenshots"
  | "live"
  | "comingSoon"

export interface PortfolioProject {
  category: ProjectCategory
  featuredLabel?: string
  topLabel?: string
  liveLabel?: string
  status?: string
  title: string
  subtitle: string
  image?: string
  imageAlt?: string
  caseStudyUrl?: string
  repoUrl?: string
  dataUrl?: string
  architectureUrl?: string
  executionProofUrl?: string
  docsUrl?: string
  screenshotsUrl?: string
  liveUrl?: string
  stack: string[]
  highlights: string[]
  showHighlights?: boolean
  cardActions?: ProjectActionKey[]
}

export const projects: PortfolioProject[] = [
  {
    category: "DE",
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
    category: "AIDE",
    topLabel: "AI DATA ENGINEERING / HYBRID RAG",
    status: "COMPLETED LOCAL PROTOTYPE",
    title: "CivicLens RAG — NYC 311 Operations Copilot",
    subtitle:
      "Local Hybrid RAG prototype for grounded NYC 311 documentation Q&A with citations, PostgreSQL/pgvector retrieval, sample analytics, and a Streamlit UI.",
    image: "/projects/civiclens-rag-nyc311.jpg",
    imageAlt:
      "CivicLens RAG architecture showing curated NYC 311 docs, local embeddings, PostgreSQL/pgvector retrieval, cited answers, sample analytics, and Streamlit UI.",
    repoUrl: "https://github.com/rihua-tech/civiclens-rag-nyc311",
    caseStudyUrl: "/projects/civiclens-rag-nyc311",
    architectureUrl: "https://github.com/rihua-tech/civiclens-rag-nyc311#hybrid-rag-architecture",
    screenshotsUrl: "https://github.com/rihua-tech/civiclens-rag-nyc311#screenshots",
    stack: [
      "Python",
      "PostgreSQL",
      "pgvector",
      "Streamlit",
      "Docker",
      "RAG",
      "GitHub Actions",
      "pytest",
    ],
    highlights: [
      "Ingests curated NYC 311 docs and runbooks, chunks source text, and stores local embeddings in PostgreSQL/pgvector.",
      "Retrieves cited context for grounded answers and routes sample analytics questions to predefined CSV summaries.",
    ],
    showHighlights: true,
    cardActions: ["repo", "caseStudy", "architecture", "screenshots"],
  },
  {
    category: "MLAI",
    topLabel: "AI DATA SCIENCE / NLP CLASSIFICATION / ML PIPELINE",
    status: "VERSION 2 PLANNED",
    title: "Financial Complaint Auto-Routing with NLP",
    subtitle:
      "NLP classification project for routing consumer financial complaints into product categories using classical ML baselines and a planned DistilBERT transformer upgrade, with model evaluation, error analysis, and business-focused routing logic.",
    image: "/projects/financial-complaint-nlp-workflow.png",
    imageAlt:
      "Financial complaint NLP workflow diagram showing complaint text preprocessing, TF-IDF baseline, DistilBERT transformer upgrade, evaluation, and routing.",
    repoUrl: "#",
    caseStudyUrl: "#",
    architectureUrl: "#",
    stack: [
      "Python",
      "pandas",
      "scikit-learn",
      "NLP",
      "TF-IDF",
      "PyTorch",
      "Transformers",
      "DistilBERT",
      "Model Evaluation",
      "Classification",
    ],
    highlights: [
      "Ingests and cleans consumer financial complaint text data for supervised NLP classification.",
      "Compares TF-IDF baseline models with a planned DistilBERT transformer upgrade using macro F1, weighted F1, precision, recall, and confusion matrix.",
      "Designs a complaint-routing workflow where high-confidence predictions can be auto-routed and low-confidence cases are flagged for human review.",
    ],
    showHighlights: true,
    cardActions: ["repo", "caseStudy", "architecture"],
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
  {
    category: "DA",
    topLabel: "DATA ANALYTICS",
    title: "Floral Daily SKU Analysis",
    subtitle:
      "Sales and inventory analysis project focused on daily SKU movement, reporting, and business decision support.",
    image: "/projects/floral-sku-analysis.jpg",
    repoUrl: "https://github.com/rihua-tech/floral_daily_sku_analysis",
    stack: ["SQL", "Analytics", "Reporting"],
    highlights: ["SKU trends", "Daily insights", "Inventory and sales analytics"],
  },
  {
    category: "DS",
    title: "Flight Price Analytics",
    subtitle: "Exploratory analysis and modeling path for flight price behavior.",
    image: "/projects/flight-price-analytics.png",
    repoUrl: "https://github.com/rihua-tech/flight-price-analytics",
    stack: ["Python", "EDA", "ML"],
    highlights: ["Exploratory modeling", "Feature insights", "Prediction angle"],
  },
]
