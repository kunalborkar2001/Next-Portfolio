"use client"

import Navbar from '../components/Navbar'
import HeroSection from "../components/HeroSection"
import HomeTabs from "../components/HomeTabs"

export default function Home() {

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <HomeTabs />
      </main>
    </>
  );
}
