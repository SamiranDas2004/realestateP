import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Info() {
  // Initializing state for the stats counters
  const [totalConstructions, setTotalConstructions] = useState(0);
  const [totalAmenities, setTotalAmenities] = useState(0);
  const [apartmentsSold, setApartmentsSold] = useState(0);

  useEffect(() => {
    // Function to animate the counters
    const animateCounter = (setter, target) => {
      let count = 0;
      const interval = setInterval(() => {
        count += 1;
        setter(count);
        if (count === target) {
          clearInterval(interval);
        }
      }, 10); // Update every 10ms (for smoother animation)
    };

    // Start the counter animations
    animateCounter(setTotalConstructions, 250);
    animateCounter(setTotalAmenities, 140);
    animateCounter(setApartmentsSold, 790);
  }, []);

  // Floating animation for numbers
  const floatAnimation = {
    y: [0, -10, 0], // Moves up and down
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  };

  return (
    <div className="relative w-full py-20 bg-[#0e1b36] text-white overflow-hidden">
      {/* Background pattern with darker overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://azim.commonsupport.com/Amortez/assets/images/shape/shape-5.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(0, 0, 0, 0.3)", // Add a semi-transparent black overlay
          backgroundBlendMode: "multiply", // Blend the overlay with the image
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Logo icon */}
        <div className="flex justify-center mb-6">
          <svg
            className="w-12 h-8 text-green-500"
            viewBox="0 0 24 16"
            fill="currentColor"
          >
            <path d="M12 0L24 16H0L12 0Z" />
            <path
              d="M6 8L12 2L18 8V16H6V8Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Main heading */}
        <h2 className="text-5xl font-bold text-center mb-16 max-w-4xl mx-auto leading-tight">
          State-of-the-Art Real Estate Developers Since 1995
        </h2>

        {/* Two column text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 max-w-6xl mx-auto">
          <div>
            <p className="text-lg leading-relaxed">
              Incididunt enim laboreat dolore magna aliqua. Ut sed enim miniya
              veniam nostrud nasts exercitation ullamco laboris nisiut aliquip
              dui consequat. Duis irure dolor in reprehenderit in voluptate
              velit esse cillum.
            </p>
          </div>
          <div>
            <p className="text-lg leading-relaxed">
              Voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur anim laborum. Sed ut perspiciatis und omnis iste natus
              eror sit holuptatem ipsum accusantium dolor mque laudantium.
            </p>

            {/* Stats section with floating effect */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ml-auto mt-8">
              <div className="text-center">
                <motion.h3
                  className="text-7xl font-bold text-green-500 mb-4"
                  animate={floatAnimation}
                >
                  {totalConstructions}
                  <span className="text-green-500 text-6xl">+</span>
                </motion.h3>
                <p className="text-l">Total Constructions</p>
              </div>

              <div className="text-center">
                <motion.h3
                  className="text-7xl font-bold text-green-500 mb-4"
                  animate={floatAnimation}
                >
                  {totalAmenities}
                  <span className="text-green-500 text-6xl">+</span>
                </motion.h3>
                <p className="text-l">Total Amenities</p>
              </div>

              <div className="text-center">
                <motion.h3
                  className="text-7xl font-bold text-green-500 mb-4"
                  animate={floatAnimation}
                >
                  {apartmentsSold}
                  <span className="text-green-500 text-6xl">+</span>
                </motion.h3>
                <p className="text-l">Apartments Sold</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full white overlap at bottom-left corner with right edge at a 45-degree angle (hidden on mobile) */}
      <div className="absolute bottom-0 left-0 w-2/4 h-1/5 bg-white z-20 clip-45 hidden md:block"></div>
    </div>
  );
}

export default Info;
