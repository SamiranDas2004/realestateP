import React from "react";
import { motion } from "framer-motion";

function Award() {
  const floating = {
    y: {
      y: [0, 15, 0], 
      transition: {
        duration: 3, 
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <div className="relative bg-white py-24">
      <div className="container mx-auto px-6">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-black mb-4">
            Our Vision
          </h2>
          <p className="text-gray-600 text-lg">
            Recognized for our excellence in real estate development.
          </p>
        </div>

        {/* Award Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Award 1 */}
          <motion.div
            variants={floating} 
            animate="y" 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-gray-300 rounded-xl shadow-lg" // Removed overflow-hidden
          >
            <img
              src="https://azim.commonsupport.com/Amortez/assets/images/resource/award-1.jpg"
              alt="Award 1"
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-black">
              <h3 className="text-2xl font-semibold mb-2">
                Best Real Estate Builder 2021
              </h3>
              <p className="text-gray-600">
                Awarded for outstanding real estate development and innovation.
              </p>
            </div>
          </motion.div>

          {/* Award 2 */}
          <motion.div
            variants={floating}
            animate="y"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-gray-300 rounded-xl shadow-lg" // Removed overflow-hidden
          >
            <img
              src="https://azim.commonsupport.com/Amortez/assets/images/resource/award-2.jpg"
              alt="Award 2"
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-black">
              <h3 className="text-2xl font-semibold mb-2">
                Industry Leader in Property Development
              </h3>
              <p className="text-gray-600">
                Recognized as a leader in modern property development solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Award;