import Image from "next/image"
import Link from "next/link"
import { PageHero } from "@/components/site/page-hero"
import { Timeline } from "@/components/site/timeline"
import { SectionHeading } from "@/components/site/section-heading"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Landmark,
  Languages,
  HeartHandshake,
  Stethoscope,
  Scale,
  Building2,
  Briefcase,
  BookOpen,
  Palette,
  Cpu,
  GraduationCap,
} from "lucide-react"

const WHY_CARDS = [
  {
    icon: Landmark,
    title: "جامعات عريقة",
    description:
      "جامعات مصرية بتاريخ طويل في التعليم ومخرجات أكاديمية معترف بها عربياً ودولياً.",
  },
  {
    icon: Languages,
    title: "الدراسة بالعربية",
    description:
      "إمكانية الدراسة باللغة العربية في كثير من التخصصات مع خيار الإنجليزية أيضاً.",
  },
  {
    icon: HeartHandshake,
    title: "قرب ثقافي",
    description:
      "بيئة عربية مألوفة تجعل اندماجك سريعاً وسهلاً في المجتمع الجامعي.",
  },
]

const UNIVERSITIES = [
  { short: "CU", name: "Cairo University", ar: "جامعة القاهرة", rank: "الأقدم" },
  { short: "ASU", name: "Ain Shams", ar: "جامعة عين شمس", rank: "عريقة" },
  { short: "AU", name: "Alexandria", ar: "جامعة الإسكندرية", rank: "رائدة" },
  { short: "AUC", name: "AUC", ar: "الجامعة الأمريكية", rank: "دولية" },
  { short: "HU", name: "Helwan", ar: "جامعة حلوان", rank: "متخصصة" },
  { short: "MU", name: "Mansoura", ar: "جامعة المنصورة", rank: "معتمدة" },
  { short: "AzU", name: "Al-Azhar", ar: "جامعة الأزهر", rank: "إسلامية" },
  { short: "AsU", name: "Assiut", ar: "جامعة أسيوط", rank: "إقليمية" },
]

const MAJORS = [
  { icon: Stethoscope, label: "الطب والصيدلة" },
  { icon: Scale, label: "الحقوق والشريعة" },
  { icon: Building2, label: "الهندسة" },
  { icon: Briefcase, label: "التجارة والإدارة" },
  { icon: BookOpen, label: "الآداب واللغات" },
  { icon: Palette, label: "الفنون الجميلة" },
  { icon: Cpu, label: "علوم الحاسوب" },
  { icon: GraduationCap, label: "التربية والتعليم" },
]

const STEPS = [
  { title: "التقييم", description: "تقييم ملفك الأكاديمي والشهادات المطلوبة." },
  { title: "اختيار الجامعة", description: "اختيار الجامعة والتخصص الأنسب." },
  { title: "التقديم", description: "إجراءات التقديم والأوراق الرسمية." },
  { title: "القبول", description: "استلام القبول المبدئي والنهائي." },
  { title: "السفر والإقامة", description: "ترتيبات السفر والسكن في مصر." },
]

export default function StudyEgyptPage() {
  return (
    <>
      <PageHero
        eyebrow="الدراسة في مصر"
        title="تعليم عريق في قلب العالم العربي"
        description="ادرس في جامعات مصرية معتمدة تجمع بين الجودة الأكاديمية والبيئة العربية المألوفة والتكاليف المعقولة."
      >
        <div className="flex flex-wrap justify-center gap-3">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link href="/contact?service=study-egypt">
              ابدأ التقديم
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
          >
            <Link href="#universities">استعرض الجامعات</Link>
          </Button>
        </div>
      </PageHero>

      {/* Hero image */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="relative aspect-[16/7] rounded-3xl overflow-hidden shadow-xl ring-1 ring-primary/10">
            <Image
              src="/images/egypt.jpg"
              alt="حرم جامعي في مصر"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="لماذا مصر؟"
            title="مميزات الدراسة في مصر"
            description="أسباب قوية تجعل مصر خياراً مثالياً لإكمال دراستك."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {WHY_CARDS.map((c) => {
              const Icon = c.icon
              return (
                <div
                  key={c.title}
                  className="bg-card border border-border rounded-3xl p-6 md:p-7 hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-foreground">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {c.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Universities */}
      <section id="universities" className="py-16 md:py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="الجامعات الشريكة"
            title="أعرق الجامعات المصرية"
            description="نتعاون مع أفضل الجامعات المصرية الحكومية والخاصة."
          />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {UNIVERSITIES.map((u) => (
              <div
                key={u.short}
                className="group bg-card rounded-2xl border border-border p-5 text-center hover:border-primary/40 hover:shadow-md transition-all"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <span className="text-sm font-bold" dir="ltr">
                    {u.short}
                  </span>
                </div>
                <h4 className="mt-4 font-semibold text-sm text-foreground leading-tight">
                  {u.ar}
                </h4>
                <span className="mt-2 inline-block text-[11px] text-accent font-medium">
                  {u.rank}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Majors */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="التخصصات"
            title="تخصصات متنوعة في متناولك"
            description="اختر من بين مئات التخصصات المتاحة في الجامعات المصرية."
          />
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {MAJORS.map((m) => {
              const Icon = m.icon
              return (
                <div
                  key={m.label}
                  className="group bg-card border border-border rounded-2xl p-5 flex flex-col items-center text-center gap-3 hover:border-primary/40 hover:shadow-md transition-all"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    {m.label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="خطواتك معنا"
            title="من التقديم إلى القبول"
            description="خمس خطوات مبسطة للالتحاق بالجامعات المصرية."
          />
          <div className="mt-14 bg-card border border-border rounded-3xl p-6 md:p-10">
            <Timeline steps={STEPS} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-8 md:p-12 text-center">
            <div aria-hidden className="absolute inset-0 bg-pattern-grid opacity-[0.12]" />
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold text-balance">
                جاهز للدراسة في مصر؟
              </h3>
              <p className="mt-3 text-primary-foreground/80 max-w-xl mx-auto">
                احصل على استشارة مجانية الآن ودعنا نخطط معاً لمستقبلك.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-6 rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/contact?service=study-egypt">
                  احجز استشارتك
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
