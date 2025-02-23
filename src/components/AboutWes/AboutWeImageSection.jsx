import { FiLoader } from "react-icons/fi";
import { useGetAboutImageSectionsQuery } from "../../redux/services/aboutImageSectionApi";

const AboutWeImageSection = () => {
  const { data, error, isLoading } = useGetAboutImageSectionsQuery();

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

  const aboutImageSection = data[0];

  return (
    <div className=" container mx-auto px-5 xl:px-2 py-32 ">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Card */}
        <div className="relative rounded-2xl overflow-hidden group">
          <img
            src={aboutImageSection.imageOne}
            alt="Team on mountain"
            className="w-full h-[410px] object-cover"
          />
          <div className="absolute inset-0  p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-white text-sm font-primaryLight mb-2">
                {aboutImageSection.titleOne}
              </h3>
              <h2 className="text-white text-base mt-4 xl:mt-0 xl:text-2xl font-primaryLight mb-4 max-w-[95%] xl:max-w-[60%]">
                {aboutImageSection.subtitleOne}
              </h2>
            </div>
            <p className="text-white font-primaryLight text-sm max-w-[95%] xl:max-w-[70%]">
              {aboutImageSection.descriptionOne}
            </p>
          </div>
        </div>

        {/* Right Card */}
        <div className="relative rounded-2xl overflow-hidden group">
          <img
            src={aboutImageSection.imageTwo}
            alt="Forest path"
            className="w-full h-[410px] object-cover"
          />
          <div className="absolute inset-0  p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-white text-sm font-primaryLight  mb-2">
                {aboutImageSection.titleTwo}
              </h3>
              <h2 className="text-white text-base mt-4 xl:mt-0 xl:text-2xl font-primaryLight mb-4 max-w-[95%] xl:max-w-[62%]">
                {aboutImageSection.subtitleTwo}
              </h2>
            </div>
            <p className="text-white font-primaryLight text-sm max-w-[95%] xl:max-w-[65%]">
              {aboutImageSection.descriptionTwo}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWeImageSection;
