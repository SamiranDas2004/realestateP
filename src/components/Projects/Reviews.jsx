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
      className="relative py-16 sm:py-20 md:py-32 px-4 sm:px-6 md:px-8"
      style={{
        backgroundImage: 'url(https://azim.commonsupport.com/Amortez/assets/images/background/testimonial-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'multiply',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
      }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-10">
          WHAT OUR CUSTOMERS ARE SAYING
        </h2>
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="max-w-3xl mx-auto sm:max-w-4xl">
              <div className="bg-white bg-opacity-10 rounded-xl p-6 sm:p-8 md:p-10 relative">
                <div className="text-4xl sm:text-5xl text-yellow-500 absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
                  "
                </div>
                <p className="text-gray-900 text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8">
                  {review.text}
                </p>
                <div className="flex items-center justify-center">
                  <img
                    src={review.image}
                    alt={review.author}
                    className="rounded-full w-14 h-14 sm:w-16 sm:h-16 mr-4 sm:mr-6"
                  />
                  <div>
                    <h3 className="text-gray-900 text-md sm:text-lg md:text-xl font-semibold">
                      {review.author}
                    </h3>
                    <p className="text-gray-500 text-sm sm:text-base">
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
