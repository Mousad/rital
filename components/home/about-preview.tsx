import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowLeft } from "lucide-react"

const FEATURES = [
  "فريق استشاري بخبرة تزيد عن 12 عاماً",
  "أكثر من 2000 طالب ناجح تم توجيههم",
  "شراكات رسمية مع جامعات معتمدة دولياً",
  "متابعة شخصية حتى الوصول للجامعة",
]

export function AboutPreview() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-primary/10">
              <Image
                src="/images/about.jpg"
                alt="استشارة تعليمية احترافية"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-2xl p-5 shadow-xl hidden sm:block">
              <div className="text-3xl font-bold text-accent">98%</div>
              <p className="text-xs text-primary-foreground/80 mt-1 max-w-[160px] leading-relaxed">
                معدل رضا الطلاب عن خدماتنا
              </p>
            </div>
          </div>

          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary text-primary px-3.5 py-1 text-xs font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              من نحن
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
              نحن ريتال، شريكك الأمين في بناء مستقبل تعليمي مميز
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
              تأسست ريتال لتكون الجسر الذي يصل الطلاب الطموحين بأفضل الفرص
              التعليمية حول العالم. نؤمن بأن كل طالب يستحق فرصة لتحقيق أحلامه،
              ونعمل بكل جدية لتحويل هذه الأحلام إلى واقع ملموس.
            </p>

            <ul className="mt-6 space-y-3">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-green-light shrink-0 mt-0.5" />
                  <span className="text-sm md:text-[15px] text-foreground/90">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link href="/about">
                  تعرف علينا أكثر
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
