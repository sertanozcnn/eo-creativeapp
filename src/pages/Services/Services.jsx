import Advantage from "../../components/Advantages/Advantage";
import Brand from "../../components/Brands/Brand";
import DesignService from "../../components/DesignServices/DesignService";
import DesignServicesTwo from "../../components/DesignServicesTwo/DesignServicesTwo";
import NavbarThree from "../../components/NavbarThree";

const Services = () => {
  return (
    <div>
      <NavbarThree />
      <Brand />
      <DesignService />

      <DesignServicesTwo />
      <div className="-mb-8">
        <Advantage />
      </div>
    </div>
  );
};

export default Services;
