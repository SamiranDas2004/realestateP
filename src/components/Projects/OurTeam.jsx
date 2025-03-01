import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function OurTeam() {
  const teamMembers = [
    {
      name: 'Tommy Cruze',
      role: 'MD & Founder',
      image: 'https://azim.commonsupport.com/Amortez/assets/images/team/team-1.jpg',
      phone: '+1-555-123-4567', // Added phone number
    },
    {
      name: 'Diana Waytt',
      role: 'Head Constructor',
      image: 'https://azim.commonsupport.com/Amortez/assets/images/team/team-2.jpg',
      phone: '+1-555-987-6543', // Added phone number
    },
    {
      name: 'Jones Hayden',
      role: 'Senior Member',
      image: 'https://azim.commonsupport.com/Amortez/assets/images/team/team-3.jpg',
      phone: '+1-555-555-5555', // Added phone number
    },
    {
      name: 'Freya Davies',
      role: 'Foreign Affairs',
      image: 'https://azim.commonsupport.com/Amortez/assets/images/team/team-4.jpg',
      phone: '+1-555-444-3333', // Added phone number
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.3,
          duration: 0.8,
        },
      }));
    }
  }, [controls, inView]);

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">OUR EXPERIENCED MEMBERS</h2>
          <p className="text-gray-600">Meet Our Team</p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              custom={index}
              className="text-center relative"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>

              {/* Phone Number */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-4 left-0 right-0 text-gray-800"
              >
                {member.phone}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;