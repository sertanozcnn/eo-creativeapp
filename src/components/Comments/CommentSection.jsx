import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const CommentSection = ({ currentIndex, testimonials }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Calculate translation
  // For desktop, move one card at a time instead of the whole group
  const translateX = isMobile ? currentIndex * 100 : currentIndex * 33.333;

  return (
    <div className="max-w-[120%] -ml-[6%] overflow-hidden">
      <div className="max-w-8xl ipad:ml-[4%] laptop:ml-[10%] desktop:ml-[18%] mx-auto px-4">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${translateX}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${
                isMobile ? "w-full" : "w-[35.333%] "
              } flex-shrink-0 px-4`}
            >
              <div className="h-full ">
                <p
                  className="text-base text-black font-primaryRegular leading-relaxed mb-8"
                  dangerouslySetInnerHTML={{ __html: testimonial.text }}
                ></p>
                <div className="flex items-center mt-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

CommentSection.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  testimonials: PropTypes.array.isRequired,
};

export default CommentSection;
