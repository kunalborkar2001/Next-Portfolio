"use client"

import Navbar from '../components/Navbar'
import HeroSection from "../components/HeroSection"
import HomeTabs from "../components/HomeTabs"
import CardHoverEffectSkills from "../components/CardHoverEffectSkills"

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
