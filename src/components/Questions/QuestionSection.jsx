import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import { useGetQuestionSectionOnesQuery } from "../../redux/services/questionSectionOneApi";
import { FiLoader } from "react-icons/fi";

const QuestionSection = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const { data, error, isLoading } = useGetQuestionSectionOnesQuery();
  useEffect(() => {
    if (data?.length > 0) {
      setOpenQuestion(data[0]._id);
    }
  }, [data]);
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

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div className="max-w-[87rem] mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 ">
        {/* Title Section */}
        <div
          className={`md:w-1/3 ${
            openQuestion ? "h-auto md:h-[31rem]" : "h-auto md:h-[26rem]"
          }`}
        >
          <div className="relative md:sticky md:top-28">
            <div className="flex items-center gap-3 mb-4 px-2 xl:px-0 ">
              <h1 className="text-4xl font-primarySemiBold text-black">
                Genel Sorular
              </h1>
            </div>
          </div>
        </div>

        {/* Questions Section */}
        <div className="md:w-2/3">
          <div className="space-y-4">
            {data?.map((q) => (
              <div
                key={q._id}
                className="rounded-xl overflow-hidden duration-500"
              >
                <button
                  className={`w-full text-left p-6 flex items-center hover:bg-bgQuestionBackgroundColor transition-colors ${
                    openQuestion === q._id ? "bg-bgQuestionBackgroundColor" : ""
                  }`}
                  onClick={() => toggleQuestion(q._id)}
                  aria-expanded={openQuestion === q._id}
                >
                  {openQuestion === q._id ? (
                    <ChevronUp className="w-6 h-6 text-black flex-shrink-0 mr-3" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-black flex-shrink-0 mr-3" />
                  )}
                  <span className="font-primarySemiBold text-xl text-black">
                    {q.question}
                  </span>
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    openQuestion === q._id
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="p-6 bg-gray-50">
                    <p className="text-black font-primaryRegular -mt-5 ml-10 text-sm leading-relaxed">
                      {q.answer}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionSection;
