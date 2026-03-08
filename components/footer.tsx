export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-muted-foreground">
          {"\u00A9 2026 Rihua Van Steenburgh"}
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          Built with Next.js & Tailwind
        </p>
      </div>
    </footer>
  )
}
