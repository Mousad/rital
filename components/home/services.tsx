import Link from "next/link"
import {
  GraduationCap,
  Award,
  FileCheck,
  BookOpenCheck,
  ArrowLeft,
} from "lucide-react"
import { SectionHeading } from "@/components/site/section-heading"

const SERVICES = [
  {
    title: "المنح الدراسية",
    description:
      "فرص مميزة للحصول على منح دراسية كاملة وجزئية في أفضل الجامعات حول العالم.",
    href: "/scholarships",
    image: "https://i.pinimg.com/1200x/77/13/20/77132011e0fe9a7dd2a689d462a4ef05.jpg",
  },
  {
    title: "الاستشارات التعليمية",
    description:
      "نساعدك في اختيار التخصص والمسار المناسب بناءً على قدراتك وطموحاتك.",
    href: "/services",
    image: "https://i.pinimg.com/736x/a7/40/45/a7404580e89be85b9f884ede40760efb.jpg",
  },
  {
    title: "استخراج الشهادات",
    description:
      "خدمة استخراج الشهادة الثانوية وشهادة الصف الثامن بشكل قانوني ورسمي.",
    href: "/certificates",
    image: "https://i.pinimg.com/736x/a7/4e/88/a74e88c206a1570d9c74f75e2b2c903b.jpg",
  },
  {
    title: "التقديم للجامعات",
    description:
      "نتكفل بإجراءات التقديم والقبول الجامعي في الصين ومصر والعديد من الدول.",
    href: "/services",
    image: "https://i.pinimg.com/736x/b2/b9/7f/b2b97fab420adedeb0f6c43592a6105a.jpg",
  },
]

export function Services() {
  return (
    <section className="py-2 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="خدماتنا"
          title="كل ما تحتاجه لمستقبلك التعليمي"
          description="نقدم مجموعة متكاملة من الخدمات التي ترافقك من لحظة التفكير في الدراسة حتى بدء رحلتك الجامعية."
        />

        <div className="mt-12 grid gap-5 grid-cols-2 lg:grid-cols-4">
  {SERVICES.map((service, i) => {
    return (
      <Link
        key={service.title}
        href={service.href}
        className="group relative h-48 rounded-2xl overflow-hidden"
      >
        {/* 🖼️ Background Image */}
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* 🌑 Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />

        {/* 📝 Content */}
        <div className="relative z-10 flex flex-col justify-end h-full p-4 text-white">
          <h3 className="text-sm sm:text-base font-bold">
            {service.title}
          </h3>

          <p className="text-xs opacity-90 mt-1 line-clamp-2">
            {service.description}
          </p>

          <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold">
            اكتشف المزيد
            <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
          </span>
        </div>
      </Link>
    )
  })}
</div>
      </div>
    </section>
  )
}
