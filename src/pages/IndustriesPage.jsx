import React, { useEffect } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { Factory, CheckCircle2, ArrowRight, FileText, Package } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { industries } from '../data/industriesData';

export const IndustriesPage = () => {
  const { onOpenQuote } = useOutletContext();

  useEffect(() => {
    document.title = 'Industries We Serve | MODUPRO INNOVATION PVT. LTD.';
  }, []);

  return (
    <div className="bg-[#F7F4EF] min-h-screen">
      {/* Header */}
      <section className="bg-[#47704C] text-white py-14 sm:py-20 border-b border-[#38593c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-wider text-white mb-3">
              <Factory className="w-3.5 h-3.5 text-[#D17E3A]" />
              Target Industrial Sectors
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Industries We Serve
            </h1>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              Supplying industrial adhesives, precision tooling, panel processing machinery, and maintenance services across four core manufacturing sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Detailed List */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {industries.map((ind, idx) => (
            <div
              key={ind.slug}
              id={ind.slug}
              className="bg-white rounded-2xl border border-[#E5E0D8] p-6 sm:p-10 shadow-sm space-y-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-[#E5E0D8] pb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-white bg-[#8C460C] px-2.5 py-0.5 rounded">
                      Industry Sector 0{idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-[#47704C] bg-[#47704C]/10 px-2.5 py-0.5 rounded">
                      Commercial B2B Supply
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F241F]">
                    {ind.name}
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-[#8C460C] mt-1">
                    {ind.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => onOpenQuote(ind.name, `Industrial Solutions for ${ind.name}`)}
                    icon={FileText}
                    iconPosition="left"
                  >
                    Request Industry Quote
                  </Button>
                  <Link
                    to={`/industries/${ind.slug}`}
                    className="p-2 rounded-lg border border-[#E5E0D8] text-[#1F241F] hover:bg-[#F7F4EF] text-xs font-semibold"
                  >
                    Details
                  </Link>
                </div>
              </div>

              {/* Overview & Description */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4 bg-[#F7F4EF] rounded-xl p-6 border border-[#E5E0D8] flex flex-col items-center justify-center text-center">
                  <img
                    src={ind.image}
                    alt={ind.name}
                    className="max-h-52 w-auto object-contain drop-shadow-md mb-4"
                  />
                  <span className="text-[11px] font-bold text-[#8C460C] uppercase tracking-wider">
                    Core Formulation & Machinery Supply
                  </span>
                </div>

                <div className="lg:col-span-8 space-y-6">
                  <p className="text-sm text-[#1F241F] leading-relaxed">
                    {ind.overview}
                  </p>

                  {/* Solutions Offered */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#1F241F] mb-3">
                      Supplied Solutions & Engineering Support:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {ind.solutionsOffered.map((sol, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2.5 text-xs text-[#1F241F]">
                          <CheckCircle2 className="w-4 h-4 text-[#47704C] shrink-0 mt-0.5" />
                          <span className="leading-snug">{sol}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Common Applications */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#1F241F] mb-2">
                      Typical Workshop Applications:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {ind.commonApplications.map((app, aIdx) => (
                        <span
                          key={aIdx}
                          className="px-2.5 py-1 rounded bg-[#F7F4EF] text-[#1F241F] text-xs border border-[#E5E0D8]"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Recommended Products */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#1F241F] mb-2">
                      Key Products & Machine References:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {ind.applicableProducts.map((prod, pIdx) => (
                        <span
                          key={pIdx}
                          className="px-2.5 py-1 rounded bg-[#8C460C]/10 text-[#8C460C] font-semibold text-xs border border-[#8C460C]/20"
                        >
                          {prod}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
