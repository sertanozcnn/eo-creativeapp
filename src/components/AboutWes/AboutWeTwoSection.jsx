import BrandSliderTwo from "../Brands/BrandSliderTwo";
import BrandText from "../Brands/BrandText";
import TeamMember from "./TeamMember";

const AboutContent = () => (
  <div className="space-y-6">
    <h2 className="text-5xl font-primaryLight pb-6">
      İşlerimizin arkasındaki
      <br /> yaratıcı zihinlerle tanışın
    </h2>

    <p className="text-white text-base font-primaryLight">
      İşletmelerin büyümesi ve başarıya ulaşması için yaratıcılığın
      <br /> dönüştürücü gücünü kullanıyoruz.
    </p>

    <p className="text-white font-primaryLight">
      Hem tasarımcılar hem de müşteriler için konforlu bir ekosistem
      <br /> sunan, sürdürülebilir bir iş modeliyle çalışan bir tasarım stüdyosu
      <br />
      olarak hizmet veriyoruz.
    </p>

    <p className="text-white font-primaryLight">
      Hedefimiz, yaratıcı fikirleri güçlü çözümlere dönüştürerek
      <br /> markalar için değer yaratmak.
    </p>
  </div>
);

const TeamMembers = () => (
  <div className="flex justify-center ">
    {" "}
    {/* Remove gap-6 here */}
    <TeamMember
      name="Ercan Özcan"
      role="Kurucu Ortak , CEO"
      imageUrl="https://i.hizliresim.com/61s1hxy.jpg"
      rotate="-rotate-6"
      link="https://www.linkedin.com/in/ercanozcanim/"
      isFirst={true} // Pass isFirst prop to the first TeamMember
    />
    <TeamMember
      name="Sertan Özcan"
      role="Kurucu Ortak , DEV"
      imageUrl="https://i.hizliresim.com/h8pplkb.jpg"
      rotate="rotate-3"
      marginTop="mt-12"
      className="-ml-6" // Apply negative left margin to the second element
      link="https://www.linkedin.com/in/sertanozcnn/"
    />
  </div>
);

const AboutWeTwoSection = () => {
  return (
    <section className="bg-bgHeaderColor text-white py-24 xl:px-0 ">
      <div className=" px-3 mx-auto max-w-[85rem] container ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AboutContent />
          <div className="mt-10 xl:ml-40">
            <TeamMembers />
          </div>
        </div>
        <div className="mt-24">
          <BrandText textColor="text-white" />
        </div>
      </div>
      <BrandSliderTwo />
    </section>
  );
};

export default AboutWeTwoSection;
