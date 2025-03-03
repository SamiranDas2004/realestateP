import React from "react";
import { motion } from "framer-motion";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomePageCard() {
  const cards = [
    {
      title: "Experienced Builders",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="w-20 h-20 text-green-500"
        >
          <path
            fill="currentColor"
            d="M30,20 L30,80 M30,80 L90,80 M60,20 L60,50 M60,20 L90,20 M90,20 L90,50 M60,50 L90,50 M30,20 L60,20"
            stroke="currentColor"
            strokeWidth="4"
          />
        </svg>
      ),
      description:
        "Voluptate velit cillum dol fugiat pariatur. Excepteur anim idet laboru sed perspise tis undy omnis iste natus.",
    },
    {
      title: "Investment & Management",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="w-20 h-20 text-green-500"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            d="M20,80 L80,80 L80,50 L60,50 L60,80 M20,80 L20,40 L80,40 M30,40 L30,30 L70,30 L70,40 M50,80 L50,65 M10,40 L20,30 L30,40"
          />
        </svg>
      ),
      description:
        "Voluptate velit cillum dol fugiat pariatur. Excepteur anim idet laboru sed perspise tis undy omnis iste natus.",
    },
    {
      title: "Get Sustainable Lifestyle",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="w-20 h-20 text-green-500"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            d="M65,35 A15,15 0 1,1 35,35 A15,15 0 1,1 65,35 M25,75 C25,55 40,50 50,50 C60,50 75,55 75,75 M25,25 A30,30 0 1,1 75,75"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            d="M50,20 L50,15 M75,25 L80,20 M25,25 L20,20 M25,45 L20,50 M75,45 L80,50"
          />
        </svg>
      ),
      description:
        "Voluptate velit cillum dol fugiat pariatur. Excepteur anim idet laboru sed perspise tis undy omnis iste natus.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative p-8 mt-8">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="p-2">
            <motion.div
              className="bg-white p-8 relative overflow-hidden z-10 transition-all duration-300 transform group rounded-lg m-2 shadow-sm" // added shadow-sm
              initial={{ y: 0 }}
              animate={{ y: [-5, 5, -5] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: index * 0.3,
              }}
              whileHover={{ scale: 1.04, transition: { duration: 0.15 } }}
              style={{
                backgroundImage:
                  "url('https://azim.commonsupport.com/Amortez/assets/images/shape/shape-6.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="mb-6 text-green-500">{card.icon}</div>
              <h2 className="text-3xl font-bold mb-6">{card.title}</h2>
              <hr className="w-4/5 border-gray-300 mb-6" />
              <p className="text-gray-600 mb-8 text-lg">{card.description}</p>

              <div className="absolute bottom-0 right-0 transition-colors duration-300 text-green-500 group-hover:text-[#122243]">
                <svg className="w-8 h-8" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M0,0 L24,0 L24,24 L0,24 Z" fillOpacity="0" />
                  <path fill="currentColor" d="M0,24 L24,24 L24,0 Z" />
                </svg>
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HomePageCard;