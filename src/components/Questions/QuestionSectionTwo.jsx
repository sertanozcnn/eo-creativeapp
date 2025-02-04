import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

const questions = [
  {
    id: 1,
    question: "Proje hakkında nasıl iletişim kurabiliriz?",
    answer:
      "Web tasarım, grafik tasarım, UI/UX tasarımı, illüstrasyon, 3D tasarım ve logo tasarımı gibi çeşitli yaratıcı hizmetler sunuyoruz. İhtiyacınıza uygun, modern ve profesyonel çözümlerle yanınızdayız.",
  },
  {
    id: 2,
    question: "Bir proje ne kadar süre içinde tamamlanır ve teslim edilir?",
    answer:
      "Web tasarım, grafik tasarım, UI/UX tasarımı, illüstrasyon, 3D tasarım ve logo tasarımı gibi çeşitli yaratıcı hizmetler sunuyoruz. İhtiyacınıza uygun, modern ve profesyonel çözümlerle yanınızdayız.",
  },
  {
    id: 3,
    question: "Proje süreçlerinde onay mekanizması var mı?",
    answer:
      "Web tasarım, grafik tasarım, UI/UX tasarımı, illüstrasyon, 3D tasarım ve logo tasarımı gibi çeşitli yaratıcı hizmetler sunuyoruz. İhtiyacınıza uygun, modern ve profesyonel çözümlerle yanınızdayız.",
  },
  {
    id: 4,
    question: "Proje tesliminden sonra destek sağlıyor musunuz?",
    answer:
      "Web tasarım, grafik tasarım, UI/UX tasarımı, illüstrasyon, 3D tasarım ve logo tasarımı gibi çeşitli yaratıcı hizmetler sunuyoruz. İhtiyacınıza uygun, modern ve profesyonel çözümlerle yanınızdayız.",
  },
];

const QuestionSectionTwo = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div className="max-w-[87rem] mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        {/* Title Section */}
        <div
          className={`md:w-1/3 ${
            openQuestion ? "h-auto md:h-[25rem]" : "h-auto md:h-[20rem]"
          }`}
        >
          <div className="relative md:sticky md:top-28">
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-4xl font-primarySemiBold text-black">
                İş Akışı
              </h1>
            </div>
          </div>
        </div>

        {/* Questions Section */}
        <div className="md:w-2/3">
          <div className="space-y-4">
            {questions.map((q) => (
              <div
                key={q.id}
                className="rounded-xl overflow-hidden duration-500"
              >
                <button
                  className={`w-full text-left p-6 flex items-center hover:bg-gray-50 transition-colors  ${
                    openQuestion == q.id ? "bg-bgQuestionBackgroundColor" : ""
                  }`}
                  onClick={() => toggleQuestion(q.id)}
                  aria-expanded={openQuestion === q.id}
                >
                  {openQuestion === q.id ? (
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
                    openQuestion === q.id
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

export default QuestionSectionTwo;
