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
    <section className="py-9 md:py-24 bg-[#f4f7f2]">
      <div className="mx-auto max-w-7xl px-4 md:px-6">

        
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative">
          
           <div className="relative aspect-[4/3] max-w-md mx-auto lg:max-w-none rounded-[12px] overflow-hidden shadow-2xl ring-1 ring-primary/10">

  {/* 🖼️ Image */}
  <Image
  src="/images/Klo.png"
  alt="استشارة تعليمية احترافية"
  fill
  sizes="(min-width: 1024px) 460px, 100vw"
  className="object-cover"
/>

  {/* 🌑 Dark Shadow Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

  {/* ✨ Soft glow shadow effect */}
  <div className="absolute inset-0 shadow-[inset_0_-80px_120px_rgba(0,0,0,0.6)]" />

  {/* 📝 Text */}
  <div className="absolute bottom-28 left-0 right-0 p-6 text-white">
    <h2 className="text-[22px] md:text-xl font-bold leading-snug drop-shadow-md">
       ريتال <span className="text-[#634d32] text-[29px] ">نوباتيا</span> شركاء الطالب في النجاح 
    </h2>

    
  </div>

</div>
            
          </div>

          <div>
            
           

            <ul className="mt-6 space-y-3">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-green-light shrink-0 mt-0.5" />
                  <span className="text-sm md:text-[15px] text-[#27215f]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-[#27215f] hover:bg-primary/90 text-primary-foreground"
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
