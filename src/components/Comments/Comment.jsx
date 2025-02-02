import { useState } from "react";
import CommentSection from "./CommentSection";
import CommentText from "./CommentText";

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

const Comment = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalTestimonials = testimonials.length + 1; // Burada hata giderildi
  const displayCount = 3;

  const isMobile = window.innerWidth <= 768;
  const maxIndex = isMobile
    ? totalTestimonials
    : totalTestimonials - displayCount;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? maxIndex : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? 0 : prev - 1));
  };

  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === maxIndex;

  return (
    <section className="py-10 overflow-hidden ">
      <CommentText
        onPrevSlide={prevSlide}
        onNextSlide={nextSlide}
        currentIndex={currentIndex}
        isLastSlide={isLastSlide}
        isFirstSlide={isFirstSlide}
      />
      <CommentSection currentIndex={currentIndex} testimonials={testimonials} />
    </section>
  );
};

export default Comment;
