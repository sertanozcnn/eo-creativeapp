import { motion } from "framer-motion";
import { PiArrowUpRightBold } from "react-icons/pi";

const NeedSection = () => {
  const cards = [
    {
      icon: <img src="/book_need.svg" className="w-12 h-12" />,
      title: "İlham almak ister misiniz?",
      description:
        "Trendler ve ipuçları için blog sayfamızı inceleyebilirsiniz.",
      buttonText: "Devamını Oku",
    },
    {
      icon: <img src="/heart_need.svg" className="w-12 h-12 " />,
      title: "Bize ulaşmak ister misiniz?",
      description:
        "Dilediğiniz konuda bilgi almak için iletişim sayfamızı ziyaret edin.",
      buttonText: "Devamını Oku",
    },
  ];

  return (
    <div className="container mx-auto xl:px-4 lg:px-5 md:px-10 px-6 max-w-[85rem] mt-8 mb-32">
      <div className="grid md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              transition: { duration: 0.3 },
            }}
            className="bg-white rounded-2xl p-8 border border-bgBorderGray hover:shadow-lg transition-all hover:border-none duration-500 group"
          >
            <div className="space-y-6">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-start">
                {card.icon}
              </div>

              <h3 className="text-3xl font-primarySemiBold text-black ">
                {card.title}
              </h3>

              <p className="text-bgNeedGray font-primaryRegular text-sm">
                {card.description}
              </p>

              <button className="flex items-center space-x-2 text-black font-primarySemiBold mt-5 ">
                <span>{card.buttonText}</span>
                <motion.div
                  className="w-5 h-5"
                  initial={{ x: 0, y: 0 }}
                  whileHover={{
                    x: 5,
                    y: -5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <PiArrowUpRightBold size={18} />
                </motion.div>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NeedSection;
