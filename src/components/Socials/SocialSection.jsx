import {
  FaBehance,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialSection = () => {
  const socialLinks = [
    { icon: FaBehance, name: "Behance", link: "#" },
    { icon: FaYoutube, name: "Youtube", link: "#" },
    { icon: FaInstagram, name: "Instagram", link: "#" },
    { icon: FaLinkedin, name: "Linkedin", link: "#" },
    { icon: FaFacebook, name: "Facebook", link: "#" },
    { icon: FaXTwitter, name: "Twitter", link: "#" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {socialLinks.map((item) => (
        <a
          key={item.name}
          href={item.link}
          className="aspect-square bg-gray-100 rounded-2xl
                     flex flex-col items-start justify-between
                     transition-all duration-500 ease-in-out
                     hover:bg-black group"
        >
          <div className="flex flex-col items-start justify-between gap-28 p-6">
            <item.icon
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
      ))}
    </div>
  );
};

export default SocialSection;
