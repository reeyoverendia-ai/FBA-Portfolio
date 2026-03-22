export default function Results() {
  const results = [
    { value: "Strong Demand Signals", label: "Validated product demand and sales potential" },
    { value: "Optimized Keywords", label: "Improved visibility through keyword structuring" },
    { value: "Structured Decisions", label: "Reduced guesswork using data-driven workflows" },
  ];

  return (
    // CHANGE 1: Adjusted vertical padding for a tighter mobile flow
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <p className="uppercase tracking-[0.28em] text-[10px] md:text-sm font-extrabold text-[#4A443F] mb-4 md:mb-5">
          Results
        </p>

        {/* CHANGE 2: Responsive heading size to prevent awkward line breaks */}
        <h2 className="text-2xl md:text-5xl font-bold mb-6 text-[#8E8680] leading-tight">
          Structured outcomes, not guesswork
        </h2>

        <p className="text-[#635D59] text-sm md:text-lg max-w-3xl mx-auto mb-10 md:mb-14 opacity-90">
          Each case study reflects a systematic, data-driven approach to Amazon FBA growth.
        </p>

        {/* CHANGE 3: Grid stacks on mobile (grid-cols-1) and spreads on desktop (md:grid-cols-3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {results.map((item, i) => (
            <div 
              key={i} 
              // CHANGE 4: Applied the 'Airy Glass' look and adjusted padding for mobile
              className="glass-card bg-white/5 border border-white/20 p-6 md:p-8 rounded-[2rem] backdrop-blur-xl
                         hover:scale-[1.02] transition-all duration-300 shadow-sm"
            >
              {/* CHANGE 5: Adjusted font size for mobile impact */}
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#4A443F] tracking-tight">
                {item.value}
              </h3>

              <p className="text-[#635D59] text-xs md:text-base leading-relaxed font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}