/*import { useState, useRef, useEffect } from "react";*/
import { useState } from "react";
import { PiArrowUpRightBold } from "react-icons/pi";
import { motion } from "framer-motion";
/*import noUiSlider from "nouislider";*/
import "nouislider/dist/nouislider.css";
import { useGetBrandContactsQuery } from "../../redux/services/brandContactApi";
import { FiLoader } from "react-icons/fi";
import toast from "react-hot-toast";
import { useCreateContactRequestMutation } from "../../redux/services/contactRequestCreateApi";

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
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [timeframe, setTimeframe] = useState("");
  const [minBudget, setMinBudget] = useState("1.000");
  const [maxBudget, setMaxBudget] = useState("60.000");
  const [contactMethod, setContactMethod] = useState("email");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [createContactRequest] = useCreateContactRequestMutation();

  const contactMethods = [
    { id: "email", label: "E-posta" },
    { id: "phone", label: "Telefon" },
    { id: "sms", label: "SMS" },
  ];

  const { data, error, isLoading } = useGetBrandContactsQuery();

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

  const validateForm = () => {
    if (!name || !surname || !email || !phone) {
      toast.error("Lütfen tüm gerekli alanları doldurun!");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Geçerli bir e-posta adresi girin!");
      return false;
    }
    if (phone.replace(/\D/g, "").length < 10) {
      toast.error("Geçerli bir telefon numarası girin!");
      return false;
    }
    return true;
  };

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

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setIsSubmitting(true);

    const requestData = {
      name,
      surname,
      email,
      phone,
      companyName: companyName.trim() === "" ? null : companyName,
      selectedServices: selectedServices.map(
        (id) => services.find((s) => s.id === id)?.label
      ),
      timeframe: timeframes.find((t) => t.id === timeframe)?.label,
      minBudget: Number(minBudget.replace(/[\D]/g, "")),
      maxBudget: Number(maxBudget.replace(/[\D]/g, "")),
      contactMethod: contactMethods.find((c) => c.id === contactMethod)?.label,
    };

    try {
      await createContactRequest(requestData).unwrap();
      toast.success("Talebiniz başarıyla gönderildi!", {
        position: "bottom-right",
      });
      setName("");
      setSurname("");
      setEmail("");
      setPhone("");
      setCompanyName("");
      setSelectedServices([]);
      setTimeframe("");
      setMinBudget("1.000");
      setMaxBudget("60.000");
      setContactMethod("email");
    } catch (error) {
      toast.error("Bir hata oluştu, lütfen tekrar deneyin.", {
        position: "bottom-right",
      });
      console.log = function () {};
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
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
            {data?.map((brand, index) => (
              <div key={index} className="flex items-center justify-left">
                <img
                  src={brand.imageUrl}
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                className="w-full px-4 pt-8 pb-2 rounded-lg  font-primaryRegular text-bgContactInputTextColor text-sm bg-bgHeaderButtonPrimary"
                placeholder="Soyadınızı girin"
              />
              <label
                htmlFor="surname"
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 pt-8 pb-2 rounded-lg  font-primaryRegular text-bgContactInputTextColor text-sm bg-bgHeaderButtonPrimary"
                placeholder="E-postanızı girin"
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-2 text-sm font-primaryMedium text-black"
              >
                E-posta
              </label>
            </div>

            <div className="relative">
              <input
                type="text"
                value={phone}
                onChange={(e) => {
                  const numericValue = e.target.value.replace(/\D/g, ""); // Sadece sayılar
                  if (numericValue.length <= 11) {
                    setPhone(numericValue);
                  }
                }}
                className="w-full px-4 pt-8 pb-2 rounded-lg  font-primaryRegular text-bgContactInputTextColor text-sm bg-bgHeaderButtonPrimary"
                placeholder="+90 | XXX XXX XXXX"
              />
              <label
                htmlFor="phone"
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
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full px-4 pt-8 pb-2 rounded-lg  font-primaryRegular text-bgContactInputTextColor text-sm bg-bgHeaderButtonPrimary"
              placeholder="Şirket adınızı yazın"
            />
            <label
              htmlFor="companyName"
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
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 pt-2">
              <div className="w-full md:max-w-[180px]">
                <div className="relative flex items-center border border-black rounded-full px-4 py-1">
                  <span className="absolute -top-2.5 left-4 bg-white px-1 text-xs font-primaryMedium">
                    min:
                  </span>
                  <input
                    type="text"
                    value={minBudget}
                    onChange={(e) =>
                      handleBudgetChange(e.target.value, setMinBudget)
                    }
                    className="w-32 bg-transparent font-primaryRegular text-lg outline-none"
                  />
                  <span className="font-primaryRegular text-base ml-40 md:ml-2">
                    TL
                  </span>
                </div>
              </div>
              <div className="w-full md:max-w-[180px]">
                <div className="relative flex items-center border border-black rounded-full px-4 py-1">
                  <span className="absolute -top-2.5 left-4 bg-white px-1 text-xs font-primaryMedium">
                    max:
                  </span>
                  <input
                    type="text"
                    value={maxBudget}
                    onChange={(e) =>
                      handleBudgetChange(e.target.value, setMaxBudget)
                    }
                    className="w-32 bg-transparent font-primaryRegular text-lg outline-none"
                  />
                  <span className="font-primaryRegular text-base ml-40 md:ml-2">
                    TL
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <motion.button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex items-center space-x-2 bg-black text-white text-sm font-primarySemiBold py-3 px-3 rounded-lg  transition-colors duration-500 ease-in-out justify-center xl:justify-start mx-auto xl:mx-0"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>
                {isSubmitting ? "GÖNDERİLİYOR..." : "HAYDİ BAŞLAYALIM"}
              </span>
              <PiArrowUpRightBold size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
