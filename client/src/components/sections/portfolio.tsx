import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Writing() {
  const articles = [
    {
      title: "The Future of Project Management: Embracing Agile Leadership",
      description: "Exploring how modern project managers can evolve their approach to lead in an increasingly dynamic business environment.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Leadership", "Agile", "Strategy"]
    },
    {
      title: "From Chaos to Clarity: Mastering Cross-Functional Collaboration",
      description: "Practical strategies for breaking down silos and creating seamless collaboration between departments.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Collaboration", "Process", "Team Management"]
    },
    {
      title: "The Chief of Staff Playbook: Strategic Partnership for Executive Success",
      description: "An insider's guide to excelling as a Chief of Staff and becoming an indispensable strategic partner.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Chief of Staff", "Executive Support", "Strategy"]
    }
  ];

  return (
    <section id="writing" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-4">Writing</h2>
          <p className="text-xl text-slate-600">Sharing insights on leadership, strategy, and organizational excellence</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card 
              key={index} 
              className="bg-white hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{article.title}</h3>
                <p className="text-slate-600 mb-4">{article.description}</p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, tagIndex) => (
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
