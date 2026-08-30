import Link from "next/link"
import Image from "next/image"
import {
  Blocks,
  BookOpen,
  Clock,
  Database,
  ExternalLink,
  FileCode2,
  FileText,
  Github,
  type LucideIcon,
  ShieldCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tag } from "@/components/Tag"
import type { PortfolioProject, ProjectActionKey } from "@/data/projects"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  project: PortfolioProject
  featured?: boolean
  featuredCompact?: boolean
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
  const actions: Record<
    ProjectActionKey,
    { href?: string; label: string; icon: LucideIcon; ariaLabel: string }
  > = {
    caseStudy: {
      href: project.caseStudyUrl,
      label: "Case Study",
      icon: FileText,
      ariaLabel: `Open the ${project.title} case study`,
    },
    repo: {
      href: project.repoUrl,
      label: "GitHub Repo",
      icon: Github,
      ariaLabel: `Open the ${project.title} GitHub repository`,
    },
    data: {
      href: project.dataUrl,
      label: "Data",
      icon: Database,
      ariaLabel: `Open the ${project.title} data repository`,
    },
    architecture: {
      href: project.architectureUrl,
      label: "Architecture",
      icon: Blocks,
      ariaLabel: `View the ${project.title} architecture`,
    },
    executionProof: {
      href: project.executionProofUrl,
      label: "Proof",
      icon: ShieldCheck,
      ariaLabel: `View the ${project.title} execution proof`,
    },
    docs: {
      href: project.docsUrl,
      label: "Docs",
      icon: BookOpen,
      ariaLabel: `Open the ${project.title} documentation`,
    },
    screenshots: {
      href: project.screenshotsUrl,
      label: "Screenshots",
      icon: ExternalLink,
      ariaLabel: `View the ${project.title} screenshots`,
    },
    mlPipeline: {
      href: project.mlPipelineUrl,
      label: "ML Pipeline",
      icon: FileCode2,
      ariaLabel: `Open the ${project.title} ML pipeline source`,
    },
    sqlAnalysis: {
      href: project.sqlAnalysisUrl,
      label: "SQL Analysis",
      icon: Database,
      ariaLabel: `Open the ${project.title} SQL analysis source`,
    },
    live: {
      href: project.liveUrl,
      label: project.liveLabel ?? "Live",
      icon: ExternalLink,
      ariaLabel: `Open the live experience for ${project.title}`,
    },
    comingSoon: {
      href: "#",
      label: "Coming Soon",
      icon: Clock,
      ariaLabel: `${project.title} is coming soon`,
    },
  }

  const actionOrder: ProjectActionKey[] = project.cardActions ?? [
    "caseStudy",
    "repo",
    "data",
    "architecture",
    "executionProof",
    "docs",
    "live",
  ]

  return (
    <>
      {actionOrder.map((actionKey) => {
        const action = actions[actionKey]

        return (
          <ProjectActionButton
            key={actionKey}
            href={action.href}
            label={action.label}
            icon={action.icon}
            ariaLabel={action.ariaLabel}
          />
        )
      })}
    </>
  )
}

function ProjectStatusBadge({ status }: { status?: string }) {
  if (!status) {
    return null
  }

  return (
    <span className="inline-flex w-fit items-center rounded-full border border-primary/35 bg-primary/10 px-2 py-0.5 text-[0.65rem] font-medium tracking-wider text-primary uppercase">
      {status}
    </span>
  )
}

