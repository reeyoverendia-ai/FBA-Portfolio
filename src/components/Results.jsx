export default function Results() {
  const results = [
    { value: "Strong Demand Signals", label: "Validated product demand and sales potential" },
    { value: "Optimized Keywords", label: "Improved visibility through keyword structuring" },
    { value: "Structured Decisions", label: "Reduced guesswork using data-driven workflows" },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* ✅ FIXED: Larger, bolder, and spaced out */}
        <p className="uppercase tracking-[0.28em] text-sm font-extrabold text-[#4A443F] mb-5">
           Results
         </p>

        <h2 className="text-heading text-3xl md:text-5xl font-bold mb-6 text-[#8E8680]">
          Structured outcomes, not guesswork
        </h2>

        <p className="text-body max-w-3xl mx-auto mb-14">
          Each case study reflects a systematic, data-driven approach to Amazon FBA growth.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {results.map((item, i) => (
            <div key={i} className="glass-card p-8 rounded-2xl">

              <h3 className="text-heading text-2xl font-bold mb-3">
                {item.value}
              </h3>

              <p className="text-body">
                {item.label}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}