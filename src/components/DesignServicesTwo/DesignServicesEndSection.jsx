import { PiArrowUpRightBold } from "react-icons/pi";
import { motion } from "framer-motion";

const DesignServicesEndSection = () => {
  return (
    <div className="container max-w-[85rem] mx-auto py-16 px-4 flex flex-col md:flex-row items-center gap-28">
      {/* Left side - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="https://i.hizliresim.com/3kzchje.jpg"
          alt="Design Services"
          className="rounded-xl w-full md:h-[35rem] h-[250px] object-cover"
        />
      </div>

      {/* Right side - Content */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-6 text-center md:text-left">
        <h2 className="text-4xl font-primaryLight text-white">
          Tasarım hizmetlerimizi
          <br /> farklı yapan nedir?
        </h2>

        <p className="font-primaryMedium text-white text-xl">
          Şeffaf abonelik modeliyle hızlı ve yüksek kaliteli
          <br /> tasarım hizmetleri sunuyoruz.
        </p>

        <p className="font-primaryMedium text-white text-sm w">
          Her projeye özel olarak ayrılan profesyonel yaklaşımımızla, süreç
          boyunca <br className="hidden:block" />
          hızlı geri dönüşler ve mükemmel sonuçlar sunmayı taahhüt ediyoruz.
          <br className="hidden:block" /> Şeffaflık ilkesiyle, abonelik
          sürecindeki tüm adımlar önceden belirlenir ve
          <br className="hidden:block" /> sürpriz maliyetlere yer bırakılmaz.
          Zamandan tasarruf ederek markanıza <br className="hidden:block" />
        </p>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center space-x-2 text-sm font-primarySemiBold py-3 px-3 rounded-lg transition-colors duration-500 ease-in-out bg-bgHeaderButton text-black"
        >
          <span>REZERVASYON YAPIN</span>
          <PiArrowUpRightBold size={18} />
        </motion.button>
      </div>
    </div>
  );
};

export default DesignServicesEndSection;
