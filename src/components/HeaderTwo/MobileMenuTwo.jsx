/* eslint-disable react/prop-types */
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import { motion } from "framer-motion";
import MenuItemsTwo from "./MenuItemsTwo";

const MobileMenuTwo = ({ isOpen, setIsOpen, isScrolled }) => (
  <div>
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 1.5 }}
      className="xl:hidden text-2xl z-50 ml-auto mr-2"
      onClick={() => setIsOpen(!isOpen)}
    >
      <HiOutlineMenu className={isScrolled ? "text-black" : "text-black"} />
    </motion.button>

    <div
      className={`fixed inset-0 bg-bgHeaderColorMenu transform ${
        isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      } transition-all duration-500 ease-in-out z-50 xl:hidden`}
    >
      {isOpen && (
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 1.5 }}
          className="absolute top-6 right-6 text-white text-3xl z-50"
          onClick={() => setIsOpen(false)}
        >
          <IoClose />
        </motion.button>
      )}
      <div className="h-full flex items-center justify-center">
        <MenuItemsTwo isScrolled={isScrolled} isMobile={true} />
      </div>
    </div>
  </div>
);

export default MobileMenuTwo;
