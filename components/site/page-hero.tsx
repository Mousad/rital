import { cn } from "@/lib/utils"

export function PageHero({
  eyebrow,
  title,
  description,
  className,
  children,
}: {
  eyebrow?: string
  title: string
  description?: string
  className?: string
  children?: React.ReactNode
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-primary text-primary-foreground",
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-pattern-grid opacity-[0.12]"
      />
      <div
        aria-hidden
        className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-green-light/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24 text-center">
        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold text-accent ring-1 ring-accent/40">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {eyebrow}
          </span>
        )}
        <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-tight text-balance">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg text-primary-foreground/80 leading-relaxed text-pretty">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  )
}
