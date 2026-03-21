export default function Foundation() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* ✅ UPDATED: Results-style bold label in Muted Taupe */}
        <p className="uppercase tracking-[0.28em] text-sm font-extrabold text-[#4A443F] mb-5">
          Technical Foundation
        </p>

        {/* ✅ UPDATED: Ebony Clay Heading for strong authority */}
        <h2 className="text-[#635D59] text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          Built on structured QA thinking
        </h2>

        {/* ✅ UPDATED: Warm Stone for elegant body text */}
        <p className="text-[#635D59] text-lg leading-relaxed mb-10 font-medium">
          My background in QA and data validation brings precision, structure, and clarity into every Amazon workflow — from product research to sourcing and listing optimization.
        </p>

        {/* ✅ UPDATED: Switched to the "Airy Glass" texture (5% white + 2.5rem corners) */}
        <div className="glass-card bg-white/5 p-10 rounded-[2.5rem] border border-white/20 shadow-sm backdrop-blur-xl transition-all hover:scale-[1.01]">
          
          {/* Ebony Clay Subheading */}
          <h3 className="text-[#4A443F] text-2xl font-bold mb-4">
            Why this matters
          </h3>

          {/* Warm Stone Detail Text */}
          <p className="text-[#635D59] leading-relaxed font-medium">
            It ensures decisions are based on data, reduces costly mistakes, and improves consistency across all stages of product development.
          </p>
        </div>

      </div>
    </section>
  );
}