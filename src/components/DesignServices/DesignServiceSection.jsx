import { motion } from "framer-motion";
import { PiArrowUpRightBold } from "react-icons/pi";
import { useGetDesignServiceSectionsQuery } from "../../redux/services/designServiceSectionApi";
import { FiLoader } from "react-icons/fi";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
const DesignServiceSection = () => {
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
    data: designServiceSectionData,
    error: designServiceSectionErrorData,
    isLoading: isDesignServiceSectionLoading,
  } = useGetDesignServiceSectionsQuery();

  const isLoading = isDesignServiceSectionLoading;
  const error = designServiceSectionErrorData;

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center -mt-48">
        <FiLoader className="animate-spin text-bgHeaderColorMenu text-4xl" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center -mt-48">
        <div className="text-black font-primaryMedium">
          Tekrar Deneyiniz {error.message}
        </div>
      </div>
    );
  }

  const designServiceSection = designServiceSectionData[0];

  return (
    <div className="container max-w-[84rem] mx-auto px-4 mb-40 -mt-8 py-16 md:py-8 xl:px-2 lg:px-6 ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="uppercase font-primaryRegular text-base  text-black border-b-2 border-gray-400 py-3">
            {designServiceSection.title}
          </div>

          <h2
            className="text-3xl md:text-4xl font-primaryLight text-black leading-tight"
            dangerouslySetInnerHTML={{ __html: designServiceSection.subtitle }}
          ></h2>

          <div className="space-y-4 pb-5">
            <p
              className="text-lg font-primaryRegular text-black"
              dangerouslySetInnerHTML={{
                __html: designServiceSection.description,
              }}
            ></p>

            <p
              className="text-black font-primaryRegular pt-6"
              dangerouslySetInnerHTML={{
                __html: designServiceSection.subdescription,
              }}
            ></p>
          </div>

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
            className={`flex items-center space-x-2 text-sm  font-primarySemiBold py-3 px-4 rounded-lg transition-colors duration-500 ease-in-out ${"bg-black text-white "}`}
          >
            <span>REZERVASYON YAPIN</span>
            <PiArrowUpRightBold stroke="1" size={18} />
          </motion.button>
        </div>

        {/* Right Content - Logo Design */}
        <div className="hidden md:block w-full md:w-1/3 relative">
          <div className="relative w-full aspect-square">
            {/* Main Logo */}
            <div
              className="absolute right-32 xl:right-44 xl:top-10 lg:right-32 w-3/5 aspect-square bg-[#001F2D]  transform -rotate-6"
              style={{ borderRadius: "20%" }}
            >
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="w-1/2  h-1/2 bg-white " />
                <img src="/eologo_one.svg" />
              </div>
            </div>

            {/* Secondary Logo */}
            <div
              className="absolute left-48 bottom-10 xl:left-52 xl:bottom-3 lg:left-40  w-2/5 aspect-square bg-white border border-eoLogoBackgroundColor rotate-12"
              style={{ borderRadius: "20%" }}
            >
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="w-1/2 h-1/2 " />
                <img src="/eologo_one.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignServiceSection;
