import { Section } from "@/components/Section"

const aboutParagraphs = [
  "I am a Data Engineer focused on building reliable pipelines and analytics-ready datasets for day-to-day decision-making.",
  "My work starts with ingestion and quality checks, then moves through transformation layers and modeled marts built for trust and reuse.",
  "I prioritize clear SQL, maintainable Python, and automation that keeps pipelines stable as data volume and complexity grow.",
  "With a background in analytics and supporting data science work, I shape datasets and features that answer business questions quickly and support experimentation when needed.",
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
