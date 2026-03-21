import { useState } from 'react'; // Removed 'React' since it's unused
import './index.css';

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Skills from './components/Skills.jsx';
import Videos from './components/Videos.jsx';
import Results from './components/Results.jsx';
import Foundation from './components/Foundation.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ResumeOnePager from './pages/ResumePage.jsx';

export default function App() {
  const [view, setView] = useState('portfolio');

  if (view === 'resume') {
    return (
       /* ✅ FIXED: Merged into one clean container with the Champagne text color */
         <div className="min-h-screen w-full font-sans text-body">
         <div className="px-6 md:px-10 pt-6">
             <button
            onClick={() => setView('portfolio')}
              className="premium-button inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 bg-[#A7C1C1] text-[#0F1115] hover:scale-105 hover:shadow-[0_0_20px_rgba(167,193,193,0.3)]"
                >
          
            ← Back to Portfolio
          </button>
        </div>

        <div className="pt-4 pb-10">
          <ResumeOnePager />
        </div>
      </div>
    );
  }

  return (
    /* ✅ FIXED: Removed inline background. index.css now controls the look. */
    <div className="min-h-screen w-full font-sans text-body">
      <Navbar setView={setView} />

      <Hero />

      <Services />

      <Skills />

      <Videos />

      <Results />

      <Foundation />

      <Contact />

      <Footer />
    </div>
  );
}