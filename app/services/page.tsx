import Link from "next/link"
import Image from "next/image";
import { SectionHeading } from "@/components/site/section-heading"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Award,
  BookOpenCheck,
  FileCheck,
  GraduationCap,
  Globe2,
  Plane,
  LanguagesIcon,
  UsersRound,
} from "lucide-react"

const SERVICES = [
  {
    icon: FileCheck,
    title: "استخراج الشهادات",
    description:
      "استخراج الشهادة الثانوية وشهادة الصف الثامن بطريقة قانونية ومعتمدة.",
    href: "/certificates",
    tag: "شائعة",
  },
  {
    icon: Globe2,
    title: "الدراسة في الصين",
    description:
      "التقديم للجامعات الصينية والحصول على منح حكومية وجامعية.",
    href: "/study-china",
    tag: "مميزة",
  },
  {
    icon: GraduationCap,
    title: "الدراسة في مصر",
    description:
      "التسجيل في الجامعات المصرية الحكومية والخاصة بسهولة تامة.",
    href: "/study-egypt",
  },
  {
    icon: Award,
    title: "المنح الدراسية",
    description:
      "التقديم على المنح الكاملة والجزئية في مختلف دول العالم.",
    href: "/scholarships",
    tag: "منح كاملة",
  },
  {
    icon: BookOpenCheck,
    title: "الاستشارات التعليمية",
    description:
      "توجيه شخصي لاختيار التخصص والجامعة والمسار الأمثل لمستقبلك.",
    href: "/contact?service=consultation",
  },
  {
    icon: Plane,
    title: "إجراءات السفر",
    description:
      "ترتيبات الفيزا وتذاكر الطيران والسكن للطلاب الملتحقين بالجامعات.",
    href: "/contact?service=other",
  },
  {
    icon: LanguagesIcon,
    title: "دورات اللغة",
    description:
      "دورات تحضيرية في اللغة الصينية والإنجليزية قبل البدء بالدراسة.",
    href: "/contact?service=other",
  },
  {
    icon: UsersRound,
    title: "المتابعة بعد الوصول",
    description:
      "دعم متواصل بعد وصول الطالب للدولة الدراسية وخلال أيامه الأولى.",
    href: "/contact?service=other",
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
     <div className="relative py-14 h-[36vh] overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src="/images/service.png"
      alt="education"
      fill
      className="object-cover"
    />
  
        </div>

        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black/60"></div> */}

       
      </div>
  
      {/* SERVICES */}
      <section className="py-10 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <SectionHeading
            eyebrow="ما نقدمه"
            title="اختر الخدمة التي تحتاجها"
            description="
            نوفر لك كل ما تحتاجه في رحلتك التعليمية، من استخراج الشهادات إلى الوصول
            للجامعة وما بعدها، بخبرة تمتد لسنوات وخدمات موثوقة.
          "
          />

          <div className="mt-12 grid gap-5  sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => {
              const Icon = s.icon
              return (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group relative bg-card border border-border rounded-3xl p-6 md:p-7 hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  {s.tag && (
                    <span className="absolute top-5 left-5 rounded-full bg-accent/15 text-accent px-3 py-1 text-[11px] font-bold ring-1 ring-accent/30">
                      {s.tag}
                    </span>
                  )}

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                    {s.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    اكتشف المزيد
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
    <section className="relative py-20 md:py-24 overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://i.pinimg.com/736x/6b/ea/c3/6beac3914fd768904cb963fed155aa5f.jpg"
      alt="students"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-6">
    <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 text-center shadow-lg text-white">
      
      <h3 className="text-2xl md:text-3xl font-bold">
        لست متأكداً من الخدمة المناسبة؟
      </h3>

      <p className="mt-3 max-w-xl mx-auto text-gray-200">
        احجز استشارة مجانية مع خبرائنا وسنرشدك للخيار الأنسب لك.
      </p>

      <Button
        asChild
        size="lg"
        className="mt-6 rounded-full bg-white text-black hover:bg-gray-200"
      >
        <Link href="/contact">
          احجز استشارة مجانية
          <ArrowLeft className="h-4 w-4" />
        </Link>
      </Button>

    </div>
  </div>
</section>
    </>
  )
}