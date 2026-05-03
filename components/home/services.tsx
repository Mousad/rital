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
    title: "الاستشارات ",
    description: "نساعدك في اختيار التخصص والمسار .",
    href: "/services",
  },
  {
    title: "استخراج الشهادات",
    description: "خدمة استخراج الشهادة الثانوية وشهادة الصف الثامن.",
    href: "/certificates",
  },
  {
    title: "التقديم للجامعات",
    description: "نتكفل بإجراءات التقديم والقبول الجامعي في الصين ومصر.",
    href: "/services",
  },
]

export function Services() {
  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="mx-auto max-w-6xl px-4 md:px-6">

        <SectionHeading
          eyebrow="خدماتنا"
          title="مستقبلك التعليمي"
          description="نقدم مجموعة متكاملة من الخدمات التي ترافقك من لحظة التفكير في الدراسة حتى بدء رحلتك الجامعية."
        />

        {/* Cards */}
        <div className="mt-10 grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">

          {SERVICES.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group rounded-2xl border border-border bg-card p-5 hover:shadow-md transition-all"
            >
              {/* Title */}
              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary">
                 المزيد
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  )
}