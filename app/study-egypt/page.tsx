import Image from "next/image";
import { FileText } from "lucide-react";
import Link from "next/link";

import { PageHero } from "@/components/site/page-hero";
import { Timeline } from "@/components/site/timeline";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  ArrowLeft,
  Landmark,
  Languages,
  HeartHandshake,
  Stethoscope,
  Scale,
  Building2,
  Briefcase,
  BookOpen,
  Palette,
  Cpu,
  GraduationCap,
} from "lucide-react";

const WHY_CARDS = [
  {
    icon: Landmark,
    title: "جامعات عريقة",
    description:
      "جامعات مصرية بتاريخ طويل في التعليم ومخرجات أكاديمية معترف بها عربياً ودولياً.",
  },
  {
    icon: Languages,
    title: "الدراسة بالعربية",
    description:
      "إمكانية الدراسة باللغة العربية في كثير من التخصصات مع خيار الإنجليزية أيضاً.",
  },
  {
    icon: HeartHandshake,
    title: "قرب ثقافي",
    description:
      "بيئة عربية مألوفة تجعل اندماجك سريعاً وسهلاً في المجتمع الجامعي.",
  },
];

const UNIVERSITIES = [
  {
    short: "CU",
    name: "Cairo University",
    ar: "جامعة القاهرة",
    rank: "الأقدم",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU0tC7Tde8prBk71kR0q8X4_ZzjYb5U6H4Fw&s",
    image:
      "https://i.pinimg.com/736x/87/88/be/8788be8848f6be42891703ba35bf9245.jpg",
  },
  {
    short: "ASU",
    name: "Ain Shams University",
    ar: "جامعة عين شمس",
    rank: "عريقة",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPexnp__kxYwObIwrPlJUGiJ9BTq5l316E5A&s",
    image:
      "https://i.pinimg.com/736x/4f/70/4f/4f704fe380b9553009c855b7b8b9b489.jpg",
  },
  {
    short: "AU",
    name: "Alexandria University",
    ar: "جامعة الإسكندرية",
    rank: "رائدة",
    logo: "https://scu.eg/storage/2023/05/%D8%A7%D9%84%D8%A7%D8%B3%D9%83%D9%86%D8%AF%D8%B1%D9%8A%D8%A9-%D8%A7%D9%84%D8%A7%D9%87%D9%84%D9%8A%D8%A9.png",
    image:
      "https://i.pinimg.com/1200x/9f/d7/b4/9fd7b4a50d8d297c69fc0c47726da31c.jpg",
  },
  {
    short: "AUC",
    name: "The American University in Cairo",
    ar: "الجامعة الأمريكية",
    rank: "دولية",
    logo: "https://www.universitiesegypt.com/ImageHandler.ashx?Id=12734&SS=2f4b759a533e4ad5b1db622ff646146c",
    image:
      "https://www.aucegypt.edu/sites/default/files/styles/large_widget/public/2020-03/auc.jpg?itok=rMovBrF8",
  },
  {
    short: "HU",
    name: "Helwan University",
    ar: "جامعة حلوان",
    rank: "متخصصة",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMSaoo1LwM8qdso_B6VVPs7ffGqJ-nXDdiA&s",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1d/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9_%D8%AD%D9%84%D9%88%D8%A7%D9%86.jpg",
  },
  {
    short: "MU",
    name: "Mansoura University",
    ar: "جامعة المنصورة",
    rank: "معتمدة",
    logo: "https://upload.wikimedia.org/wikipedia/ar/5/5e/%D8%B4%D8%B9%D8%A7%D8%B1_%D8%AC%D8%A7%D9%85%D8%B9%D8%A9_%D8%A7%D9%84%D9%85%D9%86%D8%B5%D9%88%D8%B1%D8%A9.png",
    image:
      "https://oktamam.com/wp-content/uploads/2024/03/mansoura-university-campus.jpg.webp",
  },
];

const MAJORS = [
  { icon: Stethoscope, label: "الطب والصيدلة" },
  { icon: Scale, label: "الحقوق والشريعة" },
  { icon: Building2, label: "الهندسة" },
  { icon: Briefcase, label: "التجارة والإدارة" },
  { icon: BookOpen, label: "الآداب واللغات" },
  { icon: Palette, label: "الفنون الجميلة" },
  { icon: Cpu, label: "علوم الحاسوب" },
  { icon: GraduationCap, label: "التربية والتعليم" },
];

