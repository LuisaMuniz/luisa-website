import { Card, CardContent } from "@/components/ui/card";

export default function Education() {
  return (
    <section id="education" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">Education</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Academic foundation and international experience that shaped my professional journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Bachelor's Degree in Motion Picture Arts</h3>
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
              <h3 className="text-xl font-semibold text-slate-800 mb-2">International Exchange Program</h3>
              <p className="text-teal-600 font-medium mb-4">University of Hertfordshire • Hatfield, England</p>
              <p className="text-slate-600">
                Expanded global perspective through international study experience. Gained exposure to 
                different production methodologies and built a valuable international network. Gained work experience in London and Lisbon interning in a total of 4 production companies.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}