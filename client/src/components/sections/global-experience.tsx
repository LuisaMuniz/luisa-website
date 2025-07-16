export default function GlobalExperience() {
  const languages = [
    { name: "English", level: "Native", emoji: "🇨🇦🇺🇸", color: "bg-blue-100 text-blue-800" },
    { name: "Portuguese", level: "Native", emoji: "🇧🇷🇵🇹", color: "bg-slate-100 text-slate-800" },
    { name: "Spanish", level: "Native", emoji: "🇨🇱🇪🇸", color: "bg-amber-100 text-amber-800" },
    { name: "Italian", level: "Conversational", emoji: "🇮🇹", color: "bg-gray-100 text-gray-800" }
  ];



  return (
    <section id="global-experience" className="pt-6 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            Global Experience & Languages
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Bringing international perspective through multilingual communication across four continents 🌍
          </p>
        </div>

        {/* Quick Stats */}
        <div className="mb-12 bg-slate-50 rounded-xl p-6">
          <div className="flex flex-wrap justify-center gap-6 text-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🗺️</span>
              <span className="text-lg font-semibold text-slate-700">5+ Countries</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🗣️</span>
              <span className="text-lg font-semibold text-slate-700">4 Languages</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌍</span>
              <span className="text-lg font-semibold text-slate-700">3 Continents</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⏰</span>
              <span className="text-lg font-semibold text-slate-700">10+ Years</span>
            </div>
          </div>
        </div>

        {/* Languages Section */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Languages I Speak 💬</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {languages.map((language, index) => (
              <div 
                key={index}
                className={`${language.color} rounded-full px-6 py-3 text-center transform hover:scale-105 transition-transform duration-200 cursor-pointer`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{language.emoji}</span>
                  <div>
                    <div className="font-semibold text-sm">{language.name}</div>
                    <div className="text-xs opacity-75">{language.level}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}