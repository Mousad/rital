import Image from "next/image"
import Link from "next/link"
import { PageHero } from "@/components/site/page-hero"
import { Timeline } from "@/components/site/timeline"
import { SectionHeading } from "@/components/site/section-heading"
import { Button } from "@/components/ui/button"
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
} from "lucide-react"

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
]

const UNIVERSITIES = [
  {
    short: "CU",
    name: "Cairo University",
    ar: "جامعة القاهرة",
    rank: "الأقدم",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU0tC7Tde8prBk71kR0q8X4_ZzjYb5U6H4Fw&s",
    image: "https://i.pinimg.com/736x/87/88/be/8788be8848f6be42891703ba35bf9245.jpg",
  },
  {
    short: "ASU",
    name: "Ain Shams University",
    ar: "جامعة عين شمس",
    rank: "عريقة",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPexnp__kxYwObIwrPlJUGiJ9BTq5l316E5A&s",
    image: "https://i.pinimg.com/736x/4f/70/4f/4f704fe380b9553009c855b7b8b9b489.jpg",
  },
  {
    short: "AU",
    name: "Alexandria University",
    ar: "جامعة الإسكندرية",
    rank: "رائدة",
    logo: "https://scu.eg/storage/2023/05/%D8%A7%D9%84%D8%A7%D8%B3%D9%83%D9%86%D8%AF%D8%B1%D9%8A%D8%A9-%D8%A7%D9%84%D8%A7%D9%87%D9%84%D9%8A%D8%A9.png",
    image: "https://i.pinimg.com/1200x/9f/d7/b4/9fd7b4a50d8d297c69fc0c47726da31c.jpg",
  },
  {
    short: "AUC",
    name: "The American University in Cairo",
    ar: "الجامعة الأمريكية",
    rank: "دولية",
    logo: "https://www.universitiesegypt.com/ImageHandler.ashx?Id=12734&SS=2f4b759a533e4ad5b1db622ff646146c",
    image: "https://www.aucegypt.edu/sites/default/files/styles/large_widget/public/2020-03/auc.jpg?itok=rMovBrF8",
  },
  {
    short: "HU",
    name: "Helwan University",
    ar: "جامعة حلوان",
    rank: "متخصصة",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMSaoo1LwM8qdso_B6VVPs7ffGqJ-nXDdiA&s",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1d/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9_%D8%AD%D9%84%D9%88%D8%A7%D9%86.jpg",
  },
  {
    short: "MU",
    name: "Mansoura University",
    ar: "جامعة المنصورة",
    rank: "معتمدة",
    logo: "https://upload.wikimedia.org/wikipedia/ar/5/5e/%D8%B4%D8%B9%D8%A7%D8%B1_%D8%AC%D8%A7%D9%85%D8%B9%D8%A9_%D8%A7%D9%84%D9%85%D9%86%D8%B5%D9%88%D8%B1%D8%A9.png",
    image: "https://oktamam.com/wp-content/uploads/2024/03/mansoura-university-campus.jpg.webp",
  },
  {
    short: "AZU",
    name: "Al-Azhar University",
    ar: "جامعة الأزهر",
    rank: "إسلامية",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF3pjveBHwoK8PyMVheQf80exUg-C4VWlrTg&s",
    image: "https://media.gemini.media/img/medium/2025/7/24/2025_7_24_14_50_18_1.webp",
  },
  {
    short: "ASU",
    name: "Assiut University",
    ar: "جامعة أسيوط",
    rank: "إقليمية",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAUpscSqRd_vP1QS9hZTuUpdLthR-2ywXJqg&s",
    image: "https://i.pinimg.com/1200x/ee/a4/9e/eea49ec489c75243ae4b2618ef2d138b.jpg",
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
]

const STEPS = [
  { title: "التقييم", description: "تقييم ملفك الأكاديمي والشهادات المطلوبة." },
  { title: "اختيار الجامعة", description: "اختيار الجامعة والتخصص الأنسب." },
  { title: "التقديم", description: "إجراءات التقديم والأوراق الرسمية." },
  { title: "القبول", description: "استلام القبول المبدئي والنهائي." },
  { title: "السفر والإقامة", description: "ترتيبات السفر والسكن في مصر." },
]

export default function StudyEgyptPage() {
  return (
    <>
      <PageHero
        eyebrow="الدراسة في مصر"
        title="تعليم عريق في قلب العالم العربي"
        description="ادرس في جامعات مصرية معتمدة تجمع بين الجودة الأكاديمية والبيئة العربية المألوفة والتكاليف المعقولة."
      >
        <div className="flex flex-wrap justify-center gap-3">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link href="/contact?service=study-egypt">
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
      <section className="py-10 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="relative aspect-[16/7] rounded-3xl overflow-hidden shadow-xl ring-1 ring-primary/10">
            <Image
              src="/images/egypt.jpg"
              alt="حرم جامعي في مصر"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="pb-10 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="لماذا مصر؟"
            title="مميزات الدراسة في مصر"
            description="أسباب قوية تجعل مصر خياراً مثالياً لإكمال دراستك."
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
     <section id="universities" className="py-10 md:py-20 bg-secondary/40">
  <div className="mx-auto max-w-7xl px-4 md:px-6">

    <SectionHeading
      eyebrow="الجامعات الشريكة"
      title="أعرق الجامعات المصرية"
      description="نتعاون مع أفضل الجامعات المصرية الحكومية والخاصة."
    />

    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-5">

      {UNIVERSITIES.map((u) => (
        <div
          key={u.short}
          className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:shadow-xl transition-all"
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
            <h4 className="font-semibold text-sm text-foreground leading-snug">
              {u.ar}
            </h4>

            {/* Rank badge */}
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
      <section className="py-10 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="التخصصات"
            title="تخصصات متنوعة في متناولك"
            description="اختر من بين مئات التخصصات المتاحة في الجامعات المصرية."
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
      <section className="py-10 md:py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="خطواتك معنا"
            title="من التقديم إلى القبول"
            description="خمس خطوات مبسطة للالتحاق بالجامعات المصرية."
          />
          <div className="mt-14 bg-card border border-border rounded-3xl p-6 md:p-10">
            <Timeline steps={STEPS} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-8 md:p-12 text-center">
            <div aria-hidden className="absolute inset-0 bg-pattern-grid opacity-[0.12]" />
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold text-balance">
                جاهز للدراسة في مصر؟
              </h3>
              <p className="mt-3 text-primary-foreground/80 max-w-xl mx-auto">
                احصل على استشارة مجانية الآن ودعنا نخطط معاً لمستقبلك.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-6 rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/contact?service=study-egypt">
                  احجز استشارتك
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
