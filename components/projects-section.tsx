"use client"

import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/ProjectCard"
import { Section } from "@/components/Section"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ProjectsSection() {
  const deProjects = projects.filter((project) => project.category === "DE")
  const aiDataEngineeringProjects = projects.filter((project) => project.category === "AIDE")
  const daProjects = projects.filter((project) => project.category === "DA")
  const dsProjects = projects.filter((project) => project.category === "DS")
  const [featuredProject, ...supportingDeProjects] = deProjects

  return (
    <Section id="projects" title="Projects" showHeader={false}>
      {featuredProject && (
        <div className="mb-16 md:mb-24">
          <h3 className="mb-2 font-mono text-base md:text-lg tracking-widest text-primary uppercase">
            Featured Project
          </h3>
          <div className="mb-6 h-px bg-border" />
          <ProjectCard project={featuredProject} featured />
        </div>
      )}

      <div className="mb-16 md:mb-24">
        <h3 className="mb-2 font-mono text-base md:text-lg tracking-widest text-primary uppercase">
          Data Engineering
        </h3>
        <div className="mb-6 h-px bg-border" />
        <div className="grid gap-6 md:grid-cols-2">
          {supportingDeProjects.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} project={project} />
          ))}
        </div>
      </div>

      {aiDataEngineeringProjects.length > 0 && (
        <div className="mb-16 md:mb-24">
          <h3 className="mb-2 font-mono text-base md:text-lg tracking-widest text-primary uppercase">
            AI Data Engineering
          </h3>
          <p className="mb-6 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Projects connecting cloud data engineering foundations with RAG, vector search, and
            LLM-powered analytics assistants.
          </p>
          <div className="mb-6 h-px bg-border" />
          <div className="grid gap-6">
            {aiDataEngineeringProjects.map((project) => (
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
        <Tabs defaultValue="DA" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="DA">Data Analytics</TabsTrigger>
            <TabsTrigger value="DS">Data Science</TabsTrigger>
          </TabsList>
          <TabsContent value="DA">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {daProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="DS">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {dsProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Section>
  )
}
