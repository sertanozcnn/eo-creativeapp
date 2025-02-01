import { PiArrowUpRightBold } from "react-icons/pi";
import ResponsiveAnimatedGallery from "./ResponsiveAnimatedGallery";
import AnimatedGallery from "./AnimatedGallery";
import { motion } from "framer-motion";

const HeroSection = () => (
  <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between px-4 lg:px-24 h-3/4 pt-20 ">
    {" "}
    {/* Adjusted top padding */}
    <div className="text-white xl:w-1/2 space-y-8">
      <h1 className="text-3xl xl:text-6xl font-primaryRegular mt-10  xl:-mt-14 ">
        Hızlı. Yaratıcı.
        <br className="hidden xl:block" />
        Size Özel.
      </h1>

      <p className="text-lg font-primaryLight ">
        Hayal edebileceğiniz her şeyi hızlı ve uygun
        <br className="hidden xl:block" />
        fiyatlı bir şekilde, size özel ödeme yöntemleri
        <br className="hidden xl:block" />
        ile yaratıcı hizmetlerle ekibinizi ve işinizi
        <br className="hidden xl:block" />
        güçlendirin.
      </p>
      <motion.button
        className="flex items-center space-x-2 bg-bgHeaderButton text-black text-sm font-primarySemiBold py-3 px-3 rounded-lg hover:bg-white transition-colors duration-500 ease-in-out justify-center xl:justify-start mx-auto xl:mx-0"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span>HAYDİ BAŞLAYALIM</span>
        <PiArrowUpRightBold size={18} />
      </motion.button>
    </div>
    <div className="xl:w-2/3 flex items-center justify-end transform animated-gallery">
      <div className="hidden xl:block translate-x-40 -translate-y-4">
        {" "}
        {/* Adjusted Y translation */}
        <AnimatedGallery />
      </div>
      <div className="block xl:hidden w-full mt-8">
        <ResponsiveAnimatedGallery />
      </div>
    </div>
  </div>
);

export default HeroSection;
