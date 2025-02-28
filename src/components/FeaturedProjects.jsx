import React, { useState, useEffect } from 'react';

function InteriorCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "https://azim.commonsupport.com/Amortez/assets/images/project/project-9.jpg",
    "https://azim.commonsupport.com/Amortez/assets/images/project/project-9.jpg",
    "https://azim.commonsupport.com/Amortez/assets/images/project/project-8.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-100">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(https://azim.commonsupport.com/Amortez/assets/images/shape/shape-8.png)` }}
      ></div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        {/* Header */}
        <div className="text-center mb-8 w-4/5 md:w-3/4 lg:w-2/3 flex justify-between items-center">
          <div>
            <p className="uppercase text-xs text-gray-500 mb-2">EXPERIENCE THE AMORTEZ PROPERTIES</p>
            <h2 className="text-4xl font-semibold">Interior Exterior Gallery</h2>
          </div>
          <button className="border border-gray-400 rounded-md px-4 py-2 text-sm">
            VIEW MORE --&gt;
          </button>
        </div>

        {/* Carousel Container */}
        <div className="w-full relative h-96 flex items-center justify-center">
          {images.map((image, index) => {
            const isCurrent = index === currentSlide;
            const isPrev = index === (currentSlide - 1 + images.length) % images.length;
            const isNext = index === (currentSlide + 1) % images.length;

            let transform = 'scale-0.8 translate-x-40';
            let opacity = 'opacity-0';
            let zIndex = 0;

            if (isCurrent) {
              transform = 'scale-1';
              opacity = 'opacity-100';
              zIndex = 10;
            } else if (isPrev) {
              transform = 'scale-0.8 translate-x-[-40%]';
              opacity = 'opacity-50';
              zIndex = 5;
            } else if (isNext) {
              transform = 'scale-0.8 translate-x-[40%]';
              opacity = 'opacity-50';
              zIndex = 5;
            }

            return (
              <div
                key={index}
                className={`absolute transition-all duration-700 w-4/5 md:w-3/4 lg:w-2/3 h-full rounded-lg shadow-lg overflow-hidden`}
                style={{
                  transform: transform,
                  opacity: opacity,
                  zIndex: zIndex,
                }}
              >
                <img
                  src={image}
                  alt={`Interior ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {isCurrent && (
                  <div className="absolute bottom-4 left-4 bg-blue-800 text-white p-4 rounded-md">
                    <h3 className="text-lg font-semibold">Amortez Resort</h3>
                    <p className="text-sm">Enimad veniam quis nostrud exercitation sed ullamco ipsum laboris.</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default InteriorCarousel;