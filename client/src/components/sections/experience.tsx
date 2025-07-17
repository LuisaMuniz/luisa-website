import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectorIcon, Users, TrendingUp } from "lucide-react";

export default function Experience() {
  const skills = [
    {
      icon: ProjectorIcon,
      title: "Project Management",
      description: "Expert in workflow management, scheduling, and resource allocation. I can create a plan and make sure it's executed.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "There is no task too small. I am happy to take the lead in projects, making sure my teammates feel supported.",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: TrendingUp,
      title: "Process Optimization",
      description: "Let's innovate! There are always ways we can improve our processes.",
      color: "from-indigo-500 to-blue-500"
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


      </div>
    </section>
  );
}
