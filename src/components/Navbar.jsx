import { useState, useEffect } from "react";
import Logo from "./Header/Logo";
import MobileMenu from "./Header/MobileMenu";
import MenuItems from "./Header/MenuItems";
import HeroSection from "./Header/HeroSection";

const Navbar = () => {
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
    <header className="w-full h-full relative bg-bgHeaderColor">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white " : ""
        }`}
      >
        <div className="container mx-auto py-6 flex items-center justify-between px-4 md:px-8 lg:px-24 flex-wrap">
          <Logo isScrolled={isScrolled} />
          <MobileMenu
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            isScrolled={isScrolled}
          />
          <MenuItems isScrolled={isScrolled} />
        </div>
      </nav>
      <HeroSection />
    </header>
  );
};

export default Navbar;
