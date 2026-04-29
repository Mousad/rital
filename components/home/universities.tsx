

"use client"

import { useState } from "react"
import { SectionHeading } from "@/components/site/section-heading"

const UNIVERSITIES = [
  {
    name: "Tsinghua University",
    ar: "جامعة تركيا",
    logo: "https://images.for9a.com/thumb/fit-256-256-100-webp/organization/49344-c60e79The_Logo_of_Tsinghua_Hua_University,_in_1928.png",
    cover: "https://i.pinimg.com/1200x/aa/9f/5f/aa9f5fde0992e2d2821b37716d870a00.jpg",
  },
  {
    name: "Peking University",
    ar: "جامعة بكين",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrlTwhrRGi7cbSBnpv7VbVgx1e2AtK7kiHzA&s",
    cover: "https://i.pinimg.com/1200x/6e/44/d4/6e44d4f533f5302e2ffe2b613ae3e18e.jpg",
  },
  {
    name: "Fudan University",
    ar: "جامعة فودان",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Fudan_University_Logo.svg/960px-Fudan_University_Logo.svg.png",
    cover: "https://i.pinimg.com/1200x/02/ad/ff/02adffd298ec57061b93e8d46c4e4ee2.jpg",
  },
  {
    name: "Cairo University",
    ar: "جامعة القاهرة",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/%D8%B4%D8%B9%D8%A7%D8%B1_%D8%AC%D8%A7%D9%85%D8%B9%D8%A9_%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9.png/500px-%D8%B4%D8%B9%D8%A7%D8%B1_%D8%AC%D8%A7%D9%85%D8%B9%D8%A9_%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9.png",
    cover: "https://i.pinimg.com/736x/c2/79/1f/c2791fe2b7b5bf2e7f970fb9dfe1074e.jpg",
  },
  {
    name: "Ain Shams University",
    ar: "جامعة عين شمس",
    logo: "https://i.pinimg.com/1200x/f9/45/f5/f945f57c443bf37fb720228401bd605b.jpg",
    cover: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Ain_Shams_University.jpg",
  },
  {
    name: "Alexandria University",
    ar: "جامعة الإسكندرية",
    logo: "https://i.pinimg.com/1200x/02/8a/83/028a83da40719f789fbdd957a1fd9f7b.jpg",
    cover: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Alexandria_University.jpg",
  },
  {
    name: "American University in Cairo",
    ar: "الجامعة الأمريكية بالقاهرة",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBF0hFskneSbxHFfZ5-JFzf0pINCkR8p7wcsFjXXKKLA&s",
    cover: "https://upload.wikimedia.org/wikipedia/commons/8/8c/AUC_New_Campus.jpg",
  },
  {
    name: "Helwan University",
    ar: "جامعة حلوان",
    logo: "https://i.pinimg.com/1200x/22/ef/d3/22efd3d2c9d5e920e0c230c881bdf57b.jpg",
    cover: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Helwan_University.jpg",
  },
  {
    name: "Mansoura University",
    ar: "جامعة المنصورة",
    logo: "https://i.pinimg.com/1200x/7c/58/72/7c58726c015595d5a940874a285ff936.jpg",
    cover: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Mansoura_University.jpg",
  },
  {
    name: "Assiut University",
    ar: "جامعة أسيوط",
    logo: "https://i.pinimg.com/736x/17/30/e4/1730e402e79e16a08875423ba2d42659.jpg",
    cover: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Assiut_University.jpg",
  },
]

export function Universities() {
  const [showAll, setShowAll] = useState(false)

  const visibleUniversities = showAll
    ? UNIVERSITIES
    : UNIVERSITIES.slice(0, 4)

  return (
    <section className="py-8 md:py-18 bg-secondary/40">
      <div className="mx-auto max-w-3xl px-5 md:px-6">

        <SectionHeading
          eyebrow="جامعاتنا الشريكة"
          title=" جامعاتنا حول العالم"
          description="نتعاون مع أفضل الجامعات العالمية لتوفير فرص دراسية ممتازة لطلابنا."
        />

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">

          {visibleUniversities.map((uni) => {
            return (
              <div
                key={uni.name}
                className="group rounded-[10px] overflow-hidden bg-[#fbfaf6] border border-border hover:border-primary/40 hover:shadow-md transition-all"
              >

                {/* 🖼️ Cover Image */}
                <div className="h-30 w-full overflow-hidden relative">
                  <img
                    src={uni.cover}
                    alt={uni.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />

                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
                </div>

                {/* 🏫 Logo */}
                <div className="relative flex justify-center">
                  <div className="absolute -top-5 h-12 w-12 rounded-full bg-white p-1 border-2 border-white shadow-md">
                    <img
                      src={uni.logo}
                      alt={uni.name}
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                </div>

                {/* 📝 Name */}
                <div className="pt-8 pb-2 px-2 text-center">
                  <span className="text-[15px] text-muted-foreground leading-tight line-clamp-2">
                    {uni.ar}
                  </span>
                </div>

              </div>
            )
          })}

        </div>

        {/* 🔘 Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-5 py-2 text-sm rounded-xl bg-primary text-white hover:opacity-90 transition"
          >
            {showAll ? "عرض أقل" : "عرض المزيد"}
          </button>
        </div>

      </div>
    </section>
  )
}