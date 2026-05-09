import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Award,
  BookOpenCheck,
  FileCheck,
  GraduationCap,
  Globe2,
  Plane,
  LanguagesIcon,
  UsersRound,
} from "lucide-react";

const SERVICES = [
  {
    icon: FileCheck,
    title: "استخراج الشهادات",
    description:
      "استخراج الشهادة الثانوية وشهادة الصف الثامن بطريقة قانونية ومعتمدة.",
    href: "/certificates",
    tag: "شائعة",
  },
  {
    icon: Globe2,
    title: "الدراسة في الصين",
    description: "التقديم للجامعات الصينية والحصول على منح حكومية وجامعية.",
    href: "/study-china",
    tag: "مميزة",
  },
  {
    icon: GraduationCap,
    title: "الدراسة في مصر",
    description: "التسجيل في الجامعات المصرية الحكومية والخاصة بسهولة تامة.",
    href: "/study-egypt",
  },
  {
    icon: Award,
    title: "المنح الدراسية",
    description: "التقديم على المنح الكاملة والجزئية في مختلف دول العالم.",
    href: "/scholarships",
    
  },
  {
    icon: BookOpenCheck,
    title: "الاستشارات التعليمية",
    description: "توجيه شخصي لاختيار التخصص والجامعة والمسار الأمثل لمستقبلك.",
    href: "/contact?service=consultation",
  },
  {
    icon: Plane,
    title: "إجراءات السفر",
    description:
      "ترتيبات الفيزا وتذاكر الطيران والسكن للطلاب الملتحقين بالجامعات.",
    href: "/contact?service=other",
  },
  {
    icon: LanguagesIcon,
    title: "دورات اللغة",
    description:
      "دورات تحضيرية في اللغة الصينية والإنجليزية قبل البدء بالدراسة.",
    href: "/contact?service=other",
  },
  {
    icon: UsersRound,
    title: "المتابعة بعد الوصول",
    description:
      "دعم متواصل بعد وصول الطالب للدولة الدراسية وخلال أيامه الأولى.",
    href: "/contact?service=other",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <div className="relative py-12 h-[30vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/servic.png"
            alt="education"
            fill
            className="object-cover"
          />
        </div>

        {/* Overlay */}
      </div>

      {/* SERVICES */}
      <section className="py-10 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          

           
  
   


<div className="[&_*]:!text-[#27215f]">
          <SectionHeading
            eyebrow="ما نقدمه"
            title="اختر الخدمة التي تحتاجها"
            description="
            نوفر لك كل ما تحتاجه في رحلتك التعليمية، من استخراج الشهادات إلى الوصول
            للجامعة وما بعدها، بخبرة تمتد لسنوات وخدمات موثوقة.
          "
          />
        </div>

          <div className="mt-18 grid gap-4 grid-cols-2 lg:grid-cols-3">
  {SERVICES.map((s) => {
    const Icon = s.icon;

    return (
      <Link
        key={s.title}
        href={s.href}
        className="group relative rounded-[12px] border border-border bg-card p-5 pt-12 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl"
      >
        {/* Icon */}
       <div className="absolute  -top-3 left-1/2 -translate-x-1/2 flex items-center justify-center">
  <div className="flex h-14 w-14 items-center justify-center rounded-[12px] bg-[#27215f] text-[#f4f7f2] shadow-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
    <Icon className="h-6 w-6" />
  </div>
</div>

        {/* Title */}
       <h3 className="text-[12px] mt-3  font-bold text-[#27215f] transition-colors group-hover:text-primary text-right whitespace-nowrap overflow-hidden text-ellipsis">
  {s.title}
</h3>

        {/* Description */}
        <p className="mt-5 text-sm leading-4 text-muted-foreground text-right min-h-[80px]">
          {s.description}
        </p>

        {/* Button */}
        <div className="mt-2 flex items-center justify-start gap-3 text-sm font-semibold text-[#27215f]">
          <span>اكتشف </span>

          <ArrowLeft className="h-4 w-4 transition-transform text-[#f21e27] duration-300 group-hover:-translate-x-1" />
        </div>
      </Link>
    );
  })}
</div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/736x/6b/ea/c3/6beac3914fd768904cb963fed155aa5f.jpg"
            alt="students"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-6">
          <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 text-center shadow-lg text-white">
            <h3 className="text-2xl md:text-3xl font-bold">
              لست متأكداً من الخدمة المناسبة؟
            </h3>

            <p className="mt-3 max-w-xl mx-auto text-gray-200">
              احجز استشارة مجانية مع خبرائنا وسنرشدك للخيار الأنسب لك.
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
  );
}
