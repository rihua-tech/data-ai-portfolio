import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"
import {
  ArrowLeft,
  ArrowRight,
  Blocks,
  BookOpen,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  FileText,
  Github,
  LayoutDashboard,
  Layers3,
  MapPinned,
  NotebookText,
  Route,
  ShieldCheck,
  Workflow,
} from "lucide-react"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { Tag } from "@/components/Tag"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

const caseStudyUrl = "/projects/nyc-311-service-requests-lakehouse"
const repoUrl = "https://github.com/rihua-tech/nyc-311-service-requests-lakehouse"
const docsUrl = "https://github.com/rihua-tech/nyc-311-service-requests-lakehouse/tree/main/docs"
const architectureDocUrl =
  "https://github.com/rihua-tech/nyc-311-service-requests-lakehouse/blob/main/docs/architecture/architecture-diagram.md"
const runbookUrl =
  "https://github.com/rihua-tech/nyc-311-service-requests-lakehouse/blob/main/docs/runbooks/pipeline-runbook.md"
const dataFlowUrl =
  "https://github.com/rihua-tech/nyc-311-service-requests-lakehouse/blob/main/docs/architecture/data-flow.md"
const workflowUrl =
  "https://github.com/rihua-tech/nyc-311-service-requests-lakehouse/blob/main/infra/databricks/workflow-job.json"
const adfPipelineUrl =
  "https://github.com/rihua-tech/nyc-311-service-requests-lakehouse/blob/main/infra/adf/pipeline_nyc311_ingest.json"
const metricsUrl =
  "https://github.com/rihua-tech/nyc-311-service-requests-lakehouse/blob/main/powerbi/metrics-definition.md"
const dashboardMockupUrl =
  "https://github.com/rihua-tech/nyc-311-service-requests-lakehouse/blob/main/powerbi/nyc311_dashboard_mockup.md"
const repoRawBase =
  "https://raw.githubusercontent.com/rihua-tech/nyc-311-service-requests-lakehouse/main"

const proofAtGlance = [
  { label: "Source", value: "NYC 311 REST API" },
  { label: "Landing", value: "ADF raw JSON -> ADLS" },
  { label: "Processing", value: "Databricks bronze / silver / gold" },
  { label: "Outputs", value: "fact table + 3 gold marts" },
  { label: "Proof", value: "Milestones 9, 10, 11" },
]

const keyQuestions = [
  "How many requests arrive each day?",
  "Which agencies and complaint types drive the most demand?",
  "How long does it take to resolve service requests?",
  "Where is backlog building up?",
]

const currentPathSteps = [
  "ADF REST extraction",
  "ADLS raw landing",
  "Databricks bronze ingest",
  "bronze dedup",
  "silver standardization / quality",
  "gold dimensions, fact, and marts",
  "validation",
]

const targetArchitectureSteps = [
  "NYC 311 API",
  "ADF",
  "ADLS Gen2",
  "Databricks / PySpark",
  "Delta Lake Gold",
  "Power BI / reporting layer",
]

const executionSteps = [
  "ADF CopyNYC311ToBronzeRaw calls the NYC 311 API and lands bounded raw JSON to ADLS.",
  "RunDatabricksBronzeHandoff passes runtime parameters such as environment, run_date, window_start, window_end, batch_id, and raw_landing_path.",
  "01_ingest_nyc311_raw reads landed raw JSON and writes the bronze Delta table.",
  "02_bronze_dedup_metadata republishes deduplicated bronze.",
  "Silver notebooks clean requests, standardize locations/categories, and apply quality rules.",
  "Gold notebooks build dimensions, fact table, and reporting marts.",
  "Validation confirms outputs and proves the pipeline execution.",
]

const medallionLayers = [
  {
    title: "Bronze",
    summary: "Raw landing plus ingestion metadata stays close to source while preserving replay and lineage context.",
    items: ["Raw NYC 311 JSON", "Ingestion metadata", "Dedup and lineage handling"],
  },
  {
    title: "Silver",
    summary: "Standardized, quality-checked service request records become reusable for downstream modeling.",
    items: [
      "Cleaned service requests",
      "Standardized locations",
      "Standardized categories",
      "Reusable data quality rules",
    ],
  },
  {
    title: "Gold",
    summary: "Analytics-ready star-schema outputs and marts support reviewer-friendly business questions.",
    items: [
      "dim_date, dim_agency, dim_complaint_type, dim_location, dim_status",
      "fact_service_requests",
      "mart_request_volume_daily",
      "mart_service_performance",
      "mart_backlog_snapshot",
    ],
  },
]

