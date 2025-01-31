import { motion } from "framer-motion";

const topLogos = [
  { img: "/brand1.svg" },
  { img: "/brand2.svg" },
  { img: "/brand3.svg" },
  { img: "/brand4.svg" },
  { img: "/brand5.svg" },
  { img: "/brand6.svg" },
  { img: "/brand7.svg" },
];

const bottomLogos = [
  { img: "/brand8.svg" },
  { img: "/brand9.svg" },
  { img: "/brand10.svg" },
  { img: "/brand11.svg" },
  { img: "/brand12.svg" },
  { img: "/brand13.svg" },
  { img: "/brand14.svg" },
];

const BrandSlider = () => {
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
