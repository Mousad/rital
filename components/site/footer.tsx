import Link from "next/link"
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Send,
} from "lucide-react"

const QUICK_LINKS = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "عنّا" },
  { href: "/services", label: "الخدمات" },
  { href: "/contact", label: "تواصل معنا" },
]



export function Footer() {
  return (
    <footer className="mt-8 bg-[#27215f] text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 md:px-6 pt-8 pb-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              
              <span className="flex flex-col leading-tight">
                <span className="font-bold text-[22px]">Rital</span>
               
              </span>
            </Link>
            <p className="mt-4 text-sm text-[#fcfbf3] leading-relaxed text-pretty">
              نرافقك في رحلتك التعليمية من استخراج الشهادات الرسمية إلى التسجيل
              في أفضل الجامعات والحصول على المنح الدراسية.
            </p>

            <div className="mt-5 flex items-center gap-2">
              <SocialIcon href="https://www.facebook.com/Rital.office/?locale=ar_AR" label="فيسبوك">
                <Facebook className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href="https://www.instagram.com/rital_office/" label="إنستغرام">
                <Instagram className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href="#" label="يوتيوب">
                <Youtube className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href="#" label="تيليغرام">
                <Send className="h-4 w-4" />
              </SocialIcon>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-[#fcfbf3] uppercase tracking-wide">
              روابط سريعة
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          

          {/* Contact */}
         
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/15 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} ريتال للخدمات التعليمية. جميع الحقوق محفوظة.</p>
          <a href="https://soob-portfolio.vercel.app/">soube</a>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors"
    >
      {children}
    </a>
  )
}
