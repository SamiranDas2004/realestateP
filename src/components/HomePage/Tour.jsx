import React from "react";
import { motion } from "framer-motion";

function Tour() {
  return (
    <div
      className="relative flex justify-center items-center min-h-screen px-6 py-10 md:py-0"
      style={{
        backgroundImage:
          "url('https://azim.commonsupport.com/Amortez/assets/images/shape/shape-9.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Parallax Effect
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0C2340] opacity-90"></div>

      <motion.div
        className="relative grid grid-cols-1 md:grid-cols-2 items-center max-w-6xl w-full gap-8" // Changed to grid
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Left Section - Form */}
        <motion.div
          className="bg-transparent text-white p-6 md:p-8 rounded-lg"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-green-400 text-sm uppercase mb-2">
            Get a FREE Tour of Premium Lifestyle
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Book a Property Tour
          </h2>
          <p className="text-gray-300 text-sm mb-6">
            Voluptate velit esset cillum dolore fugiat nulla sed pariatur
            acepteur anim idet ipsum laborum perspiciatis und omnis.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-500 bg-transparent text-white placeholder-gray-400 rounded-md p-3 focus:outline-none focus:border-green-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-500 bg-transparent text-white placeholder-gray-400 rounded-md p-3 focus:outline-none focus:border-green-400"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="border border-gray-500 bg-transparent text-white placeholder-gray-400 rounded-md p-3 focus:outline-none focus:border-green-400"
            />
            <input
              type="text"
              placeholder="Location"
              className="border border-gray-500 bg-transparent text-white placeholder-gray-400 rounded-md p-3 focus:outline-none focus:border-green-400"
            />
            <textarea
              placeholder="Message"
              className="border border-gray-500 bg-transparent text-white placeholder-gray-400 rounded-md p-3 col-span-full focus:outline-none focus:border-green-400"
              rows={4}
            ></textarea>
            <button className="bg-[#3da561] hover:bg-green-600 text-white font-semibold py-3 rounded-md col-span-full flex items-center justify-center transition shadow-md hover:shadow-lg transform hover:scale-105 animate-pulse">
              SEND REQUEST →
            </button>
          </form>
        </motion.div>

        {/* Right Section - Floating Image with Diagonal Sweep Effect */}
        <motion.div
          className="overflow-hidden mt-8 md:mt-0 rounded-lg relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="relative overflow-hidden rounded-lg diagonal-shine">
            <motion.img
              src="https://azim.commonsupport.com/Amortez/assets/images/resource/contact-1.jpg"
              alt="Building"
              className="w-full h-full object-cover transition-transform duration-500 transform scale-100 hover:scale-105 shadow-lg rounded-lg"
              // animate={{
              //   y: [0, -5, 0], // Floating effect
              // }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
          </div>

          {/* CSS for the diagonal shine effect */}
          <style jsx>{`
            .diagonal-shine {
              position: relative;
            }
            
            .diagonal-shine::before {
              content: '';
              position: absolute;
              top: 0;
              left: -100%;
              width: 50%;
              height: 100%;
              background: linear-gradient(
                to right,
                rgba(255, 255, 255, 0) 0%,
                rgba(255, 255, 255, 0.3) 50%,
                rgba(255, 255, 255, 0) 100%
              );
              transform: skewX(-25deg);
              z-index: 1;
              transition: none;
            }
            
            .diagonal-shine:hover::before {
              left: 125%;
              transition: all 0.7s ease;
            }
          `}</style>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Tour;