const STEPS = [
  { title: "التقييم", description: "تقييم ملفك الأكاديمي والشهادات ." },
  { title: "اختيار الجامعة", description: "اختيار الجامعة والتخصص الأنسب." },
  { title: "التقديم", description: "إجراءات التقديم والأوراق الرسمية." },
  { title: "القبول", description: "استلام القبول المبدئي والنهائي." },
  { title: "السفر والإقامة", description: "ترتيبات السفر والسكن في مصر." },
];

export default function StudyEgyptPage() {
  return (
    <>
      <div className="relative py-8 overflow-hidden ">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/cain.jpeg"
            alt="study in china"
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-sm md:text-base mb-3 tracking-wider text-gray-200">
            الدراسة في مصر
          </p>

          <h1 className="text-3xl  md:text-5xl font-bold mb-6 leading-tight">
            الدراسة في أرض الفراعنة
          </h1>

          <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-200 mb-6">
            ادرس في جامعات مصرية معتمدة تجمع بين الجودة الأكاديمية والبيئة
            العربية المألوفة والتكاليف المعقولة.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-[12px] bg-[#27215f] text-white hover:bg-[#27215f]"
            >
              <Link href="/contact?service=study-egypt">
                ابدأ التقديم
                <ArrowLeft className="h-4 w-4 mr-1" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-[10px] border-white/30 text-[#27215f] hover:bg-[#f4f7f2]"
            >
              <Link href="#universities">الجامعات</Link>
            </Button>
          </div>
        </div>
      </div>

      <section className="py-6 md:py-20 bg-[#f4f7f2]">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div>
              <h2 className="text-2xl text-[#27215f] md:text-4xl font-bold ">
                كيف ريتال تساعدك في تحقيق حلمك الدراسي؟
              </h2>

              <p className="mt-4 text-[#27215f] leading-relaxed">
                نحن في ريتال نرافقك خطوة بخطوة من لحظة اختيار الدولة والجامعة
                المناسبة، وحتى القبول النهائي والسفر، مع متابعة كاملة لكل تفاصيل
                التقديم.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-[#27215f]">
                <li>
                  <span className="text-[#f21e27]">✔</span> اختيار الجامعة
                  والتخصص المناسب حسب ملفك
                </li>
                <li>
                  <span className="text-[#f21e27]">✔</span> تجهيز وتدقيق جميع
                  الأوراق المطلوبة
                </li>
                <li>
                  <span className="text-[#f21e27]">✔</span> التقديم للجامعات
                  والمنح الدراسية
                </li>
                <li>
                  <span className="text-[#f21e27]">✔</span> متابعة القبول
                  وإجراءات الفيزا
                </li>
                <li>
                  <span className="text-[#f21e27]">✔</span> دعم كامل حتى الوصول
                  وبدء الدراسة
                </li>
              </ul>
            </div>
            <div className="mt-0 flex justify-center">
              <a
                href="/study-egypt.pdf"
                download
                className="inline-flex items-center px-5 py-2 rounded-[12px] bg-[#27215f] text-[#f4f7f2]"
              >
                المزيد
              </a>
            </div>

            {/* Image */}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-[#f4f7f2]">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex justify-center mb-10">
            <div className="border border-[#101213] px-8 py-4">
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
                  شهادة الميلاد
                </h3>
              </div>
              <div className="w-[65%] p-4 text-muted-foreground text-sm leading-relaxed">
                ﺻﻮرة ﻓﻲ اﻟﻤﺮﺣﻠﺔ اﻻوﻟﻲ ﻣﻦ اﻟﺘﻘﺪﻳﻢ واﻻﺻﻞ ﺑﻌﺪ اﻟﻘﺒﻮل .
              </div>
            </div>

            {/* Row 4 */}
            <div className="flex">
              <div className="w-[35%] p-4 flex items-center justify-start text-right">
                <h3 className="font-semibold text-[14px] text-[#27215f]">
                  {" "}
                  صور شخصية
                </h3>
              </div>
              <div className="w-[65%] p-4 text-muted-foreground text-sm leading-relaxed">
                ﻋﺪد 8 ﺻﻮر ﺷﺨﺼﻴﺔ ﺑﺨﻠﻔﻴﺔ ﺑﻴﻀﺎء ﻳﺸﺘﺮط ان ﺗﻜﻮن ﺣﺪﻳﺜﺔ
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="pb-10 md:pb-20 bg-[#f4f7f2]">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="[&_h2]:text-[#27215f]">
            <SectionHeading
              eyebrow="لماذا مصر؟"
              title="مميزات الدراسة في مصر"
              description="أسباب قوية تجعل مصر خياراً مثالياً لإكمال دراستك."
            />
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-5">
            {WHY_CARDS.map((c, index) => {
              const Icon = c.icon;

              return (
                <div
                  key={c.title}
                  className={`
          bg-card border border-border
          rounded-3xl
          p-4 md:p-7
          hover:border-primary/30
          hover:shadow-lg
          transition-all
          text-center md:text-right
          flex flex-col items-center md:items-start

          ${index === 2 ? "col-span-2 w-[70%] mx-auto md:col-span-1 md:w-full" : ""}
        `}
                >
                  {/* Icon */}
                  <div
                    className="
            flex h-12 w-12 md:h-14 md:w-14
            items-center justify-center
            rounded-2xl
            bg-[#27215f]
            text-[#f4f7f2]
          "
                  >
                    <Icon className="h-5 w-5 md:h-6 md:w-6" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-sm md:text-lg font-bold text-foreground">
                    {c.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-[12px] md:text-sm text-muted-foreground leading-relaxed">
                    {c.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Universities */}
      <section id="universities" className="py-7 md:py-20 bg-[#f4f7f2]">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="[&_h2]:text-[#27215f] [&_p]:text-[#27215f] [&_span]:text-[#27215f] [&_*]:text-[#27215f]">
            <SectionHeading
              eyebrow="الجامعات الشريكة"
              title="أعرق الجامعات المصرية"
              description="نتعاون مع أفضل الجامعات المصرية الحكومية والخاصة."
            />
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-2">
            {UNIVERSITIES.map((u) => (
              <div
                key={u.short}
                className="group relative overflow-hidden rounded-[8px] border border-border bg-card hover:shadow-xl transition-all"
              >
                {/* Image */}
                <div className="relative h-28 w-full">
                  <img
                    src={u.image}
                    alt={u.name}
                    className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-4 text-center space-y-2">
                  {/* Logo */}
                  <div className="flex justify-center -mt-10">
                    <div className="h-14 w-14 rounded-xl bg-white z-50 shadow-md border flex items-center justify-center">
                      <img
                        src={u.logo}
                        alt={u.short}
                        className="h-8 w-8 object-contain"
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <h4 className="font-semibold text-sm text-[#27215f] leading-snug">
                    {u.ar}
                  </h4>

                  {/* Rank badge */}
                  <span className="inline-block text-xs text-[#f21e27] font-medium">
                    {u.rank}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Majors */}
      <section className="py-8 md:py-20 bg-[#f4f7f2]">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="[&_h2]:text-[#27215f] [&_p]:text-[#27215f] [&_*]:text-[#27215f]">
            <SectionHeading
              title="تخصصات متنوعة في متناولك"
              description="اختر من بين مئات التخصصات المتاحة في الجامعات المصرية."
            />
          </div>
          <div className="mt-12">
            {/* Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1">
              {MAJORS.map((m) => {
                const Icon = m.icon;

                return (
                  <div
                    key={m.label}
                    className="group bg-card border border-border rounded-[8px] p-5 flex flex-col items-center text-center gap-3 hover:border-primary/40 hover:shadow-md transition-all"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#27215f] text-[#f4f7f2] group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="text-sm font-semibold text-[#27215f]">
                      {m.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Single Button */}
            <div className="mt-6 flex justify-center">
              <Link href="/contact">
                <button className="px-6 py-2 text-sm bg-[#27215f] rounded-[8px] text-[#f4f7f2] hover:bg-[#1f1b4a] transition">
                  تقدّم
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-8 md:py-20 bg-[#f4f7f2]">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="[&_h2]:text-[#27215f] [&_p]:text-[#27215f] [&_span]:text-[#27215f]">
            <SectionHeading
              eyebrow="خطواتك معنا"
              title="من التقديم إلى القبول"
              description="خمس خطوات مبسطة للالتحاق بالجامعات المصرية."
            />
          </div>
          <div className="mt-8 bg-card border border-border rounded-3xl p-6 md:p-10">
            <Timeline steps={STEPS} />
          </div>
        </div>
      </section>

      <section className="py-6 md:py-20 bg-[#f4f7f2]">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-10 text-center">
            <div className="inline-block border border-[#101213] rounded-[5px] px-6 py-3">
              <h2 className="text-2xl text-[#27215f] md:text-4xl font-bold">
                اﻟﺨــــــــــــــــدمات
              </h2>
            </div>
          </div>

          <div className="relative border border-[#101213]  overflow-hidden">
            {/* vertical line */}
            <div className="absolute left-[36%] top-0 h-full w-px bg-[#3c3c3c]"></div>

            {/* Header */}
            <div className="flex bg-secondary/30 border-b border-[#3c3c3c]">
              <div className="w-[65%] p-4 text-right text-[#27215f] font-bold">
                اﻟﺨـــــــــــــــــــــــــﺪﻣﺔ
              </div>
              <div className="w-[35%] p-4 text-right font-bold text-[#f21e27]">
                الرسوم
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex border-b border-[#101213]">
              <div className="w-[65%] p-4 text-sm  text-[#27215f]">
                خدمات التنسيق
              </div>
              <div className="w-[35%] p-4 text-right font-semibold text-[#f21e27]">
                172 دولار
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex border-b border-[#101213]">
              <div className="w-[65%] p-4 text-sm text-[#27215f]">
                تأجيل القيد (تجميد)
              </div>
              <div className="w-[35%] p-4 text-right font-semibold text-[#f21e27]">
                150 دولار
              </div>
            </div>

            {/* Row 4 */}
            <div className="flex border-b border-[#101213]">
              <div className="w-[65%] p-4 text-sm text-[#27215f]">
                إعادة ترشيح (لكل عام)
              </div>
              <div className="w-[35%] p-4 text-right font-semibold text-[#f21e27]">
                150 دولار
              </div>
            </div>

            {/* Row 5 */}
            <div className="flex border-b border-[#101213]">
              <div className="w-[65%] p-4 text-sm text-[#27215f]">
                استثناء شرط حداثة المؤهل
              </div>
              <div className="w-[35%] p-4 text-right font-semibold text-[#f21e27]">
                300 دولار
              </div>
            </div>

            {/* Row 6 */}
            <div className="flex border-b border-[#101213]">
              <div className="w-[65%] p-4 text-sm  text-[#27215f]">
                القيد الجامعي
              </div>
              <div className="w-[35%] p-4 text-right font-semibold text-[#f21e27]">
                1500 دولار
              </div>
            </div>

            {/* Row 7 */}
            <div className="flex border-b border-[#101213]">
              <div className="w-[65%] p-4 text-sm text-[#27215f]">نقل قيد</div>
              <div className="w-[35%] p-4 text-right font-semibold text-[#f21e27]">
                1000 دولار
              </div>
            </div>

            {/* Row 8 */}
            <div className="flex border-b border-[#101213]">
              <div className="w-[65%] p-4 text-sm text-[#27215f]">
                تعديل ترشيح
              </div>
              <div className="w-[35%] p-4 text-right font-semibold text-[#f21e27]">
                250 دولار
              </div>
            </div>

            {/* Row 9 */}
            <div className="flex border-b border-[#101213]">
              <div className="w-[65%] p-4 text-sm text-[#27215f]">سحب ملف</div>
              <div className="w-[35%] p-4 text-right font-semibold text-[#f21e27]">
                1000 دولار
              </div>
            </div>

            {/* Row 10 */}
            <div className="flex">
              <div className="w-[65%] p-4 text-sm text-[#27215f]">
                تحويل من الخارج
              </div>
              <div className="w-[35%] p-4 text-right font-semibold text-[#f21e27]">
                1 دولار
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-[#f4f7f2]">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          {/* Wrapper */}
          <div className="relative">
            {/* 👉 Hint Arrow */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2 z-10 pointer-events-none animate-bounce">
              <div className="bg-black/40 text-white p-2 rounded-full text-xl">
                →
              </div>
            </div>

            {/* Slider */}
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide">
              {[
                "https://i.pinimg.com/736x/b5/b1/ae/b5b1ae0ea9440f6fe54339a11154ddd6.jpg",
                "https://i.pinimg.com/736x/8d/52/b0/8d52b04e2d2e4975673a3c94ac1e6df5.jpg",
                "https://i.pinimg.com/1200x/17/9d/e1/179de1afe096d5602ba6d94646520183.jpg",
                "https://i.pinimg.com/736x/71/5e/40/715e40599b335ded54efce0e5c192dcf.jpg",
                "https://i.pinimg.com/webp/1200x/b3/85/fe/b385fe50daeacc53edf7abbef6233472.webp",
                "https://i.pinimg.com/736x/a5/02/9a/a5029a21754784022ba39f1ecdf87e29.jpg",
              ].map((img, i) => (
                <div
                  key={i}
                  className="min-w-full md:min-w-[38%] lg:min-w-[22%] snap-center"
                >
                  <div className="relative aspect-[3/3] rounded-[12px] overflow-hidden shadow-xl">
                    <Image
                      src={img}
                      alt={`image-${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* 👉 Swipe Text */}
            <p className="text-center text-sm text-muted-foreground mt-3">
              اسحب لعرض المزيد ←
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-8 md:py-24 bg-[#f4f7f2]">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="relative overflow-hidden rounded-[9px] text-white">
            {/* Background Image */}
            <img
              src="https://i.pinimg.com/736x/98/88/9d/98889d8bef79aba23b639ad2dcc70b9c.jpg"
              alt="Study in China"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-balance">
                جاهز للدراسة في مصر؟
              </h3>

              <p className="mt-3 text-primary-foreground/80 max-w-xl mx-auto">
                احصل على استشارة مجانية الآن ودعنا نخطط معاً لمستقبلك.
              </p>

              {/* Buttons */}
              <div className="mt-2 flex items-center justify-center gap-3 whitespace-nowrap">
                {/* Book Consultation */}
                <Button
                  asChild
                  size="lg"
                  className="rounded-[13px] bg-[#27215f] text-[#f4f7f2] hover:bg-accent/90"
                >
                  <Link href="/contact?service=study-china">
                    احجز استشارتك
                    <ArrowLeft className="h-4 w-4 mr-1" />
                  </Link>
                </Button>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/201234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-[12px] border border-white/30 px-6 py-2 text-white hover:bg-white/10 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-green-500"
                  >
                    <path d="M16.001 3C9.373 3 4 8.373 4 15.001c0 2.647.865 5.091 2.329 7.079L5 29l7.118-1.309A11.93 11.93 0 0016.001 27c6.628 0 12.001-5.373 12.001-11.999C28.002 8.373 22.629 3 16.001 3zm0 21.799c-2.155 0-4.158-.651-5.823-1.765l-.417-.263-4.226.777.798-4.118-.272-.422A9.73 9.73 0 016.27 15c0-5.364 4.367-9.73 9.731-9.73 5.365 0 9.731 4.366 9.731 9.73 0 5.364-4.366 9.799-9.731 9.799zm5.356-7.356c-.292-.146-1.73-.854-1.998-.951-.268-.098-.463-.146-.658.146-.195.292-.756.951-.927 1.146-.17.195-.341.219-.633.073-.292-.146-1.232-.454-2.348-1.447-.867-.773-1.452-1.73-1.622-2.022-.17-.292-.018-.45.128-.595.13-.129.292-.341.439-.512.146-.17.195-.292.292-.487.098-.195.049-.365-.024-.512-.073-.146-.658-1.585-.902-2.171-.237-.57-.479-.492-.658-.502l-.561-.01c-.195 0-.512.073-.78.365-.268.292-1.024 1-1.024 2.439s1.049 2.829 1.195 3.024c.146.195 2.064 3.151 5.003 4.419.699.302 1.243.482 1.668.617.701.223 1.338.191 1.842.116.562-.084 1.73-.707 1.975-1.39.244-.682.244-1.268.171-1.39-.073-.122-.268-.195-.56-.341z" />
                  </svg>
                  واتساب
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/20100237674"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center h-12 w-12 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition hover:scale-110"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
      </a>
    </>
  );
}
