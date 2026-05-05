import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SectionHeading } from "@/components/site/section-heading"

const SERVICES = [
  {
    title: "المنح الدراسية",
    description: "فرص مميزة للحصول على منح دراسية كاملة.",
    href: "/scholarships",
  },
  {
    title: "الاستشارات",
    description: "نساعدك في اختيار التخصص والمسار المناسب لك.",
    href: "/services",
  },
  {
    title: "استخراج الشهادات",
    description: "استخراج الشهادة الثانوية وشهادة الصف الثامن",
    href: "/certificates",
  },
  {
    title: "التقديم للجامعات",
    description: "نتكفل بإجراءات التقديم والقبول في الصين ومصر.",
    href: "/services",
  },
]

export function Services() {
  return (
    <section className="py-6 md:py-24 bg-background">
      <div className="mx-auto max-w-6xl px-4 md:px-6">

        <SectionHeading
          eyebrow="خدماتنا"
          title="مستقبلك التعليمي"
          description="نرافقك من أول خطوة حتى الوصول للجامعة المناسبة."
        />

        {/* Grid */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6">

          {SERVICES.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="
                group relative flex flex-col justify-between
                rounded-[8px] border border-border bg-card
                p-4 sm:p-6
                min-h-[130px]
                transition-all duration-300
                hover:shadow-lg hover:-translate-y-1
              "
            >
              {/* Title */}
              <h3 className="text-sm sm:text-base items-center justify-center flex font-bold text-foreground leading-snug group-hover:text-primary transition">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-7 text-justify break-words">
  {service.description}
</p>

              {/* Footer */}
              <div className="mt-4 flex items-center text-xs sm:text-sm font-semibold text-primary">
                <span>المزيد</span>
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </div>

              {/* hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-primary/5 pointer-events-none" />
            </Link>
          ))}

        </div>
      </div>
    </section>
  )
}