import { PiArrowUpRightBold } from "react-icons/pi";
import { motion } from "framer-motion";

const HeroSectionTwo = () => (
  <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between px-4 lg:px-24 h-3/4 pt-40 xl:pt-64 ">
    {" "}
    {/* Adjusted top padding */}
    <div className="text-white xl:w-1/2 space-y-8">
      <h1 className="text-3xl text-center xl:text-left  xl:text-6xl font-primaryRegular mt-10  xl:-mt-14 ">
        Markanız için
        <br />
        tasarım hizmetleri
      </h1>

      <p className="text-lg font-primaryLight text-center xl:text-left">
        Tasarım konusunda çözüm arayan şirketler
        <br className="hidden xl:block" />
        uzmanlığımıza başvuruyor. İş ihtiyaçlarınıza
        <br className="hidden xl:block" />
        uygun özelleştirilmiş hizmet almak için
        <br className="hidden xl:block" />
        hemen iletişime geçin.
      </p>
      <motion.button
        className="flex items-center space-x-2 bg-bgHeaderButton text-black text-sm font-primarySemiBold py-3 px-3 rounded-lg hover:bg-white transition-colors duration-500 ease-in-out justify-center xl:justify-start mx-auto xl:mx-0"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span>REZERVASYON YAPIN</span>
        <PiArrowUpRightBold size={18} />
      </motion.button>
    </div>
  </div>
);

export default HeroSectionTwo;
