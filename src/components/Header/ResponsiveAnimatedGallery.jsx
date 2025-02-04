import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const ResponsiveAnimatedGallery = () => {
  const imagesColumn1 = [
    "https://i.hizliresim.com/b56ghwx.png",
    "https://i.hizliresim.com/l2qfnof.jpg",
    "https://i.hizliresim.com/d589pqi.jpg",
    "https://i.hizliresim.com/tk8f6mj.jpg",
    "https://i.hizliresim.com/3u9tqav.jpg",
    "https://i.hizliresim.com/amptnxl.jpg",
    "https://i.hizliresim.com/tupupce.jpg",
    "https://i.hizliresim.com/3u9tqav.jpg",
  ];

  const imagesColumn2 = [
    "https://i.hizliresim.com/tupupce.jpg",
    "https://i.hizliresim.com/l63t6ov.jpg",
    "https://i.hizliresim.com/amptnxl.jpg",
    "https://i.hizliresim.com/d0eox64.jpg",
    "https://i.hizliresim.com/3u9tqav.jpg",
    "https://i.hizliresim.com/tg83fjn.jpg",
    "https://i.hizliresim.com/q54tqa2.jpg",
  ];

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
          {imagesColumn1.map((image, index) => (
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
          {imagesColumn2.map((image, index) => (
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

export default ResponsiveAnimatedGallery;
