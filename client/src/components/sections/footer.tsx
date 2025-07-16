import { FaLinkedin, FaTwitter, FaEnvelope, FaBlog } from "react-icons/fa";

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const linkCategories = {
    "About me": [
      { href: "#about", label: "About Me" },
      { href: "#education", label: "Education" },
    ],
    "Career": [
      { href: "#timeline", label: "Professional Timeline" },
      { href: "#writing", label: "Projects" },
      { href: "#experience", label: "Experience & Skills" },
    ],
    "Interests": [
      { href: "#global-experience", label: "Global Experience and Languages" },
      { href: "#interests", label: "Personal Interests" },
    ],
    "Contact me": [
      { href: "#contact", label: "Let's Connect" },
    ],
  };

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-6 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Luisa Muniz</h3>
            <p className="text-slate-400">
              Aspiring Chief of Staff/Project Manager <br />
              Transforming vision into reality through strategic execution.
            </p>
          </div>
          
          {Object.entries(linkCategories).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold mb-4 text-slate-300">{category}</h4>
              <div className="space-y-2">
                {links.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-slate-400 hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <FaEnvelope className="w-6 h-6" />
              </a>
              <a href="https://substack.com/@icecreamforlunch" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <FaBlog className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Simplified Navigation Bar */}
        <div className="border-t border-slate-700 mt-8 pt-6">
          <div className="flex flex-wrap justify-center gap-8 mb-6">
            {["About me", "Career", "Interests", "Contact me"].map((category) => (
              <button
                key={category}
                onClick={() => {
                  // Find the first section in this category and scroll to it
                  const firstSection = linkCategories[category]?.[0];
                  if (firstSection) {
                    scrollToSection(firstSection.href);
                  }
                }}
                className="text-slate-400 hover:text-white transition-colors font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-6 pt-6 text-center text-slate-400">
          <p>&copy; 2025 Luisa Muniz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
