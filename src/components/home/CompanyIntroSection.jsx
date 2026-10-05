import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Check, Factory, ArrowRight, Building2, MapPin } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { companyData } from '../../data/companyData';

export const CompanyIntroSection = () => {
  return (
    <section className="py-20 bg-[#F7F4EF] border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Industrial Context Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E0D8] shadow-md relative overflow-hidden">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#E5E0D8]">
                <img
                  src="/assets/logo/modu-pro-logo.png"
                  alt="MODUPRO INNOVATION Logo"
                  className="h-14 w-auto object-contain"
                />
                <div>
                  <h3 className="font-bold text-base text-[#1F241F]">MODUPRO INNOVATION</h3>
                  <span className="text-xs text-[#8C460C] font-semibold uppercase tracking-wider block">
                    Private Limited
                  </span>
                </div>
              </div>

              {/* Factual Establishment Highlight */}
              <div className="bg-[#47704C]/10 border border-[#47704C]/25 rounded-xl p-4 mb-6">
                <div className="flex items-start gap-3">
                  <Factory className="w-5 h-5 text-[#47704C] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#1F241F]">
                      Adhesive Business Established in {companyData.establishedYear}
                    </h4>
                    <p className="text-xs text-[#636D64] mt-1 leading-relaxed">
                      Specialized in the manufacturing and trading of PVAC White Glue, D2/D3, and PUR formulations, expanding into comprehensive tooling, machinery, and machine servicing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified Office Location */}
              <div className="space-y-3 text-xs text-[#636D64]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#8C460C] shrink-0 mt-0.5" />
                  <span className="leading-snug">{companyData.contact.address.full}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Company Introduction & Target Industries */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              badge="Company Introduction"
              title="Dedicated Industrial Partner to the Woodworking Sector"
              subtitle="MODUPRO INNOVATION PVT. LTD. operates at the core of India's woodworking and panel manufacturing ecosystem."
            />

            <p className="text-base text-[#1F241F] leading-relaxed">
              We specialize in the manufacturing and trading of <strong>PVAC White Glue</strong> alongside advanced industrial adhesives, precision woodworking tools, panel processing machinery, and replacement spares.
            </p>

            <p className="text-sm text-[#636D64] leading-relaxed">
              Established in the adhesive sector in 2015, our technical operations are structured to deliver dependable bonding chemistry, high-accuracy cutting tools, and on-site machine engineering support to four principal industrial sectors:
            </p>

            {/* The 4 Explicit Sectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#E5E0D8] flex items-start gap-3 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#8C460C]/10 text-[#8C460C] flex items-center justify-center shrink-0 font-bold text-xs">
                  01
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1F241F]">Modular Furniture</h4>
                  <p className="text-xs text-[#636D64] mt-0.5">
                    Adhesives, edge banding, and CNC bits for office & home modular units.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E5E0D8] flex items-start gap-3 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#47704C]/15 text-[#47704C] flex items-center justify-center shrink-0 font-bold text-xs">
                  02
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1F241F]">Modular Kitchens</h4>
                  <p className="text-xs text-[#636D64] mt-0.5">
                    Moisture-resistant D3 & PUR adhesives, 3D soft-close hinges & tooling.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E5E0D8] flex items-start gap-3 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#D17E3A]/15 text-[#8C460C] flex items-center justify-center shrink-0 font-bold text-xs">
                  03
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1F241F]">Door Manufacturers</h4>
                  <p className="text-xs text-[#636D64] mt-0.5">
                    Heavy-duty bonding glue, cold/hot hydraulic press machines, and saw blades.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E5E0D8] flex items-start gap-3 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#1F241F]/10 text-[#1F241F] flex items-center justify-center shrink-0 font-bold text-xs">
                  04
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1F241F]">Woodworking Industries</h4>
                  <p className="text-xs text-[#636D64] mt-0.5">
                    Panel saws, multi-boring units, spares supply, and on-site servicing.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 flex items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#8C460C] hover:text-[#703709] transition-colors"
              >
                <span>Read Full Company Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
