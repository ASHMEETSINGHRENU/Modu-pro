import React, { useEffect } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { ShieldCheck, Factory, Wrench, Layers, MapPin, Phone, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { BrandHierarchyBadge } from '../components/common/BrandHierarchyBadge';
import { Button } from '../components/common/Button';
import { companyData } from '../data/companyData';

export const AboutPage = () => {
  const { onOpenQuote } = useOutletContext();

  useEffect(() => {
    document.title = 'About Us | MODUPRO INNOVATION PVT. LTD.';
  }, []);

  return (
    <div className="bg-[#F7F4EF]">
      {/* Hero Header */}
      <section className="bg-[#47704C] text-white py-16 sm:py-20 border-b border-[#38593c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-wider text-white mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D17E3A]" />
              Company Profile
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              About MODUPRO INNOVATION PVT. LTD.
            </h1>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed">
              Industrial manufacturing and trading partner for woodworking adhesives, precision cutting tools, panel processing machinery, and engineering service support.
            </p>
          </div>
        </div>
      </section>

      {/* Main Overview Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                badge="Background & Heritage"
                title="Manufacturing & Trading of PVAC White Glue Since 2015"
                subtitle="Rooted in specialized chemical bonding and expanding to cover the complete machinery and tooling requirements of modern woodworking facilities."
              />

              <div className="prose text-sm text-[#1F241F] space-y-4 leading-relaxed">
                <p>
                  <strong>MODUPRO INNOVATION PVT. LTD.</strong> is an established industrial solutions provider headquartered in Nagpur, Maharashtra. The company's core adhesive operations were established in <strong>2015</strong> with a primary focus on the manufacturing and trading of <strong>PVAC White Glue</strong> under our proprietary brand identities.
                </p>
                <p>
                  Over the years, to address the practical demands of modular panel furniture units and timber factories, MODUPRO expanded its portfolio into a comprehensive ecosystem encompassing:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#636D64]">
                  <li><strong>Industrial Adhesives:</strong> PVAC White Glue, Certified D3, Commercial D3, D2, PVC, Acrylic, and reactive PUR adhesives under <strong>ADHHESI PRO</strong> and <strong>LOCKPRO</strong>.</li>
                  <li><strong>Woodworking Tools:</strong> CNC router bits, multiboring drill bits, panel processing tools, TCT and PCD panel saw blades, and tailored customised tools.</li>
                  <li><strong>Panel Processing Machinery:</strong> Precision sliding table panel saws, multi-boring machines, hydraulic cold presses, automatic continuous edge banders, CNC nesting routers, and press units.</li>
                  <li><strong>Machine Services & Spares:</strong> On-site machine installation, structured maintenance routines, operational troubleshooting, mechanical/electrical/computerized repairs, and direct-fit spares.</li>
                  <li><strong>PVC Edge Banding & Hardware:</strong> High-impact polymer edge banding tapes, 2D/3D concealed hinges, telescopic drawer slides, minifix CAMs, and assembly hardware.</li>
                </ul>
                <p>
                  Our tagline, <em>"Faithfully Delivering Excellence,"</em> reflects our disciplined commitment to dependable product delivery, technical honesty, and hands-on client support.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button
                  variant="primary"
                  size="md"
                  onClick={onOpenQuote}
                >
                  Request Company Quotation
                </Button>
                <Button
                  to="/products"
                  variant="outline"
                  size="md"
                >
                  View Product Catalog
                </Button>
              </div>
            </div>

            {/* Right Card: Fact Box */}
            <div className="lg:col-span-5">
              <div className="bg-[#F7F4EF] rounded-2xl p-6 sm:p-8 border border-[#E5E0D8] space-y-6">
                <div className="flex items-center gap-4 pb-4 border-b border-[#E5E0D8]">
                  <img
                    src="/assets/logo/modu-pro-logo.png"
                    alt="MODUPRO INNOVATION Logo"
                    className="h-12 w-auto object-contain"
                  />
                  <div>
                    <h4 className="font-bold text-sm text-[#1F241F]">MODUPRO INNOVATION</h4>
                    <span className="text-xs text-[#8C460C] font-semibold">Corporate Identity</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Factory className="w-5 h-5 text-[#8C460C] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-xs text-[#1F241F] uppercase tracking-wider">
                        Core Manufacturing
                      </h5>
                      <p className="text-xs text-[#636D64] mt-0.5">
                        PVAC White Glue, D2/D3 water-resistant adhesives, and PUR formulations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#47704C] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-xs text-[#1F241F] uppercase tracking-wider">
                        Establishment Year
                      </h5>
                      <p className="text-xs text-[#636D64] mt-0.5">
                        Adhesive business established in 2015.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Wrench className="w-5 h-5 text-[#D17E3A] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-xs text-[#1F241F] uppercase tracking-wider">
                        Engineering Services
                      </h5>
                      <p className="text-xs text-[#636D64] mt-0.5">
                        Service engineers handling mechanical, electrical, and computerized machine components.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#8C460C] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-xs text-[#1F241F] uppercase tracking-wider">
                        Registered Depot & Office
                      </h5>
                      <p className="text-xs text-[#636D64] mt-0.5 leading-snug">
                        {companyData.contact.address.full}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Structure & Brand Architecture Section */}
      <section className="py-16 sm:py-20 bg-[#F7F4EF] border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Brand Architecture"
            title="Unified Brand Structure"
            subtitle="MODUPRO INNOVATION PVT. LTD. operates through specialized brand identities and operational divisions."
            centered
          />

          <BrandHierarchyBadge />
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Client Base"
            title="Sectors We Support"
            subtitle="Supplying certified solutions to four core manufacturing industries as outlined in our corporate profile."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-[#E5E0D8] bg-[#F7F4EF]/50 hover:bg-white transition-all shadow-xs">
              <span className="text-xs font-bold text-[#8C460C] block mb-2">01</span>
              <h4 className="font-bold text-base text-[#1F241F] mb-1.5">Modular Furniture</h4>
              <p className="text-xs text-[#636D64] leading-relaxed">
                Workstations, cabinets, wardrobes, and knock-down furniture manufacturing.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[#E5E0D8] bg-[#F7F4EF]/50 hover:bg-white transition-all shadow-xs">
              <span className="text-xs font-bold text-[#47704C] block mb-2">02</span>
              <h4 className="font-bold text-base text-[#1F241F] mb-1.5">Modular Kitchens</h4>
              <p className="text-xs text-[#636D64] leading-relaxed">
                Moisture-resistant D3 & PUR adhesives, acrylic shutter bonding, and 3D hinges.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[#E5E0D8] bg-[#F7F4EF]/50 hover:bg-white transition-all shadow-xs">
              <span className="text-xs font-bold text-[#D17E3A] block mb-2">03</span>
              <h4 className="font-bold text-base text-[#1F241F] mb-1.5">Door Manufacturers</h4>
              <p className="text-xs text-[#636D64] leading-relaxed">
                Flush door core assembly, hydraulic cold/hot pressing, and sizing saw blades.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[#E5E0D8] bg-[#F7F4EF]/50 hover:bg-white transition-all shadow-xs">
              <span className="text-xs font-bold text-[#1F241F] block mb-2">04</span>
              <h4 className="font-bold text-base text-[#1F241F] mb-1.5">Woodworking Industries</h4>
              <p className="text-xs text-[#636D64] leading-relaxed">
                Timber mills, panel processing plants, and commercial architectural joinery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Approach & Engineering Commitment */}
      <section className="py-16 sm:py-20 bg-[#F7F4EF] border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Engineering Philosophy"
            title="Our Technical Approach"
            subtitle="Focused on practical factory reliability, verified formulations, and responsive on-site technical service."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-[#E5E0D8] shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#8C460C]/10 text-[#8C460C] flex items-center justify-center font-bold text-sm mb-4">
                01
              </div>
              <h4 className="font-bold text-base text-[#1F241F] mb-2">Formulation Integrity</h4>
              <p className="text-xs text-[#636D64] leading-relaxed">
                Our PVAC White Glue and LOCKPRO formulations are manufactured to maintain consistent viscosity, balanced open time, and moisture resistance under Indian workshop climate conditions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E5E0D8] shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#47704C]/10 text-[#47704C] flex items-center justify-center font-bold text-sm mb-4">
                02
              </div>
              <h4 className="font-bold text-base text-[#1F241F] mb-2">Multi-Discipline Engineering</h4>
              <p className="text-xs text-[#636D64] leading-relaxed">
                Our service technicians are trained across mechanical drives, electrical heating circuits, and computerized CNC/PLC controllers, providing full troubleshooting for workshop machines.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E5E0D8] shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#D17E3A]/20 text-[#8C460C] flex items-center justify-center font-bold text-sm mb-4">
                03
              </div>
              <h4 className="font-bold text-base text-[#1F241F] mb-2">Custom Tooling Capability</h4>
              <p className="text-xs text-[#636D64] leading-relaxed">
                Beyond standard catalog tooling, we manufacture customised cutter profiles and specialized panel saw blades tailored directly to our clients' workshop machinery specifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-[#1F241F] mb-3">
            Partner With MODUPRO INNOVATION Today
          </h3>
          <p className="text-sm text-[#636D64] mb-6 max-w-xl mx-auto">
            Discuss your workshop requirements, request a product sample, or schedule an engineer machine inspection with our Nagpur team.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="primary"
              size="md"
              onClick={onOpenQuote}
            >
              Request a Quotation
            </Button>
            <Button
              to="/contact"
              variant="outline"
              size="md"
            >
              Contact Office
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
