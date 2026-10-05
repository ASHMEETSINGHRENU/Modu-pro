import React from 'react';

export const Badge = ({ children, variant = 'primary', className = '' }) => {
  const variants = {
    primary: 'bg-[#8C460C]/10 text-[#8C460C] border border-[#8C460C]/20',
    secondary: 'bg-[#D17E3A]/15 text-[#8C460C] border border-[#D17E3A]/30',
    green: 'bg-[#47704C]/15 text-[#38593c] border border-[#47704C]/25',
    dark: 'bg-[#1F241F] text-white',
    light: 'bg-white/90 text-[#1F241F] border border-[#E5E0D8]',
    greenSolid: 'bg-[#47704C] text-white',
    orangeSolid: 'bg-[#8C460C] text-white',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider ${variants[variant] || variants.primary} ${className}`}
    >
      {children}
    </span>
  );
};
