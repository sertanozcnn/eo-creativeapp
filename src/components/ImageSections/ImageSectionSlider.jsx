import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import { useGetImageSectionsQuery } from "../../redux/services/imageSectionApi";
import { FiLoader } from "react-icons/fi";

const ImageSectionSlider = () => {
  const { data, error, isLoading } = useGetImageSectionsQuery();

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <FiLoader className="animate-spin text-bgHeaderColorMenu text-4xl" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="text-black font-primaryMedium">
          Tekrar Deneyiniz {error.message}
        </div>
      </div>
    );
  }

  // Daha akıcı kaydırma için daha fazla resim ekle
  const extendedImages = [
    ...(data?.imageSections || []),
    ...(data?.imageSections || []),
    ...(data?.imageSections || []),
  ];

  return (
    <div className="relative w-full image-section mt-20">
      <Swiper
        modules={[FreeMode, Mousewheel, Autoplay]}
        spaceBetween={16} // Daha küçük boşluk
        slidesPerView="auto" // Ekran genişliğine göre ayarlanır
        freeMode={true}
        mousewheel={{ forceToAxis: true, sensitivity: 0.4 }}
        grabCursor={true}
        loopAdditionalSlides={data?.imageSections?.length || 5}
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
              <h3 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-white text-xl lg:text-2xl xl:text-xl 2xl:text-2xl font-primaryRegular z-10 text-center w-[90%] px-4">
                {item.title}
              </h3>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <div className="flex flex-wrap gap-1 ">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-[10px] md:text-[11px] border-white border-[2px] font-primarySemiBold text-white px-2 py-0.5 rounded-full whitespace-nowrap"
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
