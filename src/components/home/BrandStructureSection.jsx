import React from 'react';
import { Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Link } from 'react-router-dom';

export const BrandStructureSection = () => {
  return (
    <section className="py-20 bg-[#F7F4EF] border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Integrated Portfolio"
          title="Brand Structure & Industrial Divisions"
          subtitle="Understanding the relationship between MODUPRO INNOVATION, ADHHESI PRO, LOCKPRO, and our technical tooling divisions."
          centered
        />

        {/* Tree Architecture Visualization */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-[#E5E0D8] p-6 sm:p-10 shadow-sm">
          {/* Root Company Node */}
          <div className="flex flex-col items-center text-center pb-8 border-b border-[#E5E0D8]">
            <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-[#47704C] px-3 py-1 rounded-full mb-3">
              Parent Corporate Entity
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1F241F]">
              MODUPRO INNOVATION PVT. LTD.
            </h3>
            <p className="text-xs text-[#636D64] max-w-md mt-1">
              "Faithfully Delivering Excellence" • Established in the adhesive business in 2015
            </p>
          </div>

          {/* Child Divisions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
            {/* Division 1: ADHHESI PRO */}
            <div className="p-5 rounded-xl border border-[#47704C]/30 bg-[#47704C]/5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#47704C] uppercase tracking-wider">
                  Adhesive Brand Identity
                </span>
                <span className="text-[10px] bg-[#47704C] text-white px-2 py-0.5 rounded font-semibold">
                  Est. 2015
                </span>
              </div>
              <h4 className="text-lg font-bold text-[#1F241F]">ADHHESI PRO</h4>
              <p className="text-xs text-[#636D64] leading-relaxed">
                Core brand for industrial adhesive manufacturing & trading:
              </p>
              <ul className="text-xs text-[#1F241F] space-y-1.5 pt-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#47704C]" />
                  <span>PVAC White Glue</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#47704C]" />
                  <span>Certified & Commercial D3 Adhesives</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#47704C]" />
                  <span>D2 Interior Woodworking Adhesives</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#47704C]" />
                  <span>PVC & High-Gloss Acrylic Adhesives</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#47704C]" />
                  <span>Industrial PUR Reactive Adhesives</span>
                </li>
              </ul>
            </div>

            {/* Division 2: LOCKPRO */}
            <div className="p-5 rounded-xl border border-[#8C460C]/30 bg-[#8C460C]/5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#8C460C] uppercase tracking-wider">
                  Adhesive Product Range
                </span>
                <span className="text-[10px] bg-[#8C460C] text-white px-2 py-0.5 rounded font-semibold">
                  Heavy-Duty Formulations
                </span>
              </div>
              <h4 className="text-lg font-bold text-[#1F241F]">LOCKPRO PRODUCT RANGE</h4>
              <p className="text-xs text-[#636D64] leading-relaxed">
                High-performance adhesive products supplied under the profile:
              </p>
              <ul className="text-xs text-[#1F241F] space-y-1.5 pt-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8C460C]" />
                  <span>Lockpro VUS PUR Adhesives</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8C460C]" />
                  <span>Lockpro WR 3 (D3 Water Resistant)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8C460C]" />
                  <span>Lockpro 808 Industrial Adhesive</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8C460C]" />
                  <span>Lockpro 808 PR Primer & Bonding Agent</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8C460C]" />
                  <span>LockPro 707 Joinery Formulation</span>
                </li>
              </ul>
            </div>

            {/* Division 3: Woodworking Tools & Machinery */}
            <div className="p-5 rounded-xl border border-[#E5E0D8] bg-white space-y-3">
              <span className="text-xs font-bold text-[#1F241F] uppercase tracking-wider block">
                Tooling & Machinery Operations
              </span>
              <h4 className="text-lg font-bold text-[#1F241F]">
                Woodworking Tools & Machinery
              </h4>
              <p className="text-xs text-[#636D64] leading-relaxed">
                Industrial cutting bits, saw blades, and panel processing machines:
              </p>
              <ul className="text-xs text-[#636D64] space-y-1.5 pt-1">
                <li>• CNC Bits, Multiboring Bits, Panel Saw Blades (TCT & PCD)</li>
                <li>• Customised Tools manufactured to customer specifications</li>
                <li>• Sliding Table Panel Saws & Multi-Boring Machinery</li>
                <li>• Automatic Edge Banders & CNC Nesting Routers</li>
                <li>• Hydraulic Cold & Heated Press Machinery</li>
              </ul>
            </div>

            {/* Division 4: Services, Spares & Hardware */}
            <div className="p-5 rounded-xl border border-[#E5E0D8] bg-white space-y-3">
              <span className="text-xs font-bold text-[#1F241F] uppercase tracking-wider block">
                Engineering Support & Hardware
              </span>
              <h4 className="text-lg font-bold text-[#1F241F]">
                Machine Services, Spares & Hardware
              </h4>
              <p className="text-xs text-[#636D64] leading-relaxed">
                On-site engineering, original components, and furniture hardware:
              </p>
              <ul className="text-xs text-[#636D64] space-y-1.5 pt-1">
                <li>• Machine Installation, Scheduled Maintenance & Troubleshooting</li>
                <li>• Mechanical, Electrical & Computerized PLC Repairs</li>
                <li>• Original replacement machine spare parts inventory</li>
                <li>• High-impact PVC Edge Banding Tapes in diverse finishes</li>
                <li>• 2D/3D Hinges, Telescopic Channels, CAMs & Nylon Bushes</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#E5E0D8] text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#8C460C] hover:underline"
            >
              <span>Explore All Products Across Brands</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
