import { motion } from "framer-motion";
import { useGetAdvantageContentsQuery } from "../../redux/services/advantageContentApi,";
import { FiLoader } from "react-icons/fi";

const AdvantageContent = () => {
  const { data, error, isLoading } = useGetAdvantageContentsQuery();

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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8  max-w-[86rem] mx-auto mt-12">
      {data?.map((advantage, index) => (
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
