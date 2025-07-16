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
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Languages I Speak 🗣️</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {languages.map((language, index) => (
              <div 
                key={index}
                className="bg-white rounded-full px-6 py-4 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 border-2 border-blue-100 hover:border-blue-300"
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