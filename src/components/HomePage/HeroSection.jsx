import React, { useState, useEffect } from "react";

function HeroSection() {
  const [contentVisible, setContentVisible] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState("next");

  const images = [
    {
      image: "https://azim.commonsupport.com/Amortez/assets/images/banner/banner-5.png",
      content: "Creatively Designed",
      subContent: "Friendly Environment",
    },
    {
      image: "https://azim.commonsupport.com/Amortez/assets/images/banner/banner-4.png",
      content: "Comfortable Space With ",
      subContent: "Inspired Living",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleChange("next");
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const handleChange = (direction) => {
    setContentVisible(false);
    setAnimationDirection(direction);

    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        direction === "next"
          ? (prevIndex + 1) % images.length
          : (prevIndex - 1 + images.length) % images.length
      );
      setContentVisible(true);
    }, 1000);
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#0e1b36]">
      <div className="flex flex-col md:flex-row min-h-[550px] md:h-[80vh]">
        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:pl-16 md:pr-8 py-14 md:py-0">
          <div
            className={`transition-all duration-1000 transform ${
              contentVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0" // Removed translate-y from main container
            }`}
          >
            <h1
              className={`text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 transition-all duration-1000 transform ${
                contentVisible
                  ? "opacity-100 translate-y-0"
                  : "-translate-y-full" // Heading comes from top
              }`}
            >
              {images[currentImageIndex].content}
              <br />
              {images[currentImageIndex].subContent}
            </h1>

            <div
              className={`flex space-x-4 mt-12 transition-all duration-1000 transform ${
                contentVisible
                  ? "opacity-100 translate-y-0"
                  : "translate-y-full" // Buttons come from bottom
              }`}
            >
              <button className="bg-[#29ac4a] text-white py-4 px-8 flex items-center">
                VIEW PROJECTS
              </button>
              <button className="border border-white text-white py-4 px-8">
                CONTACT US
              </button>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex space-x-4 mt-8">
            <button
              className="w-12 h-12 rounded-full border border-white text-white flex items-center justify-center hover:bg-white/10"
              onClick={() => handleChange("prev")}
            >
              &lt;
            </button>
            <button
              className="w-12 h-12 rounded-full border border-white text-white flex items-center justify-center hover:bg-white/10"
              onClick={() => handleChange("next")}
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden md:block w-1/2 relative">
          <div
            className={`absolute inset-0 w-full h-full transition-all duration-1000 transform ${
              contentVisible
                ? "opacity-100 scale-100"
                : animationDirection === "next"
                ? "opacity-0 scale-90"
                : "opacity-0 scale-110"
            }`}
            style={{
              backgroundImage: `url(${images[currentImageIndex].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;