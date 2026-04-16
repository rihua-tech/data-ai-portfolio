"use client"

import { useEffect, useRef, useState } from "react"
import { Github, FileText, Mail, Linkedin, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"

const RESUME_URL = "/resume.pdf"
const LINKEDIN_URL = "https://www.linkedin.com/in/rihua/"
const EMAIL_ADDRESS = "rihuavan@gmail.com"
const EMAIL_SUBJECT = "Data Engineer Opportunity"
const EMAIL_HREF = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`

function copyWithExecCommand(text: string) {
  const tempTextArea = document.createElement("textarea")
  tempTextArea.value = text
  tempTextArea.setAttribute("readonly", "")
  tempTextArea.style.position = "absolute"
  tempTextArea.style.left = "-9999px"
  document.body.appendChild(tempTextArea)
  tempTextArea.select()
  const didCopy = document.execCommand("copy")
  document.body.removeChild(tempTextArea)
  return didCopy
}

export function Hero() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle")
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current)
      }
    }
  }, [])

  const scheduleCopyStateReset = () => {
    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current)
    }
    resetTimerRef.current = setTimeout(() => {
      setCopyState("idle")
    }, 1500)
  }

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard?.writeText && window.isSecureContext) {
        await navigator.clipboard.writeText(EMAIL_ADDRESS)
      } else if (!copyWithExecCommand(EMAIL_ADDRESS)) {
        throw new Error("Copy command failed")
      }

      setCopyState("copied")
    } catch {
      setCopyState("failed")
    } finally {
      scheduleCopyStateReset()
    }
  }
  const copyTooltip =
    copyState === "copied"
      ? "Copied!"
      : copyState === "failed"
        ? "Copy failed"
        : "Copy email"

  return (
  
      <section className="relative flex items-center justify-center px-6 pt-10 pb-12 sm:pt-12 sm:pb-14 xl:pt-8 xl:pb-8">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-5xl text-center">
        <div className="mb-5 flex justify-center">
          <p className="inline-flex items-center rounded-full border border-border bg-background/70 px-4 py-1.5 font-mono text-xs font-medium tracking-[0.28em] text-primary uppercase shadow-sm backdrop-blur-sm">
            Data Engineering Portfolio
          </p>
        </div>

        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-[2.75rem] xl:text-[3rem]">
          Data Engineer building reliable pipelines{" "}
          <span className="lg:block">and analytics-ready datasets</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-lg">
          Designing scalable data platforms with Python, SQL, Airflow, dbt, Azure,
          AWS, Databricks, and modern cloud warehouses.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 md:flex-nowrap">
          <Button asChild variant="outline" size="lg">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="size-4" />
              LinkedIn
            </a>
          </Button>
          <Button asChild size="lg">
            <a
              href="https://github.com/rihua-tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="size-4" />
              GitHub
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className="size-4" />
              Resume
            </a>
          </Button>
          <div className="flex items-center gap-2">
            <Button asChild variant="outline" size="lg">
              <a
                href={EMAIL_HREF}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="size-4" />
                Email me
              </a>
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="h-9 gap-1 px-2"
              onClick={handleCopyEmail}
              aria-label="Copy email"
              title={copyTooltip}
            >
              <Copy className="size-4" />
              <span className="text-xs">Copy email</span>
            </Button>
            {copyState !== "idle" ? (
              <span className="text-xs text-muted-foreground" aria-live="polite">
                {copyState === "copied" ? "Copied!" : "Copy failed"}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
