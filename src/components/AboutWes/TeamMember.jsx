/* eslint-disable react/prop-types */
const TeamMember = ({
  name,
  role,
  imageUrl,
  rotate = "rotate-3",
  marginTop = "mt-4",
  isFirst = false,
  link,
}) => {
  return (
    <div
      className={`relative ${marginTop} ${isFirst ? "z-10 order-first" : ""}`}
    >
      {/* Arka plan divi */}
      <div
        className={`absolute w-40 h-56 sm:w-48 sm:h-64 bg-bgTeamBackground border-t-2 border-bgTeamBorderBackground rounded-2xl transform
    ${
      isFirst
        ? "-rotate-12 top-0 right-1 sm:right-3 "
        : "rotate-12 left-0 sm:left-1"
    }
  `}
      ></div>

      {/* Üye kartı */}
      <div
        className={`relative rounded-2xl overflow-hidden transform ${rotate}`}
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          {/* Linki buraya ekledik */}
          <img src={imageUrl} alt={name} className="w-48 h-64 object-cover" />
        </a>
      </div>

      <div className={`mt-4 text-center transform ${rotate}`}>
        <h3
          className={`font-primaryLight text-center ${
            isFirst ? "mt-2 ml-4" : "mt-2 mr-4"
          }`}
        >
          {name}
        </h3>
        <p
          className={`text-base text-bgTeamTextColor text-center ${
            isFirst ? "-mt-1 ml-5" : "-mt-1 mr-4"
          }`}
        >
          {role}
        </p>
      </div>
    </div>
  );
};

export default TeamMember;
