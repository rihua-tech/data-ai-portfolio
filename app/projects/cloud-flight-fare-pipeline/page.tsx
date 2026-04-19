import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Blocks,
  BookOpen,
  CheckCircle2,
  Database,
  ExternalLink,
  FileText,
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
const architectureDocUrl = `${repoUrl}/blob/main/docs/architecture.md`
const localDemoGuideUrl = `${repoUrl}#quickstart-local-demo-in-10-minutes`
const redshiftRunbookUrl = `${repoUrl}/blob/main/docs/week4_redshift_runbook.md`
const airflowDagUrl = `${repoUrl}/blob/main/airflow/dags/flight_fare_pipeline_dag.py`
const ciUrl = `${repoUrl}/blob/main/.github/workflows/ci.yml`
const verifyMartsUrl = `${repoUrl}/blob/main/sql/redshift/verify_marts.sql`
const martDocsUrl = `${repoUrl}/blob/main/docs/how_to_use_marts.md`
const analyticsOutputsUrl = `${repoUrl}/tree/main/analytics/outputs`
const dashboardPreviewUrl = `${repoUrl}/blob/main/docs/images/dashboard_screenshot.png`
const screenshotProofUrl = `${repoUrl}/tree/main/docs/screenshots/week5`

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
  { label: "AWS path", value: "S3 + Redshift" },
  { label: "Orchestration", value: "Airflow DAG + logs" },
  { label: "Modeling", value: "dbt marts + tests + docs" },
  { label: "Reviewer proof", value: "Queries, CI, screenshots" },
]

const capabilityCards = [
  {
    title: "Local demo that runs fast",
    description:
      "The repo supports a quick Docker + Postgres path for validating ingestion, dbt models, and analysis queries without requiring AWS.",
  },
  {
    title: "Production-style AWS architecture",
    description:
      "The documented target path uses S3 bronze storage, Redshift warehouse loading, Airflow orchestration, and dbt modeling for analytics-ready outputs.",
  },
  {
    title: "Proof-oriented handoff",
    description:
      "Reviewers can inspect architecture notes, proof queries, CI checks, dashboard artifacts, and execution screenshots instead of relying on diagram-only claims.",
  },
]

const architectureCards = [
  {
    title: "Fast local validation path",
    icon: Database,
    items: [
      "Start Postgres with Docker Compose",
      "Load sample fare data into local warehouse tables",
      "Run dbt staging, marts, tests, and docs",
      "Execute analysis queries against analytics-ready outputs",
    ],
    linkLabel: "Local demo guide",
    linkHref: localDemoGuideUrl,
  },
  {
    title: "Production-style AWS path",
    icon: Blocks,
    items: [
      "Ingest daily fare snapshots to S3 bronze storage",
      "Load warehouse tables into Redshift with documented SQL helpers",
      "Run dbt against the Redshift target for staging and marts",
      "Use proof queries to validate mart row counts and downstream readiness",
    ],
    linkLabel: "Architecture docs",
    linkHref: architectureDocUrl,
  },
  {
    title: "Analytics-ready delivery",
    icon: Workflow,
    items: [
      "Mart outputs include `marts.fact_fares`, `marts.dim_route`, and `marts.dim_date`",
      "Example SQL supports route trends, monthly movement, and lead-time analysis",
      "Dashboard preview and analytics output artifacts are included for reviewer handoff",
      "CI validates linting, tests, demo loading, and dbt build steps",
    ],
    linkLabel: "Mart usage docs",
    linkHref: martDocsUrl,
  },
]

