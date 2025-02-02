/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const BrandText = ({ textColor = "text-black" }) => {
  return (
    <div>
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-2xl font-primaryLight ${textColor}`}
        >
          Bize güvenen ve tercih eden <br />{" "}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-primaryRegular"
          >
            markalarımız
          </motion.span>
        </motion.h2>
      </div>
    </div>
  );
};

export default BrandText;
