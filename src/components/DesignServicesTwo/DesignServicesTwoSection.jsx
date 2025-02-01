import { PiArrowUpRightBold } from "react-icons/pi";

/* eslint-disable react/prop-types */
const ServiceCard = ({
  title,
  description,
  imageUrl,
  className,
  descriptionMaxWidth,
}) => {
  return (
    <div className={`relative group overflow-hidden rounded-xl ${className}`}>
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 p-8 flex flex-col justify-between">
        {/* Üst Kısım: Başlık ve Açıklama */}
        <div>
          <h3 className="text-white text-2xl font-primaryMedium mb-3">
            {title}
          </h3>
          <p
            className="text-white font-primaryLight text-sm leading-relaxed"
            style={{ maxWidth: descriptionMaxWidth }}
          >
            {description}
          </p>
        </div>

        {/* Alt Kısım: Buton */}
        <button className="text-white text-sm font-primaryLight flex items-center gap-2 relative">
          <span className="relative transition-transform duration-300">
            Daha fazla bilgi edinin
            {/* Geçişli alt çizgi */}
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </span>
          <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
            <PiArrowUpRightBold size={18} />
          </span>
        </button>
      </div>
    </div>
  );
};

const DesignServicesTwoSection = () => {
  const services = [
    {
      title: "Grafik Tasarım",
      description:
        "İhtiyacınız olan kanalda markanızı yansıtan özgün tasarımları statik veya animasyon formatında edinin.",
      imageUrl: "https://i.hizliresim.com/4e4hrhp.jpg",
      className:
        "xl:col-span-4 col-span-12 xl:row-span-2 h-[250px] md:h-[300px] xl:h-[800px]",
      descriptionMaxWidth: "85%",
    },
    {
      title: "Markalaşma",
      description:
        "Marka kimliğinizin temelini oluşturacak, logodan renk paletine markanızın her detayı için kapsamlı tasarımlar ve güçlü çözümler sunuyoruz.",
      imageUrl: "https://i.hizliresim.com/3wm1y02.jpg",
      className:
        "xl:col-span-4 col-span-12 h-[250px] h-[250px] md:h-[300px] xl:h-[385px]",
      descriptionMaxWidth: "85%",
    },
    {
      title: "Web Tasarımı",
      description:
        "Kullanıcı dostu ve görsel açıdan etkileyici web siteleri oluşturuyoruz. Sıfırdan veya mevcut materyaller üzerinden geliştirme seçenekleri sunuyoruz.",
      imageUrl: "https://i.hizliresim.com/llnk9ao.jpg",
      className:
        "xl:col-span-4 col-span-12 h-[250px] md:h-[300px] xl:h-[385px]",
      descriptionMaxWidth: "90%",
    },
    {
      title: "Sosyal Medya",
      description:
        "Sosyal medyada daha iyi sonuçlar elde etmek için hedef kitlenize uygun etkileyici ve özgün sosyal medya içerikleri oluşturuyoruz.",
      imageUrl: "https://i.hizliresim.com/fdaqdxl.jpg",
      className:
        "xl:col-span-8 col-span-12 h-[250px] md:h-[300px] xl:h-[385px]",
      descriptionMaxWidth: "40%",
    },
    {
      title: "E-Posta Tasarımı",
      description:
        "Hedef kitlenizin ilgisini çeken yaratıcı e-posta şablonları ve tasarımlarla e-posta iletişimlerinizi güçlendirin ve etkileşimlerinizi arttırın.",
      imageUrl: "https://i.hizliresim.com/p2v9ygq.jpg",
      className:
        "xl:col-span-4 col-span-12 h-[250px] md:h-[300px] xl:h-[385px]",
      descriptionMaxWidth: "95%",
    },
    {
      title: "Logo Tasarımı",
      description:
        "Markanızı en iyi şekilde temsil edecek özgün ve akılda kalıcı logolar tasarlıyoruz. Kimliğinizi yansıtan yaratıcı çözümlerle fark yaratın.",
      imageUrl: "https://i.hizliresim.com/dgutisi.jpg",
      className:
        "xl:col-span-4 col-span-12 h-[250px] md:h-[300px] xl:h-[385px]",
      descriptionMaxWidth: "88%",
    },
    {
      title: "İllüstrasyonlar",
      description:
        "Markanızın hikayesini anlatan özel çizimler ve görsellerle öne çıkın. Pazarlama materyalleriniz için özgün illüstrasyonlar tasarlıyoruz.",
      imageUrl: "https://i.hizliresim.com/8vgfgvj.jpg",
      className:
        "xl:col-span-4 col-span-12 h-[250px] md:h-[300px] xl:h-[385px]",
      descriptionMaxWidth: "90%",
    },
    {
      title: "Paketleme ve Ürün Tasarımı",
      description:
        "Markanızı ön plana çıkaracak yaratıcı ürün ve paket tasarım çözümleri ile müşterilerinizin dikkatini çekin.",
      imageUrl: "https://i.hizliresim.com/swicv7q.jpg",
      className: "xl:col-span-8 col-span-12 h-[250px]md:h-[300px] xl:h-[385px]",
      descriptionMaxWidth: "40%",
    },
    {
      title: "Sunum Tasarımı",
      description:
        "Etkileyici ve profesyonel sunumlarla fikirlerinizi güçlü bir şekilde ifade edin. Satış ve tanıtım sunumlarınız için özgün tasarımlar sağlıyoruz.",
      imageUrl: "https://i.hizliresim.com/51ngsqc.jpg",
      className:
        "xl:col-span-4 col-span-12 xl:row-span-2 h-[250px] xl:h-[800px] md:h-[300px] xl:h-[800px] ",
      descriptionMaxWidth: "90%",
    },
    {
      title: "Konsept Oluşturma",
      description:
        "Reklam kampanyalarınız için yaratıcı ve özgün konseptler geliştiriyoruz. Çevrimiçi ve çevrimdışı tüm kanallar için 360 derece fikirler edinin.",
      imageUrl: "https://i.hizliresim.com/5usuqbi.jpg",
      className:
        "xl:col-span-4 col-span-12 h-[250px]  md:h-[300px] xl:h-[385px]",
      descriptionMaxWidth: "90%",
    },
    {
      title: "Baskı Tasarımı",
      description:
        "Dijital ve basılı materyaller için estetik ve dikkat çekici tasarımlar yaratıyoruz. Kartvizitlerden kataloglara, tüm baskı işlerinizde yanınızdayız.",
      imageUrl: "https://i.hizliresim.com/pylhg0s.jpg",
      className:
        "xl:col-span-4 col-span-12 h-[250px] md:h-[300px] xl:h-[385px] ",
      descriptionMaxWidth: "90%",
    },
  ];

  return (
    <section className="container max-w-[85rem] mx-auto py-16 px-4">
      <div className="grid grid-cols-12 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
            className={service.className}
            descriptionMaxWidth={service.descriptionMaxWidth}
          />
        ))}
      </div>
    </section>
  );
};

export default DesignServicesTwoSection;
