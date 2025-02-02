import { motion } from "framer-motion";

const advantages = [
  {
    icon: "/game_plus_product.svg",
    subtitle: "Stratejik yaklaşım",
    description:
      "Her projeye, markanızın hedeflerini anlayarak ve ihtiyaçlarınıza uygun size özel stratejik bir yaklaşım sunarak başlarız.",
  },
  {
    icon: "/click_two.svg",
    subtitle: "Detaylara özen",
    description:
      "Küçük ayrıntılarda büyük farklar yaratarak mükemmelliği hedefleriz. Tüm aşamalarda, işinize katma değer sağlayacak detayları düşünürüz.",
  },
  {
    icon: "/screen_two.svg",
    subtitle: "Esneklik ve çeviklik",
    description:
      "Değişen ihtiyaçlara hızlı uyum sağlayarak en iyi sonuçları sunarız. İş dünyasında çözüm üretme hızımız ve esnekliğimizle fark yaratırız.",
  },
];
const AboutWeThreeColumnTwo = () => {
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
              İşinizi bir üst seviyeye çıkaran <br />{" "}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-primaryRegular"
              >
                yaklaşımlarımız
              </motion.span>
            </motion.h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8   mx-auto mt-12">
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

export default AboutWeThreeColumnTwo;
