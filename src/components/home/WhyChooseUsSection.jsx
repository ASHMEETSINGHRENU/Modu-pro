import React from 'react';
import { Layers, ShieldCheck, Wrench, Settings, MapPin, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const WhyChooseUsSection = () => {
  const points = [
    {
      icon: Layers,
      title: 'Integrated Single-Source Partner',
      description: 'Streamline procurement by sourcing industrial adhesives, diamond cutting blades, panel machinery, spares, and hardware through one technical supplier.',
    },
    {
      icon: ShieldCheck,
      title: 'Adhesive Operations Established in 2015',
      description: 'Manufacturing & trading of PVAC White Glue, certified D3, and PUR formulations developed specifically for demanding Indian woodworking climates.',
    },
    {
      icon: Wrench,
      title: 'Trained Machine Service Engineers',
      description: 'Dedicated field engineers providing on-site installation, periodic preventive maintenance, electrical repairs, and computerized troubleshooting.',
    },
    {
      icon: Settings,
      title: 'Customised Woodworking Tooling',
      description: 'Capability to supply custom-engineered router bits, profile cutters, and saw blades manufactured to exact workshop drawings.',
    },
    {
      icon: CheckCircle2,
      title: 'Direct-Fit Replacement Spares',
      description: 'Stocked inventory of critical mechanical, electrical, and PLC spare parts for panel saws, edge banders, and CNC routers to reduce downtime.',
    },
    {
      icon: MapPin,
      title: 'Centralized Nagpur Operations',
      description: 'Strategically located in Nagpur, Maharashtra for reliable regional and national logistics to furniture clusters and woodworking facilities.',
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Modupro"
          title="Why Partner With Modupro Innovation"
          subtitle="A grounded industrial supply and engineering model focused on reliability, machine uptime, and dependable bonding."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl border border-[#E5E0D8] bg-[#F7F4EF]/50 hover:bg-white hover:border-[#8C460C]/40 transition-all duration-300 hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-lg bg-[#47704C]/10 text-[#47704C] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-[#1F241F] mb-2">{pt.title}</h4>
                <p className="text-xs text-[#636D64] leading-relaxed">{pt.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
