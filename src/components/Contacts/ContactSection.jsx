/*import { useState, useRef, useEffect } from "react";*/
import { useState } from "react";
import { PiArrowUpRightBold } from "react-icons/pi";
import { motion } from "framer-motion";
/*import noUiSlider from "nouislider";*/
import "nouislider/dist/nouislider.css";

const brands = [
  { img: "/c_brand1.svg" }, //monday
  { img: "/c_brand2.svg" }, //discord
  { img: "/c_brand3.svg" }, //upwork
  { img: "/c_brand4.svg" }, //vice
  { img: "/c_brand5.svg" }, //dropboxc
  { img: "/c_brand6.svg" }, //philips
  { img: "/c_brand7.svg" }, //ted
  { img: "/c_brand8.svg" }, //ncr
  { img: "/c_brand9.svg" }, //abm
  { img: "/c_brand10.svg" }, //abm
  { img: "/c_brand11.svg" }, //ıdeo
  { img: "/c_brand12.svg" }, //abm
];

const services = [
  { id: "branding", label: "MARKALAŞMA" },
  { id: "graphic", label: "GRAFİK TASARIM" },
  { id: "ux", label: "UX TASARIMI" },
  { id: "illustration", label: "İLLÜSTRASYON" },
  { id: "3d", label: "3D TASARIM" },
  { id: "logo", label: "LOGO TASARIMI" },
  { id: "web", label: "WEB TASARIMI" },
];

const timeframes = [
  { id: "asap", label: "EN KISA ZAMANDA" },
  { id: "1-2weeks", label: "1-2 HAFTA" },
  { id: "2-4weeks", label: "2-4 HAFTA" },
  { id: "1-2months", label: "1-2 AY" },
  { id: "longterm", label: "UZUN VADELİ" },
  { id: "flexible", label: "ESNEK ZAMAN ÇİZELGESİ" },
];

