import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem("cookieConsent");
    if (!hasConsent) {
      // Small delay to ensure the animation is visible
      setTimeout(() => setIsVisible(true), 500);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "false");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="fixed bottom-4 left-4 right-4 md:left-1/3 md:right-auto md:-translate-x-1/2 z-50"
        >
          <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-6 md:flex md:items-center md:gap-20 max-w-3xl w-full">
            <div className="md:flex md:items-center md:gap-4 flex-grow text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3 mb-4 md:mb-0 mx-auto md:mx-0">
                <img
                  src="cookies.svg"
                  alt="Cookie"
                  className="w-10 h-10 mb-2 md:mb-0"
                />
                <p className="text-sm text-black font-primaryLight">
                  Sitemizdeki deneyiminizi kişiselleştirmek
                  <br className="hidden md:block" /> için üçüncü taraf{" "}
                  <a href="/cerez-politikasi" className="underline">
                    çerezler
                  </a>{" "}
                  kullanıyoruz.
                </p>
              </div>
            </div>

            <div className="flex gap-2 justify-center md:justify-end md:shrink-0">
              <button
                onClick={acceptCookies}
                className="px-6 py-3.5 border-opacity-10 border border-black bg-cookiesButtonBackgroundColor text-black rounded-l-3xl rounded-r-md text-xs font-primaryRegular hover:bg-cookiesButtonBackgroundColorHover transition-colors min-w-[100px]"
              >
                Kabul Et
              </button>
              <button
                onClick={declineCookies}
                className="px-6 py-3.5 border-opacity-10 border border-black bg-cookiesButtonBackgroundColor text-black rounded-r-3xl rounded-l-md text-xs font-primaryRegular hover:bg-cookiesButtonBackgroundColorHover transition-colors min-w-[100px]"
              >
                Reddet
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
