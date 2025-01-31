import { motion } from "framer-motion";

const ServicesText = () => {
  return (
    <div>
      <div className="text-center mt-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-primaryLight text-black"
        >
          Hepsi bir arada hizmetler
        </motion.h2>
      </div>
    </div>
  );
};

export default ServicesText;
