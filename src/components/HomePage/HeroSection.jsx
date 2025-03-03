import React, { useState, useEffect } from "react";

function HeroSection() {
  const [contentVisible, setContentVisible] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [
    "https://azim.commonsupport.com/Amortez/assets/images/banner/banner-5.png",
    "https://azim.commonsupport.com/Amortez/assets/images/banner/banner-4.png",
  ];

  useEffect(() => {
    const contentInterval = setInterval(() => {
      setContentVisible(false);
      setTimeout(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
          setIsTransitioning(false);
          setContentVisible(true);
        }, 1000);
      }, 1000);
    }, 5000);

    return () => clearInterval(contentInterval);
  }, [images.length]);

  const nextImageIndex = (currentImageIndex + 1) % images.length;

  const changeImage = (direction) => {
    if (direction === "next") {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#0e1b36]">
      <div className="flex flex-col lg:flex-row min-h-[550px] lg:h-[80vh]">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 max-w-[50%] flex-shrink-0 flex flex-col justify-center px-4 sm:px-6 lg:px-12 py-10 sm:py-14 lg:py-0 overflow-hidden">
          <div
            className={`transition-all duration-1000 ease-in-out ${
              contentVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              <span className="block">Creatively Designed</span>
              <span className="block">Friendly Environment</span>
            </h1>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6 sm:mt-8">
              <button className="bg-[#29ac4a] text-white py-3 px-6 text-sm sm:text-base flex items-center justify-center sm:justify-start">
                VIEW PROJECTS
              </button>
              <button className="border border-white text-white py-3 px-6 text-sm sm:text-base flex items-center justify-center sm:justify-start">
                CONTACT US
              </button>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center mt-6 sm:mt-8 floating-button">
            <button
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white text-white flex items-center justify-center hover:bg-white/10 transition-colors mr-3 sm:mr-4"
              onClick={() => changeImage("prev")}
            >
              &lt;
            </button>
            <button
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white text-white flex items-center justify-center hover:bg-white/10 transition-colors"
              onClick={() => changeImage("next")}
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="hidden lg:block w-1/2 relative h-full">
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${images[currentImageIndex]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: isTransitioning ? 0 : 1,
              transition: "opacity 1500ms ease-in-out",
            }}
          />
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${images[nextImageIndex]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: isTransitioning ? 1 : 0,
              transition: "opacity 1500ms ease-in-out",
            }}
          />
        </div>

        {/* Mobile Image Section */}
        <div className="block lg:hidden w-full h-64 sm:h-80 relative">
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${images[currentImageIndex]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: isTransitioning ? 0 : 1,
              transition: "opacity 1500ms ease-in-out",
            }}
          />
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${images[nextImageIndex]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: isTransitioning ? 1 : 0,
              transition: "opacity 1500ms ease-in-out",
            }}
          />
        </div>
      </div>

      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }

          .floating-button {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}

export default HeroSection;
