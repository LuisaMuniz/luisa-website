import { Button } from "@/components/ui/button";
import heroBackground from "@assets/hero-background-new.jpg";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center parallax-bg"
      style={{
        backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.8), rgba(30, 41, 59, 0.8)), 
                         url(${heroBackground})`
      }}
    >
      <div className="text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-white">
          Luisa Muniz
        </h1>
        <div className="mb-8 animate-fade-in-delay">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-300 mb-4 tracking-wide">
            Aspiring Chief of Staff/Project Manager
          </h2>
          <p className="text-xl md:text-2xl font-light text-blue-100">
            Transforming vision into reality through strategic execution.
          </p>
        </div>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90 animate-fade-in-delay-long">
          Looking to change industries to a dynamic environment. Expert in workflow management, scheduling, and resource allocation. Love taking on new challenges and will do what it takes to get the job done. I am curious, reliable and proactive. If you need someone like me on your team, let's chat!
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-delay-long">
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-semibold transition-all transform hover:scale-105 shadow-lg"
            onClick={() => scrollToSection("#contact")}
          >
            Let's Connect
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-blue-400 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 font-semibold transition-all transform hover:scale-105"
            onClick={() => scrollToSection("#writing")}
          >
            View Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
