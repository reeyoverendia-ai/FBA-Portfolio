import React, { useState } from 'react';
import { Mail, Send, User, MessageSquare, CheckCircle } from 'lucide-react';

export default function Contact() {
  // ✅ MOVED INSIDE: State must be inside the component
  const [submitted, setSubmitted] = useState(false);

  // ✅ MOVED INSIDE: Logic must be inside the component
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="glass-card rounded-[2.5rem] overflow-hidden bg-white/5 backdrop-blur-xl border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* LEFT PANEL */}
            <div className="p-8 md:p-12 text-center md:text-left">
              <p className="uppercase tracking-[0.28em] text-[10px] md:text-sm font-bold text-[#4A443F] mb-4">
                Contact
              </p>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#635D59] leading-tight">
                Let’s connect
              </h2>
              <p className="text-base md:text-lg mb-10 max-w-lg mx-auto md:mx-0 text-[#635D59] leading-relaxed opacity-90">
                Tell me what support you need for your business and I’ll get back to you with a structured, practical next step.
              </p>

              <div className="space-y-4 md:space-y-6">
                <div className="glass-soft rounded-[2rem] p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                  <div className="glass-soft rounded-2xl p-4 shrink-0 bg-[#F4E7DA]/30">
                    <Mail className="w-6 h-6 text-[#4A443F]" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-1 text-[#4A443F]">Email</h3>
                    <p className="text-sm text-[#635D59]">Best for project inquiries and collaboration</p>
                  </div>
                </div>

                <div className="glass-soft rounded-[2rem] p-6 text-center sm:text-left">
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#4A443F]">What to include</h3>
                  <p className="text-sm text-[#635D59] leading-relaxed">
                    Share your product category, your current challenge, and whether you need help with research, sourcing, or listing optimization.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="p-8 md:p-12 bg-white/5 border-t md:border-t-0 md:border-l border-white/10">
              {submitted ? (
                /* 1. THE THANK YOU CARD */
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 min-h-[400px]">
                  <div className="w-20 h-20 rounded-full bg-[#F4E7DA] flex items-center justify-center shadow-[0_0_30px_rgba(244,231,218,0.5)]">
                    <CheckCircle className="w-10 h-10 text-[#4A443F]" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#4A443F]">Message Sent!</h3>
                  <p className="text-[#635D59] max-w-xs mx-auto leading-relaxed">
                    Thank you, Nyree will get back to you with a structured plan shortly.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-sm font-bold text-[#8E7D62] underline underline-offset-4 hover:text-[#4A443F] transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                /* 2. THE FORM */
                <form
                  action="https://formspree.io/f/xbdaaqlv"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-6 md:space-y-8"
                >
                  <div>
                    <label className="block text-lg md:text-xl font-semibold mb-3 text-[#4A443F]">Name</label>
                    <div className="glass-soft rounded-2xl md:rounded-3xl px-5 py-4 flex items-center gap-4 
                     transition-all duration-300 
                     /* 1. Base Glow: Always visible on mobile */
                     shadow-[0_0_10px_rgba(244,231,218,0.2)]
                     /* 2. Hover Glow: For Desktop */
                     hover:shadow-[0_0_25px_rgba(244,231,218,0.6)] 
                     /* 3. Focus/Active Glow: For Mobile Taps and Typing */
                     focus-within:shadow-[0_0_25px_rgba(244,231,218,0.6)]
                     focus-within:scale-[1.01] 
                     bg-white/5 focus-within:bg-white/10">
                      <User className="w-5 h-5 text-[#4A443F]" />
                      <input type="text" name="name" placeholder="Your name" required className="w-full bg-transparent outline-none text-[#4A443F] text-base" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg md:text-xl font-semibold mb-3 text-[#4A443F]">Email</label>
                    <div className="glass-soft rounded-2xl md:rounded-3xl px-5 py-4 flex items-center gap-4 
                       transition-all duration-300 
                       /* 1. Base Glow: Always visible on mobile */
                      shadow-[0_0_10px_rgba(244,231,218,0.2)]
                      /* 2. Hover Glow: For Desktop */
                      hover:shadow-[0_0_25px_rgba(244,231,218,0.6)] 
                      /* 3. Focus/Active Glow: For Mobile Taps and Typing */
                      focus-within:shadow-[0_0_25px_rgba(244,231,218,0.6)]
                      focus-within:scale-[1.01] 
                      bg-white/5 focus-within:bg-white/10">
                      <input type="email" name="email" placeholder="you@example.com" required className="w-full bg-transparent outline-none text-[#4A443F] text-base" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg md:text-xl font-semibold mb-3 text-[#4A443F]">Message</label>
                    <div className="glass-soft rounded-2xl md:rounded-3xl px-5 py-4 flex items-center gap-4 
                      transition-all duration-300 
                      /* 1. Base Glow: Always visible on mobile */
                      shadow-[0_0_10px_rgba(244,231,218,0.2)]
                      /* 2. Hover Glow: For Desktop */
                      hover:shadow-[0_0_25px_rgba(244,231,218,0.6)] 
                      /* 3. Focus/Active Glow: For Mobile Taps and Typing */
                      focus-within:shadow-[0_0_25px_rgba(244,231,218,0.6)]
                      focus-within:scale-[1.01] 
                      bg-white/5 focus-within:bg-white/10">
                      <MessageSquare className="w-5 h-5 text-[#4A443F] mt-1" />
                      <textarea name="message" placeholder="Tell me about your Amazon business..." rows="5" required className="w-full bg-transparent outline-none resize-none text-[#4A443F] text-base"></textarea>
                    </div>
                  </div>

                  <div className="flex justify-center md:justify-start">
                    <button
                      type="submit"
                      className="w-full sm:w-auto glass-soft rounded-full px-10 py-4 md:py-5 
                      inline-flex justify-center items-center gap-3 
                      text-xl md:text-2xl font-semibold text-[#4A443F] 
                      bg-[#F4E7DA]/40 border border-[#F4E7DA]/60
                      transition-all duration-300 active:scale-95
             
                      /* High-Intensity Champagne Glow */
                      shadow-[0_0_25px_rgba(244,231,218,0.3)]
                      hover:bg-[#F4E7DA]/60 
                      hover:shadow-[0_0_45px_rgba(244,231,218,0.8),_0_0_15px_rgba(255,255,255,0.5)] 
                      hover:scale-[1.05]"
                       >
                         Send Message
                      <Send className="w-5 h-5 text-[#4A443F]" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
