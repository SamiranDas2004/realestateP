import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Info() {
  const [totalConstructions, setTotalConstructions] = useState(0);
  const [totalAmenities, setTotalAmenities] = useState(0);
  const [apartmentsSold, setApartmentsSold] = useState(0);

  useEffect(() => {
    const animateCounter = (setter, target) => {
      let count = 0;
      const interval = setInterval(() => {
        count += 1;
        setter(count);
        if (count === target) {
          clearInterval(interval);
        }
      }, 10);
    };

    animateCounter(setTotalConstructions, 250);
    animateCounter(setTotalAmenities, 140);
    animateCounter(setApartmentsSold, 790);
  }, []);

  const floatAnimation = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  };

  return (
    <div className="relative w-full pb-20 bg-[#0e1b36] text-white overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://azim.commonsupport.com/Amortez/assets/images/shape/shape-5.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          backgroundBlendMode: "multiply",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
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

        <h2 className="text-5xl font-bold text-center mb-16 max-w-4xl mx-auto leading-tight">
          State-of-the-Art Real Estate Developers Since 1995
        </h2>

        <div className="flex flex-col md:flex-row gap-12 mb-24 max-w-6xl mx-auto">
          <div className="w-full md:w-1/2">
            <p className="text-lg leading-relaxed">
              Incididunt enim laboreat dolore magna aliqua. Ut sed enim miniya
              veniam nostrud nasts exercitation ullamco laboris nisiut aliquip
              dui consequat. Duis irure dolor in reprehenderit in voluptate
              velit esse cillum.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative">
            <p className="text-lg leading-relaxed">
              Voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur anim laborum. Sed ut perspiciatis und omnis iste natus
              eror sit holuptatem ipsum accusantium dolor mque laudantium.
            </p>
          </div>
        </div>
      </div>

      {/* Numbers section - Aligned to the right */}
   {/* Numbers section - Aligned in a row */}
{/* Numbers section - Aligned to the right side */}
<div className="container mx-auto px-6 relative z-70 flex justify-end">
  <div className="w-full md:w-1/2 flex flex-wrap justify-between items-center text-green-500">
    <div className="flex flex-col items-center mx-4">
      <motion.h3 className="text-7xl font-bold mb-2" animate={floatAnimation}>
        {totalConstructions}
        <span className="text-6xl">+</span>
      </motion.h3>
      <p className="text-lg text-white">Total Constructions</p>
    </div>

    <div className="flex flex-col items-center mx-4">
      <motion.h3 className="text-7xl font-bold mb-2" animate={floatAnimation}>
        {totalAmenities}
        <span className="text-6xl">+</span>
      </motion.h3>
      <p className="text-lg text-white">Total Amenities</p>
    </div>

    <div className="flex flex-col items-center mx-4">
      <motion.h3 className="text-7xl font-bold mb-2" animate={floatAnimation}>
        {apartmentsSold}
        <span className="text-6xl">+</span>
      </motion.h3>
      <p className="text-lg text-white">Apartments Sold</p>
    </div>
  </div>
</div>



      {/* Diagonal cut white section */}
      <div
        className="absolute bottom-0 left-0 w-2/4 h-2/8 bg-white z-10 hidden md:block"
        style={{
          clipPath: "polygon(0 0, 94% 0, 85% 100%, 0 100%)",
        }}
      ></div>
    </div>
  );
}

export default Info;
