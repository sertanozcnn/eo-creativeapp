import Advantage from "../../components/Advantages/Advantage";
import Brand from "../../components/Brands/Brand";
import Comment from "../../components/Comments/Comment";
import ImageSection from "../../components/ImageSections/ImageSection";
import Navbar from "../../components/Navbar";
import Service from "../../components/Services/Service";
import Social from "../../components/Socials/Social";
import TeamMeet from "../../components/TeamMeets/TeamMeet";

const Home = () => {
  return (
    <>
      <Navbar />
      <Brand />
      <ImageSection />
      <Advantage />
      <TeamMeet />
      <Service />
      <Comment />
      <Social />
    </>
  );
};

export default Home;
