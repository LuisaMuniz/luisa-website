import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Timeline() {
  const [showMore, setShowMore] = useState(false);
  
  const mainExperiences = [
    {
      title: "Production Coordinator / Production Supervisor",
      company: "Walt Disney Animation Studios 🇨🇦",
      period: "May 2022 - June 2025",
      description: "Started as a Production Coordinator with a team of 30, expected to reach 400 by the end of 2023. I coordinated every department except Lighting during my 3 years in the company. Gathered a vast understanding of the animation process and the importance of each department from shorts, feature films and content for the themed parks. Was temporarily promoted to Production Supervisor in 2023 to wrap characters on Moana 2."
    },
    {
      title: "Virtual Production Coordinator",
      company: "ScanlineVFX (Netflix) 🇨🇦",
      period: "Dec 2021 - Mar 2022",
      description: "Helped incorporate Virtual Production into the new Scanline VFX pipeline after Netflix acquisition. Facilitated interdepartmental conversations and strategized solutions for evolving technology."
    },
    {
      title: "Capture Production Assistant/ Assistant Producer",
      company: "Electronic Arts 🇨🇦",
      period: "Sep 2019 - Dec 2021",
      description: "Coordinated Motion Capture acquisition for FIFA, NHL, MADDEN, UFC, Dragon Age. Worked directly with animation directors and facilitated communication between departments."
    }
  ];

  const additionalExperiences = [
    {
      title: "Intern",
      company: "Disney+ 🇨🇦",
      period: "June 2019",
      description: "Had the opportunity to intern for a Disney+ film right after university. This was one of their first projects going straight to Disney+. I could bounce around many departments and learn first hand what a day on set looks like."
    },
    {
      title: "Work Experience",
      company: "AG Films 🇵🇹",
      period: "June 2018",
      description: "Learned first hand all about running a production company in Lisbon as we organized and filmed a car commercial."
    },
    {
      title: "Work Experience",
      company: "ZigZag Productions 🇬🇧",
      period: "January 2018",
      description: "My first experience in a production company. I transcribed raw footage from different languages and run small errands throughout my stay. I was then refered to another production company (Faction Films) where I interned for 2 more weeks in the Spring."
    }
  ];

  const allExperiences = [...mainExperiences, ...(showMore ? additionalExperiences : [])];

  return (
    <section id="timeline" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">Professional Timeline</h2>
          <p className="text-xl text-slate-600">
            A chronological journey through my career milestones and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div 
              className="absolute left-8 top-0 w-0.5 bg-blue-200" 
              style={{
                height: showMore 
                  ? `calc(100% - 24rem)` 
                  : `calc(100% - 8rem)`
              }}
            ></div>
            
            {allExperiences.map((exp, index) => (
              <div key={index} className={`relative flex items-start ${index === allExperiences.length - 1 ? 'mb-0' : 'mb-12'}`}>
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                
                {/* Content */}
                <div className="ml-16 flex-1">
                  <Card className="hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-slate-800 mb-1">{exp.title}</h3>
                          <p className="text-blue-600 font-medium">{exp.company}</p>
                        </div>
                        <Badge variant="outline" className="mt-2 md:mt-0 self-start">
                          {exp.period}
                        </Badge>
                      </div>
                      <p className="text-slate-600 leading-relaxed">{exp.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
            
            {/* Read more button */}
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowMore(!showMore)}
                className="flex items-center gap-2 px-6 py-3 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition-colors duration-200 font-medium"
              >
                {showMore ? (
                  <>
                    <ChevronUp className="w-4 h-4" />
                    Show less
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4" />
                    Read more...
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}