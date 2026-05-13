import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { VerticalTimeline } from "@/components/site/timeline";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  FileCheck,
  ShieldCheck,
  Clock4,
  BadgeCheck,
} from "lucide-react";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const HIGH_SCHOOL_STEPS = [
  {
    title: "تقديم الطلب",
    description: "املأ النموذج وقدم البيانات الأساسية المطلوبة.",
  },
  {
    title: "مراجعة البيانات",
    description: "يقوم فريقنا بمراجعة البيانات والتحقق منها.",
  },
  {
    title: "تجهيز المستندات",
    description: "نجهّز جميع المستندات الرسمية اللازمة للاستخراج.",
  },
  {
    title: "استخراج الشهادة",
    description: "متابعة إجراءات الاستخراج من الجهات المختصة.",
  },
  { title: "التسليم", description: "تسلمك الشهادة مصدقة وجاهزة للاستخدام." },
];

const GRADE8_STEPS = [
  { title: "تقديم الطلب", description: "قدّم طلبك عبر النموذج الإلكتروني." },
  {
    title: "مراجعة البيانات",
    description: "نتأكد من صحة المعلومات والمستندات.",
  },
  { title: "تجهيز المستندات", description: "تجهيز الأوراق الرسمية المطلوبة." },
  {
    title: "استخراج الشهادة",
    description: "متابعة الاستخراج من المديرية المختصة.",
  },
  { title: "التسليم", description: "تسلّم شهادتك مصدّقة خلال الموعد المحدد." },
];

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "قانوني ومعتمد",
    desc: "جميع الإجراءات عبر قنوات رسمية.",
  },
  { icon: Clock4, title: "تسليم سريع", desc: "أوقات قياسية لإنهاء المعاملات." },
  {
    icon: BadgeCheck,
    title: "تصديق كامل",
    desc: "الشهادة جاهزة للاستخدام الدولي.",
  },
];

