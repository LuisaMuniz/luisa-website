import worldMapSvg from "@/assets/world-map.svg";

export default function GlobalExperience() {
  const languages = [
    { name: "English", level: "Native/Fluent", countries: ["Canada", "UK"] },
    { name: "Portuguese", level: "Native/Fluent", countries: ["Brazil", "Portugal"] },
    { name: "Spanish", level: "Conversational", countries: ["Chile", "Latin America"] },
    { name: "Italian", level: "Conversational", countries: ["Italy", "Europe"] }
  ];

  return (
    <section id="global-experience" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Global Experience
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            International perspective with multilingual capabilities and cross-cultural experience 
            spanning four continents and five countries.
          </p>
        </div>

        {/* World Map */}
        <div className="mb-16">
          <div className="bg-slate-50 rounded-xl p-8 shadow-lg">
            <img 
              src={worldMapSvg} 
              alt="World map highlighting countries of experience"
              className="w-full h-auto max-w-5xl mx-auto"
            />
          </div>
        </div>

        {/* Languages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {languages.map((language, index) => (
            <div 
              key={index}
              className="bg-slate-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">
                  {language.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {language.name}
              </h3>
              <p className="text-blue-600 font-medium mb-3">
                {language.level}
              </p>
              <div className="space-y-1">
                {language.countries.map((country, countryIndex) => (
                  <span 
                    key={countryIndex}
                    className="inline-block text-sm text-slate-600 px-2 py-1 bg-white rounded-full mr-1"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
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
          </div>
        </div>
      </div>
    </section>
  );
}