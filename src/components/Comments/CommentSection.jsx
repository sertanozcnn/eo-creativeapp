import PropTypes from "prop-types";

const CommentSection = ({ currentIndex, testimonials }) => {
  const slideWidth = window.innerWidth <= 768 ? 100 : 33.333;

  return (
    <div className="max-w-[120%] -ml-[6%] overflow-hidden ">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * slideWidth}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-[36rem]   flex-shrink-0 px-4">
              <div className="h-full">
                <p className="text-base text-black font-primaryRegular leading-relaxed mb-8">
                  {testimonial.text}
                </p>
                <div className="flex items-center mt-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
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
