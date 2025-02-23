import { PiArrowUpRightBold } from "react-icons/pi";
import { motion } from "framer-motion";
import { useGetDesignServiceEndSectionsQuery } from "../../redux/services/designServiceEndSection";
import { FiLoader } from "react-icons/fi";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
const DesignServicesEndSection = () => {
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
    data: endSectionData,
    error: endSectionError,
    isLoading: isEndSectionLoading,
  } = useGetDesignServiceEndSectionsQuery();

  const isLoading = isEndSectionLoading;
  const error = endSectionError;

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <FiLoader className="animate-spin text-white text-4xl" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="text-white font-primaryMedium">
          Tekrar Deneyiniz {error.message}
        </div>
      </div>
    );
  }
  const endSection = endSectionData[0];

  return (
    <div className="container max-w-[85rem] mx-auto py-16 px-4 flex flex-col md:flex-row items-center gap-28">
      {/* Left side - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={endSection.imageUrl}
          alt="Design Services"
          className="rounded-xl w-full md:h-[35rem] h-[250px] object-cover"
        />
      </div>

      {/* Right side - Content */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-6 text-center md:text-left">
        <h2
          className="text-4xl font-primaryLight text-white"
          dangerouslySetInnerHTML={{ __html: endSection.titleOne }}
        ></h2>

        <p
          className="font-primaryMedium text-white text-xl"
          dangerouslySetInnerHTML={{ __html: endSection.titleTwo }}
        ></p>

        <p
          className="font-primaryMedium text-white text-sm w"
          dangerouslySetInnerHTML={{ __html: endSection.titleThree }}
        ></p>

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
          className="flex items-center space-x-2 text-sm font-primarySemiBold py-3 px-3 rounded-lg transition-colors duration-500 ease-in-out bg-bgHeaderButton text-black"
        >
          <span>REZERVASYON YAPIN</span>
          <PiArrowUpRightBold size={18} />
        </motion.button>
      </div>
    </div>
  );
};

export default DesignServicesEndSection;
