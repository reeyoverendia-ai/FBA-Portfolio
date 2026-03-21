import React from 'react';
import { services } from '../data/services';

export default function Services() {
  return (
    <section id="services" className="px-6 md:px-12 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-12">
          {/* Muted Taupe label */}
          <p className="uppercase tracking-[0.28em] text-xs text-[#4A443F] font-bold mb-4">
            What I Help With
          </p>

          {/* Ebony Clay Heading */}
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[#635D59]">
            Practical support for Amazon sellers who want clear, structured execution
          </h3>

          {/* Warm Stone Body Text */}
          <p className="text-[#635D59] leading-relaxed">
            My portfolio combines research, sourcing, and listing workflows into one
            system designed to reduce guesswork and improve decision-making.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
  {services.map((service, i) => {
    const Icon = service.icon;
    return (
      <div 
        key={i} 
        /* ✅ THE "AIRY" FIX: 
           - bg-white/5: Very light white tint to prevent 'muddiness'
           - border-white/20: A sharp, thin edge that catches the light
           - backdrop-blur-xl: Deep blur for a premium glass feel 
        */
        className="glass-card bg-white/5 border border-white/20 p-8 rounded-[2.5rem] backdrop-blur-xl
                   hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl 
                   transition-all duration-500 ease-out group"
      >
        {/* Icon Container: Champagne with Ebony Clay Icon */}
        <div className="w-12 h-12 rounded-2xl bg-[#F4E7DA] text-[#4A443F] flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
          <Icon className="w-6 h-6" />
        </div>

        {/* Heading: Ebony Clay (#4A443F) */}
        <h4 className="text-xl font-bold mb-4 text-[#4A443F] tracking-tight">
          {service.title}
        </h4>

        {/* Body: Warm Stone (#635D59) */}
        <p className="text-[#635D59] leading-relaxed text-sm md:text-base font-medium">
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