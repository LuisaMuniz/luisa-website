import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const projects = [
    {
      title: "Moana 2 (2024)",
      description: "Successfully delivered all new characters for Disney's highly anticipated sequel with a newly hired team of 30 artists while learning the modern Disney animation pipeline.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Disney Animation", "Character Development", "Team Leadership"]
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
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
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
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{project.title}</h3>
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
