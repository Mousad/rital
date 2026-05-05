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
  video: string
  gradient: string
}

const REVIEWS: Review[] = [
  {
    name: "أحمد الحسن",
    role: "طالب طب - جامعة تسينغهوا",
    video: "https://player.vimeo.com/video/1091953434?h=0&autopause=0&player_id=0&app_id=58479",
    gradient: "",
  },
  {
    name: "سارة محمود",
    role: "طالبة هندسة - جامعة القاهرة",
    video: "https://player.vimeo.com/video/1091954450?h=b3a706049a&badge=0&autopause=0&player_id=0&app_id=58479",
    gradient: "from-accent to-brand-gold",
  },
  {
    name: "عمر خليل",
    role: "طالب ماجستير - جامعة بكين",
    video: "https://player.vimeo.com/video/1091953434?h=0&autopause=0&player_id=0&app_id=58479",
    gradient: "from-brand-green-light to-brand-green",
  },
  {
    name: "ليلى الشامي",
    role: "طالبة صيدلة - عين شمس",
    video: "https://player.vimeo.com/video/1091953434?h=0&autopause=0&player_id=0&app_id=58479",
    gradient: "from-brand-gold to-accent",
  },
  {
    name: "محمد يوسف",
    role: "طالب علوم حاسوب - فودان",
    video: "https://player.vimeo.com/video/1091953434?h=0&autopause=0&player_id=0&app_id=58479",
    gradient: "from-brand-green to-accent",
  },
]

export function Reviews() {
  return (
    <section className="py-8 md:py-24 bg-secondary/40">
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
                  className="pl-1 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
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
    <article className="h-full bg-[#fbfaf6] rounded-3xl border border-border overflow shadow-sm hover:shadow-lg transition-shadow flex flex-col">

      {/* 🎥 Video */}
     <div className="relative aspect-square bg-[#1b4332] overflow-hidden">

  <iframe
    src={review.video}
    className="absolute inset-0 w-full h-full"
    frameBorder="0"
    allow="autoplay; fullscreen; picture-in-picture"
    allowFullScreen
    title={review.name}
  />

  {/* overlay */}
  <div className="absolute inset-0 bg-black/20 pointer-events-none" />

  {/* play button UI (اختياري شكلي فقط) */}
  <div className="absolute inset-0 flex items-center justify-center">
    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-background/90 text-primary shadow-lg">
      ▶
    </span>
  </div>

  <div className="absolute bottom-3 right-3 rounded-full bg-background/95 px-3 py-1 text-[11px] font-semibold text-primary">
    فيديو
  </div>
</div>

      {/* 🧾 Content (ما اتغيرش غير تحويل النص) */}
      <div className="p-6 flex-1 flex flex-col">
       

        <p className="mt-3 text-foreground/90 leading-relaxed text-pretty">
          تجربة فيديو حقيقية من أحد طلابنا
        </p>

        <div className="mt-5 pt-5 border-t border-border flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className={`h-11 w-11 rounded-full bg-gradient-to-br ${review.gradient}`}
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