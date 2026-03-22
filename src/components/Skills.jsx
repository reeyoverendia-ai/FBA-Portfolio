import React, { useState } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { heliumSkills } from '../data/skills';

export default function Skills() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    // CHANGE 1: Reduced vertical padding on mobile
    <section id="skills" className="px-6 md:px-12 py-16 md:py-24 border-y border-[#C4B9AA]/30">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 px-2">
          <p className="uppercase tracking-[0.28em] text-[10px] md:text-xs text-[#4A443F] font-bold mb-4">
            Research Methodology
          </p>
          {/* CHANGE 2: Responsive heading size */}
          <h3 className="text-2xl md:text-5xl font-bold mb-6 text-[#635D59] tracking-tight leading-tight">
            The tools and workflow behind my product decisions
          </h3>
          <p className="max-w-3xl mx-auto text-[#635D59] text-base md:text-lg leading-relaxed font-medium opacity-90">
            I use structured product research, keyword validation, and competitor analysis
            to evaluate opportunities before moving into sourcing and listing optimization.
          </p>
        </div>

        {/* Grid Container */}
        {/* CHANGE 3: Gap adjusted for mobile (gap-8) vs desktop (gap-10) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {heliumSkills.map((skill, index) => (
            <div
              key={index}
              // CHANGE 4: Padding adjusted for mobile (p-6)
              className="glass-card bg-white/5 border border-white/20 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] backdrop-blur-xl
                         hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl 
                         transition-all duration-500 ease-out group relative"
            >
              {/* THE IMAGE CONTAINER */}
              <div 
                className="aspect-video mb-6 rounded-xl md:rounded-2xl bg-[#C4B9AA]/10 overflow-hidden 
                           shadow-inner cursor-zoom-in relative z-10
                           transition-all duration-300 hover:scale-[1.03]"
                onClick={() => {
                  setSelectedImage(skill.image);
                  setIsModalOpen(true);
                }}
              >
                <img
                  src={skill.image}
                  alt={skill.tool}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* CHANGE 5: Always show a subtle hint on mobile since 'hover' doesn't exist on touch screens */}
                <div className="absolute inset-0 bg-black/5 md:opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-[10px] md:text-xs font-semibold bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
                    Tap to Enlarge
                  </span>
                </div>
              </div>

              {/* Badge Label */}
              <div className="mb-3 flex items-center gap-2 text-[#4A443F]">
                <CheckCircle2 className="w-4 h-4 text-[#8DA6A6]" />
                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold opacity-80">
                  {skill.exp}
                </p>
              </div>

              {/* Skill Title */}
              <h4 className="font-bold text-lg md:text-xl mb-3 text-[#4A443F]">
                {skill.tool}
              </h4>

              {/* Detail Text */}
              <p className="text-xs md:text-sm leading-relaxed text-[#635D59] border-l-2 border-[#8DA6A6]/40 pl-4 font-medium">
                {skill.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL SECTION - Mobile Optimized */}
      {isModalOpen && selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 
                     bg-black/95 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-5xl max-h-[80vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CHANGE 6: Move close button to a more thumb-friendly position or keep it clear */}
            <button 
              className="absolute -top-12 right-0 w-10 h-10 rounded-full 
                         bg-[#F4E7DA] text-[#4A443F] flex items-center justify-center 
                         shadow-lg active:scale-95 z-[110]"
              onClick={() => setIsModalOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            
            <img 
              src={selectedImage} 
              alt="Enlarged Skill Detail" 
              className="rounded-xl w-full h-full object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}