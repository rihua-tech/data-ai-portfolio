import { Section } from "@/components/Section"

const aboutParagraphs = [


  "I am a Data Engineer focused on building reliable pipelines and analytics-ready datasets for business decision-making.",
  "My work starts with ingestion and data quality checks, then moves through transformation layers, dimensional modeling, and reusable data marts.",
  "I prioritize clear SQL, maintainable Python, automation, and CI practices that keep pipelines stable as data volume and complexity grow.",
  "With a background in analytics and web development, I bridge technical data engineering work with practical reporting, dashboard, and business needs."

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
