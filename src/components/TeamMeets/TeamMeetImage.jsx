const TeamMeetImage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[86rem] mx-auto px-4">
      {/* Expert Team Card */}
      <div className="bg-bgTeamMeetOneBackground rounded-2xl overflow-hidden transition-transform  group">
        <img
          src="https://i.hizliresim.com/rkvmm9g.jpg"
          alt="Expert Team"
          className="w-full h-[88%] object-cover transition-all duration-500 ease-in-out group-hover:h-[75%]"
        />
        <div className="p-6">
          <h4 className="text-white text-xl font-primaryRegular">
            Size özel uzman ekibimiz
          </h4>
          <p className="text-gray-100 font-primaryLight mt-2 text-sm transform opacity-0 group-hover:opacity-100 group-hover:translate-y-4 transition-all duration-500 ease-in-out">
            Projelerinizi taleplerini önceden birlikte belirlediğimiz zaman
            planına göre size iletiyoruz. Revizyonlarınıza kısa sürede dönüş
            yapıyoruz.
          </p>
        </div>
      </div>

      {/* Fast Delivery Card */}
      <div className="bg-bgTeamMeetTwoBackground rounded-2xl overflow-hidden transition-transform  group">
        <img
          src="https://i.hizliresim.com/cephail.jpg"
          alt="Fast Delivery"
          className="w-full h-[88%] object-cover transition-all duration-500 ease-in-out group-hover:h-[75%]"
        />
        <div className="p-6">
          <h4 className="text-xl font-primaryRegular text-black">
            Hızlı teslim süreleri
          </h4>
          <p className="text-bgHeaderColor font-primaryLight mt-2 text-sm transform opacity-0 group-hover:opacity-100 group-hover:translate-y-4 transition-all duration-500 ease-in-out">
            Projelerinizi taleplerini önceden birlikte belirlediğimiz zaman
            planına göre size iletiyoruz. Revizyonlarınıza kısa sürede dönüş
            yapıyoruz.
          </p>
        </div>
      </div>

      {/* Subscription Model Card */}
      <div className="bg-bgTeamMeetThreeBackground rounded-2xl overflow-hidden transition-transform  group">
        <img
          src="https://i.hizliresim.com/oid9ofo.jpg"
          alt="Subscription Model"
          className="w-full h-[88%] object-cover transition-all duration-500 ease-in-out group-hover:h-[75%]"
        />
        <div className="p-6">
          <h4 className="text-xl font-primaryRegular text-black">
            Esnek abonelik modeli
          </h4>
          <p className="text-black font-primaryLight mt-2 text-sm transform opacity-0 group-hover:opacity-100 group-hover:translate-y-4 transition-all duration-500 ease-in-out">
            Projelerinizi taleplerini önceden birlikte belirlediğimiz zaman
            planına göre size iletiyoruz. Revizyonlarınıza kısa sürede dönüş
            yapıyoruz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMeetImage;
