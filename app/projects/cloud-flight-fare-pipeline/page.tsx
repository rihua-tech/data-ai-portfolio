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
const ciUrl = `${repoUrl}/blob/main/.github/workflows/ci.yml`
const martDocsUrl = `${repoUrl}/blob/main/docs/how_to_use_marts.md`
const exampleQueriesUrl = `${repoUrl}/blob/main/README.md#example-queries--outputs`
const dashboardArtifactUrl = `${repoUrl}/blob/main/docs/images/dashboard_screenshot.png`
const eventBridgeProofUrl =
  `${repoUrl}/blob/main/docs/screenshots/week9/06-eventbridge-scheduler-enabled-target.png`
const fargateTaskProofUrl =
  `${repoUrl}/blob/main/docs/screenshots/week9/04-manual-fargate-task-exit-code-0.png`
const cloudWatchProofUrl =
  `${repoUrl}/blob/main/docs/screenshots/week9/07-cloudwatch-scheduled-run-week9-success.png`
const redshiftDbtProofUrl =
  `${repoUrl}/blob/main/docs/screenshots/week8/07-dbt-build-redshift-success.png`
const s3BronzeProofUrl =
  `${repoUrl}/blob/main/docs/screenshots/week7/02-s3-bronze-prefix-view.png`
const airflowGraphProofUrl = `${repoUrl}/blob/main/docs/screenshots/week5/week5_graph_view.png`
const routeTrendsSqlUrl = `${repoUrl}/blob/main/sql/analysis/route_price_trends.sql`
const leadTimeSqlUrl = `${repoUrl}/blob/main/sql/analysis/lead_time_buckets.sql`
const architectureDiagramSrc =
  "/projects/cloud-flight-fare-pipeline-proof/cloud-flight-fare-pipeline-full-repository-architecture-dark.png"
const currentAwsPathDiagramSrc =
  "/projects/cloud-flight-fare-pipeline-proof/cloud-flight-fare-pipeline-current-proven-aws-path-dark.png"

const stack = [
  "AWS",
  "ECS/Fargate",
  "EventBridge",
  "S3",
  "Redshift",
  "dbt",
  "Docker",
  "CloudWatch",
]

const proofAtGlance = [
  { label: "Local validation", value: "Docker + Postgres" },
  { label: "Proven AWS path", value: "Scheduler → ECS/Fargate → S3 → Redshift" },
  { label: "Orchestration", value: "EventBridge + CloudWatch" },
  { label: "Modeling", value: "dbt marts + tests" },
  { label: "Reviewer proof", value: "Screenshots, logs, SQL, CI" },
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
    commandLines: ["dbt build --project-dir dbt/flight_fares --profiles-dir dbt"],
  },
  {
    step: "04",
    title: "Run proof queries",
    commandLines: ["python scripts/run_analysis_queries.py"],
  },
]

const architectureCards = [
  {
    title: "Local validation path",
    icon: Database,
    items: [
      {
        key: "local-boot",
        content: "Start Docker + Postgres locally",
      },
      {
        key: "local-load",
        content: "Load sample fare snapshots",
      },
      {
        key: "local-dbt",
        content: "Build dbt staging, marts, and tests",
      },
      {
        key: "local-proof",
        content: "Run proof queries against analytics outputs",
      },
    ],
    linkLabel: "Local validation guide",
    linkHref: localDemoGuideUrl,
  },
  {
    title: "Proven AWS execution path",
    icon: Blocks,
    items: [
      {
        key: "aws-scheduler",
        content: "EventBridge triggers the batch run",
      },
      {
        key: "aws-fargate",
        content: "ECS/Fargate runs the container job",
      },
      {
        key: "aws-bronze",
        content: "Flight data lands in S3 Bronze",
      },
      {
        key: "aws-redshift",
        content: "Redshift Serverless receives loaded tables",
      },
      {
        key: "aws-dbt",
        content: "dbt builds marts and runs tests",
      },
      {
        key: "aws-cloudwatch",
        content: "CloudWatch captures execution evidence",
      },
    ],
    linkLabel: "AWS proof runbook",
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
        content: "Docs explain route, pricing, and timing analysis",
      },
      {
        key: "analytics-sql",
        content: "SQL examples cover trends, movement, and lead-time review",
      },
      {
        key: "analytics-ci",
        content: "CI validates linting, tests, loading, and dbt build steps",
      },
    ],
    linkLabel: "Mart usage docs",
    linkHref: martDocsUrl,
  },
]

const analyticsCards = [
  {
    title: "Route fare trends",
    description: "Route-level SQL shows pricing trends by origin and destination.",
    linkLabel: "Route trend SQL",
    linkHref: routeTrendsSqlUrl,
  },
  {
    title: "Monthly fare movement",
    description: "Example queries summarize fare movement over time.",
    linkLabel: "Example queries",
    linkHref: exampleQueriesUrl,
  },
  {
    title: "Lead-time analysis",
    description: "Lead-time SQL supports booking-window and pricing review.",
    linkLabel: "Lead-time SQL",
    linkHref: leadTimeSqlUrl,
  },
]

