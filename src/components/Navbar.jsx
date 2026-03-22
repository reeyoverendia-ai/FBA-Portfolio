import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Import icons for a mobile toggle

export default function Navbar({ setView }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent px-4 md:px-12 py-6 md:py-8 flex items-center justify-between">
      
      {/* LEFT: BRAND - Scaled down for mobile to prevent overlap */}
      <h1 className="text-[#FDFBF7] text-sm sm:text-lg md:text-2xl font-bold tracking-tighter md:tracking-tight whitespace-nowrap z-50">
        STREAMLINE AND SCALE WITH REE
      </h1>

      {/* MOBILE TOGGLE BUTTON (Visible only on small screens) */}
      <button 
        className="md:hidden z-50 text-[#FDFBF7] p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* RIGHT: NAV (Desktop) */}
         <nav className="hidden md:flex items-center gap-8 lg:gap-10">
         <a href="#about" className="!text-[#FDFBF7] font-bold tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hover:text-[#C4B9AA] transition-all">
         ABOUT
         </a>
         <a href="#services" className="!text-[#FDFBF7] font-bold tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hover:text-[#C4B9AA] transition-all">
         SERVICES
         </a>
         <a href="#skills" className="!text-[#FDFBF7] font-bold tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hover:text-[#C4B9AA] transition-all">
         PROOF
         </a>
         <button 
         onClick={() => setView('resume')} 
         className="!text-[#FDFBF7] font-bold tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hover:text-[#C4B9AA] transition-all uppercase"
         >
        VIEW RESUME
       </button>

         {/* WORK WITH ME BUTTON */}
         <a
         href="#contact"
         className="ml-4 px-8 py-3.5 rounded-full bg-black/40 border border-white/40 !text-[#FDFBF7] font-bold tracking-widest hover:bg-black/60 transition-all backdrop-blur-sm shadow-lg"
         >
         WORK WITH ME
         </a>
       </nav>

      {/* MOBILE OVERLAY MENU (Appears when Menu is clicked) */}
      <div className={`fixed inset-0 bg-[#2D2A26] z-40 transition-transform duration-300 flex flex-col items-center justify-center gap-10 ${isOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden px-6`}>
  
  {/* The Links - Using Inline Style to force Ivory */}
  <a href="#about" onClick={() => setIsOpen(false)} style={{ color: '#FDFBF7', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }} className="text-3xl font-bold tracking-[0.2em]">ABOUT</a>
  <a href="#services" onClick={() => setIsOpen(false)} style={{ color: '#FDFBF7', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }} className="text-3xl font-bold tracking-[0.2em]">SERVICES</a>
  <a href="#skills" onClick={() => setIsOpen(false)} style={{ color: '#FDFBF7', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }} className="text-3xl font-bold tracking-[0.2em]">PROOF</a>
  <button 
    onClick={() => { setView('resume'); setIsOpen(false); }} 
    style={{ color: '#FDFBF7', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }} 
    className="text-3xl font-bold tracking-[0.2em] uppercase"
  >
    VIEW RESUME
  </button>

  {/* THE WORK WITH ME GLASS BUTTON (Centered) */}
  <div className="w-full flex justify-center mt-4">
    <a
      href="#contact"
      onClick={() => setIsOpen(false)}
      style={{ color: '#FDFBF7' }} 
      className="px-8 py-3.5 rounded-full border border-[#F4E7DA]/60 bg-white/10
             transition-all duration-300 flex items-center justify-center
             
             /* 1. Base Glow: Stronger presence */
             shadow-[0_0_20px_rgba(244,231,218,0.3)]
             
             /* 2. Hover Glow: Intense Bloom for Desktop */
             hover:shadow-[0_0_35px_rgba(244,231,218,0.7),_0_0_10px_rgba(244,231,218,0.4)] 
             hover:bg-white/25 hover:scale-[1.05]
             
             /* 3. Active Glow: Mobile Tap Burst */
             active:shadow-[0_0_40px_rgba(244,231,218,0.9)]
             active:scale-95 
             backdrop-blur-md font-bold tracking-widest text-base"
                 >
             WORK WITH ME
                  </a>
               </div>
             </div>

      {/* CSS Helper (Add this to your global CSS or keep classes inline) */}
          <style jsx>{`
           .nav-link {
           /* Use solid Ivory, 100% opacity, with a soft shadow for contrast */
           @apply text-[#FDFBF7] text-sm lg:text-base font-bold tracking-[0.15em] 
           drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] 
           hover:text-[#C4B9AA] transition-all duration-300;
            }
  
             .mobile-nav-link {
           /* Large Ivory text for the mobile menu */
           @apply text-[#FDFBF7] text-3xl font-bold tracking-[0.2em] 
           drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)];
          }
        `}</style>
    </header>
  );
}