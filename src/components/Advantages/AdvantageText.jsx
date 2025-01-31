import { motion } from "framer-motion";

const AdvantageText = () => {
  return (
    <div>
      <div className="text-center mt-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-primaryLight text-black"
        >
          Markanız için fark yarattığımız
          <br /> <span className="font-primaryRegular">avantajlar</span>
        </motion.h2>
      </div>
    </div>
  );
};

export default AdvantageText;
