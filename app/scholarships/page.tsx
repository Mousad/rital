import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  ArrowLeft,
  Award,
  Globe,
  Sparkles,
  FileText,
  GraduationCap,
  IdCard,
  Languages,
  BadgeCheck,
  Check,
} from "lucide-react";

const TYPES = [
  {
    icon: Award,
    title: "منحة حكومية صينية كاملة",
    description:
      "منحة CSC الحكومية التي تغطي الرسوم الدراسية، السكن، بدل شهري، وتأمين صحي.",
    features: ["الرسوم الدراسية", "السكن الجامعي", "بدل شهري", "تأمين صحي"],
    tone: "primary",
  },
  {
    icon: Globe,
    title: "منح الجامعات الصينية",
    description:
      "منح مباشرة من الجامعات الصينية الكبرى لدعم الطلاب المتفوقين دولياً.",
    features: ["تخفيض رسوم", "سكن مجاني", "بدل جزئي"],
    tone: "accent",
  },
  {
    icon: Sparkles,
    title: "منح دراسية في مصر",
    description:
      "فرص منح في جامعات مصرية حكومية ومنح من الوكالة المصرية للشراكة.",
    features: ["رسوم مخفضة", "خصومات سكن", "إعفاءات جزئية"],
    tone: "primary",
  },
];

const REQUIREMENTS = [
  { icon: FileText, label: "نسخة من جواز السفر" },
  { icon: GraduationCap, label: "شهادة الثانوية العامة" },
  { icon: IdCard, label: "صورة شخصية حديثة" },
  { icon: Languages, label: "شهادة لغة (إن وجدت)" },
  { icon: BadgeCheck, label: "السجل الأكاديمي" },
  { icon: FileText, label: "رسالة تحفيزية" },
];

