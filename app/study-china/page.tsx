import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { Timeline } from "@/components/site/timeline";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  ArrowLeft,
  Award,
  DollarSign,
  Globe2,
  Stethoscope,
  Cpu,
  Building2,
  Atom,
  Briefcase,
  Palette,
  BookOpen,
  GraduationCap,
} from "lucide-react";

import { motion } from "framer-motion"

const WHY_CARDS = [
  {
    icon: Award,
    title: "جامعات مرموقة عالمياً",
    description:
      "جامعات صينية ضمن أفضل 100 جامعة حول العالم، بشهادات معترف بها دولياً.",
  },
  {
    icon: DollarSign,
    title: "تكاليف دراسة معقولة",
    description:
      "رسوم دراسية وتكاليف معيشة أقل بكثير من الدول الغربية مع جودة عالية.",
  },
  {
    icon: Globe2,
    title: "منح حكومية متنوعة",
    description:
      "مئات المنح الدراسية الكاملة والجزئية من الحكومة الصينية والجامعات.",
  },
];

const UNIVERSITIES = [
  {
    short: "THU",
    name: "Tsinghua University",
    ar: "جامعة تسينغهوا",
    rank: "#12 عالمياً",
    logo: "https://images.for9a.com/thumb/fit-256-256-100-webp/organization/49344-c60e79The_Logo_of_Tsinghua_Hua_University,_in_1928.png",
    image:
      "https://i.pinimg.com/1200x/93/60/b4/9360b43aad028029d98ab2bd562013d8.jpg",
  },
  {
    short: "PKU",
    name: "Peking University",
    ar: "جامعة بكين",
    rank: "#17 عالمياً",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrlTwhrRGi7cbSBnpv7VbVgx1e2AtK7kiHzA&s",
    image:
      "https://i.pinimg.com/736x/93/11/d9/9311d9e374e12fff9602f7c69995a16a.jpg",
  },
  {
    short: "FDU",
    name: "Fudan University",
    ar: "جامعة فودان",
    rank: "#50 عالمياً",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjifIRE2pkBeQT97GgUOl4XuXQgBY29zU51w&s",
    image:
      "https://i.pinimg.com/1200x/48/87/82/4887826ad5b819eac71acde547dea4ce.jpg",
  },
  {
    short: "ZJU",
    name: "Zhejiang University",
    ar: "جامعة تشجيانغ",
    rank: "#44 عالمياً",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Zhejiang_University_Logo.svg/1280px-Zhejiang_University_Logo.svg.png",
    image:
      "https://i.pinimg.com/736x/93/d4/40/93d440a4e8fec1104ed4e1478f4e3d7a.jpg",
  },
  {
    short: "SJTU",
    name: "Shanghai Jiao Tong University",
    ar: "جامعة شانغهاي جياو تونغ",
    rank: "#51 عالمياً",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/da/Sjtu-logo-standard-red.png/250px-Sjtu-logo-standard-red.png",
    image:
      "https://i.pinimg.com/736x/75/12/96/751296796653a7abb936e2a62b41c4dc.jpg",
  },
  {
    short: "USTC",
    name: "University of Science and Technology of China",
    ar: "جامعة العلوم والتكنولوجيا الصينية",
    rank: "#74 عالمياً",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc4xQATqQk9snhcfMWWi1_A158zyAu8OlQjA&s",
    image:
      "https://i.pinimg.com/736x/20/c8/af/20c8afbb0830479766ac49afb91d8cf8.jpg",
  },
  {
    short: "NJU",
    name: "Nanjing University",
    ar: "جامعة نانجينغ",
    rank: "#120 عالمياً",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHa5wEn87Ra45M8YNsSYB2CTJ1UKQKzxPCSw&s",
    image:
      "https://i.pinimg.com/1200x/fd/d4/2d/fdd42d84b800a0b3c854d89b2a274cc0.jpg",
  },
  {
    short: "WHU",
    name: "Wuhan University",
    ar: "جامعة ووهان",
    rank: "#194 عالمياً",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSANiAIuoIDJljf4M7AlRxeU_KRMe5LGwImfg&s",
    image:
      "https://i.pinimg.com/236x/29/b0/5d/29b05d765078fc7ad7967d014eef36f6.jpg",
  },
];

