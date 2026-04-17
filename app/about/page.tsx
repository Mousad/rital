import Image from "next/image"
import Link from "next/link"
import { PageHero } from "@/components/site/page-hero"
import { SectionHeading } from "@/components/site/section-heading"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Target,
  Eye,
  Heart,
  Users,
  GraduationCap,
  Building,
  Trophy,
} from "lucide-react"

const VALUES = [
  {
    icon: Target,
    title: "رسالتنا",
    description:
      "تمكين الطلاب من الوصول لأفضل الفرص التعليمية في العالم عبر خدمات احترافية وموثوقة.",
  },
  {
    icon: Eye,
    title: "رؤيتنا",
    description:
      "أن نكون الشريك الأول في المنطقة للخدمات التعليمية الدولية المتكاملة.",
  },
  {
    icon: Heart,
    title: "قيمنا",
    description:
      "الأمانة، الشفافية، الالتزام، وخدمة الطالب أولاً قبل أي شيء آخر.",
  },
]

const STATS = [
  { icon: Users, value: "2000+", label: "طالب سعيد" },
  { icon: GraduationCap, value: "50+", label: "جامعة شريكة" },
  { icon: Building, value: "12+", label: "سنة خبرة" },
  { icon: Trophy, value: "98%", label: "معدل رضا" },
]

const TEAM = [
  {
    name: "د. محمد العلي",
    role: "المدير التنفيذي",
    gradient: "from-brand-green to-brand-green-light",
  },
  {
    name: "أ. هدى الشامي",
    role: "مسؤولة الاستشارات",
    gradient: "from-accent to-brand-gold",
  },
  {
    name: "أ. سامي كريم",
    role: "منسق جامعات الصين",
    gradient: "from-brand-green-light to-brand-green",
  },
  {
    name: "أ. ريم أحمد",
    role: "منسقة جامعات مصر",
    gradient: "from-brand-gold to-accent",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="عنّا"
        title="نحن ريتال للخدمات التعليمية"
        description="قصة شغف بالتعليم وإيمان بأن كل طالب يستحق فرصة لتحقيق أحلامه الأكاديمية."
      />

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-3xl overflow-hidden shadow-2xl ring-1 ring-primary/10">
              <Image
                src="/images/about.jpg"
                alt="فريق ريتال"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
                priority
              />
            </div>

            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary text-primary px-3.5 py-1 text-xs font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                قصتنا
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
                من فكرة بسيطة إلى مؤسسة تعليمية رائدة
              </h2>
              <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed text-pretty">
                <p>
                  انطلقت ريتال من إيمان عميق بأن التعليم هو مفتاح تغيير الحياة.
                  بدأنا رحلتنا قبل أكثر من 12 عاماً بهدف بسيط: مساعدة طالب واحد
                  في الوصول لحلمه الجامعي. واليوم، بعد أن ساعدنا آلاف الطلاب،
                  ما زلنا نحمل نفس الشغف وذات الالتزام.
                </p>
                <p>
                  نحن لا نقدم مجرد خدمات، بل نرافق الطالب وعائلته في رحلة
                  تعليمية كاملة. كل ملف لدينا هو قصة، وكل طالب هو مسؤولية.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="ما يميزنا"
            title="رسالتنا ورؤيتنا وقيمنا"
            description="ثلاثة مبادئ أساسية توجّه كل قرار وكل خطوة نتخذها."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {VALUES.map((v) => {
              const Icon = v.icon
              return (
                <div
                  key={v.title}
                  className="bg-card border border-border rounded-3xl p-7 hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-foreground">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {v.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-12 relative overflow-hidden">
            <div aria-hidden className="absolute inset-0 bg-pattern-grid opacity-[0.12]" />
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {STATS.map((s) => {
                const Icon = s.icon
                return (
                  <div key={s.label} className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mt-3 text-3xl md:text-4xl font-bold text-accent">
                      {s.value}
                    </div>
                    <div className="mt-1 text-sm text-primary-foreground/80">
                      {s.label}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="فريقنا"
            title="أشخاص يجعلون الفرق"
            description="فريق من الخبراء المتخصصين في الإرشاد التعليمي والجامعي."
          />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-5">
            {TEAM.map((t) => (
              <div
                key={t.name}
                className="group bg-card border border-border rounded-3xl overflow-hidden hover:shadow-lg transition-all"
              >
                <div
                  className={`aspect-square bg-gradient-to-br ${t.gradient} flex items-center justify-center`}
                >
                  <div className="text-4xl font-bold text-primary-foreground/90">
                    {t.name.trim().split(" ").slice(-1)[0][0]}
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h4 className="font-bold text-foreground">{t.name}</h4>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="rounded-3xl bg-card border border-border p-8 md:p-12 text-center shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
              جاهز لبدء رحلتك معنا؟
            </h3>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              انضم لآلاف الطلاب الذين بدؤوا رحلتهم التعليمية مع ريتال.
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
