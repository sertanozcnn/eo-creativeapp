import { motion } from "framer-motion";
import { PiArrowUpRightBold } from "react-icons/pi";

const Plan = () => {
  return (
    <div className="mt-14 ">
      <div className="px-5 xl:px-2 py-12 mx-auto container max-w-[85rem]">
        <div className="bg-bgHeaderButton rounded-3xl p-4 md:p-8 lg:p-7">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-primaryRegular text-black mb-6 max-w-5xl">
            Mükemmel bir plana ulaşmak için <br /> sadece bir adım kaldı.
            Aşağıdaki butonlardan birine hemen tıklayın.
          </h1>

          <div className="border-t border-black opacity-15 "></div>

          {/* Metin ve butonları aynı div içinde hizalayalım */}
          <div className="flex flex-col sm:flex-row gap-4 mt-7 items-center sm:items-start">
            {/* Metin kısmı */}
            <div className="flex items-center gap-2 sm:gap-6">
              <div className="flex-shrink-0">
                <img
                  src="/plan_design.svg"
                  className="max-w-[120px] max-h-[120px]"
                />
              </div>
              <p className="text-black font-primaryRegular text-sm md:text-base">
                SADECE BİRKAÇ BOŞ YER KALDI, O YÜZDEN ACELE EDİN!
              </p>
            </div>

            {/* Butonlar kısmı */}
            <div className="flex flex-col sm:flex-row gap-5 justify-between sm:justify-end xl:ml-auto items-center sm:items-start">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                PiArrowUpRightBold
                className="bg-black text-white px-3 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-black/90 transition-colors"
              >
                PLAN SEÇİN
                <PiArrowUpRightBold className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-black text-white px-3 py-3 space-x-2 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-black/90 transition-colors"
              >
                REZERVASYON YAPIN
                <PiArrowUpRightBold className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
