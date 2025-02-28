import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Info from './components/Info'
// import TopHeader from './components/TopHeader'
import HomePageCard from './components/HomePageCard'
import Readmore from './components/Readmore'
import FeaturedProjects from './components/FeaturedProjects'
import About from './components/About'
import SmarterAmenities from './components/SmarterAmenities'
import InteriorCarousel from './components/InteriorCarousel'
import AwardsSection from './components/Awards'
import Tour from './components/Tour'
import BlogPosts from './components/Blogpost'
import Footer from './components/Footer'


function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  
  // Function to handle scroll for scroll-to-top button and sticky header
  const handleScroll = () => {
    // For scroll-to-top button
    if (window.scrollY > 300) {
      setIsScrolled(true); // show the button when scrolled 300px
    } else {
      setIsScrolled(false); // hide the button when not scrolled
    }
    
    // For sticky header - make header sticky after scrolling past TopHeader
    if (window.scrollY > 40) { // Approximate height of TopHeader
      setIsHeaderSticky(true);
    } else {
      setIsHeaderSticky(false);
    }
  };
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Adding scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup the event listener
  }, []);
  
  return (
    <>
      <div className="relative">
        {/* <TopHeader /> */}
        <div className={`w-full z-40 ${isHeaderSticky ? 'fixed top-0 shadow-md bg-white' : ''}`}>
          <Header />
        </div>
        {/* Add padding when header becomes sticky to prevent content jump */}
        {isHeaderSticky && <div className="header-placeholder" style={{ height: '80px' }}></div>}
      </div>
      
      <HeroSection />
      <Info />
      <HomePageCard/>
      <Readmore/>
      {/* <FeaturedProjects/> */}
      <About/>
      <SmarterAmenities/>
      <InteriorCarousel/>
      <AwardsSection/>
      <Tour/>
      <BlogPosts/>
      <Footer/>
      {/* Scroll to top button */}
      {isScrolled && (
        <div className="fixed bottom-8 right-8 z-50">
          <button 
            className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center"
            onClick={scrollToTop}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5M12 5L5 12M12 5L19 12" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}

export default App;