const proofGallery = [
  {
    label: "AWS scheduler proof",
    title: "EventBridge Scheduler target",
    description:
      "Scheduler configuration showing the AWS batch trigger path for the Fargate job.",
    imageSrc: "/projects/cloud-flight-fare-pipeline-proof/aws-eventbridge-scheduler-proof.png",
    imageAlt: "EventBridge Scheduler target configuration for the Cloud Flight Fare Pipeline Fargate job",
    href: eventBridgeProofUrl,
  },
  {
    label: "ECS/Fargate proof",
    title: "Manual Fargate task exit code 0",
    description: "Containerized batch run completed successfully in ECS/Fargate.",
    imageSrc: "/projects/cloud-flight-fare-pipeline-proof/aws-fargate-task-exit-code-0.png",
    imageAlt: "ECS Fargate task run showing exit code 0 for the Cloud Flight Fare Pipeline",
    href: fargateTaskProofUrl,
  },
  {
    label: "CloudWatch proof",
    title: "WEEK9_BATCH_SUCCESS log",
    description: "CloudWatch log evidence showing the scheduled AWS run completed successfully.",
    imageSrc: "/projects/cloud-flight-fare-pipeline-proof/aws-cloudwatch-week9-success.png",
    imageAlt: "CloudWatch log showing WEEK9_BATCH_SUCCESS for the scheduled AWS run",
    href: cloudWatchProofUrl,
  },
  {
    label: "Redshift + dbt proof",
    title: "Redshift/dbt build success",
    description: "Warehouse proof showing Redshift loading and dbt build validation.",
    imageSrc: "/projects/cloud-flight-fare-pipeline-proof/aws-redshift-dbt-build-proof.png",
    imageAlt: "dbt build success output for Redshift validation in the Cloud Flight Fare Pipeline",
    href: redshiftDbtProofUrl,
  },
  {
    label: "AWS S3 proof",
    title: "Bronze ingestion landed in S3",
    description: "S3 storage proof showing dated fare snapshots under the Bronze path.",
    imageSrc: "/projects/cloud-flight-fare-pipeline-proof/aws-s3-bronze-proof.png",
    imageAlt: "Amazon S3 console showing bronze flight fare snapshots",
    href: s3BronzeProofUrl,
  },
  {
    label: "Local DAG proof",
    title: "Runnable validation DAG graph",
    description: "Local Airflow graph showing the load, dbt build, and proof-query chain.",
    imageSrc: "/projects/cloud-flight-fare-pipeline-proof/week5-graph-view.png",
    imageAlt: "Airflow graph view for the local flight fare pipeline validation DAG",
    href: airflowGraphProofUrl,
  },
]

