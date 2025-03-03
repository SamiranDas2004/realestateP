import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

function LearnMore() {
  // Animation variants for the floating effect
  const floatingAnimation = {
    y: {
      duration: 2.5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  return (
    <div 
    className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden" // Added overflow-hidden here
    style={{ 
      backgroundImage: 'url(http://azim.commonsupport.com/Amortez/assets/images/shape/shape-1.png)',
      backgroundPosition: 'right center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
    }}
  >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Content Section */}
        <motion.div
          className="max-w-lg"
          animate={{ y: [0, -10, 0] }}
          transition={floatingAnimation.y}
        >
          {/* Small logo/icon */}
          <div className="mb-6">
            <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0L0 20H20L10 0Z" fill="#E6A800" />
              <path d="M30 0L20 20H40L30 0Z" fill="#E6A800" />
            </svg>
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            World Of Smart Spaces And Development
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-12">
            Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur anim
            ideyl laborum sed ut perspiciatis und omnis iste natus error sit
            holuplatem accusantium dolor mque laudantium.
          </p>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            <motion.div
              className="flex flex-col items-center text-center"
              animate={{ y: [0, -8, 0] }}
              transition={{
                ...floatingAnimation.y,
                delay: 0.2,
              }}
            >
              <div className="bg-white rounded-md p-4 mb-3 shadow-sm">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 10V7C20 5.9 19.1 5 18 5H6C4.9 5 4 5.9 4 7V10C2.9 10 2 10.9 2 12V17H3.33L4 19H5L5.67 17H18.33L19 19H20L20.67 17H22V12C22 10.9 21.1 10 20 10Z" stroke="#000000" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <span className="text-sm font-medium">Best Amenities</span>
            </motion.div>

            <motion.div
              className="flex flex-col items-center text-center"
              animate={{ y: [0, -8, 0] }}
              transition={{
                ...floatingAnimation.y,
                delay: 0.4,
              }}
            >
              <div className="bg-white rounded-md p-4 mb-3 shadow-sm">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="8" r="4" stroke="#000000" strokeWidth="2" fill="none" />
                  <path d="M18 21C18 16.5 15.5 14 12 14C8.5 14 6 16.5 6 21" stroke="#000000" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <span className="text-sm font-medium">Gracious Living</span>
            </motion.div>

            <motion.div
              className="flex flex-col items-center text-center"
              animate={{ y: [0, -8, 0] }}
              transition={{
                ...floatingAnimation.y,
                delay: 0.6,
              }}
            >
              <div className="bg-white rounded-md p-4 mb-3 shadow-sm">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 21V7L12 3L20 7V21" stroke="#000000" strokeWidth="2" fill="none" />
                  <path d="M9 14H15" stroke="#000000" strokeWidth="2" />
                  <path d="M9 17H15" stroke="#000000" strokeWidth="2" />
                  <path d="M12 3V8" stroke="#000000" strokeWidth="2" />
                </svg>
              </div>
              <span className="text-sm font-medium">Modern Spaces</span>
            </motion.div>
          </div>

          {/* Learn More Button */}
          <motion.button
            className="bg-[#4564f3] hover:bg-blue-700 text-white py-3 px-8 rounded inline-flex items-center transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            LEARN MORE
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.button>
        </motion.div>

        {/* Right Image Section */}
        <div className="relative hidden lg:block">
          <motion.div
            className="absolute -top-16 -right-16 w-64 h-64 bg-blue-50 opacity-20 z-0 rounded-full"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.div>
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: [0, -15, 0]
            }}
            transition={{
              y: {
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              },
              opacity: { duration: 0.6 }
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <img
              src="https://azim.commonsupport.com/Amortez/assets/images/resource/about-2.jpg"
              alt="Modern Interior"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </motion.div>
          <motion.div
            className="absolute -bottom-12 -left-12 z-20"
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, 12, 0]
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.4 },
              x: { duration: 0.6, delay: 0.4 },
              y: {
                duration: 3.5,
                delay: 0.2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <img
              src="https://azim.commonsupport.com/Amortez/assets/images/resource/about-1.jpg"
              alt="Building Exterior"
              className="rounded-lg shadow-xl w-48 h-48 object-cover border-4 border-white"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default LearnMore;