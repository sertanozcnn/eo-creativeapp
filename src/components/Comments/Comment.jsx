import { useState } from "react";
import CommentSection from "./CommentSection";
import CommentText from "./CommentText";

const Comment = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalTestimonials = 6; // Total number of testimonials
  const displayCount = 3; // Number of testimonials shown at once

  const isMobile = window.innerWidth <= 768;
  const maxIndex = isMobile
    ? totalTestimonials - 1
    : totalTestimonials - displayCount;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? maxIndex : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? 0 : prev - 1));
  };

  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === maxIndex;

  return (
    <section className="py-10 overflow-hidden ">
      <CommentText
        onPrevSlide={prevSlide}
        onNextSlide={nextSlide}
        currentIndex={currentIndex}
        isLastSlide={isLastSlide}
        isFirstSlide={isFirstSlide}
      />
      <CommentSection currentIndex={currentIndex} />
    </section>
  );
};

export default Comment;
