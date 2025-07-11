import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-4">About Me</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A passionate production coordinator with extensive experience in entertainment industry workflows, 
            skilled in scheduling, budgeting, and cross-functional team management, ready to step into a Chief of Staff role.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Professional Journey</h3>
                <p className="text-slate-600 leading-relaxed">
                  With over 5 years of experience in entertainment production coordination, I've worked at top-tier 
                  companies including Walt Disney Animation Studios, Netflix (ScanlineVFX), and Electronic Arts. 
                  I've successfully managed complex workflows, coordinated cross-functional teams, and delivered 
                  award-winning content including Moana 2 and other major productions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">What Drives Me</h3>
                <p className="text-slate-600 leading-relaxed">
                  I thrive on building studio culture and facilitating interdepartmental communication. 
                  My focus on new technologies and ability to adapt to evolving pipelines makes me an ideal 
                  candidate for strategic leadership roles where innovation meets operational excellence.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="relative">
            <img 
              src="/attached_assets/PHOTO-2024-11-26-00-22-53_1752231089328.jpg" 
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

        {/* Education Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-4">Education</h3>
            <p className="text-lg text-slate-600">Academic foundation and international experience</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold text-slate-800 mb-2">Bachelor's Degree in Motion Picture Arts</h4>
                <p className="text-teal-600 font-medium mb-4">Capilano University • Vancouver, Canada</p>
                <p className="text-slate-600">
                  Comprehensive program covering all aspects of motion picture production, from pre-production 
                  planning to post-production workflows. Gained hands-on experience with industry-standard 
                  tools and production methodologies.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold text-slate-800 mb-2">International Exchange Program</h4>
                <p className="text-teal-600 font-medium mb-4">University of Hertfordshire • Hatfield, England</p>
                <p className="text-slate-600">
                  Expanded global perspective through international study experience. Gained exposure to 
                  different production methodologies and built valuable international network while 
                  studying in the UK film industry hub.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
