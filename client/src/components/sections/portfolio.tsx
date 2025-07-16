import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import floraUlyssesImage from "@assets/p18163076_v_h8_ah_1752231908563.jpg";
import moana2Image from "@assets/compose_1752231966148.webp";
import disneyProjectGraphic from "@/assets/disney-project-graphic.svg";
import mrJamesImage from "@assets/images_1752235435820.jpeg";
import eaLogoImage from "@assets/ea-featured-image-generic-brand-logo.png.adapt.crop191x100.1200w_1752235550358.png";

export default function Projects() {
  const projects = [
    {
      title: "Moana 2 (2024)",
      description: "Coordinated the character department from start to finish. Was able to join almost all departments to help complete the movie. This experience gave me indepth understanding of the animation pipeline.",
      image: moana2Image,
      tags: ["Disney Animation", "Production Management", "Feature Film"],
      link: "https://www.imdb.com/title/tt13622970/?ref_=nv_sr_srsg_0_tt_7_nm_1_in_0_q_moana%25202"
    },
    {
      title: "Unannounced Disney Project (2025)",
      description: "Had the opportunity to jump into a very special short. This was a smaller scaled project so I had the opportunity to wear many hats. It was incredibly rewarding to learn so much in such a short amount of time.",
      image: disneyProjectGraphic,
      tags: ["Disney Animation", "Production Management", "Short Film"]
    },
    {
      title: "EA Motion Capture (2019-2021)",
      description: "Organized and produced data recording sessions at EA for head scanning, motion capture, DCAM and performance capture. Supported major game titles including FIFA, NHL, UFC, Dragon Age, Madden, Sims, Skate and PGA.",
      image: eaLogoImage,
      tags: ["EA Sports", "Motion Capture", "Gaming"]
    },
    {
      title: "Mr. James is Dead (2020)",
      description: "Produced an independent short film in 8 weeks with all the challenging elements typically avoided in scripts: fake firearms, action choreography, and kids' schedules. An incredible rushed challenge that provided extensive learning opportunities.",
      image: mrJamesImage,
      tags: ["Independent Film", "Producer", "Short Film"]
    },
    {
      title: "Flora and Ulysses (2020)",
      description: "Contributed to Disney+ original film production, gaining experience in streaming platform content development and delivery.",
      image: floraUlyssesImage,
      tags: ["Disney+", "Live Action", "Streaming"]
    }
  ];

  return (
    <section id="writing" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600">Key productions and achievements in entertainment industry</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-white hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-56 object-contain group-hover:scale-105 transition-all duration-300 hover:brightness-110 bg-gradient-to-br from-blue-50 to-slate-50"
                    />
                  </a>
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-56 object-contain group-hover:scale-105 transition-all duration-300 hover:brightness-110 bg-gradient-to-br from-blue-50 to-slate-50"
                  />
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant={tagIndex === 0 ? "default" : "secondary"}
                      className={tagIndex === 0 ? "bg-blue-600" : "bg-teal-600"}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
