/* eslint-disable react/prop-types */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, ChevronDown, ChevronUp, BookOpenText, X } from "lucide-react";
import { useState, useEffect } from "react";

const allSections = {
  "gizlilik-politikasi": [
    { id: "giris", title: "1. Giriş" },
    { id: "bilgi-toplama", title: "2. Bilgi Toplama ve Kullanımı" },
    { id: "verilerin-kullanimi", title: "3. Verilerin Kullanımı" },
    { id: "verilerin-saklanmasi", title: "4. Verilerin Saklanması" },
    { id: "verilerin-aktarimi", title: "5. Verilerin Aktarımı" },
    { id: "verilerin-aciklanmasi", title: "6. Verilerin Açıklanması" },
    { id: "veri-guvenligi", title: "7. Veri Güvenliği" },
    { id: "gdp-kapsami-haklariniz", title: "8. GDPR Kapsamında Haklarınız" },
    { id: "hizmet-saglayicilar", title: "9. Hizmet Sağlayıcılar" },
    { id: "diger-siteler", title: "10. Diğer Sitelere Bağlantılar" },
    { id: "iletisim", title: "11. Bizimle İletişime Geçin" },
  ],
  "cerez-politikasi": [
    { id: "cerez-giris", title: "1. Giriş" },
    {
      id: "hangi-tur-cerezler-kullaniyoruz",
      title: "2. Hangi Tür Çerezleri Kullanıyoruz?",
    },
    {
      id: "cerezleri-nasıl-kullaniyoruz",
      title: "3. Çerezleri Nasıl Kullanıyoruz?",
    },
    {
      id: "cerezleri-tercihlerinizi-nasil-yonetebilirsiniz",
      title: (
        <>
          <span className="-ml-2">
            4. Çerez Tercihlerinizi <br /> Nasıl Yönetebilirsiniz?
          </span>
        </>
      ),
    },
    {
      id: "ucuncu-taraf-cerezler",
      title: "5. Üçüncü Taraf Çerezler",
    },
    { id: "cerez-iletisim", title: "6. Bizimle İletişime Geçin" },
  ],
  "sartlar-kosullar": [
    { id: "sart-giris", title: "1. Giriş" },
    { id: "saglanan-hizmetler", title: "2. Sağlanan Hizmetler" },
    { id: "odeme-kosullari", title: "3. Ödeme Koşulları" },
    { id: "fikri-mulkiyet", title: "4. Fikri Mülkiyet" },
    { id: "revizyonlar", title: "5. Revizyonlar" },
    { id: "duyarlilik", title: "6. Duyarlılık" },
    { id: "fesih", title: "7. Fesih" },
    { id: "mucbir-sebep", title: "8. Mücbir Sebep" },
    { id: "sartlarin-kabulu", title: "9. Şartların Kabulü" },
    { id: "sart-iletisim", title: "10. Bizimle İletişime Geçin" },
  ],
};

const policies = [
  {
    id: "gizlilik-politikasi",
    name: "Gizlilik Politikası",
    to: "/gizlilik-politikasi",
  },
  { id: "cerez-politikasi", name: "Çerez Politikası", to: "/cerez-politikasi" },
  {
    id: "sartlar-kosullar",
    name: "Şartlar & Koşullar",
    to: "/sartlar-kosullar",
  },
];

const PolicyLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [expandedSections, setExpandedSections] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const initialExpanded = policies.reduce((acc, policy) => {
      acc[policy.id] = location.pathname.includes(policy.id);
      return acc;
    }, {});
    setExpandedSections(initialExpanded);
  }, [location.pathname]);

  const handleNavigation = (policyId, sectionId) => {
    if (!location.pathname.includes(policyId)) {
      navigate(`/${policyId}`);
      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 500);
    } else {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="border rounded-xl container px-3 max-w-[83rem] mx-auto">
        <div className="flex space-x-2 font-primaryLight text-sm overflow-x-auto">
          {policies.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`px-2 py-2.5 text-sm border-b-2 whitespace-nowrap ${
                location.pathname.includes(item.id)
                  ? "text-blue-600 border-blue-600 font-primaryMedium"
                  : "text-gray-600 border-transparent font-primaryLight hover:text-blue-600 hover:border-blue-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-[83rem] mx-auto px-4 xl:px-0 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="fixed top-20 right-2 z-40 p-2 bg-white rounded-lg shadow-md lg:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <BookOpenText className="h-6 w-6 text-gray-600" />
            )}
          </button>

          {/* Sidebar */}
          <div
            className={`${
              isMobileMenuOpen
                ? "fixed inset-0 z-30 top-24 bg-white overflow-y-auto lg:relative lg:inset-auto"
                : "hidden lg:block"
            } lg:col-span-3`}
          >
            <div className="sticky top-8 p-4 lg:p-0">
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Arama"
                  className="w-full lg:w-[250px] pl-10 pr-4 py-2.5 text-sm font-primaryRegular text-bgBorderGray opacity-60 bg-bgSearchBackgroundColor rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-bgBorderGray opacity-60" />
              </div>

              <nav className="space-y-1 border-l border-gray-200">
                {policies.map((policy) => (
                  <div key={policy.id}>
                    <button
                      onClick={() =>
                        setExpandedSections((prev) => ({
                          ...prev,
                          [policy.id]: !prev[policy.id],
                        }))
                      }
                      className="w-full flex items-center justify-between px-3 pr-16 py-2 text-sm font-primaryMedium text-black hover:text-blue-600"
                    >
                      <span>{policy.name}</span>
                      {expandedSections[policy.id] ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>
                    {expandedSections[policy.id] && (
                      <div className="ml-4 border-gray-200">
                        {allSections[policy.id].map((section) => (
                          <button
                            key={section.id}
                            onClick={() =>
                              handleNavigation(policy.id, section.id)
                            }
                            className="block px-3 py-2 font-primaryRegular text-sm text-[#817F87] hover:text-blue-600 cursor-pointer"
                          >
                            {section.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-12 lg:col-span-9">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default PolicyLayout;
