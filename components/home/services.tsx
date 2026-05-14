import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SectionHeading } from "@/components/site/section-heading"
import { GraduationCap, Users, FileText, Building2 } from "lucide-react"

const SERVICES = [
  {
    title: "المنح الدراسية",
    description: "فرص مميزة للحصول على منح دراسية كاملة.",
    href: "/scholarships",
    icon: GraduationCap,
  },
  {
    title: "الاستشارات",
    description: "نساعدك في اختيار التخصص والمسارات.",
    href: "/services",
    icon: Users,
  },
  {
    title: "استخراج الشهادات",
    description: "استخراج الشهادة الثانوية وشهادة الصف الثامن",
    href: "/certificates",
    icon: FileText,
  },
  {
    title: "التقديم للجامعات",
    description: "نتكفل بإجراءات التقديم والقبول في الصين ومصر.",
    href: "/services",
    icon: Building2,
  },
]

export function Services() {
  return (
    <section className="py-10 md:py-24 bg-[#f4f7f2]">
      <div className="mx-auto max-w-6xl px-4 md:px-6">

        {/* Heading */}
        <div className="[&_*]:!text-[#27215f]">
          <SectionHeading
            eyebrow="خدماتنا"
            title="مستقبلك التعليمي"
            description="نرافقك من أول خطوة حتى الوصول للجامعة المناسبة."
          />
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">

          {SERVICES.map((service) => {
            const Icon = service.icon

            return (
              <Link
                key={service.title}
                href={service.href}
                className="
                  group relative flex flex-col items-center text-center
                  rounded-xl border border-border bg-card
                  p-5
                  min-h-[160px]
                  transition-transform duration-200
                  hover:translate-y-[-4px]
                  hover:shadow-md
                "
              >
                {/* Icon (خفيف بدون animation) */}
                <div className="mb-3 flex items-center justify-center w-12 h-12 rounded-full bg-[#27215f]/10">
                  <Icon className="h-6 w-6 text-[#27215f]" />
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-[#27215f]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs text-[#27215f]/80 leading-6">
                  {service.description}
                </p>

                {/* Footer */}
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#27215f]">
                  <span>المزيد</span>
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                </div>

                {/* subtle hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition bg-black/5 pointer-events-none" />
              </Link>
            )
          })}

        </div>
      </div>
    </section>
  )
}