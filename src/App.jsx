import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import Plan from "./components/Plans/Plan";
import { Toaster } from "react-hot-toast";
import CookieConsent from "./components/Cookies/CookieConsent";
function App() {
  const location = useLocation();
  useEffect(() => {
    const pageTitle = getPageTitle(location.pathname);
    document.title = pageTitle;
  }, [location]);

  const getPageTitle = (pathname) => {
    switch (pathname) {
      case "/":
        return "Anasayfa";
      case "/fiyatlandirma":
        return "Fiyatlandırma";
      case "/hizmetler":
        return "Hizmetler";
      case "/hakkimizda":
        return "Hakkımızda";
      case "/iletisim":
        return "İletişim";
      case "/gizlilik-politikasi":
        return "Gizlilik Politikası";
      case "/cerez-politikasi":
        return "Çerez Politikası";
      case "/sartlar-kosullar":
        return "Şartlar & Koşullar";
      case "/sss":
        return "S.S.S";
      default:
        return "EO Creative"; // Varsayılan başlık
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow">
          <Outlet />
        </div>
        <Plan />
        <Footer />
        <Toaster position="bottom-right" />

        <CookieConsent className="z-50" />
      </div>
    </>
  );
}

export default App;
