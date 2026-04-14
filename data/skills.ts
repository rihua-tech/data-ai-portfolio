export type SkillCategory =
  | "Orchestration & Workflow"
  | "Storage, Lakehouse & Warehousing"
  | "Transformation & Modeling"
  | "Data Processing & Platforms"
  | "Data Quality & CI"
  | "Analytics Enablement"

export interface SkillGroup {
  category: SkillCategory
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Orchestration & Workflow",
    skills: ["Apache Airflow", "Azure Data Factory", "GitHub Actions", "Docker"],
  },
  {
    category: "Storage, Lakehouse & Warehousing",
    skills: ["ADLS Gen2", "Delta Lake", "Amazon Redshift", "PostgreSQL", "S3"],
  },
  {
    category: "Transformation & Modeling",
    skills: ["dbt", "SQL", "Dimensional Modeling", "Star Schema", "PySpark"],
  },
  {
    category: "Data Processing & Platforms",
    skills: ["Python", "Pandas", "Databricks", "Batch Pipelines"],
  },
  {
    category: "Data Quality & CI",
    skills: ["dbt Tests", "GitHub Actions", "pytest", "Great Expectations"],
  },
  {
    category: "Analytics Enablement",
    skills: ["Power BI", "KPI Design", "BI Handoff", "Documentation"],
  },
]
