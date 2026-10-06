import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { companyData } from '../../data/companyData';

export const CoreCategoriesGrid = () => {
  return (
    <section className="py-20 bg-white border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Parent Brand: MODUPRO INNOVATION"
          title="Products & Services: 5 Core Sub-Categories"
          subtitle="MODUPRO is our main brand and category. Explore all 5 verified sub-categories spanning industrial adhesives, cutting tools, machinery, edge banding hardware, and machine spares."
          centered
        />

        {/* 5-Category Responsive Grid: 3 on first row, 2 centered on second row for large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companyData.coreCategories.map((category, index) => {
            const linkTarget = `/products?category=${category.slug}`;
            const isLastTwoOnLg = index >= 3;

            return (
              <div
                key={category.id}
                className={`group relative bg-[#F7F4EF] rounded-2xl border border-[#E5E0D8] hover:border-[#8C460C] transition-all duration-300 hover:shadow-xl flex flex-col justify-between overflow-hidden ${
                  isLastTwoOnLg ? 'lg:col-span-1' : ''
                }`}
              >
                {/* Visual Header with Real Image Asset */}
                <div className="relative bg-white p-6 h-56 flex items-center justify-center border-b border-[#E5E0D8] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    loading="lazy"
                    className="max-h-44 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Sub-Category Index Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#8C460C] text-white font-bold text-xs tracking-wider shadow-sm">
                    <span>{category.id}</span>
                  </div>

                  {/* Availability Badge */}
                  <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#47704C]/10 border border-[#47704C]/20 text-[#47704C] font-semibold text-[11px]">
                    <CheckCircle2 className="w-3 h-3 text-[#47704C]" />
                    <span>Product Available: Yes</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="text-[11px] font-bold text-[#8C460C] uppercase tracking-wider mb-1">
                      Sub-Category {category.id}
                    </div>
                    <h3 className="text-xl font-bold text-[#1F241F] group-hover:text-[#8C460C] transition-colors tracking-tight leading-snug">
                      <Link to={linkTarget}>{category.title}</Link>
                    </h3>

                    {category.subtitle && (
                      <p className="text-xs font-semibold text-[#636D64] mt-1 italic">
                        {category.subtitle}
                      </p>
                    )}

                    <p className="text-xs text-[#1F241F]/80 leading-relaxed mt-3">
                      {category.description}
                    </p>
                  </div>

                  {/* Explore Button */}
                  <div className="pt-4 border-t border-[#E5E0D8]/80 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-[#8C460C] uppercase tracking-wider">
                      {category.count}
                    </span>
                    <Link
                      to={linkTarget}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1F241F] group-hover:text-[#8C460C] transition-colors"
                    >
                      <span>Explore Category</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
