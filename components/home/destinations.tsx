import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin } from "lucide-react"
import { SectionHeading } from "@/components/site/section-heading"

const DESTINATIONS = [
  {
    href: "/study-china",
    title: "الدراسة في الصين",
    description:
      "فرص استثنائية في أعرق الجامعات الصينية، بتكاليف معقولة ومنح دراسية متنوعة لجميع التخصصات.",
    image: "/images/china.jpg",
    tag: "الصين",
    stats: [
      { v: "30+", l: "جامعة" },
      { v: "100%", l: "منح متاحة" },
    ],
  },
  {
    href: "/study-egypt",
    title: "الدراسة في مصر",
    description:
      "ادرس في جامعات مصرية عريقة تجمع بين الجودة الأكاديمية والقرب الثقافي، بخيارات إقامة مريحة.",
    image: "/images/egypt.jpg",
    tag: "مصر",
    stats: [
      { v: "20+", l: "جامعة" },
      { v: "بأسعار", l: "تنافسية" },
    ],
  },
]

export function Destinations() {
  return (
    <section className="py-20 md:py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="وجهات الدراسة"
          title="ادرس في أفضل الدول"
          description="اختر وجهتك الدراسية واستفد من خبرتنا الكاملة في التقديم والقبول."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {DESTINATIONS.map((dest) => (
            <Link
              key={dest.href}
              href={dest.href}
              className="group relative overflow-hidden rounded-3xl bg-card border border-border hover:shadow-xl transition-all duration-500"
            >
              <div className="relative aspect-[5/4]">
                <Image
                  src={dest.image || "/placeholder.svg"}
                  alt={dest.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />

                <span className="absolute top-5 right-5 inline-flex items-center gap-1.5 rounded-full bg-background/95 backdrop-blur-sm text-primary px-3 py-1.5 text-xs font-semibold shadow-sm">
                  <MapPin className="h-3.5 w-3.5 text-accent" />
                  {dest.tag}
                </span>

                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7 text-primary-foreground">
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {dest.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-primary-foreground/85 max-w-md leading-relaxed text-pretty">
                    {dest.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-5">
                      {dest.stats.map((s) => (
                        <div key={s.l}>
                          <div className="text-lg font-bold text-accent">
                            {s.v}
                          </div>
                          <div className="text-[11px] text-primary-foreground/70">
                            {s.l}
                          </div>
                        </div>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 transition-colors px-4 h-9 text-xs font-semibold">
                      اكتشف المزيد
                      <ArrowLeft className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
