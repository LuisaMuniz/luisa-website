import { Button } from "@/components/ui/button";

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
                         url('https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')`
      }}
    >
      <div className="text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Sarah Mitchell
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light animate-fade-in-delay">
          Project Manager & Aspiring Chief of Staff
        </p>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90 animate-fade-in-delay-long">
          Transforming complex challenges into streamlined success through strategic planning, 
          innovative problem-solving, and exceptional leadership.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-delay-long">
          <Button 
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 font-semibold transition-all transform hover:scale-105"
            onClick={() => scrollToSection("#contact")}
          >
            Let's Connect
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-3 font-semibold transition-all"
            onClick={() => scrollToSection("#portfolio")}
          >
            View My Work
          </Button>
        </div>
      </div>
    </section>
  );
}
