import { motion } from "framer-motion";

const advantages = [
  {
    icon: "/star_two.svg",
    subtitle: "Yaratıcılık ve yenilikçilik",
    description:
      "Her projeye özgün bir bakış açısı getirerek fark yaratan tasarımlar sunuyoruz. Yenilikçi çözümlerle markalara değer katıyoruz.",
  },
  {
    icon: "/home_heart.svg",
    subtitle: "İş birliği ve güven",
    description:
      "Müşterilerimizle güçlü ve şeffaf bir iletişim kurarak ihtiyaçlarına en iyi şekilde cevap veriyoruz. Birlikte çalışarak başarıya ulaşmayı önemsiyoruz.",
  },
  {
    icon: "/leaf.svg",
    subtitle: "Sürdürülebilirlik ve sorumluluk",
    description:
      "Tasarımlarımızda çevreye duyarlı, uzun vadeli etkiler yaratan çözümler sunmayı hedefliyoruz ve daha iyi bir gelecek inşa etmeyi amaçlıyoruz.",
  },
];
const AboutWeThreeColumnOne = () => {
  return (
    <div>
      <section>
        <div>
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`text-2xl font-primaryLight text-black`}
            >
              Markamızı bir adım ileriye taşıyan <br />{" "}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-primaryRegular"
              >
                değerlerimiz
              </motion.span>
            </motion.h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8  mx-auto mt-12">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-start p-5 xl:p-2 "
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <img src={advantage.icon} className="w-12 h-12" />
              </div>
              <h4 className="text-xl font-primaryRegular text-black mb-3">
                {advantage.subtitle}
              </h4>
              <p className="font-primaryRegular text-black text-sm leading-relaxed">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutWeThreeColumnOne;
