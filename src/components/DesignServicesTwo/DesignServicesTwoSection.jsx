import { PiArrowUpRightBold } from "react-icons/pi";
import { useEffect, useState } from "react";
import { FiLoader } from "react-icons/fi";
import { useGetDesignServiceTwoSectionsQuery } from "../../redux/services/designServiceTwoSectionApi";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const ServiceCard = ({
  title,
  description,
  imageUrl,
  className,
  descriptionMaxWidth,
}) => {
  const navigate = useNavigate();

  const [dynamicMaxWidth, setDynamicMaxWidth] = useState(descriptionMaxWidth);
  useEffect(() => {
    const updateMaxWidth = () => {
      setDynamicMaxWidth(window.innerWidth < 768 ? "90%" : descriptionMaxWidth);
    };

    window.addEventListener("resize", updateMaxWidth);
    updateMaxWidth();

    return () => window.removeEventListener("resize", updateMaxWidth);
  }, [descriptionMaxWidth, dynamicMaxWidth]);
  return (
    <div className={`relative group overflow-hidden rounded-xl ${className}`}>
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 p-8 flex flex-col justify-between">
        {/* Üst Kısım: Başlık ve Açıklama */}
        <div>
          <h3 className="text-white text-2xl font-primaryMedium mb-3">
            {title}
          </h3>
          <p
            className="text-white font-primaryLight text-sm leading-relaxed"
            style={{ maxWidth: dynamicMaxWidth }}
          >
            {description}
          </p>
        </div>

        {/* Alt Kısım: Buton */}
        <button
          className="text-white text-sm font-primaryLight flex items-center gap-2 relative"
          onClick={() => navigate("/iletisim")}
        >
          <span className="relative transition-transform duration-300">
            Daha fazla bilgi edinin
            {/* Geçişli alt çizgi */}
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </span>
          <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
            <PiArrowUpRightBold size={18} />
          </span>
        </button>
      </div>
    </div>
  );
};

const DesignServicesTwoSection = () => {
  const { data, error, isLoading } = useGetDesignServiceTwoSectionsQuery();

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

  return (
    <section className="container max-w-[85rem] mx-auto py-16 px-4">
      <div className="grid grid-cols-12 gap-6">
        {data?.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
            className={service.className}
            descriptionMaxWidth={service.descriptionMaxWidth}
          />
        ))}
      </div>
    </section>
  );
};

export default DesignServicesTwoSection;
