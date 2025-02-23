import { PiArrowUpRightBold } from "react-icons/pi";
import { motion } from "framer-motion";
import { useGetHomePricingsQuery } from "../../redux/services/homePricingApi";
import { FiLoader } from "react-icons/fi";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
const HeroSectionTwo = () => {
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

  const {
    data: homePricingData,
    error: homeErrorData,
    isLoading: isHomePricingLoading,
  } = useGetHomePricingsQuery();

  const isLoading = isHomePricingLoading;
  const error = homeErrorData;

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center -mt-48">
        <FiLoader className="animate-spin text-white text-4xl" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center -mt-48">
        <div className="text-white font-primaryMedium">
          Tekrar Deneyiniz {error.message}
        </div>
      </div>
    );
  }

  const homePricing = homePricingData[0];

  return (
    <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between px-4 lg:px-24 h-3/4 pt-40 xl:pt-64 ">
      {" "}
      {/* Adjusted top padding */}
      <div className="text-white xl:w-1/2 space-y-8">
        <h1 className="text-3xl text-center xl:text-left  xl:text-6xl font-primaryRegular mt-10  xl:-mt-14 ">
          {homePricing.titleOne}
          <br />
          {homePricing.titleTwo}
        </h1>

        <p className="text-lg font-primaryLight text-center xl:text-left">
          {homePricing.titleDescriptionOne}
          <br className="hidden xl:block" />
          {homePricing.titleDescriptionTwo}
          <br className="hidden xl:block" />
          {homePricing.titleDescriptionThree}
          <br className="hidden xl:block" />
          {homePricing.titleDescriptionFour}
        </p>
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
          className="flex items-center space-x-2 bg-bgHeaderButton text-black text-sm font-primarySemiBold py-3 px-3 rounded-lg hover:bg-white transition-colors duration-500 ease-in-out justify-center xl:justify-start mx-auto xl:mx-0"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>REZERVASYON YAPIN</span>
          <PiArrowUpRightBold size={18} />
        </motion.button>
      </div>
    </div>
  );
};

export default HeroSectionTwo;
