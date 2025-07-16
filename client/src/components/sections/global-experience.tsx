export default function GlobalExperience() {
  const languages = [
    { name: "English", level: "Native/Fluent", countries: ["Canada", "United States"], flags: ["🇨🇦"], color: "border-red-300 hover:border-red-500" },
    { name: "Portuguese", level: "Native/Fluent", countries: ["Brazil", "Portugal"], flags: ["🇧🇷", "🇵🇹"], color: "border-blue-300 hover:border-blue-500" },
    { name: "Spanish", level: "Native/Fluent", countries: ["Chile", "Latin America"], flags: ["🇨🇱"], color: "border-yellow-300 hover:border-yellow-500" },
    { name: "Italian", level: "Conversational", countries: ["Italy", "Europe"], flags: ["🇮🇹"], color: "border-green-300 hover:border-green-500" }
  ];



  return (
    <section id="global-experience" className="pt-6 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Global Experience & Languages
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            I bring international perspective to anything I do. I am fluent in multiple languages which helps me create a cross-cultural environment. My experience spans 
            four continents and five countries, bringing valuable global insights to any roles.
          </p>
        </div>

        {/* Experience Summary */}
        <div className="mb-12 bg-slate-50 rounded-xl p-6">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-sm">
              <span className="text-2xl">🗺️</span>
              <div>
                <div className="text-xl font-bold text-blue-600">5+</div>
                <div className="text-xs text-slate-600">Countries</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-sm">
              <span className="text-2xl">💬</span>
              <div>
                <div className="text-xl font-bold text-blue-600">4</div>
                <div className="text-xs text-slate-600">Languages</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-sm">
              <span className="text-2xl">🌍</span>
              <div>
                <div className="text-xl font-bold text-blue-600">3</div>
                <div className="text-xs text-slate-600">Continents</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-sm">
              <span className="text-2xl">⏰</span>
              <div>
                <div className="text-xl font-bold text-blue-600">10+</div>
                <div className="text-xs text-slate-600">Years</div>
              </div>
            </div>
          </div>
        </div>

        {/* Languages Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Languages</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {languages.map((language, index) => (
              <div 
                key={index}
                className={`bg-white rounded-full px-6 py-4 shadow-lg border-2 ${language.color.replace('hover:border-', 'border-')}`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {language.flags.map((flag, flagIndex) => (
                      <span 
                        key={flagIndex}
                        className="text-2xl"
                      >
                        {flag}
                      </span>
                    ))}
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-slate-800 text-sm">{language.name}</div>
                    <div className="text-xs text-blue-600">{language.level}</div>
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