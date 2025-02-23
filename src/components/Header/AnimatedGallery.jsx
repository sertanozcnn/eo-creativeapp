/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

const AnimatedGallery = ({ galleryData }) => {
  const imageColumns = [
    galleryData.imagesColumn1,
    galleryData.imagesColumn2,
    galleryData.imagesColumn3,
  ];

  const duplicateSlides = (slides, minSlides = 15) => {
    const repeats = Math.ceil(minSlides / slides.length);
    return Array(repeats).fill(slides).flat().slice(0, minSlides);
  };

  const swiperCommonProps = {
    direction: "vertical",
    slidesPerView: 2.5,
    freeMode: {
      enabled: true,
      sticky: true,
      momentum: true,
      momentumRatio: 0.2,
      momentumVelocityRatio: 0.5,
    },
    spaceBetween: 24,
    centeredSlides: true,
    updateOnWindowResize: true,
    watchSlidesProgress: true,
    allowTouchMove: false, //el ile kaydırma kapalı
    simulateTouch: false, //el ile kaydırma kapalı
    loop: true,
    modules: [Autoplay, FreeMode],
    className: "w-1/3 h-full",
  };

  return (
    <div className="relative w-full h-[92vh] overflow-hidden bg-bgHeaderColor">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-bgHeaderColor to-transparent z-10"></div>

      <div className="flex h-full items-center justify-between px-4 space-x-2 lg:space-x-4">
        {imageColumns.map((images, index) => (
          <Swiper
            key={index}
            {...swiperCommonProps}
            autoplay={{
              delay: 0,
              reverseDirection: index % 2 === 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            speed={13000}
          >
            {duplicateSlides(images || []).map((image, imgIndex) => (
              <SwiperSlide key={imgIndex}>
                <div className="w-[230px] h-[300px]">
                  <img
                    src={image}
                    alt={`Column ${index + 1} Image ${imgIndex}`}
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-bgHeaderColor to-transparent z-10"></div>
    </div>
  );
};

export default AnimatedGallery;
