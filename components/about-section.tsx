import { Section } from "@/components/Section"

const aboutParagraphs = [
  
  "I’m a Data Scientist focused on applied AI, NLP, model evaluation, and retrieval systems. I build and evaluate machine-learning and RAG applications with an emphasis on leakage-safe validation, retrieval quality, failure analysis, grounded responses, and human-in-the-loop decision support.",
  "My background also includes cloud data engineering and web development, allowing me to connect reliable data pipelines, model evaluation, and user-facing AI applications in reproducible end-to-end workflows.",
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
