import { Section } from "@/components/Section"

const aboutParagraphs = [
  "I’m a Data Scientist focused on applied AI, NLP, and model evaluation. I build and evaluate machine-learning and RAG systems with an emphasis on leakage-safe validation, measurable retrieval, reproducible workflows, and human-in-the-loop decision support.",
  "My background spans data analytics, cloud data engineering, and web development, which helps me connect model development with reliable data pipelines and usable AI applications.",
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
