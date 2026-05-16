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
    default: "ريتال | المنح الدراسية والدراسة في الصين ومصر للسودانيين",
    template: "%s | ريتال",
  },

  description:
    "ريتال للخدمات التعليمية منصة متخصصة في المنح الدراسية والتقديم للجامعات في الصين ومصر للسودانيين. نوفر خدمات القبول الجامعي، استخراج الشهادات، ومتابعة إجراءات الدراسة خطوة بخطوة.",

  keywords: [
  "منحة",
  "منح دراسية",
  "منح دراسية مجانية",
  "منحة دراسية 2026",
  "منحة الصين",
  "منحة مصر",
  "منح للسودانيين",
  "منح دراسية للسودانيين",
  "الدراسة في الخارج",
  "الدراسة في الصين",
  "الدراسة في مصر",
  "الدراسة في مصر للسودانيين",
  "الدراسة في الصين للسودانيين",
  "التقديم للجامعات",
  "قبول جامعي",
  "استخراج الشهادات",
  "توثيق الشهادات",
  "شهادات دراسية",
  "خدمات تعليمية للسودانيين",
  "القبول الجامعي مصر",
  "القبول الجامعي الصين",
  "scholarships",
  "study in china scholarships",
  "study in egypt scholarships",
  "educational services",
  "Rital",
],

  authors: [{ name: "Rital Educational Services" }],
  creator: "Rital",
  publisher: "Rital",

  openGraph: {
    title: "ريتال | المنح الدراسية والدراسة في الخارج",
    description:
      "منصة ريتال تساعد الطلاب في الحصول على منح دراسية في الصين ومصر والتقديم للجامعات بسهولة وأمان.",
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
    title: "ريتال | المنح الدراسية",
    description:
      "فرص منح دراسية في الصين ومصر للسودانيين عبر منصة ريتال.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

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