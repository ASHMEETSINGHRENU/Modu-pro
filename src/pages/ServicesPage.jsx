import React, { useEffect } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { Wrench, Shield, CheckCircle2, ArrowRight, Settings, Zap, Cpu, FileText, Phone } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { services } from '../data/servicesData';
import { companyData } from '../data/companyData';

export const ServicesPage = () => {
  const { onOpenQuote } = useOutletContext();

  useEffect(() => {
    document.title = 'Woodworking Machine Services & Maintenance | MODUPRO INNOVATION PVT. LTD.';
  }, []);

  return (
    <div className="bg-[#F7F4EF] min-h-screen">
      {/* Services Header */}
      <section className="bg-[#47704C] text-white py-14 sm:py-20 border-b border-[#38593c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-wider text-white mb-3">
              <Wrench className="w-3.5 h-3.5 text-[#D17E3A]" />
              Engineering & Maintenance Support
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Woodworking Machine Services & Spares
            </h1>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              Trained service engineers handling machine installation, maintenance, troubleshooting, and repair across mechanical, electrical, and computerized systems.
            </p>
          </div>
        </div>
      </section>

      {/* Engineering Pillars Overview */}
      <section className="py-12 bg-white border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-[#E5E0D8] bg-[#F7F4EF]/60 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#47704C]/15 text-[#47704C] flex items-center justify-center">
                  <Settings className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-[#1F241F]">Mechanical Components</h3>
              </div>
              <p className="text-xs text-[#636D64] leading-relaxed">
                Sliding table guide realignments, arbor shaft overhaul, gearbox servicing, feed roller replacement, and pneumatic pressure calibration.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[#E5E0D8] bg-[#F7F4EF]/60 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#8C460C]/15 text-[#8C460C] flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-[#1F241F]">Electrical Subsystems</h3>
              </div>
              <p className="text-xs text-[#636D64] leading-relaxed">
                Glue pot heating elements, temperature controller sensor calibration, heavy contactors, motor overload protection, and control rewiring.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[#E5E0D8] bg-[#F7F4EF]/60 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#D17E3A]/20 text-[#8C460C] flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-[#1F241F]">Computerized & CNC</h3>
              </div>
              <p className="text-xs text-[#636D64] leading-relaxed">
                Diagnostic assistance on PLC modules, CNC motion axes, servo motors, encoder synchronization, and touch screen operator interfaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All 8 Dedicated Services */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            badge="Service Directory"
            title="Complete Workshop Service Offerings"
            subtitle="Explore our 8 specialized service categories designed to maximize machine uptime and precision."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.serviceNumber}
                className="bg-white rounded-2xl border border-[#E5E0D8] p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#47704C] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-white bg-[#47704C] px-2.5 py-1 rounded">
                      Service {service.serviceNumber}
                    </span>
                    <div className="flex gap-1.5">
                      {service.handledComponents.map((comp, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-semibold text-[#1F241F] bg-[#F7F4EF] border border-[#E5E0D8] px-2 py-0.5 rounded"
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#1F241F] mb-2">
                    <Link to={`/services/${service.slug}`} className="hover:text-[#47704C] transition-colors">
                      {service.name}
                    </Link>
                  </h3>
                  <p className="text-xs text-[#636D64] leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Scope of Work */}
                  <div className="space-y-2 border-t border-[#E5E0D8] pt-4 mb-6">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#1F241F]">
                      Key Scope of Support:
                    </h4>
                    {service.scope.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#1F241F]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#47704C] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Applicable Machines */}
                  <div className="text-xs text-[#636D64] bg-[#F7F4EF] p-3 rounded-lg border border-[#E5E0D8]/60">
                    <span className="font-semibold text-[#1F241F]">Supported Equipment: </span>
                    {service.applicableMachinery.join(', ')}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 mt-6 border-t border-[#E5E0D8] flex items-center justify-between">
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-xs font-bold text-[#1F241F] hover:text-[#47704C] inline-flex items-center gap-1.5"
                  >
                    <span>View Service Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => onOpenQuote('Machine Services', service.name)}
                    className="px-4 py-2 rounded-lg bg-[#8C460C] hover:bg-[#703709] text-white text-xs font-semibold transition-colors"
                  >
                    Book Service Visit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Service / Inquiries Banner */}
      <section className="py-14 bg-white border-t border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#47704C] text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D17E3A]">
                Machine Breakdown or Installation Request?
              </span>
              <h3 className="text-2xl font-bold text-white">
                Contact Our Technical Service Engineers
              </h3>
              <p className="text-xs sm:text-sm text-white/80 max-w-xl">
                We coordinate on-site machine service visits for modular furniture and panel manufacturing workshops across Nagpur and surrounding regions.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={`tel:${companyData.contact.phones[0].clean}`}
                className="px-5 py-2.5 rounded-lg bg-white text-[#1F241F] hover:bg-white/90 font-bold text-xs flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#8C460C]" />
                <span>{companyData.contact.phones[0].number}</span>
              </a>
              <button
                onClick={() => onOpenQuote('Machine Services', 'General Machine Breakdown / Installation')}
                className="px-5 py-2.5 rounded-lg bg-[#8C460C] hover:bg-[#703709] text-white font-bold text-xs"
              >
                Request Service Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
