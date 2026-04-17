import { SectionHeading } from "@/components/site/section-heading"

const UNIVERSITIES = [
  {
    name: "Tsinghua University",
    ar: "جامعة تسينغهوا",
    logo: "https://images.for9a.com/thumb/fit-256-256-100-webp/organization/49344-c60e79The_Logo_of_Tsinghua_Hua_University,_in_1928.png",
  },
  {
    name: "Peking University",
    ar: "جامعة بكين",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrlTwhrRGi7cbSBnpv7VbVgx1e2AtK7kiHzA&s",
  },
  {
    name: "Fudan University",
    ar: "جامعة فودان",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Fudan_University_Logo.svg/960px-Fudan_University_Logo.svg.png",
  },
  {
    name: "Cairo University",
    ar: "جامعة القاهرة",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/%D8%B4%D8%B9%D8%A7%D8%B1_%D8%AC%D8%A7%D9%85%D8%B9%D8%A9_%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9.png/500px-%D8%B4%D8%B9%D8%A7%D8%B1_%D8%AC%D8%A7%D9%85%D8%B9%D8%A9_%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9.png",
  },
  {
    name: "Ain Shams University",
    ar: "جامعة عين شمس",
    logo: "https://i.pinimg.com/1200x/f9/45/f5/f945f57c443bf37fb720228401bd605b.jpg",
  },
  {
    name: "Alexandria University",
    ar: "جامعة الإسكندرية",
    logo: "https://i.pinimg.com/1200x/02/8a/83/028a83da40719f789fbdd957a1fd9f7b.jpg",
  },
  {
    name: "American University in Cairo",
    ar: "الجامعة الأمريكية بالقاهرة",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBF0hFskneSbxHFfZ5-JFzf0pINCkR8p7wcsFjXXKKLA&s",
  },
  {
    name: "Helwan University",
    ar: "جامعة حلوان",
    logo: "https://i.pinimg.com/1200x/22/ef/d3/22efd3d2c9d5e920e0c230c881bdf57b.jpg",
  },
  {
    name: "Mansoura University",
    ar: "جامعة المنصورة",
    logo: "https://i.pinimg.com/1200x/7c/58/72/7c58726c015595d5a940874a285ff936.jpg",
  },
  {
    name: "Assiut University",
    ar: "جامعة أسيوط",
    logo: "https://i.pinimg.com/736x/17/30/e4/1730e402e79e16a08875423ba2d42659.jpg",
  },
]

export function Universities() {
  return (
    <section className="py-8 md:py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="جامعاتنا الشريكة"
          title="أكثر من 50 جامعة حول العالم"
          description="نتعاون مع أفضل الجامعات العالمية لتوفير فرص دراسية ممتازة لطلابنا."
        />

       <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
  {UNIVERSITIES.map((uni) => (
    <div
      key={uni.name}
      className="group aspect-square bg-card rounded-2xl border border-border flex flex-col items-center justify-center p-4 hover:border-primary/40 hover:shadow-md transition-all"
      title={uni.name}
    >
      {/* 🏫 Logo */}
      <div className="h-14 w-10 rounded-2xl bg-white p-2 flex items-center justify-center overflow-hidden">
        <img
          src={uni.logo}
          alt={uni.name}
          className="w-full h-full object-contain group-hover:scale-110 transition"
        />
      </div>

      {/* 📝 Name */}
      <span className="mt-3 text-[11px] text-center text-muted-foreground leading-tight line-clamp-2">
        {uni.ar}
      </span>
    </div>
  ))}
</div>
      </div>
    </section>
  )
}
