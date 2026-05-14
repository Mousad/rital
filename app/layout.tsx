import type { Metadata, Viewport } from "next"
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
  metadataBase: new URL("https://rital-sd.com"),

  title: {
    default: "ريتال للخدمات التعليمية",
    template: "%s | Rital",
  },

  description:
    "ريتال للخدمات التعليمية تساعدك في استخراج الشهادات الرسمية، التقديم للجامعات في الصين ومصر، والحصول على أفضل المنح الدراسية بخطوات سهلة وآمنة.",

  keywords: [
    "ريتال",
    "Rital",
    "الدراسة في الصين",
    "الدراسة في مصر",
    "المنح الدراسية",
    "استخراج الشهادات",
    "خدمات تعليمية",
    "التقديم للجامعات",
    "قبولات جامعية",
  ],

  authors: [{ name: "Rital Educational Services" }],

  creator: "Rital",
  publisher: "Rital",

  openGraph: {
    title: "ريتال للخدمات التعليمية",
    description:
      "ابدأ رحلتك الدراسية مع ريتال واحصل على أفضل الفرص التعليمية والمنح الدراسية.",
    url: "https://rital-sd.com",
    siteName: "Rital",
    locale: "ar_AR",
    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rital Educational Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ريتال للخدمات التعليمية",
    description:
      "خدمات تعليمية متكاملة للتقديم للجامعات والمنح الدراسية.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
}

export const viewport: Viewport = {
  themeColor: "#1B4332",
  width: "device-width",
  initialScale: 1,
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
      suppressHydrationWarning
      className={`${cairo.variable} ${tajawal.variable} bg-background`}
    >
      <body className="min-h-screen flex flex-col font-sans antialiased text-foreground">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />

        <Toaster position="top-center" richColors />

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}