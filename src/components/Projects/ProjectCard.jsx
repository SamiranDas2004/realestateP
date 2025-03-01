import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProjectCards() {
  const projects = [
    {
      id: 1,
      title: "Experienced Builders",
      image: "https://azim.commonsupport.com/Amortez/assets/images/resource/feature-1.jpg",
      description:
        "Our expert team brings decades of combined experience to every project.",
    },
    {
      id: 2,
      title: "Next Level Apartments",
      image: "https://azim.commonsupport.com/Amortez/assets/images/resource/feature-2.jpg",
      description: "Modern living spaces designed for comfort and productivity.",
    },
    {
      id: 3,
      title: "Ideal Living Locations",
      image: "https://azim.commonsupport.com/Amortez/assets/images/resource/feature-3.jpg",
      description: "Find your perfect home in our carefully selected neighborhoods.",
    },
    {
      id: 4,
      title: "Luxury Residences",
      image: "https://azim.commonsupport.com/Amortez/assets/images/resource/about-2.jpg",
      description: "Exclusive properties designed for an elevated lifestyle.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Long-Lasting Structures
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold">Built With Love</h2>
      </div>

      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id} className="px-2">
            <motion.div 
              className="relative overflow-hidden rounded-lg shadow-lg"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white p-6">
                <h3 className="text-2xl font-bold text-center">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProjectCards;
