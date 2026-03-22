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
         onClick={() => setIsOpen(false)}
         style={{ 
         color: '#FDFBF7', 
        /* INCREASED OPACITY: We're moving from 0.45 to 0.65 to hide the dark tree background */
        backgroundColor: 'rgba(142, 125, 98, 0.65)', 
        border: '1.5px solid rgba(244, 231, 218, 0.7)', 
        /* STACKED GLOW: One tight gold glow, one wide champagne glow */
        boxShadow: '0 0 20px rgba(142, 125, 98, 0.6), 0 0 40px rgba(244, 231, 218, 0.2)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        textShadow: '0 1px 4px rgba(0,0,0,0.2)'
         }}
        onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(142, 125, 98, 0.85)';
        e.currentTarget.style.boxShadow = '0 0 35px rgba(142, 125, 98, 0.9), 0 0 15px rgba(253, 251, 247, 0.5)';
        }}
        onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(142, 125, 98, 0.65)';
        e.currentTarget.style.boxShadow = '0 0 20px rgba(142, 125, 98, 0.6), 0 0 40px rgba(244, 231, 218, 0.2)';
        }}
        className="ml-4 px-8 py-3 rounded-full transition-all duration-300 
             flex items-center justify-center font-bold text-sm 
             tracking-widest uppercase hover:scale-105 active:scale-95"
              >
         WORK WITH ME
         </a>
       </nav>

      {/* MOBILE OVERLAY MENU (Appears when Menu is clicked) */}
      <div className={`fixed inset-0 z-50 transition-transform duration-300 flex flex-col items-center justify-center gap-10 ${isOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden px-6`}
     style={{ 
       /* Sage Green to Champagne to Deep Sand Gradient */
       background: 'linear-gradient(135deg, #A3B899 0%, #B8AD9E 50%, #C2D1C3 100%)',
     }}>
  
  {/* THE CLOSE BUTTON - Only one Ivory "X", positioned clearly */}
  <button 
    onClick={() => setIsOpen(false)} 
    className="absolute top-8 right-8 p-2 z-[60]"
  >
    <X className="w-8 h-8 !text-[#FDFBF7] drop-shadow-md" />
  </button>

  {/* NAV LINKS - Ivory with a soft shadow for readability */}
  <a href="#about" onClick={() => setIsOpen(false)} 
     style={{ color: '#FDFBF7', textShadow: '0 2px 15px rgba(74, 68, 63, 0.4)' }} 
     className="text-3xl font-bold tracking-[0.2em] uppercase">
    ABOUT
  </a>
  
  <a href="#services" onClick={() => setIsOpen(false)} 
     style={{ color: '#FDFBF7', textShadow: '0 2px 15px rgba(74, 68, 63, 0.4)' }} 
     className="text-3xl font-bold tracking-[0.2em] uppercase">
    SERVICES
  </a>
  
  <a href="#skills" onClick={() => setIsOpen(false)} 
     style={{ color: '#FDFBF7', textShadow: '0 2px 15px rgba(74, 68, 63, 0.4)' }} 
     className="text-3xl font-bold tracking-[0.2em] uppercase">
    PROOF
  </a>
  
  <button 
    onClick={() => { setView('resume'); setIsOpen(false); }} 
    style={{ color: '#FDFBF7', textShadow: '0 2px 15px rgba(74, 68, 63, 0.4)' }} 
    className="text-3xl font-bold tracking-[0.2em] uppercase"
  >
    VIEW RESUME
  </button>

  {/* THE WORK WITH ME BUTTON - Centered Gold Glass */}
  <div className="w-full flex justify-center mt-4">
    <a
      href="#contact"
      onClick={() => setIsOpen(false)}
      style={{ 
        color: '#FDFBF7', 
        backgroundColor: 'rgba(142, 125, 98, 0.5)', 
        border: '1.5px solid rgba(244, 231, 218, 0.7)',
        boxShadow: '0 10px 30px rgba(142, 125, 98, 0.4)'
      }}
      className="px-10 py-4 rounded-full text-center font-bold text-xl tracking-widest uppercase active:scale-95 transition-all"
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