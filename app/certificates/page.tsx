import Image from "next/image"
import Link from "next/link"
import { PageHero } from "@/components/site/page-hero"
import { VerticalTimeline } from "@/components/site/timeline"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileCheck, ShieldCheck, Clock4, BadgeCheck } from "lucide-react"

const HIGH_SCHOOL_STEPS = [
  { title: "تقديم الطلب", description: "املأ النموذج وقدم البيانات الأساسية المطلوبة." },
  { title: "مراجعة البيانات", description: "يقوم فريقنا بمراجعة البيانات والتحقق منها." },
  { title: "تجهيز المستندات", description: "نجهّز جميع المستندات الرسمية اللازمة للاستخراج." },
  { title: "استخراج الشهادة", description: "متابعة إجراءات الاستخراج من الجهات المختصة." },
  { title: "التسليم", description: "تسلمك الشهادة مصدقة وجاهزة للاستخدام." },
]

const GRADE8_STEPS = [
  { title: "تقديم الطلب", description: "قدّم طلبك عبر النموذج الإلكتروني." },
  { title: "مراجعة البيانات", description: "نتأكد من صحة المعلومات والمستندات." },
  { title: "تجهيز المستندات", description: "تجهيز الأوراق الرسمية المطلوبة." },
  { title: "استخراج الشهادة", description: "متابعة الاستخراج من المديرية المختصة." },
  { title: "التسليم", description: "تسلّم شهادتك مصدّقة خلال الموعد المحدد." },
]

const FEATURES = [
  { icon: ShieldCheck, title: "قانوني ومعتمد", desc: "جميع الإجراءات عبر قنوات رسمية." },
  { icon: Clock4, title: "تسليم سريع", desc: "أوقات قياسية لإنهاء المعاملات." },
  { icon: BadgeCheck, title: "تصديق كامل", desc: "الشهادة جاهزة للاستخدام الدولي." },
]

export default function CertificatesPage() {
  return (
    <>
      <PageHero
        eyebrow="استخراج الشهادات"
        title="خدمات استخراج الشهادات"
        description="نوفر لك خدمة استخراج الشهادات الرسمية بأسلوب قانوني موثوق، مع متابعة كاملة حتى التسليم."
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-4 md:grid-cols-3">
            {FEATURES.map((f) => {
              const Icon = f.icon
              return (
                <div
                  key={f.title}
                  className="bg-card border border-border rounded-2xl p-5 flex items-start gap-4"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{f.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CertificateService
        id="high-school"
        badge="الشهادة الثانوية"
        title="استخراج الشهادة الثانوية"
        description="خدمة متكاملة لاستخراج شهادة الثانوية العامة بشكل رسمي ومعتمد، مع تصديقها من الجهات المختصة لتكون جاهزة للاستخدام محلياً ودولياً."
        image="/images/certificate-high-school.jpg"
        steps={HIGH_SCHOOL_STEPS}
      />

      <CertificateService
        id="grade-8"
        reverse
        badge="الصف الثامن"
        title="استخراج شهادة الصف الثامن"
        description="نساعدك في استخراج شهادة الصف الثامن بخطوات واضحة وبدون عناء، سواءً كنت داخل البلاد أو خارجها."
        image="/images/certificate-grade8.jpg"
        steps={GRADE8_STEPS}
      />

      {/* CTA */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-8 md:p-12 text-center">
            <div aria-hidden className="absolute inset-0 bg-pattern-grid opacity-[0.12]" />
            <div className="relative">
              <FileCheck className="h-10 w-10 text-accent mx-auto" />
              <h3 className="mt-4 text-2xl md:text-3xl font-bold text-balance">
                ابدأ طلب استخراج شهادتك اليوم
              </h3>
              <p className="mt-3 text-primary-foreground/80 max-w-xl mx-auto">
                اترك لنا التفاصيل وسيتواصل معك فريقنا لشرح الخطوات وتجهيز ملفك.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-6 rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/contact?service=certificates">
                  احجز استشارتك المجانية
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

function CertificateService({
  id,
  badge,
  title,
  description,
  image,
  steps,
  reverse = false,
}: {
  id: string
  badge: string
  title: string
  description: string
  image: string
  steps: { title: string; description?: string }[]
  reverse?: boolean
}) {
  return (
    <section id={id} className="py-16 md:py-20 bg-secondary/30 even:bg-background">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div
          className={`grid gap-10 lg:gap-14 lg:grid-cols-2 items-center ${
            reverse ? "lg:[&>:first-child]:order-2" : ""
          }`}
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary text-primary px-3.5 py-1 text-xs font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {badge}
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
              {title}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
              {description}
            </p>

            <div className="mt-8 bg-card border border-border rounded-3xl p-6 md:p-7">
              <h3 className="font-semibold text-foreground mb-5">
                خطوات الاستخراج
              </h3>
              <VerticalTimeline steps={steps} />
            </div>

            <Button
              asChild
              size="lg"
              className="mt-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link href={`/contact?service=certificates&type=${id}`}>
                ابدأ الطلب
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-3xl overflow-hidden shadow-xl ring-1 ring-primary/10">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
