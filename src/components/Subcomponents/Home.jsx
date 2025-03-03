import { useState, useEffect } from 'react'
import '../../App.css'
import Header from '../GlobalComponents/Header'
import HeroSection from '../HomePage/HeroSection'
import Info from '../HomePage/Info'
// import TopHeader from './components/TopHeader'
import HomePageCard from '../HomePage/HomePageCard'
import Readmore from '../HomePage/Readmore'
// import InteriorCarousel from '../HomePage/FeaturedProjects'
import About from '../HomePage/About'
import SmarterAmenities from '../HomePage/SmarterAmenities'
import InteriorCarousel from '../HomePage/InteriorCarousel'
import AwardsSection from '../HomePage/Awards'
import Tour from '../HomePage/Tour'
import BlogPosts from '../HomePage/Blogpost'
import Footer from '../GlobalComponents/Footer'


function Home() {
 
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  
 
  
  return (
    <>
      <div className="relative">
        {/* <TopHeader /> */}
       
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
    
   
    </>
  );
}

export default Home;