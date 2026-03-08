export type SkillCategory =
  | "Orchestration"
  | "Storage & Warehousing"
  | "Transformation & Modeling"
  | "Data Quality & CI"
  | "Analytics Enablement"
  | "Data Processing"

export interface SkillGroup {
  category: SkillCategory
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Orchestration",
    skills: ["Apache Airflow", "GitHub Actions", "Docker"],
  },
  {
    category: "Storage & Warehousing",
    skills: ["Amazon Redshift", "PostgreSQL", "BigQuery", "Snowflake", "S3"],
  },
  {
    category: "Transformation & Modeling",
    skills: ["dbt", "SQL", "Star Schema", "Dimensional Modeling"],
  },
  {
    category: "Data Quality & CI",
    skills: ["dbt Tests", "GitHub Actions", "pytest", "Great Expectations"],
  },
  {
    category: "Analytics Enablement",
    skills: ["KPI Design", "SQL", "BI Handoff", "Documentation"],
  },
  {
    category: "Data Processing",
    skills: ["Python", "Pandas", "PySpark", "Batch Pipelines"],
  },
]
