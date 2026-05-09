import Image from "next/image"
import Link from "next/link"
import { PageHero } from "@/components/site/page-hero"
import { SectionHeading } from "@/components/site/section-heading"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faLinkedinIn,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons"
import {
  ArrowLeft,
  Target,
  Eye,
  Heart,
  Users,
  GraduationCap,
  Building,
  Trophy,
} from "lucide-react"

const VALUES = [
  {
    icon: Target,
    title: "رسالتنا",
    description:
      "تمكين الطلاب من الوصول لأفضل الفرص التعليمية في العالم عبر خدمات احترافية وموثوقة.",
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
]

const STATS = [
  { icon: Users, value: "7000", label: "طالب سعيد" },
  { icon: GraduationCap, value: "50+", label: "جامعة شريكة" },
  { icon: Building, value: "12+", label: "سنة خبرة" },
  { icon: Trophy, value: "98%", label: "معدل رضا" },
]

const TEAM = [
  {
    name: "د. محمد العلي",
    role: "المدير التنفيذي",
    image:
      "https://i.pinimg.com/736x/43/d7/16/43d716925da061a194dc992feb4b34ed.jpg",
    instagram: "#",
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "أ. عثمان الشامي",
    role: "مسؤولة الاستشارات",
    image:
      "https://i.pinimg.com/736x/67/d4/73/67d473ac5acd3069d909813c79d55942.jpg",
    instagram: "#",
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "أ. هدى كريم",
    role: "منسق جامعات الصين",
    image:
      "https://i.pinimg.com/736x/0a/d1/93/0ad19309a59be71b028548801ac38353.jpg",
    instagram: "#",
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "أ. ريم أحمد",
    role: "منسقة جامعات مصر",
    image:
      "https://i.pinimg.com/736x/0c/22/90/0c2290cf168019e6cbfe5cb31187a471.jpg",
    instagram: "#",
    linkedin: "#",
    facebook: "#",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <div className="relative py-8 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/ABOUT.png"
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
      <section className="py-8 md:py-24">
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
                  انطلقت ريتال من إيمان عميق بأن التعليم هو مفتاح تغيير الحياة...
                </p>
                <p>
                  نحن لا نقدم مجرد خدمات، بل نرافق الطالب...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <div className="relative flex flex-col items-center justify-center gap-11">
        <div className="relative h-[180px] w-[320px] overflow-hidden rounded-[12px] border bg-white shadow-lg z-50">
          <img
            src="/images/rietl.png"
            alt="Rital"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute top-1/2 -translate-y-1/2">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#0e1b6c] shadow-2xl border border-white/10">
            <p className="text-sm text-white font-bold">شراكة</p>
          </div>
        </div>

        <div className="relative h-[180px] w-[320px] overflow-hidden rounded-3xl border bg-white shadow-lg">
          <img
            src="/images/nobst.png"
            alt="Nubatia"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* VALUES */}
      <section className="py-8 md:py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="ما يميزنا"
            title="رسالتنا ورؤيتنا وقيمنا"
            description=""
          />

          <div className="mt-12 grid gap-5 grid-cols-2 md:grid-cols-3">
            {VALUES.map((v) => {
              const Icon = v.icon
              return (
                <div
                  key={v.title}
                  className="bg-card border border-border rounded-3xl p-7"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[12px] bg-[#27215f] text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-[#27215f]">
                    {v.title}
                  </h3>

                  <p className="mt-2 text-[#27215f]">
                    {v.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-8 md:py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="فريقنا"
            title="أشخاص يجعلون الفرق"
            description=""
          />

         <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
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
              <FontAwesomeIcon icon={faInstagram} className="text-lg" />
            </a>

            <a href={t.linkedin}>
              <FontAwesomeIcon icon={faLinkedinIn} className="text-lg" />
            </a>

            <a href={t.facebook}>
              <FontAwesomeIcon icon={faFacebookF} className="text-lg" />
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
  )
}