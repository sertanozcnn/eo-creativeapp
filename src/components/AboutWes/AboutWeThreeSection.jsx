import AboutWeImageSection from "./AboutWeImageSection";
import AboutWeThreeColumnOne from "./AboutWeThreeColumnOne";
import AboutWeThreeColumnTwo from "./AboutWeThreeColumnTwo";

const AboutWeThreeSection = () => {
  return (
    <div className="container mx-auto max-w-[85rem] pt-20">
      <AboutWeThreeColumnOne />
      <AboutWeImageSection />
      <AboutWeThreeColumnTwo />
    </div>
  );
};

export default AboutWeThreeSection;
