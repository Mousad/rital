import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { SectionHeading } from "@/components/site/section-heading"

const INFO = [
  {
    icon: MapPin,
    title: "عنواننا",
    value: "دمشق - سوريا، شارع بغداد",
  },
  {
    icon: Phone,
    title: "اتصل بنا",
    value: "+963 11 123 4567",
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

export function MapSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="موقعنا"
          title="زرنا في مقرنا"
          description="نرحب بك في مكتبنا لنناقش معك خطوات مستقبلك التعليمي وجهاً لوجه."
        />

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-3xl overflow-hidden border border-border shadow-sm aspect-[4/3] lg:aspect-auto lg:min-h-[420px] bg-secondary">
            <iframe
              title="موقعنا على الخريطة"
              src="https://www.openstreetmap.org/export/embed.html?bbox=36.2565%2C33.4975%2C36.3265%2C33.5375&layer=mapnik&marker=33.5175%2C36.2915"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="grid gap-4 content-start">
            {INFO.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="bg-card border border-border rounded-2xl p-5 flex items-start gap-4 hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{item.title}</p>
                    <p
                      className="mt-1 font-semibold text-foreground text-sm md:text-base truncate"
                      dir={item.dir || undefined}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
