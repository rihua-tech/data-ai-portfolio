export type SkillCategory =
  | "Programming & Analysis"
  | "Machine Learning & NLP"
  | "Model Evaluation & Experimentation"
  | "AI / RAG"
  | "Data & Analytics"
  | "Engineering & Cloud"

export interface SkillGroup {
  category: SkillCategory
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming & Analysis",
    skills: ["Python", "SQL", "pandas", "Statistical Analysis"],
  },
  {
    category: "Machine Learning & NLP",
    skills: [
      "scikit-learn",
      "TF-IDF",
      "Linear SVM",
      "PyTorch",
      "Transformers",
      "DistilBERT",
      "Text Classification",
    ],
  },
  {
    category: "Model Evaluation & Experimentation",
    skills: [
      "Macro F1",
      "Accuracy",
      "Coverage",
      "Model Comparison",
      "Error Analysis",
      "Leakage Prevention",
      "Group-Aware Validation",
      "Time-Based Validation",
      "Backtesting",
    ],
  },
  {
    category: "AI / RAG",
    skills: [
      "Embeddings",
      "Vector Search",
      "Hybrid Retrieval",
      "RRF",
      "PostgreSQL/pgvector",
      "Retrieval Evaluation",
      "Grounded Generation",
    ],
  },
  {
    category: "Data & Analytics",
    skills: ["PostgreSQL", "PySpark", "Delta Lake", "dbt", "Databricks", "Power BI"],
  },
  {
    category: "Engineering & Cloud",
    skills: ["FastAPI", "Docker", "GitHub Actions", "Azure", "AWS", "Apache Airflow"],
  },
]
