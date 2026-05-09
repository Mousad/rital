import { Hero } from "@/components/home/hero"
import { Services } from "@/components/home/services"
import { Universities } from "@/components/home/universities"
import { AboutPreview } from "@/components/home/about-preview"
import { Destinations } from "@/components/home/destinations"
import { ScholarshipsCTA } from "@/components/home/scholarships-cta"
import { Reviews } from "@/components/home/reviews"
import { MapSection } from "@/components/home/map-section"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"

config.autoAddCss = false

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Destinations />
      <Universities />
      <AboutPreview />
      <MapSection />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/201001234567"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center h-12 w-12 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition hover:scale-110"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
      </a>
    </>
  )
}