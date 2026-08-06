import { Section } from "@/components/Section"

const aboutParagraphs = [
 
  "I am a Data & AI Engineer focused on building reliable cloud data pipelines, analytics-ready datasets, and applied AI systems. My portfolio includes Azure and AWS data engineering, RAG applications, and leakage-safe NLP model evaluation.",

  "I build end-to-end workflows across API ingestion, cloud storage, transformation, data quality, orchestration, and analytics delivery. My projects include an Azure lakehouse, an AWS serverless data pipeline, a PostgreSQL/pgvector RAG copilot, and a financial complaint-routing study comparing classical machine learning with DistilBERT.",

  "I value clear SQL, maintainable Python, reproducible workflows, validation, CI, and documentation that makes technical decisions easy to review. My background in analytics and web development helps me connect backend data systems with reporting needs and polished user-facing experiences.",
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
