import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

export type TimelineStep = {
  title: string
  description?: string
}

/* =========================
   HORIZONTAL / RESPONSIVE TIMELINE
========================= */
export function Timeline({
  steps,
  className,
}: {
  steps: TimelineStep[]
  className?: string
}) {
  return (
    <ol className={cn("relative", className)}>
      {/* Mobile vertical line */}
      <span
        aria-hidden
        className="md:hidden absolute top-0 bottom-0 right-[20px] w-px bg-[#27215f]"
      />

      <div className="flex flex-col md:flex-row md:items-stretch gap-8 md:gap-4">
        {steps.map((step, i) => (
          <li
            key={`${step.title}-${i}`}
            className="relative md:flex-1 flex md:flex-col items-start md:items-center gap-4 md:gap-3"
          >
            {/* Desktop connector */}
            {i < steps.length - 1 && (
              <span
                aria-hidden
                className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-border"
              />
            )}

            {/* Circle */}
            <span
              className={cn(
                "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold shadow-sm ring-4 ring-background",
                "bg-[#27215f] text-white"
              )}
            >
              {i + 1}
            </span>

            {/* Text */}
            <div className="md:text-center">
              <h4 className="font-semibold text-[#27215f]  leading-tight">
                {step.title}
              </h4>

              {step.description && (
                <p className="mt-1 text-sm text-[#3c3c3c]  leading-relaxed md:max-w-[180px]">
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

/* =========================
   VERTICAL TIMELINE
========================= */
export function VerticalTimeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <ol className="relative">
      {/* vertical line */}
      <span
        aria-hidden
        className="absolute top-2 bottom-2 right-[20px] w-px bg-[#27215f]"
      />

      <div className="flex flex-col gap-6">
        {steps.map((step, i) => (
          <li
            key={`${step.title}-${i}`}
            className="relative flex items-start gap-4"
          >
            {/* Circle */}
            <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#27215f] text-white text-sm font-bold shadow-sm ring-4 ring-background">
              {i + 1}
            </span>

            {/* Content */}
            <div className="pt-1.5">
              <h4 className="font-semibold text-foreground leading-tight flex items-center gap-2">
                {step.title}

                {i === steps.length - 1 && (
                  <Check className="h-4 w-4 text-green-500" />
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