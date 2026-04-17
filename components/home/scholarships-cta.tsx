import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Award, Check } from "lucide-react"

const BENEFITS = [
  "منح كاملة تشمل الرسوم الدراسية",
  "بدل شهري للمعيشة والسكن",
  "تأمين صحي طوال فترة الدراسة",
  "تذاكر سفر مدفوعة",
]

export function ScholarshipsCTA() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground">
          <div
            aria-hidden
            className="absolute inset-0 bg-pattern-grid opacity-[0.15]"
          />
          <div
            aria-hidden
            className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-accent/25 blur-3xl"
          />

          <div className="relative grid md:grid-cols-2 gap-10 items-center p-8 md:p-12 lg:p-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 text-accent px-3.5 py-1.5 text-xs font-semibold ring-1 ring-accent/30">
                <Award className="h-3.5 w-3.5" />
                المنح الدراسية
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
                منح دراسية كاملة في انتظارك
              </h2>
              <p className="mt-4 text-primary-foreground/80 leading-relaxed text-pretty">
                نساعدك في التقديم للحصول على منح دراسية كاملة وجزئية في أفضل
                الجامعات الصينية والمصرية والعالمية.
              </p>

              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {BENEFITS.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-primary-foreground/90">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Link href="/scholarships">
                    اكتشف المنح المتاحة
                    <ArrowLeft className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Link href="/contact">استشارة مجانية</Link>
                </Button>
              </div>
            </div>

            <div className="relative aspect-[4/5] md:aspect-square max-w-sm mx-auto md:max-w-none rounded-3xl overflow-hidden ring-1 ring-primary-foreground/10 shadow-2xl">
              <Image
                src="/images/scholarships.jpg"
                alt="منح دراسية"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
