import { motion } from "framer-motion";
import { FiLoader } from "react-icons/fi";
import { useGetAboutAdvantageContentOnesQuery } from "../../redux/services/aboutAdvantageContentOneApi";

const AboutWeThreeColumnOne = () => {
  const { data, error, isLoading } = useGetAboutAdvantageContentOnesQuery();

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <FiLoader className="animate-spin text-bgHeaderColorMenu text-4xl" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="text-black font-primaryMedium">
          Tekrar Deneyiniz {error.message}
        </div>
      </div>
    );
  }

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
          {data?.map((advantage, index) => (
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
                {advantage.title}
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
