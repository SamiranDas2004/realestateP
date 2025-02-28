import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const menuRef = useRef(null);


  const handleMouseEnter = (link) => setHoveredLink(link);
  const handleMouseLeave = () => setHoveredLink(null);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dropdownLinks = {
    home: [
      { name: "Home Page 01", path: "/home-01" },
      { name: "Home Page 02", path: "/home-02" },
    ],
    projects: [
      { name: "Project 01", path: "/project-01" },
      { name: "Project 02", path: "/project-02" },
    ],
  };

  return (
    <header className="relative z-50 bg-[#0e1b36] text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="logo z-20">
            <Link to="/">
              <img
                src="https://azim.commonsupport.com/Amortez/assets/images/logo-3.png"
                alt="Amortez Logo"
                className="h-8"
              />
            </Link>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="lg:hidden z-20">
            <button
              onClick={toggleMenu}
              className="focus:outline-none p-2 rounded-md hover:bg-[#1a2a4e] transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? "✖" : "☰"}
            </button>
          </div>

          {/* Navigation (Desktop) */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-8">
            <ul className="flex space-x-8">
              {/* Dropdown for Home */}
              <li
                onMouseEnter={() => handleMouseEnter("home")}
                onMouseLeave={handleMouseLeave}
                className="relative group"
              >
                <Link to="/" className="text-xl flex items-center">
                  Home
                  <span className="ml-1">▼</span>
                </Link>
                {hoveredLink === "home" && (
                  <ul className="absolute bg-white text-gray-800 shadow-lg mt-2 py-2 w-48 rounded z-10 transition-all duration-300">
                    {dropdownLinks.home.map((link, index) => (
                      <li key={index}>
                        <Link
                          to={link.path}
                          className="block px-4 py-2 hover:bg-gray-100 transition"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li>
                <Link to="/about" className="text-xl">
                  About
                </Link>
              </li>

              {/* Dropdown for Projects */}
              <li
                onMouseEnter={() => handleMouseEnter("projects")}
                onMouseLeave={handleMouseLeave}
                className="relative group"
              >
                <Link to="/projects" className="text-xl flex items-center">
                  Projects
                  <span className="ml-1">▼</span>
                </Link>
                {hoveredLink === "projects" && (
                  <ul className="absolute bg-white text-gray-800 shadow-lg mt-2 py-2 w-48 rounded z-10 transition-all duration-300">
                    {dropdownLinks.projects.map((link, index) => (
                      <li key={index}>
                        <Link
                          to={link.path}
                          className="block px-4 py-2 hover:bg-gray-100 transition"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li>
                <Link to="/elements" className="text-xl">
                  Elements
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-xl">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-xl">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center">
            <div className="rounded-full bg-[#29ac4a] p-3 mr-4">
              📞
            </div>
            <div>
              <div className="text-lg">Start a New Project</div>
              <div className="text-3xl font-bold">1800-222-155</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`lg:hidden absolute w-full bg-[#0e1b36] shadow-lg transition-all duration-300 ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <nav className="container mx-auto px-4 py-6">
          <ul className="space-y-4">
            <li className="border-b border-gray-700 pb-3">
              <div className="flex justify-between items-center">
                <Link to="/" className="text-xl font-medium">
                  Home
                </Link>
                <button onClick={() => setHoveredLink(hoveredLink === "home" ? null : "home")}>
                  {hoveredLink === "home" ? "▲" : "▼"}
                </button>
              </div>
              {hoveredLink === "home" && (
                <ul className="mt-3 pl-4 border-l-2 border-[#29ac4a]">
                  {dropdownLinks.home.map((link, index) => (
                    <li key={index}>
                      <Link to={link.path} className="block py-2">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link to="/about" className="text-xl">
                About
              </Link>
            </li>

            <li>
              <Link to="/projects" className="text-xl">
                Projects
              </Link>
            </li>

            <li>
              <Link to="/elements" className="text-xl">
                Elements
              </Link>
            </li>

            <li>
              <Link to="/blog" className="text-xl">
                Blog
              </Link>
            </li>

            <li>
              <Link to="/contact" className="text-xl">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
