import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  id: string
  title: string
  children: ReactNode
  className?: string
  containerClassName?: string
  showHeader?: boolean
}

export function Section({
  id,
  title,
  children,
  className,
  containerClassName,
  showHeader = true,
}: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-20 px-6 py-20", className)}>
      <div className={cn("mx-auto max-w-6xl", containerClassName)}>
        {showHeader && (
          <>
              <h2 className="mb-2 font-mono text-base md:text-lg tracking-widest text-primary uppercase">

              {title}
            </h2>
            <div className="mb-8 h-px bg-border" />
          </>
        )}
        {children}
      </div>
    </section>
  )
}
