import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Cog, Layers, ArrowRight, Check } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

export const ToolingMachinerySection = ({ onOpenQuote }) => {
  return (
    <section className="py-20 bg-[#F7F4EF] border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Machinery & Tooling"
          title="Precision Woodworking Tools, Machinery & Hardware"
          subtitle="Supplying heavy-duty workshop machinery, diamond & carbide cutting blades, original replacement spares, and hardware fittings."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Woodworking Tools & Custom Tooling */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E0D8] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#8C460C]/10 text-[#8C460C] flex items-center justify-center mb-6">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1F241F] mb-3">Woodworking Tools</h3>
              <p className="text-xs text-[#636D64] leading-relaxed mb-6">
                Supplying precision industrial cutting tools designed for clean chip-free edges on melamine, MDF, and plywood.
              </p>

              <ul className="space-y-2.5 text-xs text-[#1F241F]">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#47704C] shrink-0" />
                  <span>CNC Compression & Profiling Bits</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#47704C] shrink-0" />
                  <span>Multiboring Through & Blind Hole Bits</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#47704C] shrink-0" />
                  <span>TCT Panel Saw Blades (Main & Scoring)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#47704C] shrink-0" />
                  <span>PCD Polycrystalline Diamond Blades</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#8C460C] font-semibold shrink-0" />
                  <span>Customised Tools as per Workshop Drawing</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E5E0D8] flex items-center justify-between">
              <Link
                to="/products?category=woodworking-tools"
                className="text-xs font-bold text-[#8C460C] hover:underline inline-flex items-center gap-1"
              >
                <span>Browse Tooling</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => onOpenQuote('Woodworking Tools', 'Customised Woodworking Tools')}
                className="text-xs text-[#636D64] hover:text-[#1F241F] font-semibold"
              >
                Request Custom Profile
              </button>
            </div>
          </div>

          {/* Card 2: Woodworking Machinery */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E0D8] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#47704C]/10 text-[#47704C] flex items-center justify-center mb-6">
                <Cog className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1F241F] mb-3">Woodworking Machinery</h3>
              <p className="text-xs text-[#636D64] leading-relaxed mb-6">
                Panel processing and furniture machinery engineered for dimensional accuracy and high factory throughput.
              </p>

              <ul className="space-y-2.5 text-xs text-[#1F241F]">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#47704C] shrink-0" />
                  <span>Precision Sliding Table Panel Saws</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#47704C] shrink-0" />
                  <span>Multi Boring Machines (Single & Multi-Head)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#47704C] shrink-0" />
                  <span>Automatic Continuous Edge Banders</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#47704C] shrink-0" />
                  <span>CNC Routers & Nesting Centers</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#47704C] shrink-0" />
                  <span>Hydraulic Cold & Heated Press Machines</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E5E0D8] flex items-center justify-between">
              <Link
                to="/products?category=panel-processing-machines"
                className="text-xs font-bold text-[#47704C] hover:underline inline-flex items-center gap-1"
              >
                <span>Browse Machinery</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => onOpenQuote('Panel Processing Machines', 'Machinery Inquiry')}
                className="text-xs text-[#636D64] hover:text-[#1F241F] font-semibold"
              >
                Request Quotation
              </button>
            </div>
          </div>

          {/* Card 3: PVC Edge Banding & Hardware */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E0D8] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#D17E3A]/15 text-[#8C460C] flex items-center justify-center mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1F241F] mb-3">Edge Banding & Hardware</h3>
              <p className="text-xs text-[#636D64] leading-relaxed mb-6">
                High-impact polymer edge finishing and structural furniture assembly hardware components.
              </p>

              <ul className="space-y-2.5 text-xs text-[#1F241F]">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#47704C] shrink-0" />
                  <span>PVC Edge Banding Tapes (Solid & Woodgrain)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#47704C] shrink-0" />
                  <span>2D & 3D Hydraulic Soft-Close Hinges</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#47704C] shrink-0" />
                  <span>Telescopic Ball-Bearing Drawer Slides</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#47704C] shrink-0" />
                  <span>Minifix CAM Eccentric Connectors</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#47704C] shrink-0" />
                  <span>Nylon Expansion Bushes & Connecting Bolts</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E5E0D8] flex items-center justify-between">
              <Link
                to="/products?category=pvc-edge-banding-hardware"
                className="text-xs font-bold text-[#8C460C] hover:underline inline-flex items-center gap-1"
              >
                <span>Browse Hardware</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => onOpenQuote('PVC Edge Banding & Hardware', 'Hardware Bulk Requirement')}
                className="text-xs text-[#636D64] hover:text-[#1F241F] font-semibold"
              >
                Bulk Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
