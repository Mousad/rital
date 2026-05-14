import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Star } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f4f7f2]">
      {/* خفيف بدل blur الثقيل */}
      <div
        aria-hidden
        className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-brand-green-light/10"
      />
      <div
        aria-hidden
        className="absolute top-1/2 -right-32 h-[320px] w-[320px] rounded-full bg-accent/10"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-6 py-10 md:py-24 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* TEXT */}
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary text-[#27215f] px-4 py-1 text-xs font-semibold">
              شريكك الموثوق
            </span>

            <h1 className="mt-3 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#27215f]">
              ابدأ رحلتك مع{" "}
              <span className="relative inline-block">
                Rital
              </span>
            </h1>

            <p className="mt-3 max-w-xl text-base md:text-lg text-[#27215f]/90 leading-relaxed">
              نساعدك في الحصول على أفضل الفرص الدراسية واستخراج الشهادات الرسمية،
              مع فريق خبراء يرافقك خطوة بخطوة حتى تحقيق هدفك.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="rounded-xl bg-[#27215f]">
                <Link href="/services">
                  الخدمات <ArrowLeft className="h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-xl"
              >
                <Link href="/contact">احجز استشارة</Link>
              </Button>
            </div>

            {/* Trust */}
          
          </div>

          {/* IMAGE */}
          <div className="order-1 lg:order-2">
            <div className="relative h-[300px] sm:h-[350px] lg:h-[420px] max-w-md mx-auto lg:max-w-none">

              <div className="absolute inset-0 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/bamk.webp"
                  alt="طلاب سعداء"
                  fill
                  priority
                  quality={70}
                  sizes="(min-width: 1024px) 460px, 100vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* badge */}
              <div className="absolute -top-2 -right-2 bg-white border shadow-md p-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-semibold">
                    استشارة مجانية
                  </span>
                </div>
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
      <div className="text-xl md:text-2xl font-bold text-[#27215f]">
        {value}
      </div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  )
}