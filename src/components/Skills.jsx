import React, { useState } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { heliumSkills } from '../data/skills';

export default function Skills() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="skills" className="px-6 md:px-12 py-24 border-y border-[#C4B9AA]/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.28em] text-xs text-[#4A443F] font-bold mb-4">
            Research Methodology
          </p>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-[#635D59] tracking-tight">
            The tools and workflow behind my product decisions
          </h3>
          <p className="max-w-3xl mx-auto text-[#635D59] text-lg leading-relaxed font-medium">
            I use structured product research, keyword validation, and competitor analysis
            to evaluate opportunities before moving into sourcing and listing optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {heliumSkills.map((skill, index) => (
            <div
              key={index}
              /* ✅ APPLIED: Exact Airy Glass code from Services.jsx */
              className="glass-card bg-white/5 border border-white/20 p-8 rounded-[2.5rem] backdrop-blur-xl
                         hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl 
                         transition-all duration-500 ease-out group relative"
            >
              {/* THE IMAGE CONTAINER (Click to Enlarge) */}
              <div 
                className="aspect-video mb-6 rounded-2xl bg-[#C4B9AA]/10 overflow-hidden 
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
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-xs font-semibold bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
                    Click to Enlarge
                  </span>
                </div>
              </div>

              {/* Badge Label - Ebony Clay */}
              <div className="mb-3 flex items-center gap-2 text-[#4A443F]">
                <CheckCircle2 className="w-4 h-4 text-[#8DA6A6]" />
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-80">
                  {skill.exp}
                </p>
              </div>

              {/* Skill Title - Ebony Clay */}
              <h4 className="font-bold text-xl mb-3 text-[#4A443F]">
                {skill.tool}
              </h4>

              {/* Detail Text - Warm Stone */}
              <p className="text-sm leading-relaxed text-[#635D59] border-l-2 border-[#8DA6A6]/40 pl-4 font-medium">
                {skill.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL SECTION */}
      {isModalOpen && selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 
                     bg-black/90 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative max-w-7xl max-h-[90vh] bg-[#C4B9AA]/20 p-2 rounded-3xl 
                       border border-white/10 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Enlarged Skill Detail" 
              className="rounded-2xl w-full h-full object-contain shadow-xl max-h-[85vh]"
            />
            <button 
              className="absolute top-4 right-4 w-10 h-10 rounded-full 
                         bg-[#F4E7DA] text-[#4A443F] flex items-center justify-center 
                         shadow-lg hover:scale-110 hover:bg-white transition-all z-[110]"
              onClick={() => setIsModalOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}