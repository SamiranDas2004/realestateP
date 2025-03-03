import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function OurTeam() {
  const teamMembers = [
    {
      name: 'Tommy Cruze',
      role: 'MD & Founder',
      image: 'https://azim.commonsupport.com/Amortez/assets/images/team/team-1.jpg',
      phone: '+1 999 201 7890',
    },
    {
      name: 'Diana Waytt',
      role: 'Head Constructor',
      image: 'https://azim.commonsupport.com/Amortez/assets/images/team/team-2.jpg',
      phone: '+1 555 987 6543',
    },
    {
      name: 'Jones Hayden',
      role: 'Senior Member',
      image: 'https://azim.commonsupport.com/Amortez/assets/images/team/team-3.jpg',
      phone: '+1 555 555 5555',
    },
    {
      name: 'Freya Davies',
      role: 'Foreign Affairs',
      image: 'https://azim.commonsupport.com/Amortez/assets/images/team/team-4.jpg',
      phone: '+1 555 444 3333',
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">OUR EXPERIENCED MEMBERS</h2>
          <div className="text-5xl font-bold text-gray-800 mt-4">Meet Our Team</div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white rounded-lg overflow-hidden shadow-md group relative"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Phone number overlay that appears on hover */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#4564f3] text-white py-3 px-4 
                                transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>{member.phone}</span>
                </div>
              </div>
              
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;