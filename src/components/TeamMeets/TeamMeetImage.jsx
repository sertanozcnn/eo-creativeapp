import { FiLoader } from "react-icons/fi";
import { useGetTeamMeetImagesQuery } from "../../redux/services/teamMeetImageApi";

const TeamMeetImage = () => {
  const { data, error, isLoading } = useGetTeamMeetImagesQuery();

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <FiLoader className="animate-spin text-white text-4xl" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="text-white font-primaryMedium">
          Tekrar Deneyiniz {error.message}
        </div>
      </div>
    );
  }

  

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[86rem] mx-auto px-6 xl:px-4">
      {data?.data.map((item) => (
        <div
          key={item._id}
          className={`rounded-2xl overflow-hidden transition-transform group  ${item.backgroundClass}`}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[88%] object-cover transition-all duration-500 ease-in-out group-hover:h-[72%] xl:group-hover:h-[77%] "
          />
          <div className="p-6">
            <h4
              className={`text-xl font-primaryRegular ${item.textColorTitle}`}
            >
              {item.title}
            </h4>
            <p
              className={`font-primaryLight mt-2 text-sm transform opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-500 ease-in-out ${item.textColorDescription}`}
            >
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamMeetImage;
