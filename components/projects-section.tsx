"use client"

import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/ProjectCard"
import { Section } from "@/components/Section"

export function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.homepageFeatured)
  const dataFoundationProjects = projects.filter(
    (project) => project.category === "DE" && !project.homepageFeatured,
  )
  const supportingProjects = projects.filter(
    (project) => project.category === "DA" || project.category === "DS",
  )

  return (
    <Section id="projects" title="Projects" showHeader={false}>
      {featuredProjects.length > 0 && (
        <div className="mb-16 md:mb-20">
          <h2 className="mb-2 font-mono text-base md:text-lg tracking-widest text-primary uppercase">
            Featured Data Science &amp; Applied AI
          </h2>
          <div className="mb-6 h-px bg-border" />
          <div className="grid gap-6 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} featuredCompact />
            ))}
          </div>
        </div>
      )}

      <div className="mb-16 md:mb-20">
        <h2 className="mb-2 font-mono text-base md:text-lg tracking-widest text-primary uppercase">
          Data &amp; Cloud Foundations
        </h2>
        <div className="mb-6 h-px bg-border" />
        <div className="grid gap-6 md:grid-cols-2">
          {dataFoundationProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-2 font-mono text-base md:text-lg tracking-widest text-primary uppercase">
          Supporting Analytics &amp; Applications
        </h2>
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
