import React from 'react';
import { Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Link } from 'react-router-dom';

export const BrandStructureSection = () => {
  return (
    <section className="py-20 bg-[#F7F4EF] border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Company & Brand Structure"
          title="MODUPRO Brand Hierarchy"
          subtitle="MODUPRO is our main brand and primary category. All products and services are structured under 5 specialized sub-categories."
          centered
        />

        {/* Tree Architecture Visualization */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-[#E5E0D8] p-6 sm:p-10 shadow-sm">
          {/* Root Company Node */}
          <div className="flex flex-col items-center text-center pb-8 border-b border-[#E5E0D8]">
            <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-[#8C460C] px-3.5 py-1 rounded-full mb-3 shadow-sm">
              Main Brand & Parent Company
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1F241F]">
              MODUPRO INNOVATION PVT. LTD.
            </h3>
            <p className="text-xs text-[#636D64] max-w-lg mt-1 font-medium">
              "Faithfully Delivering Excellence" • Manufacturing & trading operations established in 2015 • Nagpur, Maharashtra
            </p>
          </div>

          {/* Child Divisions Grid: 5 Sub-Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
            {/* Sub-Category 1: ADHHESI PRO */}
            <div className="p-5 rounded-xl border border-[#47704C]/30 bg-[#47704C]/5 space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#47704C] uppercase tracking-wider">
                    Sub-Category 01
                  </span>
                  <span className="text-[10px] bg-[#47704C] text-white px-2 py-0.5 rounded font-semibold">
                    Product Available: Yes
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#1F241F] mt-1">1. Adhhesi pro</h4>
                <p className="text-xs text-[#636D64] leading-relaxed">
                  Manufacturing of PVAC white glue established in 2015, supplying to modular furniture, kitchens, doors, and woodworking industries:
                </p>
                <ul className="text-xs text-[#1F241F] space-y-1.5 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#47704C] shrink-0" />
                    <span>PVAC White Glue</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#47704C] shrink-0" />
                    <span>Certified D3 & Commercial D3</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#47704C] shrink-0" />
                    <span>D2 Interior Adhesives</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#47704C] shrink-0" />
                    <span>PVC / Acrylic Adhesives</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#47704C] shrink-0" />
                    <span>PUR Adhesives (Lockpro Range)</span>
                  </li>
                </ul>
              </div>
              <div className="pt-3 border-t border-[#47704C]/20">
                <Link
                  to="/products?category=adhhesi-pro"
                  className="text-xs font-bold text-[#47704C] hover:underline inline-flex items-center gap-1"
                >
                  <span>Explore Adhhesi Pro</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Sub-Category 2: Wood working tools */}
            <div className="p-5 rounded-xl border border-[#8C460C]/30 bg-[#8C460C]/5 space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#8C460C] uppercase tracking-wider">
                    Sub-Category 02
                  </span>
                  <span className="text-[10px] bg-[#8C460C] text-white px-2 py-0.5 rounded font-semibold">
                    Product Available: Yes
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#1F241F] mt-1">2. Wood working tools</h4>
                <p className="text-[11px] font-semibold text-[#8C460C]">
                  Edge banding, CNC, Panel saw, cold/hot press machines, etc.
                </p>
                <p className="text-xs text-[#636D64] leading-relaxed">
                  Leading supplier of woodworking tools & customised tools:
                </p>
                <ul className="text-xs text-[#1F241F] space-y-1.5 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8C460C] shrink-0" />
                    <span>CNC Bits (Compression, Up/Down)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8C460C] shrink-0" />
                    <span>Multiboring Bits (Blind & Through)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8C460C] shrink-0" />
                    <span>Panel Processing Tools</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8C460C] shrink-0" />
                    <span>Panel Saw Blades (TCT & PCD)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8C460C] shrink-0" />
                    <span>Customised Tools as per Drawing</span>
                  </li>
                </ul>
              </div>
              <div className="pt-3 border-t border-[#8C460C]/20">
                <Link
                  to="/products?category=woodworking-tools"
                  className="text-xs font-bold text-[#8C460C] hover:underline inline-flex items-center gap-1"
                >
                  <span>Explore Tooling</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Sub-Category 3: Panel processing machines */}
            <div className="p-5 rounded-xl border border-[#E5E0D8] bg-white space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#1F241F] uppercase tracking-wider">
                    Sub-Category 03
                  </span>
                  <span className="text-[10px] bg-[#47704C] text-white px-2 py-0.5 rounded font-semibold">
                    Product Available: Yes
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#1F241F] mt-1">3. Panel processing machines</h4>
                <p className="text-xs text-[#636D64] leading-relaxed">
                  Supplying heavy-duty industrial panel processing machinery:
                </p>
                <ul className="text-xs text-[#636D64] space-y-1.5 pt-2">
                  <li>• PANEL SAW (Sliding Table)</li>
                  <li>• MULTI BORING (Single & Multi Head)</li>
                  <li>• COLD PRESS (Uniform Hydraulic)</li>
                  <li>• AUTOMATIC EDGE BANDER</li>
                  <li>• CNC ROUTER & Nesting Centers</li>
                  <li>• Cold / Hot Press Machinery</li>
                </ul>
              </div>
              <div className="pt-3 border-t border-[#E5E0D8]">
                <Link
                  to="/products?category=panel-processing-machines"
                  className="text-xs font-bold text-[#8C460C] hover:underline inline-flex items-center gap-1"
                >
                  <span>Explore Machinery</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Sub-Category 4: PVC edge banding tapes and hardware */}
            <div className="p-5 rounded-xl border border-[#E5E0D8] bg-white space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#1F241F] uppercase tracking-wider">
                    Sub-Category 04
                  </span>
                  <span className="text-[10px] bg-[#47704C] text-white px-2 py-0.5 rounded font-semibold">
                    Product Available: Yes
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#1F241F] mt-1">
                  4. PVC edge banding tapes & hardware
                </h4>
                <p className="text-xs text-[#636D64] leading-relaxed">
                  Trading of PVC edge banding rolls and architectural furniture hardware:
                </p>
                <ul className="text-xs text-[#636D64] space-y-1.5 pt-2">
                  <li>• PVC Tape (Solid & Woodgrain Finishes)</li>
                  <li>• 2D Hinges (Concealed Cabinet Hinges)</li>
                  <li>• 3D Hinges (Soft-Close Hydraulic)</li>
                  <li>• Telescopic Channels (Drawer Runners)</li>
                  <li>• 6 GMS CAM Connectors</li>
                  <li>• Nylon Bush & Connecting Bolts</li>
                </ul>
              </div>
              <div className="pt-3 border-t border-[#E5E0D8]">
                <Link
                  to="/products?category=pvc-edge-banding-hardware"
                  className="text-xs font-bold text-[#8C460C] hover:underline inline-flex items-center gap-1"
                >
                  <span>Explore Edge Banding & Hardware</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Sub-Category 5: Panel processing machines, and its spares */}
            <div className="p-5 rounded-xl border border-[#47704C]/30 bg-[#47704C]/5 space-y-3 flex flex-col justify-between md:col-span-2 lg:col-span-2">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#47704C] uppercase tracking-wider">
                    Sub-Category 05
                  </span>
                  <span className="text-[10px] bg-[#47704C] text-white px-2 py-0.5 rounded font-semibold">
                    Product Available: Yes
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#1F241F] mt-1">
                  5. Panel processing machines, and its spares
                </h4>
                <p className="text-xs text-[#47704C] font-medium">
                  Shares hardware, machinery spares and engineering field service solutions
                </p>
                <p className="text-xs text-[#636D64] leading-relaxed mt-1">
                  Service of woodworking machines & sales of spares of woodworking machines of all makes. Service engineers installing, maintaining, troubleshooting, and repairing mechanical, electrical, and computerized components:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#1F241F]">
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#47704C] shrink-0" />
                      <span>Woodworking Machine Spares (All Makes)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#47704C] shrink-0" />
                      <span>Mechanical Spares (Bearings, Rollers, Tracks)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#47704C] shrink-0" />
                      <span>Electrical & Heating Spares</span>
                    </li>
                  </ul>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#47704C] shrink-0" />
                      <span>Computerized CNC, PLC & Servo Spares</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#47704C] shrink-0" />
                      <span>Field Engineering Service Support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#47704C] shrink-0" />
                      <span>Installation, Maintenance & Repair</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-3 border-t border-[#47704C]/20 flex items-center justify-between">
                <Link
                  to="/products?category=machine-spares-services"
                  className="text-xs font-bold text-[#47704C] hover:underline inline-flex items-center gap-1"
                >
                  <span>Explore Machines & Spares</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <Link
                  to="/services"
                  className="text-xs font-semibold text-[#636D64] hover:text-[#1F241F]"
                >
                  View Machine Servicing
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#E5E0D8] text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#8C460C] hover:underline"
            >
              <span>Explore All Products Across All 5 Categories</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
