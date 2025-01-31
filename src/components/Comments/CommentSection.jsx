const testimonials = [
  {
    text: (
      <span>
        EO Creative ile çalışmak her zaman harika bir deneyim. Tasarımlarımızı
        bizim kadar önemsediklerini hissediyoruz ve bu da sonuçlara yansıyor.
        <br />
        <br /> Verdikleri her hizmet, markamızın estetiği ve mesajıyla mükemmel
        bir uyum içinde. Ayrıca, geri bildirimlerimizi hızla değerlendirip,
        uygulamalarıyla sürekli olarak beklentilerimizi aşıyorlar. Böylesine
        yaratıcı ve profesyonel bir ekiple çalıştığımız için çok mutluyuz.
      </span>
    ),

    author: "Elif Yılmaz",
    role: "Pazarlama Müdürü, Nova Teknoloji",
    image: "/comments_photo.svg",
  },
  {
    text: (
      <span>
        Ekibin, tasarım sürecine gösterdiği profesyonellik ve yaratıcılık
        gerçekten etkileyiciydi. İlk görüşmeden itibaren beklentilerimizi
        dikkatle dinlediler ve ihtiyaçlarımızı tam anlamıyla karşılayan çözümler
        sundular.
        <br />
        <br /> Her aşamada iletişim kurmaları kolay ve netti, bu da süreci
        oldukça pürüzsüz hale getirdi. Teslim tarihlerini asla aksatmamaları ve
        detaylara gösterdikleri özen sayesinde iş birliğimizin her aşamasında
        güven duyduk. Sonuçlar, hem görsellik hem de işlevsellik açısından
        beklentilerimizin çok ötesindeydi.
        <br />
        <br /> Kaliteli iş ve müşteri memnuniyetine verdikleri önemle, böyle bir
        ekiple çalışmak gerçekten keyifti. Hizmetlerini gönül rahatlığıyla
        tavsiye ederim.
      </span>
    ),
    author: "Murat Kaya",
    role: "Kurucu Ortak, Zirve Yapı ve Dekorasyon",
    image: "/comments_photo.svg",
  },

  {
    text: (
      <span>
        EO Creative ile çalışmak her zaman harika bir deneyim. Tasarımlarımızı
        bizim kadar önemsediklerini hissediyoruz ve bu da sonuçlara yansıyor.
        <br />
        <br /> Verdikleri her hizmet, markamızın estetiği ve mesajıyla mükemmel
        bir uyum içinde. Ayrıca, geri bildirimlerimizi hızla değerlendirip,
        uygulamalarıyla sürekli olarak beklentilerimizi aşıyorlar. Böylesine
        yaratıcı ve profesyonel bir ekiple çalıştığımız için çok mutluyuz.
      </span>
    ),

    author: "Elif Yılmaz",
    role: "Pazarlama Müdürü, Nova Teknoloji",
    image: "/comments_photo.svg",
  },
  {
    text: (
      <span>
        Ekibin, tasarım sürecine gösterdiği profesyonellik ve yaratıcılık
        gerçekten etkileyiciydi. İlk görüşmeden itibaren beklentilerimizi
        dikkatle dinlediler ve ihtiyaçlarımızı tam anlamıyla karşılayan çözümler
        sundular.
        <br />
        <br /> Her aşamada iletişim kurmaları kolay ve netti, bu da süreci
        oldukça pürüzsüz hale getirdi. Teslim tarihlerini asla aksatmamaları ve
        detaylara gösterdikleri özen sayesinde iş birliğimizin her aşamasında
        güven duyduk. Sonuçlar, hem görsellik hem de işlevsellik açısından
        beklentilerimizin çok ötesindeydi.
        <br />
        <br /> Kaliteli iş ve müşteri memnuniyetine verdikleri önemle, böyle bir
        ekiple çalışmak gerçekten keyifti. Hizmetlerini gönül rahatlığıyla
        tavsiye ederim.
      </span>
    ),
    author: "Murat Kaya",
    role: "Kurucu Ortak, Zirve Yapı ve Dekorasyon",
    image: "/comments_photo.svg",
  },
];

import PropTypes from "prop-types";

const CommentSection = ({ currentIndex }) => {
  const slideWidth = window.innerWidth <= 768 ? 100 : 33.333;

  return (
    <div className="max-w-[120%] -ml-[6%] overflow-hidden ">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * slideWidth}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-[36rem]   flex-shrink-0 px-4">
              <div className="h-full">
                <p className="text-base text-black font-primaryRegular leading-relaxed mb-8">
                  {testimonial.text}
                </p>
                <div className="flex items-center mt-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

CommentSection.propTypes = {
  currentIndex: PropTypes.number.isRequired,
};

export default CommentSection;
