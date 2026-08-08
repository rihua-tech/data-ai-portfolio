"use client"

import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/ProjectCard"
import { Section } from "@/components/Section"

export function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.homepageFeatured)
  const dataEngineeringProjects = projects.filter(
    (project) => project.category === "DE" && !project.homepageFeatured,
  )
  const appliedAiProjects = projects.filter(
    (project) =>
      (project.category === "AIDE" || project.category === "MLAI") &&
      !project.homepageFeatured,
  )
  const supportingProjects = projects.filter(
    (project) => project.category === "DA" || project.category === "DS",
  )

  return (
    <Section id="projects" title="Projects" showHeader={false}>
      {featuredProjects.length > 0 && (
        <div className="mb-16 md:mb-20">
          <h3 className="mb-2 font-mono text-base md:text-lg tracking-widest text-primary uppercase">
            Featured Projects
          </h3>
          <div className="mb-6 h-px bg-border" />
          <div className="grid gap-6 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} featuredCompact />
            ))}
          </div>
        </div>
      )}

      <div className="mb-16 md:mb-20">
        <h3 className="mb-2 font-mono text-base md:text-lg tracking-widest text-primary uppercase">
          Data Engineering
        </h3>
        <div className="mb-6 h-px bg-border" />
        <div className="grid gap-6 md:grid-cols-2">
          {dataEngineeringProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>

      {appliedAiProjects.length > 0 && (
        <div className="mb-16 md:mb-20">
          <h3 className="mb-2 font-mono text-base md:text-lg tracking-widest text-primary uppercase">
            Applied AI &amp; Machine Learning
          </h3>
          <div className="mb-6 h-px bg-border" />
          <div className="grid gap-6">
            {appliedAiProjects.map((project) => (
              <ProjectCard key={project.title} project={project} featured />
            ))}
          </div>
        </div>
      )}

      <div>
        <h3 className="mb-2 font-mono text-base md:text-lg tracking-widest text-primary uppercase">
          Supporting Work
        </h3>
        <div className="mb-6 h-px bg-border" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {supportingProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </Section>
  )
}
