"use client";

import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionHeading } from "@/components/site/section-heading";

type Review = {
  name: string;
  role: string;
  video: string;
  gradient: string;
};

const REVIEWS: Review[] = [
  {
    name: "أحمد الحسن",
    role: "طلابنا يصفون ريتال في كلمة واحدة وما تعنيه لهم",
    video:
      "https://player.vimeo.com/video/1091953434?h=0&autopause=0&player_id=0&app_id=58479",
    gradient: "",
  },
  {
    name: "سارة محمود",
    role: "طلاب سودانيون يشاركون تجربتهم في التقديم أونلاين بالكامل",
    video: "https://player.vimeo.com/video/1091955175?h=a4700a47ac",
    gradient: "",
  },
  {
    name: "عمر خليل",
    role: "طالب ماجستير - جامعة بكين",
    video:
      "https://player.vimeo.com/video/1091953434?h=0&autopause=0&player_id=0&app_id=58479",
    gradient: "",
  },
];

export function Reviews() {
  return (
    <section className="py-8 md:py-24 bg-[#f4f7f2]">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="[&_*]:!text-[#27215f]">
          <SectionHeading
            eyebrow="شهادات طلابنا"
            title="قصص نجاح تلهمك"
            description="استمع لتجارب طلابنا الذين حققوا أحلامهم التعليمية معنا."
          />
        </div>

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
  );
}

function ReviewCard({ review }: { review: Review }) {
  const [playing, setPlaying] = useState(false);

  return (
    <article className="h-full bg-[#fbfaf6] rounded-[12px] border border-border shadow-sm hover:shadow-lg transition-shadow flex flex-col overflow-hidden">
      
      {/* 🎥 Video */}
      <div
        className="relative w-full h-[320px] md:h-[420px] bg-black overflow-hidden cursor-pointer"
        onClick={() => setPlaying(true)}
      >
        <iframe
          src={playing ? review.video + "?autoplay=1" : review.video}
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={review.name}
        />

        {/* overlay فقط قبل التشغيل */}
        {!playing && (
          <>
            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-[#27215f] shadow-lg text-xl">
                ▶
              </span>
            </div>
          </>
        )}

        <div className="absolute bottom-3 right-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-[#27215f]">
          فيديو
        </div>
      </div>

      {/* 🧾 Content */}
      <div className="p-6 flex-1 flex flex-col">
        <p className="mt-3 text-[#27215f]/80 leading-relaxed">
          تجربة فيديو حقيقية من أحد طلابنا
        </p>
      </div>
    </article>
  );
}