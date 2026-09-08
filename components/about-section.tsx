import { Section } from "@/components/Section"

const aboutParagraphs = [
  
  "I’m a Data Scientist focused on applied AI and practical AI systems. I build and evaluate NLP classifiers, retrieval systems, and RAG applications, with particular attention to model quality, failure modes, grounded outputs, and reliable evaluation.",
  "I’m currently completing an M.S. in Information Technology with a Data Analytics concentration, with coursework focused heavily on data science, machine learning, predictive analytics, and statistical modeling.",
  "My background in web development and cloud data engineering across AWS and Azure helps me connect the full workflow—from data ingestion and transformation to models, APIs, and user-facing applications.",
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
