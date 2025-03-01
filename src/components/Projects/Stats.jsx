import React, { useState, useEffect, useRef } from 'react';

function Stats() {
  // State for counters
  const [floorCount, setFloorCount] = useState(0);
  const [apartmentCount, setApartmentCount] = useState(0);
  const [constructionCount, setConstructionCount] = useState(0);
  const [amenitiesCount, setAmenitiesCount] = useState(0);
  
  // State for progress bars
  const [ideaProgress, setIdeaProgress] = useState(0);
  const [constructionProgress, setConstructionProgress] = useState(0);
  const [planningProgress, setPlanningProgress] = useState(0);
  
  // Set target values
  const floorTarget = 137;
  const apartmentTarget = 95;
  const constructionTarget = 256;
  const amenitiesTarget = 140;
  
  const ideaTarget = 80;
  const constructionTarget2 = 98;
  const planningTarget = 72;
  
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Check if element is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);
  
  // Animate counters
  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000; // 2 seconds for the animation
    const framesPerSecond = 60;
    const totalFrames = duration / 1000 * framesPerSecond;
    
    let frame = 0;
    
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      // Update counters
      setFloorCount(Math.min(Math.floor(floorTarget * progress), floorTarget));
      setApartmentCount(Math.min(Math.floor(apartmentTarget * progress), apartmentTarget));
      setConstructionCount(Math.min(Math.floor(constructionTarget * progress), constructionTarget));
      setAmenitiesCount(Math.min(Math.floor(amenitiesTarget * progress), amenitiesTarget));
      
      // Update progress bars
      setIdeaProgress(Math.min(Math.floor(ideaTarget * progress), ideaTarget));
      setConstructionProgress(Math.min(Math.floor(constructionTarget2 * progress), constructionTarget2));
      setPlanningProgress(Math.min(Math.floor(planningTarget * progress), planningTarget));
      
      if (frame >= totalFrames) {
        clearInterval(timer);
      }
    }, 1000 / framesPerSecond);
    
    return () => clearInterval(timer);
  }, [isVisible]);
  
  // Amenities data
  const amenities = [
    { id: 1, icon: "washer", title: "Dryer & Washer" },
    { id: 2, icon: "bathroom", title: "En-Suite Bathroom" },
    { id: 3, icon: "bed", title: "King Size Beds" },
    { id: 4, icon: "package", title: "Package Services" },
    { id: 5, icon: "golf", title: "Sports & Golf Hall" },
    { id: 6, icon: "library", title: "Grand Library" },
  ];
  
  return (
    <div 
      ref={sectionRef}
      className="relative bg-[#0a0a0e] text-white py-16"
      style={{
        backgroundImage: "url('https://azim.commonsupport.com/Amortez/assets/images/background/skills-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay"
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Amenities Info */}
          <div>
            {/* Logo */}
            <div className="mb-6">
              <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0L0 20H20L10 0Z" fill="#E6A800" />
                <path d="M30 0L20 20H40L30 0Z" fill="#E6A800" />
              </svg>
            </div>
            
            {/* Heading */}
            <h2 className="text-4xl font-bold mb-6">Enjoyable Amenities</h2>
            
            {/* Description */}
            <p className="text-gray-300 mb-12">
              Boluptate velit cillum dolore fugiat nulla pariatur. Excepteur
              anim idet laborum. Sed ut perspiciatis und omnis iste natus sit
              holuplatem accusantium sed laudantium.
            </p>
            
            {/* Progress Bars */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Innovative Ideas</span>
                  <span>{ideaProgress}%</span>
                </div>
                <div className="h-3 w-full bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-yellow-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${ideaProgress}%` }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Construction</span>
                  <span>{constructionProgress}%</span>
                </div>
                <div className="h-3 w-full bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${constructionProgress}%` }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Interior Planning</span>
                  <span>{planningProgress}%</span>
                </div>
                <div className="h-3 w-full bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-yellow-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${planningProgress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Amenities Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {amenities.map((item) => (
              <div key={item.id} className="bg-white rounded-md p-6 text-center text-gray-800">
                <div className="flex justify-center mb-4">
                  {item.icon === "washer" && (
                    <svg className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                      <circle cx="12" cy="12" r="1" fill="currentColor" />
                      <circle cx="7" cy="7" r="1" fill="currentColor" />
                    </svg>
                  )}
                  {item.icon === "bathroom" && (
                    <svg className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 12H20V16C20 18.2091 18.2091 20 16 20H8C5.79086 20 4 18.2091 4 16V12Z" stroke="currentColor" strokeWidth="2" />
                      <path d="M4 12V6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6V12" stroke="currentColor" strokeWidth="2" />
                      <path d="M6 20V22" stroke="currentColor" strokeWidth="2" />
                      <path d="M18 20V22" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {item.icon === "bed" && (
                    <svg className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 12H21V19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19V12Z" stroke="currentColor" strokeWidth="2" />
                      <path d="M3 8V12H21V8C21 7.44772 20.5523 7 20 7H4C3.44772 7 3 7.44772 3 8Z" stroke="currentColor" strokeWidth="2" />
                      <path d="M5 7V5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V7" stroke="currentColor" strokeWidth="2" />
                      <path d="M5 20V22" stroke="currentColor" strokeWidth="2" />
                      <path d="M19 20V22" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {item.icon === "package" && (
                    <svg className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 7.8C4 7.51997 4 7.37996 4.0545 7.27174C4.10243 7.17616 4.17616 7.10243 4.27174 7.0545C4.37996 7 4.51997 7 4.8 7H19.2C19.48 7 19.62 7 19.7283 7.0545C19.8238 7.10243 19.8976 7.17616 19.9455 7.27174C20 7.37996 20 7.51997 20 7.8V20.2C20 20.48 20 20.62 19.9455 20.7283C19.8976 20.8238 19.8238 20.8976 19.7283 20.9455C19.62 21 19.48 21 19.2 21H4.8C4.51997 21 4.37996 21 4.27174 20.9455C4.17616 20.8976 4.10243 20.8238 4.0545 20.7283C4 20.62 4 20.48 4 20.2V7.8Z" stroke="currentColor" strokeWidth="2" />
                      <path d="M8 7V3.5C8 3.22386 8.22386 3 8.5 3H15.5C15.7761 3 16 3.22386 16 3.5V7" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {item.icon === "golf" && (
                    <svg className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 14V21" stroke="currentColor" strokeWidth="2" />
                      <path d="M5 21H19" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 9C12 7.66667 10.5 5 7.5 3C4.5 5 3 7.66667 3 9C3 10.3333 4 13 7.5 13C11 13 12 10.3333 12 9Z" stroke="currentColor" strokeWidth="2" />
                      <circle cx="17" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {item.icon === "library" && (
                    <svg className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 19V5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19Z" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 4V20" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 12H20" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                </div>
                <h3 className="font-medium text-sm">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
        
        {/* Stats Counter Section */}
        <div className="border-t border-gray-700 mt-16 pt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center">
              <div className="mr-4">
                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="10" width="18" height="11" stroke="currentColor" strokeWidth="2" />
                  <path d="M6 10V4C6 3.44772 6.44772 3 7 3H17C17.5523 3 18 3.44772 18 4V10" stroke="currentColor" strokeWidth="2" />
                  <path d="M10 7H14" stroke="currentColor" strokeWidth="2" />
                  <path d="M10 14H14" stroke="currentColor" strokeWidth="2" />
                  <path d="M10 17H14" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <div>
                <div className="text-4xl font-bold">{floorCount}</div>
                <div className="text-sm text-gray-300">Floor & Units</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="mr-4">
                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 21H21" stroke="currentColor" strokeWidth="2" />
                  <path d="M5 21V7L12 3L19 7V21" stroke="currentColor" strokeWidth="2" />
                  <rect x="9" y="13" width="6" height="8" stroke="currentColor" strokeWidth="2" />
                  <path d="M9 8H15" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <div>
                <div className="text-4xl font-bold">{apartmentCount}+</div>
                <div className="text-sm text-gray-300">Apartments Sold</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="mr-4">
                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
                  <path d="M11 14H7C4.79086 14 3 15.7909 3 18V21H15V18C15 15.7909 13.2091 14 11 14Z" stroke="currentColor" strokeWidth="2" />
                  <path d="M19 8L17 10L15 8" stroke="currentColor" strokeWidth="2" />
                  <path d="M17 4V10" stroke="currentColor" strokeWidth="2" />
                  <path d="M17 17H19C20.1046 17 21 16.1046 21 15V10" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <div>
                <div className="text-4xl font-bold">{constructionCount}</div>
                <div className="text-sm text-gray-300">Total Constructions</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="mr-4">
                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 12V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V12" stroke="currentColor" strokeWidth="2" />
                  <path d="M21 8H16.2C16.0895 8 16 7.91055 16 7.8V3C16 2.44772 15.5523 2 15 2H9C8.44772 2 8 2.44772 8 3V7.8C8 7.91055 7.91055 8 7.8 8H3C2.44772 8 2 8.44772 2 9V11C2 11.5523 2.44772 12 3 12H21C21.5523 12 22 11.5523 22 11V9C22 8.44772 21.5523 8 21 8Z" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <div>
                <div className="text-4xl font-bold">{amenitiesCount}+</div>
                <div className="text-sm text-gray-300">Our Amenities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;