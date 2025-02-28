import React, { useState, useEffect } from 'react';

function HeroSection() {
  const [contentVisible, setContentVisible] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://azim.commonsupport.com/Amortez/assets/images/banner/banner-5.png",
    "https://azim.commonsupport.com/Amortez/assets/images/banner/banner-4.png",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setContentVisible(prev => !prev);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const changeImage = (direction) => {
    if (direction === 'next') {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#0e1b36]">
      <div className="flex flex-col md:flex-row min-h-[550px] md:h-[80vh] min-h-[90vh] md:min-h-0">
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:pl-16 md:pr-8 py-14 md:py-0">
          <div className={`transition-all duration-1000 ease-in-out ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`transform transition-all duration-1000 ease-in-out ${contentVisible ? 'translate-y-0' : '-translate-y-full'}`}>
              <div className="flex items-center mb-5 md:mb-4">
                <div className="text-green-500 mr-3">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path d="M3 22L10 15L17 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M3 15L10 8L17 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M3 8L10 1L17 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="text-white text-sm">Premium Architectures Lifestyle</p>
              </div>
            </div>

            <div className={`transform transition-all duration-1000 ease-in-out ${contentVisible ? 'translate-y-0' : '-translate-y-full'}`}>
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 md:mb-6 pt-2">
                Creatively Designed<br />Friendly Environment
              </h1>
            </div>

            <div className={`transform transition-all duration-1000 ease-in-out ${contentVisible ? 'translate-y-0' : 'translate-y-full'}`}>
              <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-4 mt-8 pt-12 md:mb-8">
                <button className="bg-[#29ac4a] text-white py-4 px-8 md:py-3 md:px-6 flex items-center justify-center md:justify-start">
                  VIEW PROJECTS
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button className="border border-white text-white py-4 px-8 md:py-3 md:px-6 flex items-center justify-center md:justify-start">
                  CONTACT US
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="hidden md:flex justify-center mt-8 floating-button">
            <button
              className="w-14 h-14 rounded-full border border-white text-white flex items-center justify-center hover:bg-white/10 transition-colors mr-4"
              onClick={() => changeImage('prev')}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
            <button
              className="w-14 h-14 rounded-full border border-white text-white flex items-center justify-center hover:bg-white/10 transition-colors"
              onClick={() => changeImage('next')}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>

        <div className="hidden lg:block w-1/2 relative h-full">
          <img
            src={images[currentImageIndex]}
            alt="Modern city view"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
       {/* Floating Button Animation */}
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