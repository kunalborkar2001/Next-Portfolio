"use client"

import Navbar from '../components/Navbar'
import HeroSection from "../components/HeroSection"
import HomeTabs from "../components/HomeTabs"
import CardHoverEffectSkills from "../components/AboutMe"

export default function Home() {

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CardHoverEffectSkills />
        <HomeTabs />
      </main>
    </>
  );
}
