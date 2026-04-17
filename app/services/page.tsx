import Link from "next/link"
import { PageHero } from "@/components/site/page-hero"
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
      <PageHero
        eyebrow="خدماتنا"
        title="خدمات متكاملة لمستقبلك التعليمي"
        description="نوفر لك كل ما تحتاجه في رحلتك التعليمية، من استخراج الشهادات إلى الوصول للجامعة وما بعدها."
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="ما نقدمه"
            title="اختر الخدمة التي تحتاجها"
            description="كل خدمة مصممة لتمنحك أقصى قيمة وأفضل تجربة."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
      <section className="py-20 md:py-24 bg-secondary/40">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="rounded-3xl bg-card border border-border p-8 md:p-12 text-center shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
              لست متأكداً من الخدمة المناسبة؟
            </h3>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              احجز استشارة مجانية مع خبرائنا وسنرشدك للخيار الأنسب لك.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
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
