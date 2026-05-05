

"use client"

import { useState } from "react"
import { SectionHeading } from "@/components/site/section-heading"

const UNIVERSITIES = [
  {
    name: "Tsinghua University",
    ar: "جامعة القاهرة",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/%D8%B4%D8%B9%D8%A7%D8%B1_%D8%AC%D8%A7%D9%85%D8%B9%D8%A9_%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9.png/500px-%D8%B4%D8%B9%D8%A7%D8%B1_%D8%AC%D8%A7%D9%85%D8%B9%D8%A9_%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9.png",
    cover: "https://i.pinimg.com/736x/27/71/57/277157a5755cfab9d6b384ddb66f41d0.jpg",
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
    cover: "https://i.pinimg.com/736x/56/51/13/56511319e4f9555dca92e283f40e18d4.jpg",
  },
  {
    name: "Cairo University",
    ar: "جامعة تركيا",
    logo: "https://imtiyaz-cms-media-eu.s3.eu-central-1.amazonaws.com/Dicle_University_Logo_imtiyaz_188b1d545f.png",
    cover: "https://taksimtours.com/wp-content/uploads/2021/09/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9-%D8%A5%D8%B3%D8%B7%D9%86%D8%A8%D9%88%D9%84-1.jpg",
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
    cover: "https://i.pinimg.com/1200x/9f/d7/b4/9fd7b4a50d8d297c69fc0c47726da31c.jpg",
  },
  {
    name: "American University in Cairo",
    ar: "الجامعة الأمريكية بالقاهرة",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBF0hFskneSbxHFfZ5-JFzf0pINCkR8p7wcsFjXXKKLA&s",
    cover: "https://i.pinimg.com/736x/f6/c5/f4/f6c5f4d6ecfe0f937a946fc1a34bfc9f.jpg",
  },
  {
    name: "Helwan University",
    ar: "جامعة حلوان",
    logo: "https://i.pinimg.com/1200x/22/ef/d3/22efd3d2c9d5e920e0c230c881bdf57b.jpg",
    cover: "https://i.pinimg.com/1200x/3b/55/57/3b555797c92148ab7d3b5cfdb425ba26.jpg",
  },
  {
    name: "Mansoura University",
    ar: "جامعة المنصورة",
    logo: "https://i.pinimg.com/1200x/7c/58/72/7c58726c015595d5a940874a285ff936.jpg",
    cover: "https://i.pinimg.com/1200x/bc/02/cf/bc02cf6ec1bbe2debab39443351de781.jpg",
  },
  {
    name: "Assiut University",
    ar: "جامعة أسيوط",
    logo: "https://i.pinimg.com/736x/17/30/e4/1730e402e79e16a08875423ba2d42659.jpg",
    cover: "https://i.pinimg.com/1200x/ee/a4/9e/eea49ec489c75243ae4b2618ef2d138b.jpg",
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