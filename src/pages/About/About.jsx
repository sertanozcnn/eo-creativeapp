import AboutWeOneSection from "../../components/AboutWes/AboutWeOneSection";
import AboutWeThreeSection from "../../components/AboutWes/AboutWeThreeSection";
import AboutWeTwoSection from "../../components/AboutWes/AboutWeTwoSection";
import NavbarTwo from "../../components/NavbarTwo";
import Social from "../../components/Socials/Social";

const About = () => {
  return (
    <div>
      <NavbarTwo />
      <AboutWeOneSection />
      <AboutWeTwoSection />
      <AboutWeThreeSection />
      <Social />
    </div>
  );
};

export default About;
