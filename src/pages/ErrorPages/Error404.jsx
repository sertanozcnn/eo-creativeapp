import { useNavigate } from "react-router-dom";
import NavbarTwo from "../../components/NavbarTwo";
import Need from "../../components/Needs/Need";
import { motion } from "framer-motion";
import { PiArrowUpRightBold } from "react-icons/pi";

export const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <NavbarTwo />
      <div className="max-w-[84rem] mx-auto px-8 pt-36 sm:px-12 md:px-20  flex items-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          <div className="w-full md:w-1/2">
            <img
              src="/404-image.png"
              alt="404 Error Illustration"
              className="w-full h-auto max-w-[450px] mx-auto"
            />
          </div>

          {/* Left Content */}
          <div className="w-full md:w-1/2 space-y-4 -mt-0 xl:-mt-40 text-center md:text-left flex flex-col items-center md:items-start">
            <h1 className="text-4xl lead md:text-5xl lg:text-5xl font-primaryMedium text-black">
              Sayfa Bulunamadı!
            </h1>
            <p className="text-base font-primaryRegular text-[#818181] pb-6">
              Aramaya devam ediyoruz.😊
            </p>

            <motion.button
              onClick={() => navigate("/")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center  uppercase space-x-2 text-sm font-primarySemiBold py-3 px-3 rounded-3xl transition-colors duration-500 ease-in-out
          ${"bg-bgHeaderButtonPrimary text-black "}`}
            >
              <span>GERİ DÖN</span>
              <PiArrowUpRightBold size={18} />
            </motion.button>
          </div>

          {/* Right Content - Image */}
        </div>
      </div>
      <Need />
    </div>
  );
};
