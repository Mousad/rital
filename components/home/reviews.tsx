"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { SectionHeading } from "@/components/site/section-heading"
import { Play, Quote, Star } from "lucide-react"

type Review = {
  name: string
  role: string
  quote: string
  gradient: string
}

const REVIEWS: Review[] = [
  {
    name: "أحمد الحسن",
    role: "طالب طب - جامعة تسينغهوا",
    quote:
      "ساعدتني ريتال في الحصول على منحة كاملة للدراسة في الصين. فريق متميز وخدمة احترافية من البداية للنهاية.",
    gradient: "from-brand-green to-brand-green-light",
  },
  {
    name: "سارة محمود",
    role: "طالبة هندسة - جامعة القاهرة",
    quote:
      "خدمة استخراج الشهادة كانت سريعة وسلسة، وتم التقديم للجامعة بسهولة تامة. أنصح بهم بشدة.",
    gradient: "from-accent to-brand-gold",
  },
  {
    name: "عمر خليل",
    role: "طالب ماجستير - جامعة بكين",
    quote:
      "تجربة رائعة، الفريق كان متابعاً لكل تفاصيل ملفي حتى وصلت للصين وبدأت دراستي بثقة.",
    gradient: "from-brand-green-light to-brand-green",
  },
  {
    name: "ليلى الشامي",
    role: "طالبة صيدلة - عين شمس",
    quote:
      "وفرت علي ريتال وقتاً وجهداً كبيرين. شكراً لكم على هذه الرحلة الرائعة والإنجاز.",
    gradient: "from-brand-gold to-accent",
  },
  {
    name: "محمد يوسف",
    role: "طالب علوم حاسوب - فودان",
    quote:
      "منحة كاملة في جامعة فودان بفضل فريق ريتال المميز. شكراً على كل التوجيه والدعم.",
    gradient: "from-brand-green to-accent",
  },
]

export function Reviews() {
  return (
    <section className="py-20 md:py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="شهادات طلابنا"
          title="قصص نجاح تلهمك"
          description="استمع لتجارب طلابنا الذين حققوا أحلامهم التعليمية معنا."
        />

        <div className="mt-12">
          <Carousel
            opts={{ align: "start", direction: "rtl", loop: true }}
            className="px-2"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {REVIEWS.map((review) => (
                <CarouselItem
                  key={review.name}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <ReviewCard review={review} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex items-center justify-center gap-3">
              <CarouselPrevious className="static translate-y-0 h-10 w-10 rounded-full border-border bg-background hover:bg-secondary" />
              <CarouselNext className="static translate-y-0 h-10 w-10 rounded-full border-border bg-background hover:bg-secondary" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="h-full bg-card rounded-3xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col">
      {/* Video thumbnail */}
      <div
        className={`relative aspect-[16/10] bg-gradient-to-br ${review.gradient} overflow-hidden`}
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.25),transparent_60%)]"
        />
        <button
          type="button"
          aria-label="تشغيل الفيديو"
          className="absolute inset-0 flex items-center justify-center group"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-background/95 backdrop-blur-sm text-primary shadow-lg group-hover:scale-110 transition-transform">
            <Play className="h-6 w-6 fill-current translate-x-0.5" />
          </span>
        </button>
        <div className="absolute bottom-3 right-3 rounded-full bg-background/95 px-3 py-1 text-[11px] font-semibold text-primary">
          فيديو
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <Quote className="h-6 w-6 text-accent" />
        <p className="mt-3 text-foreground/90 leading-relaxed text-pretty">
          {`"${review.quote}"`}
        </p>

        <div className="mt-5 pt-5 border-t border-border flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className={`h-11 w-11 rounded-full bg-gradient-to-br ${review.gradient}`}
              aria-hidden
            />
            <div>
              <p className="font-semibold text-foreground text-sm">
                {review.name}
              </p>
              <p className="text-xs text-muted-foreground">{review.role}</p>
            </div>
          </div>
          <div className="flex items-center gap-0.5 text-accent">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-current" />
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
