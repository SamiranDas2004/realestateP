import React from 'react'
import ProjectCards from "../Projects/ProjectCard";
import LearnMore from "../Projects/LearnMore";
import Stats from '../Projects/Stats';
import Award from '../Projects/Award';
import ViewServices from '../Projects/ViewServices';
import OurTeam from '../Projects/OurTeam';
import BlogPosts from '../Projects/Testimonials';
import Banner from '../Projects/HeroSection';
import Reviews from '../Projects/Reviews';

function Project() {
  return (
    <>
    <Banner/>
        <ProjectCards/>
        <LearnMore/>
        <Stats/>
        <Award/>
        <Reviews/>
        <ViewServices/>
        <OurTeam/>
     <BlogPosts/>
    </>
  )
}

export default Project