import type { ComponentPropsWithoutRef } from "react"
import { cn } from "@/lib/utils"

type TagProps = ComponentPropsWithoutRef<"span">

export function Tag({ className, children, ...props }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md bg-secondary px-2 py-1 font-mono text-xs text-secondary-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
