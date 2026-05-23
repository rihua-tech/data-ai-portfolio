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
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { Tag } from "@/components/Tag"
import { Button } from "@/components/ui/button"

const caseStudyUrl = "/projects/civiclens-rag-nyc311"
const repoUrl = "https://github.com/rihua-tech/civiclens-rag-nyc311"
const architectureUrl = `${repoUrl}#hybrid-rag-architecture`
const screenshotsUrl = `${repoUrl}#screenshots`
const imageSrc = "/projects/civiclens-rag-nyc311.jpg"
const imageAlt =
  "CivicLens RAG architecture showing curated docs, chunking, PostgreSQL pgvector retrieval, cited answers, sample analytics, and Streamlit UI."

const heroPills = [
  "Local Hybrid RAG",
  "pgvector",
  "Cited Answers",
  "Streamlit UI",
  "pytest Evaluation",
]

const quickFacts = [
  { label: "Project type", value: "AI Data Engineering / Hybrid RAG" },
  { label: "Status", value: "Completed Local Prototype" },
  { label: "Retrieval", value: "PostgreSQL + pgvector" },
  { label: "Interface", value: "Streamlit UI" },
  { label: "Evaluation", value: "pytest + 18-question set" },
]

const architectureSteps = [
  "Curated NYC 311 Docs + Runbooks",
  "Local Document Ingestion",
  "Text Chunking",
  "Local Embeddings",
  "PostgreSQL + pgvector",
  "Vector Retrieval",
  "Cited Answers",
  "Streamlit UI",
]

const analyticsSteps = [
  "Sample CSV Analytics",
  "Analytics Router",
  "Summary Answer",
  "Streamlit UI",
]

const technicalImplementation = [
  {
    title: "Document Ingestion",
    icon: FileSearch,
    description:
      "Python ingestion loads curated NYC 311 documentation and runbooks into a local processing flow.",
  },
  {
    title: "Chunking + Embeddings",
    icon: Layers3,
    description:
      "Source text is split into chunks and embedded locally by default to keep the prototype reproducible.",
  },
  {
    title: "PostgreSQL + pgvector Retrieval",
    icon: Database,
    description:
      "PostgreSQL with pgvector stores embeddings and supports vector-similarity retrieval for relevant context.",
  },
  {
    title: "Grounded Answers",
    icon: Search,
    description:
      "The answer flow uses retrieved context only, returns citations, and handles no-answer cases explicitly.",
  },
  {
    title: "Streamlit UI",
    icon: Monitor,
    description:
      "A local browser UI lets reviewers ask documentation questions and inspect cited supporting context.",
  },
  {
    title: "Sample Analytics",
    icon: Route,
    description:
      "Predefined CSV summaries support sample analytics questions through a lightweight routing path.",
  },
]

const qualityChecks = [
  "pytest coverage for ingestion, retrieval, routing, and answer behavior",
  "GitHub Actions CI for repeatable local checks",
  "18-question evaluation set for reviewer-facing validation",
  "Checks for retrieval relevance, citation behavior, analytics routing, and no-answer handling",
]

const limitations = [
  "Local project only; it is not deployed.",
  "Not connected to live NYC 311 data.",
  "Not production text-to-SQL.",
  "OpenAI support is optional and disabled by default.",
  "Evaluation is lightweight and not a production benchmark.",
]

