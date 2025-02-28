import React, { useState, useEffect, useRef } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const menuRef = useRef(null);

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const dropdownLinks = {
    home: [
      { name: 'Home Page 01', href: '#home-page-01' },
      { name: 'Home Page 02', href: '#home-page-02' },
    ],
    projects: [
      { name: 'Project 01', href: '#project-01' },
      { name: 'Project 02', href: '#project-02' },
    ],
    // Add more dropdown links as needed
  };

  return (
    <header className="relative z-50 bg-[#0e1b36] text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="logo z-20">
            <div className="flex items-center">
              <img
                src="https://azim.commonsupport.com/Amortez/assets/images/logo-3.png"
                alt="Amortez Logo"
                className="h-8"
              />
            </div>
          </div>

          {/* Hamburger Menu (Mobile & Tablet) */}
          <div className="lg:hidden z-20">
            <button 
              onClick={toggleMenu} 
              className="focus:outline-none p-2 rounded-md hover:bg-[#1a2a4e] transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Navigation (Desktop) */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-8">
            <ul className="flex space-x-8">
              <li
                onMouseEnter={() => handleMouseEnter('home')}
                onMouseLeave={handleMouseLeave}
                className="relative group"
              >
                <a href="#home" className="text-xl text-white hover:text-gray-300 flex items-center">
                  Home
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <ul className={`absolute bg-white shadow-lg mt-2 py-2 w-48 rounded z-10 transition-all duration-300 ${hoveredLink === 'home' ? 'opacity-100' : 'opacity-0 invisible'}`}>
                  {dropdownLinks.home.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#29ac4a] transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <a href="#about" className="text-xl text-white hover:text-gray-300">
                  About
                </a>
              </li>
              <li
                onMouseEnter={() => handleMouseEnter('projects')}
                onMouseLeave={handleMouseLeave}
                className="relative group"
              >
                <a
                  href="#projects"
                  className="text-xl text-white hover:text-gray-300 flex items-center"
                >
                  Projects
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <ul className={`absolute bg-white shadow-lg mt-2 py-2 w-48 rounded z-10 transition-all duration-300 ${hoveredLink === 'projects' ? 'opacity-100' : 'opacity-0 invisible'}`}>
                  {dropdownLinks.projects.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#29ac4a] transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <a
                  href="#elements"
                  className="text-xl text-white hover:text-gray-300"
                >
                  Elements
                </a>
              </li>
              <li>
                <a href="#blog" className="text-xl text-white hover:text-gray-300">
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-xl text-white hover:text-gray-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact Button (Desktop Only) */}
          <div className="contact-section items-center hidden lg:flex">
            <div className="rounded-full bg-[#29ac4a] p-3 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div>
              <div className="text-lg">Start a New Project</div>
              <div className="text-3xl font-bold">1800-222-155</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Menu (Slide Down) */}
      <div 
        ref={menuRef}
        className={`lg:hidden absolute w-full bg-[#0e1b36] z-10 shadow-lg transition-all duration-300 ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-10 pointer-events-none'
        }`}
      >
        <nav className="container mx-auto px-4 py-6">
          <ul className="space-y-4">
            <li className="border-b border-gray-700 pb-3">
              <div className="flex justify-between items-center">
                <a href="#home" className="text-xl font-medium">Home</a>
                <button 
                  onClick={() => setHoveredLink(hoveredLink === 'home' ? null : 'home')}
                  className="p-2 focus:outline-none"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-5 w-5 transition-transform ${hoveredLink === 'home' ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              {hoveredLink === 'home' && (
                <ul className="mt-3 pl-4 border-l-2 border-[#29ac4a]">
                  {dropdownLinks.home.map((link, index) => (
                    <li key={index} className="py-2">
                      <a href={link.href} className="block text-gray-300 hover:text-white">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="border-b border-gray-700 pb-3">
              <a href="#about" className="block text-xl font-medium">About</a>
            </li>
            <li className="border-b border-gray-700 pb-3">
              <div className="flex justify-between items-center">
                <a href="#projects" className="text-xl font-medium">Projects</a>
                <button 
                  onClick={() => setHoveredLink(hoveredLink === 'projects' ? null : 'projects')}
                  className="p-2 focus:outline-none"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-5 w-5 transition-transform ${hoveredLink === 'projects' ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              {hoveredLink === 'projects' && (
                <ul className="mt-3 pl-4 border-l-2 border-[#29ac4a]">
                  {dropdownLinks.projects.map((link, index) => (
                    <li key={index} className="py-2">
                      <a href={link.href} className="block text-gray-300 hover:text-white">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="border-b border-gray-700 pb-3">
              <a href="#elements" className="block text-xl font-medium">Elements</a>
            </li>
            <li className="border-b border-gray-700 pb-3">
              <a href="#blog" className="block text-xl font-medium">Blog</a>
            </li>
            <li className="pb-3">
              <a href="#contact" className="block text-xl font-medium">Contact</a>
            </li>
            
            {/* Contact Info for Mobile */}
            <li className="pt-4 mt-4 border-t border-gray-700">
              <div className="flex items-center">
                <div className="rounded-full bg-[#29ac4a] p-2 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm">Start a New Project</div>
                  <div className="text-xl font-bold">1800-222-155</div>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;