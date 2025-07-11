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
            <svg width="100%" height="400" viewBox="0 0 1200 600" className="max-w-5xl mx-auto">
              {/* Background */}
              <rect width="1200" height="600" fill="#f8fafc"/>
              
              {/* Gradient definitions */}
              <defs>
                <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#bfdbfe', stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:'#93c5fd', stopOpacity:1}} />
                </linearGradient>
                <linearGradient id="highlightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#3b82f6', stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:'#1d4ed8', stopOpacity:1}} />
                </linearGradient>
              </defs>
              
              {/* Ocean background */}
              <rect width="1200" height="600" fill="url(#oceanGradient)"/>
              
              {/* North America */}
              <path d="M 100 120 Q 120 100 160 110 Q 200 100 240 120 Q 280 140 320 160 Q 360 180 380 220 Q 400 260 380 300 Q 360 340 320 360 Q 280 380 240 360 Q 200 340 160 320 Q 120 300 100 260 Q 80 220 100 180 Z" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1"/>
              
              {/* Canada (highlighted) */}
              <path d="M 120 80 Q 140 60 180 70 Q 220 60 260 80 Q 300 100 340 120 Q 380 140 400 180 Q 420 220 400 260 Q 380 300 340 320 Q 300 340 260 320 Q 220 300 180 280 Q 140 260 120 220 Q 100 180 120 140 Z" fill="url(#highlightGradient)" stroke="#1e40af" strokeWidth="2"/>
              
              {/* South America */}
              <path d="M 260 320 Q 280 340 300 380 Q 320 420 340 460 Q 360 500 340 540 Q 320 580 280 580 Q 240 580 200 560 Q 160 540 140 500 Q 120 460 140 420 Q 160 380 200 360 Q 240 340 260 320 Z" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1"/>
              
              {/* Chile (highlighted) */}
              <path d="M 200 400 Q 210 420 220 460 Q 230 500 225 540 Q 220 580 210 580 Q 200 580 190 560 Q 180 540 175 500 Q 170 460 175 420 Q 180 400 190 400 Q 195 400 200 400 Z" fill="url(#highlightGradient)" stroke="#1e40af" strokeWidth="2"/>
              
              {/* Brazil (highlighted) */}
              <path d="M 240 340 Q 280 360 320 380 Q 360 400 380 440 Q 400 480 380 520 Q 360 560 320 560 Q 280 560 240 540 Q 200 520 180 480 Q 160 440 180 400 Q 200 360 240 340 Z" fill="url(#highlightGradient)" stroke="#1e40af" strokeWidth="2"/>
              
              {/* Europe */}
              <path d="M 480 140 Q 520 120 560 130 Q 600 140 640 160 Q 680 180 700 220 Q 720 260 700 300 Q 680 340 640 360 Q 600 380 560 360 Q 520 340 480 320 Q 440 300 420 260 Q 400 220 420 180 Q 440 160 480 140 Z" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1"/>
              
              {/* UK (highlighted) */}
              <path d="M 460 160 Q 470 150 485 155 Q 500 160 510 175 Q 520 190 515 205 Q 510 220 495 225 Q 480 230 465 225 Q 450 220 445 205 Q 440 190 445 175 Q 450 165 460 160 Z" fill="url(#highlightGradient)" stroke="#1e40af" strokeWidth="2"/>
              
              {/* Portugal (highlighted) */}
              <path d="M 440 240 Q 450 230 465 235 Q 480 240 485 255 Q 490 270 485 285 Q 480 300 465 305 Q 450 310 435 305 Q 420 300 415 285 Q 410 270 415 255 Q 420 245 440 240 Z" fill="url(#highlightGradient)" stroke="#1e40af" strokeWidth="2"/>
              
              {/* Africa */}
              <path d="M 500 300 Q 540 320 580 340 Q 620 360 640 400 Q 660 440 640 480 Q 620 520 580 540 Q 540 560 500 540 Q 460 520 440 480 Q 420 440 440 400 Q 460 360 500 340 Q 520 320 500 300 Z" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1"/>
              
              {/* Asia */}
              <path d="M 700 120 Q 740 100 780 110 Q 820 120 860 140 Q 900 160 940 180 Q 980 200 1000 240 Q 1020 280 1000 320 Q 980 360 940 380 Q 900 400 860 380 Q 820 360 780 340 Q 740 320 700 300 Q 660 280 640 240 Q 620 200 640 160 Q 660 140 700 120 Z" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1"/>
              
              {/* Australia */}
              <path d="M 840 420 Q 880 400 920 410 Q 960 420 980 460 Q 1000 500 980 540 Q 960 580 920 580 Q 880 580 840 560 Q 800 540 780 500 Q 760 460 780 420 Q 800 400 840 420 Z" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1"/>
              
              {/* Connection lines from highlighted countries */}
              <g stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" fill="none" opacity="0.6">
                <path d="M 260 150 Q 350 120 460 180"/>
                <path d="M 470 200 Q 455 220 450 270"/>
                <path d="M 430 290 Q 350 320 300 400"/>
                <path d="M 240 460 Q 220 450 205 460"/>
              </g>
              
              {/* Language labels */}
              <g fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#1e40af">
                <text x="260" y="130" textAnchor="middle">English</text>
                <text x="470" y="140" textAnchor="middle">English</text>
                <text x="430" y="260" textAnchor="middle">Portuguese</text>
                <text x="300" y="420" textAnchor="middle">Portuguese</text>
                <text x="205" y="440" textAnchor="middle">Spanish</text>
              </g>
              
              {/* Title */}
              <text x="600" y="50" textAnchor="middle" fill="#1e40af" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="bold">Global Experience & Languages</text>
              
              {/* Legend */}
              <g transform="translate(50,480)">
                <rect x="0" y="0" width="300" height="100" fill="rgba(255,255,255,0.9)" stroke="#d1d5db" strokeWidth="1" rx="8"/>
                <text x="150" y="25" textAnchor="middle" fill="#1e40af" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold">Countries of Experience</text>
                <circle cx="30" cy="50" r="8" fill="url(#highlightGradient)"/>
                <text x="50" y="56" fill="#374151" fontFamily="Arial, sans-serif" fontSize="14">Work & Cultural Experience</text>
                <rect x="20" y="70" width="16" height="2" fill="#3b82f6" opacity="0.6"/>
                <text x="50" y="78" fill="#374151" fontFamily="Arial, sans-serif" fontSize="14">Language Connections</text>
              </g>
            </svg>
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