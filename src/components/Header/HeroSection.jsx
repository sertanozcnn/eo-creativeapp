import { PiArrowUpRightBold } from "react-icons/pi";
import ResponsiveAnimatedGallery from "./ResponsiveAnimatedGallery";
import AnimatedGallery from "./AnimatedGallery";
import { motion } from "framer-motion";
import { useGetHomeRightsQuery } from "../../redux/services/homeRightApi";
import { FiLoader } from "react-icons/fi";
import { useGetGalleryAnimatedsQuery } from "../../redux/services/galleryAnimatedApi";

const HeroSection = () => {
  const {
    data: homeData,
    error: homeError,
    isLoading: isHomeLoading,
  } = useGetHomeRightsQuery();
  const {
    data: galleryData,
    error: galleryError,
    isLoading: isGalleryLoading,
  } = useGetGalleryAnimatedsQuery();

  const isLoading = isHomeLoading || isGalleryLoading;
  const error = homeError || galleryError;

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <FiLoader className="animate-spin text-white text-4xl" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="text-white font-primaryMedium">
          Tekrar Deneyiniz {error.message}
        </div>
      </div>
    );
  }

  if (!homeData || homeData.length === 0 || !galleryData) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="text-white font-primaryMedium">Tekrar Deneyiniz</div>
      </div>
    );
  }

  const homeRight = homeData[0];

  const allImages = [
    ...galleryData.imagesColumn1,
    ...galleryData.imagesColumn2,
    ...galleryData.imagesColumn3,
  ];

  const midIndex = Math.ceil(allImages.length / 2);
  const imagesResponsiveColumn1 = allImages.slice(0, midIndex);
  const imagesResponsiveColumn2 = allImages.slice(midIndex);

  const handleScroll = () => {
    const targetSection = document.getElementById("target-section");
    if (targetSection) {
      const offset = 140;
      const elementPosition =
        targetSection.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between px-4 lg:px-24 h-3/4 pt-20 ">
      <div className="text-white xl:w-1/2 space-y-8">
        <h1 className="text-3xl xl:text-6xl font-primaryRegular mt-10  xl:-mt-14 leading-loose">
          {homeRight.titleOne} {homeRight.titleTwo}
          <br className="hidden xl:block " />
          <span className="xl:block xl:mt-3"> {homeRight.titleThree}</span>
        </h1>

        <p className="text-lg font-primaryLight ">
          {homeRight.titleDescriptionOne}
          <br className="hidden xl:block" />
          {homeRight.titleDescriptionTwo}
          <br className="hidden xl:block" />
          {homeRight.titleDescriptionThree}
          <br className="hidden xl:block" />
          {homeRight.titleDescriptionFour}
        </p>
        <motion.button
          className="flex items-center space-x-2 bg-bgHeaderButton text-black text-sm font-primarySemiBold py-3 px-3 rounded-lg hover:bg-white transition-colors duration-500 ease-in-out justify-center xl:justify-start mx-auto xl:mx-0"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleScroll}
        >
          <span>HAYDİ BAŞLAYALIM</span>
          <PiArrowUpRightBold size={18} />
        </motion.button>
      </div>
      <div className="xl:w-2/3 flex items-center justify-end transform animated-gallery">
        <div className="hidden xl:block translate-x-40 -translate-y-4">
          <AnimatedGallery galleryData={galleryData} />
        </div>
        <div className="block xl:hidden w-full mt-8">
          <ResponsiveAnimatedGallery
            imagesResponsiveColumn1={imagesResponsiveColumn1}
            imagesResponsiveColumn2={imagesResponsiveColumn2}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
