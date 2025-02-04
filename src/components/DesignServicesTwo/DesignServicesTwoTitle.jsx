import { motion } from "framer-motion";

const DesignServicesTwoTitle = () => {
  return (
    <div>
      <div className="text-center mt-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl xl:px-0 px-3 font-primaryLight text-white"
        >
          İhtiyacınıza uygun ve fark yaratan
          <br /> <span className="font-primaryRegular">hizmetlerimiz</span>
        </motion.h2>
      </div>
    </div>
  );
};

export default DesignServicesTwoTitle;