const goldOutputs = [
  {
    title: "Request Volume Daily",
    martName: "mart_request_volume_daily",
    description:
      "Daily request volume trends for monitoring demand patterns and reporting period-over-period activity.",
  },
  {
    title: "Service Performance",
    martName: "mart_service_performance",
    description:
      "Agency and complaint-type level performance output for comparing closure volume and resolution time.",
  },
  {
    title: "Backlog Snapshot",
    martName: "mart_backlog_snapshot",
    description:
      "Open request monitoring by status, agency, and snapshot date to identify backlog risk.",
  },
]

export const metadata: Metadata = {
  title: "NYC 311 Service Requests Lakehouse | Rihua Van Steenburgh",
  description:
    "Recruiter-friendly case study for an Azure-first medallion lakehouse using ADF, ADLS, Databricks, PySpark, Delta Lake, and milestone-backed execution proof.",
  alternates: {
    canonical: caseStudyUrl,
  },
  openGraph: {
    title: "NYC 311 Service Requests Lakehouse",
    description:
      "Azure-first medallion lakehouse case study with ADF raw landing, Databricks bronze/silver/gold processing, and execution-proof documentation.",
    url: caseStudyUrl,
    images: [
      {
        url: "/projects/nyc-311-lakehouse.jpg",
        alt: "NYC 311 Service Requests Lakehouse architecture image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NYC 311 Service Requests Lakehouse",
    description:
      "Azure-first medallion lakehouse case study with execution proof, analytics-ready marts, and honest scope notes.",
    images: ["/projects/nyc-311-lakehouse.jpg"],
  },
}

const technicalCards = [
  {
    title: "Python Modules",
    icon: Code2,
    description: "Ingestion, transformation, data quality, and runtime helpers.",
    links: [{ label: "Source modules", href: `${repoUrl}/tree/main/src` }],
  },
  {
    title: "Databricks Notebooks",
    icon: NotebookText,
    description: "Setup, bronze, silver, gold, and validation notebook exports.",
    links: [{ label: "Notebook exports", href: `${repoUrl}/tree/main/databricks/notebooks` }],
  },
  {
    title: "SQL Assets",
    icon: Database,
    description: "DDL, mart definitions, and validation SQL.",
    links: [{ label: "SQL folder", href: `${repoUrl}/tree/main/sql` }],
  },
  {
    title: "Runbooks & Docs",
    icon: FileText,
    description: "Architecture notes, pipeline runbook, troubleshooting, and evidence docs.",
    links: [
      { label: "Docs folder", href: docsUrl },
      { label: "Pipeline runbook", href: runbookUrl },
    ],
  },
  {
    title: "Workflow Definition",
    icon: Workflow,
    description: "Databricks job task chain and workflow structure.",
    links: [{ label: "workflow-job.json", href: workflowUrl }],
  },
  {
    title: "ADF Pipeline Contract",
    icon: Route,
    description: "REST-to-ADLS raw landing and handoff parameters.",
    links: [{ label: "pipeline_nyc311_ingest.json", href: adfPipelineUrl }],
  },
]

const decisionCards = [
  {
    title: "Why Lakehouse",
    description:
      "Raw API data becomes reusable analytics-ready datasets across bronze, silver, and gold without collapsing ingestion, quality, and reporting logic into one layer.",
  },
  {
    title: "Why Notebook Exports + Python Modules",
    description:
      "The repo keeps implementation logic inspectable while still proving cloud notebook execution, which makes review easier for hiring managers and technical peers.",
  },
  {
    title: "Why Validation Matters",
    description:
      "Validation shows outputs were produced and gives reviewers confidence that the pipeline completed beyond diagram-level architecture claims.",
  },
  {
    title: "What Is Not Overclaimed",
    description:
      "Power BI is currently a mockup/reporting layer, and infra JSON is starter deployment documentation rather than complete production IaC.",
  },
]

const takeawayItems = [
  {
    title: "Cloud data pipeline thinking",
    description: "ADF handoff boundaries, ADLS landing, Databricks processing, and reviewer-readable operating flow.",
  },
  {
    title: "Medallion modeling and data quality",
    description: "Bronze, silver, and gold layers with dimensions, facts, marts, and reusable quality controls.",
  },
  {
    title: "Execution proof, documentation, and reviewer-ready evidence",
    description: "Runbooks, workflow proof, screenshot folders, and scoped claims about what is implemented today.",
  },
]

const milestones = [
  {
    value: "milestone-9",
    label: "Milestone 9",
    title: "Databricks + ADLS Notebooks",
    summary:
      "First real Azure Databricks + ADLS notebook execution for setup, bronze, silver, gold, and validation.",
    supportingLinks: [
      { label: "View screenshots", href: `${repoUrl}/tree/main/docs/screenshots/milestone-9` },
      { label: "Pipeline runbook", href: runbookUrl },
      { label: "Architecture data flow", href: dataFlowUrl },
    ],
    proofImages: [
      {
        label: "DATABRICKS SETUP",
        title: "Secrets and widgets",
        path: "docs/screenshots/milestone-9/m9_databricks/setup proof/m9-secrets-and-widgets-success.png",
        caption: "Secrets and widgets were configured successfully.",
      },
      {
        label: "BRONZE INGEST",
        title: "Bronze ingest success",
        path: "docs/screenshots/milestone-9/m9_databricks/bronze proof/m9-bronze-ingest-success.png",
        caption: "Raw payloads were written to the bronze Delta layer.",
      },
      {
        label: "GOLD OUTPUTS",
        title: "Dimensions and marts",
        path: "docs/screenshots/milestone-9/m9-gold-dimensions-facts-marts.png",
        caption: "Dimensions, fact table, and marts were built in the gold layer.",
      },
      {
        label: "VALIDATION",
        title: "Gold validation pass",
        path: "docs/screenshots/milestone-9/m9_databricks/validation proof/m9-validation-gold-pass.png",
        caption: "Downstream gold outputs passed validation.",
      },
    ],
  },
  {
    value: "milestone-10",
    label: "Milestone 10",
    title: "Databricks Workflow",
    summary:
      "A real Jobs & Pipelines workflow successfully ran end to end using the same notebook chain proven in Milestone 9.",
    supportingLinks: [
      { label: "View screenshots", href: `${repoUrl}/tree/main/docs/screenshots/milestone-10` },
      { label: "Pipeline runbook", href: runbookUrl },
      { label: "Architecture data flow", href: dataFlowUrl },
    ],
    proofImages: [
      {
        label: "WORKFLOW DAG",
        title: "Task dependency view",
        path: "docs/screenshots/milestone-10/m10-task-dependency-view.png",
        caption: "Task ordering is visible in the Databricks workflow.",
      },
      {
        label: "WORKFLOW RUN",
        title: "Successful job run",
        path: "docs/screenshots/milestone-10/m10-successful-job-run.png",
        caption: "The Databricks job completed successfully end to end.",
      },
      {
        label: "JOB PARAMETERS",
        title: "Workflow parameters",
        path: "docs/screenshots/milestone-10/m10-job-parameters.png",
        caption: "Runtime parameters were passed into the workflow.",
      },
      {
        label: "TASK CHAIN",
        title: "Gold and validation DAG",
        path: "docs/screenshots/milestone-10/m10-workflow-dag-part2-gold-validation.png",
        caption: "Gold and validation tasks are wired into the same job.",
      },
    ],
  },
  {
    value: "milestone-11",
    label: "Milestone 11",
    title: "ADF Raw Landing + Databricks Handoff",
    summary:
      "Current proven cloud path lands raw JSON in ADLS, hands off to Databricks, and closes with ADLS-backed Delta validation.",
    supportingLinks: [
      { label: "View screenshots", href: `${repoUrl}/tree/main/docs/screenshots/milestone-11` },
      { label: "Pipeline runbook", href: runbookUrl },
      { label: "Architecture data flow", href: dataFlowUrl },
    ],
    proofImages: [
      {
        label: "ADF PIPELINE",
        title: "ADF pipeline run",
        path: "docs/screenshots/milestone-11/m11_adf_run_success.png",
        caption: "REST extraction completed successfully in Azure Data Factory.",
      },
      {
        label: "ADLS STORAGE",
        title: "Raw JSON landed in ADLS",
        path: "docs/screenshots/milestone-11/m11_adls_raw_landing.png",
        caption: "Raw payload landed in ADLS storage.",
      },
      {
        label: "DATABRICKS HANDOFF",
        title: "Bronze handoff",
        path: "docs/screenshots/milestone-11/m11_adf_to_databricks_handoff.png",
        caption: "ADF passed runtime context to Databricks for bronze ingestion.",
      },
      {
        label: "VALIDATION",
        title: "Final validation",
        path: "docs/screenshots/milestone-11/m11_validation_passed.png",
        caption: "ADLS-backed Delta outputs passed validation.",
      },
    ],
  },
] as const

interface SectionShellProps {
  id: string
  eyebrow?: string
  title: string
  description?: string
  children: ReactNode
  className?: string
}

function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionShellProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 px-6 py-12 md:py-16", className)}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-3xl">
          {eyebrow && (
            <p className="mb-3 font-mono text-xs tracking-[0.28em] text-primary uppercase">
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}

function Surface({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card/80 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.01)] backdrop-blur-sm transition-colors hover:border-primary/25",
        className,
      )}
    >
      {children}
    </div>
  )
}

