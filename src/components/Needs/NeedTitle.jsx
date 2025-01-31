import { motion } from "framer-motion";

const NeedTitle = () => {
  return (
    <div>
      <div className="flex container  mx-auto justify-start w-full xl:px-4 lg:px-5 md:px-10  px-6 max-w-[85rem] mt-32 ">
        <div className="text-left ">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4 xl font-primarySemiBold text-black  md:items-center"
          >
            Daha fazla yardıma mı <br />
            ihtiyacınız var?
          </motion.h2>
        </div>
      </div>
    </div>
  );
};

export default NeedTitle;
