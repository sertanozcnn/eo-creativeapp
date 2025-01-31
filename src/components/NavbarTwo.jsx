import { useState, useEffect } from "react";
import LogoTwo from "./HeaderTwo/LogoTwo";
import MenuItemsTwo from "./HeaderTwo/MenuItemsTwo";
import MobileMenuTwo from "./HeaderTwo/MobileMenuTwo";

const NavbarTwo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full h-full sticky top-0 z-50 mb-20 bg-bgHeaderColor">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white " : ""
        }`}
      >
        <div className="container mx-auto py-6 flex items-center justify-between px-4 md:px-8 lg:px-24 flex-wrap">
          <LogoTwo />
          <MobileMenuTwo
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            isScrolled={isScrolled}
          />
          <MenuItemsTwo isScrolled={isScrolled} />
        </div>
      </nav>
    </header>
  );
};

export default NavbarTwo;
