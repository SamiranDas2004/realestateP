import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaArrowUp } from 'react-icons/fa';

function Footer() {
  const galleryImages = [
    'https://azim.commonsupport.com/Amortez/assets/images/resource/footer-gallery-1.jpg',
    'https://azim.commonsupport.com/Amortez/assets/images/resource/footer-gallery-2.jpg',
    'https://azim.commonsupport.com/Amortez/assets/images/resource/footer-gallery-3.jpg',
    'https://azim.commonsupport.com/Amortez/assets/images/resource/footer-gallery-4.jpg',
    'https://azim.commonsupport.com/Amortez/assets/images/resource/footer-gallery-5.jpg',
    'https://azim.commonsupport.com/Amortez/assets/images/resource/footer-gallery-6.jpg',
  ];

  return (
    <footer className="bg-[#222] text-white relative text-lg">
      {/* Subscription Section */}
      <div
        className="w-full py-8 px-4 z-10 text-lg md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:w-4/5"
        style={{
          backgroundImage: `url(https://azim.commonsupport.com/Amortez/assets/images/shape/shape-10.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          top: '-20%',
        }}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
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
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto py-20 px-6 relative mt-0 md:mt-32 text-lg"> {/* Adjusted mt value for mobile */}
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





          {/* Our Gallery Section */}
          <div>
            <h3 className="font-bold text-xl mb-5">OUR GALLERY</h3>
            <div className="grid grid-cols-3 gap-3">
              {galleryImages.map((image, index) => (
                <img key={index} src={image} alt={`Gallery ${index + 1}`} className="w-full h-24 object-cover rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </div>




   
    </footer>
  );
}

export default Footer;