import React from 'react';
import { Play } from 'lucide-react';

function About() {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 text-white pb-40">
      {/* Background Section */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('https://azim.commonsupport.com/Amortez/assets/images/background/video-bg.jpg')",
          backgroundPosition: "center 60%",
          backgroundSize: "100% 120%"
        }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-6xl px-4 sm:px-6 py-12">
        {/* Content Box - Shifted Left */}
        <div className="bg-white text-gray-900 p-5 sm:p-10 shadow-2xl w-full max-w-3xl text-left transform transition-all hover:scale-105 duration-500 ease-in-out ml-auto mr-auto sm:mr-auto sm:ml-10 flex flex-col justify-between mb-[-15%] sm:mb-[-20%]">
          {/* Logo */}
          <div className="mb-4 flex justify-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#3da561] rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">A</span>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-gray-800 leading-tight">
            Our Mission & Vision For The <span className="text-[#3da561]">RealEstate</span> Industry
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg mb-4 text-gray-600">
            Koluptate velit cillum dolore fugiat nulla pariatur excepteur anim id est laborum. Sed ut perspiciatis unde omnis iste natus voluptatem.
            Koluptate velit cillum dolore fugiat nulla pariatur excepteur anim id est laborum.
          </p>

          {/* Commitment */}
          <p className="text-xs sm:text-base md:text-lg mb-4 text-gray-600">
            As real estate builders and managers, we approach every project as a long-term commitment for a stronger future.
          </p>

          {/* About Us Button */}
          <button className="bg-[#3da561] hover:bg-[#2e8a4d] text-white py-2 px-4 sm:py-3 sm:px-8 rounded-lg font-semibold text-sm sm:text-base md:text-lg shadow-md transition-transform duration-500 ease-in-out transform hover:scale-110 floating-button self-start">
            ABOUT US →
          </button>
        </div>

        {/* Floating Play Button (For larger screens) - Adjusted Right Position */}
        <div className="hidden md:flex absolute right-16 md:right-16 top-1/2 transform -translate-y-1/2 flex-col items-center text-white">
          <div className="relative floating-button">
            {/* Ripple Effect */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="ripple absolute w-20 h-20 sm:w-28 sm:h-28 border-2 border-white rounded-full"></div>
              <div className="ripple absolute w-28 h-28 sm:w-40 sm:h-40 border-2 border-white rounded-full"></div>
              <div className="ripple absolute w-36 h-36 sm:w-52 sm:h-52 border-2 border-white rounded-full"></div>
            </div>

            {/* Play Button */}
            <button className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform relative z-10">
              <Play className="w-7 h-7 sm:w-8 sm:h-8 text-black" />
            </button>
          </div>
          <span className="mt-2 text-xs sm:text-sm">Watch The Video Tour</span>
        </div>

        {/* Mobile Play Button (More spacing on small screens) */}
        <div className="md:hidden flex flex-col items-center text-white mt-20">
          <div className="relative floating-button">
            {/* Ripple Effect */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="ripple absolute w-24 h-24 border-2 border-white rounded-full"></div>
              <div className="ripple absolute w-32 h-32 border-2 border-white rounded-full"></div>
              <div className="ripple absolute w-40 h-40 border-2 border-white rounded-full"></div>
            </div>

            {/* Bigger Play Button */}
            <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform relative z-10">
              <Play className="w-12 h-12 text-black" />
            </button>
          </div>
          <span className="mt-2 text-xs">Watch The Video Tour</span>
        </div>
      </div>

      {/* White Bottom Section - Ensuring visibility on mobile */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-white"></div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        .floating-button {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes ripple {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.2); opacity: 0; }
        }

        .ripple {
          animation: ripple 1.5s linear infinite;
        }

        .ripple:nth-child(2) {
          animation-delay: 0.5s;
        }

        .ripple:nth-child(3) {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}

export default About;
