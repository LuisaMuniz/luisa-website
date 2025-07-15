export default function GlobalExperience() {
  const languages = [
    { name: "English", level: "Native/Fluent", countries: ["Canada", "United States"], flags: ["🇨🇦", "🇺🇸"] },
    { name: "Portuguese", level: "Native/Fluent", countries: ["Brazil", "Portugal"], flags: ["🇧🇷", "🇵🇹"] },
    { name: "Spanish", level: "Native/Fluent", countries: ["Chile", "Latin America"], flags: ["🇨🇱", "🇪🇸"] },
    { name: "Italian", level: "Conversational", countries: ["Italy", "Europe"], flags: ["🇮🇹"] }
  ];

  const globalExperience = [
    {
      region: "North America",
      countries: ["Canada", "United States"],
      flag: "🇨🇦",
      description: "Production coordination for major entertainment studios with cross-cultural team management",
      experience: "Disney animation projects, studio operations, international collaboration"
    },
    {
      region: "South America",
      countries: ["Brazil", "Chile"],
      flag: "🇧🇷",
      description: "Cultural consulting and localization projects with deep regional market knowledge",
      experience: "Portuguese/Spanish market expertise, regional content adaptation"
    },
    {
      region: "Europe",
      countries: ["United Kingdom", "Italy"],
      flag: "🇬🇧",
      description: "International co-production partnerships with European market insights",
      experience: "Multi-language project coordination, European entertainment industry"
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
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Language Proficiency</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {languages.map((language, index) => (
              <div 
                key={index}
                className="bg-slate-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center items-center mb-4">
                  {language.flags.map((flag, flagIndex) => (
                    <span 
                      key={flagIndex}
                      className="text-4xl mx-1"
                    >
                      {flag}
                    </span>
                  ))}
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