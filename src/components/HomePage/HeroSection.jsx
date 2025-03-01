import React, { useState, useEffect } from 'react';

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
      // First, fade out the content
      setContentVisible(false);
      
      // Then start image transition
      setTimeout(() => {
        setIsTransitioning(true);
        
        // After transition starts, update the image index and reset states
        setTimeout(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
          setIsTransitioning(false);
          setContentVisible(true);
        }, 1000); // Match the image transition duration
      }, 1000); // Wait for content to fade out
    }, 5000); // Longer interval for better user experience

    return () => clearInterval(contentInterval);
  }, [images.length]);

  // Calculate the next image index
  const nextImageIndex = (currentImageIndex + 1) % images.length;

  return (
    <div className="relative w-full overflow-hidden bg-[#0e1b36]">
      <div className="flex flex-col md:flex-row min-h-[550px] md:h-[80vh] min-h-[90vh] md:min-h-0">
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:pl-16 md:pr-8 py-14 md:py-0">
          <div className={`transition-all duration-1000 ease-in-out ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`transform transition-all duration-1000 ease-in-out ${contentVisible ? 'translate-y-0' : '-translate-y-full'}`}>
              <div className="flex items-center mb-5 md:mb-4">
                <div className="text-green-500 mr-3">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path d="M3 22L10 15L17 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M3 15L10 8L17 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M3 8L10 1L17 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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
        </div>

        <div className="hidden lg:block w-1/2 relative h-full">
          {/* Current image */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${images[currentImageIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: isTransitioning ? 0 : 1,
              transition: 'opacity 1500ms ease-in-out'
            }}
          />
          
          {/* Next image (only visible during transition) */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${images[nextImageIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: isTransitioning ? 1 : 0,
              transition: 'opacity 1500ms ease-in-out'
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