import React from 'react';
import { Layers, ShieldCheck, Wrench, Cpu, Package } from 'lucide-react';
import { companyData } from '../../data/companyData';

export const BrandHierarchyBadge = () => {
  return (
    <div className="bg-white rounded-xl border border-[#E5E0D8] p-6 shadow-sm">
      <div className="flex items-center gap-3 border-b border-[#E5E0D8] pb-4 mb-5">
        <div className="w-10 h-10 rounded-lg bg-[#47704C]/10 text-[#47704C] flex items-center justify-center font-bold">
          <Layers className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-base font-bold text-[#1F241F]">
            Corporate Structure & Brand Architecture
          </h4>
          <p className="text-xs text-[#636D64]">
            {companyData.name} operates unified divisions across adhesives, tooling, machinery, and servicing.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {companyData.brandHierarchy.subBrands.map((brand, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-lg border border-[#E5E0D8] bg-[#F7F4EF]/50 hover:bg-[#F7F4EF] transition-colors"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8C460C]">
                {brand.badge}
              </span>
              {brand.name === 'ADHHESI PRO' && (
                <span className="text-[10px] bg-[#47704C] text-white px-1.5 py-0.5 rounded font-medium">
                  Est. 2015
                </span>
              )}
            </div>
            <h5 className="font-bold text-sm text-[#1F241F] mb-1">{brand.name}</h5>
            <p className="text-xs text-[#636D64] leading-relaxed">{brand.scope}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
