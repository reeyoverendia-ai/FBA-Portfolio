export default function Foundation() {
  return (
    // CHANGE 1: Reduced padding for mobile (py-16) vs desktop (py-24)
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Label: Scaled down slightly for mobile */}
        <p className="uppercase tracking-[0.28em] text-[10px] md:text-sm font-extrabold text-[#4A443F] mb-4 md:mb-5">
          Technical Foundation
        </p>

        {/* CHANGE 2: Responsive heading size to prevent awkward word wrapping */}
        <h2 className="text-[#635D59] text-2xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
          Built on structured QA thinking
        </h2>

        {/* CHANGE 3: Balanced body text size for readability */}
        <p className="text-[#635D59] text-base md:text-lg leading-relaxed mb-10 font-medium opacity-90">
          My methodology is rooted in over a decade of Quality Assurance for SAP Financial systems. Whether I am analyzing property data or e-commerce markets, I apply the same rigor for data validation, error-free documentation, and process governance.
        </p>

        {/* THE GLASS CARD */}
        {/* CHANGE 4: Adjusted card padding (p-8) and corners (rounded-[2rem]) for mobile */}
        <div className="glass-card bg-white/5 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-white/20 shadow-sm backdrop-blur-xl transition-all hover:scale-[1.01]">
          
          {/* Subheading: Scaled for mobile */}
          <h3 className="text-[#4A443F] text-xl md:text-2xl font-bold mb-4">
            Why this matters
          </h3>

          <p className="text-[#635D59] text-sm md:text-base leading-relaxed font-medium">
            It ensures decisions are based on data, reduces costly mistakes, and improves consistency across all stages of product development.
          </p>
        </div>

      </div>
    </section>
  );
}
