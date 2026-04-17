import Link from "next/link"
import Image from "next/image"
import {
  Blocks,
  BookOpen,
  Database,
  ExternalLink,
  FileText,
  Github,
  type LucideIcon,
  ShieldCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tag } from "@/components/Tag"
import type { PortfolioProject } from "@/data/projects"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  project: PortfolioProject
  featured?: boolean
  className?: string
}

interface ProjectActionButtonProps {
  href?: string
  label: string
  icon: LucideIcon
  ariaLabel: string
}

function isExternalUrl(href: string) {
  return href.startsWith("http://") || href.startsWith("https://")
}

function ProjectActionButton({ href, label, icon: Icon, ariaLabel }: ProjectActionButtonProps) {
  if (!href) {
    return null
  }

  if (href === "#") {
    return (
      <Button size="sm" variant="outline" disabled>
        <Icon className="size-4" />
        {label}
      </Button>
    )
  }

  if (isExternalUrl(href)) {
    return (
      <Button asChild size="sm" variant="outline">
        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
          <Icon className="size-4" />
          {label}
        </a>
      </Button>
    )
  }

  return (
    <Button asChild size="sm" variant="outline">
      <Link href={href} aria-label={ariaLabel}>
        <Icon className="size-4" />
        {label}
      </Link>
    </Button>
  )
}

function ProjectActions({ project }: { project: PortfolioProject }) {
  return (
    <>
      <ProjectActionButton
        href={project.caseStudyUrl}
        label="Case Study"
        icon={FileText}
        ariaLabel={`Open the ${project.title} case study`}
      />
      <ProjectActionButton
        href={project.repoUrl}
        label="GitHub Repo"
        icon={Github}
        ariaLabel={`Open the ${project.title} GitHub repository`}
      />
      <ProjectActionButton
        href={project.dataUrl}
        label="Data"
        icon={Database}
        ariaLabel={`Open the ${project.title} data repository`}
      />
      <ProjectActionButton
        href={project.architectureUrl}
        label="Architecture"
        icon={Blocks}
        ariaLabel={`View the ${project.title} architecture`}
      />
      <ProjectActionButton
        href={project.executionProofUrl}
        label="Execution Proof"
        icon={ShieldCheck}
        ariaLabel={`View the ${project.title} execution proof`}
      />
      <ProjectActionButton
        href={project.docsUrl}
        label="Docs"
        icon={BookOpen}
        ariaLabel={`Open the ${project.title} documentation`}
      />
      <ProjectActionButton
        href={project.liveUrl}
        label={project.liveLabel ?? "Live"}
        icon={ExternalLink}
        ariaLabel={`Open the live experience for ${project.title}`}
      />
    </>
  )
}

export function ProjectCard({ project, featured = false, className }: ProjectCardProps) {
  if (featured) {
    return (
      <article
        className={cn(
          "group mx-auto w-full max-w-6xl overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/30",
          className,
        )}
      >
        <div className="grid gap-0 min-[1100px]:grid-cols-[56%_44%] min-[1100px]:items-center">
          <div className="min-[1100px]:self-center">
            <div className="min-[1100px]:p-3">
              <div className="relative aspect-video overflow-hidden bg-black min-[1100px]:aspect-[3/2]">
                <Image
                  src={project.image}
                  alt={`${project.title} project thumbnail`}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02] min-[1100px]:object-contain"
                  sizes="(max-width: 1099px) 100vw, 56vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/40 to-transparent" />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4 p-5 sm:p-6 min-[1100px]:gap-5 min-[1100px]:p-7 xl:p-8">
            <div>
              <p className="mb-2 text-xs font-medium tracking-wider text-primary uppercase">
                {project.featuredLabel ?? "Data Engineering"}
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

            <div className="flex flex-wrap items-center gap-2.5">
              <ProjectActions project={project} />
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
          {project.topLabel && (
            <p className="mb-2 text-xs font-medium tracking-wider text-primary uppercase">
              {project.topLabel}
            </p>
          )}
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
          <ProjectActions project={project} />
        </div>
      </div>
    </article>
  )
}
