import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"
import {
  ArrowLeft,
  Blocks,
  BookOpen,
  CheckCircle2,
  Database,
  ExternalLink,
  Github,
  LayoutDashboard,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { Tag } from "@/components/Tag"
import { Button } from "@/components/ui/button"

const caseStudyUrl = "/projects/cloud-flight-fare-pipeline"
const repoUrl = "https://github.com/rihua-tech/cloud-flight-fare-pipeline"
const docsUrl = `${repoUrl}/tree/main/docs`
const localDemoGuideUrl = `${repoUrl}#quickstart-local-demo-in-10-minutes`
const redshiftRunbookUrl = `${repoUrl}/blob/main/docs/week4_redshift_runbook.md`
const airflowDagUrl = `${repoUrl}/blob/main/airflow/dags/flight_fare_pipeline_dag.py`
const ciUrl = `${repoUrl}/blob/main/.github/workflows/ci.yml`
const verifyMartsUrl = `${repoUrl}/blob/main/sql/redshift/verify_marts.sql`
const martDocsUrl = `${repoUrl}/blob/main/docs/how_to_use_marts.md`
const exampleQueriesUrl = `${repoUrl}/blob/main/README.md#example-queries--outputs`
const dashboardArtifactUrl = `${repoUrl}/blob/main/docs/images/dashboard_screenshot.png`
const architectureDiagramUrl = `${repoUrl}/blob/main/docs/images/architecture_diagram.png`
const week3ProofUrl = `${repoUrl}/tree/main/docs/screenshots/week3`
const week5ProofUrl = `${repoUrl}/tree/main/docs/screenshots/week5`
const s3BronzeProofUrl = `${repoUrl}/blob/main/docs/screenshots/week3/s3-console.png`
const airflowGraphProofUrl = `${repoUrl}/blob/main/docs/screenshots/week5/week5_graph_view.png`
const airflowTaskLogProofUrl =
  `${repoUrl}/blob/main/docs/screenshots/week5/week5_task_log_dbt_build_success.png`
const routeTrendsSqlUrl = `${repoUrl}/blob/main/sql/analysis/route_price_trends.sql`
const leadTimeSqlUrl = `${repoUrl}/blob/main/sql/analysis/lead_time_buckets.sql`
const architectureDiagramSrc =
  "/projects/cloud-flight-fare-pipeline-proof/architecture-diagram.png"

const stack = [
  "Python",
  "Airflow",
  "dbt",
  "Docker",
  "Postgres",
  "AWS S3",
  "Redshift",
  "GitHub Actions",
]

const proofAtGlance = [
  { label: "Local demo", value: "Docker + Postgres" },
  { label: "AWS path", value: "S3 + Redshift runbook" },
  { label: "Orchestration", value: "Airflow DAG + logs" },
  { label: "Modeling", value: "dbt marts + tests" },
  { label: "Reviewer proof", value: "Screenshots, SQL, CI" },
]

const fastLocalCommands = [
  {
    step: "01",
    title: "Start local services",
    commandLines: ["docker compose up -d"],
  },
  {
    step: "02",
    title: "Load sample fares",
    commandLines: ["python scripts/load_sample_to_postgres.py"],
  },
  {
    step: "03",
    title: "Build dbt models",
    commandLines: [
      "dbt build",
      "--project-dir dbt/flight_fares",
      "--profiles-dir dbt",
    ],
  },
  {
    step: "04",
    title: "Run proof queries",
    commandLines: ["python scripts/run_analysis_queries.py"],
  },
]

const architectureCards = [
  {
    title: "Proven local execution path",
    icon: Database,
    items: [
      {
        key: "local-boot",
        content: "Boot the local Docker + Postgres demo stack",
      },
      {
        key: "local-load",
        content: "Load sample fare snapshots into warehouse-ready raw tables",
      },
      {
        key: "local-dbt",
        content: "Run dbt staging, marts, tests, and docs against Postgres",
      },
      {
        key: "local-proof",
        content: "Execute proof queries that validate analytics-ready outputs",
      },
    ],
    linkLabel: "Local demo guide",
    linkHref: localDemoGuideUrl,
  },
  {
    title: "Documented AWS target path",
    icon: Blocks,
    items: [
      {
        key: "aws-bronze",
        content: "Ingest daily fare snapshots to S3 bronze storage",
      },
      {
        key: "aws-redshift",
        content: "Load warehouse tables into Redshift with runbook-backed SQL helpers",
      },
      {
        key: "aws-orchestrate",
        content: "Orchestrate the warehouse path with Airflow and dbt",
      },
      {
        key: "aws-validate",
        content: "Use validation SQL to confirm mart row counts and readiness",
      },
    ],
    linkLabel: "AWS / Redshift runbook",
    linkHref: redshiftRunbookUrl,
  },
  {
    title: "Shared analytics handoff",
    icon: Workflow,
    items: [
      {
        key: "analytics-marts",
        content: (
          <>
            Mart outputs include <InlineCode>marts.fact_fares</InlineCode>,{" "}
            <InlineCode>marts.dim_route</InlineCode>, and{" "}
            <InlineCode>marts.dim_date</InlineCode>.
          </>
        ),
      },
      {
        key: "analytics-docs",
        content: "Docs explain how analysts should query route, pricing, and timing patterns",
      },
      {
        key: "analytics-sql",
        content: "Example SQL covers route trends, monthly movement, and lead-time analysis",
      },
      {
        key: "analytics-ci",
        content: "CI validates linting, tests, demo loading, and dbt build steps",
      },
    ],
    linkLabel: "Mart usage docs",
    linkHref: martDocsUrl,
  },
]

const analyticsCards = [
  {
    title: "Route fare trends",
    description: (
      <>
        Route-level SQL shows how <InlineCode>marts.fact_fares</InlineCode> and{" "}
        <InlineCode>marts.dim_route</InlineCode> support pricing trends by route.
      </>
    ),
    linkLabel: "Route trend SQL",
    linkHref: routeTrendsSqlUrl,
  },
  {
    title: "Monthly fare movement",
    description:
      "README rollups make the time-series handoff clear without implying a live reporting layer.",
    linkLabel: "Example queries",
    linkHref: exampleQueriesUrl,
  },
  {
    title: "Lead-time analysis",
    description:
      "Lead-time queries show how the marts support booking-window and pricing review.",
    linkLabel: "Lead-time SQL",
    linkHref: leadTimeSqlUrl,
  },
]

const proofGallery = [
  {
    label: "S3 bronze",
    title: "Bronze ingestion landed in S3",
    description: "Week 3 proof showing dated fare snapshots stored under the bronze bucket path.",
    imageSrc: "/projects/cloud-flight-fare-pipeline-proof/s3-console.png",
    imageAlt: "Amazon S3 console showing bronze flight fare snapshots",
    href: s3BronzeProofUrl,
  },
  {
    label: "Airflow graph",
    title: "Runnable local DAG graph",
    description:
      "Week 5 Airflow graph view showing the local load, dbt build, and proof-query chain.",
    imageSrc: "/projects/cloud-flight-fare-pipeline-proof/week5-graph-view.png",
    imageAlt: "Airflow graph view for the local flight fare pipeline DAG",
    href: airflowGraphProofUrl,
  },
  {
    label: "Task log",
    title: "dbt build execution log",
    description:
      "Saved Airflow task-log evidence for a successful dbt build and model tests.",
    imageSrc: "/projects/cloud-flight-fare-pipeline-proof/week5-task-log-dbt-build-success.png",
    imageAlt: "Airflow task log showing successful dbt build output",
    href: airflowTaskLogProofUrl,
  },
  {
    label: "Preview artifact",
    title: "Dashboard preview artifact",
    description:
      "Static repo artifact for downstream analytics handoff. It is not presented here as a live hosted BI app.",
    imageSrc: "/projects/cloud-flight-fare-pipeline-proof/dashboard-screenshot.png",
    imageAlt: "Dashboard preview artifact included in the project documentation",
    href: dashboardArtifactUrl,
  },
]

const supportingProofLinks = [
  { label: "Week 3 screenshots", href: week3ProofUrl },
  { label: "Week 5 screenshots", href: week5ProofUrl },
  { label: "Airflow DAG code", href: airflowDagUrl },
  { label: "Verify marts SQL", href: verifyMartsUrl },
  { label: "GitHub Actions CI", href: ciUrl },
]

interface ActionButtonProps {
  href: string
  label: string
  icon: LucideIcon
}

function InlineCode({ children }: { children: ReactNode }) {
  return (
    <code className="inline-flex items-center rounded-full border border-primary/15 bg-primary/10 px-2 py-0.5 font-mono text-[11px] text-primary align-middle">
      {children}
    </code>
  )
}

function isExternalUrl(href: string) {
  return href.startsWith("http://") || href.startsWith("https://")
}

function ActionButton({ href, label, icon: Icon }: ActionButtonProps) {
  if (isExternalUrl(href)) {
    return (
      <Button asChild variant="outline">
        <a href={href} target="_blank" rel="noopener noreferrer">
          <Icon className="size-4" />
          {label}
        </a>
      </Button>
    )
  }

  return (
    <Button asChild variant="outline">
      <Link href={href}>
        <Icon className="size-4" />
        {label}
      </Link>
    </Button>
  )
}

export const metadata: Metadata = {
  title: "Cloud Flight Fare Pipeline | Rihua Van Steenburgh",
  description:
    "Recruiter-friendly case study for an end-to-end flight fare pipeline with a fast local demo path, a documented S3/Redshift target architecture, Airflow orchestration, dbt marts, and proof-oriented documentation.",
  alternates: {
    canonical: caseStudyUrl,
  },
  openGraph: {
    title: "Cloud Flight Fare Pipeline",
    description:
      "End-to-end flight fare pipeline case study with local demo proof, a documented AWS target path, analytics-ready marts, and reviewer-facing execution evidence.",
    url: caseStudyUrl,
    images: [
      {
        url: "/projects/cloud-flight-fare-pipeline.jpg",
        alt: "Cloud Flight Fare Pipeline project image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Flight Fare Pipeline",
    description:
      "End-to-end flight fare pipeline case study with local demo proof, S3/Redshift architecture notes, Airflow, dbt, and analytics-ready outputs.",
    images: ["/projects/cloud-flight-fare-pipeline.jpg"],
  },
}

function ProofThumbnailCard({
  label,
  title,
  description,
  imageSrc,
  imageAlt,
  href,
}: {
  label: string
  title: string
  description: ReactNode
  imageSrc?: string
  imageAlt?: string
  href: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block focus-visible:outline-none"
      aria-label={`${title} proof asset`}
    >
      <article className="h-full overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-primary/45 group-hover:bg-card group-hover:shadow-[0_18px_48px_rgba(8,145,178,0.14)] group-focus-visible:border-primary/45 group-focus-visible:shadow-[0_0_0_1px_rgba(34,211,238,0.24),0_18px_48px_rgba(8,145,178,0.14)]">
        <div className="relative aspect-[16/10] overflow-hidden bg-secondary/70">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt ?? title}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_50%),linear-gradient(180deg,rgba(14,18,29,0.92),rgba(14,18,29,0.98))] p-6 text-center">
              <p className="font-mono text-xs tracking-[0.24em] text-primary uppercase">
                Proof image coming soon
              </p>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/88 via-background/12 to-transparent transition-opacity duration-300 group-hover:opacity-95" />
          <div className="absolute left-3 top-3 rounded-full border border-primary/20 bg-background/80 px-2.5 py-1 font-mono text-[11px] tracking-[0.18em] text-primary uppercase">
            {label}
          </div>
          <div className="absolute right-3 bottom-3 inline-flex items-center gap-1 rounded-full border border-white/10 bg-background/85 px-2.5 py-1.5 text-primary shadow-sm transition-all duration-300 group-hover:gap-1.5 group-hover:border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground">
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase">Open</span>
            <ExternalLink className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </div>

        <div className="flex h-[9.25rem] flex-col p-4">
          <h3 className="text-sm font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
        </div>
      </article>
    </a>
  )
}

