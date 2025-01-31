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
    "https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/70365/forest-sunbeams-trees-sunlight-70365.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  const imagesColumn2 = [
    "https://images.pexels.com/photos/158617/swallow-tail-butterfly-insect-black-158617.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/975231/pexels-photo-975231.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/531857/pexels-photo-531857.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/161950/skogafoss-waterfall-dinamet7-water-161950.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/128868/thimble-common-foxglove-digitalis-purpurea-cinquefoil-128868.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=600",
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
          spaceBetween={10} // Boşlukları neredeyse sıfırladım
          autoplay={{
            delay: 1,
            reverseDirection: true,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={10000}
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
          spaceBetween={10}
          autoplay={{
            delay: 1,
            reverseDirection: false,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={10000}
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
