import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, GraduationCap, Star } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/60 via-background to-background">
      <div
        aria-hidden
        className="absolute inset-0 bg-pattern-dots opacity-60"
      />
      <div
        aria-hidden
        className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-brand-green-light/15 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute top-1/2 -right-32 h-[380px] w-[380px] rounded-full bg-accent/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1 animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary text-primary px-4 py-1.5 text-xs font-semibold ring-1 ring-primary/10">
             
              شريكك الموثوق في التعليم
            </span>

            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-primary text-balance">
              ابدأ رحلتك التعليمية{" "}
              <span className="relative inline-block">
                <span className="relative z-10">بثقة</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 h-3 bg-accent/50 rounded-sm -z-0"
                />
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
              نساعدك في الحصول على أفضل الفرص الدراسية واستخراج الشهادات
              الرسمية، مع فريق خبراء يرافقك خطوة بخطوة حتى تحقيق هدفك.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-6 shadow-md"
              >
                <Link href="/services">
                  استكشف الخدمات
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full h-12 px-6 border-primary/20 bg-background hover:bg-secondary"
              >
                <Link href="/contact">احجز استشارة</Link>
              </Button>
            </div>

            {/* Trust row */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2 -space-x-reverse">
  {[
    "https://i.pinimg.com/736x/f6/37/40/f637405b5ac838395cafe745105a29e4.jpg",
    "https://i.pinimg.com/1200x/55/06/62/55066253d0d056c690cfb49f4f91ff82.jpg",
    "https://i.pinimg.com/1200x/dd/cc/4e/ddcc4e83c188e9a69ae2b6bbeebbd388.jpg",
    "https://i.pinimg.com/736x/14/d1/af/14d1af79b6213fbc7aedba7bc5031c4b.jpg",
  ].map((img, i) => (
    <img
      key={i}
      src={img}
      alt="student"
      className="h-9 w-9 rounded-full object-cover ring-2 ring-background"
    />
  ))}
</div>
                <div>
                  <div className="flex items-center gap-0.5 text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    أكثر من 2000+ طالب سعيد
                  </p>
                </div>
              </div>

              <div className="h-10 w-px bg-border hidden sm:block" />

              <div className="flex items-center gap-6">
                <Stat value="+7" label="سنة خبرة" />
                <Stat value="+22" label="جامعة شريكة" />
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative animate-fade-up [animation-delay:150ms]">
            <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-primary/10">
                <Image
  src="/images/bsnk.jpg"
  alt="طلاب سعداء يحتفلون بتخرجهم"
  fill
  priority
  sizes="(min-width: 1024px) 560px, 100vw"
  className="object-cover"
/>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              </div>

              {/* Floating card 1 */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-card border border-border rounded-2xl shadow-xl p-4 flex items-center gap-3 max-w-[220px]">
                <div className="h-11 w-11 rounded-xl bg-secondary flex items-center justify-center text-primary">
                                <GraduationCap className="h-5 w-5" />

                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground leading-tight">
                    قبول مضمون
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    في أفضل الجامعات
                  </p>
                </div>
              </div>

              {/* Floating card 2 */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-card border border-border rounded-2xl shadow-xl p-4 max-w-[200px]">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-green-light animate-pulse" />
                  <span className="text-xs font-semibold text-primary">
                    استشارة مجانية
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                  تواصل معنا اليوم واحصل على تقييم شامل لمسارك.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-xl md:text-2xl font-bold text-primary">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  )
}
