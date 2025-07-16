import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ChefHat, Globe, BarChart3, Languages } from "lucide-react";

export default function Interests() {
  const interests = [
    {
      icon: BookOpen,
      title: "Ice Cream for Lunch",
      description: "This is personal blog where I share thoughts, experiences, and insights about life, travel and food.",
      link: "Read Blog →",
      color: "text-blue-600",
      linkUrl: "https://substack.com/@icecreamforlunch"
    },
    {
      icon: ChefHat,
      title: "Culinary Adventures",
      description: "I love going on culinary adventures and exploring flavors from around the world or even taking cooking classes at home.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200",
      color: "text-yellow-600"
    },
    {
      icon: Globe,
      title: "Exploring the World",
      description: "Given my family is spread around the world, I grew up with what my Dad calls 'wheels' on my feet. I love exploring new places. I am currently travelling the world for 2 years while working remotely.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200",
      color: "text-green-600"
    },
    {
      icon: BarChart3,
      title: "Building Spreadsheets",
      description: "I not only build spreadsheets for work, they rule my life. From organizing christmas to the office trivia nights, spreadsheets bring structure to my thinking and make communication easier for my family and colleagues",
      color: "text-purple-600"
    }
  ];

  return (
    <section id="interests" className="pt-12 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">Personal Interests</h2>
          <p className="text-xl text-slate-600">The passions that fuel my creativity and drive</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <Card 
                key={index}
                className="bg-gradient-to-br from-slate-100 to-slate-200 hover:shadow-xl transition-all duration-300 group hover:scale-105"
              >
                <CardContent className="p-8 text-center">
                  <Icon className={`w-12 h-12 mx-auto mb-4 ${interest.color}`} />
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{interest.title}</h3>
                  <p className="text-slate-600 mb-4">{interest.description}</p>
                  {interest.link && (
                    <button 
                      onClick={() => interest.linkUrl && window.open(interest.linkUrl, '_blank')}
                      className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                    >
                      {interest.link}
                    </button>
                  )}
                  {interest.image && (
                    <img 
                      src={interest.image} 
                      alt={interest.title}
                      className="w-full h-32 object-cover rounded-lg mt-4 group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  {interest.title === "Data Enthusiast" && (
                    <div className="bg-white p-4 rounded-lg mt-4 text-left">
                      <div className="text-sm font-mono text-slate-600 space-y-1">
                        <div>📊 Excel Expert</div>
                        <div>📈 Data Visualization</div>
                        <div>🔍 Advanced Analytics</div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Interest */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-slate-700 rounded-xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Why My Hobbies Matter</h3>
              <p className="text-lg opacity-90 mb-6">
                My diverse interests aren't just hobbies—they're sources of inspiration that inform my professional approach. 
                From the precision of spreadsheet, to the creativity of cooking and my passion of exploring the world, they all contributes to my 
                ability to think logically and bring fresh global perspectives to any workplace.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="secondary" className="bg-white bg-opacity-20 text-white">
                  Creative Problem Solving
                </Badge>
                <Badge variant="secondary" className="bg-white bg-opacity-20 text-white">
                  Global Perspective
                </Badge>
                <Badge variant="secondary" className="bg-white bg-opacity-20 text-white">
                  Attention to Detail
                </Badge>
              </div>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                alt="Inspiring mountain lake travel destination" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
