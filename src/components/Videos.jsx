import React from 'react';
import { PlayCircle } from 'lucide-react';
import { videos } from '../data/videos';

export default function Videos() {
  return (
    <section id="videos" className="px-6 md:px-12 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          {/* Muted Taupe Label */}
          <p className="uppercase tracking-[0.28em] text-xs text-[#4A443F] font-bold mb-4">
            Case Study Videos
          </p>

          {/* Ebony Clay Heading */}
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-[#635D59] tracking-tight">
            Walkthroughs of my Amazon workflow in action
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {videos.map((video, index) => (
            <div
              key={index}
              /* ✅ MATCHED: Using the Airy Glass code from Skills and Services */
              className="glass-card bg-white/5 border border-white/20 p-6 rounded-[2.5rem] backdrop-blur-xl
                         hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl 
                         transition-all duration-500 ease-out group flex flex-col gap-5"
            >
              {/* Badge Label with Slate Blue accent */}
              <div className="flex items-center gap-2 text-[#4A443F]">
                <PlayCircle className="w-4 h-4 text-[#8DA6A6]" />
                <p className="text-[10px] uppercase tracking-[0.24em] font-bold opacity-80">
                  Video Case Study
                </p>
              </div>

              {/* Ebony Clay Title */}
              <h4 className="text-xl font-bold text-[#4A443F] min-h-[56px] leading-tight">
                {video.title}
              </h4>

              {/* Warm Stone Body Text */}
              <p className="text-sm text-[#635D59] leading-relaxed min-h-[72px] font-medium">
                {video.desc}
              </p>

              {/* Video Container - Rounded to match the card corners */}
              <div className="aspect-video w-full overflow-hidden rounded-2xl shadow-inner bg-black/5">
                <iframe
                  width="100%"
                  height="100%"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allowFullScreen
                  className="rounded-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}