const MAJORS = [
  { icon: Stethoscope, label: "الطب والصيدلة" },
  { icon: Cpu, label: "علوم الحاسوب" },
  { icon: Building2, label: "الهندسة المدنية" },
  { icon: Atom, label: "العلوم الطبيعية" },
  { icon: Briefcase, label: "إدارة الأعمال" },
  { icon: Palette, label: "الفنون والتصميم" },
  { icon: BookOpen, label: "اللغة الصينية" },
  { icon: GraduationCap, label: "التربية والتعليم" },
];

const STEPS = [
  { title: "التقييم", description: "تقييم ملفك وتحديد الجامعات المناسبة." },
  { title: "اختيار التخصص", description: "توجيهك لأنسب التخصصات والبرامج." },
  { title: "التقديم", description: "تقديم طلبك للجامعات المختارة." },
  { title: "القبول والفيزا", description: "استلام القبول وإجراءات التأشيرة." },
  { title: "السفر", description: "مرافقتك حتى وصولك وبدء دراستك." },
];




export default function StudyChinaPage() {
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
          <h1 className="text-[30px] md:text-5xl font-bold mb-6 leading-tight">
             رحلتك في الجامعات الصينية
          </h1>

          <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-200 mb-6">
            اكتشف أفضل الفرص الدراسية، المنح الحكومية، والتخصصات المتنوعة مع دعم
            كامل من التقديم حتى الوصول.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-[12px] bg-[#27215f] text-white hover:bg-blue-700"
            >
              <Link href="/contact?service=study-china">
                قدّم
                {/* <ArrowLeft className="h-4 w-4 mr-1" /> */}
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-[12px] border-white/30 text-[#27215f] hover:bg-white/10"
            >
              <Link href="#universities">اكتشف الجامعات</Link>
            </Button>
          </div>
        </div>
      </div>

      <section className="py-6 md:py-20 bg-[#f4f7f2]">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div>
              <h2 className="text-2xl text-[#27215f] md:text-4xl font-bold">
                ادرس في الصين وابدأ مستقبلك العالمي
              </h2>

              <p className="mt-4 text-[#27215f] leading-relaxed">
                نوفر لك فرصة الدراسة في أفضل الجامعات الصينية المعترف بها
                دولياً، مع دعم كامل من التقديم حتى الحصول على القبول والسفر،
                بدون تعقيد أو إجراءات مرهقة.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-[#27215f]">
                <li>
                  <span className="text-[#f21e27]">✔</span> جامعات صينية قوية
                  ومعترف بها عالمياً
                </li>
                <li>
                  <span className="text-[#f21e27]">✔</span> تخصصات متنوعة (طب،
                  هندسة، ذكاء اصطناعي، إدارة)
                </li>
                <li>
                  <span className="text-[#f21e27]">✔</span> برامج باللغة
                  الإنجليزية أو الصينية
                </li>
                <li>
                  <span className="text-[#f21e27]">✔</span> رسوم دراسية منخفضة
                  ومنح جزئية وكاملة
                </li>
                <li>
                  <span className="text-[#f21e27]">✔</span> متابعة كاملة حتى
                  الوصول والاستقرار
                </li>
              </ul>
            </div>

            {/* Button */}
            <div className="mt-0 flex justify-center">
              <a
                href="/study-china.pdf"
                download
                className="inline-flex items-center px-5 py-2 rounded-[12px] bg-[#27215f] text-[#f4f7f2] hover:opacity-90 transition"
              >
                المزيد
              </a>
            </div>
          </div>
        </div>
      </section>

        {/* Steps */}
      <section className="py-6 md:py-20 bg-[#f4f7f2]">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          

             <div className="[&_h2]:text-[#27215f] [&_p]:text-[#27215f] [&_*]:text-[#27215f]">
           <SectionHeading
            eyebrow="خطواتك معنا"
            title="من التقديم إلى الوصول"
            description="خمس خطوات فقط تفصلك عن بدء رحلتك الدراسية في الصين."
          />
          </div>

          <div className="mt-14 bg-card border border-border rounded-3xl p-6 md:p-10">
            <Timeline steps={STEPS} />
          </div>

          {/* CTA Button */}
          <div className="mt-8 text-center">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[#27215f] text-[#f4f7f2] hover:bg-accent/90"
            >
              <Link href="/contact?service=study-china">
                قدّم الآن
                <ArrowLeft className="h-4 w-4 mr-2" />
              </Link>
            </Button>
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
               ﻳﺴﺘﻠﻢ اﻟﻄﺎﻟﺐ ﻧﻤﻮذج pdf ﻟﻠﻜﺸﻒ اﻟﻄﺒﻲ
ﻳﺘﻮﺟﻪ اﻟﻄﺎﻟﺐ اﻟﻲ اﻗﺮب ﻣﺴﺘﺸﻔﻲ وﻳﻘﻮم ﺑﻤﻠﺊ اﺳﺘﻤﺎرة اﻟﻜﺸﻒ اﻟﻄﺒﻲ
ﻋﻠﻲ اﻟﻄﺎﻟﺐ
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
                ﻋﺒﺎرة ﻋﻦ ﻓﻴﺪﻳﻮ ﻗﺼﻴﺮ ﻳﻘﻮم اﻟﻄﺎﻟﺐ ﺑﺘﺴﺠﻠﻴﻪ ﻳﺘﺤﺪث ﻓﻴﻪ
ﻋﻦ ﻧﻔﺴﻪ واﻟﺴﻠﻢ اﻟﺘﻌﻠﻴﻢ 
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-20 bg-[#f4f7f2]">
  <div className="mx-auto max-w-7xl px-4 md:px-6">

    {/* Heading */}
    <div className="text-center mb-10">
      <div className="inline-block border border-dashed border-[#27215f] px-6 py-2 rounded-[12px]">
        <h2 className="text-2xl md:text-4xl font-bold text-[#27215f]">
          الأوراق المطلوبة بعد القبول
        </h2>
      </div>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">

      {[
        {
          title: "أصل الشهادة الثانوية",
          desc: "موثقة ومترجمة للغة الإنجليزية، ويقوم المكتب بإجراءات الترجمة.",
        },
        {
          title: "صورة من الجواز",
          desc: "صورة واضحة وسارية المفعول.",
        },
        {
          title: "فيش جنائي",
          desc: "يقوم المكتب باستخراجه نيابةً عن الطالب.",
        },
        {
          title: "أصل شهادة الميلاد",
          desc: "يجب إحضار الأصل مع صورة واضحة.",
        },
        {
          title: "إيميل شخصي مفعل",
          desc: "يشترط أن يكون مفعلاً لأن التواصل بين الجامعة والطالب يتم عبر الإيميل.",
        },
        {
          title: "صور شخصية",
          desc: "صور حديثة بخلفية بيضاء.",
        },
        {
          title: "كشف طبي",
          desc: "يتم تقديم الكشف الطبي ضمن ملف التقديم النهائي.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className={`
            bg-white
            border border-[#27215f]/10
            rounded-3xl
            p-4 md:p-6
            hover:shadow-lg
            transition-all
            flex flex-col
            items-center
            text-center

            ${
              i === 6
                ? "col-span-2 w-[70%] mx-auto md:col-span-1 md:w-full"
                : ""
            }
          `}
        >

          {/* Number */}
          

          {/* Title */}
          <h3 className="mt-4 text-sm md:text-lg font-bold text-[#27215f]">
            {item.title}
          </h3>

          {/* Description */}
          <p className="mt-2 text-[12px] md:text-sm text-[#27215f]/80 leading-relaxed">
            {item.desc}
          </p>

        </div>
      ))}

    </div>

  </div>
</section>


      {/* Why */}
      <section className="pb-10 md:pb-20 bg-[#f4f7f2]">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="[&_h2]:text-[#27215f]">
            <SectionHeading
              eyebrow="لماذا الصين؟"
              title="مميزات الدراسة في الصين"
              description="فرص تعليمية عالمية تجمع بين الجودة، التكنولوجيا، والتكاليف المناسبة."
            />
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-5">
            {[
              {
                title: "جامعات عالمية قوية",
                description:
                  "جامعات صينية مصنفة ضمن أفضل الجامعات عالمياً في الطب والهندسة والتقنية.",
                icon: "🎓",
              },
              {
                title: "تكاليف منخفضة",
                description:
                  "دراسة ومعيشة أقل تكلفة مقارنة بأوروبا وأمريكا مع جودة تعليم عالية.",
                icon: "💰",
              },
              {
                title: "تخصصات مستقبلية",
                description:
                  "برامج قوية في الذكاء الاصطناعي، الطب، الهندسة وإدارة الأعمال.",
                icon: "🚀",
              },

              {
                title: "بيئة آمنة للطلاب",
                description:
                  "مدن جامعية حديثة ودعم كامل للطلاب الدوليين طوال فترة الدراسة.",
                icon: "🤝",
              },
              {
                title: "فرص مستقبلية قوية",
                description:
                  "إمكانية التدريب والعمل في شركات عالمية داخل الصين وخارجها.",
                icon: "🌏",
              },
            ].map((c, index) => (
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
                <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-[8px] bg-[#f4f7f2] text-[#f4f7f2] text-xl">
                  {c.icon}
                </div>

                {/* Title */}
                <h3 className="mt-4 text-sm md:text-lg font-bold text-[#27215f]">
                  {c.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-[12px] md:text-sm text-[#27215f] leading-relaxed">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Universities */}
      <section id="universities" className="py-8 md:py-20 bg-[#f4f7f2]">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="[&_h2]:text-[#27215f] [&_p]:text-[#27215f] [&_span]:text-[#27215f] [&_*]:text-[#27215f]">
            <SectionHeading
              eyebrow="الجامعات الشريكة"
              title="أفضل الجامعات الصينية"
              description="نتعاون مع أعرق الجامعات الصينية لتوفير أفضل الفرص لطلابنا."
            />
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-2">
            {UNIVERSITIES.map((u) => (
              <div
                key={u.short}
                className="group rounded-[12px] overflow-hidden border border-border bg-card hover:shadow-xl transition-all"
              >
                {/* Image */}
                <div className="relative h-28 w-full overflow-hidden">
                  <img
                    src={u.image}
                    alt={u.name}
                    className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-4 text-center space-y-2">
                  {/* Logo / Short */}
                  <div className="flex justify-center -mt-10 ">
                    <div className="h-14 w-14 rounded-xl z-50 bg-white shadow-md flex items-center justify-center border">
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

                  {/* Rank */}
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
      <section className="py-6 md:py-20 bg-[#f4f7f2]">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="[&_h2]:text-[#27215f] [&_p]:text-[#27215f] [&_*]:text-[#27215f]">
            <SectionHeading
              title="تخصصات جامعات صينية "
              description="اختر التخصص الذي يناسب شغفك من بين مئات التخصصات المتاحة."
            />
          </div>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1">
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
          <div className="mt-8 text-center">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[#27215f] text-[#f4f7f2] hover:bg-accent/90"
            >
              <Link href="/contact?service=study-china">
                قدّم 
               
              </Link>
            </Button>
          </div>
        </div>
      </section>


      
      
      {/* Hero image */}
      <section className="py-8 md:py-20 bg-[#f4f7f2]">
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
                "https://i.pinimg.com/736x/5f/80/fa/5f80faf42b824663e632e2dc6d7b0eb0.jpg",
                "https://i.pinimg.com/736x/92/e4/1b/92e41baca062a8895b2832373a754beb.jpg",
                "https://i.pinimg.com/webp/1200x/71/7f/8d/717f8d79bae1e8db4abdb90bc488b186.webp",
                "https://i.pinimg.com/1200x/31/f1/88/31f18804badc90cd4a5ee80e49898df2.jpg",
                "https://i.pinimg.com/736x/7c/d9/fb/7cd9fba656f771acbf74069e6165bf44.jpg",
                "https://i.pinimg.com/736x/88/91/06/889106a63ffa23fcb79bd591282801f0.jpg",
              ].map((img, i) => (
                <div
                  key={i}
                  className="min-w-full md:min-w-[48%] lg:min-w-[32%] snap-center"
                >
                  <div className="relative aspect-[4/4] rounded-[12px] overflow-hidden shadow-xl">
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

    

    

      <section className="py-6 md:py-20 bg-[#f4f7f2]">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="معلومات مهمة"
            title="كل ما تحتاج معرفته للدراسة في الصين"
            description="تفاصيل عملية تساعدك على اتخاذ قرارك والتقديم بسهولة."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* Fees */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg">💰 الرسوم التقريبية</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                من 2,000 إلى 10,000 دولار سنويًا حسب الجامعة والتخصص، مع وجود
                منح تغطي الرسوم بالكامل في بعض الحالات.
              </p>
            </div>

            {/* Requirements */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg">📄 شروط التقديم</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                شهادة ثانوية أو جامعية + معدل جيد + بعض التخصصات تتطلب لغة
                إنجليزية أو صينية.
              </p>
            </div>

            {/* Documents */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg">📑 الأوراق المطلوبة</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                جواز سفر، شهادات دراسية، كشف درجات، CV، رسالة دافع، صور شخصية.
              </p>
            </div>

            {/* Language */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg">🗣️ لغة الدراسة</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                الإنجليزية في برامج كثيرة + الصينية مع سنة تحضيرية للغة.
              </p>
            </div>

            {/* Dates */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg">📅 مواعيد التقديم</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                من يناير إلى أغسطس حسب المنحة أو الجامعة.
              </p>
            </div>

            {/* Steps */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg">🪜 خطوات التقديم</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                اختيار الجامعة → تجهيز الأوراق → التقديم → القبول → الفيزا →
                السفر.
              </p>
            </div>
          </div>

          {/* Sudan Section */}
          <div className="mt-10 bg-card border border-border rounded-2xl p-6">
            <h3 className="font-bold text-lg">🇸🇩 الطلاب السودانيون</h3>

            <div className="mt-4 grid gap-4 md:grid-cols-3 text-sm text-muted-foreground">
              <div>
                <strong className="text-foreground">داخل السودان:</strong>
                <br />
                توثيق الشهادة من الجهات الرسمية + التقديم عبر مكاتب أو أونلاين.
              </div>

              <div>
                <strong className="text-foreground">داخل مصر:</strong>
                <br />
                يمكن التقديم مباشرة أو تحويل القيد مع إثبات إقامة.
              </div>

              <div>
                <strong className="text-foreground">خارج السودان ومصر:</strong>
                <br />
                تقديم كطالب دولي + توثيق سفارة + فيزا طالب.
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* CTA */}
      <section className="py-6 md:py-24 bg-[#f4f7f2]">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="relative overflow-hidden rounded-[10px] text-white">
            {/* Background Image */}
            <img
              src="https://i.pinimg.com/736x/cb/a2/1e/cba21e45e8ace5cf1f703a1ce25d59b7.jpg"
              alt="Study in China"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold">
                جاهز لبدء رحلتك إلى الصين؟
              </h3>

              <p className="mt-3 text-white/80 max-w-xl mx-auto">
                احجز استشارة مجانية الآن أو تواصل معنا مباشرة عبر واتساب.
              </p>

              {/* Buttons */}
              <div className="mt-2 flex items-center justify-center gap-3 whitespace-nowrap">
                {/* Book Consultation */}
                <Button
                  asChild
                  size="lg"
                  className="rounded-[12px] bg-[#27215f] text-[#f4f7f2] hover:bg-accent/90"
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
                  className="flex items-center gap-2 rounded-[13px] border border-white/30 px-6 py-2 text-white hover:bg-white/10 transition"
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
        href="https://wa.me/201001234567"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center h-12 w-12 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition hover:scale-110"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
      </a>
    </>
  );
}
