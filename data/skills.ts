export type SkillCategory =
  | "Programming & Analysis"
  | "Data Science & Machine Learning"
  | "Model & LLM Evaluation"
  | "Applied AI & RAG"
  | "Data & Cloud Engineering"
  | "Software & Production"

export interface SkillGroup {
  category: SkillCategory
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming & Analysis",
    skills: ["Python", "SQL", "pandas", "NumPy", "Statistical Analysis"],
  },
  {
    category: "Data Science & Machine Learning",
    skills: [
      "scikit-learn",
      "PyTorch",
      "Transformers",
      "NLP",
      "Predictive Modeling",
      "Text Classification",
    ],
  },
  {
    category: "Model & LLM Evaluation",
    skills: [
      "Macro F1",
      "Model Comparison",
      "Leakage-Safe Validation",
      "Temporal Validation",
      "Retrieval Evaluation",
      "Error / Failure Analysis",
    ],
  },
  {
    category: "Applied AI & RAG",
    skills: [
      "Embeddings",
      "Vector Search",
      "Hybrid Retrieval",
      "PostgreSQL/pgvector",
      "RRF",
      "Grounded Generation",
      "Citation Validation",
      "Safe Abstention",
    ],
  },
  {
    category: "Data & Cloud Engineering",
    skills: ["AWS", "Azure", "Databricks", "PySpark", "dbt", "Delta Lake", "Data Pipelines"],
  },
  {
    category: "Software & Production",
    skills: ["FastAPI", "Docker", "GitHub Actions", "APIs", "Testing", "CI/CD"],
  },
]
