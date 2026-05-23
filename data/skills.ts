export type SkillCategory =
  | "Orchestration & Workflow"
  | "Cloud Execution & Containers"
  | "Storage, Lakehouse & Warehouse"
  | "Transformation & Modeling"
  | "Data Quality & CI"
  | "Analytics Enablement"
  | "AI / RAG Engineering"

export interface SkillGroup {
  category: SkillCategory
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Orchestration & Workflow",
    skills: ["Apache Airflow", "Azure Data Factory", "EventBridge Scheduler", "GitHub Actions"],
  },
  {
    category: "Cloud Execution & Containers",
    skills: ["Docker", "ECS/Fargate", "ECR", "CloudWatch Logs"],
  },
  {
    category: "Storage, Lakehouse & Warehouse",
    skills: ["ADLS Gen2", "Delta Lake", "Databricks", "Amazon S3", "Redshift Serverless", "PostgreSQL"],
  },
  {
    category: "Transformation & Modeling",
    skills: ["Python", "SQL", "PySpark", "dbt", "Dimensional Modeling"],
  },
  {
    category: "Data Quality & CI",
    skills: ["dbt Tests", "pytest", "Data Validation", "Validation SQL", "GitHub Actions"],
  },
  {
    category: "Analytics Enablement",
    skills: ["Power BI", "SQL Marts", "KPI Design", "BI Handoff", "Documentation"],
  },
  {
    category: "AI / RAG Engineering",
    skills: ["RAG", "Vector Search", "Embeddings", "pgvector", "Cited Answers", "Streamlit", "AI Evaluation"],
  },
]
