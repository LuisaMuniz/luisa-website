import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectorIcon, Users, TrendingUp } from "lucide-react";

export default function Experience() {
  const skills = [
    {
      icon: ProjectorIcon,
      title: "Project Management",
      description: "Expert in workflow management, scheduling, and resource allocation",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Cross-functional team management and stakeholder alignment",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: TrendingUp,
      title: "Process Optimization",
      description: "Data-driven decision making and operational efficiency improvements",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const experiences = [
    {
      title: "Production Coordinator / Production Supervisor",
      company: "Walt Disney Animation Studios",
      period: "May 2022 - June 2025",
      description: "Started as a Production Coordinator with a team of 30, expected to reach 400 by the end of 2023. I coordinated every department except Lighting during my 3 years in the company. Gathered a vast understanding of the animation process and the importance of each department from shorts, feature films and content for the themed parks. Was temporarily promoted to Production Supervisor in 2023 to wrap characters on Moana 2. "
    },
    {
      title: "Virtual Production Coordinator",
      company: "ScanlineVFX (Netflix)",
      period: "Dec 2021 - Mar 2022",
      description: "Helped incorporate Virtual Production into the new Scanline VFX pipeline after Netflix acquisition. Facilitated interdepartmental conversations and strategized solutions for evolving technology."
    },
    {
      title: "Capture Production Assistant/ Assistant Producer",
      company: "Electronic Arts",
      period: "Sep 2019 - Dec 2021",
      description: "Coordinated Motion Capture acquisition for FIFA, NHL, MADDEN, UFC, Dragon Age. Worked directly with animation directors and facilitated communication between departments."
    }
  ];

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">Experience & Skills</h2>
          <p className="text-xl text-slate-600">A comprehensive overview of my professional capabilities</p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={index}
                className={`bg-gradient-to-br ${skill.color} p-8 rounded-xl text-white text-center hover:transform hover:scale-105 transition-all duration-300`}
              >
                <Icon className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                <p className="opacity-90">{skill.description}</p>
              </div>
            );
          })}
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-slate-800 mb-12 text-center">Professional Timeline</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-slate-50 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h4 className="text-xl font-semibold text-slate-800">{exp.title}</h4>
                    <Badge variant="outline" className="text-blue-600 border-blue-600">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-slate-600 mb-3 font-medium">{exp.company}</p>
                  <p className="text-slate-600">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
