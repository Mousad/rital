import { PageHero } from "@/components/site/page-hero"
import { ContactForm } from "@/components/site/contact-form"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"


type SearchParamsType = Promise<{ service?: string }>

const INFO = [
  {
    icon: MapPin,
    title: "عنواننا",
    value: "٤ محي الدين ابو العز/ الدقي، القاهرة، مصر",
  },
  {
    icon: Phone,
    title: "اتصل بنا",
    value: "+20 1 123 4567",
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
    value: "من السبت إلى الخميس: ٩ صباحاً",
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
      <div className="relative h-[220px] md:h-[420px] overflow-hidden">

  {/* الصورة */}
  <img
    src="https://i.pinimg.com/736x/ed/d6/52/edd65281a0804a8c936c22953e7c3beb.jpg"
    alt="Contact"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50" />

  {/* المحتوى */}
  <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
    <div className="max-w-2xl text-white">
      <p className="text-sm mb-3 opacity-80">تواصل معنا</p>
      <h1 className="text-3xl md:text-5xl font-bold">
        نحن هنا لمساعدتك
      </h1>
      <p className="mt-4 text-lg opacity-90">
        املأ النموذج التالي وسيتواصل معك أحد مستشارينا خلال 24 ساعة.
      </p>
    </div>
  </div>

</div>

      <section className="py-8 md:py-20 bg-[#f4f7f2]">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-card border border-border rounded-[8px] p-6 md:p-8 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold text-[#27215f] ">
                  احجز استشارتك المجانية
                </h2>
                <p className="mt-2 text-[#27215f]">
                  املأ البيانات وسنتواصل معك في أقرب وقت.
                </p>
                <div className="mt-6 text-[#27215f]">
                  <ContactForm defaultService={defaultService} />
                </div>
              </div>
            </div>

            <section className="py-8 md:py-24">
  <div className="mx-auto max-w-5xl px-4 md:px-6">

    <div className="relative overflow-hidden rounded-[12px] text-white">

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
         قدم من خلال الواتس
        </h3>

       
        {/* Buttons */}
       <div className="mt-2 flex items-center justify-center  gap-3 whitespace-nowrap">

  {/* Book Consultation */}
  

  {/* WhatsApp Button */}
<a
  href="https://wa.me/201234567890"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 rounded-[9px] border border-white/30 px-6 py-2 text-white hover:bg-white/10 transition"
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

  </div>
  
</section>

            {/* Info */}
            <div className="lg:col-span-2 space-y-4">
              <div className="rounded-3xl bg-[#27215f] text-primary-foreground p-7 relative overflow-hidden">
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.6675272203337!2d31.2118!3d30.0444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145841c9c8c7a7ef%3A0x3a2b5d1a2c3d4e5f!2s4%20Mohy%20El%20Din%20Abo%20El%20Ez%2C%20Ad%20Doqi%2C%20Giza%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sus!4v1713459996237!5m2!1sen!2sus"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
<a
  href="https://wa.me/201001234567"
  target="_blank"
  className="fixed bottom-6 right-6 z-100 flex items-center justify-center h-12 w-12 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition"
>
  <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
</a>
    </>
  )
}