export default function CloudFlightFarePipelinePage() {
  return (
    <>
      <Navbar />
      <main className="bg-background">
        <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <Button asChild variant="ghost" className="mb-6 -ml-3 text-muted-foreground">
            <Link href="/#projects">
              <ArrowLeft className="size-4" />
              Back to Projects
            </Link>
          </Button>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-medium tracking-wider text-primary uppercase">
                AWS Data Engineering
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Cloud Flight Fare Pipeline
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                End-to-end flight fare pipeline with a fast local demo path and a documented
                production-style AWS architecture, orchestrated with Airflow and modeled with dbt.
              </p>

              <div className="mt-5 rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">Honest scope:</span> local demo
                execution is proven in the repo today, while the AWS path is documented as a
                production-style architecture with runbooks, warehouse SQL, and validation assets.
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {stack.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5">
                <ActionButton href={repoUrl} label="GitHub Repo" icon={Github} />
                <ActionButton href="#architecture" label="Architecture" icon={Blocks} />
                <ActionButton href="#execution-proof" label="Execution Proof" icon={ShieldCheck} />
                <ActionButton href={docsUrl} label="Docs" icon={BookOpen} />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-border bg-card/70 p-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-black">
                <Image
                  src="/projects/cloud-flight-fare-pipeline.jpg"
                  alt="Cloud Flight Fare Pipeline project image"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1023px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/40 to-transparent" />
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {proofAtGlance.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-border bg-card/60 p-4 backdrop-blur-sm"
              >
                <p className="text-xs font-medium tracking-wider text-primary uppercase">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-medium text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-8">
          <div className="overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur-sm">
            <div className="border-b border-border/80 bg-[linear-gradient(135deg,rgba(34,211,238,0.12),rgba(13,148,136,0.02))] px-5 py-4 md:px-6">
              <p className="text-xs font-medium tracking-wider text-primary uppercase">
                Fast local validation path
              </p>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                The fastest review path is local: start Postgres, load the sample fares, build the
                marts with dbt, then run the proof queries that show downstream readiness.
              </p>
            </div>

            <div className="grid gap-3 p-5 md:grid-cols-2 xl:grid-cols-4">
              {fastLocalCommands.map((item) => (
                <article
                  key={item.commandLines.join(" ")}
                  className="flex min-h-[11.5rem] flex-col rounded-xl border border-white/8 bg-background/70 p-4"
                >
                  <p className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
                    Step {item.step}
                  </p>
                  <p className="mt-2 text-sm font-medium text-foreground">{item.title}</p>
                  <pre className="mt-3 flex-1 overflow-hidden rounded-lg border border-white/8 bg-black/20 px-4 py-3.5 font-mono text-[13px] leading-6 whitespace-pre-wrap break-words text-foreground">
                    {item.commandLines.map((line, index) => (
                      <span key={line} className="block">
                        {index === 0 ? line : `  ${line}`}
                      </span>
                    ))}
                  </pre>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="architecture"
          className="mx-auto max-w-6xl scroll-mt-24 px-6 py-10 md:py-14"
        >
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-wider text-primary uppercase">
              Architecture
            </p>
            <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
              Two clear paths, one analytics-ready outcome
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              The repo is strongest when reviewed as a proven local demo path plus a documented
              production-style AWS target. Both routes converge on dbt-modeled marts and SQL
              outputs that are ready for analytics review.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {architectureCards.map((card) => {
              const Icon = card.icon

              return (
                <article
                  key={card.title}
                  className="rounded-xl border border-border bg-card/60 p-5 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg border border-primary/20 bg-primary/10 p-2 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
                  </div>

                  <ul className="mt-4 flex flex-col gap-2.5">
                    {card.items.map((item) => (
                      <li
                        key={item.key}
                        className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{item.content}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5">
                    <ActionButton href={card.linkHref} label={card.linkLabel} icon={ExternalLink} />
                  </div>
                </article>
              )
            })}
          </div>

          <article className="mt-6 overflow-hidden rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-sm md:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-medium tracking-wider text-primary uppercase">
                  Architecture Diagram
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Repo architecture overview showing ingestion, bronze/raw landing, silver/cleaned
                  processing, dbt modeling, validation, and analytics outputs.
                </p>
              </div>

              <a
                href={architectureDiagramSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                aria-label="Open the Cloud Flight Fare Pipeline architecture diagram in a new tab"
              >
                Open full diagram
                <ExternalLink className="size-4" />
              </a>
            </div>

            <a
              href={architectureDiagramSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 block overflow-hidden rounded-xl focus-visible:outline-none"
              aria-label="View the architecture diagram full size"
            >
              <Image
                src={architectureDiagramSrc}
                alt="Cloud Flight Fare Pipeline architecture overview diagram from the project repo"
                width={1536}
                height={1024}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
                className="h-auto w-full rounded-xl object-contain shadow-[0_18px_42px_rgba(0,0,0,0.18)] transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </a>
          </article>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-10 md:py-14">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-xs font-medium tracking-wider text-primary uppercase">
                Analytics-ready outputs
              </p>
              <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
                Downstream analysis is visible, not implied
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                This case study does not stop at ingestion and modeling. The repo documents the
                marts, the analyst query patterns, and the downstream output handoff so reviewers
                can see what gets delivered after the pipeline runs.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {analyticsCards.map((card) => (
                  <article
                    key={card.title}
                    className="rounded-xl border border-border bg-card/60 p-5 backdrop-blur-sm"
                  >
                    <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
                    <div className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {card.description}
                    </div>
                    <a
                      href={card.linkHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                    >
                      {card.linkLabel}
                      <ExternalLink className="size-4" />
                    </a>
                  </article>
                ))}
              </div>
            </div>

            <article className="overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur-sm">
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <Image
                  src="/projects/cloud-flight-fare-pipeline-proof/dashboard-screenshot.png"
                  alt="Dashboard preview artifact from the Cloud Flight Fare Pipeline repo"
                  fill
                  sizes="(max-width: 1023px) 100vw, 36vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/88 via-background/8 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-primary/20 bg-background/85 px-3 py-1 font-mono text-[11px] tracking-[0.18em] text-primary uppercase">
                  Preview artifact
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg border border-primary/20 bg-primary/10 p-2 text-primary">
                    <LayoutDashboard className="size-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Dashboard preview artifact
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  The repo includes a static downstream artifact for reviewer handoff. It is shown
                  here as documentation evidence, not as a claim of a live hosted BI application.
                </p>
                <div className="mt-5">
                  <ActionButton
                    href={dashboardArtifactUrl}
                    label="Open preview artifact"
                    icon={ExternalLink}
                  />
                </div>
              </div>
            </article>
          </div>
        </section>

        <section
          id="execution-proof"
          className="mx-auto max-w-6xl scroll-mt-24 px-6 py-10 md:py-14"
        >
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-wider text-primary uppercase">
              Execution Proof
            </p>
            <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
              Real proof assets shown directly on the page
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Reviewer evidence is surfaced here instead of being hidden behind link lists. The
              screenshots below come from the project repo and cover storage proof, orchestration
              proof, execution logs, and downstream artifact handoff.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {proofGallery.map((item) => (
              <ProofThumbnailCard key={item.title} {...item} />
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {supportingProofLinks.map((link) => (
              <ActionButton key={link.label} href={link.href} label={link.label} icon={ExternalLink} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16 pt-2 md:pb-20">
          <div className="rounded-xl border border-border bg-card/60 p-6 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-foreground">Reviewer path</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Start with the local demo path, then review the AWS/Redshift runbook, followed by
              the proof assets and docs for the documented target. That keeps the proven local
              scope and cloud target easy to separate.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <ActionButton href={localDemoGuideUrl} label="Local Demo Guide" icon={BookOpen} />
              <ActionButton
                href={redshiftRunbookUrl}
                label="AWS / Redshift Runbook"
                icon={Blocks}
              />
              <ActionButton href={week5ProofUrl} label="Proof Screenshots" icon={ShieldCheck} />
              <ActionButton href={repoUrl} label="GitHub Repo" icon={Github} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
