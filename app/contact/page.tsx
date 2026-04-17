import { PageHero } from "@/components/site/page-hero"
import { ContactForm } from "@/components/site/contact-form"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"

type SearchParamsType = Promise<{ service?: string }>

const INFO = [
  {
    icon: MapPin,
    title: "عنواننا",
    value: " مصر - القاهرة - الدقي",
  },
  {
    icon: Phone,
    title: "اتصل بنا",
    value: "+20 1 123 4567",
    dir: "ltr" as const,
  },
  {
    icon: MessageCircle,
    title: "واتساب",
    value: "+20 999 123 456",
    dir: "ltr" as const,
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    value: "info@rital-edu.com",
    dir: "ltr" as const,
  },
  {
    icon: Clock,
    title: "أوقات العمل",
    value: "السبت - الخميس، 9:00 - 18:00",
  },
]

export default async function ContactPage({
  searchParams,
}: {
  searchParams: SearchParamsType
}) {
  const params = await searchParams
  const defaultService = params.service

  return (
    <>
      <PageHero
        eyebrow="تواصل معنا"
        title="نحن هنا لمساعدتك"
        description="املأ النموذج التالي وسيتواصل معك أحد مستشارينا خلال 24 ساعة."
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  احجز استشارتك المجانية
                </h2>
                <p className="mt-2 text-muted-foreground">
                  املأ البيانات وسنتواصل معك في أقرب وقت.
                </p>
                <div className="mt-6">
                  <ContactForm defaultService={defaultService} />
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-4">
              <div className="rounded-3xl bg-primary text-primary-foreground p-7 relative overflow-hidden">
                <div aria-hidden className="absolute inset-0 bg-pattern-grid opacity-[0.15]" />
                <div className="relative">
                  <h3 className="text-xl font-bold">معلومات التواصل</h3>
                  <p className="mt-2 text-sm text-primary-foreground/80">
                    لأي استفسار سريع، تواصل معنا عبر القنوات التالية.
                  </p>

                  <ul className="mt-6 space-y-4">
                    {INFO.map((item) => {
                      const Icon = item.icon
                      return (
                        <li key={item.title} className="flex items-start gap-3">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                            <Icon className="h-4 w-4" />
                          </span>
                          <div className="min-w-0">
                            <p className="text-xs text-primary-foreground/70">
                              {item.title}
                            </p>
                            <p
                              className="mt-0.5 font-semibold text-sm md:text-base truncate"
                              dir={item.dir}
                            >
                              {item.value}
                            </p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden border border-border aspect-[4/3]">
                <iframe
                  title="موقعنا"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=36.2565%2C33.4975%2C36.3265%2C33.5375&layer=mapnik&marker=33.5175%2C36.2915"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
