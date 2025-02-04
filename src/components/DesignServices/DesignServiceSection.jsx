import { motion } from "framer-motion";
import { PiArrowUpRightBold } from "react-icons/pi";

const DesignServiceSection = () => {
  return (
    <div className="container max-w-[84rem] mx-auto px-4 mb-40 -mt-8 py-16 md:py-8 xl:px-2 lg:px-6 ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="uppercase font-primaryRegular text-base  text-black border-b-2 border-gray-400 py-3">
            ÇEŞİTLİ TASARIM HİZMETLERİMİZ PARMAKLARINIZIN UCUNDA
          </div>

          <h2 className="text-3xl md:text-4xl font-primaryLight text-black leading-tight">
            Grafik tasarım, illüstrasyon,
            <br /> markalaşma ve daha <br /> fazlasına ulaşın
          </h2>

          <div className="space-y-4 pb-5">
            <p className="text-lg font-primaryRegular text-black">
              İlgi çekici ve ihtiyacınıza özel tüm tasarım
              <br /> ihtiyaçlarınız için EO Creativin uzmanlaşmış ekibi
              <br />
              yanınızda.
            </p>

            <p className="text-black font-primaryRegular pt-6">
              Geleneksel grafik tasarım ihtiyaçlarından dijital platformlarda
              gelişen ihtiyaçlara ve hazır temposuna ayak uyduracak şekilde
              tasarım
              <br /> çözümlerimizi sizinle buluşturuyoruz. İster abonelik modeli
              isterseniz de
              <br /> proje bazlı hizmet paketlerimize ulaşmak için hemen
              iletişime geçin.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`flex items-center space-x-2 text-sm  font-primarySemiBold py-3 px-4 rounded-lg transition-colors duration-500 ease-in-out ${"bg-black text-white "}`}
          >
            <span>REZERVASYON YAPIN</span>
            <PiArrowUpRightBold stroke="1" size={18} />
          </motion.button>
        </div>

        {/* Right Content - Logo Design */}
        <div className="hidden md:block w-full md:w-1/3 relative">
          <div className="relative w-full aspect-square">
            {/* Main Logo */}
            <div
              className="absolute right-32 xl:right-44 xl:top-10 lg:right-32 w-3/5 aspect-square bg-[#001F2D]  transform -rotate-6"
              style={{ borderRadius: "20%" }}
            >
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="w-1/2  h-1/2 bg-white " />
                <img src="/eologo_one.svg" />
              </div>
            </div>

            {/* Secondary Logo */}
            <div
              className="absolute left-48 bottom-10 xl:left-52 xl:bottom-3 lg:left-40  w-2/5 aspect-square bg-white border border-eoLogoBackgroundColor rotate-12"
              style={{ borderRadius: "20%" }}
            >
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="w-1/2 h-1/2 " />
                <img src="/eologo_one.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignServiceSection;
