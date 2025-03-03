import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Footer() {
  const galleryImages = [
    'https://azim.commonsupport.com/Amortez/assets/images/resource/footer-gallery-1.jpg',
    'https://azim.commonsupport.com/Amortez/assets/images/resource/footer-gallery-2.jpg',
    'https://azim.commonsupport.com/Amortez/assets/images/resource/footer-gallery-3.jpg',
    'https://azim.commonsupport.com/Amortez/assets/images/resource/footer-gallery-4.jpg',
    'https://azim.commonsupport.com/Amortez/assets/images/resource/footer-gallery-5.jpg',
    'https://azim.commonsupport.com/Amortez/assets/images/resource/footer-gallery-6.jpg',
  ];

  const subscriptionVariants = {
    initial: {
      position: 'relative',
      marginTop: 0, // Remove negative margin-top for mobile
      top: 0,
    },
    animate: {
      position: 'absolute',
      marginTop: 0,
      top: '-20%',
    },
  };

  return (
    <footer className="bg-[#222] text-white relative text-lg">
      {/* Subscription Section with Moving Background */}
      <motion.div
        className="w-full py-8 px-4 z-10 text-lg md:left-1/2 md:transform md:-translate-x-1/2 md:w-4/5 overflow-hidden transition-transform duration-500"
        variants={subscriptionVariants}
        initial="initial"
        animate="animate"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {/* Moving background */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(https://azim.commonsupport.com/Amortez/assets/images/shape/shape-10.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '200%',
          }}
          animate={{
            x: [-1000, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 10,
              ease: "linear",
            },
          }}
        />

        {/* Content on top of moving background */}
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
          <h3 className="font-bold">Don't Miss Our Updates. Subscribe Now!</h3>
          <div className="flex w-full md:w-auto mt-4 md:mt-0">
            <input
              type="email"
              placeholder="Your email address..."
              className="bg-white text-gray-700 p-3 rounded-l-md w-full md:w-64 focus:outline-none"
            />
            <button className="bg-[#0C2340] p-3 rounded-r-md">
              <FaEnvelope />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <div className="container mx-auto py-20 px-6 relative mt-0 md:mt-32 text-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Amortez Section */}
          <div>
            <div className="flex items-center mb-5">
              <img src="https://azim.commonsupport.com/Amortez/assets/images/logo-3.png" alt="Amortez Logo" />
            </div>
            <p className="text-base mb-4">
              Cillum dolore fugiat nulla pariatur excepteur anim id laborum. Sed ut perspiciatis unde omnis iste natus voluptatem.
            </p>
            <div className="flex items-center mb-3">
              <FaMapMarkerAlt className="mr-3 text-gray-400" />
              <p className="text-base">52 Serina Avenue, Highland Mills, New York 10930 - USA</p>
            </div>
            <div className="flex items-center mb-3">
              <FaPhone className="mr-3 text-gray-400" />
              <p className="text-base">1800-222-155</p>
            </div>
            <button className="bg-[#3da561] text-white py-3 px-5 rounded-md mt-4 text-lg font-semibold">
              Start a New Project
            </button>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="font-bold text-xl mb-5">SERVICES</h3>
            <ul className="text-base">
              <li className="mb-3">Property Construction</li>
              <li className="mb-3">Investor Relations</li>
              <li className="mb-3">Community Development</li>
              <li className="mb-3">Property Management</li>
              <li className="mb-3">Floor Designing</li>
              <li>Re-Construct Buildings</li>
            </ul>
          </div>

          {/* About Us Section */}
          <div>
            <h3 className="font-bold text-xl mb-5">ABOUT US</h3>
            <ul className="text-base">
              <li className="mb-3">Mission and Vision</li>
              <li className="mb-3">Our Projects</li>
              <li className="mb-3">Latest Articles</li>
              <li className="mb-3">Media Presentation</li>
              <li className="mb-3">Pricing Structure</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Our Gallery Section with Animated Images */}
          <div>
            <h3 className="font-bold text-xl mb-5">OUR GALLERY</h3>
            <div className="grid grid-cols-3 gap-3">
              {galleryImages.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg">
                  <motion.img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg hover:scale-110 transition-transform duration-500"
                    animate={{
                      scale: [1, 1.08, 1],
                      translateY: [0, -5, 0],
                      translateX: [0, 3, 0]
                    }}
                    transition={{
                      duration: 3 + (index * 0.5),
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;