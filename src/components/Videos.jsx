import React from 'react';
import { PlayCircle } from 'lucide-react';
import { videos } from '../data/videos';

export default function Videos() {
  return (
    // CHANGE 1: Reduced padding for mobile to keep the flow moving
    <section id="videos" className="px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12 md:mb-16 text-center px-4">
          <p className="uppercase tracking-[0.28em] text-[10px] md:text-xs text-[#4A443F] font-bold mb-4">
            Case Study Videos
          </p>
          {/* CHANGE 2: Responsive Heading size */}
          <h3 className="text-2xl md:text-5xl font-bold mb-6 text-[#635D59] tracking-tight leading-tight">
            Demonstration of Validated Workflows
          </h3>
        </div>

        {/* Grid Container */}
        {/* CHANGE 3: Single column on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {videos.map((video, index) => (
            <div
              key={index}
              // CHANGE 4: Adjusted padding and rounded corners for mobile
              className="glass-card bg-white/5 border border-white/20 p-5 md:p-6 rounded-[2rem] md:rounded-[2.5rem] backdrop-blur-xl
                         hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl 
                         transition-all duration-500 ease-out group flex flex-col gap-4 md:gap-5"
            >
              {/* Badge Label */}
              <div className="flex items-center gap-2 text-[#4A443F]">
                <PlayCircle className="w-4 h-4 text-[#8DA6A6]" />
                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.24em] font-bold opacity-80">
                  Video Case Study
                </p>
              </div>

              {/* Title - CHANGE 5: Reduced min-height for mobile to avoid empty gaps */}
              <h4 className="text-lg md:text-xl font-bold text-[#4A443F] md:min-h-[56px] leading-tight">
                {video.title}
              </h4>

              {/* Body Text - CHANGE 6: Reduced font size and height for mobile */}
              <p className="text-xs md:text-sm text-[#635D59] leading-relaxed md:min-h-[72px] font-medium opacity-90">
                {video.desc}
              </p>

              {/* Video Container */}
              {/* CHANGE 7: aspect-video ensures it never looks 'squashed' regardless of screen width */}
              <div className="aspect-video w-full overflow-hidden rounded-xl md:rounded-2xl shadow-inner bg-black/5">
                <iframe
                  width="100%"
                  height="100%"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allowFullScreen
                  className="rounded-xl md:rounded-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
