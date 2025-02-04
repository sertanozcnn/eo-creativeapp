const AboutWeImageSection = () => {
  return (
    <div className=" container mx-auto px-5 xl:px-2 py-32 ">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Card */}
        <div className="relative rounded-2xl overflow-hidden group">
          <img
            src="https://i.hizliresim.com/s08qdlf.jpg"
            alt="Team on mountain"
            className="w-full h-[410px] object-cover"
          />
          <div className="absolute inset-0  p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-white text-sm font-primaryLight mb-2">
                VİZYONUMUZ
              </h3>
              <h2 className="text-white text-base mt-4 xl:mt-0 xl:text-2xl font-primaryLight mb-4 max-w-[95%] xl:max-w-[60%]">
                Olağanüstü tasarımlarla markaların fark yaratmasına ve başarıya
                ulaşmasına ilham vermek
              </h2>
            </div>
            <p className="text-white font-primaryLight text-sm max-w-[95%] xl:max-w-[70%]">
              Her projede, markaların benzersiz kimliklerini etkileyici
              tasarımlar aracılığıyla öne çıkarıyoruz. Yaratıcı ve stratejik
              çözümlerle, markaların hedeflerine ulaşmalarını sağlayarak onları
              sektördeki lider konumlarına taşıyoruz.
            </p>
          </div>
        </div>

        {/* Right Card */}
        <div className="relative rounded-2xl overflow-hidden group">
          <img
            src="https://i.hizliresim.com/b8r2jz6.jpg"
            alt="Forest path"
            className="w-full h-[410px] object-cover"
          />
          <div className="absolute inset-0  p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-white text-sm font-primaryLight  mb-2">
                MİSYONUMUZ
              </h3>
              <h2 className="text-white text-base mt-4 xl:mt-0 xl:text-2xl font-primaryLight mb-4 max-w-[95%] xl:max-w-[62%]">
                Markaları en etkili şekilde hedef kitleleriyle buluşturmak
              </h2>
            </div>
            <p className="text-white font-primaryLight text-sm max-w-[95%] xl:max-w-[65%]">
              Yaratıcı ve yenilikçi tasarımlarımızla markaların rekabet
              ettikleri pazarlarda etkili olmalarına yardımcı oluyoruz. Her
              projede markaların hikayelerini özgün çözümlerle geniş kitlelere
              ulaştırıyoruz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWeImageSection;
