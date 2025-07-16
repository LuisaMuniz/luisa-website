import { Card, CardContent } from "@/components/ui/card";
import profilePhoto from "@assets/PHOTO-2024-11-26-00-22-53_1752231089328.jpg";

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">About Me</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Born in Chile from are Brazilian and Portuguese parents. As soon as I could I moved to Canada to study film. After many job opportunities in Canada and the EU am moving away from film. I am passionate about giving structure to teams and will do what it takes to get the job done. No task is too small for me and I love to keep a fun light environment at work.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Professional Journey</h3>
                <p className="text-slate-600 leading-relaxed">
                  With over 5 years of production experience the entretainment industry I have decided to take a step back. I've worked at top-tier 
                  companies including Walt Disney Animation Studios, Netflix (ScanlineVFX), and Electronic Arts. 
                  I've successfully managed complex workflows, coordinated cross-functional teams, and delivered 
                  award-winning content including Moana 2 and other major productions. I have experience working with many teams developing new technologies and pipelines. From animation to motion capture to virtual production. I can see how my skills can be applied to a Project Manager or Chief of Staff role where I can make a real impact from small startups to large companies.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">What Drives Me</h3>
                <p className="text-slate-600 leading-relaxed">
                  I thrive on building company culture and facilitating communication. 
                  My focus on new technologies and ability to adapt to evolving pipelines makes me an ideal 
                  candidate for strategic leadership roles where innovation meets operational excellence. I love organizing, give me an idea and I will make it a feaseable plan that can be executed.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="relative">
            <img 
              src={profilePhoto} 
              alt="Luisa Muniz - Professional headshot" 
              className="rounded-xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-500 to-teal-500 p-6 rounded-xl shadow-lg transform hover:scale-110 transition-transform duration-300">
              <div className="text-center">
                <div className="text-3xl font-bold text-white animate-bounce-fun">5+</div>
                <div className="text-white text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
