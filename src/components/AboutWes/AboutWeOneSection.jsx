import { useState, useEffect } from "react";
import { useGetAboutOneSectionsQuery } from "../../redux/services/aboutOneSection";
import { FiLoader } from "react-icons/fi";

/* eslint-disable react/prop-types */
const StatCard = ({ number, label }) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const targetNumber = parseInt(number.replace(/[^\d]/g, ""));
    let count = 0;
    const increment = () => {
      if (count < targetNumber) {
        count += Math.ceil(targetNumber / 100);
        setCurrentNumber(count);
      } else {
        setCurrentNumber(targetNumber);
        clearInterval(intervalId);
      }
    };

    const intervalId = setInterval(increment, 20);
    return () => clearInterval(intervalId);
  }, [number]);

  return (
    <div className="flex flex-col items-start pt-6 xl:pt-0">
      <h3 className="text-6xl font-primaryLight text-black mb-3">
        {currentNumber}
        {number.includes("+") && "+"}
      </h3>
      <p className="text-black font-primarySemiBold text-sm px-1">{label}</p>
    </div>
  );
};

const AboutWeOneSection = () => {
  const { data, error, isLoading } = useGetAboutOneSectionsQuery();

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <FiLoader className="animate-spin text-bgHeaderColorMenu text-4xl" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="text-black font-primaryMedium">
          Tekrar Deneyiniz {error.message}
        </div>
      </div>
    );
  }

  const aboutOneData = data[0];

  return (
    <div className="mx-auto max-w-[84rem] container py-16 xl:py-28 px-4 sm:px-6 xl:px-0 lg:px-8 xl:-mb-20 ">
      <div className="">
        {/* Hero Section */}
        <div className="text-left xl:text-left mb-32">
          <h1 className="text-3xl md:text-5xl font-primaryLight text-black mb-8 ">
            {aboutOneData.titleOne}
            <span className="block font-primaryLight text-black mb-8 xl:mt-2">
              {aboutOneData.titleTwo}
            </span>
          </h1>
          <p
            className="text-2xl text-left  font-primaryRegular text-black mb-8"
            dangerouslySetInnerHTML={{ __html: aboutOneData.descOne }}
          ></p>
          <p
            className="text-base text-left  font-primaryRegular text-black mb-8 leading-relaxed xl:max-w-[62rem]"
            dangerouslySetInnerHTML={{ __html: aboutOneData.descTwo }}
          ></p>
        </div>

        {/* Stats Grid */}
        <div className="border-t-2 border-gray-200 xl:-mt-0 -mt-16">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-8 pt-12 ">
            {aboutOneData.stats.map((stat) => (
              <StatCard
                key={stat._id}
                number={stat.number}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWeOneSection;
