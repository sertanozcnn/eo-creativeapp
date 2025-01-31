import { motion } from "framer-motion";

const ImageSectionText = () => {
  return (
    <div className="flex container mx-auto justify-start w-full xl:px-4 lg:px-5 md:px-10  px-6 max-w-[85rem] ">
      <div className="text-left ">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-3xl font-primaryLight text-black "
        >
          İhtiyacınız olabilecek her türlü yaratıcı çalışma <br />
          ve daha fazlası
        </motion.h2>
      </div>
    </div>
  );
};

export default ImageSectionText;
