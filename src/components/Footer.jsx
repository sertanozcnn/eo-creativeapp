import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <footer className="py-3 px-4 md:px-8 lg:px-12">
      <div className="max-w-[84rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 xl:gap-19 text-center md:text-left  ">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-primaryRegular text-black text-sm">
              EO CREATIVE GROUP™
            </h3>
            <p className="text-sm font-primaryRegular text-black  max-w-full mx-auto md:mx-0">
              Web sitesinde yer alan metin ve grafikler EO Creative ait olup,
              bizim iznimiz olmadan ve kaynak gösterilmeden başka kaynaklarca
              kullanılamaz.
            </p>
            <a
              href="mailto:info@eocreative.com.tr"
              className="block text-sm font-primaryRegular text-black hover:text-gray-500 transition duration-300"
            >
              info@eocreative.com.tr
            </a>
            {/* B Corp Logo */}
            <div className="w-14 h-15 mx-auto md:mx-0 translate-y-10 md:translate-y-16 lg:translate-y-3">
              <img
                src="/certifica.svg"
                alt="B Corporation Certified"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Links Columns */}
          <div className="space-y-4 md:w-1/2 lg:min-w-40 md:flex md:flex-col md:items-center lg:items-start  lg:ml-36">
            <Link
              to="/fiyatlandirma"
              className="font-primaryRegular text-black uppercase text-sm  cursor-pointer"
            >
              FİYATLANDIRMA
            </Link>

            <Link
              to="/hakkimizda"
              className="font-primaryRegular text-black uppercase text-sm cursor-pointer"
            >
              HAKKIMIZDA
            </Link>

            <Link
              to="/hizmetler"
              className="font-primaryRegular text-black uppercase text-sm  cursor-pointer"
            >
              HİZMETLER
            </Link>
            <Link
              to="/blog"
              className="font-primaryRegular text-black uppercase text-sm cursor-pointer"
            >
              BLOG
            </Link>

            <Link
              to="/iletisim"
              className="font-primaryRegular text-black uppercase text-sm  cursor-pointer"
            >
              İLETİŞİM
            </Link>
            <Link
              to="/sss"
              className="font-primaryRegular text-black uppercase text-sm  cursor-pointer"
            >
              S.S.S
            </Link>
            <Link
              to="/gizlilik-politikasi"
              className="font-primaryRegular text-black uppercase text-sm translate-y-10 md:translate-y-16 lg:translate-y-8  cursor-pointer"
            >
              GİZLİLİK POLİTİKASI
            </Link>
          </div>

          <div className="space-y-4 md:w-1/2 lg:min-w-40 md:flex md:flex-col md:items-center lg:items-start lg:ml-36">
            <p className="font-primaryRegular text-black uppercase text-sm  cursor-pointer">
              FACEBOOK
            </p>
            <p className="font-primaryRegular text-black uppercase text-sm cursor-pointer">
              INSTAGRAM
            </p>
            <p className="font-primaryRegular text-black uppercase text-sm cursor-pointer">
              LINKEDIN
            </p>
            <p className="font-primaryRegular text-black uppercase text-sm cursor-pointer">
              YOUTUBE
            </p>
            <p className="font-primaryRegular text-black uppercase text-sm  cursor-pointer">
              BEHANCE
            </p>
            <p className="font-primaryRegular text-black uppercase text-sm  cursor-pointer">
              TWITTER
            </p>
            <Link
              to="/sartlar-kosullar"
              className="font-primaryRegular  text-black uppercase text-sm translate-y-10 md:translate-y-16 lg:translate-y-8 cursor-pointer"
            >
              ŞARTLAR & KOŞULLAR
            </Link>
          </div>

          {/* Copyright Info */}
          <div className="space-y-2 text-center md:text-left md:translate-y-20 lg:translate-y-56 lg:ml-10 h-16">
            <p className="font-primaryRegular text-black text-sm">
              EO CREATIVE GROUP™ © 2025
            </p>
            <p className="font-primaryRegular text-black text-sm">
              TÜM HAKLARI SAKLIDIR
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
