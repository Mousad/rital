import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, ArrowLeft } from "lucide-react"
import { SectionHeading } from "@/components/site/section-heading"
import { Button } from "@/components/ui/button"

const INFO = [
  {
    icon: MapPin,
    title: "عنواننا",
    value: "القاهرة، مصر - محي الدين ابو العز/ الدقي",
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
    value: "Ritaloffice22@gmail.com",
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
    <>
      {/* MAP SECTION */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">

          <SectionHeading
            eyebrow="موقعنا"
            title="زرنا في مقرنا"
            description="نرحب بك في مكتبنا لنناقش معك خطوات مستقبلك التعليمي وجهاً لوجه."
          />

          <div className="mt-12 grid lg:grid-cols-3 gap-6">

            {/* MAP */}
            <div className="lg:col-span-2 rounded-3xl overflow-hidden border border-border shadow-sm aspect-[4/3] lg:aspect-auto lg:min-h-[420px] bg-secondary">
              <iframe
                title="موقعنا على الخريطة"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.6675272203337!2d31.2118!3d30.0444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145841c9c8c7a7ef%3A0x3a2b5d1a2c3d4e5f!2s4%20Mohy%20El%20Din%20Abo%20El%20Ez%2C%20Ad%20Doqi%2C%20Giza%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sus!4v1713459996237!5m2!1sen!2sus"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* INFO */}
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
                      <p className="text-xs text-muted-foreground">
                        {item.title}
                      </p>

                      <p
                        className="mt-1 font-semibold text-foreground text-sm md:text-base"
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

      {/* CTA SECTION */}
      <section className="relative py-20 md:py-24 overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://i.pinimg.com/736x/6b/ea/c3/6beac3914fd768904cb963fed155aa5f.jpg"
            alt="students"
            fill
            className="object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-6">

          <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 text-center shadow-lg text-white">

            <h3 className="text-2xl md:text-3xl font-bold">
              جاهز لبدء رحلتك معنا؟
            </h3>

            <p className="mt-3 max-w-xl mx-auto text-gray-200">
              انضم لآلاف الطلاب الذين بدؤوا رحلتهم التعليمية مع ريتال.
            </p>

       <div className="mt-6 flex items-center gap-3 flex-nowrap">

  <Button
    asChild
    size="lg"
    className="rounded-full bg-white text-black hover:bg-gray-200 whitespace-nowrap"
  >
    <Link href="/contact">
       استشارة مجانية
      <ArrowLeft className="h-4 w-4 mr-1" />
    </Link>
  </Button>

  <a
    href="https://wa.me/201234567890"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 rounded-full border border-white/30 px-6 py-2 text-white hover:bg-white/10 transition whitespace-nowrap"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className="w-5 h-5 text-green-500 fill-current"
    >
      <path d="M16.001 3C9.373 3 4 8.373 4 15.001c0 2.647.865 5.091 2.329 7.079L5 29l7.118-1.309A11.93 11.93 0 0016.001 27c6.628 0 12.001-5.373 12.001-11.999C28.002 8.373 22.629 3 16.001 3zm0 21.799c-2.155 0-4.158-.651-5.823-1.765l-.417-.263-4.226.777.798-4.118-.272-.422A9.73 9.73 0 016.27 15c0-5.364 4.367-9.73 9.731-9.73 5.365 0 9.731 4.366 9.731 9.73 0 5.364-4.366 9.799-9.731 9.799zm5.356-7.356c-.292-.146-1.73-.854-1.998-.951-.268-.098-.463-.146-.658.146-.195.292-.756.951-.927 1.146-.17.195-.341.219-.633.073-.292-.146-1.232-.454-2.348-1.447-.867-.773-1.452-1.73-1.622-2.022-.17-.292-.018-.45.128-.595.13-.129.292-.341.439-.512.146-.17.195-.292.292-.487.098-.195.049-.365-.024-.512-.073-.146-.658-1.585-.902-2.171-.237-.57-.479-.492-.658-.502l-.561-.01c-.195 0-.512.073-.78.365-.268.292-1.024 1-1.024 2.439s1.049 2.829 1.195 3.024c.146.195 2.064 3.151 5.003 4.419.699.302 1.243.482 1.668.617.701.223 1.338.191 1.842.116.562-.084 1.73-.707 1.975-1.39.244-.682.244-1.268.171-1.39-.073-.122-.268-.195-.56-.341z" />
    </svg>

    واتساب
  </a>

</div>

          </div>
        </div>

      </section>
    </>
  )
}