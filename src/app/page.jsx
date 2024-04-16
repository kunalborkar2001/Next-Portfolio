"use client"

import Navbar from '../components/Navbar'
import HeroSection from "../components/HeroSection"
import CardHoverEffectSkills from "../components/AboutMe"
import Footer from "../components/Footer"
import { useMyContext } from './context/MyContext.js'
import { useEffect, useState } from 'react'
import SkillsSection from '@/components/SkillsSection'

export default function Home() {

  const projects = useMyContext(); // Access projects data from context
  const [projectsData, setProjectsData] = useState(null);
  const [topTen, setTopTen] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const meCheck = localStorage.getItem("itsMe");
      // Your code that uses meCheck here
    }
  }, []);

  useEffect(() => {
    if (projects !== null) {
      setProjectsData(projects.data); // Update projectsData state with projects from context
    }
  }, [projects]); // Re-run the effect whenever projects changes



  useEffect(() => {
    if (projectsData !== null) {
      const slicedProjects = projectsData.slice(0, 10);
      setTopTen(slicedProjects); // Update topThree state with sliced projects
    }
  }, [projectsData]);







  return (
    <div className='w-full relative'>
      <main>
        <HeroSection topTen={topTen} />
        <SkillsSection />
        <CardHoverEffectSkills />
        <Footer />
      </main>

    </div>
  );
}
