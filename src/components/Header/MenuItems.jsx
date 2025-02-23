/* eslint-disable react/prop-types */
import { PiArrowUpRightBold } from "react-icons/pi";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { useNavigate } from "react-router-dom";

const MenuItems = ({ isScrolled, isMobile }) => {
  const navigate = useNavigate();

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

  const links = {
    FİYATLANDIRMA: "/fiyatlandirma",
    HİZMETLER: "/hizmetler",
    HAKKIMIZDA: "/hakkimizda",
    BLOG: "/blog",
    İLETİŞİM: "/iletisim",
  };

  return (
    <ul
      className={`flex flex-col items-center justify-center space-y-6 ${
        !isMobile ? "hidden xl:flex xl:flex-row xl:space-y-0 xl:space-x-6" : ""
      }`}
    >
      {Object.keys(links).map((item) => (
        <li key={item} className="relative group">
          <a
            href={links[item]}
            className={`block font-primarySemiBold text-base ${
              isScrolled && !isMobile ? "text-black" : "text-white"
            }`}
          >
            {item}
          </a>
          <div
            className={`absolute left-0 bottom-0 w-0 h-0.5 ${
              isMobile ? "bg-white" : isScrolled ? "bg-black" : "bg-white"
            }  group-hover:w-full transition-all duration-500 ease-in-out`}
          ></div>
        </li>
      ))}
      <li>
        <motion.button
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
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`flex items-center space-x-2 text-sm font-primarySemiBold py-3 px-3 rounded-lg transition-colors duration-500 ease-in-out ${
            isScrolled
              ? "bg-bgHeaderButtonPrimary text-black"
              : "bg-bgHeaderButton text-black hover:bg-white"
          }`}
        >
          <span>REZERVASYON YAPIN</span>
          <PiArrowUpRightBold size={18} />
        </motion.button>
      </li>
      <li>
        <motion.button
          onClick={() => navigate("/fiyatlandirma")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`flex items-center space-x-2 text-sm font-primarySemiBold py-3 px-3 rounded-lg transition-colors duration-500 ease-in-out
          ${
            isScrolled
              ? "bg-black text-white"
              : "bg-bgHeaderButtonPrimary text-black hover:bg-bgHeaderButton"
          }`}
        >
          <span>PLAN SEÇİN</span>
          <PiArrowUpRightBold size={18} />
        </motion.button>
      </li>
    </ul>
  );
};

export default MenuItems;