const evidenceCards = [
  {
    title: "Airflow execution evidence",
    description:
      "The repo documents a local Airflow DAG with scheduler runs, task logs, retry behavior, and saved Week 5 screenshots.",
    icon: ShieldCheck,
    links: [
      { label: "Week 5 screenshots", href: screenshotProofUrl },
      { label: "Airflow DAG", href: airflowDagUrl },
    ],
  },
  {
    title: "Warehouse validation",
    description:
      "The AWS path includes Redshift runbook steps plus proof queries for raw and mart row-count validation.",
    icon: Database,
    links: [
      { label: "Redshift runbook", href: redshiftRunbookUrl },
      { label: "Verify marts SQL", href: verifyMartsUrl },
    ],
  },
  {
    title: "Analytics handoff artifacts",
    description:
      "The project includes analytics outputs, example queries, and a dashboard preview instead of implying a live BI application.",
    icon: LayoutDashboard,
    links: [
      { label: "Dashboard preview", href: dashboardPreviewUrl },
      { label: "Analytics outputs", href: analyticsOutputsUrl },
    ],
  },
  {
    title: "Reviewer-ready documentation",
    description:
      "Docs and CI make it easy to verify how the pipeline is structured, how it is run, and what is proven today.",
    icon: FileText,
    links: [
      { label: "Docs folder", href: docsUrl },
      { label: "GitHub Actions CI", href: ciUrl },
    ],
  },
]

const scopeNotes = [
  "Proven today: the fast local demo path with Docker, Postgres, dbt, analysis queries, and local Airflow orchestration evidence.",
  "Documented as a production-style target: AWS S3 plus Redshift execution flow, runbooks, SQL helpers, and dbt warehouse modeling.",
  "Not claimed here: a fully deployed public SaaS product, a fully managed production AWS deployment, or a live hosted dashboard.",
]

interface ActionButtonProps {
  href: string
  label: string
  icon: LucideIcon
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
    "Recruiter-friendly case study for an AWS-focused flight fare ELT pipeline with Docker/Postgres local demo, S3/Redshift production-style architecture, Airflow orchestration, dbt marts, and proof-oriented documentation.",
  alternates: {
    canonical: caseStudyUrl,
  },
  openGraph: {
    title: "Cloud Flight Fare Pipeline",
    description:
      "AWS-focused flight fare ELT case study with local demo proof, production-style architecture notes, analytics-ready marts, and reviewer-facing execution evidence.",
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
      "AWS-focused flight fare ELT case study with local demo proof, S3/Redshift architecture, Airflow, dbt, and analytics-ready outputs.",
    images: ["/projects/cloud-flight-fare-pipeline.jpg"],
  },
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
                End-to-end flight fare data pipeline with a fast local demo stack (Docker +
                Postgres) and a production-style AWS path (S3 + Redshift), orchestrated with
                Airflow and modeled with dbt.
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
          <div className="grid gap-4 md:grid-cols-3">
            {capabilityCards.map((card) => (
              <article
                key={card.title}
                className="rounded-xl border border-border bg-card/60 p-5 backdrop-blur-sm"
              >
                <h2 className="text-lg font-semibold text-foreground">{card.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </article>
            ))}
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
              production-style AWS path. Both routes converge on dbt-modeled marts and SQL outputs
              that are ready for analytics review.
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
                        key={item}
                        className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{item}</span>
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
              Proof assets that make the review easier
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              This project is backed by concrete reviewer artifacts: Airflow screenshots and logs,
              Redshift validation SQL, CI checks, dashboard preview material, and docs that explain
              how to run and verify the pipeline.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {evidenceCards.map((card) => {
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

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {card.links.map((link) => (
                      <ActionButton
                        key={link.label}
                        href={link.href}
                        label={link.label}
                        icon={ExternalLink}
                      />
                    ))}
                  </div>
                </article>
              )
            })}
          </div>

          <article className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
            <h3 className="text-lg font-semibold text-foreground">What is proven vs. documented</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {scopeNotes.map((note) => (
                <li
                  key={note}
                  className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16 pt-2 md:pb-20">
          <div className="rounded-xl border border-border bg-card/60 p-6 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-foreground">Reviewer path</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Start with the repo README for the end-to-end story, then use the architecture docs,
              runbooks, proof screenshots, and CI workflow to verify how the project is structured
              and what evidence is available.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <ActionButton href={repoUrl} label="GitHub Repo" icon={Github} />
              <ActionButton href={docsUrl} label="Docs" icon={BookOpen} />
              <ActionButton href={architectureDocUrl} label="Architecture Doc" icon={Blocks} />
              <ActionButton href={screenshotProofUrl} label="Proof Screenshots" icon={ShieldCheck} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