function encodeGithubPath(path: string) {
  return path
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/")
}

function getGithubRawUrl(path: string) {
  return `${repoRawBase}/${encodeGithubPath(path)}`
}

function ExternalButton({
  href,
  label,
  icon: Icon,
  variant = "outline",
}: {
  href: string
  label: string
  icon: typeof Github
  variant?: "default" | "outline"
}) {
  return (
    <Button asChild size="lg" variant={variant}>
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
        <Icon className="size-4" />
        {label}
      </a>
    </Button>
  )
}

function AnchorButton({
  href,
  label,
  icon: Icon,
  variant = "outline",
}: {
  href: string
  label: string
  icon: typeof Github
  variant?: "default" | "outline"
}) {
  return (
    <Button asChild size="lg" variant={variant}>
      <a href={href} aria-label={label}>
        <Icon className="size-4" />
        {label}
      </a>
    </Button>
  )
}

function FlowCard({
  eyebrow,
  title,
  steps,
}: {
  eyebrow: string
  title: string
  steps: string[]
}) {
  return (
    <Surface className="h-full">
      <p className="font-mono text-xs tracking-[0.24em] text-primary uppercase">{eyebrow}</p>
      <h3 className="mt-3 text-xl font-semibold text-foreground">{title}</h3>
      <div className="mt-6 space-y-3">
        {steps.map((step, index) => (
          <div key={step} className="flex gap-3">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-xs font-semibold text-primary">
              {index + 1}
            </div>
            <div className="flex-1 rounded-xl border border-border bg-background/50 px-4 py-3 text-sm leading-relaxed text-muted-foreground">
              {step}
            </div>
          </div>
        ))}
      </div>
    </Surface>
  )
}

