import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Banner() {
  const images = [
    {
      url: "https://azim.commonsupport.com/Amortez/assets/images/banner/banner-4.jpg",
      text: "Uniquely Designed For The Larger Communities",
      subtext: "All Spaces With Friendly Environment",
    },
    {
      url: "https://azim.commonsupport.com/Amortez/assets/images/banner/banner-3.jpg",
      text: "Creating Sustainable Living Spaces",
      subtext: "Where Comfort Meets Modern Design",
    },
    {
      url: "https://azim.commonsupport.com/Amortez/assets/images/banner/banner-2.jpg",
      text: "Your Dream Home Awaits",
      subtext: "Discover Elegant and Functional Residences",
    },
    {
      url: "https://azim.commonsupport.com/Amortez/assets/images/banner/banner-1.jpg",
      text: "Building Futures, One Home at a Time",
      subtext: "Experience Quality and Innovation",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        {/* Background Image Layer with Brightness Filter */}
        <motion.div
          key={`bg-${currentImageIndex}`}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Using a div with background-image for better mobile support */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${images[currentImageIndex].url})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              filter: "brightness(0.5)",
            }}
          />
        </motion.div>

        {/* Text Content Layer (Not Affected by Filter) */}
        <motion.div
          key={`content-${currentImageIndex}`}
          className="absolute inset-0 w-full h-full flex items-center justify-center z-10 px-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center text-white max-w-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">{images[currentImageIndex].text}</h2>
            <p className="text-base md:text-lg mb-4 md:mb-8">{images[currentImageIndex].subtext}</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="bg-[#4564f3] hover:bg-blue-700 py-2 px-6 rounded">
                VIEW PROJECTS
              </button>
              <button className="bg-transparent border border-white hover:bg-white hover:text-black py-2 px-6 rounded">
                EXPLORE NEARBY
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Banner;