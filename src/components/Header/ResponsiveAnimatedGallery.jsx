import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import PropTypes from "prop-types";

const ResponsiveAnimatedGallery = ({
  imagesResponsiveColumn1,
  imagesResponsiveColumn2,
}) => {
  return (
    <div className="relative w-full h-[68vh] overflow-hidden bg-bgHeaderColor">
      {/* Kenarlarda gradyan efektleri */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-bgHeaderColor to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-bgHeaderColor to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-bgHeaderColor to-transparent z-10"></div>
      <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-bgHeaderColor to-transparent z-10"></div>

      {/* Animasyonlu galeriler */}
      <div className="w-full h-full flex flex-col items-center justify-between gap-y-0 px-">
        {/* 1. Swiper: Sağdan sola */}
        <Swiper
          direction="horizontal"
          slidesPerView="auto"
          freeMode={true}
          allowTouchMove={false}
          simulateTouch={false}
          touchEventsTarget="none"
          noSwiping={true}
          preventInteractionOnTransition={true}
          spaceBetween={10}
          autoplay={{
            delay: 1,
            reverseDirection: true,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            stopOnLastSlide: false,
          }}
          speed={6000}
          loop={true}
          modules={[Autoplay, FreeMode]}
          className="w-full h-full"
        >
          {imagesResponsiveColumn1.map((image, index) => (
            <SwiperSlide key={index}>
              <a href="#">
                <img
                  src={image}
                  alt={`Row 1 Image ${index}`}
                  className="w-full h-auto object-cover rounded-lg "
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 2. Swiper: Soldan sağa */}
        <Swiper
          direction="horizontal"
          slidesPerView="auto"
          freeMode={true}
          allowTouchMove={false}
          simulateTouch={false}
          touchEventsTarget="none"
          noSwiping={true}
          preventInteractionOnTransition={true}
          spaceBetween={10}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            stopOnLastSlide: false,
          }}
          speed={6000}
          loop={true}
          modules={[Autoplay, FreeMode]}
          className="w-full h-full"
        >
          {imagesResponsiveColumn2.map((image, index) => (
            <SwiperSlide key={index}>
              <a href="#">
                <img
                  src={image}
                  alt={`Row 2 Image ${index}`}
                  className="w-full h-auto object-cover rounded-lg "
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-bgHeaderColor to-transparent z-10"></div>
    </div>
  );
};
ResponsiveAnimatedGallery.propTypes = {
  imagesResponsiveColumn1: PropTypes.arrayOf(PropTypes.string).isRequired,
  imagesResponsiveColumn2: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ResponsiveAnimatedGallery;
