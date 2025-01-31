import NavbarTwo from "../../components/NavbarTwo";
import PricingSection from "../../components/PricingSections/PricingSection";
import Comment from "../../components/Comments/Comment";
import Question from "../../components/Questions/Question";
import Need from "../../components/Needs/Need";

const Pricing = () => {
  return (
    <div>
      <NavbarTwo />
      <PricingSection />
      <Comment />
      <Question />
      <Need />
    </div>
  );
};

export default Pricing;
