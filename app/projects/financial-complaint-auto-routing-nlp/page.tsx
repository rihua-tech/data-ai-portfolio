import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Blocks,
  CheckCircle2,
  FileText,
  Github,
  Scale,
  UserCheck,
  type LucideIcon,
} from "lucide-react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Tag } from "@/components/Tag";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const caseStudyUrl = "/projects/financial-complaint-auto-routing-nlp";
const repoUrl =
  "https://github.com/rihua-tech/financial-complaint-auto-routing-nlp";
const reportUrl = `${repoUrl}/blob/main/Financial_Complaint_Auto_Routing_NLP_Project_Report.pdf`;
const architectureUrl = `${repoUrl}#architecture-overview`;
const sharedEvaluationUrl = `${repoUrl}/blob/main/reports/v1_v2_2024_comparison.md`;
const retrospectiveEvaluationUrl = `${repoUrl}/blob/main/reports/v2_2025_retrospective_results.md`;
const imageSrc =
  "/projects/financial-complaint-nlp-routing-architecture-v3.jpg";
const imageAlt =
  "Leakage-safe complaint-routing study comparing TF-IDF and DistilBERT on a shared 2024 benchmark, with model-specific routing, human review, and a 2025 retrospective cohort.";

const technologies = [
  "Python",
  "scikit-learn",
  "TF-IDF",
  "Linear SVM",
  "PyTorch",
  "Transformers",
  "DistilBERT",
  "Human-in-the-Loop",
  "GitHub Actions",
];

const dataDesignSteps = [
  {
    label: "Audit",
    value:
      "Duplicate normalized complaint text exposed leakage in the original row-level split.",
  },
  {
    label: "Remove leakage",
    value:
      "Conflicting-label text groups and repeated same-label extras were removed.",
  },
  {
    label: "Split safely",
    value:
      "Group-aware 2024 development and final-test partitions preserved text-group boundaries.",
  },
  {
    label: "Verify",
    value:
      "Normalized-text overlap between the 2024 development and final-test partitions was zero.",
  },
  {
    label: "Hold separate",
    value:
      "Kept outside 2024 development; after V1 temporal evaluation, V2 used it only for the precommitted retrospective comparison.",
  },
];

const metrics = [
  {
    name: "Macro F1",
    v1: "0.7671",
    v2: "0.7949",
    winner: "v2",
    note: "V2 +0.0278",
  },
  {
    name: "Accuracy",
    v1: "87.12%",
    v2: "88.82%",
    winner: "v2",
    note: "V2 +1.70 pts",
  },
  {
    name: "Coverage",
    v1: "77.05%",
    v2: "81.77%",
    winner: "v2",
    note: "V2 +4.72 pts",
  },
  {
    name: "Routed Accuracy",
    v1: "95.03%",
    v2: "94.76%",
    winner: "v1",
    note: "V1 +0.27 pts",
  },
  {
    name: "Misroute Rate",
    v1: "4.97%",
    v2: "5.24%",
    winner: "v1",
    note: "V1 lower by 0.27 pts",
  },
];

const retrospectiveMetrics = [
  { name: "Macro F1", v1: "0.7527", v2: "0.7620", winner: "v2" },
  { name: "Coverage", v1: "72.51%", v2: "75.71%", winner: "v2" },
  { name: "Routed Accuracy", v1: "92.03%", v2: "91.74%", winner: "v1" },
  { name: "Misroute Rate", v1: "7.97%", v2: "8.26%", winner: "v1" },
];

const demonstrates = [
  "Leakage-safe evaluation",
  "Group-aware validation",
  "Classical ML vs. Transformer comparison",
  "Temporal validation",
  "Human-in-the-loop decision policies",
  "Error and category-risk analysis",
  "Reproducible model evaluation",
  "Performance and complexity trade-offs",
];

const limitations = [
  "The 2025 V2 comparison is retrospective; promotion evidence requires evaluation on a new untouched period.",
  "This is an offline decision-support study with no production API, operational queue, monitoring system, or deployment.",
  "Linear SVM and DistilBERT outputs are model-specific signals, not calibrated values on a shared probability scale.",
  "Routing thresholds are development-selected assumptions; no stakeholder-approved limits, realized savings, workload reduction, or operational-impact claims are made.",
];

