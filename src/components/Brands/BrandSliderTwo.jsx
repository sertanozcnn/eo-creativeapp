import { motion } from "framer-motion";
import { FiLoader } from "react-icons/fi";
import { useGetBrandLogosQuery } from "../../redux/services/brandLogoApi";

const BrandSliderTwo = () => {
  const { data, error, isLoading } = useGetBrandLogosQuery();

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

  const allLogos = data ? [...data.logos, ...data.logos] : [];

  return (
    <div className="relative max-w-[94rem]  mt-16 mx-auto  overflow-hidden py-0">
      {/* Gradient overlays - stronger and wider */}
      <div className="absolute left-0 top-0 z-10 h-full xl:w-[155px] w-[35px]  bg-gradient-to-r from-bgHeaderColor via-bgHeaderColor to-transparent " />
      <div className="absolute right-0 top-0 z-10 h-full xl:w-[175px] w-[35px]   bg-gradient-to-l from-bgHeaderColor via-bgHeaderColor to-transparent" />

      {/* Top row - moving left */}
      <motion.div
        className="flex gap-24 mb-12 w-full"
        animate={{
          x: [0, -1600],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {allLogos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-[140px] h-[70px] flex-shrink-0"
          >
            <img
              src={logo.img}
              alt="Brand logo"
              className="max-w-full max-h-full object-contain grayscale  transition-all filter invert"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default BrandSliderTwo;
