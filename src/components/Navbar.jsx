import React from 'react';

export default function Navbar({ setView }) {
  return (
    /* ✅ THE FIX: 
       - absolute: Floats the bar OVER the image.
       - top-0 left-0: Pins it to the very top.
       - z-50: Ensures it stays above the photo.
       - bg-transparent: Removes the solid teal block so the photo shows through.
    */
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent px-6 md:px-12 py-8 flex items-center justify-between">
      
      {/* LEFT: BRAND */}
      <h1 className="text-[#FDFBF7] text-xl md:text-3xl font-bold tracking-tight whitespace-nowrap">
        STREAMLINE AND SCALE WITH REE
      </h1>

      {/* RIGHT: NAV */}
      <nav className="hidden md:flex items-center gap-10">
        
        <a href="#about" className="text-[#F5F5F1] text-base font-bold tracking-widest opacity-95 hover:opacity-100 transition hover:scale-105">
         ABOUT
        </a>

  <a href="#services" className="text-[#F5F5F1] text-base font-bold tracking-widest opacity-95 hover:opacity-100 transition hover:scale-105">
    SERVICES
  </a>

  <a href="#skills" className="text-[#F5F5F1] text-base font-bold tracking-widest opacity-95 hover:opacity-100 transition hover:scale-105">
    PROOF
  </a>

  <button
    onClick={() => setView('resume')}
    className="text-[#F5F5F1] text-base font-bold tracking-widest opacity-95 hover:opacity-100 transition hover:scale-105"
  >
    VIEW RESUME
  </button>

  {/* ✅ WORK WITH ME BUTTON: 
      Increased size to text-base and added a soft glow to match your Hero buttons. */}
  <a
    href="#contact"
    className="ml-4 px-8 py-3.5 rounded-full bg-white/10 border border-white/40 text-[#F5F5F1] text-base font-bold tracking-widest hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all backdrop-blur-sm"
  >
    WORK WITH ME
  </a>

      </nav>
    </header>
  );
}