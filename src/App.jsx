import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../src/components/Subcomponents/Home";
import Project from './components/Subcomponents/Project';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
      if (window.scrollY > 300) {
          setIsScrolled(true);
      } else {
          setIsScrolled(false);
      }
  };

  const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Project />} />
            </Routes>
            {isScrolled && (
                <div className="fixed bottom-8 right-8 z-50">
                    <div
                        className={`scroll-to-top relative w-16 h-16 transition-all duration-500 ease-in-out ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        onClick={scrollToTop}
                    >
                        {/* Outer Circle */}
                        <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gray-200 outer-circle"></div>

                        {/* Inner Circle (Blue) */}
                        <div className="absolute top-2 left-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-full bg-blue-500 flex items-center justify-center">
                            {/* Arrow Icon */}
                            <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            )}
            <style>
                {`
                @keyframes expand {
                    0% {
                        transform: scale(1);
                        opacity: 0.7;
                    }
                    100% {
                        transform: scale(1.2);
                        opacity: 0;
                    }
                }

                .outer-circle {
                    animation: expand 2s linear infinite; /* Increased duration */
                }
                `}
            </style>
        </>
    );
}

export default App;