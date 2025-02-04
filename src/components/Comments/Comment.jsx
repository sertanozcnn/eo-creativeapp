import { useState, useEffect } from "react";
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
];

const Comment = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const totalTestimonials = testimonials.length;

  // Calculate maxIndex based on device type
  const maxIndex = isMobile
    ? totalTestimonials - 1 // For mobile, we can go to the last testimonial
    : totalTestimonials - 2; // For desktop, we can go to the last testimonial as well

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex >= maxIndex;

  return (
    <section className="py-10 overflow-hidden">
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
