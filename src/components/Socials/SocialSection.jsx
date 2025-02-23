import {
  FaBehance,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { useGetSocialLinksQuery } from "../../redux/services/socialLinkApi";
import { FiLoader } from "react-icons/fi";

const ICONS = {
  Behance: FaBehance,
  Youtube: FaYoutube,
  Instagram: FaInstagram,
  Linkedin: FaLinkedin,
  Facebook: FaFacebook,
  Twitter: FaXTwitter,
};
const SocialSection = () => {
  const { data: socialLinks, isLoading, error } = useGetSocialLinksQuery();

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

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {socialLinks.map((item) => {
        const Icon = ICONS[item.name];
        return (
          <a
            key={item._id}
            href={item.link}
            target="_blank"
            className="aspect-square bg-gray-100 rounded-2xl
                       flex flex-col items-start justify-between
                       transition-all duration-500 ease-in-out
                       hover:bg-black group"
          >
            <div className="flex flex-col items-start justify-between gap-20 xl:gap-28 p-6">
              <Icon
                className="w-8 h-8 text-black group-hover:text-white
                           transition-all duration-500 ease-in-out"
              />
              <span
                className="text-black font-primaryRegular group-hover:text-white 
                           transition-all duration-500 ease-in-out text-sm"
              >
                {item.name}
              </span>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default SocialSection;
