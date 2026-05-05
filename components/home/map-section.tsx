import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, ArrowLeft } from "lucide-react"
import { SectionHeading } from "@/components/site/section-heading"
import { Button } from "@/components/ui/button"

const INFO = [
  {
    icon: MapPin,
    title: "عنواننا",
    value: "القاهرة، مصر - محي الدين ابو العز/ الدقي",
  },
  {
    icon: Phone,
    title: "اتصل بنا",
    value: "+963 11 123 4567",
    dir: "ltr" as const,
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    value: "Ritaloffice22@gmail.com",
    dir: "ltr" as const,
  },
  {
    icon: Clock,
    title: "أوقات العمل",
    value: "السبت - الخميس، 9:00 - 18:00",
  },
]

export function MapSection() {
  return (
    <>
      {/* MAP SECTION */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">

          <SectionHeading
            eyebrow="موقعنا"
            title="زرنا في مقرنا"
            description="نرحب بك في مكتبنا لنناقش معك خطوات مستقبلك التعليمي وجهاً لوجه."
          />

          <div className="mt-12 grid lg:grid-cols-3 gap-6">

            {/* MAP */}
            <div className="lg:col-span-2 rounded-3xl overflow-hidden border border-border shadow-sm aspect-[4/3] lg:aspect-auto lg:min-h-[420px] bg-secondary">
              <iframe
                title="موقعنا على الخريطة"
                src="https://www.openstreetmap.org/export/embed.html?bbox=36.2565%2C33.4975%2C36.3265%2C33.5375&layer=mapnik&marker=33.5175%2C36.2915"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* INFO */}
            <div className="grid gap-4 content-start">
              {INFO.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="bg-card border border-border rounded-2xl p-5 flex items-start gap-4 hover:border-primary/30 hover:shadow-md transition-all"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">
                        {item.title}
                      </p>

                      <p
                        className="mt-1 font-semibold text-foreground text-sm md:text-base"
                        dir={item.dir || undefined}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-20 md:py-24 overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://i.pinimg.com/736x/6b/ea/c3/6beac3914fd768904cb963fed155aa5f.jpg"
            alt="students"
            fill
            className="object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-6">

          <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 text-center shadow-lg text-white">

            <h3 className="text-2xl md:text-3xl font-bold">
              جاهز لبدء رحلتك معنا؟
            </h3>

            <p className="mt-3 max-w-xl mx-auto text-gray-200">
              انضم لآلاف الطلاب الذين بدؤوا رحلتهم التعليمية مع ريتال.
            </p>

            <Button
              asChild
              size="lg"
              className="mt-6 rounded-full bg-white text-black hover:bg-gray-200"
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