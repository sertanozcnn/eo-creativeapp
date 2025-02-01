import { ArrowLeft, ArrowRight } from "lucide-react";
import PropTypes from "prop-types";

const CommentText = ({
  onPrevSlide,
  onNextSlide,
  isLastSlide,
  isFirstSlide,
}) => {
  return (
    <div className="container  px-0 xl:px-4 py-12 mx-auto max-w-[85rem]   mb-2">
      <div className="flex items-center justify-between mb-8 mx-4 xl:mx-0">
        <h2 className="text-2xl  xl:text-4xl  font-primaryLight max-w-5xl">
          Sizi referanslarımıza ekleyene kadar <br />
          diğerlerinin bizim hakkımızda söylediklerine göz atın!!
        </h2>
        <div className="flex gap-4">
          {!isFirstSlide && (
            <button
              onClick={onPrevSlide}
              className="p-2 rounded-full "
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-7 h-7" />
            </button>
          )}
          {!isLastSlide && (
            <button
              onClick={onNextSlide}
              className="p-2  rounded-full "
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-7 h-7" />
            </button>
          )}
        </div>
      </div>
      <div className="h-px bg-black opacity-15 w-full"></div>
    </div>
  );
};
CommentText.propTypes = {
  onPrevSlide: PropTypes.func.isRequired,
  onNextSlide: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired,
  isLastSlide: PropTypes.bool.isRequired,
  isFirstSlide: PropTypes.bool.isRequired,
};

export default CommentText;
