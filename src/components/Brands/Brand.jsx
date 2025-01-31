import BrandSlider from "./BrandSlider";
import BrandText from "./BrandText";

const Brand = () => {
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <BrandText />
          <BrandSlider />
        </div>
      </section>
    </div>
  );
};

export default Brand;
