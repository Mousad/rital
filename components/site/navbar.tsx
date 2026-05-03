"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X, GraduationCap } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const NAV_LINKS = [
  { href: "/", label: "الرئيسية" },
  { href: "/services", label: "الخدمات" },
  { href: "/scholarships", label: "منح" },
  { href: "/certificates", label: "استخراج الشهادات" },
  { href: "/study-china", label: "الدراسة في الصين" },
  { href: "/study-egypt", label: "الدراسة في مصر" },
  { href: "/about", label: "عنّا" },
  { href: "/contact", label: "تواصل معنا" },
]

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/60 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex h-16 md:h-20 items-center justify-between gap-4">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <span className="flex flex-col leading-tight">
              <span className="font-bold text-primary text-lg md:text-xl">
                Rital
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    active
                      ? "text-primary"
                      : "text-foreground/70 hover:text-primary",
                  )}
                >
                  {link.label}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* CTA + Mobile menu */}
          <div className="flex items-center gap-2">
            
            {/* زرار احجز استشارة */}
            <Button
              asChild
              size="sm"
              className="hidden md:inline-flex rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm"
            >
              <Link href="/contact">احجز استشارة</Link>
            </Button>

            {/* المينيو */}
            <Sheet open={open} onOpenChange={setOpen}>
              
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden rounded-full"
                  aria-label="فتح القائمة"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[86%] max-w-sm p-0 flex flex-col"
              >
                
                {/* HEADER */}
                <SheetHeader className="p-5 border-b border-border">
                  <SheetTitle className="w-full">
                    <div className="flex items-center justify-between">

                      {/* اللوجو */}
                      <Link
                        href="/"
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-2"
                      >
                        <img
                          src="/lovable-uploads/a5c80a15-6935-45ec-8852-551e961cc11f.png"
                          alt="Rital Logo"
                          className="h-8 w-auto"
                        />
                      </Link>

                      {/* زر الإغلاق */}
                      <button
                        onClick={() => setOpen(false)}
                        className="rounded-full p-2 hover:bg-muted transition"
                        aria-label="إغلاق القائمة"
                      >
                        <X className="h-5 w-5" />
                      </button>

                    </div>
                  </SheetTitle>
                </SheetHeader>

                {/* الروابط */}
                <nav className="flex-1 overflow-y-auto px-4 py-4">
                  <ul className="flex flex-col gap-1">
                    {NAV_LINKS.map((link) => {
                      const active =
                        link.href === "/"
                          ? pathname === "/"
                          : pathname.startsWith(link.href)

                      return (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className={cn(
                              "block rounded-xl px-4 py-3 text-[15px] font-medium transition-colors",
                              active
                                ? "bg-secondary text-primary"
                                : "text-foreground/80 hover:bg-muted"
                            )}
                          >
                            {link.label}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </nav>

                {/* زرار تحت */}
                <div className="p-4 border-t border-border">
                  <Button
                    asChild
                    className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Link href="/contact" onClick={() => setOpen(false)}>
                      احجز استشارة مجانية
                    </Link>
                  </Button>
                </div>

              </SheetContent>
            </Sheet>

          </div>
        </div>
      </div>
    </header>
  )
}