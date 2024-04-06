"use client"

import Navbar from '../components/Navbar'
import HeroSection from "../components/HeroSection"
import CardHoverEffectSkills from "../components/AboutMe"
import Footer from "../components/Footer"
import { useMyContext } from './context/MyContext.js'
import { useEffect, useState } from 'react'


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
        <CardHoverEffectSkills />
        <Footer />
      </main>

      {/* <div className='absolute top-3 left-3'>
        <div className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Views &nbsp; <span className='text-[green]'>{2}</span>
          </span>
        </div>
      </div> */}
    </div>
  );
}
