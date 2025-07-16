export default function GlobalExperience() {
  const languages = [
    { name: "English", level: "Native/Fluent", countries: ["Canada", "United States"], flags: ["🇨🇦", "🇺🇸"] },
    { name: "Portuguese", level: "Native/Fluent", countries: ["Brazil", "Portugal"], flags: ["🇧🇷", "🇵🇹"] },
    { name: "Spanish", level: "Native/Fluent", countries: ["Chile", "Latin America"], flags: ["🇨🇱", "🇪🇸"] },
    { name: "Italian", level: "Conversational", countries: ["Italy", "Europe"], flags: ["🇮🇹"] }
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
        <div className="mb-16 bg-blue-50 rounded-xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <p className="text-slate-600">Countries Lived/Worked</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
              <p className="text-slate-600">Languages Spoken</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
              <p className="text-slate-600">Continents Experience</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <p className="text-slate-600">Years International</p>
            </div>
          </div>
        </div>

        {/* Languages Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Languages I Speak</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {languages.map((language, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-blue-200"
              >
                <div className="flex justify-center items-center mb-4 animate-bounce">
                  {language.flags.map((flag, flagIndex) => (
                    <span 
                      key={flagIndex}
                      className="text-5xl mx-1 hover:scale-110 transition-transform duration-200"
                    >
                      {flag}
                    </span>
                  ))}
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">
                  {language.name}
                </h4>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-3 inline-block">
                  {language.level}
                </div>
                <div className="space-y-1">
                  {language.countries.map((country, countryIndex) => (
                    <span 
                      key={countryIndex}
                      className="inline-block text-xs text-slate-600 px-3 py-1 bg-white rounded-full mr-1 shadow-sm border border-slate-200"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}