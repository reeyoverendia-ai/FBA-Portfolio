import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const ResumePage = () => {
  const resumeRef = useRef();

 const downloadPDF = async () => {
  const element = resumeRef.current;
  if (!element) return;

  const canvas = await html2canvas(element, {
    scale: 2, // 2 is usually enough for a clear PDF and keeps the file size small
    useCORS: true,
    logging: false,
    backgroundColor: '#ffffff',
    windowWidth: 794, // This is roughly 210mm in pixels at 96dpi
  });

  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF('p', 'mm', 'a4');
  pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);
  pdf.save('Nyree_Jo_Verendia_ATS_Resume.pdf');
};

  const resumeData = {
    name: 'NYREE JO VERENDIA',
    title: 'Amazon FBA Support Apprentice',
    contact: {
      location: 'Calamba, Laguna, Philippines',
      email: 'reeverendia@duck.com',
      website: 'streamlineandscale.vercel.app',
    },
    summary: 'Detail-oriented professional with 14 years of experience...',
    skills: ['Amazon Product Research', 'Supplier Sourcing', 'Listing Optimization', 'Keyword Research', 'Competitor Analysis', 'Inventory Support', 'Data Validation', 'Workflow Documentation'],
    tools: ['Helium 10', 'Amazon Seller Central', 'Canva', 'GitHub', 'SAP FS-CD', 'HP ALM', 'Slack'],
    experience: [
      {
        title: 'Amazon FBA Support',
        company: 'Personal Development',
        date: '2026',
        bullets: [
          'Conduct product research using Helium 10 to evaluate market demand, competition, pricing, and revenue potential.',
          'Support supplier sourcing workflows by reviewing quotations, comparing product specifications, and organizing supplier data.',
          'Assist with Amazon listing optimization through keyword research, competitor analysis, and structured content planning.',
          'Build portfolio case studies that demonstrate research methodology, sourcing analysis, and listing improvement workflows.',
        ],
      },
      {
        title: 'SAP QA Lead / Coordinator',
        company: 'Accenture / HP',
        date: '2011 – 2025',
        bullets: [
          'Led QA coordination across enterprise SAP environments with strong focus on accuracy, validation, and process control.',
          'Supported complex testing and migration initiatives involving multiple systems, teams, and business functions.',
          'Improved workflow quality through structured documentation, test planning, issue tracking, and data preparation.',
          'Maintained quality standards in high-stakes financial systems requiring precision, traceability, and consistent execution.',
        ],
      },
    ],
    certifications: ['ISTQB Certified Tester', 'CTAL Test Analyst'],
    languages: ['English', 'Filipino'],
    portfolioHighlights: [
      'Bamboo Cable Management Box Product Research',
      'Alibaba Supplier Sourcing Comparison',
      'Tent Stakes Listing Optimization Review',
    ],
  };

  return (
    <div className="min-h-screen bg-[#e9ecef] py-4 md:py-8 px-2 md:px-4 flex flex-col items-center">
      
      {/* BUTTON BOX: Stacks on mobile, side-by-side on desktop */}
      <div className="w-full max-w-[210mm] flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <button
          onClick={downloadPDF}
          className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#c58b18] text-white font-semibold shadow hover:opacity-90 active:scale-95 transition"
        >
          Download PDF
        </button>
      </div>

          {/* THE RESUME CONTAINER */}
         <div className="w-full overflow-hidden flex justify-center pb-10 px-2">
         <div
        ref={resumeRef}
        className="bg-white text-[#1f2937] shadow-xl origin-top sm:scale-100 scale-[0.4] sm:w-[210mm] w-[210mm]"
        style={{
        width: '210mm',
        minHeight: '297mm',
        padding: '16mm 18mm', // Use standard padding here
        boxSizing: 'border-box',
        }}
        >
          {/* Header */}
          <header className="border-b border-gray-200 pb-4 mb-6">
            <h1 className="text-[24px] md:text-[30px] font-bold tracking-wide text-[#111827]">
              {resumeData.name}
            </h1>
            <h2 className="text-[16px] md:text-[18px] font-semibold text-[#b7791f] mt-1 uppercase tracking-[0.15em]">
              {resumeData.title}
            </h2>

            <div className="mt-4 text-[11px] md:text-[12px] text-gray-700 flex flex-wrap gap-x-4 md:gap-x-6 gap-y-2">
              <span>{resumeData.contact.location}</span>
              <span>{resumeData.contact.email}</span>
              <span className="break-all">{resumeData.contact.website}</span>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="mb-6">
            <h3 className="text-[13px] font-bold uppercase tracking-wide border-l-4 border-[#c58b18] pl-3 mb-3 text-[#111827]">
              Professional Summary
            </h3>
            <p className="text-[13px] md:text-[14px] leading-6 md:leading-7 text-gray-800">
              {resumeData.summary}
            </p>
          </section>

          {/* Two-Column Layout - Becomes 1 column on mobile to save space */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 mb-6">
            <section>
              <h3 className="text-[13px] font-bold uppercase tracking-wide border-l-4 border-[#c58b18] pl-3 mb-3 text-[#111827]">
                Core Skills
              </h3>
              <ul className="text-[12px] md:text-[13px] leading-6 md:leading-7 text-gray-800">
                {resumeData.skills.map((skill) => (
                  <li key={skill}>• {skill}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-[13px] font-bold uppercase tracking-wide border-l-4 border-[#c58b18] pl-3 mb-3 text-[#111827]">
                Tools & Platforms
              </h3>
              <ul className="text-[12px] md:text-[13px] leading-6 md:leading-7 text-gray-800">
                {resumeData.tools.map((tool) => (
                  <li key={tool}>• {tool}</li>
                ))}
              </ul>
            </section>
          </div>

          {/* Experience */}
          <section className="mb-6">
            <h3 className="text-[13px] font-bold uppercase tracking-wide border-l-4 border-[#c58b18] pl-3 mb-4 text-[#111827]">
              Personal Development & Professional Experience
            </h3>

            {resumeData.experience.map((job, index) => (
              <div key={index} className="mb-5">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-1 mb-2">
                  <div>
                    <h4 className="text-[15px] md:text-[16px] font-bold text-[#111827]">
                      {job.title}
                    </h4>
                    <p className="text-[13px] md:text-[14px] font-semibold text-[#b7791f]">
                      {job.company}
                    </p>
                  </div>
                  <div className="text-[11px] md:text-[12px] font-semibold text-gray-500 italic">
                    {job.date}
                  </div>
                </div>

                <ul className="list-disc ml-5 text-[12px] md:text-[13px] leading-6 md:leading-7 text-gray-800">
                  {job.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Highlights & Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 pt-4 border-t border-gray-200">
            <section>
              <h3 className="text-[13px] font-bold uppercase tracking-wide border-l-4 border-[#c58b18] pl-3 mb-3 text-[#111827]">
                Portfolio Highlights
              </h3>
              <ul className="text-[12px] md:text-[13px] leading-6 md:leading-7 text-gray-800">
                {resumeData.portfolioHighlights.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-[13px] font-bold uppercase tracking-wide border-l-4 border-[#c58b18] pl-3 mb-3 text-[#111827]">
                Additional Information
              </h3>
              <p className="text-[12px] md:text-[13px] leading-6 text-gray-800">
                <strong>Certifications:</strong> {resumeData.certifications.join(', ')}
              </p>
              <p className="text-[12px] md:text-[13px] leading-6 text-gray-800 mt-2">
                <strong>Languages:</strong> {resumeData.languages.join(', ')}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
