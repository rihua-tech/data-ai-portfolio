import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"
import {
  ArrowLeft,
  Blocks,
  CheckCircle2,
  Database,
  ExternalLink,
  FileSearch,
  Github,
  Layers3,
  Monitor,
  Route,
  Search,
  Server,
  ShieldCheck,
  TriangleAlert,
  Workflow,
  type LucideIcon,
} from "lucide-react"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { Tag } from "@/components/Tag"
import { Button } from "@/components/ui/button"

const caseStudyUrl = "/projects/civiclens-rag-nyc311"
const repoUrl = "https://github.com/rihua-tech/civiclens-rag-nyc311"
const liveDemoUrl = "https://civiclens-rag-nyc311.vercel.app"
const architectureUrl = `${repoUrl}/blob/main/docs/architecture.md`
const evaluationUrl = `${repoUrl}/blob/main/docs/evaluation-report.md`
const deploymentUrl = `${repoUrl}/blob/main/docs/deployment.md`
const screenshotsUrl = `${repoUrl}/tree/main/docs/screenshots`
const imageSrc = "/projects/civiclens-rag-nyc311-hosted-v2.jpg"
const imageAlt =
  "CivicLens hosted hybrid RAG workflow showing curated NYC 311 sources, pgvector retrieval, grounded cited answers, bounded analytics, and measured evaluation results."

const heroPills = [
  "Hybrid Retrieval",
  "PostgreSQL + pgvector",
  "Validated Citations",
  "Retrieval Evaluation",
  "Bounded Analytics",
]

const quickFacts = [
  { label: "Project type", value: "Applied AI / Hybrid RAG" },
  { label: "Status", value: "Hosted Portfolio Demo" },
  { label: "Retrieval", value: "Semantic + Full-Text + RRF" },
  { label: "Application", value: "FastAPI + Next.js" },
  { label: "Evaluation", value: "24 questions / 14 retrieval-eligible" },
]

const productPath = ["Browser", "Vercel Next.js", "Render FastAPI", "CivicLens Orchestration"]

const ragPath = [
  "Manifest-Controlled Sources",
  "Section-Aware Chunks",
  "PostgreSQL Authority",
  "pgvector Dense + PostgreSQL FTS",
  "PostgreSQL Hydration + Corpus Check",
  "Deterministic RRF",
  "Optional Bounded Reranking",
  "Grounded Generation + Citation Validation",
]

const analyticsPath = [
  "Typed Allowlisted Tool",
  "Checked-In Sample CSV",
  "Bounded Read-Only Result",
]

const retrievalStrategies = [
  {
    strategy: "Semantic",
    recall: "0.6607",
    mrr: "0.5857",
    expectedSource: "0.7857",
    highlight: false,
  },
  {
    strategy: "Hybrid",
    recall: "0.8393",
    mrr: "0.7071",
    expectedSource: "0.9286",
    highlight: true,
  },
  {
    strategy: "Hybrid + Reranking",
    recall: "0.8214",
    mrr: "0.7619",
    expectedSource: "0.9286",
    highlight: false,
  },
]

const evaluationMetrics = [
  { value: "83.9%", label: "Recall@5", detail: "Hybrid retrieval" },
  { value: "92.9%", label: "Expected-source retrieval", detail: "Hybrid retrieval" },
  { value: "14", label: "Retrieval-eligible questions", detail: "24-question fixture" },
]

const applicationMetrics = [
  { value: "95.83%", label: "Routing accuracy", detail: "n = 24" },
  { value: "92.86%", label: "Citation presence", detail: "n = 14" },
  { value: "92.86%", label: "Citation validity", detail: "n = 14" },
  { value: "33.33%", label: "Safe no-answer accuracy", detail: "n = 6" },
]

const experimentFindings = [
  "Hybrid retrieval raised Recall@5 from 0.6607 to 0.8393 versus semantic-only retrieval.",
  "Expected-source retrieval improved from 0.7857 to 0.9286 with hybrid search.",
  "Reranking increased MRR from 0.7071 to 0.7619, but slightly reduced Recall@5 from 0.8393 to 0.8214.",
  "The more sophisticated strategy did not dominate every metric, so no configuration is presented as universally superior.",
]

const groundingControls = [
  "Generation receives only the question and allowlisted retrieved evidence fields.",
  "Stable chunk IDs, not model-generated display numbers, define citation identity.",
  "CivicLens rejects citation IDs outside the retrieved result set and rebuilds trusted provenance itself.",
  "An answered response with zero valid citations is converted to safe no-answer behavior.",
  "Public API responses omit raw retrieval chunks, provider payloads, credentials, and backend configuration.",
]

