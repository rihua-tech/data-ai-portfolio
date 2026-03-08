export type ProjectCategory = "DE" | "DA" | "DS"

export interface PortfolioProject {
  category: ProjectCategory
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
    title: "Cloud Flight Fare Pipeline",
    subtitle: "End-to-end ELT pipeline producing analytics-ready flight fare marts.",
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
    subtitle:
      "Python-based daily flight fare collector that ingests live Travelpayouts API data and publishes dated CSV snapshots for downstream analytics.",
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
    title: "Floral Daily SKU Analysis",
    subtitle: "Daily SKU analysis focused on sales movement and inventory behavior.",
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
  {
    category: "DE",
    title: "More projects coming soon",
    subtitle: "In progress",
    image: "/projects/placeholder.jpg",
    repoUrl: "#",
    stack: [],
    highlights: [],
  },
  {
    category: "DE",
    title: "More projects coming soon",
    subtitle: "In progress",
    image: "/projects/placeholder.jpg",
    repoUrl: "#",
    stack: [],
    highlights: [],
  },
  {
    category: "DE",
    title: "More projects coming soon",
    subtitle: "In progress",
    image: "/projects/placeholder.jpg",
    repoUrl: "#",
    stack: [],
    highlights: [],
  },
]
