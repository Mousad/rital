import Link from "next/link"
import Image from "next/image"
import { PageHero } from "@/components/site/page-hero"
import { SectionHeading } from "@/components/site/section-heading"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Award,
  Globe,
  Sparkles,
  FileText,
  GraduationCap,
  IdCard,
  Languages,
  BadgeCheck,
  Check,
} from "lucide-react"

const TYPES = [
  {
    icon: Award,
    title: "منحة حكومية صينية كاملة",
    description:
      "منحة CSC الحكومية التي تغطي الرسوم الدراسية، السكن، بدل شهري، وتأمين صحي.",
    features: ["الرسوم الدراسية", "السكن الجامعي", "بدل شهري", "تأمين صحي"],
    tone: "primary",
  },
  {
    icon: Globe,
    title: "منح الجامعات الصينية",
    description:
      "منح مباشرة من الجامعات الصينية الكبرى لدعم الطلاب المتفوقين دولياً.",
    features: ["تخفيض رسوم", "سكن مجاني", "بدل جزئي"],
    tone: "accent",
  },
  {
    icon: Sparkles,
    title: "منح دراسية في مصر",
    description:
      "فرص منح في جامعات مصرية حكومية ومنح من الوكالة المصرية للشراكة.",
    features: ["رسوم مخفضة", "خصومات سكن", "إعفاءات جزئية"],
    tone: "primary",
  },
]

const REQUIREMENTS = [
  { icon: FileText, label: "نسخة من جواز السفر" },
  { icon: GraduationCap, label: "شهادة الثانوية العامة" },
  { icon: IdCard, label: "صورة شخصية حديثة" },
  { icon: Languages, label: "شهادة لغة (إن وجدت)" },
  { icon: BadgeCheck, label: "السجل الأكاديمي" },
  { icon: FileText, label: "رسالة تحفيزية" },
]

export default function ScholarshipsPage() {
  return (
    <>
      <PageHero
        eyebrow="المنح الدراسية"
        title="حوّل حلمك إلى منحة دراسية"
        description="نرشدك إلى أفضل المنح الدراسية المتاحة ونتابع معك كل خطوة من التقديم حتى القبول."
      >
        <Button
          asChild
          size="lg"
          className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
        >
          <Link href="/contact?service=scholarships">
            ابدأ التقديم للمنح
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
      </PageHero>

      {/* Types */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="أنواع المنح"
            title="منح تناسب جميع الطموحات"
            description="اختر من بين باقة متنوعة من المنح الدراسية في أفضل الدول."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {TYPES.map((t, idx) => {
              const Icon = t.icon
              const highlight = idx === 0
              return (
                <div
                  key={t.title}
                  className={`relative rounded-3xl p-6 md:p-7 border transition-all flex flex-col ${
                    highlight
                      ? "bg-primary text-primary-foreground border-primary shadow-xl lg:scale-[1.02]"
                      : "bg-card text-card-foreground border-border hover:border-primary/30 hover:shadow-lg"
                  }`}
                >
                  {highlight && (
                    <span className="absolute top-5 left-5 rounded-full bg-accent text-accent-foreground px-3 py-1 text-[11px] font-bold">
                      الأكثر طلباً
                    </span>
                  )}
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                      highlight
                        ? "bg-accent/15 text-accent"
                        : "bg-secondary text-primary"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3
                    className={`mt-5 text-xl font-bold ${
                      highlight ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {t.title}
                  </h3>
                  <p
                    className={`mt-2 text-sm leading-relaxed flex-1 ${
                      highlight
                        ? "text-primary-foreground/85"
                        : "text-muted-foreground"
                    }`}
                  >
                    {t.description}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <span
                          className={`flex h-5 w-5 items-center justify-center rounded-full ${
                            highlight
                              ? "bg-accent text-accent-foreground"
                              : "bg-secondary text-primary"
                          }`}
                        >
                          <Check className="h-3 w-3" />
                        </span>
                        <span
                          className={
                            highlight
                              ? "text-primary-foreground/90"
                              : "text-foreground/85"
                          }
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    size="sm"
                    className={`mt-6 rounded-full ${
                      highlight
                        ? "bg-accent text-accent-foreground hover:bg-accent/90"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                  >
                    <Link href="/contact?service=scholarships">
                      تقديم الطلب
                      <ArrowLeft className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 md:py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none rounded-3xl overflow-hidden shadow-xl ring-1 ring-primary/10">
              <Image
                src="/images/scholarships.jpg"
                alt="المستندات المطلوبة للمنح"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </div>

            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary text-primary px-3.5 py-1 text-xs font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                المتطلبات
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
                مستندات التقديم الأساسية
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                المتطلبات التالية هي الأكثر شيوعاً للتقديم على المنح، وقد تختلف
                حسب الجامعة والتخصص. نحن نرشدك لكل مستند بدقة.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                {REQUIREMENTS.map((r) => {
                  const Icon = r.icon
                  return (
                    <div
                      key={r.label}
                      className="bg-card border border-border rounded-xl p-4 flex items-center gap-3"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary shrink-0">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {r.label}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-8 md:p-12 text-center">
            <div aria-hidden className="absolute inset-0 bg-pattern-grid opacity-[0.12]" />
            <div className="relative">
              <Award className="h-10 w-10 text-accent mx-auto" />
              <h3 className="mt-4 text-2xl md:text-3xl font-bold text-balance">
                منحتك على بعد خطوة واحدة
              </h3>
              <p className="mt-3 text-primary-foreground/80 max-w-xl mx-auto">
                دعنا نساعدك في الحصول على منحتك الدراسية. تواصل معنا اليوم.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-6 rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/contact?service=scholarships">
                  تقديم طلب منحة
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
