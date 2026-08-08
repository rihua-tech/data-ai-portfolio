import { Section } from "@/components/Section"

const aboutParagraphs = [
  "I’m a Data & AI Engineer focused on building reliable cloud data platforms and applied AI systems. I work across API ingestion, cloud storage, transformation, data quality, analytics, and ML/RAG workflows using Python, SQL, Azure, AWS, Databricks, and PostgreSQL.",
  "I value reproducible workflows, clear evaluation, maintainable code, and documentation that makes technical decisions easy to review. My background in analytics and web development helps me connect backend data systems with reporting needs and polished user-facing applications.",
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
