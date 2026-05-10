"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

const NAV_LINKS = [
  { href: "/", label: "الرئيسية" },
  { href: "/services", label: "الخدمات" },
  { href: "/about", label: "عنّا" },
  { href: "/scholarships", label: "منح" },
  { href: "/certificates", label: "استخراج الشهادات" },
  { href: "/study-china", label: "الدراسة في الصين" },
  { href: "/study-egypt", label: "الدراسة في مصر" },
  
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
          ? "bg-[#fbfaf6] backdrop-blur-md border-b border-border shadow-sm"
          : "bg-[#fbfaf6]"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex h-16 md:h-20 items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center shrink-0">
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT1V1FRYeC3HdqcX0e-2R9GiJLwcbl_ClOtFMv4kc7L8t9nIAhq"
              alt="logo"
              className="w-[60px] h-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
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
                    "relative px-3 py-2 text-sm font-medium transition",
                    active ? "text-primary" : "text-foreground/70 hover:text-[#27215f]"
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* CTA + MENU */}
          <div className="flex items-center gap-2">

            <Button
              asChild
              size="sm"
              className="hidden md:inline-flex rounded-[12px] bg-[#27215f] text-white"
            >
              <Link href="/contact">احجز استشارة</Link>
            </Button>

            {/* MOBILE MENU */}
            <Sheet open={open} onOpenChange={setOpen}>

              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-[85%] max-w-sm p-0 flex flex-col">

                {/* IMPORTANT FIX FOR ERROR */}
                <SheetHeader className="p-5 border-b border-border">

                  {/* REQUIRED TITLE (hidden) */}
                  <SheetTitle className="sr-only">
                    القائمة الجانبية
                  </SheetTitle>

                  <div className="flex items-center justify-between">

                   

                   
                  </div>
                </SheetHeader>

                {/* LINKS */}
                <nav className="flex-1 overflow-y-auto px-4 py-4">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-3 rounded-xl hover:bg-[#27215f]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                {/* CTA */}
                <div className="p-4 border-t">
                  <Button asChild className="w- rounded-[12px] bg-[#27215f] text-white">
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