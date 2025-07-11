import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectorIcon, Users, TrendingUp } from "lucide-react";

export default function Experience() {
  const skills = [
    {
      icon: ProjectorIcon,
      title: "Project Management",
      description: "Agile, Scrum, PMP-certified with expertise in complex project delivery",
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
      title: "Strategic Planning",
      description: "Data-driven decision making and process optimization",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const experiences = [
    {
      title: "Senior Project Manager",
      company: "TechCorp Solutions",
      period: "2020 - Present",
      description: "Led digital transformation initiatives, managed $2M+ budgets, and delivered 15+ successful projects with 98% on-time completion rate."
    },
    {
      title: "Project Manager",
      company: "Innovation Consulting Group",
      period: "2018 - 2020",
      description: "Managed client engagements, implemented process improvements, and achieved 25% efficiency gains across multiple departments."
    },
    {
      title: "Business Analyst",
      company: "StartupCo",
      period: "2016 - 2018",
      description: "Analyzed business processes, created detailed project plans, and supported the company's growth from 50 to 200 employees."
    }
  ];

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">Experience & Skills</h2>
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
