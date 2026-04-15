export type ProjectCategory = "DE" | "DA" | "DS"

export interface PortfolioProject {
  category: ProjectCategory
  featuredLabel?: string
  topLabel?: string
  liveLabel?: string
  title: string
  subtitle: string
  image: string
  repoUrl: string
  dataUrl?: string
  architectureUrl?: string
  docsUrl?: string
  liveUrl?: string
  stack: string[]
  highlights: string[]
}

export const projects: PortfolioProject[] = [
  {
    category: "DE",
    featuredLabel: "AZURE DATA ENGINEERING",
    title: "NYC 311 Service Requests Lakehouse",
    subtitle:
      "Azure-first medallion lakehouse for NYC 311 operational analytics, transforming raw API data into analytics-ready bronze, silver, and gold datasets.",
    image: "/projects/nyc-311-lakehouse.jpg",
    repoUrl: "https://github.com/rihua-tech/nyc-311-service-requests-lakehouse",
    architectureUrl:
      "https://github.com/rihua-tech/nyc-311-service-requests-lakehouse/blob/main/docs/architecture/medallion-design.md",
    docsUrl: "https://github.com/rihua-tech/nyc-311-service-requests-lakehouse/blob/main/README.md",
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
      "Azure Data Factory → ADLS Gen2 → Databricks pipeline with proven raw landing and medallion processing",
      "Reusable data quality checks, dimensional models, and reporting marts",
      "Architecture notes, runbooks, SQL assets, notebook exports, and cloud execution proof",
    ],
  },
  {
    category: "DE",
    title: "Cloud Flight Fare Pipeline",
    topLabel: "AWS DATA ENGINEERING",
    subtitle: "AWS-focused end-to-end ELT pipeline producing analytics-ready flight fare marts.",
    image: "/projects/flight-fare-pipeline.jpg",
    repoUrl: "https://github.com/rihua-tech/cloud-flight-fare-pipeline",
    architectureUrl: "https://github.com/rihua-tech/cloud-flight-fare-pipeline#architecture",
    docsUrl: "https://github.com/rihua-tech/cloud-flight-fare-pipeline/blob/main/docs/README.md",
    stack: ["Python", "SQL", "Airflow", "dbt", "Postgres", "Redshift", "GitHub Actions"],
    highlights: [
      "End-to-end pipeline: ingest -> raw storage -> dbt marts -> analytics outputs",
      "CI via GitHub Actions + minimal tests + docs",
      "Example SQL queries + screenshots for analytics handoff",
    ],
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
    title: "Sumryze – AI-Powered SEO Reporting Dashboard",
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
