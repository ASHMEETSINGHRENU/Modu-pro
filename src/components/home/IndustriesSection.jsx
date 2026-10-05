import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { industries } from '../../data/industriesData';

export const IndustriesSection = ({ onOpenQuote }) => {
  return (
    <section className="py-20 bg-[#F7F4EF] border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Market Focus"
          title="Industries We Serve"
          subtitle="Supplying tailored adhesive bonding, tooling, machinery, and service solutions across four core manufacturing sectors."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((ind, idx) => (
            <div
              key={ind.slug}
              className="group bg-white rounded-2xl border border-[#E5E0D8] hover:border-[#8C460C] transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8C460C] bg-[#8C460C]/10 px-2.5 py-1 rounded">
                    Sector 0{idx + 1}
                  </span>
                  <span className="text-xs text-[#636D64] font-medium">B2B Supply</span>
                </div>

                <h3 className="text-xl font-bold text-[#1F241F] group-hover:text-[#8C460C] transition-colors mb-2">
                  <Link to={`/industries/${ind.slug}`}>{ind.name}</Link>
                </h3>
                <p className="text-xs text-[#8C460C] font-semibold mb-3">{ind.tagline}</p>
                <p className="text-xs text-[#636D64] leading-relaxed mb-6">
                  {ind.description}
                </p>

                {/* Key Solutions Checklist */}
                <div className="space-y-2 border-t border-[#E5E0D8] pt-4 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#1F241F] block mb-2">
                    Key Integrated Solutions:
                  </span>
                  {ind.solutionsOffered.slice(0, 3).map((sol, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2 text-xs text-[#1F241F]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#47704C] shrink-0 mt-0.5" />
                      <span className="leading-snug">{sol}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-[#E5E0D8] flex items-center justify-between">
                <Link
                  to={`/industries/${ind.slug}`}
                  className="text-xs font-bold text-[#1F241F] group-hover:text-[#8C460C] transition-colors inline-flex items-center gap-1"
                >
                  <span>Industry Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  type="button"
                  onClick={() => onOpenQuote(ind.name, `Industry Solutions for ${ind.name}`)}
                  className="px-3.5 py-1.5 rounded-md bg-[#8C460C] hover:bg-[#703709] text-white text-xs font-semibold transition-colors"
                >
                  Request Solution
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
