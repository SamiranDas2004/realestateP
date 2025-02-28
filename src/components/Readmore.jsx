import React, { useState, useEffect } from 'react';

function Readmore() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const topImageTranslateY = Math.min(scrollPosition / 10, 50); // Adjust values as needed
  const bottomImageTranslateY = Math.max(-scrollPosition / 10, -50); // Adjust values as needed

  return (
    <div className="flex flex-col md:flex-row w-full bg-white">
      {/* Left side - Overlapping images */}
      <div className="w-full md:w-1/2 relative p-4 md:p-8">
        <div className="relative h-96 md:h-full">
          {/* Large main image (building) */}
          <div 
            className="absolute top-8 right-0 w-2/3 h-[120%] z-0 transition-transform duration-300"
            style={{ transform: `translateY(-${topImageTranslateY}px)` }}
          >
            <div className="grid grid-cols-1 grid-rows-3 h-full gap-2">
              <div className="overflow-hidden row-span-2">
                <img 
                  src="https://azim.commonsupport.com/Amortez/assets/images/resource/about-3.jpg" 
                  alt="Modern apartment building exterior" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div 
            className="absolute bottom-0 left-0 w-2/3 h-[85%] z-10 transition-transform duration-300"
            style={{ transform: `translateY(${bottomImageTranslateY}px)` }}
          >
            <img 
              src="https://azim.commonsupport.com/Amortez/assets/images/resource/about-4.jpg" 
              alt="Building interior" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Right side - Content */}
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
        {/* ... (rest of your content remains the same) */}
        <div className="flex items-center text-green-600 mb-3">
          <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12L12 4L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 20L12 12L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-sm">Premium Architectures Lifestyle</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Discover the World of Smart Living Spaces
        </h1>

        <p className="text-gray-600 mb-8">
          Voluptate velit esset cillum dolore fugiat nulla sed pariatur acepteur anim idet ipsum laborum. Sed ut perspiciatis und omnis ist natus duia holuptatem accusant dolor laudantium.
        </p>

        <div className="space-y-4 mb-8">
          <div className="flex items-start">
            <div className="text-green-600 mr-3 mt-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-gray-700">
              <span className="font-semibold">S</span>imple & unified building approach of future
            </p>
          </div>

          <div className="flex items-start">
            <div className="text-green-600 mr-3 mt-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-gray-700">
              Experienced & committed to our clients from heart
            </p>
          </div>

          <div className="flex items-start">
            <div className="text-green-600 mr-3 mt-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-gray-700">
              Beautifully designed for large capacity apartments
            </p>
          </div>
        </div>

        <button className="bg-gray-800 text-white py-3 px-6 inline-flex items-center justify-center w-max hover:bg-gray-700 transition-colors">
          READ MORE
          <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Readmore;