import Image from "next/image"
import { Blocks, BookOpen, Database, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tag } from "@/components/Tag"
import type { PortfolioProject } from "@/data/projects"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  project: PortfolioProject
  featured?: boolean
  className?: string
}

function RepoButton({ repoUrl }: { repoUrl: string }) {
  if (repoUrl === "#") {
    return (
      <Button size="sm" variant="outline" disabled>
        <Github className="size-4" />
        Repo
      </Button>
    )
  }

  return (
    <Button asChild size="sm" variant="outline">
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">
        <Github className="size-4" />
        Repo
      </a>
    </Button>
  )
}

function LiveButton({ liveUrl }: { liveUrl?: string }) {
  if (!liveUrl) {
    return null
  }

  return (
    <Button asChild size="sm" variant="outline">
      <a href={liveUrl} target="_blank" rel="noopener noreferrer">
        <ExternalLink className="size-4" />
        Live
      </a>
    </Button>
  )
}

function DataButton({ dataUrl }: { dataUrl?: string }) {
  if (!dataUrl) {
    return null
  }

  return (
    <Button asChild size="sm" variant="outline">
      <a href={dataUrl} target="_blank" rel="noopener noreferrer">
        <Database className="size-4" />
        Data
      </a>
    </Button>
  )
}

function ArchitectureButton({ architectureUrl }: { architectureUrl?: string }) {
  if (!architectureUrl) {
    return null
  }

  return (
    <Button asChild size="sm" variant="outline">
      <a href={architectureUrl} target="_blank" rel="noopener noreferrer">
        <Blocks className="size-4" />
        Architecture
      </a>
    </Button>
  )
}

function DocsButton({ docsUrl }: { docsUrl?: string }) {
  if (!docsUrl) {
    return null
  }

  return (
    <Button asChild size="sm" variant="outline">
      <a href={docsUrl} target="_blank" rel="noopener noreferrer">
        <BookOpen className="size-4" />
        Docs
      </a>
    </Button>
  )
}

export function ProjectCard({ project, featured = false, className }: ProjectCardProps) {
  if (featured) {
    return (
      <article
        className={cn(
          "group overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/30",
          className,
        )}
      >
        <div className="grid gap-0 md:grid-cols-2">
          <div className="relative aspect-video overflow-hidden bg-secondary md:aspect-auto md:min-h-[320px]">
            <Image
              src={project.image}
              alt={`${project.title} project thumbnail`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/40 to-transparent" />
          </div>

          <div className="flex flex-col justify-center gap-5 p-6 md:p-8">
            <div>
              <p className="mb-2 text-xs font-medium tracking-wider text-primary uppercase">
                Data Engineering
              </p>
              <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{project.subtitle}</p>
            </div>

            {project.highlights.length > 0 && (
              <ul className="flex flex-col gap-2">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-primary" />
                    {highlight}
                  </li>
                ))}
              </ul>
            )}

            {project.stack.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            )}

            <div className="flex flex-wrap items-center gap-3">
              <RepoButton repoUrl={project.repoUrl} />
              <DataButton dataUrl={project.dataUrl} />
              <ArchitectureButton architectureUrl={project.architectureUrl} />
              <DocsButton docsUrl={project.docsUrl} />
              <LiveButton liveUrl={project.liveUrl} />
            </div>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/30",
        className,
      )}
    >
      <div className="relative aspect-video overflow-hidden bg-secondary">
        <Image
          src={project.image}
          alt={`${project.title} project thumbnail`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/40 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{project.subtitle}</p>
        </div>

        {project.stack.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-2.5">
          <RepoButton repoUrl={project.repoUrl} />
          <DataButton dataUrl={project.dataUrl} />
          <ArchitectureButton architectureUrl={project.architectureUrl} />
          <DocsButton docsUrl={project.docsUrl} />
          <LiveButton liveUrl={project.liveUrl} />
        </div>
      </div>
    </article>
  )
}
