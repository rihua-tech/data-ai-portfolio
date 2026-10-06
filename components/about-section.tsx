import { Section } from "@/components/Section"

const aboutParagraphs = [
  "I’m a Data Scientist focused on applied AI, machine learning, and NLP. I build and evaluate production-oriented ML and generative AI applications spanning predictive modeling, retrieval, RAG, and LLM evaluation, with particular attention to data quality, failure modes, grounded outputs, and reliable evaluation.",
  "I’m currently completing an M.S. in Information Technology with a Data Analytics concentration at Middle Georgia State University, expected December 2026. My graduate coursework emphasizes data science, machine learning, predictive analytics, and statistical modeling.",
  "My software development foundation and cloud data engineering experience across AWS and Azure help me connect the full workflow—from data ingestion and transformation to models, APIs, deployment, and user-facing applications.",
]
export function AboutSection() {
  return (
    <Section id="about" title="About">
      <div className="mx-auto max-w-3xl space-y-4">
        {aboutParagraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="text-pretty text-base leading-8 text-body-foreground md:text-lg"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  )
}
