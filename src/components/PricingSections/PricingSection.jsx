import { motion } from "framer-motion";
import { useState } from "react";
import ServiceSectionTwo from "../ServicesTwo/ServiceSectionTwo";

const PricingSection = () => {
  const [activeCard, setActiveCard] = useState("pro");
  const [activeTab, setActiveTab] = useState("pro");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setActiveCard(tabId);
  };

  return (
    <div>
      <div className="max-w-[84rem] mx-auto px-8 sm:px-12 md:px-20 lg:px-32 xl:px-1 flex flex-col md:flex-row justify-between items-center pt-24 text-center md:text-left">
        <div className="text-4xl sm:text-6xl md:text-5xl -mt-12 font-primaryLight ">
          <h1 className="leading-[1.2]">
            Tasarım ihtiyaçlarınız <br className="hidden md:block" /> için basit
            ve şeffaf <br className="hidden md:block" /> fiyatlandırma
          </h1>
        </div>
        <div className="text-md max-w-sm text-black font-primaryRegular mt-6 md:mt-0 xl:mt-0 md:max-w-md">
          <p>
            Sabit bir ücret karşılığında birinci sınıf tasarım çözümlerine
            ulaşın. Tüm iş ihtiyaçlarınızı <br className="hidden md:block" />
            karşılamak için size uygun <br />
            hizmetler sunuyoruz.
          </p>
          <p className="mt-4 text-black font-primaryRegular">
            Şimdi planınızı seçin! <span className="text-lg">🔥</span>
          </p>

          <div className="bg-gray-100 rounded-xl p-2 mt-6 max-w-fit  mx-auto xl:mx-0 md:mx-auto sm:mx-auto ">
            <div className="flex space-x-1 ">
              {["temel", "pro", "size-ozel"].map((tab) => (
                <motion.button
                  key={tab}
                  className={`px-6 py-2 rounded-lg text-sm font-primarySemiBold transition-colors ${
                    activeTab === tab
                      ? "bg-black text-white"
                      : "text-gray-600 hover:bg-gray-200"
                  }`}
                  onClick={() => handleTabClick(tab)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab === "temel"
                    ? "TEMEL"
                    : tab === "pro"
                    ? "PRO"
                    : "SİZE ÖZEL"}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ServiceSectionTwo activeTab={activeTab} activeCard={activeCard} />
    </div>
  );
};

export default PricingSection;
