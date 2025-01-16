import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import { Mail, Send } from "lucide-react";

export default function Home() {
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
          <p>msalmankhokhar13@gmail.com</p>
        </div>
        {/* Copy Button */}
        {/* <Button variant="btn-primary-white" icon={<Copy size={16} />}>Copy</Button> */}
      </div>
      <Button href={`mailto:msalmankhokhar13@gmail.com`} icon={<Send size={16} />} variant="btn-primary">Contact Me Now</Button>
    </section>

    <Footer />
    </>
  );
}
