import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">About Me</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A passionate project manager with a unique blend of analytical thinking and creative problem-solving, 
            ready to step into a Chief of Staff role.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Professional Journey</h3>
                <p className="text-slate-600 leading-relaxed">
                  With over 8 years of experience in project management across tech and consulting industries, 
                  I've successfully led cross-functional teams, managed complex initiatives, and delivered 
                  results that exceeded stakeholder expectations.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">What Drives Me</h3>
                <p className="text-slate-600 leading-relaxed">
                  I thrive on connecting the dots between strategy and execution, building bridges between 
                  departments, and creating systems that enable organizations to scale efficiently and effectively.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional woman in modern office" 
              className="rounded-xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-orange-400 to-pink-500 p-6 rounded-xl shadow-lg transform hover:scale-110 transition-transform duration-300">
              <div className="text-center">
                <div className="text-3xl font-bold text-white animate-bounce-fun">8+</div>
                <div className="text-white text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
