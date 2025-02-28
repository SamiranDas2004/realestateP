import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function InteriorCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "https://azim.commonsupport.com/Amortez/assets/images/project/project-9.jpg",
    "https://azim.commonsupport.com/Amortez/assets/images/project/project-10.jpg",
    "https://azim.commonsupport.com/Amortez/assets/images/project/project-8.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-screen bg-gray-100 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Shape */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url(https://azim.commonsupport.com/Amortez/assets/images/shape/shape-8.png)`,
        }}
      ></div>

      {/* Header Section */}
      <div className="relative z-10 w-4/5 md:w-3/4 lg:w-2/3 flex justify-between items-center text-center mb-8">
        <div>
          <p className="uppercase text-xs text-gray-500 mb-2">
            EXPERIENCE THE AMORTEZ PROPERTIES
          </p>
          <h2 className="text-4xl font-bold text-gray-900">Interior & Exterior Gallery</h2>
        </div>
        <button className="border border-gray-400 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-all">
          VIEW MORE →
        </button>
      </div>

      {/* Carousel */}
      <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
        <AnimatePresence>
          {images.map((image, index) => {
            const isActive = index === currentSlide;
            const isPrev = index === (currentSlide - 1 + images.length) % images.length;
            const isNext = index === (currentSlide + 1) % images.length;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: isActive ? 1 : 0.5,
                  scale: isActive ? 1 : 0.8,
                  x: isActive ? "0%" : isPrev ? "-40%" : "40%",
                  zIndex: isActive ? 10 : 5,
                }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute w-4/5 md:w-3/4 lg:w-2/3 h-full rounded-lg shadow-xl overflow-hidden"
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                />
                {isActive && (
                  <div className="absolute bottom-6 left-6 bg-black bg-opacity-70 text-white p-4 rounded-lg">
                    <h3 className="text-lg font-semibold">Amortez Resort</h3>
                    <p className="text-sm">Luxury & Comfort at its best.</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default InteriorCarousel;
