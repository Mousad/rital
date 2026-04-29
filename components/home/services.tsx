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
      "فرص مميزة للحصول على منح دراسية كاملة      .",
    href: "/scholarships",
    image: "https://i.pinimg.com/1200x/77/13/20/77132011e0fe9a7dd2a689d462a4ef05.jpg",
  },
  {
    title: "الاستشارات التعليمية",
    description:
      "نساعدك في اختيار التخصص والمسار المناسب ",
    href: "/services",
    image: "https://i.pinimg.com/736x/a7/40/45/a7404580e89be85b9f884ede40760efb.jpg",
  },
  {
    title: "استخراج الشهادات",
    description:
      "خدمة استخراج الشهادة الثانوية وشهادة الصف الثامن   .",
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
 <div className="mx-auto max-w-1xl px-2 md:px-4">
  <SectionHeading
    eyebrow="خدماتنا"
    title="   مستقبلك التعليمي"
    description="نقدم مجموعة متكاملة من الخدمات التي ترافقك من لحظة التفكير في الدراسة حتى بدء رحلتك الجامعية."
  />


    <div className="mt-8 grid gap-2 grid-cols-2 lg:grid-cols-4">
      {SERVICES.map((service) => {
        return (
          <Link
            key={service.title}
            href={service.href}
            className="group relative h-40 rounded-2xl overflow-hidden"
          >
            {/* 🖼️ Background Image */}
            <img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* 🌑 Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/60 to-transparent transition duration-300 group-hover:from-black/90" />

            {/* 📝 Content */}
            <div className="relative z-10 flex flex-col justify-end h-full p-4 text-white">
              <h3 className="text-[24px] sm:text-base font-bold drop-shadow-md">
                {service.title}
              </h3>

             

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
