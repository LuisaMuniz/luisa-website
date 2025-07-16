import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navItems = [
  { href: "#about", label: "About Me", category: "About me" },
  { href: "#education", label: "Education", category: "About Me" },
  { href: "#timeline", label: "Professional Timeline", category: "Career" },
  { href: "#writing", label: "Projects", category: "Career" },
  { href: "#experience", label: "Experience & Skills", category: "Career" },
  { href: "#global-experience", label: "Global Experience and Languages", category: "Interests" },
  { href: "#interests", label: "Personal Interests", category: "Interests" },
  { href: "#contact", label: "Let's Connect", category: "Contact me" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.querySelector(item.href));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].href.substring(1));
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl text-slate-800">Luisa Muniz</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["About me", "Career", "Interests", "Contact me"].map((category) => (
              <div key={category} className="relative group">
                <button className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
                  {category}
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    {navItems.filter(item => item.category === category).map((item) => (
                      <button
                        key={item.href}
                        onClick={() => scrollToSection(item.href)}
                        className={`block w-full text-left px-4 py-2 transition-colors ${
                          activeSection === item.href.substring(1)
                            ? "text-blue-600 bg-blue-50"
                            : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-6 mt-8">
                  {["About me", "Career", "Interests", "Contact me"].map((category) => (
                    <div key={category}>
                      <h3 className="text-lg font-semibold text-slate-700 mb-3">{category}</h3>
                      <div className="space-y-2 ml-4">
                        {navItems.filter(item => item.category === category).map((item) => (
                          <button
                            key={item.href}
                            onClick={() => scrollToSection(item.href)}
                            className={`block w-full text-left px-4 py-2 transition-colors ${
                              activeSection === item.href.substring(1)
                                ? "text-blue-600"
                                : "text-slate-600 hover:text-blue-600"
                            }`}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
