import type { Metadata } from "next"
import { Cairo, Tajawal } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { Toaster } from "@/components/ui/sonner"

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-arabic",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  variable: "--font-arabic-display",
  display: "swap",
  weight: ["400", "500", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "ريتال للخدمات التعليمية | Rital Educational Services",
  description:
    "ريتال للخدمات التعليمية - نساعدك في استخراج الشهادات الرسمية، والتقديم للجامعات في الصين ومصر، والحصول على المنح الدراسية.",
  generator: "v0.app",
  keywords: [
    "الدراسة في الصين",
    "الدراسة في مصر",
    "المنح الدراسية",
    "استخراج الشهادات",
    "ريتال",
    "خدمات تعليمية",
  ],
}

export const viewport = {
  themeColor: "#1B4332",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${tajawal.variable} bg-background`}
    >
      <body className="font-sans antialiased text-foreground min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="top-center" richColors />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
