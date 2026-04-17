import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

export type TimelineStep = {
  title: string
  description?: string
}

export function Timeline({
  steps,
  className,
}: {
  steps: TimelineStep[]
  className?: string
}) {
  return (
    <ol className={cn("relative", className)}>
      {/* Vertical line (mobile) - on the right for RTL */}
      <span
        aria-hidden
        className="md:hidden absolute top-0 bottom-0 right-[19px] w-px bg-border"
      />
      <div className="flex flex-col md:flex-row md:items-stretch gap-6 md:gap-4">
        {steps.map((step, i) => (
          <li
            key={i}
            className="relative md:flex-1 flex md:flex-col items-start md:items-center gap-4 md:gap-3"
          >
            {/* Desktop connector */}
            {i < steps.length - 1 && (
              <span
                aria-hidden
                className="hidden md:block absolute top-5 right-[calc(50%+24px)] left-[calc(-50%+24px)] h-0.5 bg-border"
              />
            )}

            <span
              className={cn(
                "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold shadow-sm ring-4 ring-background",
                "bg-primary text-primary-foreground",
              )}
            >
              {i + 1}
              <span className="sr-only">الخطوة {i + 1}</span>
            </span>

            <div className="md:text-center">
              <h4 className="font-semibold text-foreground leading-tight">
                {step.title}
              </h4>
              {step.description && (
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed md:max-w-[180px]">
                  {step.description}
                </p>
              )}
            </div>
          </li>
        ))}
      </div>
    </ol>
  )
}

export function VerticalTimeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <ol className="relative">
      <span
        aria-hidden
        className="absolute top-2 bottom-2 right-[19px] w-px bg-border"
      />
      <div className="flex flex-col gap-5">
        {steps.map((step, i) => (
          <li key={i} className="relative flex items-start gap-4 pr-0">
            <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-sm ring-4 ring-background">
              {i + 1}
            </span>
            <div className="pt-1.5">
              <h4 className="font-semibold text-foreground leading-tight flex items-center gap-2">
                {step.title}
                {i === steps.length - 1 && (
                  <Check className="h-4 w-4 text-brand-green-light" />
                )}
              </h4>
              {step.description && (
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              )}
            </div>
          </li>
        ))}
      </div>
    </ol>
  )
}