const ContactSection = () => {
  const [contactMethod, setContactMethod] = useState("email");
  const [selectedServices, setSelectedServices] = useState([]);
  const [timeframe, setTimeframe] = useState("");
  const [minBudget, setMinBudget] = useState("500");
  const [maxBudget, setMaxBudget] = useState("60.000");
  const contactMethods = [
    { id: "email", label: "E-posta" },
    { id: "phone", label: "Telefon" },
    { id: "sms", label: "SMS" },
  ];

  const handleServiceToggle = (serviceId) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };
  const handleBudgetChange = (value, setter) => {
    // Remove non-numeric characters except dots
    let numericValue = value.replace(/[^\d,]/g, "").replace(",", ".");

    // Ensure only one decimal point
    const parts = numericValue.split(".");
    const formattedValue = parts[0] + (parts.length > 1 ? "." + parts[1] : "");

    // Format with thousand separators
    const formatted = Number(formattedValue).toLocaleString("tr-TR");
    setter(formatted);
  };
  //container max-w-[85rem] mx-auto py-16 px-4 flex flex-col md:flex-row items-center gap-28
  return (
    <div className="container max-w-[85rem] mx-auto px-4 xl:px-2  py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-6xl text-black  font-primaryBold mb-4 xl:leading-snug">
            Projeniz için
            <br />
            iletişime geçin
          </h1>
          <p className="text-black font-primaryRegular mb-8 mt-8">
            İş ihtiyaçlarınıza göre özelleştirilmiş hizmetler almak
            <br /> için bizimle iletişime geçin.
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <div key={index} className="flex items-center justify-left">
                <img
                  src={brand.img}
                  alt={`Brand ${index + 1}`}
                  className="h-5 w-auto mt-3"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Left Column - Form */}
        <div className="space-y-8 xl:pl-12 ">
          <div className="grid grid-cols-2  gap-4">
            <div className="relative">
              <input
                type="text"
                id="name"
                className="w-full px-4 pt-8 pb-2 rounded-lg  font-primaryRegular text-bgContactInputTextColor text-sm bg-bgHeaderButtonPrimary"
                placeholder="Adınızı girin"
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-2 text-sm font-primaryMedium text-black"
              >
                Ad
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                id="name"
                className="w-full px-4 pt-8 pb-2 rounded-lg  font-primaryRegular text-bgContactInputTextColor text-sm bg-bgHeaderButtonPrimary"
                placeholder="Soyadınızı girin"
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-2 text-sm font-primaryMedium text-black"
              >
                Soyad
              </label>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <input
                type="email"
                className="w-full px-4 pt-8 pb-2 rounded-lg  font-primaryRegular text-bgContactInputTextColor text-sm bg-bgHeaderButtonPrimary"
                placeholder="E-postanızı girin"
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-2 text-sm font-primaryMedium text-black"
              >
                E-posta
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                className="w-full px-4 pt-8 pb-2 rounded-lg  font-primaryRegular text-bgContactInputTextColor text-sm bg-bgHeaderButtonPrimary"
                placeholder="+90 | XXX XXX XXXX"
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-2 text-sm font-primaryMedium text-black"
              >
                Telefon numarası
              </label>
            </div>
          </div>

          <div className="space-y-8">
            {/* Previous form fields remain the same */}

            <div className="flex flex-col md:flex-row items-stretch gap-3">
              <div className="xl:max-w-[240px] flex items-center py-2.5 px-4 rounded-lg font-primaryRegular text-sm bg-bgHeaderButtonPrimary text-black">
                Tercih ettiğiniz iletişim yöntemini seçin:
              </div>
              <div className="flex flex-col md:flex-row gap-3 flex-1">
                {contactMethods.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => setContactMethod(id)}
                    className={`flex-1 py-2.5 px-4 rounded-lg font-primaryRegular text-sm transition-all duration-200 ${
                      contactMethod === id
                        ? "bg-black text-white"
                        : "bg-bgHeaderButtonPrimary text-bgContactInputTextColor hover:bg-gray-100"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Rest of the form remains the same */}
          </div>

          <div className="relative">
            <input
              type="text"
              id="name"
              className="w-full px-4 pt-8 pb-2 rounded-lg  font-primaryRegular text-bgContactInputTextColor text-sm bg-bgHeaderButtonPrimary"
              placeholder="Şirket adınızı yazın"
            />
            <label
              htmlFor="name"
              className="absolute left-4 top-2 text-sm font-primaryMedium text-black"
            >
              Şirket Adı
            </label>
            <label className="block text-xs font-primaryRegular mb-2 mt-1">
              *Bir şirketi temsil etmiyorsanız bu adımı atlayın
            </label>
          </div>

          <div>
            <label className="block text-base font-primaryMedium mb-2">
              Hangi işlerde size yardımcı olabiliriz?
            </label>
            <div className="flex flex-wrap gap-2">
              {services.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => handleServiceToggle(id)}
                  className={`px-4 py-2 font-primaryMedium text-sm  rounded-full border ${
                    selectedServices.includes(id)
                      ? "bg-black  text-white"
                      : "border-black"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-base font-primaryMedium mb-2">
              Aklınızda bir zaman çizelgesi var mı?
            </label>
            <div className="flex flex-wrap gap-2">
              {timeframes.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setTimeframe(id)}
                  className={`px-4 py-2 font-primaryMedium text-sm  rounded-full border ${
                    timeframe === id ? "bg-black text-white" : "border-black"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-base font-primaryMedium mb-2">
              Bu proje için bütçeniz ne kadar?
            </label>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 pt-6">
              <div className="w-full max-w-[220px]">
                <div className="relative flex items-center border border-black rounded-full px-4 py-2">
                  <span className="absolute -top-2.5 left-4 bg-white px-1 text-xs font-primaryMedium">
                    min:
                  </span>
                  <input
                    type="text"
                    value={minBudget}
                    onChange={(e) =>
                      handleBudgetChange(e.target.value, setMinBudget)
                    }
                    className="w-32 bg-transparent font-primaryRegular text-xl outline-none"
                  />
                  <span className="font-primaryRegular text-xl ml-1">TL</span>
                </div>
              </div>
              <div className="w-full max-w-[220px]">
                <div className="relative flex items-center border border-black rounded-full px-4 py-2">
                  <span className="absolute -top-2.5 left-4 bg-white px-1 text-xs font-primaryMedium">
                    max:
                  </span>
                  <input
                    type="text"
                    value={maxBudget}
                    onChange={(e) =>
                      handleBudgetChange(e.target.value, setMaxBudget)
                    }
                    className="w-32 bg-transparent font-primaryRegular text-xl outline-none"
                  />
                  <span className="font-primaryRegular text-xl ml-1">TL</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <motion.button
              className="flex items-center space-x-2 bg-black text-white text-sm font-primarySemiBold py-3 px-3 rounded-lg  transition-colors duration-500 ease-in-out justify-center xl:justify-start mx-auto xl:mx-0"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>HAYDİ BAŞLAYALIM</span>
              <PiArrowUpRightBold size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