export default function ScholarshipsPage() {
  return (
    <>
      {/* HERO */}

      <div className="relative py-14 h-[40vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/mage.jpeg"
            alt="education"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <section className="py-6 md:py-20 bg-[#f4f7f2]">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-[#27215f] leading-tight">
                منح تعليمية متكاملة لمساعدتك في تحقيق أهدافك
              </h2>

              <p className="mt-4 text-[#27215f]/80 leading-relaxed">
                في ريتال التعليمية نساعد الطلاب في جميع مراحل رحلتهم التعليمية،
                بداية من الاستشارة واختيار التخصص المناسب، وحتى التقديم للجامعات
                واستخراج الشهادات والمتابعة الأكاديمية الكاملة.
              </p>

              <ul className="mt-6 space-y-3 text-sm md:text-base text-[#27215f]">
                <li className="flex gap-2">
                  <span className="text-[#f21e27]">✔</span>
                  استشارات تعليمية لاختيار أفضل تخصص وجامعة
                </li>

                <li className="flex gap-2">
                  <span className="text-[#f21e27]">✔</span>
                  التقديم للجامعات داخل مصر وخارجها
                </li>

                <li className="flex gap-2">
                  <span className="text-[#f21e27]">✔</span>
                  استخراج الشهادات والتصديقات الرسمية
                </li>

                <li className="flex gap-2">
                  <span className="text-[#f21e27]">✔</span>
                  متابعة إجراءات القبول والتسجيل الأكاديمي
                </li>

                <li className="flex gap-2">
                  <span className="text-[#f21e27]">✔</span>
                  دعم كامل للطلاب حتى بدء الدراسة والاستقرار
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="flex justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-[14px] bg-[#27215f] text-[#f4f7f2] hover:opacity-90 transition"
              >
                احجز استشارتك الآن
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TYPES */}
      <section className="py-8 md:py-20 bg-[#f4f7f2]">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="[&_*]:!text-[#27215f]">
            <SectionHeading
              eyebrow="أنواع المنح"
              title="منح تناسب جميع الطموحات"
              description="اختر من بين باقة متنوعة من المنح الدراسية في أفضل الدول."
            />
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {TYPES.map((t, idx) => {
              const Icon = t.icon;
              const highlight = idx === 0;

              return (
                <div
                  key={t.title}
                  className={`relative rounded-3xl p-6 md:p-7 border flex flex-col transition-all hover:-translate-y-1 hover:shadow-xl ${
                    highlight
                      ? "bg-[#27215f] text-primary-foreground border-primary shadow-xl lg:scale-[1.02]"
                      : "bg-card text-card-foreground border-border"
                  }`}
                >
                  {highlight && (
                    <span className="absolute top-5 left-5 rounded-full bg-[#fcfbf3] text-[#27215f] px-3 py-1 text-[11px] font-bold">
                      الأكثر طلباً
                    </span>
                  )}

                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                      highlight
                        ? "bg-[#fcfbf3] text-[#27215f]"
                        : "bg-[#27215f] text-[#fcfbf3]"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3
                    className={`mt-5 text-xl font-bold ${
                      highlight ? "text-primary-foreground" : "text-[#27215f]"
                    }`}
                  >
                    {t.title}
                  </h3>

                  <p
                    className={`mt-2 text-sm leading-relaxed flex-1 ${
                      highlight
                        ? "text-primary-foreground/85"
                        : "text-[#27215f]"
                    }`}
                  >
                    {t.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <span
                          className={`flex h-5 w-5 items-center justify-center rounded-full ${
                            highlight
                              ? "bg-[#fcfbf3] text-[#27215f]"
                              : "bg-[#27215f] text-[#fbfaf6]"
                          }`}
                        >
                          <Check className="h-3 w-3" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    size="sm"
                    className={`mt-6 rounded-full ${
                      highlight
                        ? "bg-[#fcfbf3] text-[#27215f] hover:bg-accent/90"
                        : "bg-[#27215f] text-primary-foreground hover:bg-primary/90"
                    }`}
                  >
                    <Link href="/contact?service=scholarships">
                      تقديم الطلب
                      <ArrowLeft className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="py-8 md:py-20 bg-[#f4f7f2]">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* IMAGE */}

            {/* TEXT */}
            <div>
              <div className="flex justify-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#e9f3ec] text-[#27215f] px-3.5 py-1 text-xs font-semibold">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  المتطلبات
                </span>
              </div>

              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#27215f] leading-tight text-center">
                مستندات التقديم
              </h2>

              <p className="mt-4 text-[#27215f] leading-relaxed">
                المتطلبات التالية هي الأكثر شيوعاً للتقديم على المنح، وقد تختلف
                حسب الجامعة والتخصص.
              </p>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 gap-3">
                {REQUIREMENTS.map((r) => {
                  const Icon = r.icon;

                  return (
                    <div
                      key={r.label}
                      className="bg-card border border-border rounded-2xl p-5 flex flex-col items-center justify-center text-center hover:shadow-md transition"
                    >
                      {/* Icon */}
                      <div className="flex h-12 w-12 items-center justify-center rounded-[8px]  text-[#27215f] mb-3">
                        <Icon className="h-5 w-5" />
                      </div>

                      {/* Text */}
                      <span className="text-sm font-medium text-[#27215f] leading-6">
                        {r.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 md:py-20 bg-[#f4f7f2]">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex justify-center mb-10">
            <div className="border border-[#101213] px-4 py-2">
              <h2 className="text-2xl md:text-4xl font-bold text-[#27215f]">
                الأوراق المطلوبة للتقديم
              </h2>
            </div>
          </div>

          {/* Box */}
          <div className="relative border border-[#101213] rounded- overflow-hidden">
            {/* Vertical Line */}
            <div className="absolute left-[65%] top-0 h-full w-px bg-[#101213]"></div>

            {/* Row 1 */}
            <div className="flex border-b border-[#101213]">
              <div className="w-[35%] p-4 flex items-center justify-start text-right">
                <h3 className="font-semibold text-[#27215f] text-[15px]">
                  {" "}
                  جواز السفر
                </h3>
              </div>
              <div className="w-[65%] p-4 text-muted-foreground text-sm leading-relaxed">
                ﻳﺸﺘﺮط ان ﻳﻜﻮن ﺳﺎري او ﻋﻠﻴﻪ ﺗﻤﺪﻳﺪ ﻟﻤﺪة 6 اﺷﻬﺮ ﻳﻤﻜﻦ
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex border-b border-[#101213]">
              <div className="w-[35%] p-4 flex items-center justify-start text-right">
                <h3 className="font-semibold text-[13px] text-[#27215f]">
                  {" "}
                  الشهادة الثانوية
                </h3>
              </div>
              <div className="w-[65%] p-4 text-muted-foreground text-sm leading-relaxed">
                في التقديم الإلكتروني يتم إرسال صورة من المستندات فقط، وبعد
                القبول يتم طلب الأصول.
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex border-b border-[#101213]">
              <div className="w-[35%] p-4 flex items-center justify-start text-right">
                <h3 className="font-semibold text-[14px] text-[#27215f]">
                  ﻛﺸﻒ ﻃﺒﻲ
                </h3>
              </div>
              <div className="w-[65%] p-4 text-muted-foreground text-sm leading-relaxed">
                ﻳﺴﺘﻠﻢ اﻟﻄﺎﻟﺐ ﻧﻤﻮذج pdf ﻟﻠﻜﺸﻒ اﻟﻄﺒﻲ ﻳﺘﻮﺟﻪ اﻟﻄﺎﻟﺐ اﻟﻲ اﻗﺮب ﻣﺴﺘﺸﻔﻲ
                وﻳﻘﻮم ﺑﻤﻠﺊ اﺳﺘﻤﺎرة اﻟﻜﺸﻒ اﻟﻄﺒﻲ ﻋﻠﻲ اﻟﻄﺎﻟﺐ
              </div>
            </div>

            {/* Row 4 */}
            <div className="flex">
              <div className="w-[35%] p-4 flex items-center justify-start text-right">
                <h3 className="font-semibold text-[14px] text-[#27215f]">
                  {" "}
                  ﻓﻴﺪﻳﻮ ﺗﻌﺮﻳﻔﻲ ﻟﻠﻄﺎﻟﺐ
                </h3>
              </div>
              <div className="w-[65%] p-4 text-muted-foreground text-sm leading-relaxed">
                ﻋﺒﺎرة ﻋﻦ ﻓﻴﺪﻳﻮ ﻗﺼﻴﺮ ﻳﻘﻮم اﻟﻄﺎﻟﺐ ﺑﺘﺴﺠﻠﻴﻪ ﻳﺘﺤﺪث ﻓﻴﻪ ﻋﻦ ﻧﻔﺴﻪ واﻟﺴﻠﻢ
                اﻟﺘﻌﻠﻴﻢ
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 md:py-24 bg-[#f4f7f2]">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="relative overflow-hidden rounded-[12px] text-white text-center p-8 md:p-12">
            {/* 🖼️ Background Image */}
            <div className="absolute inset-0">
              <img
                src="https://i.pinimg.com/736x/77/13/20/77132011e0fe9a7dd2a689d462a4ef05.jpg"
                alt="scholarship"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 🌑 Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10">
              <h3 className="mt-4 text-2xl md:text-3xl font-bold">
                منحتك على بعد خطوة واحدة
              </h3>

              <p className="mt-3 text-gray-200 max-w-xl mx-auto">
                دعنا نساعدك في الحصول على منحتك الدراسية.
              </p>

              <Button
                asChild
                size="lg"
                className="mt-6 rounded-[12px] bg-[#27215f] text-[#fcfbf3] hover:bg-accent/90 transition"
              >
                <Link href="/contact?service=scholarships">
                  تقديم
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/201001234567"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center h-12 w-12 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition hover:scale-110"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
      </a>
    </>
  );
}
