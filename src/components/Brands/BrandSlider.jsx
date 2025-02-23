import { motion } from "framer-motion";
import { useGetBrandLogosQuery } from "../../redux/services/brandLogoApi";
import { FiLoader } from "react-icons/fi";

const BrandSlider = () => {
  const { data, error, isLoading } = useGetBrandLogosQuery();

  const topLogos = data ? data.logos.filter((logo) => logo.type == "top") : [];
  const bottomLogos = data
    ? data.logos.filter((logo) => logo.type == "bottom")
    : [];

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

  return (
    <div className="relative w-full overflow-hidden py-24">
      {/* Gradient overlays - stronger and wider */}
      <div className="absolute left-0 top-0 z-10 h-full xl:w-[175px] w-[35px]  bg-gradient-to-r from-white via-white to-transparent " />
      <div className="absolute right-0 top-0 z-10 h-full xl:w-[175px] w-[35px]   bg-gradient-to-l from-white via-white to-transparent" />

      {/* Top row - moving left */}
      <motion.div
        className="flex gap-24 mb-12"
        animate={{
          x: [0, -1600],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...topLogos, ...topLogos].map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-[140px] h-[70px] flex-shrink-0"
          >
            <img
              src={logo.img}
              alt="Brand logo"
              className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all"
            />
          </div>
        ))}
      </motion.div>

      {/* Bottom row - moving right */}
      <motion.div
        className="flex gap-24"
        initial={{ x: 0 }}
        animate={{
          x: [-1600, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...bottomLogos, ...bottomLogos].map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-[140px] h-[70px] flex-shrink-0"
          >
            <img
              src={logo.img}
              alt="Brand logo"
              className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default BrandSlider;
