import React from 'react';
import { Mail, Send, User, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="glass-card rounded-[2rem] overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* LEFT PANEL */}
            <div className="p-10 md:p-12">
              
              {/* ✅ UPDATED: Muted Taupe for the small label */}
              <p className="uppercase tracking-[0.28em] text-sm font-bold text-[#4A443F] mb-5">
                Contact
              </p>

              {/* ✅ UPDATED: Ebony Clay for the main heading */}
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#635D59]">
                Let’s connect
              </h2>

              {/* ✅ UPDATED: Warm Stone for the paragraph */}
              <p className="text-lg mb-10 max-w-lg text-[#635D59] leading-relaxed">
                Tell me what support you need for your Amazon business and I’ll get back to you with a structured, practical next step.
              </p>

              <div className="space-y-6">
                
                {/* EMAIL CARD */}
                <div className="glass-soft rounded-3xl p-6 flex items-start gap-4">
                  <div className="glass-soft rounded-2xl p-4 shrink-0">
                    <Mail className="w-6 h-6 text-[#4A443F]" />
                  </div>
                  <div>
                    {/* Ebony Clay Heading */}
                    <h3 className="text-2xl font-semibold mb-1 text-[#4A443F]">
                      Email
                    </h3>
                    {/* Warm Stone text */}
                    <p className="text-[#635D59]">
                      Best for project inquiries and collaboration
                    </p>
                  </div>
                </div>

                {/* WHAT TO INCLUDE */}
                <div className="glass-soft rounded-3xl p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-[#4A443F]">
                    What to include
                  </h3>
                  <p className="text-[#635D59]">
                    Share your product category, your current challenge, and whether you need help with research, sourcing, or listing optimization.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="p-10 md:p-12">
              <form
                action="https://formspree.io/f/xbdaaqlv"
                method="POST"
                className="space-y-8"
              >
                {/* NAME */}
                <div>
                  <label className="block text-xl font-semibold mb-3 text-[#4A443F]">
                    Name
                  </label>
                  <div className="glass-soft rounded-3xl px-6 py-6 flex items-center gap-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(244,231,218,0.3)] focus-within:scale-[1.02] focus-within:shadow-[0_0_20px_rgba(244,231,218,0.4)]">
                    <User className="w-6 h-6 text-[#4A443F] shrink-0" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                      className="w-full bg-transparent outline-none text-[#4A443F] placeholder:text-[#8E8680]/70"
                    />
                  </div>
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-xl font-semibold mb-3 text-[#4A443F]">
                    Email
                  </label>
                  <div className="glass-soft rounded-3xl px-6 py-6 flex items-center gap-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(244,231,218,0.3)] focus-within:scale-[1.02] focus-within:shadow-[0_0_20px_rgba(244,231,218,0.4)]">
                    <Mail className="w-6 h-6 text-[#4A443F] shrink-0" />
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                      className="w-full bg-transparent outline-none text-[#4A443F] placeholder:text-[#635D59]/70"
                    />
                  </div>
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-xl font-semibold mb-3 text-[#4A443F]">
                    Message
                  </label>
                  <div className="glass-soft rounded-3xl px-6 py-6 flex items-start gap-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(244,231,218,0.3)] focus-within:scale-[1.02] focus-within:shadow-[0_0_20px_rgba(244,231,218,0.4)]">
                    <MessageSquare className="w-6 h-6 text-[#4A443F] shrink-0 mt-1" />
                    <textarea
                      name="message"
                      placeholder="Tell me about your Amazon business..."
                      rows="6"
                      required
                      className="w-full bg-transparent outline-none resize-none text-[#4A443F] placeholder:text-[#635D59]/70"
                    ></textarea>
                  </div>
                </div>

                {/* BUTTON - Kept the Champagne Glow (#F4E7DA) as it pops beautifully against Taupe */}
                <button
                  type="submit"
                  className="glass-soft rounded-3xl px-10 py-5 inline-flex items-center gap-3 text-2xl font-semibold text-[#4A443F] hover:scale-[1.05] hover:shadow-[0_0_25px_rgba(244,231,218,0.4)] transition-all duration-300"
                >
                  Send Message
                  <Send className="w-5 h-5 text-[#4A443F]" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}