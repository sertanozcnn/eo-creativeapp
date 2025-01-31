import { motion } from "framer-motion";

const advantages = [
  {
    icon: "/advantages_star.svg",
    title: "SİZE ÖZEL",
    subtitle: "Şirket içi yaratıcılığınızı artırın",
    description:
      "Tasarım işlerini biz hallediyoruz, böylece siz ekibe ek yük getirmeden stratejik ve etkili çalışmalara odaklanabiliyorsunuz.",
  },
  {
    icon: "/advantages_esnek.svg",
    title: "ESNEK",
    subtitle: "İhtiyacınıza uygun ödeyin",
    description:
      "İster abonelik modellerinden birini seçin isterseniz de proje tabanlı seçeneğimizi tercih edin. Kendi ihtiyaçlarınıza göre ödeme yöntemini belirleyin.",
  },
  {
    icon: "/advantages_rocket.svg",
    title: "7 / 24",
    subtitle: "Hız uğruna kaliteyi feda etmeyin",
    description:
      "İşinize dedike ekibimiz sayesinde iş sonuçlarınıza kaliteden ödün vermeden hızlı bir şekilde ulaşın. Üstelik sınırsız revizyon imkanıyla!",
  },
  {
    icon: "/advantages_money.svg",
    title: "EKONOMİK",
    subtitle: "Maliyetlerinizi optimize edin",
    description:
      "Dış kaynaklı tasarım hizmetleriyle, tam zamanlı bir ekip çalıştırmanın getirdiği maliyetlerden tasarruf edin ve bütçenizi daha etkili kullanın.",
  },
  {
    icon: "/advantages_person.svg",
    title: "ŞEFFAF",
    subtitle: "Sürprizlere yer yok",
    description:
      "Süreç ve maliyetler tamamen şeffaftır. Her şey baştan planlanır, sonradan ortaya çıkan masraflarla karşılaşmazsınız.",
  },
  {
    icon: "/advantages_security.svg",
    title: "GÜVENİLİR",
    subtitle: "Zamanında ve sorunsuz teslimat",
    description:
      "Tüm projelerimizi söz verdiğimiz tarihlerde ve beklentilerinizi aşan bir kaliteyle teslim ediyoruz. Güvenilir bir iş ortağı olarak yanınızdayız.",
  },
];

const AdvantageContent = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8  max-w-[86rem] mx-auto mt-12">
      {advantages.map((advantage, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-start p-6 "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="mb-4">
            <img src={advantage.icon} className="w-12 h-12" />
          </div>
          <h3 className="text-sm font-primaryRegular text-black uppercase mb-2">
            {advantage.title}
          </h3>
          <h4 className="text-xl font-primaryRegular text-black mb-3">
            {advantage.subtitle}
          </h4>
          <p className="font-primaryRegular text-black text-sm leading-relaxed">
            {advantage.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default AdvantageContent;
