import { Section } from "@/components/Section"

const aboutParagraphs = [
  
  "I’m a Data Scientist focused on applied AI and practical AI systems. I build and evaluate NLP classifiers, retrieval systems, and RAG applications, with particular attention to model quality, failure modes, grounded outputs, and reliable evaluation.",
  "My cloud data engineering experience across AWS and Azure also helps me connect the full workflow—from data ingestion and transformation to models, APIs, and user-facing applications.",
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
