import React from 'react';
import { services } from '../data/services';

export default function Services() {
  return (
    // CHANGE 1: Adjusted padding for mobile (py-12) vs desktop (py-20)
    <section id="services" className="px-6 md:px-12 py-12 md:py-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        {/* CHANGE 2: Added 'text-center md:text-left' to make it look balanced on phones */}
        <div className="max-w-3xl mb-12 text-center md:text-left mx-auto md:mx-0">
          <p className="uppercase tracking-[0.28em] text-[10px] md:text-xs text-[#4A443F] font-bold mb-4">
            What I Help With
          </p>

          <h3 className="text-2xl md:text-4xl font-bold mb-4 text-[#635D59] leading-tight">
            Practical support for Market Stakeholders who want clear, structured execution
          </h3>

          <p className="text-[#635D59] leading-relaxed text-sm md:text-base">
            My portfolio combines research, sourcing, and listing workflows into one
            system designed to reduce guesswork and improve decision-making.
          </p>
        </div>

        {/* Grid Container */}
        {/* CHANGE 3: Explicitly set 1 column for mobile, 3 for desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div 
                key={i} 
                // CHANGE 4: Reduced padding on mobile (p-6) so cards aren't too tall
                // Added flex-col items-center for mobile centering
                className="glass-card bg-white/5 border border-white/20 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] backdrop-blur-xl
                           flex flex-col items-center md:items-start text-center md:text-left
                           hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl 
                           transition-all duration-500 ease-out group"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-2xl bg-[#F4E7DA] text-[#4A443F] flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-[#4A443F] tracking-tight">
                  {service.title}
                </h4>

                <p className="text-[#635D59] leading-relaxed text-xs md:text-base font-medium opacity-90">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