function TechnicalCard({
  title,
  description,
  icon: Icon,
  links,
}: {
  title: string
  description: string
  icon: typeof Github
  links: Array<{ label: string; href: string }>
}) {
  return (
    <Surface className="h-full">
      <div className="flex items-start gap-3">
        <div className="rounded-xl border border-primary/20 bg-primary/10 p-2.5 text-primary">
          <Icon className="size-5" />
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {links.map((link) => (
          <Button key={link.href} asChild size="sm" variant="outline">
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title}: ${link.label}`}
            >
              <ExternalLink className="size-4" />
              {link.label}
            </a>
          </Button>
        ))}
      </div>
    </Surface>
  )
}

function ProofThumbnail({
  label,
  title,
  path,
  caption,
}: {
  label: string
  title: string
  path: string
  caption?: string
}) {
  const rawUrl = getGithubRawUrl(path)

  return (
    <a
      href={rawUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title} screenshot`}
      className="group block"
    >
      <Surface className="h-full overflow-hidden p-0 transition-all duration-300 group-hover:border-primary/35 group-hover:bg-card">
        <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
          <Image
            src={rawUrl}
            alt={title}
            fill
            unoptimized
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/68 via-transparent to-transparent" />
          <div className="absolute right-3 bottom-3 rounded-full border border-white/10 bg-background/85 p-1.5 text-primary">
            <ExternalLink className="size-3.5" />
          </div>
        </div>
        <div className="flex h-[8.75rem] flex-col p-4">
          <p className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
            {label}
          </p>
          <h4 className="mt-2 text-sm font-semibold text-foreground">{title}</h4>
          {caption ? (
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{caption}</p>
          ) : null}
        </div>
      </Surface>
    </a>
  )
}

export default function NYC311CaseStudyPage() {
  return (
    <>
      <Navbar />
      <main role="main" className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.18),transparent_55%)]" />

        <section className="px-6 pt-8 pb-12 md:pt-12 md:pb-16">
          <div className="mx-auto max-w-6xl">
            <Link
              href="/#projects"
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              Back to featured projects
            </Link>

            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="font-mono text-xs tracking-[0.32em] text-primary uppercase">
                  AZURE DATA ENGINEERING
                </p>
                <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  NYC 311 Service Requests Lakehouse
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  Azure-first medallion lakehouse for NYC 311 operational analytics. Proven
                  cloud path from raw API landing to ADLS-backed bronze, silver, and gold
                  datasets in Databricks.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "ADF -> ADLS -> Databricks",
                    "Bronze / Silver / Gold",
                    "Delta Lake",
                    "PySpark",
                    "Workflow Proof",
                  ].map((pill) => (
                    <Tag
                      key={pill}
                      className="border border-primary/15 bg-primary/10 px-3 py-1.5 text-[11px] tracking-[0.18em] text-primary uppercase"
                    >
                      {pill}
                    </Tag>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <ExternalButton
                    href={repoUrl}
                    label="GitHub Repo"
                    icon={Github}
                    variant="default"
                  />
                  <AnchorButton href="#architecture" label="Architecture" icon={Blocks} />
                  <AnchorButton
                    href="#execution-proof"
                    label="Execution Proof"
                    icon={ShieldCheck}
                  />
                  <ExternalButton href={docsUrl} label="Docs" icon={BookOpen} />
                </div>
              </div>

              <div className="space-y-4">
                <Surface className="overflow-hidden p-0">
                  <div className="relative aspect-[16/11] bg-black">
                    <Image
                      src="/projects/nyc-311-lakehouse.jpg"
                      alt="NYC 311 Service Requests Lakehouse architecture illustration"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/35 via-transparent to-transparent" />
                  </div>
                </Surface>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Evidence includes cloud execution screenshots, workflow proof, and ADLS-backed
                  validation. Reporting definitions and dashboard mockup assets are documented as
                  future reporting support.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionShell
          id="proof-at-a-glance"
          eyebrow="Quick Scan"
          title="Proof at a Glance"
          description="A recruiter-facing summary of the cloud path, outputs, and milestone evidence captured in the repo."
        >
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {proofAtGlance.map((item) => (
              <Surface key={item.label} className="h-full">
                <p className="font-mono text-xs tracking-[0.22em] text-primary uppercase">
                  {item.label}
                </p>
                <p className="mt-3 text-base font-semibold leading-snug text-foreground">
                  {item.value}
                </p>
              </Surface>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="business-problem"
          eyebrow="Business Context"
          title="Operational Analytics Problem"
          description="This project is framed around the analytics questions that city-service stakeholders would ask once raw service request events are organized into a durable lakehouse model."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <Surface>
              <h3 className="text-xl font-semibold text-foreground">Business Problem</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                NYC 311 service request data can support operational analytics for city-service
                demand, agency workload, complaint trends, resolution time, and backlog
                monitoring. The lakehouse pattern makes it easier to move from raw API extraction
                into reusable analytics outputs without blurring ingestion, quality, and reporting
                responsibilities.
              </p>
            </Surface>

            <Surface>
              <h3 className="text-xl font-semibold text-foreground">Key Questions Answered</h3>
              <ul className="mt-4 space-y-3">
                {keyQuestions.map((question) => (
                  <li key={question} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{question}</span>
                  </li>
                ))}
              </ul>
            </Surface>
          </div>
        </SectionShell>

        <SectionShell
          id="architecture"
          eyebrow="Current Scope"
          title="Current Proven Path vs Target Architecture"
          description="The page separates what is cloud-proven today from the broader architecture the repo is designed to support."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <FlowCard eyebrow="Cloud-Proven" title="Current Proven Path" steps={currentPathSteps} />
            <FlowCard
              eyebrow="Broader Design"
              title="Target Architecture"
              steps={targetArchitectureSteps}
            />
          </div>

          <Surface className="mt-6 border-primary/20 bg-primary/10">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <h3 className="text-lg font-semibold text-foreground">Honest Status</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 block size-1.5 shrink-0 rounded-full bg-primary" />
                    Current proven cloud path: ADF raw landing + Databricks handoff +
                    ADLS-backed Delta processing.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 block size-1.5 shrink-0 rounded-full bg-primary" />
                    Workflow proof: real Databricks job/workflow evidence.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 block size-1.5 shrink-0 rounded-full bg-primary" />
                    Power BI: mockup/reporting definitions only, not a fully deployed public
                    dashboard.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 block size-1.5 shrink-0 rounded-full bg-primary" />
                    Infra JSON: starter deployment documentation, not full production IaC.
                  </li>
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Button asChild size="sm" variant="outline">
                    <a
                      href={architectureDocUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open the architecture diagram documentation"
                    >
                      <Blocks className="size-4" />
                      Architecture doc
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <a
                      href={dataFlowUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open the architecture data flow documentation"
                    >
                      <ArrowRight className="size-4" />
                      Data flow doc
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Surface>
        </SectionShell>

        <SectionShell
          id="pipeline-flow"
          eyebrow="Execution Sequence"
          title="Pipeline Execution Flow"
          description="The current Milestone 11 operating path starts in ADF, hands off to Databricks, and closes with output validation."
        >
          <div className="relative">
            <div className="absolute top-4 bottom-4 left-4 hidden w-px bg-border sm:block" />
            <ol className="space-y-5">
              {executionSteps.map((step, index) => (
                <li key={step} className="relative flex gap-4">
                  <div className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-background text-sm font-semibold text-primary">
                    {index + 1}
                  </div>
                  <Surface className="flex-1">
                    <p className="text-sm leading-relaxed text-muted-foreground">{step}</p>
                  </Surface>
                </li>
              ))}
            </ol>
          </div>
        </SectionShell>

        <SectionShell
          id="medallion-layers"
          eyebrow="Data Model"
          title="Medallion Layers"
          description="Bronze preserves source fidelity, silver standardizes and cleans, and gold delivers analytics-ready dimensional outputs."
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {medallionLayers.map((layer, index) => (
              <Surface
                key={layer.title}
                className={cn(
                  "h-full bg-gradient-to-b from-primary/8 to-transparent",
                  index === 1 && "from-primary/10",
                  index === 2 && "from-primary/12",
                )}
              >
                <p className="font-mono text-xs tracking-[0.24em] text-primary uppercase">
                  {layer.title}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-foreground">{layer.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {layer.summary}
                </p>
                <ul className="mt-5 space-y-3">
                  {layer.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-1 block size-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Surface>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="gold-outputs"
          eyebrow="Reporting Surface"
          title="Analytics-Ready Gold Outputs"
          description="These Gold-layer marts translate cleaned service request data into reporting-ready outputs for demand, performance, and backlog analysis."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {goldOutputs.map((output) => (
              <Surface key={output.title} className="flex h-full flex-col">
                <div className="flex items-center gap-3">
                  <LayoutDashboard className="size-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">{output.title}</h3>
                </div>
                <Tag className="mt-3 w-fit border border-primary/15 bg-primary/10 px-2.5 py-1 font-mono text-[11px] text-primary">
                  {output.martName}
                </Tag>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {output.description}
                </p>
              </Surface>
            ))}
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Reporting definitions and dashboard mockup assets are included in the repo to show how
            these Gold marts support downstream BI analysis.
          </p>
        </SectionShell>

        <SectionShell
          id="execution-proof"
          eyebrow="Execution Evidence"
          title="Execution Proof"
          description="These screenshots are sourced from the project's milestone evidence folders and demonstrate real cloud pipeline execution."
        >
          <Tabs defaultValue="milestone-11" className="w-full">
            <TabsList className="mb-6 inline-flex h-auto flex-wrap justify-start gap-2 rounded-2xl border border-border/80 bg-card/60 p-1">
              {milestones.map((milestone) => (
                <TabsTrigger
                  key={milestone.value}
                  value={milestone.value}
                  className="rounded-xl border border-transparent px-4 py-2.5 text-sm text-muted-foreground transition-colors data-[state=active]:border-primary/25 data-[state=active]:bg-primary/10 data-[state=active]:text-foreground"
                >
                  {milestone.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {milestones.map((milestone) => (
              <TabsContent key={milestone.value} value={milestone.value} className="space-y-6">
                <Surface className="bg-gradient-to-br from-card to-card/90">
                  <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
                    <div className="max-w-3xl">
                      <div className="flex flex-wrap items-center gap-3">
                        <p className="font-mono text-xs tracking-[0.24em] text-primary uppercase">
                          {milestone.label}
                        </p>
                        <span className="inline-flex items-center rounded-full border border-primary/15 bg-primary/10 px-2.5 py-1 font-mono text-[11px] text-primary">
                          {milestone.proofImages.length} proof assets
                        </span>
                      </div>
                      <h3 className="mt-3 text-2xl font-semibold text-foreground">
                        {milestone.title}
                      </h3>
                      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                        {milestone.summary}
                      </p>
                    </div>
                    <div className="grid gap-2 sm:grid-cols-2 lg:max-w-md lg:grid-cols-1 xl:grid-cols-2 xl:justify-end">
                      {milestone.supportingLinks.map((link) => (
                        <Button
                          key={link.href}
                          asChild
                          size="sm"
                          variant="outline"
                          className="h-auto min-h-9 w-full justify-start whitespace-normal px-3 py-2 text-left"
                        >
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${milestone.label}: ${link.label}`}
                          >
                            <ExternalLink className="size-4" />
                            {link.label}
                          </a>
                        </Button>
                      ))}
                    </div>
                  </div>
                </Surface>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  These proof assets show ingestion, storage landing, Databricks handoff, and
                  final validation across the current cloud path.
                </p>

                {milestone.proofImages.length > 0 ? (
                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {milestone.proofImages.map((image) => (
                      <ProofThumbnail
                        key={image.path}
                        label={image.label}
                        title={image.title}
                        path={image.path}
                        caption={image.caption}
                      />
                    ))}
                  </div>
                ) : (
                  <Surface className="border-dashed">
                    <p className="font-mono text-xs tracking-[0.22em] text-primary uppercase">
                      Proof assets
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">Proof assets coming soon.</p>
                  </Surface>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </SectionShell>

        <SectionShell
          id="technical-implementation"
          eyebrow="Implementation Surface"
          title="Technical Implementation"
          description="The repo is intentionally reviewable: notebook exports, Python modules, SQL assets, docs, and starter deployment contracts are all inspectable."
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {technicalCards.map((card) => (
              <TechnicalCard key={card.title} {...card} />
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="engineering-decisions"
          eyebrow="Design Choices"
          title="Engineering Decisions"
          description="This project is designed to show credible execution and sound data-engineering judgment without overstating scope."
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {decisionCards.map((card) => (
              <Surface key={card.title} className="h-full">
                <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </Surface>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="reviewer-takeaway"
          eyebrow="Recruiter Summary"
          title="What This Project Demonstrates"
        >
          <div className="rounded-3xl border border-primary/20 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.16),transparent_45%),linear-gradient(180deg,rgba(14,18,29,0.88),rgba(14,18,29,0.96))] p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-3">
              {takeawayItems.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/8 bg-black/10 p-5">
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-base leading-relaxed text-foreground/90">
              This project demonstrates an end-to-end Azure data engineering workflow with real
              cloud execution proof, analytics-ready outputs, and honest documentation around
              current scope versus future work.
            </p>
          </div>
        </SectionShell>

        <SectionShell
          id="explore-project"
          eyebrow="Next Step"
          title="Explore the Project"
          description="Use the repo, architecture notes, proof folders, and documentation trail to review the project from design through execution evidence."
          className="pt-4 pb-16"
        >
          <Surface className="bg-gradient-to-br from-card to-card/70">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Supporting docs include architecture notes, the Milestone 11 runbook, workflow
                  JSON, reporting definitions, and milestone screenshot folders.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-sm text-muted-foreground">
                  <a
                    href={metricsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                  >
                    <MapPinned className="size-4 text-primary" />
                    Metrics definition
                  </a>
                  <a
                    href={dashboardMockupUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                  >
                    <Layers3 className="size-4 text-primary" />
                    Dashboard mockup notes
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <ExternalButton
                  href={repoUrl}
                  label="GitHub Repo"
                  icon={Github}
                  variant="default"
                />
                <AnchorButton href="#architecture" label="Architecture" icon={Blocks} />
                <AnchorButton
                  href="#execution-proof"
                  label="Execution Proof"
                  icon={ShieldCheck}
                />
                <ExternalButton href={docsUrl} label="Docs" icon={BookOpen} />
              </div>
            </div>
          </Surface>
        </SectionShell>
      </main>
      <Footer />
    </>
  )
}
