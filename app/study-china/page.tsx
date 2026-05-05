import Image from "next/image"
import Link from "next/link"
import { PageHero } from "@/components/site/page-hero"
import { Timeline } from "@/components/site/timeline"
import { SectionHeading } from "@/components/site/section-heading"
import { Button } from "@/components/ui/button"
import {  MessageCircle } from "lucide-react";

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
} from "lucide-react"

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
]

const UNIVERSITIES = [
  {
    short: "THU",
    name: "Tsinghua University",
    ar: "جامعة تسينغهوا",
    rank: "#12 عالمياً",
    logo: "https://images.for9a.com/thumb/fit-256-256-100-webp/organization/49344-c60e79The_Logo_of_Tsinghua_Hua_University,_in_1928.png",
    image: "https://i.pinimg.com/1200x/93/60/b4/9360b43aad028029d98ab2bd562013d8.jpg",
  },
  {
    short: "PKU",
    name: "Peking University",
    ar: "جامعة بكين",
    rank: "#17 عالمياً",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrlTwhrRGi7cbSBnpv7VbVgx1e2AtK7kiHzA&s",
    image: "https://i.pinimg.com/736x/93/11/d9/9311d9e374e12fff9602f7c69995a16a.jpg",
  },
  {
    short: "FDU",
    name: "Fudan University",
    ar: "جامعة فودان",
    rank: "#50 عالمياً",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjifIRE2pkBeQT97GgUOl4XuXQgBY29zU51w&s",
    image: "https://i.pinimg.com/1200x/48/87/82/4887826ad5b819eac71acde547dea4ce.jpg",
  },
  {
    short: "ZJU",
    name: "Zhejiang University",
    ar: "جامعة تشجيانغ",
    rank: "#44 عالمياً",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Zhejiang_University_Logo.svg/1280px-Zhejiang_University_Logo.svg.png",
    image: "https://i.pinimg.com/736x/93/d4/40/93d440a4e8fec1104ed4e1478f4e3d7a.jpg",
  },
  {
    short: "SJTU",
    name: "Shanghai Jiao Tong University",
    ar: "جامعة شانغهاي جياو تونغ",
    rank: "#51 عالمياً",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/da/Sjtu-logo-standard-red.png/250px-Sjtu-logo-standard-red.png",
    image: "https://i.pinimg.com/736x/75/12/96/751296796653a7abb936e2a62b41c4dc.jpg",
  },
  {
    short: "USTC",
    name: "University of Science and Technology of China",
    ar: "جامعة العلوم والتكنولوجيا الصينية",
    rank: "#74 عالمياً",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc4xQATqQk9snhcfMWWi1_A158zyAu8OlQjA&s",
    image: "https://i.pinimg.com/736x/20/c8/af/20c8afbb0830479766ac49afb91d8cf8.jpg",
  },
  {
    short: "NJU",
    name: "Nanjing University",
    ar: "جامعة نانجينغ",
    rank: "#120 عالمياً",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHa5wEn87Ra45M8YNsSYB2CTJ1UKQKzxPCSw&s",
    image: "https://i.pinimg.com/1200x/fd/d4/2d/fdd42d84b800a0b3c854d89b2a274cc0.jpg",
  },
  {
    short: "WHU",
    name: "Wuhan University",
    ar: "جامعة ووهان",
    rank: "#194 عالمياً",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSANiAIuoIDJljf4M7AlRxeU_KRMe5LGwImfg&s",
    image: "https://i.pinimg.com/236x/29/b0/5d/29b05d765078fc7ad7967d014eef36f6.jpg",
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
]

const STEPS = [
  { title: "التقييم", description: "تقييم ملفك وتحديد الجامعات المناسبة." },
  { title: "اختيار التخصص", description: "توجيهك لأنسب التخصصات والبرامج." },
  { title: "التقديم", description: "تقديم طلبك للجامعات المختارة." },
  { title: "القبول والفيزا", description: "استلام القبول وإجراءات التأشيرة." },
  { title: "السفر", description: "مرافقتك حتى وصولك وبدء دراستك." },
]

export default function StudyChinaPage() {
  return (
    <>
      <PageHero
        eyebrow=""
        title="ابدأ رحلتك في أعرق الجامعات الصينية"
        description="الصين وجهة تعليمية متميزة تجمع بين الجودة العالمية والتكاليف المعقولة والمنح الحكومية الكبرى."
      >
        <div className="flex flex-wrap justify-center gap-2">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link href="/contact?service=study-china">
              ابدأ التقديم
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
          >
            <Link href="#universities">استعرض الجامعات</Link>
          </Button>
        </div>
      </PageHero>

      {/* Hero image */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="relative aspect-[16/7] rounded-3xl overflow-hidden shadow-xl ring-1 ring-primary/10">
            <Image
              src="https://i.pinimg.com/736x/b1/0f/86/b10f862f488b95effa3281e5783f2fe6.jpg"
              alt="حرم جامعي في الصين"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="لماذا الصين؟"
            title="مميزات الدراسة في الصين"
            description="إليك أبرز الأسباب التي تجعل الصين وجهة مثالية لإكمال دراستك الجامعية."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {WHY_CARDS.map((c) => {
              const Icon = c.icon
              return (
                <div
                  key={c.title}
                  className="bg-card border border-border rounded-3xl p-6 md:p-7 hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-foreground">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {c.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Universities */}
    <section id="universities" className="py-8 md:py-20 bg-secondary/40">
  <div className="mx-auto max-w-7xl px-4 md:px-6">
    
    <SectionHeading
      eyebrow="الجامعات الشريكة"
      title="أفضل الجامعات الصينية"
      description="نتعاون مع أعرق الجامعات الصينية لتوفير أفضل الفرص لطلابنا."
    />

    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-5">
      {UNIVERSITIES.map((u) => (
        
        <div
          key={u.short}
          className="group rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all"
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
            <h4 className="font-semibold text-sm text-foreground leading-snug">
              {u.ar}
            </h4>

            {/* Rank */}
            <span className="inline-block text-xs text-green-600 font-medium">
              {u.rank}
            </span>

          </div>
        </div>

      ))}
    </div>

  </div>
</section>

      {/* Majors */}
      <section className="py-8 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="التخصصات"
            title="تخصصات متنوعة لجميع الطلاب"
            description="اختر التخصص الذي يناسب شغفك من بين مئات التخصصات المتاحة."
          />
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {MAJORS.map((m) => {
              const Icon = m.icon
              return (
                <div
                  key={m.label}
                  className="group bg-card border border-border rounded-2xl p-5 flex flex-col items-center text-center gap-3 hover:border-primary/40 hover:shadow-md transition-all"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    {m.label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Steps */}
    <section className="py-8 md:py-20 bg-secondary/40">
  <div className="mx-auto max-w-7xl px-4 md:px-6">

    <SectionHeading
      eyebrow="خطواتك معنا"
      title="من التقديم إلى الوصول"
      description="خمس خطوات فقط تفصلك عن بدء رحلتك الدراسية في الصين."
    />

    <div className="mt-14 bg-card border border-border rounded-3xl p-6 md:p-10">
      <Timeline steps={STEPS} />
    </div>

    {/* CTA Button */}
    <div className="mt-8 text-center">
      <Button
        asChild
        size="lg"
        className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
      >
        <Link href="/contact?service=study-china">
          قدّم الآن
          <ArrowLeft className="h-4 w-4 mr-2" />
        </Link>
      </Button>

     
    </div>

  </div>
</section>

      {/* CTA */}
     <section className="py-8 md:py-24">
  <div className="mx-auto max-w-5xl px-4 md:px-6">

    <div className="relative overflow-hidden rounded-3xl text-white">

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
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">

          {/* Book Consultation */}
          <Button
            asChild
            size="lg"
            className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link href="/contact?service=study-china">
              احجز استشارتك
              <ArrowLeft className="h-4 w-4 mr-2" />
            </Link>
          </Button>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/201234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-white hover:bg-white/10 transition"
          >
            <MessageCircle className="h-5 w-5" />
            واتساب 
          </a>

        </div>

      </div>
    </div>

  </div>
</section>
    </>
  )
}
