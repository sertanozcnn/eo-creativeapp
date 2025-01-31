import { motion } from "framer-motion";

const QuestionTitle = () => {
  return (
    <div className="flex container  mx-auto justify-start w-full xl:px-4 lg:px-5 md:px-10  px-6 max-w-[85rem] mt-4 ">
      <div className="text-left ">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-primaryLight text-black  md:items-center"
        >
          Sıkça Sorulan Sorular
        </motion.h2>
      </div>
    </div>
  );
};

export default QuestionTitle;
