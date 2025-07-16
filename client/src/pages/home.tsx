import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Education from "@/components/sections/education";
import Experience from "@/components/sections/experience";
import Timeline from "@/components/sections/timeline";
import Writing from "@/components/sections/portfolio";
import GlobalExperience from "@/components/sections/global-experience";
import Interests from "@/components/sections/interests";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-700">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Timeline />
      <Writing />
      <GlobalExperience />
      <Interests />
      <Contact />
      <Footer />
    </div>
  );
}
