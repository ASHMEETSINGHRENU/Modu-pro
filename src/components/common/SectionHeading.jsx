import React from 'react';

export const SectionHeading = ({
  badge,
  title,
  subtitle,
  centered = false,
  light = false,
  className = '',
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 ${
          light
            ? 'bg-white/15 text-white border border-white/20'
            : 'bg-[#8C460C]/10 text-[#8C460C] border border-[#8C460C]/25'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D17E3A]" />
          {badge}
        </div>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 ${
          light ? 'text-white' : 'text-[#1F241F]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            light ? 'text-white/80' : 'text-[#636D64]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
