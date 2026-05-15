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
      {/* HERO */}
      <div className="relative overflow-hidden bg-[#f5f8f3]">
        <div className="flex justify-center">
          <img
            src="/images/foml.jpeg"
            alt="education"
            className="w-full h-[350px] object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/60" />

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

      {/* SECTION */}
      <section className="py-8 md:py-24 bg-[#f5f8f3]">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#27215f]/5 border border-[#27215f]/10 px-4 py-2">
                <div className="h-2 w-2 rounded-full bg-[#27215f]" />
                <span className="text-sm font-medium text-[#27215f]">
                  خدمة تعليمية
                </span>
              </div>

              <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#27215f] leading-tight">
                استخراج الشهادات الرسمية
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#27215f]/70">
                نوفر لك خدمة استخراج الشهادات الرسمية من الجهات المعتمدة بأسلوب
                قانوني موثوق وسريع، مع متابعة كاملة لكل الإجراءات حتى استلام
                الشهادة.
              </p>

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

            {/* FEATURES */}
            <div className="grid grid-cols-2 gap-4">
              {FEATURES.map((f, index) => {
                const Icon = f.icon;

                return (
                  <div
                    key={f.title}
                    className={`group bg-white border border-[#27215f]/10 rounded-3xl p-5 hover:shadow-xl transition-all ${
                      index === 2 ? "col-span-2 mx-auto w-full max-w-xs" : ""
                    }`}
                  >
                    <div className="flex justify-center mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#27215f]/5 group-hover:bg-[#27215f] transition-all">
                        <Icon className="h-5 w-5 text-[#27215f] group-hover:text-white" />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-[#27215f] text-center">
                      {f.title}
                    </h3>

                    <p className="text-xs md:text-sm text-[#27215f]/70 mt-2 leading-6 text-center">
                      {f.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

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

      {/* SERVICES */}
      <CertificateService
        id="high-school"
        badge={<span>الشهادة الثانوية</span>}
        title={<span>استخراج الشهادة الثانوية</span>}
        description={
          <span>
            خدمة متكاملة لاستخراج شهادة الثانوية العامة بشكل رسمي ومعتمد
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
        description="نساعدك في استخراج شهادة الصف الثامن بسهولة."
        image="/images/certificate-grade8.jpg"
        steps={GRADE8_STEPS}
      />

      {/* CTA */}
      <section className="py-10 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="relative overflow-hidden rounded-[16px] text-white text-center p-8 md:p-12">
            <img
              src="https://i.pinimg.com/736x/6b/ea/c3/6beac3914fd768904cb963fed155aa5f.jpg"
              alt="certificates"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10">
              <FileCheck className="h-10 w-10 mx-auto" />

              <h3 className="mt-4 text-2xl md:text-3xl font-bold">
                ابدأ طلب استخراج شهادتك اليوم
              </h3>

              <p className="mt-3 text-white/80">
                اترك بياناتك وسنتواصل معك فورًا
              </p>

              <div className="mt-3 flex justify-center gap-3">
                <Button asChild className="bg-[#27215f]">
                  <Link href="/contact">استشارة مجانية</Link>
                </Button>

                <a
                  href="https://wa.me/201234567890"
                  className="flex items-center gap-2 border border-white/30 px-4 py-2 rounded-[12px]"
                >
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

/* FIXED COMPONENT */
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
  badge: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  image: string;
  steps: { title: string; description?: string }[];
  reverse?: boolean;
}) {
  return (
    <section id={id} className="py-10 md:py-20 bg-[#f5f8f3]">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className={reverse ? "lg:order-2" : ""}>
            <span className="text-sm font-semibold">{badge}</span>

            <h2 className="mt-4 text-3xl font-bold">{title}</h2>

            <p className="mt-4 text-[#27215f]/70">{description}</p>

            <div className="mt-6 bg-white p-6 rounded-2xl">
              <VerticalTimeline steps={steps} />
            </div>
          </div>

          <div className={reverse ? "lg:order-1" : ""}>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src={image}
                alt="certificate"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}