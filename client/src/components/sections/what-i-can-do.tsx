import image1 from "@assets/1_1763626360892.png";
import image2 from "@assets/2_1763626360900.png";

export default function WhatICanDo() {
  return (
    <section id="what-i-can-do" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">
          What I can do for you
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="flex justify-center">
            <img
              src={image1}
              alt="10 Things Luisa can do for you"
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-auto object-contain"
              data-testid="img-what-i-can-do-1"
            />
          </div>
          
          <div className="flex justify-center">
            <img
              src={image2}
              alt="10 more things Luisa can do for you"
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-auto object-contain"
              data-testid="img-what-i-can-do-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