const analyticsTools = [
  "Top complaint types",
  "Borough request volume",
  "Agency request volume",
  "Backlog summary",
]

const technicalImplementation = [
  {
    title: "Traceable Ingestion",
    icon: FileSearch,
    description:
      "Manifest authorization, normalized SHA-256 hashes, provenance, and stable document identities make the curated corpus auditable.",
  },
  {
    title: "Section-Aware Chunking",
    icon: Layers3,
    description:
      "Markdown heading paths and section provenance stay attached to deterministic chunk IDs through storage and retrieval.",
  },
  {
    title: "Hybrid Retrieval",
    icon: Search,
    description:
      "Dense semantic candidates and PostgreSQL full-text candidates are fused with deterministic Reciprocal Rank Fusion.",
  },
  {
    title: "PostgreSQL + pgvector",
    icon: Database,
    description:
      "PostgreSQL owns canonical text, provenance, hashes, corpus identity, and lexical search; pgvector is the default dense store.",
  },
  {
    title: "FastAPI Application Boundary",
    icon: Server,
    description:
      "A provider-neutral contract validates requests, delegates orchestration, returns allowlisted fields, and sanitizes backend failures.",
  },
  {
    title: "Next.js Product UI",
    icon: Monitor,
    description:
      "The Vercel interface is a typed presentation client for FastAPI, with no retrieval, generation, database, or provider logic.",
  },
]

const hostedValidation = [
  "Grounded documentation answer rendered with CivicLens-validated citations and provenance.",
  "Approved analytics result rendered from the deterministic allowlisted CSV-backed path.",
  "Unsupported question returned safe abstention with zero fabricated sources.",
  "Dated deployment checks recorded healthy FastAPI liveness and readiness responses.",
]

const limitations = [
  "The RAG corpus is small, curated, and version-controlled rather than connected to live NYC 311 ingestion.",
  "The 24-question portfolio fixture is too small to establish statistical significance or production answer quality.",
  "Analytics uses four fixed read-only tools over checked-in sample CSV outputs, not unrestricted production text-to-SQL.",
  "The hosted demo is non-production, may experience Render Free cold starts, and makes no continuous-availability or SLA claim.",
  "Production authentication, authorization, HA, autoscaling, disaster recovery, rate limiting, and monitoring are out of scope.",
  "Evaluation and hosted runtime configurations intentionally differ: the approved benchmark uses the real-local MiniLM profile, repository defaults keep OpenAI optional, and the hosted demo uses a separate deterministic embedding/OpenAI grounded-generation configuration; documented abstention and routing failures remain part of the evaluation record.",
]

const demonstrates = [
  "Retrieval experiment design",
  "Hybrid search and ranking",
  "Recall@K and MRR evaluation",
  "Failure analysis",
  "Grounded generation",
  "Citation validation",
  "Safe abstention design",
  "Reproducible evaluation",
  "Production-minded API and deployment boundaries",
]

interface ActionButtonProps {
  href: string
  label: string
  icon: LucideIcon
  variant?: "default" | "outline"
}

