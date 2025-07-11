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
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-white">
          Luisa Muniz
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light animate-fade-in-delay text-blue-100">
          Production Coordinator & Aspiring Chief of Staff
        </p>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90 animate-fade-in-delay-long">
          Experienced Production Coordinator skilled in scheduling, budgeting, day-to-day management,
          staffing and high-level planning. Versatile in different areas of the entertainment industry with a
          particular focus on the development and application of new technologies.
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
