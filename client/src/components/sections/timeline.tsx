import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Timeline() {
  const [showMore, setShowMore] = useState(false);
  const [lineHeight, setLineHeight] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lastDotRef = useRef<HTMLDivElement>(null);
  
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
      description: "Helped incorporate Virtual Production into the new Scanline VFX pipeline after the Netflix acquisition. Facilitated interdepartmental conversations and strategized solutions for evolving technology."
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
      description: "Had the opportunity to intern for a Disney+ film right after university. This was one of their first projects, going straight to Disney+. I could bounce around many departments and learn firsthand what a day on set looks like."
    },
    {
      title: "Work Experience",
      company: "AG Films 🇵🇹",
      period: "June 2018",
      description: "Learned firsthand all about running a production company in Lisbon as we organized and filmed a car commercial."
    },
    {
      title: "Work Experience",
      company: "ZigZag Productions 🇬🇧",
      period: "January 2018",
      description: "My first experience in a production company. I transcribed raw footage from different languages and ran small errands throughout my stay. I was then referred to another production company (Faction Films) where I interned for 2 more weeks in the Spring."
    }
  ];

  const allExperiences = [...mainExperiences, ...(showMore ? additionalExperiences : [])];

  // Calculate line height to end exactly on the last dot (ZigZag Production when expanded)
  useEffect(() => {
    const calculateLineHeight = () => {
      if (timelineRef.current) {
        if (showMore && lastDotRef.current) {
          // When expanded, end at ZigZag Production dot
          const timelineRect = timelineRef.current.getBoundingClientRect();
          const lastDotRect = lastDotRef.current.getBoundingClientRect();
          const relativeTop = lastDotRect.top - timelineRect.top;
          setLineHeight(relativeTop + 8); // 8px to center on the dot
        } else {
          // When collapsed, end at the last visible experience + some padding for dots
          const mainExperiences = timelineRef.current.querySelectorAll('.timeline-item');
          if (mainExperiences.length >= 3) {
            const lastMainExp = mainExperiences[2]; // EA experience (index 2)
            const timelineRect = timelineRef.current.getBoundingClientRect();
            const lastExpRect = lastMainExp.getBoundingClientRect();
            const relativeTop = lastExpRect.top - timelineRect.top;
            setLineHeight(relativeTop + 8); // 8px to center on the dot
          }
        }
      }
    };

    calculateLineHeight();
    window.addEventListener('resize', calculateLineHeight);
    
    return () => window.removeEventListener('resize', calculateLineHeight);
  }, [showMore]);

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
          <div className="relative" ref={timelineRef}>
            {/* Timeline line */}
            <div 
              className="absolute left-8 top-0 w-0.5 bg-blue-200" 
              style={{
                height: lineHeight > 0 ? `${lineHeight}px` : '0px'
              }}
            ></div>
            
            {allExperiences.map((exp, index) => {
              const isLastExperience = index === allExperiences.length - 1;
              const isZigZag = exp.company === "ZigZag Productions 🇬🇧";
              
              return (
                <div key={index} className={`relative flex items-start timeline-item ${isLastExperience ? 'mb-0' : 'mb-12'}`}>
                  {/* Timeline dot */}
                  <div 
                    ref={isZigZag ? lastDotRef : null}
                    className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"
                  ></div>
                
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
              );
            })}
            
            {/* Three dots indicator when collapsed */}
            {!showMore && (
              <div className="absolute left-8 flex flex-col items-center space-y-1 -translate-x-0.5" style={{ top: `${lineHeight + 10}px` }}>
                <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
              </div>
            )}
            
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