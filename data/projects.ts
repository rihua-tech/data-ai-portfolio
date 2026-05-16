export type ProjectCategory = "DE" | "DA" | "DS"
export type ProjectActionKey =
  | "caseStudy"
  | "repo"
  | "data"
  | "architecture"
  | "executionProof"
  | "docs"
  | "live"

export interface PortfolioProject {
  category: ProjectCategory
  featuredLabel?: string
  topLabel?: string
  liveLabel?: string
  title: string
  subtitle: string
  image: string
  caseStudyUrl?: string
  repoUrl: string
  dataUrl?: string
  architectureUrl?: string
  executionProofUrl?: string
  docsUrl?: string
  liveUrl?: string
  stack: string[]
  highlights: string[]
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
