import { Hero } from "@/components/home/hero"
import { Services } from "@/components/home/services"
import { Universities } from "@/components/home/universities"
import { AboutPreview } from "@/components/home/about-preview"
import { Destinations } from "@/components/home/destinations"
import { ScholarshipsCTA } from "@/components/home/scholarships-cta"
import { Reviews } from "@/components/home/reviews"
import { MapSection } from "@/components/home/map-section"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Universities />
      <AboutPreview />
      <Destinations />
      <ScholarshipsCTA />
      <Reviews />
      <MapSection />
    </>
  )
}
