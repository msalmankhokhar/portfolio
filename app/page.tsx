"use client"
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import { PERSONAL_DETAILS } from "@/data";
import { Copy, Mail, Send } from "lucide-react";
import { useState } from "react";

export default function Home() {

  const [copied, setCopied] = useState(false);

  const handleCopy = ()=>{
    navigator.clipboard.writeText(PERSONAL_DETAILS.email);
    setCopied(true)
  }
  
  return (
    <>
    <Navbar />
    <main className="maxContainer paddingContainer">
      <Hero />
      <Projects />
    </main>

    <section className="bg-secondary-1000 py-10 paddingContainer maxContainer">
      <h1 className="text-3xl max-w-[350px] text-white font-bold mb-4">Ready to take your digital presence to the next level?</h1>
      <div className="mb-5 flex gap-2 items-center justify-between max-w-xl bg-secondary-900 border border-secondary-800 py-2.5 px-3 rounded-lg text-white">
        <div className="flex gap-2 items-center">
          <Mail size={16} color="white" />
          <p>{PERSONAL_DETAILS.email}</p>
        </div>
        {/* Copy Button */}
        <Button onClick={handleCopy} className={copied ? 'text-green-600' : undefined} variant="btn-primary-white">
          {
            copied ? 'Copied' : <Copy size={16} />
          }
        </Button>
      </div>
      <Button href={`mailto:${PERSONAL_DETAILS.email}`} icon={<Send size={16} />} variant="btn-primary">Contact Me Now</Button>
    </section>

    <Footer />
    </>
  );
}
