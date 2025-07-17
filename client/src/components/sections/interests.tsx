import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ChefHat, Globe, BarChart3, Languages } from "lucide-react";
import culinaryImage from "@assets/culinary-adventures.jpg";
import exploringWorldImage from "@assets/exploring-world.jpg";
import iceCreamLunchImage from "@assets/ice-cream-lunch.jpg";
import hobbiesBackgroundImage from "@assets/PHOTO-2025-07-16-14-35-03_1752673108735.jpg";
import iceCreamLogo from "@assets/you did it!_1752676353198.png";

export default function Interests() {
  const interests = [
    {
      icon: BookOpen,
      title: "Ice Cream for Lunch",
      description: "This is personal blog where I share thoughts, experiences, and insights about life, travel and food.",
      link: "Read Blog →",
      color: "text-blue-600",
      linkUrl: "https://substack.com/@icecreamforlunch",
      image: iceCreamLunchImage,
      logo: iceCreamLogo
    },
    {
      icon: ChefHat,
      title: "Culinary Adventures",
      description: "I love going on culinary adventures and exploring flavors from around the world or even taking cooking classes at home.",
      image: culinaryImage,
      color: "text-red-600"
    },
    {
      icon: Globe,
      title: "Exploring the World",
      description: "Given my family is spread around the world, I grew up with what my Dad calls 'wheels' on my feet. I love exploring new places. I am currently travelling the world for 2 years while working remotely.",
      image: exploringWorldImage,
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
    <section id="interests" className="pt-0 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">Personal Interests</h2>
          <p className="text-xl text-slate-600">The passions that fuel my creativity and drive</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <Card 
                key={index}
                className="bg-gradient-to-br from-slate-100 to-slate-200 hover:shadow-xl transition-all duration-300 group hover:scale-105"
              >
                <CardContent className="p-8 text-center">
                  {interest.logo ? (
                    <img 
                      src={interest.logo} 
                      alt={interest.title}
                      className="w-16 h-16 mx-auto mb-4 object-contain"
                    />
                  ) : (
                    <Icon className={`w-12 h-12 mx-auto mb-4 ${interest.color}`} />
                  )}
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
                  {interest.title === "Ice Cream for Lunch" && (
                    <div className="bg-white p-4 rounded-lg mt-4 text-left">
                      <div className="text-sm text-slate-700 mb-2 font-medium">Some of my favourite posts:</div>
                      <div className="space-y-2">
                        <div>
                          <a 
                            href="https://icecreamforlunch.substack.com/p/how-food-changed-the-way-i-travel?r=17e9cb" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 text-sm hover:underline"
                          >
                            How food changed the way I travel
                          </a>
                        </div>
                        <div>
                          <a 
                            href="https://icecreamforlunch.substack.com/p/the-art-of-appreciating-food-you?r=17e9cb" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 text-sm hover:underline"
                          >
                            The art of appreciating food you don't like
                          </a>
                        </div>
                        <div>
                          <a 
                            href="https://icecreamforlunch.substack.com/p/why-i-quit-my-dream-job?r=17e9cb" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 text-sm hover:underline"
                          >
                            Why I quit my dream job
                          </a>
                        </div>
                        <div>
                          <a 
                            href="https://open.substack.com/pub/icecreamforlunch/p/who-bakes-better-cookies-me-or-gpt?r=17e9cb&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 text-sm hover:underline"
                          >
                            Who bakes better cookies: me or chatGPT?
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                  {interest.image && (
                    <div className="w-full mt-4">
                      {interest.title === "Culinary Adventures" ? (
                        <div className="w-full h-96 rounded-lg overflow-hidden bg-white flex items-center justify-center">
                          <img 
                            src={interest.image} 
                            alt={interest.title}
                            className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ) : (
                        <img 
                          src={interest.image} 
                          alt={interest.title}
                          className="w-full h-32 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                        />
                      )}
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
                ability to think logically and bring fresh global perspectives to any workplace. And I love playing UNO!
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
                src={hobbiesBackgroundImage} 
                alt="Exploring artichokes at a local market - combining food and travel passions" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
