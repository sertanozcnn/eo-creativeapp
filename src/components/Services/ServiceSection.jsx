import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getCalApi } from "@calcom/embed-react";
import { useNavigate } from "react-router-dom";

const ServiceSection = () => {
  const navigate = useNavigate();

  const [activeCard, setActiveCard] = useState("pro");
  const [activeTab, setActiveTab] = useState("pro");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setActiveCard(tabId);
  };

  const cards = [
    {
      id: "temel",
      title: "TEMEL",
      price: "32.500 TL",
      description: "Tek seferlik iş ihtiyaçlarınız için mükemmel.",
      features1: [
        "2 haftalık teslim süresi",
        "Sınırsız revizyon",
        "Uzman ekip",
      ],
      features2: [
        "Logo Tasarımı",
        "Kartvizit Tasarımı",
        "Bank Tasarımı",
        "Katalog Tasarımı",
        "Antetli Kağıt Tasarımı",
        "Zarf Tasarımı",
        "Fatura Tasarımı",
        "Çepli Dosya Tasarımı",
      ],
      tags: ["MARKALAŞMA", "GRAFİK TASARIM", "LOGO TASARIMI"],
    },
    {
      id: "pro",
      title: (
        <span>
          PRO{" "}
          <img
            src="/pro_star.svg"
            alt="star icon"
            className="inline-block w-3 h-2"
          />
        </span>
      ),
      price: "53.000 TL",
      originalPrice: "62.500 TL",
      description: "Kapsamlı işleriniz için çok yönlü çözümler.",
      features1: [
        "3+ haftalık teslim süresi",
        "Sınırsız revizyon",
        "Uzman ekip",
      ],
      features2: [
        "Kurumsal Kimlik Kılavuzu",

        "Grafik Tasarım (Her şey dahil)",
        "Web Tasarımı",
        "3D Tasarım",
        "Logo Tasarımı",
        "Mockup Tasarımı",
        "UI/UX Tasarımı",
        "İllüstrasyonlar",
      ],
      tags: [
        "MARKALAŞMA",
        "GRAFİK TASARIM",
        "LOGO TASARIMI",
        "3D TASARIM",
        "İLLÜSTRASYON",
        "UX TASARIMI",
        "WEB TASARIMI",
      ],
      highlight: true,
    },
    {
      id: "size-ozel",
      title: "Proje Tabanlı",
      subtitle: "Hedef odaklı uzun dönemli projeleriniz için.",
      features: [
        "Belirlenmiş teslim tarihleri",
        "Uzman ekip",
        "Proje başına özelleştirilmiş kapsam",
        "Sizin ihtiyacınıza yönelik",
      ],
      contactText:
        "Size nasıl yardımcı olabileceğimiz hakkında daha fazla bilgi edinin.",
    },
  ];

  useEffect(() => {
    const loadCalApi = async () => {
      try {
        const cal = await getCalApi({ namespace: "30dk" });
        if (!cal) {
          return;
        }
        cal("ui", {
          theme: "light",
          cssVarsPerTheme: {
            light: { "cal-brand": "#292929" },
            dark: { "cal-brand": "#fafafa" },
          },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      } catch (error) {
        console.error("Cal API yüklenirken hata oluştu:", error);
      }
    };

    loadCalApi();
  }, []);

  return (
    <div className="container mx-auto px-5 xl:px-4 py-12 max-w-[85rem]">
      {/* Top Navigation */}
      <div className="flex flex-col items-center mb-16">
        <div className="bg-gray-100 rounded-xl p-2 mb-4">
          <div className="flex space-x-1">
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

        {/* Info Bar */}
        <div className="flex items-center justify-center space-x-12 mt-14 text-sm text-gray-600">
          <div className="flex items-center font-primarySemiBold text-black">
            <img
              src="/arrow_rotate.svg"
              alt="star icon"
              className="inline-block w-5 h-5 mr-2"
            />
            <span>Sınırsız Revizyon</span>
          </div>
          <div className="flex items-center font-primarySemiBold text-black">
            <img
              src="/creditcard-hand.svg"
              alt="star icon"
              className="inline-block w-5 h-5 mr-2"
            />

            <span>İstediğiniz Zaman İptal Edin</span>
          </div>
          <div className="flex items-center font-primarySemiBold text-black">
            <img
              src="/clock.svg"
              alt="star icon"
              className="inline-block w-5 h-5 mr-2"
            />
            <span>09:00-16:00, Pazartesi-Cuma (GMT+3)</span>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className={`rounded-2xl p-6 ${
              card.highlight
                ? "bg-yellow-400"
                : card.id === "size-ozel"
                ? "bg-gray-100"
                : "bg-bgHeaderButtonPrimary"
            }   relative flex justify-between flex-col ${
              card.id === "size-ozel" ? "" : ""
            }`}
            initial={{ scale: 1 }}
            animate={{
              scale: activeCard === card.id ? 1.03 : 1,
              zIndex: activeCard === card.id ? 10 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            {card.id === "size-ozel" ? (
              // Size Özel Card Layout
              <>
                <div className="space-y-4">
                  <span className="inline-block px-4 py-1 text-xs font-primarySemiBold rounded-full border-2 border-black">
                    SİZE ÖZEL
                  </span>
                  <h3 className="text-2xl font-primarySemiBold mt-4">
                    {card.title}
                  </h3>
                  <p className="text-black font-primaryRegular">
                    {card.subtitle}
                  </p>
                  <ul className="space-y-3 mt-6">
                    {card.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-sm font-primaryRegular"
                      >
                        <svg
                          className="w-5 h-5 mr-2 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="text-black font-primaryRegular mt-6">
                    {card.contactText}
                  </p>
                </div>

                <motion.button
                  className="w-full py-3 px-6 bg-black text-white rounded-lg font-primaryRegular text-sm mt-8"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate("/iletisim")}
                >
                  BİZE ULAŞIN
                </motion.button>
              </>
            ) : (
              // Regular Card Layout
              <>
                <div className="mb-4">
                  <div className="flex gap-2 mb-4">
                    <span
                      className={`px-6 py-1 text-xs font-primarySemiBold rounded-full ${
                        card.id === "temel"
                          ? "bg-transparent text-black"
                          : "bg-black text-white"
                      } border-2 border-black`}
                    >
                      {card.title}
                    </span>
                    {card.id === "pro" && (
                      <span className="px-6 py-1 text-xs font-primarySemiBold rounded-full bg-black text-white border border-black/10">
                        %15 İNDİRİM
                      </span>
                    )}
                  </div>
                  {card.price && (
                    <div className="mb-2">
                      <span className="text-3xl font-primarySemiBold block">
                        {card.price}
                      </span>
                      {card.originalPrice && (
                        <span className="text-sm  line-through ml-1  font-primaryLight text-black">
                          {card.originalPrice}
                        </span>
                      )}
                    </div>
                  )}
                  <p className="text-black font-primaryRegular mt-5">
                    {card.description}
                  </p>
                </div>

                <ul className="space-y-2 mb-2">
                  {card.features1.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center font-primaryRegular text-sm"
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-bgTickBackground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {card.id === "temel" && (
                  <div className="border-t border-bgDividerBgOne  my-4 "></div>
                )}

                {card.id === "pro" && (
                  <div className="border-t border-bgDividerBgTwo opacity-15 my-4"></div>
                )}

                <ul className="space-y-2">
                  {card.features2?.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center font-primaryRegular text-sm"
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-bgTickBackground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {card.id === "temel" && (
                  <div className="border-t border-bgDividerBgOne  my-4"></div>
                )}

                {card.id === "pro" && (
                  <div className="border-t border-bgDividerBgTwo opacity-15 my-4"></div>
                )}
                {card.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 border-2 border-black rounded-full text-xs font-primarySemiBold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <motion.button
                  className="w-full py-3 px-6 bg-black text-white rounded-lg text-sm font-primaryRegular"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-cal-namespace="30dk"
                  data-cal-link="eocreative/30dk"
                  data-cal-config='{"layout":"month_view","theme":"light"}'
                  onClick={async () => {
                    try {
                      const cal = await getCalApi({ namespace: "30dk" });
                      if (!cal) {
                        return;
                      }
                      cal("ui", "open", {
                        calLink: "eocreative/30dk",
                        config: { layout: "month_view", theme: "light" },
                      });
                    } catch (error) {
                      console.error("Cal API yüklenirken hata oluştu:", error);
                    }
                  }}
                >
                  BİR ARAMA PLANLAYIN
                </motion.button>
              </>
            )}
          </motion.div>
        ))}
      </div>

      {/* Questions Section */}
      <div className="mt-8 p-6 bg-gray-100 rounded-xl flex justify-between items-center flex-col md:flex-row">
        <p className="text-xl font-primaryRegular">Sorularınız mı var?</p>
        <motion.button
          className="flex items-center text-sm px-6 py-3 xl:mt-0 mt-5 bg-black text-white rounded-lg font-primaryRegular"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          data-cal-namespace="30dk"
          data-cal-link="eocreative/30dk"
          data-cal-config='{"layout":"month_view","theme":"light"}'
          onClick={async () => {
            try {
              const cal = await getCalApi({ namespace: "30dk" });
              if (!cal) {
                return;
              }
              cal("ui", "open", {
                calLink: "eocreative/30dk",
                config: { layout: "month_view", theme: "light" },
              });
            } catch (error) {
              console.error("Cal API yüklenirken hata oluştu:", error);
            }
          }}
        >
          BİR ARAMA PLANLAYIN
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.button>
      </div>
    </div>
  );
};

export default ServiceSection;
