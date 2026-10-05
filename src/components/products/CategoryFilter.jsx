import React from 'react';
import { productCategories } from '../../data/productsData';

export const CategoryFilter = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div className="w-full">
      {/* Desktop Filter Pills */}
      <div className="hidden sm:flex flex-wrap items-center gap-2">
        {productCategories.map((cat) => {
          const isActive = selectedCategory === cat.slug;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.slug)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                isActive
                  ? 'bg-[#8C460C] text-white shadow-sm'
                  : 'bg-white text-[#1F241F] border border-[#E5E0D8] hover:bg-[#F7F4EF] hover:border-[#8C460C]/40'
              }`}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Mobile Select Filter */}
      <div className="sm:hidden w-full">
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#636D64] mb-1.5">
          Select Product Category
        </label>
        <select
          value={selectedCategory}
          onChange={(e) => onSelectCategory(e.target.value)}
          className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E0D8] bg-white text-sm font-medium text-[#1F241F] focus:border-[#8C460C] focus:ring-1 focus:ring-[#8C460C]"
        >
          {productCategories.map((cat) => (
            <option key={cat.id} value={cat.slug}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
