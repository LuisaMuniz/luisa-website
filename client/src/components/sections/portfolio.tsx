import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import floraUlyssesImage from "@assets/p18163076_v_h8_ah_1752231908563.jpg";

export default function Projects() {
  const projects = [
    {
      title: "Moana 2 (2024)",
      description: "Successfully delivered all new characters for Disney's highly anticipated sequel with a newly hired team of 30 artists while learning the modern Disney animation pipeline.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      tags: ["Disney Animation", "Character Development", "Team Leadership"],
      link: "https://www.imdb.com/title/tt13622970/?ref_=nv_sr_srsg_0_tt_7_nm_1_in_0_q_moana%25202"
    },
    {
      title: "Unannounced Disney Project (2025)",
      description: "Currently coordinating production for an upcoming Disney animated feature, managing complex workflows and interdepartmental communication.",
      image: "https://images.unsplash.com/photo-1489370603040-dc6c28a1d7a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Disney Animation", "Production Management", "Confidential"]
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
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </a>
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
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
                      className={tagIndex === 0 ? "bg-purple-600" : "bg-orange-500"}
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
