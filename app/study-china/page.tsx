import Image from "next/image"
import Link from "next/link"
import { PageHero } from "@/components/site/page-hero"
import { Timeline } from "@/components/site/timeline"
import { SectionHeading } from "@/components/site/section-heading"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Award,
  DollarSign,
  Globe2,
  Stethoscope,
  Cpu,
  Building2,
  Atom,
  Briefcase,
  Palette,
  BookOpen,
  GraduationCap,
} from "lucide-react"

const WHY_CARDS = [
  {
    icon: Award,
    title: "جامعات مرموقة عالمياً",
    description:
      "جامعات صينية ضمن أفضل 100 جامعة حول العالم، بشهادات معترف بها دولياً.",
  },
  {
    icon: DollarSign,
    title: "تكاليف دراسة معقولة",
    description:
      "رسوم دراسية وتكاليف معيشة أقل بكثير من الدول الغربية مع جودة عالية.",
  },
  {
    icon: Globe2,
    title: "منح حكومية متنوعة",
    description:
      "مئات المنح الدراسية الكاملة والجزئية من الحكومة الصينية والجامعات.",
  },
]

const UNIVERSITIES = [
  { short: "THU", name: "Tsinghua University", ar: "جامعة تسينغهوا", rank: "#12 عالمياً" },
  { short: "PKU", name: "Peking University", ar: "جامعة بكين", rank: "#17 عالمياً" },
  { short: "FDU", name: "Fudan University", ar: "جامعة فودان", rank: "#50 عالمياً" },
  { short: "ZJU", name: "Zhejiang University", ar: "جامعة تشجيانغ", rank: "#44 عالمياً" },
  { short: "SJTU", name: "Shanghai Jiao Tong", ar: "شانغهاي جياو تونغ", rank: "#51 عالمياً" },
  { short: "USTC", name: "USTC", ar: "العلوم والتكنولوجيا", rank: "#74 عالمياً" },
  { short: "NJU", name: "Nanjing University", ar: "جامعة نانجينغ", rank: "#120 عالمياً" },
  { short: "WHU", name: "Wuhan University", ar: "جامعة ووهان", rank: "#194 عالمياً" },
]

const MAJORS = [
  { icon: Stethoscope, label: "الطب والصيدلة" },
  { icon: Cpu, label: "علوم الحاسوب" },
  { icon: Building2, label: "الهندسة المدنية" },
  { icon: Atom, label: "العلوم الطبيعية" },
  { icon: Briefcase, label: "إدارة الأعمال" },
  { icon: Palette, label: "الفنون والتصميم" },
  { icon: BookOpen, label: "اللغة الصينية" },
  { icon: GraduationCap, label: "التربية والتعليم" },
]

const STEPS = [
  { title: "التقييم", description: "تقييم ملفك وتحديد الجامعات المناسبة." },
  { title: "اختيار التخصص", description: "توجيهك لأنسب التخصصات والبرامج." },
  { title: "التقديم", description: "تقديم طلبك للجامعات المختارة." },
  { title: "القبول والفيزا", description: "استلام القبول وإجراءات التأشيرة." },
  { title: "السفر", description: "مرافقتك حتى وصولك وبدء دراستك." },
]

export default function StudyChinaPage() {
  return (
    <>
      <PageHero
        eyebrow="الدراسة في الصين"
        title="ابدأ رحلتك في أعرق الجامعات الصينية"
        description="الصين وجهة تعليمية متميزة تجمع بين الجودة العالمية والتكاليف المعقولة والمنح الحكومية الكبرى."
      >
        <div className="flex flex-wrap justify-center gap-3">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link href="/contact?service=study-china">
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
              src="/images/china.jpg"
              alt="حرم جامعي في الصين"
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
            eyebrow="لماذا الصين؟"
            title="مميزات الدراسة في الصين"
            description="إليك أبرز الأسباب التي تجعل الصين وجهة مثالية لإكمال دراستك الجامعية."
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
            title="أفضل الجامعات الصينية"
            description="نتعاون مع أعرق الجامعات الصينية لتوفير أفضل الفرص لطلابنا."
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
            title="تخصصات متنوعة لجميع الطلاب"
            description="اختر التخصص الذي يناسب شغفك من بين مئات التخصصات المتاحة."
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
            title="من التقديم إلى الوصول"
            description="خمس خطوات فقط تفصلك عن بدء رحلتك الدراسية في الصين."
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
                جاهز لبدء رحلتك إلى الصين؟
              </h3>
              <p className="mt-3 text-primary-foreground/80 max-w-xl mx-auto">
                احجز استشارة مجانية الآن وسيتواصل معك فريقنا لمناقشة خياراتك.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-6 rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/contact?service=study-china">
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
