/* eslint-disable react/prop-types */
import { PiArrowUpRightBold } from "react-icons/pi";
import { motion } from "framer-motion";

const MenuItemsTwo = ({ isScrolled, isMobile }) => {
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
              isMobile ? "text-white" : isScrolled ? "text-black" : "text-black"
            }
            }`}
          >
            {item}
          </a>
          <div
            className={`absolute left-0 bottom-0 w-0 h-0.5 ${
              isMobile ? "bg-white" : isScrolled ? "bg-black" : "bg-black"
            }  group-hover:w-full transition-all duration-500 ease-in-out`}
          ></div>
        </li>
      ))}

      <li>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`flex items-center space-x-2 text-sm font-primarySemiBold py-3 px-3 rounded-lg transition-colors duration-500 ease-in-out
          ${"bg-bgHeaderButtonPrimary text-black "}`}
        >
          <span>PLAN SEÇİN</span>
          <PiArrowUpRightBold size={18} />
        </motion.button>
      </li>

      <li>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`flex items-center space-x-2 text-sm font-primarySemiBold py-3 px-3 rounded-lg transition-colors duration-500 ease-in-out ${"bg-black text-white "}`}
        >
          <span>REZERVASYON YAPIN</span>
          <PiArrowUpRightBold size={18} />
        </motion.button>
      </li>
    </ul>
  );
};

export default MenuItemsTwo;
