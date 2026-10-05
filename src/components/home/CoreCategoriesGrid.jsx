import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { companyData } from '../../data/companyData';

export const CoreCategoriesGrid = () => {
  return (
    <section className="py-20 bg-white border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Product & Service Lines"
          title="Core Business Categories"
          subtitle="Explore our comprehensive industrial portfolio spanning formulations, cutting tools, machinery, and technical maintenance."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companyData.coreCategories.map((category) => {
            const linkTarget =
              category.slug === 'services'
                ? '/services'
                : `/products?category=${category.slug}`;

            return (
              <div
                key={category.id}
                className="group relative bg-[#F7F4EF] rounded-2xl border border-[#E5E0D8] hover:border-[#8C460C] transition-all duration-300 hover:shadow-xl flex flex-col justify-between overflow-hidden"
              >
                {/* Visual Header with Real Image Asset */}
                <div className="relative bg-white p-6 h-52 flex items-center justify-center border-b border-[#E5E0D8] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    loading="lazy"
                    className="max-h-40 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Category Number Badge */}
                  <div className="absolute top-4 left-4 w-9 h-9 rounded-lg bg-[#8C460C] text-white flex items-center justify-center font-bold text-xs tracking-wider shadow-sm">
                    {category.id}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#1F241F] group-hover:text-[#8C460C] transition-colors tracking-tight">
                      <Link to={linkTarget}>{category.title}</Link>
                    </h3>
                    <p className="text-xs text-[#636D64] leading-relaxed mt-2">
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
                      <span>Explore</span>
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
