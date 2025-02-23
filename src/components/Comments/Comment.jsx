import { useState, useEffect } from "react";
import CommentSection from "./CommentSection";
import CommentText from "./CommentText";
import { useGetCommentMeetsQuery } from "../../redux/services/commentMeetApi";
import { FiLoader } from "react-icons/fi";

const Comment = () => {
  const { data: comments, isLoading, error } = useGetCommentMeetsQuery();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  const totalTestimonials = comments.length;

  // Calculate maxIndex based on device type
  const maxIndex = isMobile
    ? totalTestimonials - 1 // For mobile, we can go to the last testimonial
    : totalTestimonials - 2; // For desktop, we can go to the last testimonial as well

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex >= maxIndex;

  return (
    <section className="py-10 overflow-hidden">
      <CommentText
        onPrevSlide={prevSlide}
        onNextSlide={nextSlide}
        currentIndex={currentIndex}
        isLastSlide={isLastSlide}
        isFirstSlide={isFirstSlide}
      />
      <CommentSection currentIndex={currentIndex} testimonials={comments} />
    </section>
  );
};

export default Comment;