const demonstrates = [
  "Hybrid RAG architecture",
  "PostgreSQL/pgvector vector retrieval",
  "Source-grounded answers with citations",
  "Local AI data application design",
  "Evaluation-minded AI engineering",
  "Documentation-first data engineering workflow",
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
    "Case study for a completed local Hybrid RAG prototype using PostgreSQL/pgvector retrieval, cited NYC 311 documentation answers, sample analytics, and Streamlit.",
  alternates: {
    canonical: caseStudyUrl,
  },
  openGraph: {
    title: "CivicLens RAG — NYC 311 Operations Copilot",
    description:
      "Local AI Data Engineering / Hybrid RAG prototype for grounded NYC 311 documentation Q&A with citations and sample analytics.",
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
      "Completed local Hybrid RAG prototype with pgvector retrieval, cited answers, and Streamlit UI.",
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

function FlowList({ steps }: { steps: string[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <div key={step} className="relative rounded-xl border border-border bg-background/55 p-4">
          {index < steps.length - 1 && (
            <div className="pointer-events-none absolute top-1/2 -right-3 hidden h-px w-3 bg-primary/35 lg:block" />
          )}
          <div className="flex items-center gap-3">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-primary/10 text-xs font-semibold text-primary">
              {index + 1}
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
                  AI Data Engineering / Hybrid RAG
                </p>
                <div className="mt-3 inline-flex rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-mono text-[11px] tracking-[0.18em] text-primary uppercase">
                  Completed Local Prototype
                </div>
                <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  CivicLens RAG — NYC 311 Operations Copilot
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  Local Hybrid RAG prototype for grounded NYC 311 documentation Q&A with
                  citations, PostgreSQL/pgvector retrieval, sample analytics, and a Streamlit UI.
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
                  <ActionButton href={repoUrl} label="GitHub Repo" icon={Github} variant="default" />
                  <ActionButton href={architectureUrl} label="Architecture" icon={Blocks} />
                  <ActionButton href={screenshotsUrl} label="Screenshots" icon={ExternalLink} />
                </div>
              </div>

              <div className="space-y-4">
                <Surface className="overflow-hidden p-0">
                  <div className="relative aspect-[16/11] bg-black">
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/35 via-transparent to-transparent" />
                  </div>
                </Surface>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Scope is intentionally local: curated docs, local retrieval, cited answers,
                  sample analytics summaries, and lightweight evaluation evidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionShell
          eyebrow="Quick Scan"
          title="Project at a Glance"
          description="A concise view of what the prototype is, how it is reviewed, and what it proves."
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
          eyebrow="Overview"
          title="Cited answers over documentation and runbooks"
          description="CivicLens RAG extends the NYC 311 lakehouse concept with a local AI data application for documentation Q&A and sample analytics answers."
        >
          <div className="grid gap-6 lg:grid-cols-3">
            <Surface>
              <h3 className="text-xl font-semibold text-foreground">Problem</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Project docs, runbooks, data dictionaries, and analytics notes are often spread
                across files. That makes it hard to answer operational questions quickly while
                showing the source behind each answer.
              </p>
            </Surface>
            <Surface>
              <h3 className="text-xl font-semibold text-foreground">Solution</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                CivicLens turns curated NYC 311 docs and runbooks into searchable chunks, stores
                embeddings in PostgreSQL/pgvector, retrieves relevant context, and returns cited
                answers in Streamlit.
              </p>
            </Surface>
            <Surface>
              <h3 className="text-xl font-semibold text-foreground">Outcome</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                The prototype shows a complete local RAG workflow: ingestion, chunking, retrieval,
                citations, sample analytics routing, tests, CI, and an 18-question evaluation set.
              </p>
            </Surface>
          </div>
        </SectionShell>

        <SectionShell
          id="architecture"
          eyebrow="Architecture"
          title="Local Hybrid RAG workflow with a sample analytics branch"
          description="The design separates documentation retrieval from predefined sample analytics summaries, then brings both paths into the local Streamlit interface."
        >
          <Surface>
            <div className="flex items-center gap-3">
              <Workflow className="size-5 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Documentation Q&A path</h3>
            </div>
            <div className="mt-6">
              <FlowList steps={architectureSteps} />
            </div>
          </Surface>

          <Surface className="mt-6">
            <div className="flex items-center gap-3">
              <Route className="size-5 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Secondary analytics path</h3>
            </div>
            <div className="mt-6">
              <FlowList steps={analyticsSteps} />
            </div>
          </Surface>

          <Surface className="mt-6 border-primary/20 bg-primary/10">
            <p className="text-sm leading-relaxed text-muted-foreground">
              The analytics branch uses predefined sample CSV summaries, not production
              text-to-SQL or live NYC 311 data.
            </p>
          </Surface>
        </SectionShell>

        <SectionShell
          id="technical-implementation"
          eyebrow="Technical Implementation"
          title="Local RAG system pieces"
          description="The implementation keeps the system reviewer-friendly and reproducible while demonstrating practical AI data engineering patterns."
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
              <Database className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Dockerized PostgreSQL/pgvector setup
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  The database layer is designed for local review with PostgreSQL and pgvector in
                  Docker, so retrieval behavior can be tested without relying on a hosted service.
                </p>
              </div>
            </div>
          </Surface>
        </SectionShell>

        <SectionShell
          id="evaluation"
          eyebrow="Evaluation and Quality"
          title="Focused checks for trustworthy prototype behavior"
          description="The project includes focused tests and an evaluation set to make RAG behavior visible rather than implied."
        >
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.55fr)]">
            <Surface>
              <BulletList items={qualityChecks} />
            </Surface>
            <Surface className="border-primary/20 bg-primary/10">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Reviewer evidence</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    The checks make local prototype behavior easier to inspect: retrieval
                    relevance, citations, analytics routing, and no-answer handling are tested
                    directly.
                  </p>
                </div>
              </div>
            </Surface>
          </div>
        </SectionShell>

        <SectionShell
          id="limitations"
          eyebrow="Honest Scope"
          title="Limitations are explicit"
          description="The case study separates prototype evidence from production claims."
        >
          <Surface>
            <BulletList items={limitations} />
          </Surface>
        </SectionShell>

        <SectionShell
          id="demonstrates"
          eyebrow="What This Demonstrates"
          title="Recruiter-relevant AI data engineering signals"
          description="The project shows how data engineering assets can become a grounded local AI application without overstating deployment scope."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {demonstrates.map((item) => (
              <Surface key={item} className="h-full">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  <p className="text-sm font-medium leading-relaxed text-foreground">{item}</p>
                </div>
              </Surface>
            ))}
          </div>
        </SectionShell>

        <section className="px-6 pt-2 pb-16 md:pb-20">
          <div className="mx-auto max-w-6xl">
            <Surface>
              <p className="font-mono text-xs tracking-[0.28em] text-primary uppercase">
                Explore the Project
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Review the repo, architecture, and screenshots
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
                Start with the repository README, then review the architecture notes and screenshot
                evidence. No live demo link is provided because this is scoped as a completed local
                prototype.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ActionButton href={repoUrl} label="GitHub Repo" icon={Github} variant="default" />
                <ActionButton href={architectureUrl} label="Architecture" icon={Blocks} />
                <ActionButton href={screenshotsUrl} label="Screenshots" icon={ExternalLink} />
              </div>
            </Surface>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
