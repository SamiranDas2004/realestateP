import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  const handleMouseEnter = (link) => setHoveredLink(link);
  const handleMouseLeave = () => setHoveredLink(null);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  },);

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

  // Function to close the menu and navigate
  const closeMenuAndNavigate = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="relative z-50 bg-[#0e1b36] text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="logo z-20">
            <Link to="/" onClick={closeMenuAndNavigate}>
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
              ref={menuButtonRef}
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
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <nav className="container mx-auto px-4 py-6">
          <ul className="space-y-4">
            <li className="border-b border-gray-700 pb-3">
              <div className="flex justify-between items-center">
                <Link
                  to="/"
                  className="text-xl font-medium"
                  onClick={closeMenuAndNavigate} // Close menu on click
                >
                  Home
                </Link>
                <button
                  onClick={() =>
                    setHoveredLink(hoveredLink === "home" ? null : "home")
                  }
                >
                  {hoveredLink === "home" ? "▲" : "▼"}
                </button>
              </div>
              {hoveredLink === "home" && (
                <ul className="mt-3 pl-4 border-l-2 border-[#29ac4a]">
                  {dropdownLinks.home.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.path}
                        className="block py-2"
                        onClick={closeMenuAndNavigate} // Close menu on click
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li className="border-b border-gray-700 pb-3">
              <Link
                to="/about"
                className="text-xl"
                onClick={closeMenuAndNavigate} // Close menu on click
              >
                About
              </Link>
            </li>

            <li className="border-b border-gray-700 pb-3">
              <div className="flex justify-between items-center">
                <Link
                  to="/projects"
                  className="text-xl font-medium"
                  onClick={closeMenuAndNavigate} // Close menu on click
                >
                  Projects
                </Link>
                <button
                  onClick={() =>
                    setHoveredLink(
                      hoveredLink === "projects" ? null : "projects"
                    )
                  }
                >
                  {hoveredLink === "projects" ? "▲" : "▼"}
                </button>
              </div>
              {hoveredLink === "projects" && (
                <ul className="mt-3 pl-4 border-l-2 border-[#29ac4a]">
                  {dropdownLinks.projects.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.path}
                        className="block py-2"
                        onClick={closeMenuAndNavigate} // Close menu on click
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li className="border-b border-gray-700 pb-3">
              <Link
                to="/elements"
                className="text-xl"
                onClick={closeMenuAndNavigate} // Close menu on click
              >
                Elements
              </Link>
            </li>

            <li className="border-b border-gray-700 pb-3">
              <Link
                to="/blog"
                className="text-xl"
                onClick={closeMenuAndNavigate} // Close menu on click
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="text-xl"
                onClick={closeMenuAndNavigate} // Close menu on click
              >
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