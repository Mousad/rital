import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { Crown, Globe, Database } from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedinIn,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import {
  ArrowLeft,
  Target,
  Eye,
  Heart,
  Users,
  GraduationCap,
  Building,
  Trophy,
} from "lucide-react";

const VALUES = [
  {
    icon: Target,
    title: "رسالتنا",
    description:
      "تمكين الطلاب من الوصول لأفضل الفرص التعليمية في العالم عبر خدمات  .",
  },
  {
    icon: Eye,
    title: "رؤيتنا",
    description:
      "أن نكون الشريك الأول في المنطقة للخدمات التعليمية الدولية المتكاملة.",
  },
  {
    icon: Heart,
    title: "قيمنا",
    description:
      "الأمانة، الشفافية، الالتزام، وخدمة الطالب أولاً قبل أي شيء آخر.",
  },
];

const STATS = [
  { icon: Users, value: "7000", label: "طالب سعيد" },
  { icon: GraduationCap, value: "50+", label: "جامعة شريكة" },
  { icon: Building, value: "12+", label: "سنة خبرة" },
  { icon: Trophy, value: "98%", label: "معدل رضا" },
];

const TEAM = [
  {
    name: "د. اية ناجي",
    role: "المديرة التنفيذية",
    icon: Crown,
    image: "/images/team1.jpeg",
    instagram: "#",
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "أ. أحمد",
    role: "مدير قسم البيانات",
    icon: Database,
    image: "/images/team4.jpeg",
    instagram: "#",
    linkedin: "#",
    facebook: "#",
  },

  {
    name: "أ. صفاء حامد",
    role: "مشرفة الدراسة في مصر",
    icon: GraduationCap,
    image: "/images/team2.jpeg",
    instagram: "#",
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "أ. عثمان",
    role: "مشرف الدراسة في الصين",
    icon: Globe,
    image: "/images/team3.jpeg",
    instagram: "#",
    linkedin: "#",
    facebook: "#",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <div className="relative py-8 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/servic.png"
            alt="education"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center text-white px-4">
          <p className="text-sm md:text-base mb-3 tracking-wider text-gray-200">
            عنّا
          </p>

          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            نحن ريتال للخدمات التعليمية
          </h1>
        </div>
      </div>

      {/* STORY */}
      <section className="py-8 md:py-24 bg-[#ecf0f0]">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-3xl overflow-hidden shadow-2xl ring-1 ring-primary/10">
              <Image
                src="/images/about.jpg"
                alt="فريق ريتال"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div>
              <SectionHeading
                eyebrow="قصتنا"
                title="من فكرة بسيطة إلى مؤسسة تعليمية رائدة"
                description=""
              />

              <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  بدأت ريتال كفكرة صغيرة عام 2013 على يد مجموعة من الخبراء في
                  المجال التعليمي، بهدف مساعدة الطلاب المصريين الراغبين في
                  الدراسة بالخارج
                </p>
                <p>
                  مع مرور السنوات، تطورت ريتال لتصبح واحدة من أهم المؤسسات
                  التعليمية في مصر، حيث قدمت خدماتها لأكثر من 5000 طالب وطالبة،
                  وساعدتهم في الالتحاق بأفضل الجامعات حول العالم
                </p>
                <p>
                  اليوم، تضم ريتال فريقًا من أفضل المستشارين التعليميين، وتقدم
                  مجموعة متنوعة من الخدمات التي تلبي احتياجات الطلاب في مختلف
                  المراحل التعليمية
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-24 bg-[#ecf0f0] overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl border border-[#27215f]/10 bg-[#f4f7f2] flex items-center justify-center">
                <img
                  src="/images/teim.jpeg"
                  alt="Rital Education"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#27215f]/10 bg-[#27215f]/5 px-4 py-2">
                <div className="h-2 w-2 rounded-full bg-[#27215f]" />

                <span className="text-sm font-medium text-[#27215f]">
                  عن ريتال التعليمية
                </span>
              </div>

              {/* Title */}
              <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-[#27215f]">
                ريتال التعليمية — القسم التعليمي التابع لشركة Nobate
              </h2>

              {/* Description */}
              <div className="mt-6 space-y-5 text-[#27215f]/75 leading-8 text-lg">
                <p>
                  ريتال التعليمية هي القسم التعليمي التابع لشركة Nobate في
                  جمهورية مصر العربية، والمتخصصة في تقديم خدمات الاستشارات
                  التعليمية والقبول الجامعي للطلاب السودانيين والعرب.
                </p>

                <p>
                  من خلال ريتال، نساعد الطلاب على فهم خياراتهم الدراسية، اختيار
                  المسار المناسب، تجهيز المستندات، ومتابعة إجراءات التقديم
                  للجامعات داخل مصر وخارجها، مع التركيز على الوضوح، المصداقية،
                  والمتابعة العملية.
                </p>
              </div>

              {/* Relation Box */}
              <div className="mt-8 rounded-3xl border border-[#27215f]/10 bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-[#27215f] mb-4">
                  العلاقة بين Nobate وريتال
                </h3>

                <div className="space-y-4 text-[#27215f]/75 leading-8">
                  <p>
                    Nobate هي الكيان القانوني المسؤول عن إدارة وتشغيل الخدمات،
                    بينما تعمل ريتال التعليمية كالقسم التعليمي والاسم التجاري
                    المتخصص في خدمات القبول الجامعي والاستشارات الدراسية.
                  </p>

                  <p>
                    تتم المعاملات والمستندات الرسمية باسم Nobate، بينما يتم
                    استخدام اسم ريتال التعليمية في التواصل مع الطلاب وتقديم
                    الخدمات التعليمية المتخصصة.
                  </p>
                </div>

                {/* English Statement */}
                <div className="mt-6 rounded-2xl bg-[#27215f]/5 border border-[#27215f]/10 p-4">
                  <p className="text-sm md:text-base text-[#27215f] leading-7 font-medium">
                    Rital Education is the educational division and commercial
                    brand operated by Nobate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <div className="relative flex flex-col items-center justify-center gap-11 bg-[#ecf0f0]">
        <div className="relative h-[188px] w-[360px] overflow-hidden rounded-[5px] border bg-white shadow-lg">
          <img
            src="/images/noobt.jpeg"
            alt="Nubatia"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <section className="py-20 md:py-24 lg:py-32  overflow-hidden bg-[#ecf0f0]">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#27215f]/5 border border-[#27215f]/10 mb-8">
              <div className="h-2 w-2 rounded-full bg-[#27215f]" />
              <span className="text-sm text-[#27215f] font-medium">قيمنا</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-[#27215f]">
              ما نؤمن به
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Card 1 */}
            <div className="group bg-gradient-to-br from-[#f8f8fb] to-[#eef1f7] border border-[#27215f]/10 rounded-[8px] p-5 md:p-8 hover:shadow-xl hover:border-[#27215f]/20 transition-all duration-500 hover:-translate-y-2 text-center">
              <div className="flex justify-center mb-5">
                <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#27215f]/5 border border-[#27215f]/10 group-hover:bg-[#27215f] transition-all duration-300">
                  <Target className="w-7 h-7 md:w-8 md:h-8 text-[#27215f] group-hover:text-white transition-colors" />
                </div>
              </div>

              <h3 className="text-base md:text-xl font-bold text-[#27215f] mb-3">
                التميز
              </h3>

              <p className="text-[#27215f]/70 leading-7 text-xs md:text-base">
                نسعى دائمًا
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-gradient-to-br from-[#f8f8fb] to-[#eef1f7] border border-[#27215f]/10 rounded-3xl p-5 md:p-8 hover:shadow-xl hover:border-[#27215f]/20 transition-all duration-500 hover:-translate-y-2 text-center">
              <div className="flex justify-center mb-5">
                <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#27215f]/5 border border-[#27215f]/10 group-hover:bg-[#27215f] transition-all duration-300">
                  <Heart className="w-7 h-7 md:w-8 md:h-8 text-[#27215f] group-hover:text-white transition-colors" />
                </div>
              </div>

              <h3 className="text-base md:text-xl font-bold text-[#27215f] mb-3">
                المصداقية
              </h3>

              <p className="text-[#27215f]/70 leading-7 text-xs md:text-base">
                نلتزم بالشفافية
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-gradient-to-br from-[#f8f8fb] to-[#eef1f7] border border-[#27215f]/10 rounded-3xl p-5 md:p-8 hover:shadow-xl hover:border-[#27215f]/20 transition-all duration-500 hover:-translate-y-2 text-center">
              <div className="flex justify-center mb-5">
                <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#27215f]/5 border border-[#27215f]/10 group-hover:bg-[#27215f] transition-all duration-300">
                  <Users className="w-7 h-7 md:w-8 md:h-8 text-[#27215f] group-hover:text-white transition-colors" />
                </div>
              </div>

              <h3 className="text-base md:text-xl font-bold text-[#27215f] mb-3">
                الاحترافية
              </h3>

              <p className="text-[#27215f]/70 leading-7 text-xs md:text-base">
                فريق متخصص
              </p>
            </div>

            {/* Card 4 */}
            <div className="group bg-gradient-to-br from-[#f8f8fb] to-[#eef1f7] border border-[#27215f]/10 rounded-3xl p-5 md:p-8 hover:shadow-xl hover:border-[#27215f]/20 transition-all duration-500 hover:-translate-y-2 text-center">
              <div className="flex justify-center mb-5">
                <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#27215f]/5 border border-[#27215f]/10 group-hover:bg-[#27215f] transition-all duration-300">
                  <Trophy className="w-7 h-7 md:w-8 md:h-8 text-[#27215f] group-hover:text-white transition-colors" />
                </div>
              </div>

              <h3 className="text-base md:text-xl font-bold text-[#27215f] mb-3">
                الابتكار
              </h3>

              <p className="text-[#27215f]/70 leading-7 text-xs md:text-base">
                نواكب التطورات
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-10 md:py-24 bg-[#ecf0f0]">
        {/* Background Blur */}
        <div className="absolute top-0 left-0 h-72 w-72 bg-primary/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 h-72 w-72 bg-accent/10 blur-3xl rounded-full" />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              {/* title */}
              <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-[#27215f]">
                شركاؤك في النجاح
              </h2>

              {/* description */}
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                في ريتال للخدمات التعليمية نؤمن أن لكل طالب حلم يستحق فرصة
                حقيقية. لذلك نقدم خدمات تعليمية متكاملة تشمل القبولات الجامعية،
                المنح الدراسية، التأشيرات، والاستشارات الأكاديمية بأعلى مستوى من
                الاحترافية.
              </p>

              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                هدفنا ليس فقط تقديم خدمة، بل بناء رحلة تعليمية ناجحة تمنح الطالب
                الثقة والدعم الكامل في كل خطوة.
              </p>

              {/* features */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-[12px] bg-white p-4 shadow-sm border border-border">
                  <h4 className="font-bold text-[#27215f] text-center">
                    خبرة طويلة
                  </h4>

                  <p className="mt-2 text-sm text-muted-foreground">
                    12 سنة في مجال الخدمات التعليمية.
                  </p>
                </div>

                <div className="rounded-[12px] bg-white p-4 shadow-sm border border-border">
                  <h4 className="font-bold text-[#27215f] text-center">
                    دعم كامل
                  </h4>

                  <p className="mt-2 text-sm text-muted-foreground">
                    متابعة مستمرة حتى بعد القبول والسفر.
                  </p>
                </div>
              </div>

              {/* button */}
              <div className="mt-8">
                <Button
                  asChild
                  className="rounded-full bg-[#27215f] hover:bg-[#1d1747]"
                >
                  <Link href="/contact">
                    احجز استشارة مجانية
                    <ArrowLeft className="mr-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-8 md:py-20 bg-[#ecf0f0]">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="[&_h2]:text-[#27215f]">
            <SectionHeading
              eyebrow="ما يميزنا"
              title="رسالتنا ورؤيتنا وقيمنا"
              description=""
            />
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {VALUES.map((v, index) => {
              const Icon = v.icon;

              return (
                <div
                  key={v.title}
                  className={`
          bg-card border border-border rounded-3xl p-5 md:p-7
          text-center hover:shadow-lg transition-all

          ${
            index === 2
              ? "col-span-2 mx-auto w-full max-w-xs md:col-span-1"
              : ""
          }
        `}
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#27215f] text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base md:text-xl font-bold text-[#27215f]">
                    {v.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm md:text-base leading-7 text-[#27215f]/80">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-8 md:py-20 bg-[#ecf0f0]">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="فريقنا"
            title="أشخاص يجعلون الفرق"
            description=""
          />

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-2">
            {TEAM.map((t) => (
              <div
                key={t.name}
                className="group bg-card border border-border rounded-[16px] overflow-hidden hover:shadow-xl transition-all"
              >
                {/* الصورة */}
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* SOCIAL */}
                  <div className="absolute inset-0 flex items-end justify-center pb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-3 bg-[#27215f] px-4 py-2 rounded-full shadow-lg text-white">
                      <a href={t.instagram}>
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="text-lg"
                        />
                      </a>

                      <a href={t.linkedin}>
                        <FontAwesomeIcon
                          icon={faLinkedinIn}
                          className="text-lg"
                        />
                      </a>

                      <a href={t.facebook}>
                        <FontAwesomeIcon
                          icon={faFacebookF}
                          className="text-lg"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                {/* الاسم + الوظيفة */}
                <div className="p-5 text-center text-[#27215f]">
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-xs text-[#27215f]/70">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-8 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/736x/6b/ea/c3/6beac3914fd768904cb963fed155aa5f.jpg"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-6 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold">
            جاهز لبدء رحلتك معنا؟
          </h3>

          <Button asChild className="mt-6 bg-white text-black">
            <Link href="/contact">احجز استشارة</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
