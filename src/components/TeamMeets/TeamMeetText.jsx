import { motion } from "framer-motion";

const TeamMeetText = () => {
  return (
    <div className="text-center  mb-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl text-white font-primaryLight mb-1"
      >
        Size özel oluşturulmuş
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-2xl text-white font-primaryRegular"
      >
        7/24 çalışan ekiple tanışın
      </motion.h3>
    </div>
  );
};

export default TeamMeetText;
