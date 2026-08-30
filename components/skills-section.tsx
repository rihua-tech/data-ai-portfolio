import {
  BarChart3,
  BrainCircuit,
  Cpu,
  FlaskConical,
  Layers,
  Workflow,
  type LucideIcon,
} from "lucide-react"
import { Section } from "@/components/Section"
import { Tag } from "@/components/Tag"
import { skillGroups, type SkillCategory } from "@/data/skills"

const iconByCategory: Record<SkillCategory, LucideIcon> = {
  "Programming & Analysis": Layers,
  "Machine Learning & NLP": BrainCircuit,
  "Model Evaluation & Experimentation": FlaskConical,
  "AI / RAG": Workflow,
  "Data & Analytics": BarChart3,
  "Engineering & Cloud": Cpu,
}

export function SkillsSection() {
  return (
    <Section id="skills" title="Skills & Tools">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = iconByCategory[group.category]
          return (
            <div
              key={group.category}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
            >
              <div className="mb-4 flex items-center gap-3">
                <Icon className="size-5 text-primary" />
                <h3 className="font-semibold text-foreground">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
