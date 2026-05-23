import { Section } from "@/components/Section"

const aboutParagraphs = [
  "I am a Data Engineer focused on building reliable cloud data pipelines, analytics-ready datasets, and AI/RAG-enabled data applications.",
  "My projects show end-to-end data engineering work across API ingestion, cloud storage, transformation layers, data quality checks, dimensional modeling, workflow orchestration, and analytics-ready outputs. I have built portfolio projects using Azure Data Factory, ADLS Gen2, Databricks, PySpark, Delta Lake, AWS S3, ECS/Fargate, Redshift Serverless, PostgreSQL/pgvector, Streamlit, Python, SQL, and dbt.",
  "I care about clear SQL, maintainable Python, reproducible workflows, validation checks, CI, and documentation that helps reviewers understand how a system works.",
  "With a background in analytics and web development, I can connect technical data engineering work with dashboards, reporting needs, AI-assisted workflows, and user-facing project presentation.",
]

export function AboutSection() {
  return (
    <Section id="about" title="About">
      <div className="mx-auto max-w-3xl space-y-4">
        {aboutParagraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="text-pretty text-base leading-8 text-muted-foreground md:text-lg"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  )
}
