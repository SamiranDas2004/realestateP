import React from "react";
import { motion } from "framer-motion";

function AwardsSection() {
  const clientLogos = [
    "https://azim.commonsupport.com/Amortez/assets/images/clients/clients-2.png",
    "https://azim.commonsupport.com/Amortez/assets/images/clients/clients-6.png",
    "https://azim.commonsupport.com/Amortez/assets/images/clients/clients-3.png",
    "https://azim.commonsupport.com/Amortez/assets/images/clients/clients-4.png",
    "https://azim.commonsupport.com/Amortez/assets/images/clients/clients-5.png",
    "https://azim.commonsupport.com/Amortez/assets/images/clients/clients-1.png",
  ];

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto text-center px-6">
        {/* Title Section */}
        <div className="mb-12">
          <h2 className="text-6xl md:text-5xl font-bold mb-6 leading-snug text-gray-900">
            Our Philosophy About <br />
            Real Estate Earned Us Awards
          </h2>
          <p className="text-xl md:text-2xl text-gray-600">
            Acknowledgments from trusted sources
          </p>
        </div>

        {/* Logos Section */}
        <div className="flex justify-center items-center flex-wrap gap-10 mb-12">
          {clientLogos.map((logo, index) => (
            <motion.img
              key={index}
              src={logo}
              alt={`Client Logo ${index + 1}`}
              className="h-24 w-auto object-contain" // Increased icon size
              animate={{
                y: [0, -10, 0], // Moves up and down
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Description Section */}
        <div className="w-full md:w-3/4 lg:w-2/3 mx-auto">
          <p className="text-2xl md:text-2xl text-gray-700 leading-relaxed">
            Koluptate velit cillum doire fugiat nulla pariatur excepteur anim id est laborum. 
            Sed perspiciatis unde omnis iste natus voluptatem accusantium dolore mque lorem.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AwardsSection;