"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useMotionValue, useSpring } from "framer-motion"

const images = [
  "https://i.pinimg.com/736x/5f/80/fa/5f80faf42b824663e632e2dc6d7b0eb0.jpg",
  "https://i.pinimg.com/736x/92/e4/1b/92e41baca062a8895b2832373a754beb.jpg",
  "https://i.pinimg.com/webp/1200x/71/7f/8d/717f8d79bae1e8db4abdb90bc488b186.webp",
  "https://i.pinimg.com/1200x/31/f1/88/31f18804badc90cd4a5ee80e49898df2.jpg",
]

export default function PlaneGallery() {
  const x = useMotionValue(0)
  const smoothX = useSpring(x, { stiffness: 80, damping: 20 })

  return (
    <section className="py-20 bg-[#f4f7f2] overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#27215f]">
          3D Gallery
        </h2>
      </div>

      <div
        className="relative h-[600px] flex items-center justify-center"
        style={{ perspective: "1800px" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: -1000, right: 1000 }}
          style={{ x: smoothX }}
          className="relative w-full h-full"
        >
          {images.map((img, i) => {
            const offset = (i - images.length / 2) * 260

            return (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2 cursor-grab active:cursor-grabbing"
                style={{
                  transform: `
                    translate3d(${offset}px, ${i * 15}px, ${-i * 200}px)
                    rotateY(-45deg)
                  `,
                  zIndex: images.length - i,
                }}
              >
                <div className="w-[260px] h-[340px] md:w-[320px] md:h-[420px] rounded-[24px] overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src={img}
                    alt={`plane-${i}`}
                    width={400}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}