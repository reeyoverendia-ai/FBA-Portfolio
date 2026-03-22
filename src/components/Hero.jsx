import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    // CHANGE 1: Added 'justify-center md:justify-start' to center the card on mobile
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center md:justify-start">
      
      {/* 🖼️ Background Image */}
      <img 
        src="/images/garden.png" 
        alt="Background" 
        // CHANGE 2: Added 'object-right' for mobile to ensure the best part of the garden/sand is visible
        className="absolute inset-0 w-full h-full object-cover object-right md:object-center z-0"
      />

      {/* ✅ THE CUSTOM GLASS CARD */}
      {/* CHANGE 3: Removed 'ml-6' and used 'mx-4 md:ml-16'. Added 'max-w-[90%] md:max-w-xl' */}
      <div className="relative z-20 mx-4 md:ml-16 p-8 md:p-12 max-w-[95%] md:max-w-xl rounded-3xl 
                      bg-[#2D2A26]/20 backdrop-blur-[15px] 
                      border border-[#8E7D62]/40 
                      shadow-[0_10px_30px_rgba(0,0,0,0.1)]
                      text-center md:text-left"> 
        
        {/* HEADING */}
        {/* CHANGE 4: Adjusted text size to 2xl for mobile so words don't overlap */}
        <h1 className="text-2xl md:text-4xl font-extrabold mb-6 text-[#FDFBF7] leading-tight tracking-tight">
          Scale Your Amazon FBA Business <br className="hidden md:block" />
          Through <span className="text-[#C4B9AA]">Clear, Structured Workflow.</span>
        </h1>

        {/* BODY TEXT */}
        {/* CHANGE 5: Centered text margin 'mx-auto' for mobile focus */}
        <p className="max-w-sm mx-auto md:mx-0 text-xs md:text-base text-[#FDFBF7] opacity-90 mb-8 md:mb-10 leading-relaxed font-medium">
          Move beyond guesswork with proven systems for research, sourcing, and listing
          optimization — built for clarity and decision accuracy.
        </p>

        {/* ✅ THE GLOWING ACTION BUTTONS */}
        {/* CHANGE 6: 'flex-col' for tight mobile screens, 'sm:flex-row' for wider phones/tablets */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-8 items-center justify-center md:justify-start">
          
          <a
            href="#videos"
                 className="group px-8 py-3.5 rounded-full 
                 bg-[#8E7D62]/40 border border-[#8E7D62]/70 
                 text-[#FDFBF7] font-bold text-sm 
                 /* STACKED SHADOW: Creates a deep, layered glow */
                 shadow-[0_0_25px_rgba(142,125,98,0.5),_0_0_50px_rgba(142,125,98,0.2)] 
                 transition-all duration-300 hover:scale-105 
                 hover:bg-[#8E7D62]/60 
                 hover:shadow-[0_0_40px_rgba(142,125,98,0.8),_0_0_15px_rgba(253,251,247,0.4)]
                 flex items-center gap-2"
                  >
                 View Case Studies
                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                 </a>

          <a
            href="#contact"
                  className="px-6 py-2 rounded-lg text-[#FDFBF7] font-bold text-sm 
                  /* Subtle base, strong hover */
                  shadow-[0_0_20px_rgba(253,251,247,0.2)] 
                  hover:bg-white/20 
                  hover:shadow-[0_0_35px_rgba(253,251,247,0.5)] 
                  transition-all duration-300"
                  >
                  Contact Me
                  </a>
               </div>
             </div>
          </section>
         );
        }