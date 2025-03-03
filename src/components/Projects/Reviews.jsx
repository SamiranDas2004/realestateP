import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Reviews() {
  const reviews = [
    {
      text: "Aorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt ut labore set dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exa.",
      author: "Sophia J. Milton",
      role: "Property Owner",
      image: "https://azim.commonsupport.com/Amortez/assets/images/resource/testimonial-1.jpg",
    },
    {
      text: "Another great review here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "John Doe",
      role: "Happy Customer",
      image: "https://azim.commonsupport.com/Amortez/assets/images/resource/testimonial-1.jpg",
    },
    {
      text: "Third review example. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: "Jane Smith",
      role: "Satisfied Client",
      image: "https://azim.commonsupport.com/Amortez/assets/images/resource/testimonial-1.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div
      className="relative py-24 md:py-32" // Increased padding
      style={{
        backgroundImage: 'url(https://azim.commonsupport.com/Amortez/assets/images/background/testimonial-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'multiply',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
      }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10"> {/* Increased font size and margin */}
          WHAT OUR CUSTOMERS ARE SAYING
        </h2>
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="max-w-4xl mx-auto"> {/* Increased max width */}
              <div className="bg-white bg-opacity-10 rounded-xl p-10 relative"> {/* Increased padding and rounded corners */}
                <div className="text-5xl text-yellow-500 absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
                  "
                </div>
                <p className="text-gray-900 text-xl md:text-2xl mb-8"> {/* Increased font size and margin */}
                  {review.text}
                </p>
                <div className="flex items-center justify-center">
                  <img
                    src={review.image}
                    alt={review.author}
                    className="rounded-full w-16 h-16 mr-6" // Increased image size and margin
                  />
                  <div>
                    <h3 className="text-gray-900 text-lg md:text-xl font-semibold"> {/* Increased font size */}
                      {review.author}
                    </h3>
                    <p className="text-gray-500 text-sm md:text-base"> {/* Increased font size */}
                      {review.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Reviews;