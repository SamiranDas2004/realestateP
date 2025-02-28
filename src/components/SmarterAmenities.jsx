import React from 'react';
import { FaPaw, FaChair, FaBox, FaSmoking, FaChild, FaParking, FaTshirt, FaBasketballBall, FaUsers } from 'react-icons/fa';

function SmarterAmenities() {
  const itemData = [
    { icon: <FaPaw />, title: "Pets Friendly", subTitle: "Veniam quis nostrud ullamco" },
    { icon: <FaChair />, title: "Furnished Areas", subTitle: "Veniam quis nostrud ullamco" },
    { icon: <FaBox />, title: "Package Services", subTitle: "Veniam quis nostrud ullamco" },
    { icon: <FaSmoking />, title: "Smoking Room", subTitle: "Veniam quis nostrud ullamco" },
    { icon: <FaChild />, title: "Children Playland", subTitle: "Veniam quis nostrud ullamco" },
    { icon: <FaParking />, title: "Large Parking", subTitle: "Veniam quis nostrud ullamco" },
    { icon: <FaTshirt />, title: "Washer Facility", subTitle: "Veniam quis nostrud ullamco" },
    { icon: <FaBasketballBall />, title: "Indoor Sports", subTitle: "Veniam quis nostrud ullamco" },
    { icon: <FaUsers />, title: "Social Gathering", subTitle: "Veniam quis nostrud ullamco" },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <p className="uppercase text-xs text-gray-500 mb-2">EXPERIENCE THE AMORTEZ PROPERTIES</p>
        <h2 className="text-3xl font-semibold mb-8">Smarter Amenities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
          {itemData.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg p-6 shadow-md flex flex-col items-center overflow-hidden group transition-all duration-500 ease-in-out hover:bg-gradient-to-tr hover:from-[#3da561] hover:to-[#a3e6c0] hover:shadow-lg hover:scale-105"
            >
              <div className="bg-blue-100 p-3 rounded-full mb-4 text-blue-600 text-3xl transition-transform duration-500 ease-in-out group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 transition-colors duration-500 ease-in-out group-hover:text-white">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 transition-colors duration-500 ease-in-out group-hover:text-white">
                {item.subTitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SmarterAmenities;