export default function CertificatesPage() {
  return (
    <>
      <div className="relative overflow-hidden bg-[#f5f8f3]">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/images/foml.jpeg"
            alt="education"
            className="w-full h-[350px] object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            استخراج الشهادات
          </h1>

          <p className="max-w-2xl text-sm md:text-base text-gray-200">
            نوفر لك خدمة استخراج الشهادات الرسمية بأسلوب قانوني موثوق، مع متابعة
            كاملة حتى التسليم
          </p>
        </div>
      </div>
      <section className="py-8 md:py-24 bg-[#f5f8f3]">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-[#27215f]/5 border border-[#27215f]/10 px-4 py-2">
                <div className="h-2 w-2 rounded-full bg-[#27215f]" />

                <span className="text-sm font-medium text-[#27215f]">
                  خدمة تعليمية
                </span>
              </div>

              {/* Title */}
              <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#27215f] leading-tight">
                استخراج الشهادات الرسمية
              </h2>

              {/* Description */}
              <p className="mt-5 text-lg leading-8 text-[#27215f]/70">
                نوفر لك خدمة استخراج الشهادات الرسمية من الجهات المعتمدة بأسلوب
                قانوني موثوق وسريع، مع متابعة كاملة لكل الإجراءات حتى استلام
                الشهادة.
              </p>

              {/* Features */}
              <div className="mt-8 space-y-4">
                <div className="flex gap-3">
                  <div className="h-2 w-2 mt-2 rounded-full bg-[#27215f]" />
                  <p className="text-[#27215f]/80">
                    استخراج شهادات معتمدة من الجهات الرسمية
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="h-2 w-2 mt-2 rounded-full bg-[#27215f]" />
                  <p className="text-[#27215f]/80">
                    متابعة كاملة للإجراءات خطوة بخطوة
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="h-2 w-2 mt-2 rounded-full bg-[#27215f]" />
                  <p className="text-[#27215f]/80">
                    سرعة في التنفيذ وتقليل وقت الانتظار
                  </p>
                </div>
              </div>
            </div>

            {/* Right Cards */}
            <div className="grid grid-cols-2 gap-4">
              {FEATURES.map((f, index) => {
                const Icon = f.icon;

                return (
                  <div
                    key={f.title}
                    className={`
                group bg-white border border-[#27215f]/10 rounded-3xl p-5
                hover:shadow-xl hover:border-[#27215f]/20 transition-all

                ${index === 2 ? "col-span-2 mx-auto w-full max-w-xs" : ""}
              `}
                  >
                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#27215f]/5 group-hover:bg-[#27215f] transition-all">
                        <Icon className="h-5 w-5 text-[#27215f] group-hover:text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-[#27215f] text-center">
                      {f.title}
                    </h3>

                    {/* Desc */}
                    <p className="text-xs md:text-sm text-[#27215f]/70 mt-2 leading-6 text-center">
                      {f.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Button Center */}
          <div className="mt-12 flex justify-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#27215f] text-white px-8 py-3 rounded-full hover:bg-[#1f1a4f] transition"
            >
              اطلب الخدمة الآن
            </a>
          </div>
        </div>
      </section>

      <CertificateService
        id="high-school"
        badge={
          <div className="flex justify-center md:justify-start">
            <span className="text-[#27215f] font-medium text-sm">
              الشهادة الثانوية
            </span>
          </div>
        }
        title={
          <span className="text-[#27215f] font-bold">
            استخراج الشهادة الثانوية
          </span>
        }
        description={
          <span className="text-[#27215f]/70">
            خدمة متكاملة لاستخراج شهادة الثانوية العامة بشكل رسمي ومعتمد، مع
            تصديقها من الجهات المختصة لتكون جاهزة للاستخدام محلياً ودولياً.
          </span>
        }
        image="/images/certificate-high-school.jpg"
        steps={HIGH_SCHOOL_STEPS}
      />

      <CertificateService
        id="grade-8"
        reverse
        badge="الصف الثامن"
        title="استخراج شهادة الثامن"
        description="نساعدك في استخراج شهادة الصف الثامن بخطوات واضحة وبدون عناء، سواءً كنت داخل البلاد أو خارجها."
        image="/images/certificate-grade8.jpg"
        steps={GRADE8_STEPS}
      />

      {/* CTA */}
      <section className="py-10 md:py-24  ">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="relative overflow-hidden rounded-[16px] text-white text-center p-8 md:p-12">
            {/* 📸 Background Image */}
            <img
              src="https://i.pinimg.com/736x/6b/ea/c3/6beac3914fd768904cb963fed155aa5f.jpg"
              alt="certificates"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* 🌑 Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10">
              <FileCheck className="h-10 w-10 text-[#f5f8f3] mx-auto" />

              <h3 className="mt-4 text-2xl md:text-3xl font-bold">
                ابدأ طلب استخراج شهادتك اليوم
              </h3>

              <p className="mt-3 text-white/80 max-w-xl mx-auto">
                اترك لنا التفاصيل وسيتواصل معك فريقنا لشرح الخطوات وتجهيز ملفك.
              </p>

              {/* Buttons */}
              <div className="mt-3 flex items-center justify-center gap-3 flex-nowrap">
                {/* Button 1 */}
                <Button
                  asChild
                  size="lg"
                  className="rounded-[12px] bg-[#27215f] text-[#fcfbf3] hover:bg-accent/90 whitespace-nowrap"
                >
                  <Link href="/contact?service=certificates">
                    استشارتك المجانية
                    <ArrowLeft className="h-4 w-4 mr-1" />
                  </Link>
                </Button>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/201234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-[12px] border border-white/30 px-4 py-2 text-white hover:bg-white/10 transition whitespace-nowrap"
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
    </>
  );
}

function CertificateService({
  id,
  badge,
  title,
  description,
  image,
  steps,
  reverse = false,
}: {
  id: string;
  badge: string;
  title: string;
  description: string;
  image: string;
  steps: { title: string; description?: string }[];
  reverse?: boolean;
}) {
  return (
    <section id={id} className="py-10 md:py-20 bg-[#f5f8f3] even:bg-[#f5f8f3]">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div
          className={`grid gap-10 lg:gap-14 lg:grid-cols-2 items-center ${
            reverse ? "lg:[&>:first-child]:order-2" : ""
          }`}
        >
          <div>
            <span className="inline-flex flex justify-center items-center gap-2 rounded-full bg-secondary text-primary px-3.5 py-1 text-xs font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {badge}
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#27215f] leading-tight text-center lg:text-start">
              {title}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed text-[#27215f]">
              {description}
            </p>

            <div className="mt-8 bg-card border border-border rounded-3xl p-6 md:p-7 text-[#27215f]">
              <h3 className="font-semibold text-[#27215f] mb-5">
                خطوات الاستخراج
              </h3>
              <VerticalTimeline steps={steps} />
            </div>

            <div className="mt-6 flex justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-[#27215f] hover:bg-primary/90 text-primary-foreground"
              >
                <Link href={`/contact?service=certificates&type=${id}`}>
                  ابدأ الطلب
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-3xl overflow-hidden shadow-xl ring-1 ring-primary/10">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <a
        href="https://wa.me/201117736999"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center h-12 w-12 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition hover:scale-110"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
      </a>
    </section>
  );
}
