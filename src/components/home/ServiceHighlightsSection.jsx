import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Shield, AlertTriangle, ArrowRight, Settings, Cpu, Zap, Layers } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { services } from '../../data/servicesData';

export const ServiceHighlightsSection = ({ onOpenQuote }) => {
  return (
    <section className="py-20 bg-white border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            badge="Engineering Support"
            title="Woodworking Machine Services & Maintenance"
            subtitle="Trained service engineers handling machine installation, maintenance, troubleshooting, and repair for mechanical, electrical, and computerized components."
            className="mb-0"
          />

          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#47704C] hover:text-[#38593c] transition-colors shrink-0"
          >
            <span>All Services (8 Areas)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Core Engineering Pillars Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="bg-[#F7F4EF] p-4 rounded-xl border border-[#E5E0D8] flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#47704C]/15 text-[#47704C] flex items-center justify-center shrink-0">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1F241F]">Mechanical Systems</h4>
              <p className="text-xs text-[#636D64]">Arbors, gearboxes, bearings, track alignment</p>
            </div>
          </div>

          <div className="bg-[#F7F4EF] p-4 rounded-xl border border-[#E5E0D8] flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#8C460C]/15 text-[#8C460C] flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1F241F]">Electrical Controls</h4>
              <p className="text-xs text-[#636D64]">Heating elements, contactors, wiring harnesses</p>
            </div>
          </div>

          <div className="bg-[#F7F4EF] p-4 rounded-xl border border-[#E5E0D8] flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#D17E3A]/20 text-[#8C460C] flex items-center justify-center shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1F241F]">Computerized & CNC</h4>
              <p className="text-xs text-[#636D64]">PLC controllers, servo drives, digital HMI</p>
            </div>
          </div>
        </div>

        {/* Services Grid (Showing first 6) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service) => (
            <div
              key={service.serviceNumber}
              className="group bg-[#F7F4EF] rounded-xl p-6 border border-[#E5E0D8] hover:border-[#47704C] transition-all hover:bg-white hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#47704C] bg-white border border-[#E5E0D8] px-2 py-0.5 rounded">
                    {service.serviceNumber}
                  </span>
                  <div className="flex gap-1">
                    {service.handledComponents.map((comp, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-white text-[#636D64] px-1.5 py-0.5 rounded border border-[#E5E0D8]/60 font-medium"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#1F241F] group-hover:text-[#47704C] transition-colors mb-2">
                  <Link to={`/services/${service.slug}`}>{service.name}</Link>
                </h3>
                <p className="text-xs text-[#636D64] leading-relaxed mb-4">
                  {service.shortDescription}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E5E0D8] flex items-center justify-between">
                <Link
                  to={`/services/${service.slug}`}
                  className="text-xs font-semibold text-[#1F241F] group-hover:text-[#47704C] transition-colors inline-flex items-center gap-1"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <button
                  type="button"
                  onClick={() => onOpenQuote('Machine Services', service.name)}
                  className="text-xs font-semibold text-[#8C460C] hover:underline"
                >
                  Book Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