export const metadata: Metadata = {
  title: "CivicLens RAG — NYC 311 Operations Copilot | Rihua Van Steenburgh",
  description:
    "Applied AI case study for a hosted hybrid RAG portfolio demo with semantic and full-text retrieval, deterministic RRF, validated citations, bounded analytics, and measured retrieval evaluation.",
  alternates: {
    canonical: caseStudyUrl,
  },
  openGraph: {
    title: "CivicLens RAG — NYC 311 Operations Copilot",
    description:
      "Hosted Applied AI and hybrid RAG portfolio system with measured retrieval, grounded generation, validated citations, and bounded analytics.",
    url: caseStudyUrl,
    images: [
      {
        url: imageSrc,
        alt: imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CivicLens RAG — NYC 311 Operations Copilot",
    description:
      "Hosted hybrid RAG demo using semantic and full-text retrieval, RRF, grounded answers, validated citations, and measured evaluation.",
    images: [imageSrc],
  },
}

function isExternalUrl(href: string) {
  return href.startsWith("http://") || href.startsWith("https://")
}

function ActionButton({ href, label, icon: Icon, variant = "outline" }: ActionButtonProps) {
  if (isExternalUrl(href)) {
    return (
      <Button asChild size="lg" variant={variant}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <Icon className="size-4" />
          {label}
        </a>
      </Button>
    )
  }

  return (
    <Button asChild size="lg" variant={variant}>
      <Link href={href}>
        <Icon className="size-4" />
        {label}
      </Link>
    </Button>
  )
}

function Surface({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-border bg-card/80 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.01)] backdrop-blur-sm transition-colors hover:border-primary/25 ${className}`}
    >
      {children}
    </div>
  )
}

function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id?: string
  eyebrow: string
  title: string
  description?: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24 px-6 py-10 md:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-7 max-w-3xl">
          <p className="font-mono text-xs tracking-[0.28em] text-primary uppercase">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
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

function FlowList({ steps, compact = false }: { steps: string[]; compact?: boolean }) {
  return (
    <div className={`grid gap-3 sm:grid-cols-2 ${compact ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
      {steps.map((step, index) => (
        <div key={step} className="rounded-xl border border-border bg-background/55 p-4">
          <div className="flex items-center gap-3">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-primary/10 font-mono text-[11px] font-semibold text-primary">
              {String(index + 1).padStart(2, "0")}
            </div>
            <p className="text-sm font-medium leading-snug text-foreground">{step}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function RetrievalComparison() {
  return (
    <>
      <div className="grid gap-3 sm:hidden">
        {retrievalStrategies.map((row) => (
          <div
            key={row.strategy}
            className={`rounded-xl border p-4 ${row.highlight ? "border-primary/35 bg-primary/10" : "border-border bg-background/55"}`}
          >
            <p className={`font-semibold ${row.highlight ? "text-primary" : "text-foreground"}`}>
              {row.strategy}
            </p>
            <dl className="mt-3 grid grid-cols-3 gap-2 text-center">
              <div>
                <dt className="text-[10px] tracking-wide text-muted-foreground uppercase">Recall@5</dt>
                <dd className="mt-1 font-mono text-sm text-foreground">{row.recall}</dd>
              </div>
              <div>
                <dt className="text-[10px] tracking-wide text-muted-foreground uppercase">MRR</dt>
                <dd className="mt-1 font-mono text-sm text-foreground">{row.mrr}</dd>
              </div>
              <div>
                <dt className="text-[10px] tracking-wide text-muted-foreground uppercase">Source</dt>
                <dd className="mt-1 font-mono text-sm text-foreground">{row.expectedSource}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>

      <div className="hidden overflow-hidden rounded-xl border border-border sm:block">
        <table className="w-full table-fixed text-left text-sm">
          <caption className="sr-only">
            Retrieval strategy comparison on 14 retrieval-eligible questions
          </caption>
          <thead className="bg-background/75 text-xs tracking-wide text-muted-foreground uppercase">
            <tr>
              <th scope="col" className="w-[40%] px-4 py-3 font-medium">
                Strategy
              </th>
              <th scope="col" className="px-3 py-3 text-right font-medium">
                Recall@5
              </th>
              <th scope="col" className="px-3 py-3 text-right font-medium">
                MRR
              </th>
              <th scope="col" className="px-4 py-3 text-right font-medium">
                Expected Source
              </th>
            </tr>
          </thead>
          <tbody>
            {retrievalStrategies.map((row) => (
              <tr
                key={row.strategy}
                className={`border-t border-border ${row.highlight ? "bg-primary/10" : "bg-card/40"}`}
              >
                <th
                  scope="row"
                  className={`px-4 py-4 font-semibold ${row.highlight ? "text-primary" : "text-foreground"}`}
                >
                  {row.strategy}
                </th>
                <td className="px-3 py-4 text-right font-mono text-foreground">{row.recall}</td>
                <td className="px-3 py-4 text-right font-mono text-foreground">{row.mrr}</td>
                <td className="px-4 py-4 text-right font-mono text-foreground">
                  {row.expectedSource}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default function CivicLensRagCaseStudyPage() {
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
              Back to Projects
            </Link>

            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="font-mono text-xs tracking-[0.32em] text-primary uppercase">
                  Applied AI / RAG Evaluation
                </p>
                <div className="mt-3 inline-flex rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-mono text-[11px] tracking-[0.18em] text-primary uppercase">
                  Hosted Portfolio Demo
                </div>
                <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  CivicLens RAG — NYC 311 Operations Copilot
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  Hosted hybrid RAG system for grounded NYC 311 documentation Q&A with semantic
                  and full-text retrieval, deterministic RRF, validated citations, explicit
                  abstention handling, and bounded approved analytics.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {heroPills.map((pill) => (
                    <Tag
                      key={pill}
                      className="border border-primary/15 bg-primary/10 px-3 py-1.5 text-[11px] tracking-[0.18em] text-primary uppercase"
                    >
                      {pill}
                    </Tag>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <ActionButton
                    href={liveDemoUrl}
                    label="Live Demo"
                    icon={ExternalLink}
                    variant="default"
                  />
                  <ActionButton href={repoUrl} label="GitHub Repo" icon={Github} />
                  <ActionButton href={architectureUrl} label="Architecture" icon={Blocks} />
                  <ActionButton href={evaluationUrl} label="Evaluation Report" icon={Search} />
                </div>
              </div>

              <div className="space-y-4">
              <Surface className="overflow-hidden p-0!">
                  <div className="relative aspect-[3/2] bg-black">
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      priority
                    />
                  </div>
                </Surface>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Next.js is the recruiter-facing product UI. Streamlit remains a separate
                  engineering, validation, and debugging client. CivicLens is not a live NYC
                  municipal service.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionShell
          eyebrow="Quick Scan"
          title="Project at a Glance"
          description="The product boundary, retrieval design, and measured scope in five facts."
        >
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {quickFacts.map((item) => (
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
          id="overview"
          eyebrow="Problem / Solution / Outcome"
          title="Traceable answers over operational knowledge"
          description="CivicLens makes retrieval quality and answer grounding inspectable instead of treating RAG as a black box."
        >
          <div className="grid gap-6 lg:grid-cols-3">
            <Surface>
              <h3 className="text-xl font-semibold text-foreground">Problem</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Operational documentation, runbooks, field definitions, and system guidance are
                difficult to search reliably while preserving source traceability.
              </p>
            </Surface>
            <Surface>
              <h3 className="text-xl font-semibold text-foreground">Solution</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Manifest-controlled ingestion and section-aware chunks feed PostgreSQL/pgvector,
                lexical retrieval, deterministic RRF, grounded generation, and application-owned
                citation validation.
              </p>
            </Surface>
            <Surface>
              <h3 className="text-xl font-semibold text-foreground">Outcome</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                A hosted non-production RAG application with measurable retrieval quality,
                validated citations, bounded analytics, safe-abstention behavior, and deployment
                proof.
              </p>
            </Surface>
          </div>
        </SectionShell>

        <SectionShell
          id="architecture"
          eyebrow="System Architecture"
          title="One product boundary, two deliberately separate answer paths"
          description="The browser UI delegates all AI behavior to FastAPI, where CivicLens routes to either hybrid document RAG or bounded approved analytics."
        >
          <Surface>
            <div className="flex items-center gap-3">
              <Workflow className="size-5 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Hosted product path</h3>
            </div>
            <div className="mt-6">
              <FlowList steps={productPath} />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Render FastAPI remains the AI application boundary. Hybrid RAG uses externally
              managed Neon PostgreSQL + pgvector; Next.js contains presentation and one typed API
              client, not RAG logic.
            </p>
          </Surface>

          <Surface className="mt-6">
            <div className="flex items-center gap-3">
              <Search className="size-5 text-primary" />
              <div>
                <p className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
                  Branch A
                </p>
                <h3 className="mt-1 text-xl font-semibold text-foreground">Hybrid RAG</h3>
              </div>
            </div>
            <div className="mt-6">
              <FlowList steps={ragPath} />
            </div>
          </Surface>

          <Surface className="mt-6">
            <div className="flex items-center gap-3">
              <Route className="size-5 text-primary" />
              <div>
                <p className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
                  Branch B
                </p>
                <h3 className="mt-1 text-xl font-semibold text-foreground">
                  Bounded Approved Analytics
                </h3>
              </div>
            </div>
            <div className="mt-6">
              <FlowList steps={analyticsPath} compact />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              This branch is not unrestricted text-to-SQL, an autonomous agent, or arbitrary tool
              execution. Streamlit consumes the same FastAPI contract as an engineering/debug UI.
            </p>
          </Surface>
        </SectionShell>

        <SectionShell
          id="evaluation"
          eyebrow="Measured Retrieval Performance"
          title="Hybrid search improved coverage on a small curated benchmark"
          description="The approved real-local comparison evaluates three retrieval strategies without mixing those results with the hosted runtime profile."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {evaluationMetrics.map((metric) => (
              <Surface key={metric.label} className="h-full border-primary/20 bg-primary/10">
                <p className="font-mono text-4xl font-semibold tracking-tight text-primary">
                  {metric.value}
                </p>
                <p className="mt-2 font-semibold text-foreground">{metric.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{metric.detail}</p>
              </Surface>
            ))}
          </div>

          <Surface className="mt-6">
            <div className="mb-5 rounded-xl border border-primary/20 bg-primary/10 p-4">
              <p className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
                Real-local evaluation profile — not the hosted runtime
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                24-question curated fixture; 14 retrieval-eligible questions;
                sentence-transformers/all-MiniLM-L6-v2 at 384 dimensions; PostgreSQL/pgvector;
                PostgreSQL full-text retrieval; RRF_K=60; top_k=5; optional cached cross-encoder
                reranking.
              </p>
            </div>
            <RetrievalComparison />
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Recall@5 and MRR use section-level relevance and macro averages over n=14. This is a
              small portfolio benchmark, not a production-scale or statistically significant
              result.
            </p>
          </Surface>

          <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)]">
            <Surface>
              <h3 className="text-xl font-semibold text-foreground">What the experiment showed</h3>
              <div className="mt-5">
                <BulletList items={experimentFindings} />
              </div>
            </Surface>
            <Surface className="border-primary/20 bg-primary/10">
              <ShieldCheck className="size-6 text-primary" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">Evaluation boundary</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The evaluator records retrieval configuration and denominators separately from
                routing, citations, and safe no-answer behavior. It does not use an LLM judge or
                tune retrieval to hide failed cases.
              </p>
            </Surface>
          </div>
        </SectionShell>

        <SectionShell
          id="failure-analysis"
          eyebrow="Failure Analysis"
          title="Known failure modes"
          description="The evaluation exposes the current decision boundary instead of presenting only successful examples."
        >
          <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {applicationMetrics.map((metric) => (
              <Surface key={metric.label} className="h-full">
                <p className="font-mono text-2xl font-semibold tracking-tight text-primary">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm font-semibold text-foreground">{metric.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{metric.detail}</p>
              </Surface>
            ))}
          </div>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)]">
            <Surface className="border-amber-400/20 bg-amber-400/5">
              <div className="flex items-start gap-3">
                <TriangleAlert className="mt-0.5 size-5 shrink-0 text-amber-300" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Observed failures</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Safe no-answer accuracy was 33.33% across six no-answer cases. Four questions
                    expected to abstain — q015, q021, q022, and q024 — were answered. Adversarial
                    q023 routed to approved analytics instead of document RAG and was counted as
                    unsupported.
                  </p>
                </div>
              </div>
            </Surface>
            <Surface>
              <h3 className="text-xl font-semibold text-foreground">Improvement boundary</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The next experiments should test stronger abstention thresholds, better
                unsupported-intent detection, and tighter analytics routing guards. These are
                documented directions, not completed improvements.
              </p>
            </Surface>
          </div>
        </SectionShell>

        <SectionShell
          id="grounding-safety"
          eyebrow="Controlled Outputs"
          title="Grounding safeguards and bounded decisions"
          description="Application-owned validation protects the document path, while a fixed tool registry constrains the analytics path."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <Surface>
              <div className="flex items-center gap-3">
                <ShieldCheck className="size-5 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Grounding & Citations</h3>
              </div>
              <div className="mt-5">
                <BulletList items={groundingControls} />
              </div>
            </Surface>
            <Surface>
              <div className="flex items-center gap-3">
                <Route className="size-5 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Four approved tools</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {analyticsTools.map((tool) => (
                  <Tag key={tool} className="border border-primary/15 bg-primary/10 text-primary">
                    {tool}
                  </Tag>
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Strict typed inputs resolve through an immutable allowlist and read only four
                hard-coded checked-in sample CSV files. There is no SQL selection, arbitrary file
                path, dynamic import, or unrestricted tool execution.
              </p>
            </Surface>
          </div>
        </SectionShell>

        <SectionShell
          id="technical-implementation"
          eyebrow="Technical Implementation"
          title="Applied AI components with explicit ownership boundaries"
          description="The implementation makes corpus identity, ranking behavior, grounding, and product delivery independently inspectable."
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {technicalImplementation.map((item) => {
              const Icon = item.icon

              return (
                <Surface key={item.title} className="h-full">
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl border border-primary/20 bg-primary/10 p-2.5 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Surface>
              )
            })}
          </div>

          <Surface className="mt-6 border-primary/20 bg-primary/10">
            <div className="flex items-start gap-3">
              <Workflow className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <h3 className="text-lg font-semibold text-foreground">Reproducible delivery</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Ordered migrations, rerun-safe bootstrap, Docker packaging, readiness checks,
                  isolated CI paths, and recorded deployment evidence support reproducible review.
                  Streamlit remains available as the engineering and debugging client.
                </p>
              </div>
            </div>
          </Surface>
        </SectionShell>

        <SectionShell
          id="hosted-proof"
          eyebrow="Hosted Proof"
          title="A real, deliberately non-production product path"
          description="Dated validation demonstrates the browser-to-backend workflow without claiming production availability or municipal operations."
        >
          <div className="grid gap-4 md:grid-cols-3">
            <Surface className="h-full">
              <Monitor className="size-6 text-primary" />
              <p className="mt-4 font-mono text-xs tracking-[0.2em] text-primary uppercase">Vercel</p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">Next.js Product UI</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Recruiter-facing browser experience and typed FastAPI client.
              </p>
            </Surface>
            <Surface className="h-full">
              <Server className="size-6 text-primary" />
              <p className="mt-4 font-mono text-xs tracking-[0.2em] text-primary uppercase">Render</p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">FastAPI Boundary</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Validation, orchestration, retrieval, generation, and sanitized responses.
              </p>
            </Surface>
            <Surface className="h-full">
              <Database className="size-6 text-primary" />
              <p className="mt-4 font-mono text-xs tracking-[0.2em] text-primary uppercase">Neon</p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                PostgreSQL + pgvector
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Canonical corpus state, lexical retrieval, and hosted dense-vector storage.
              </p>
            </Surface>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)]">
            <Surface>
              <h3 className="text-xl font-semibold text-foreground">Hosted validation completed</h3>
              <div className="mt-5">
                <BulletList items={hostedValidation} />
              </div>
            </Surface>
            <Surface className="border-primary/20 bg-primary/10">
              <p className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
                Hosted runtime profile
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Deterministic local-deterministic-1536 embeddings, hybrid retrieval, Neon
                PostgreSQL + pgvector, and ANSWER_PROVIDER=openai for grounded generation.
                CivicLens validates citations before the public response.
              </p>
              <a
                href={screenshotsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                Review hosted screenshots
                <ExternalLink className="size-4" />
              </a>
            </Surface>
          </div>

          <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-5">
            <p className="font-mono text-xs tracking-[0.2em] text-amber-300 uppercase">
              Non-Production Portfolio Demo
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Render Free can cold-start. The demo has no SLA, production authentication, HA, or
              live NYC 311 operational claim.
            </p>
          </div>
        </SectionShell>

        <SectionShell
          id="limitations"
          eyebrow="Honest Scope"
          title="Limitations remain explicit"
          description="The case study separates measured portfolio evidence from production and generalization claims."
        >
          <Surface>
            <BulletList items={limitations} />
          </Surface>
        </SectionShell>

        <SectionShell
          id="demonstrates"
          eyebrow="What This Demonstrates"
          title="Applied AI & Data Science signals"
          description="The project combines retrieval experimentation and failure analysis with grounded product and deployment boundaries."
        >
          <Surface>
            <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
              {demonstrates.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  <p className="text-sm font-medium leading-relaxed text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </Surface>
        </SectionShell>

        <section className="px-6 pt-2 pb-16 md:pb-20">
          <div className="mx-auto max-w-6xl">
            <Surface>
              <p className="font-mono text-xs tracking-[0.28em] text-primary uppercase">
                Explore CivicLens
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Try the hosted demo or inspect the evidence
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
                Start with the product experience, then review the source, measured retrieval
                results, architecture boundaries, and dated deployment proof.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ActionButton
                  href={liveDemoUrl}
                  label="Live Demo"
                  icon={ExternalLink}
                  variant="default"
                />
                <ActionButton href={repoUrl} label="GitHub Repo" icon={Github} />
                <ActionButton href={evaluationUrl} label="Evaluation Report" icon={Search} />
                <ActionButton href={architectureUrl} label="Architecture" icon={Blocks} />
                <ActionButton href={deploymentUrl} label="Deployment Proof" icon={Server} />
              </div>
            </Surface>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
