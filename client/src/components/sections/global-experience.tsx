export default function GlobalExperience() {
  const languages = [
    { name: "English", level: "Native/Fluent", countries: ["Canada", "UK"] },
    { name: "Portuguese", level: "Native/Fluent", countries: ["Brazil", "Portugal"] },
    { name: "Spanish", level: "Conversational", countries: ["Chile", "Latin America"] },
    { name: "Italian", level: "Conversational", countries: ["Italy", "Europe"] }
  ];

  const globalExperience = [
    {
      country: "Canada",
      flag: "🇨🇦",
      description: "Native English speaker with Canadian work experience and cultural understanding",
      languages: ["English"]
    },
    {
      country: "United Kingdom",
      flag: "🇬🇧",
      description: "Cross-cultural communication and entertainment industry project management",
      languages: ["English"]
    },
    {
      country: "Brazil",
      flag: "🇧🇷",
      description: "Native Portuguese speaker with deep local market knowledge and cultural insights",
      languages: ["Portuguese"]
    },
    {
      country: "Portugal",
      flag: "🇵🇹",
      description: "European market experience with Portuguese language fluency",
      languages: ["Portuguese"]
    },
    {
      country: "Chile",
      flag: "🇨🇱",
      description: "Latin American market understanding and Spanish communication skills",
      languages: ["Spanish"]
    }
  ];

  return (
    <section id="global-experience" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Global Experience & Languages
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            International perspective with multilingual capabilities and cross-cultural experience 
            spanning four continents and five countries, bringing valuable global insights to leadership roles.
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
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Language Proficiency</h3>
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
                <h4 className="text-xl font-semibold text-slate-800 mb-2">
                  {language.name}
                </h4>
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
        </div>

        {/* Global Experience Section */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">International Experience</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {globalExperience.map((experience, index) => (
              <div 
                key={index}
                className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{experience.flag}</span>
                  <h4 className="text-xl font-semibold text-slate-800">{experience.country}</h4>
                </div>
                <p className="text-slate-600 mb-4">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.languages.map((lang, langIndex) => (
                    <span 
                      key={langIndex}
                      className="inline-block text-sm text-blue-600 px-2 py-1 bg-blue-100 rounded-full"
                    >
                      {lang}
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