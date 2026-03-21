import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center">
      
      {/* 🖼️ Background Image */}
      <img 
        src="/images/garden.png" 
        alt="Background" 
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* ✅ THE CUSTOM GLASS CARD: Dark Taupe + Muted Gold Border */}
      <div className="relative z-20 ml-6 md:ml-6 p-10 md:p-12 max-w-xl rounded-3xl 
                      bg-[#2D2A26]/15 backdrop-blur-[20px] 
                      border border-[#8E7D62]/40 
                      shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
        
        {/* HEADING */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#FDFBF7] leading-[1.2] tracking-tight">
          Scale Your Amazon FBA Business <br />
          Through <span className="text-[#C4B9AA]">Clear, Structured Workflow.</span>
        </h1>

        {/* BODY TEXT */}
        <p className="max-w-sm text-sm md:text-base text-[#FDFBF7] opacity-90 mb-10 leading-relaxed font-medium">
          Move beyond guesswork with proven systems for research, sourcing, and listing
          optimization — built for clarity and decision accuracy.
        </p>

        {/* ✅ THE GLOWING ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-8 items-center">
          
          {/* View Case Studies - Intense Golden Glow */}
          <a
            href="#videos"
            /* ✅ GLOW: We increased the spread (30px) and opacity (0.4) 
               to make the 'Muted Gold' shine against the dark glass. */
            className="group px-8 py-3.5 rounded-full 
                       bg-[#8E7D62]/30 border border-[#8E7D62]/60 
                       text-[#FDFBF7] font-bold text-sm 
                       shadow-[0_0_30px_rgba(142,125,98,0.4)] 
                       transition-all duration-300 hover:scale-105 hover:bg-[#8E7D62]/50 
                       flex items-center gap-2"
          >
            View Case Studies
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Contact Me - Clean Ivory Glow */}
          <a
            href="#contact"
            /* ✅ GLOW: Added a soft ivory glow (rgba 253, 251, 247) 
               to match the text and ensure it doesn't get lost. */
            className="px-6 py-2 rounded-lg text-[#FDFBF7] font-bold text-sm 
                       shadow-[0_0_15px_rgba(253,251,247,0.15)] 
                       hover:bg-white/10 hover:shadow-[0_0_25px_rgba(253,251,247,0.3)] 
                       transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}