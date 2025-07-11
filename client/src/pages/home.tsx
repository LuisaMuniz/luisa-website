import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Writing from "@/components/sections/portfolio";
import Interests from "@/components/sections/interests";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-700">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Writing />
      <Interests />
      <Contact />
      <Footer />
    </div>
  );
}
