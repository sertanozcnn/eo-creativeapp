import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

const ImageSectionSlider = () => {
  const images = [
    {
      title: "Ürün Tasarımı",
      tags: ["TASARIM", "MOCKUP", "ÜRÜN"],
      image: "https://i.hizliresim.com/qyjerrx.png",
    },
    {
      title: "Markalaşma",
      tags: ["PROJE GELİŞTİRME", "MARKA GELİŞTİRME", "YENİDEN MARKALAŞMA"],
      image: "https://i.hizliresim.com/56kl4dr.jpg",
    },
    {
      title: "Sosyal Medya",
      tags: ["KONSEPT TASARIM", "MEDYA", "İŞ BİRLİĞİ", "INFLUENCER"],
      image: "https://i.hizliresim.com/4p7xrvd.jpg",
    },
    {
      title: "E-Posta Tasarımı",
      tags: ["HABER BÜLTENİ", "ŞABLONLAR", "HTML5"],
      image: "https://i.hizliresim.com/6ycwupj.jpg",
    },
  ];

  // Daha akıcı kaydırma için daha fazla resim ekle
  const extendedImages = [...images, ...images, ...images, ...images];

  return (
    <div className="relative w-full image-section mt-20">
      <Swiper
        modules={[FreeMode, Mousewheel, Autoplay]}
        spaceBetween={16} // Daha küçük boşluk
        slidesPerView="auto" // Ekran genişliğine göre ayarlanır
        freeMode={true}
        mousewheel={{ forceToAxis: true, sensitivity: 0.4 }}
        grabCursor={true}
        loopAdditionalSlides={10}
        speed={12900} // Daha düşük hız kasılmayı azaltır
        loop={true}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="mySwiper"
      >
        {extendedImages.map((item, index) => (
          <SwiperSlide key={index} className="rounded-2xl overflow-hidden">
            <div className="relative w-full h-full group">
              <h3 className="absolute top-10 left-1/2 transform  min-w-[250px] max-w-[300px] px-2 flex items-center justify-center -translate-x-1/2 text-white text-xl lg:text-2xl xl:text-xl 2xl:text-2xl font-primaryRegular z-10">
                {item.title}
              </h3>
              <img src={item.image} alt={item.title} className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <div className="flex flex-wrap gap-1 ">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-[11px] border-white border-2 font-primarySemiBold text-white px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSectionSlider;
