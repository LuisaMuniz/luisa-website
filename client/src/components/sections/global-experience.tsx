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
              <rect width="1200" height="600" fill="#bfdbfe"/>
              
              {/* Gradient definitions */}
              <defs>
                <linearGradient id="highlightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#3b82f6', stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:'#1d4ed8', stopOpacity:1}} />
                </linearGradient>
              </defs>
              
              {/* North America - Base */}
              <path d="M 50 120 L 100 100 L 150 95 L 200 100 L 250 110 L 300 125 L 350 140 L 380 160 L 400 185 L 410 210 L 400 240 L 380 265 L 350 285 L 300 300 L 250 310 L 200 305 L 150 295 L 100 280 L 60 260 L 40 230 L 35 190 L 50 120 Z" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1"/>
              
              {/* Canada - Highlighted */}
              <path d="M 80 80 L 120 70 L 160 65 L 200 70 L 240 80 L 280 95 L 320 110 L 350 125 L 380 145 L 400 170 L 410 195 L 400 220 L 380 240 L 350 255 L 320 270 L 280 280 L 240 275 L 200 270 L 160 260 L 120 245 L 90 225 L 70 195 L 65 155 L 80 80 Z" fill="url(#highlightGradient)" stroke="#1e40af" strokeWidth="2"/>
              
              {/* United States */}
              <path d="M 60 200 L 100 190 L 140 185 L 180 190 L 220 200 L 260 215 L 300 230 L 340 245 L 370 265 L 390 290 L 395 315 L 385 340 L 365 360 L 335 375 L 295 385 L 255 390 L 215 385 L 175 375 L 135 360 L 95 340 L 65 315 L 45 285 L 40 250 L 60 200 Z" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1"/>
              
              {/* South America - Base */}
              <path d="M 220 340 L 250 360 L 280 380 L 310 400 L 340 425 L 365 450 L 380 480 L 390 510 L 385 540 L 370 565 L 345 580 L 315 585 L 285 580 L 255 570 L 225 555 L 195 535 L 175 510 L 165 480 L 170 450 L 185 420 L 205 395 L 220 340 Z" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1"/>
              
              {/* Brazil - Highlighted */}
              <path d="M 240 360 L 270 380 L 300 400 L 330 420 L 355 445 L 375 470 L 385 495 L 380 520 L 370 545 L 350 560 L 325 570 L 300 565 L 275 555 L 250 540 L 225 520 L 205 495 L 195 470 L 200 445 L 215 420 L 235 395 L 240 360 Z" fill="url(#highlightGradient)" stroke="#1e40af" strokeWidth="2"/>
              
              {/* Chile - Highlighted */}
              <path d="M 180 420 L 190 440 L 195 470 L 200 500 L 205 530 L 210 560 L 205 580 L 195 580 L 185 560 L 180 530 L 175 500 L 170 470 L 175 440 L 180 420 Z" fill="url(#highlightGradient)" stroke="#1e40af" strokeWidth="2"/>
              
              {/* Europe - Base */}
              <path d="M 520 140 L 560 130 L 600 135 L 640 150 L 680 170 L 710 195 L 730 225 L 740 255 L 735 285 L 720 310 L 695 330 L 665 345 L 630 355 L 590 350 L 550 340 L 510 325 L 480 305 L 460 280 L 450 250 L 455 220 L 470 195 L 490 170 L 520 140 Z" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1"/>
              
              {/* United Kingdom - Highlighted */}
              <path d="M 480 160 L 500 150 L 520 155 L 535 170 L 540 190 L 535 210 L 520 225 L 500 230 L 480 225 L 465 210 L 460 190 L 465 170 L 480 160 Z" fill="url(#highlightGradient)" stroke="#1e40af" strokeWidth="2"/>
              
              {/* Portugal - Highlighted */}
              <path d="M 460 250 L 475 240 L 490 245 L 500 260 L 505 280 L 500 300 L 485 315 L 470 320 L 455 315 L 445 300 L 440 280 L 445 260 L 460 250 Z" fill="url(#highlightGradient)" stroke="#1e40af" strokeWidth="2"/>
              
              {/* Africa */}
              <path d="M 520 300 L 560 320 L 600 340 L 640 365 L 675 395 L 700 430 L 715 470 L 710 510 L 695 545 L 670 575 L 630 590 L 590 585 L 550 575 L 515 560 L 485 540 L 465 515 L 455 485 L 465 455 L 485 425 L 515 395 L 520 300 Z" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1"/>
              
              {/* Asia */}
              <path d="M 740 120 L 780 110 L 820 115 L 860 130 L 900 150 L 940 175 L 980 205 L 1010 240 L 1030 280 L 1035 320 L 1025 360 L 1005 395 L 975 425 L 935 445 L 895 455 L 855 450 L 815 440 L 775 425 L 740 405 L 710 380 L 690 350 L 680 315 L 685 280 L 700 245 L 720 215 L 740 120 Z" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1"/>
              
              {/* Australia */}
              <path d="M 900 460 L 940 450 L 980 455 L 1015 470 L 1040 495 L 1050 525 L 1045 555 L 1025 580 L 995 590 L 960 585 L 925 575 L 895 560 L 875 540 L 865 515 L 870 490 L 885 470 L 900 460 Z" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1"/>
              
              {/* Connection lines from highlighted countries */}
              <g stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" fill="none" opacity="0.7">
                <path d="M 280 150 Q 400 120 480 180"/>
                <path d="M 500 200 Q 485 225 475 270"/>
                <path d="M 460 310 Q 350 340 300 430"/>
                <path d="M 240 480 Q 210 470 195 480"/>
              </g>
              
              {/* Country labels */}
              <g fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#1e40af">
                <text x="280" y="140" textAnchor="middle">CANADA</text>
                <text x="500" y="140" textAnchor="middle">UK</text>
                <text x="475" y="240" textAnchor="middle">PORTUGAL</text>
                <text x="300" y="440" textAnchor="middle">BRAZIL</text>
                <text x="190" y="460" textAnchor="middle">CHILE</text>
              </g>
              
              {/* Title */}
              <text x="600" y="40" textAnchor="middle" fill="#1e40af" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold">Global Experience & Languages</text>
              
              {/* Legend */}
              <g transform="translate(50,480)">
                <rect x="0" y="0" width="280" height="90" fill="rgba(255,255,255,0.95)" stroke="#d1d5db" strokeWidth="1" rx="8"/>
                <text x="140" y="20" textAnchor="middle" fill="#1e40af" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold">Countries of Experience</text>
                <circle cx="25" cy="40" r="6" fill="url(#highlightGradient)"/>
                <text x="40" y="45" fill="#374151" fontFamily="Arial, sans-serif" fontSize="12">Work & Cultural Experience</text>
                <rect x="20" y="60" width="12" height="2" fill="#3b82f6" opacity="0.7"/>
                <text x="40" y="68" fill="#374151" fontFamily="Arial, sans-serif" fontSize="12">Language Connections</text>
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