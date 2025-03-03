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
      <div className="flex flex-col md:flex-row min-h-[550px] md:h-[80vh]">
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:pl-16 md:pr-8 py-14 md:py-0">
          <div
            className={`transition-all duration-1000 ease-in-out ${
              contentVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className={`transform transition-all duration-1000 ease-in-out ${
                contentVisible ? "translate-y-0" : "-translate-y-full"
              }`}
            >
              <div className="flex items-center mb-5 md:mb-4">
                <div className="text-green-500 mr-3">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 22L10 15L17 22"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M3 15L10 8L17 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M3 8L10 1L17 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <p className="text-white text-sm">
                  Premium Architectures Lifestyle
                </p>
              </div>
            </div>

            <div
              className={`transform transition-all duration-1000 ease-in-out ${
                contentVisible ? "translate-y-0" : "-translate-y-full"
              }`}
            >
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 md:mb-6 pt-2">
                Creatively Designed
                <br />
                Friendly Environment
              </h1>
            </div>

            <div
              className={`transform transition-all duration-1000 ease-in-out ${
                contentVisible ? "translate-y-0" : "translate-y-full"
              }`}
            >
              <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-4 mt-8 pt-12 md:mb-8">
                <button className="bg-[#29ac4a] text-white py-4 px-8 md:py-3 md:px-6 flex items-center justify-center md:justify-start">
                  VIEW PROJECTS
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button className="border border-white text-white py-4 px-8 md:py-3 md:px-6 flex items-center justify-center md:justify-start">
                  CONTACT US
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Arrows - Hidden on smaller screens */}
          <div className="hidden md:block"> 
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
        </div>

        <div className="hidden md:block w-1/2 relative h-full">
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