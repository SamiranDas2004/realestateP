import React from 'react';

function About() {
  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      {/* Background Section */}
      <div className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('https://azim.commonsupport.com/Amortez/assets/images/background/video-bg.jpg')" }}>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center w-full px-6">
        {/* Content Box */}
        <div className="bg-white text-gray-900 p-10 rounded-2xl shadow-2xl max-w-3xl text-center transform transition-all hover:scale-105 duration-500 ease-in-out">
          {/* Logo */}
          <div className="mb-5 flex justify-center">
            <div className="w-12 h-12 bg-[#3da561] rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">A</span>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-extrabold mb-5 text-gray-800 leading-tight">
            Our Mission & Vision For The <span className="text-[#3da561]">RealEstate</span> Industry
          </h2>

          {/* Description */}
          <p className="text-lg mb-5 text-gray-600">
            Koluptate velit cillum dolore fugiat nulla pariatur excepteur anim id est laborum. Sed ut perspiciatis unde omnis iste natus voluptatem.
          </p>

          {/* Commitment */}
          <p className="text-lg mb-5 text-gray-600">
            As real estate builders and managers, we approach every project as a long-term commitment for a stronger future.
          </p>

          {/* About Us Button */}
          <button className="bg-[#3da561] hover:bg-[#2e8a4d] text-white py-3 px-8 rounded-lg font-semibold text-lg shadow-md transition-transform duration-500 ease-in-out transform hover:scale-110 floating-button">
            ABOUT US →
          </button>
        </div>
      </div>

      {/* Floating Button Animation */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }

          .floating-button {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}

export default About;
