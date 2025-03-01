import React from 'react';

function ViewServices() {
  return (
    <div 
      className="bg-gray-100 py-16"
      style={{ 
        backgroundImage: "url('https://azim.commonsupport.com/Amortez/assets/images/shape/shape-2.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right center',
        backgroundSize: 'contain'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* ... (Left content remains the same) ... */}
          <div className="text-left">
            <div className="mb-6">
              <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0L0 20H20L10 0Z" fill="#E6A800" />
                <path d="M30 0L20 20H40L30 0Z" fill="#E6A800" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Constructing Since 1995, For Lasting & Positive Relations
            </h2>
            <p className="text-gray-600 mb-8">
              Voluptate velit cillum dolore fugiat nulla pariatur. Excepteur
              anim idet laborum. Sed ut perspiciatis und omnis iste natus sit
              holuplatem accusantium sed laudantium.
            </p>
            <button className="bg-[#4564f3] hover:bg-blue-700 text-white py-3 px-6 rounded">
              VIEW SERVICES
            </button>
          </div>
          {/* Right Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Construction Image */}
            <div className="relative overflow-hidden group">
              <img
                src="https://azim.commonsupport.com/Amortez/assets/images/service/service-1.jpg"
                alt="Construction"
                className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:rotate-6" // Added rotate-6
              />
              <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-blue-500/50 to-blue-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> {/* Changed gradient color */}
              <div className="absolute bottom-4 left-4 text-white font-semibold">Construction</div>
            </div>

            {/* Development Image */}
            <div className="relative overflow-hidden group">
              <img
                src="https://azim.commonsupport.com/Amortez/assets/images/service/service-2.jpg"
                alt="Development"
                className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110" // Added scale-110
              />
              <div className="absolute inset-0 bg-red-500/50 opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div> {/* Changed overlay color */}
              <div className="absolute bottom-4 left-4 text-white font-semibold">Development</div>
            </div>

            {/* Management Image */}
            <div className="relative overflow-hidden group">
              <img
                src="https://azim.commonsupport.com/Amortez/assets/images/service/service-3.jpg"
                alt="Management"
                className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:blur-md" // Added blur-md
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div> {/* Changed overlay color */}
              <div className="absolute bottom-4 left-4 text-white font-semibold">Management</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewServices;