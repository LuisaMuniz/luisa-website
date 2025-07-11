export default function GlobalExperience() {
  const globalExperience = [
    {
      region: "North America",
      countries: ["Canada", "United States"],
      flag: "🇨🇦",
      description: "Production coordination for major entertainment studios with cross-cultural team management",
      experience: "Disney animation projects, studio operations, international collaboration",
      languages: [
        { name: "English", level: "Native/Fluent", flags: ["🇨🇦", "🇺🇸"] }
      ]
    },
    {
      region: "South America",
      countries: ["Brazil", "Chile"],
      flag: "🇧🇷",
      description: "Cultural consulting and localization projects with deep regional market knowledge",
      experience: "Portuguese/Spanish market expertise, regional content adaptation",
      languages: [
        { name: "Portuguese", level: "Native/Fluent", flags: ["🇧🇷"] },
        { name: "Spanish", level: "Native/Fluent", flags: ["🇨🇱"] }
      ]
    },
    {
      region: "Europe",
      countries: ["United Kingdom", "Italy"],
      flag: "🇬🇧",
      description: "International co-production partnerships with European market insights",
      experience: "Multi-language project coordination, European entertainment industry",
      languages: [
        { name: "Italian", level: "Conversational", flags: ["🇮🇹"] }
      ]
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

        {/* Combined Global Experience & Languages Section */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Regional Experience & Language Skills</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {globalExperience.map((region, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-600"
              >
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{region.flag}</span>
                  <h4 className="text-2xl font-bold text-slate-800">{region.region}</h4>
                </div>
                
                <div className="mb-4">
                  <h5 className="font-semibold text-slate-700 mb-2">Countries:</h5>
                  <p className="text-slate-600">{region.countries.join(", ")}</p>
                </div>
                
                <div className="mb-4">
                  <h5 className="font-semibold text-slate-700 mb-2">Experience:</h5>
                  <p className="text-slate-600 mb-2">{region.description}</p>
                  <p className="text-sm text-slate-500">{region.experience}</p>
                </div>

                {/* Language Skills for this Region */}
                <div className="border-t border-slate-200 pt-4">
                  <h5 className="font-semibold text-slate-700 mb-3">Language Skills:</h5>
                  <div className="space-y-3">
                    {region.languages.map((language, langIndex) => (
                      <div key={langIndex} className="flex items-center justify-between bg-slate-50 rounded-lg p-3">
                        <div className="flex items-center">
                          {language.flags.map((flag, flagIndex) => (
                            <span key={flagIndex} className="text-2xl mr-2">{flag}</span>
                          ))}
                          <span className="font-medium text-slate-800">{language.name}</span>
                        </div>
                        <span className="text-sm text-blue-600 font-medium">{language.level}</span>
                      </div>
                    ))}
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