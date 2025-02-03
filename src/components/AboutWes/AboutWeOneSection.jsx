import { useState, useEffect } from "react";

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
  return (
    <div className="mx-auto max-w-[84rem] container py-16 xl:py-28 px-4 sm:px-6 xl:px-0 lg:px-8 xl:-mb-20">
      <div className="">
        {/* Hero Section */}
        <div className="text-left xl:text-left mb-32">
          <h1 className="text-3xl md:text-5xl font-primaryLight text-black mb-8 ">
            Vizyonumuz, olağanüstü tasarımlarla markaların
            <span className="block font-primaryLight text-black mb-8 xl:mt-2">
              fark yaratmasına ve başarıya ulaşmasına ilham vermek
            </span>
          </h1>
          <p className="text-2xl text-left  font-primaryRegular text-black mb-8">
            Markaların benzersiz hikayelerini en etkileyici şekilde
            anlatabilmeleri
            <br /> için yenilikçi çözümler sunuyoruz.
          </p>
          <p className="text-base text-left  font-primaryRegular text-black mb-8 leading-relaxed xl:max-w-[62rem]">
            Tasarımdan stratejiye, her aşamada yüksek kalite ve yaratıcı
            yaklaşımımızla markalarınıza değer katmayı hedefliyoruz. İlham veren
            tasarımlarla, hedef kitlenizle güçlü bağlar kurmanıza ve iş
            hedeflerinizi aşmanıza yardımcı oluyoruz. Başarıyı bir yolculuk
            olarak görüyor, bu yolculukta markalarınıza eşlik etmekten mutluluk
            duyuyoruz.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="border-t-2 border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-8 pt-12 ">
            <StatCard number="13" label="Abone" />
            <StatCard number="60+" label="Müşteri" />
            <StatCard number="5 yıl" label="Deneyim" />
            <StatCard number="100+" label="Proje" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWeOneSection;
