"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import EmailSection from "@/components/sections/EmailSection";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

export default function Home() {
  
  return (
    <>
    <Navbar />
    <main className="maxContainer paddingContainer">
      <Hero />
      <Projects />
    </main>

    <EmailSection />
    <Footer />
    </>
  );
}