const supportingProofLinks = [
  { label: "EventBridge Proof", href: eventBridgeProofUrl },
  { label: "ECS/Fargate Proof", href: fargateTaskProofUrl },
  { label: "CloudWatch Logs", href: cloudWatchProofUrl },
  { label: "Redshift/dbt Proof", href: redshiftDbtProofUrl },
  { label: "S3 Bronze Proof", href: s3BronzeProofUrl },
  { label: "AWS Proof Runbook", href: redshiftRunbookUrl },
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
    "Recruiter-friendly case study for a real AWS cloud proof project using EventBridge Scheduler, ECS/Fargate, S3, Redshift Serverless, dbt, and CloudWatch Logs.",
  alternates: {
    canonical: caseStudyUrl,
  },
  openGraph: {
    title: "Cloud Flight Fare Pipeline",
    description:
      "Real AWS cloud data engineering proof project with a proven AWS batch execution path from flight API ingestion to analytics-ready marts.",
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
      "Real AWS cloud proof project using EventBridge, ECS/Fargate, S3, Redshift Serverless, dbt, and CloudWatch Logs.",
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
                REAL AWS CLOUD PROOF
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Cloud Flight Fare Pipeline
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Real AWS cloud data engineering proof project using EventBridge Scheduler,
                ECS/Fargate, S3, Redshift Serverless, dbt, and CloudWatch Logs to run a scheduled
                batch pipeline from flight API ingestion to analytics-ready marts.
              </p>

              <div className="mt-5 rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">Validated cloud scope:</span>{" "}
                proven AWS batch execution with EventBridge Scheduler, ECS/Fargate, S3 Bronze
                landing, Redshift Serverless loading, dbt marts/tests, CloudWatch success logs,
                proof screenshots, and runbooks.
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

        <section
          id="architecture"
          className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-8 md:pb-10"
        >
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-wider text-primary uppercase">
              AWS Proof Diagram
            </p>
            <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
              Current Proven AWS Path
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Real AWS execution path showing how EventBridge Scheduler triggers an ECS/Fargate
              batch container to ingest flight data, land raw data in S3 Bronze, load Redshift
              Serverless, build dbt staging/marts/tests, and capture execution proof in CloudWatch
              Logs.
            </p>
          </div>

          <a
            href={currentAwsPathDiagramSrc}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 block focus-visible:outline-none"
            aria-label="View the current proven AWS path diagram full size"
          >
            <Image
              src={currentAwsPathDiagramSrc}
              alt="Current proven AWS path diagram for the Cloud Flight Fare Pipeline"
              width={1672}
              height={941}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
              className="h-auto w-full rounded-xl border border-border object-contain shadow-[0_18px_42px_rgba(0,0,0,0.2)] transition-transform duration-300 group-hover:scale-[1.005]"
            />
          </a>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-8">
          <div className="overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur-sm">
            <div className="border-b border-border/80 bg-[linear-gradient(135deg,rgba(34,211,238,0.12),rgba(13,148,136,0.02))] px-5 py-4 md:px-6">
              <p className="text-xs font-medium tracking-wider text-primary uppercase">
                LOCAL VALIDATION PATH
              </p>
              <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
                Reproducible local review path
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Run the project locally with Docker, Postgres, dbt, and proof queries before
                reviewing the AWS proof path.
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
                  <pre className="mt-3 flex-1 overflow-x-auto rounded-lg border border-white/8 bg-black/20 px-4 py-3.5 font-mono text-xs leading-6 whitespace-pre text-foreground">
                    {item.commandLines.map((line, index) => (
                      <span key={line} className="block min-w-max">
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
          id="execution-paths"
          className="mx-auto max-w-6xl scroll-mt-24 px-6 py-10 md:py-14"
        >
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-wider text-primary uppercase">
              Execution paths
            </p>
            <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
              Two clear paths, one analytics-ready outcome
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              The project is easiest to review through two paths: a reproducible local validation
              path and a proven AWS execution path. Both produce dbt-modeled marts and
              analytics-ready SQL outputs.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {architectureCards.map((card) => {
              const Icon = card.icon

              return (
                <article
                  key={card.title}
                  className={`rounded-xl border p-5 backdrop-blur-sm ${
                    card.title === "Proven AWS execution path"
                      ? "border-primary/30 bg-primary/5"
                      : "border-border bg-card/60"
                  }`}
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

          <div className="mt-12">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-medium tracking-wider text-primary uppercase">
                  TECHNICAL ARCHITECTURE
                </p>
                <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
                  Full Repository Architecture
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Detailed repository architecture showing ingestion, raw/bronze landing, cleaned
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
                alt="Cloud Flight Fare Pipeline full repository architecture diagram showing source, ingestion, bronze raw, silver cleaned, dbt modeling, validation, and analytics output stages."
                width={1672}
                height={941}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
                className="h-auto w-full rounded-xl border border-border object-contain shadow-[0_18px_42px_rgba(0,0,0,0.2)] transition-transform duration-300 group-hover:scale-[1.005]"
              />
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-10 md:py-14">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.75fr)] lg:items-start">
            <div>
              <p className="text-xs font-medium tracking-wider text-primary uppercase">
                Analytics-ready outputs
              </p>
              <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
                Downstream analysis is visible, not implied
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                The project goes beyond ingestion and modeling by documenting marts, SQL query
                patterns, and downstream handoff artifacts reviewers can inspect after the pipeline
                runs.
              </p>

              <p className="mt-6 text-xs font-medium tracking-wider text-primary uppercase">
                SQL output examples
              </p>

              <div className="mt-3 grid gap-4 md:grid-cols-3">
                {analyticsCards.map((card) => (
                  <article
                    key={card.title}
                    className="flex h-full flex-col rounded-xl border border-border bg-card/60 p-4 backdrop-blur-sm"
                  >
                    <h3 className="text-base font-semibold text-foreground">{card.title}</h3>
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

            <article className="overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur-sm lg:max-w-md lg:justify-self-end lg:self-start">
              <div className="relative aspect-[2/1] overflow-hidden bg-black">
                <Image
                  src="/projects/cloud-flight-fare-pipeline-proof/dashboard-screenshot.png"
                  alt="Downstream preview artifact from the Cloud Flight Fare Pipeline repo"
                  fill
                  sizes="(max-width: 1023px) 100vw, 28vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/88 via-background/8 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-primary/20 bg-background/85 px-3 py-1 font-mono text-[11px] tracking-[0.18em] text-primary uppercase">
                  Preview artifact
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg border border-primary/20 bg-primary/10 p-2 text-primary">
                    <LayoutDashboard className="size-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Downstream preview artifact
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Static downstream handoff artifact for reviewer inspection, not a live hosted BI
                  app.
                </p>
                <div className="mt-4">
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
              Reviewer evidence is surfaced here instead of hidden behind link lists. These proof
              assets show the AWS scheduler, ECS/Fargate execution, CloudWatch success logs,
              Redshift/dbt validation, S3 Bronze landing, and local validation support.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
              Start with the Current Proven AWS Path diagram, then review the AWS proof assets,
              local validation path, and downstream outputs. This page separates cloud proof, local
              validation, and reviewer handoff without overclaiming a live production service.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <ActionButton href="#architecture" label="Current AWS Path" icon={Blocks} />
              <ActionButton
                href={redshiftRunbookUrl}
                label="AWS Proof Runbook"
                icon={Blocks}
              />
              <ActionButton href="#execution-proof" label="Proof Screenshots" icon={ShieldCheck} />
              <ActionButton href={repoUrl} label="GitHub Repo" icon={Github} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
