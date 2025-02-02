import { motion } from "framer-motion";

const topLogos = [
  { img: "/brand1.svg" },
  { img: "/brand2.svg" },
  { img: "/brand3.svg" },
  { img: "/brand4.svg" },
  { img: "/brand5.svg" },
  { img: "/brand6.svg" },
  { img: "/brand7.svg" },
  { img: "/brand8.svg" },
  { img: "/brand9.svg" },
  { img: "/brand10.svg" },
  { img: "/brand11.svg" },
  { img: "/brand12.svg" },
  { img: "/brand13.svg" },
  { img: "/brand14.svg" },
];

const BrandSliderTwo = () => {
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
        {[...topLogos, ...topLogos].map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-[140px] h-[70px] flex-shrink-0"
          >
            <img
              src={logo.img}
              alt="Brand logo"
              className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all filter invert"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default BrandSliderTwo;