function ProjectVisual({
  project,
  featured = false,
  featuredCompact = false,
}: {
  project: PortfolioProject
  featured?: boolean
  featuredCompact?: boolean
}) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={project.imageAlt ?? `${project.title} project thumbnail`}
        fill
        className={cn(
          featuredCompact
            ? "object-cover object-center transition-transform duration-500 group-hover:scale-105"
            : project.imageFit === "contain"
              ? "object-contain object-center transition-transform duration-500 group-hover:scale-[1.015]"
              : cn(
                  "object-cover transition-transform duration-500",
                  featured
                    ? "object-center group-hover:scale-[1.02] min-[1100px]:object-contain"
                    : "group-hover:scale-105",
                ),
        )}
        sizes={
          featured
            ? "(max-width: 1099px) 100vw, 56vw"
            : featuredCompact
              ? "(max-width: 1023px) 100vw, 50vw"
              : "(max-width: 768px) 100vw, 33vw"
        }
      />
    )
  }

  return (
    <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_32%),linear-gradient(135deg,var(--card),var(--secondary))]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:32px_32px] opacity-60" />
      <div className="absolute left-1/2 top-1/2 grid size-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-primary/25 bg-background/45 shadow-[0_0_60px_rgba(34,211,238,0.16)]">
        <Database className="size-12 text-primary" />
      </div>
      <div className="absolute left-8 top-8 grid size-12 place-items-center rounded-lg border border-border/80 bg-card/70 text-primary">
        <FileText className="size-5" />
      </div>
      <div className="absolute bottom-8 right-8 grid size-12 place-items-center rounded-lg border border-border/80 bg-card/70 text-primary">
        <Blocks className="size-5" />
      </div>
    </div>
  )
}

export function ProjectCard({
  project,
  featured = false,
  featuredCompact = false,
  className,
}: ProjectCardProps) {
  const homepageHighlights = project.highlights.slice(
    0,
    project.homepageHighlightLimit ?? project.highlights.length,
  )

  if (featured) {
    return (
      <article
        className={cn(
          "group mx-auto w-full max-w-6xl overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/30",
          className,
        )}
      >
        <div
          className={cn(
            "grid gap-0 min-[1100px]:grid-cols-[56%_44%]",
            project.imageAspect === "4:3"
              ? "min-[1100px]:items-start"
              : "min-[1100px]:items-center",
          )}
        >
          <div className="min-[1100px]:self-center">
            <div className={cn(project.imageAspect !== "4:3" && "min-[1100px]:p-3")}>
              <div
                className={cn(
                  "relative w-full overflow-hidden",
                  project.imageAspect === "4:3"
                    ? "aspect-[4/3] p-2 md:p-2"
                    : "aspect-video bg-black min-[1100px]:aspect-[3/2]",
                )}
              >
                {project.imageAspect === "4:3" ? (
                  <div className="relative size-full overflow-hidden">
                    <ProjectVisual project={project} featured />
                  </div>
                ) : (
                  <>
                    <ProjectVisual project={project} featured />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/40 to-transparent" />
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4 p-5 sm:p-6 min-[1100px]:gap-5 min-[1100px]:p-7 xl:p-8">
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <p className="text-xs font-medium tracking-wider text-primary uppercase">
                  {project.featuredLabel ?? project.topLabel ?? "Data Engineering"}
                </p>
                <ProjectStatusBadge status={project.status} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{project.subtitle}</p>
            </div>

            {homepageHighlights.length > 0 && (
              <ul className="flex flex-col gap-2">
                {homepageHighlights.map((highlight) => (
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
        featuredCompact && "h-full",
        className,
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-secondary",
          featuredCompact ? "aspect-[3/2]" : "aspect-video",
        )}
      >
        <ProjectVisual project={project} featuredCompact={featuredCompact} />
        <div className="absolute inset-0 bg-gradient-to-t from-card/40 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="space-y-3">
          {(project.featuredLabel || project.topLabel || project.status) && (
            <div className="flex flex-wrap items-center gap-2">
              {(project.featuredLabel || project.topLabel) && (
                <p className="text-xs font-medium tracking-wider text-primary uppercase">
                  {project.featuredLabel ?? project.topLabel}
                </p>
              )}
              <ProjectStatusBadge status={project.status} />
            </div>
          )}
          <h3
            className={cn(
              "font-semibold text-foreground",
              featuredCompact ? "text-xl" : "text-lg",
            )}
          >
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.subtitle}</p>
        </div>

        {homepageHighlights.length > 0 && project.showHighlights && (
          <ul className="mt-3.5 flex flex-col gap-2">
            {homepageHighlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-primary" />
                {highlight}
              </li>
            ))}
          </ul>
        )}

        {project.stack.length > 0 && (
          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        )}

        <div
          className={cn(
            "flex flex-wrap items-center gap-2",
            featuredCompact ? "mt-auto pt-4" : "mt-4",
          )}
        >
          <ProjectActions project={project} />
        </div>
      </div>
    </article>
  )
}