export const metadata: Metadata = {
  title: "Financial Complaint Auto-Routing with NLP | Rihua V.",
  description:
    "Case study of a leakage-safe CFPB complaint-routing project comparing a TF-IDF and Linear SVM benchmark with a frozen DistilBERT challenger and selective human-in-the-loop routing.",
  alternates: { canonical: caseStudyUrl },
  openGraph: {
    title: "Financial Complaint Auto-Routing with NLP",
    description:
      "Leakage-safe champion-challenger NLP study with model-specific selective routing and human review.",
    url: caseStudyUrl,
    images: [{ url: imageSrc, alt: imageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Financial Complaint Auto-Routing with NLP",
    description:
      "TF-IDF and Linear SVM temporal benchmark compared with a frozen DistilBERT challenger.",
    images: [imageSrc],
  },
};

function Surface({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card/80 p-5 transition-colors hover:border-primary/25",
        className,
      )}
    >
      {children}
    </div>
  );
}

function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 px-6 py-10 md:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-7 max-w-3xl">
          <p className="font-mono text-xs tracking-[0.28em] text-primary uppercase">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

function ActionLink({
  href,
  label,
  icon: Icon,
  primary = false,
}: {
  href: string;
  label: string;
  icon: LucideIcon;
  primary?: boolean;
}) {
  const external = href.startsWith("http");
  const content = (
    <>
      <Icon className="size-4" />
      {label}
    </>
  );

  return (
    <Button asChild size="lg" variant={primary ? "default" : "outline"}>
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        <Link href={href}>{content}</Link>
      )}
    </Button>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
        >
          <CheckCircle2
            className="mt-0.5 size-4 shrink-0 text-primary"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function FinancialComplaintNlpCaseStudyPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[30rem] bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.18),transparent_55%)]" />

        <section className="relative px-6 pt-8 pb-12 md:pt-12 md:pb-16">
          <div className="mx-auto max-w-6xl">
            <Link
              href="/#projects"
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to Projects
            </Link>

            <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
              <div>
                <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
                  NLP Classification / Selective Routing
                </p>
                <div className="mt-3 inline-flex rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-mono text-[11px] tracking-[0.18em] text-primary uppercase">
                  Completed V1–V2 Study
                </div>
                <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  Financial Complaint Auto-Routing with NLP
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  Leakage-safe eight-class CFPB complaint-routing study
                  comparing a locked TF-IDF + Linear SVM benchmark with a frozen
                  DistilBERT challenger, model-specific selective routing, and
                  retrospective 2025 comparison.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ActionLink
                    href={repoUrl}
                    label="View GitHub Repo"
                    icon={Github}
                    primary
                  />
                  <ActionLink
                    href={reportUrl}
                    label="View Full Project Report"
                    icon={FileText}
                  />
                </div>
              </div>

              <Surface className="overflow-hidden p-0!">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 48vw"
                    priority
                  />
                </div>
              </Surface>
            </div>
          </div>
        </section>

        <SectionShell
          id="summary"
          eyebrow="Executive Summary"
          title="Decision support with an intentional review path"
        >
          <div className="grid gap-6 lg:grid-cols-3">
            <Surface>
              <h3 className="text-lg font-semibold text-foreground">Problem</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                CFPB complaint narratives are unstructured and must be assigned
                consistently to one of eight product categories before entering
                the appropriate workflow.
              </p>
            </Surface>
            <Surface>
              <h3 className="text-lg font-semibold text-foreground">
                Approach
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Two frozen models were evaluated with separately selected
                policies that recommend either an eligible Auto-Route
                recommendation or Human Review.
              </p>
            </Surface>
            <Surface className="border-primary/20 bg-primary/10">
              <h3 className="text-lg font-semibold text-foreground">Scope</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Offline decision-support study with selective routing and Human
                Review; not a production deployment.
              </p>
            </Surface>
          </div>
        </SectionShell>

        <SectionShell
          id="business-problem"
          eyebrow="Business Problem"
          title="Route clear cases without forcing uncertain ones"
          description="Routing mistakes can send a complaint into the wrong operational workflow. The project therefore evaluates selective routing rather than treating every model output as safe to automate."
        >
          <Surface>
            <BulletList
              items={[
                "Public CFPB complaint narratives contain free-form, unstructured text.",
                "Each narrative is classified into one of eight product categories.",
                "Weak, ambiguous, tied, invalid, or otherwise unusable model signals remain eligible for Human Review.",
              ]}
            />
          </Surface>
        </SectionShell>

        <SectionShell
          id="data-design"
          eyebrow="Leakage-Safe Data Design"
          title="Correct the split before comparing models"
          description="The strongest methodological correction was removing duplicate-text leakage and rebuilding the 2024 evaluation boundary around normalized-text groups."
        >
          <div className="mb-6 grid items-center gap-4 rounded-2xl border border-primary/20 bg-primary/10 p-5 sm:grid-cols-[1fr_auto_1fr] md:p-6">
            <div>
              <p className="text-3xl font-bold text-foreground">39.39%</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                3,876 of 9,840 original test rows shared normalized text with
                training
              </p>
            </div>
            <ArrowRight
              className="size-5 rotate-90 text-primary sm:rotate-0"
              aria-hidden="true"
            />
            <div>
              <p className="text-3xl font-bold text-primary">0 overlap</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                between development and final-test normalized-text groups after
                redesign
              </p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {dataDesignSteps.map((step, index) => (
              <Surface key={step.label} className="h-full">
                <div className="flex size-8 items-center justify-center rounded-full border border-primary/25 bg-primary/10 text-sm font-semibold text-primary">
                  {index + 1}
                </div>
                <h3 className="mt-4 font-semibold text-foreground">
                  {step.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.value}
                </p>
              </Surface>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="models"
          eyebrow="Benchmark vs. Challenger"
          title="Parallel models, separately frozen policies"
          description="V1 and V2 are compared on matched evidence; they are not presented as a sequential replacement pipeline."
        >
          <div className="grid gap-6 md:grid-cols-2">
            <Surface className="h-full">
              <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
                Temporal Benchmark
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-foreground">
                V1: TF-IDF + Linear SVM
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Classical NLP benchmark selected through group-aware development
                evaluation, locked before final scoring, and retained as the
                temporally validated reference model.
              </p>
            </Surface>
            <Surface className="h-full">
              <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
                Frozen Challenger
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-foreground">
                V2: DistilBERT
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Transformer challenger trained using the locked 2024 development
                data and evaluated on the shared benchmark. It improved
                classification metrics but was not promoted beyond frozen
                challenger status.
              </p>
            </Surface>
          </div>
        </SectionShell>

        <SectionShell
          id="results"
          eyebrow="Key Results"
          title="Shared 2024 benchmark"
          description="Version 2 improved classification and coverage, while Version 1 retained slightly better routed accuracy and misroute rate. The trade-off did not establish a clear promotion case."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {metrics.map((metric) => (
              <Surface key={metric.name} className="h-full">
                <h3 className="text-sm font-semibold text-foreground">
                  {metric.name}
                </h3>
                <dl className="mt-4 space-y-2">
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="font-mono text-xs text-muted-foreground">
                      V1
                    </dt>
                    <dd
                      className={cn(
                        "text-xl font-semibold",
                        metric.winner === "v1"
                          ? "text-primary"
                          : "text-foreground",
                      )}
                    >
                      {metric.v1}
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="font-mono text-xs text-muted-foreground">
                      V2
                    </dt>
                    <dd
                      className={cn(
                        "text-xl font-semibold",
                        metric.winner === "v2"
                          ? "text-primary"
                          : "text-foreground",
                      )}
                    >
                      {metric.v2}
                    </dd>
                  </div>
                </dl>
                <p className="mt-4 border-t border-border pt-3 text-xs leading-relaxed text-muted-foreground">
                  {metric.note}
                </p>
              </Surface>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="retrospective"
          eyebrow="Temporal Evidence"
          title="2025 Retrospective Comparison"
          description="A precommitted retrospective comparison on the leakage-resistant primary cohort. This was not a new untouched Version 2 holdout."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <Surface className="h-full border-primary/20 bg-primary/10">
              <p className="font-mono text-xs tracking-[0.22em] text-primary uppercase">
                Primary cohort
              </p>
              <p className="mt-3 text-4xl font-bold text-foreground">30,156</p>
              <p className="mt-2 text-sm text-muted-foreground">
                leakage-resistant rows
              </p>
            </Surface>
            {retrospectiveMetrics.map((metric) => (
              <Surface key={metric.name} className="h-full">
                <h3 className="text-sm font-semibold text-foreground">
                  {metric.name}
                </h3>
                <dl className="mt-4 space-y-2">
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="font-mono text-xs text-muted-foreground">
                      V1
                    </dt>
                    <dd
                      className={cn(
                        "text-xl font-semibold",
                        metric.winner === "v1"
                          ? "text-primary"
                          : "text-foreground",
                      )}
                    >
                      {metric.v1}
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="font-mono text-xs text-muted-foreground">
                      V2
                    </dt>
                    <dd
                      className={cn(
                        "text-xl font-semibold",
                        metric.winner === "v2"
                          ? "text-primary"
                          : "text-foreground",
                      )}
                    >
                      {metric.v2}
                    </dd>
                  </div>
                </dl>
              </Surface>
            ))}
          </div>
          <Surface className="mt-4">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Both models and policies remained frozen. V2 again improved
              aggregate classification and coverage, but did not improve routed
              risk on the headline cohort. Both models also weakened relative to
              their shared 2024 benchmark.
            </p>
          </Surface>
        </SectionShell>

        <SectionShell
          id="failure-analysis"
          eyebrow="Failure Analysis"
          title="Where better classification did not mean safer routing"
          description="Category-level evidence explains why aggregate gains were not enough to promote the challenger."
        >
          <div className="grid gap-6 md:grid-cols-3">
            <Surface className="h-full">
              <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
                Debt Collection
              </p>
              <p className="mt-4 text-2xl font-semibold text-foreground">
                23.56% → 29.84%
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Primary-cohort misroute rate increased from V1 to V2.
              </p>
            </Surface>
            <Surface className="h-full">
              <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
                Student Loan
              </p>
              <p className="mt-4 text-2xl font-semibold text-foreground">
                16.67% → 32.08%
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                V2 nearly doubled the primary misroute rate, and its primary F1
                was 0.0257 below V1.
              </p>
            </Surface>
            <Surface className="h-full border-primary/20 bg-primary/10">
              <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
                Risk–Coverage Trade-off
              </p>
              <p className="mt-4 text-lg font-semibold text-foreground">
                More routes, uneven risk
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                V2 routed more complaints, but broader coverage did not
                consistently reduce routed error across categories.
              </p>
            </Surface>
          </div>
        </SectionShell>

        <SectionShell
          id="model-tradeoffs"
          eyebrow="Model Trade-offs"
          title="Better benchmark scores came with higher complexity"
          description="Model selection considered classification, selective-routing risk, and practical complexity together."
        >
          <div className="grid gap-6 md:grid-cols-2">
            <Surface className="h-full border-primary/20 bg-primary/10">
              <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
                V1 — Current Benchmark
              </p>
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <h3 className="text-xl font-semibold text-foreground">
                  TF-IDF + Linear SVM
                </h3>
                <span className="font-mono text-sm text-primary">3.23 MiB</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Smaller CPU-only stack, substantially faster on the measured
                local notebook benchmark, and slightly lower routed risk under
                the locked 2024 policy.
              </p>
            </Surface>
            <Surface className="h-full">
              <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
                V2 — Frozen Challenger
              </p>
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <h3 className="text-xl font-semibold text-foreground">
                  DistilBERT
                </h3>
                <span className="font-mono text-sm text-primary">
                  256.35 MiB
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                About 79× larger, with higher shared-benchmark Macro F1 and
                coverage but a slower measured local inference path and greater
                dependency, monitoring, privacy, and governance complexity.
              </p>
            </Surface>
          </div>
        </SectionShell>

        <SectionShell
          id="routing"
          eyebrow="Selective Routing"
          title="Auto-Route recommendation or Human Review"
          description="Each model uses its own development-selected routing policy. Eligible cases receive an Auto-Route recommendation, while uncertain or unusable signals remain in Human Review."
        >
          <p className="mb-5 text-sm text-muted-foreground">
            Model scores are not treated as one shared probability scale.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <Surface className="h-full">
              <div className="flex items-center gap-3">
                <ArrowRight
                  className="size-5 text-primary"
                  aria-hidden="true"
                />
                <h3 className="text-xl font-semibold text-foreground">
                  Auto-Route
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                When a model-specific policy passes both score and margin
                criteria, the case is eligible for an Auto-Route recommendation
                to the predicted product workflow.
              </p>
            </Surface>
            <Surface className="h-full border-primary/20 bg-primary/10">
              <div className="flex items-center gap-3">
                <UserCheck className="size-5 text-primary" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-foreground">
                  Human Review
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Uncertain, tied, invalid, non-finite, or otherwise unusable
                signals remain with a reviewer. This is an intentional oversight
                outcome, not a model failure state.
              </p>
            </Surface>
          </div>
        </SectionShell>

        <SectionShell
          id="decision"
          eyebrow="Final Decision"
          title="Retain V1 as the benchmark"
        >
          <div className="rounded-3xl border border-primary/25 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.16),transparent_48%),linear-gradient(180deg,rgba(14,18,29,0.9),rgba(14,18,29,0.98))] p-6 md:p-8">
            <div className="flex items-start gap-4">
              <Scale
                className="mt-1 size-6 shrink-0 text-primary"
                aria-hidden="true"
              />
              <p className="max-w-4xl text-lg leading-relaxed text-foreground/90">
                Retain Version 1 as the temporally validated benchmark. Version
                2 improved shared-benchmark classification performance and
                coverage, but routed-risk improvement was not established,
                complexity increased, and retrospective 2025 evidence remained
                mixed. Version 2 remains a frozen challenger pending evaluation
                on a new untouched period.
              </p>
            </div>
          </div>
        </SectionShell>

        <SectionShell
          id="limitations"
          eyebrow="Evaluation Boundaries"
          title="Limitations and Next Validation"
          description="A concise boundary between offline evidence and future validation work."
        >
          <Surface>
            <BulletList items={limitations} />
          </Surface>
        </SectionShell>

        <SectionShell
          id="demonstrates"
          eyebrow="What This Demonstrates"
          title="Applied Data Science & NLP signals"
          description="The study connects careful evaluation design with transparent model and decision-policy trade-offs."
        >
          <Surface>
            <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
              {demonstrates.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <p className="text-sm font-medium leading-relaxed text-foreground">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Surface>
        </SectionShell>

        <SectionShell
          id="technology"
          eyebrow="Technology and Methods"
          title="Implementation stack"
        >
          <Surface>
            <div className="flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <Tag key={technology}>{technology}</Tag>
              ))}
            </div>
          </Surface>
        </SectionShell>

        <SectionShell
          id="evidence"
          eyebrow="Evidence and Next Actions"
          title="Inspect the project evidence"
          description="Review the source, methodology, matched benchmark, and retrospective evaluation directly."
        >
          <Surface className="border-primary/20 bg-primary/10">
            <div className="flex flex-wrap gap-3">
              <ActionLink
                href={repoUrl}
                label="View GitHub Repository"
                icon={Github}
                primary
              />
              <ActionLink
                href={reportUrl}
                label="View Full Project Report"
                icon={FileText}
              />
              <ActionLink
                href={architectureUrl}
                label="View Architecture Documentation"
                icon={Blocks}
              />
              <ActionLink
                href={sharedEvaluationUrl}
                label="Shared 2024 Evaluation"
                icon={FileText}
              />
              <ActionLink
                href={retrospectiveEvaluationUrl}
                label="2025 Retrospective Evaluation"
                icon={FileText}
              />
              <ActionLink
                href="/#projects"
                label="Back to Portfolio Projects"
                icon={ArrowLeft}
              />
            </div>
          </Surface>
        </SectionShell>
      </main>
      <Footer />
    </>
  );
}
