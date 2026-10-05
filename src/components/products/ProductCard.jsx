import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Eye } from 'lucide-react';
import { Badge } from '../common/Badge';

export const ProductCard = ({ product, onOpenQuote }) => {
  const displayImage = product.mockupImage || product.image || '/assets/products/lockpro-wr3-mockup.png';

  const brandColor =
    product.brand === 'ADHHESI PRO'
      ? 'green'
      : product.brand === 'LOCKPRO'
      ? 'primary'
      : 'secondary';

  return (
    <div className="group bg-white rounded-xl border border-[#E5E0D8] hover:border-[#8C460C]/40 transition-all duration-300 hover:shadow-lg flex flex-col h-full overflow-hidden">
      {/* Product Image Area */}
      <div className="relative bg-[#F7F4EF] p-6 h-56 flex items-center justify-center border-b border-[#E5E0D8] overflow-hidden">
        {displayImage ? (
          <img
            src={displayImage}
            alt={product.name}
            loading="lazy"
            className="max-h-44 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-20 h-20 rounded-lg bg-white/80 border border-[#E5E0D8] flex items-center justify-center text-[#8C460C] font-bold text-xs uppercase text-center p-2">
            MODUPRO Industrial Tool
          </div>
        )}

        {/* Brand Tag Top Left */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          <Badge variant={brandColor} className="text-[10px] px-2 py-0.5">
            {product.brand}
          </Badge>
        </div>

        {/* Category Pill Top Right */}
        {product.badge && (
          <div className="absolute top-3 right-3">
            <span className="text-[10px] bg-white/90 border border-[#E5E0D8] text-[#1F241F] font-semibold px-2 py-0.5 rounded shadow-xs">
              {product.badge}
            </span>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-xs font-semibold text-[#8C460C] uppercase tracking-wider mb-1">
            {product.categoryName}
          </div>
          <h3 className="text-lg font-bold text-[#1F241F] group-hover:text-[#8C460C] transition-colors leading-snug mb-2">
            <Link to={`/products/item/${product.slug}`}>{product.name}</Link>
          </h3>
          <p className="text-xs text-[#636D64] line-clamp-2 leading-relaxed mb-4">
            {product.shortDescription}
          </p>

          {/* Key Applications */}
          {product.applications && product.applications.length > 0 && (
            <div className="mb-4 pt-3 border-t border-[#E5E0D8]">
              <span className="text-[11px] font-semibold text-[#1F241F] uppercase tracking-wider block mb-1.5">
                Target Applications:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {product.applications.slice(0, 3).map((app, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 text-[11px] bg-[#F7F4EF] text-[#1F241F] px-2 py-0.5 rounded border border-[#E5E0D8]/60"
                  >
                    <Check className="w-2.5 h-2.5 text-[#47704C]" />
                    {app}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-[#E5E0D8] flex items-center gap-2">
          <Link
            to={`/products/item/${product.slug}`}
            className="flex-1 py-2 px-3 text-xs font-semibold rounded-md border border-[#E5E0D8] text-[#1F241F] hover:bg-[#F7F4EF] hover:border-[#8C460C] text-center transition-colors inline-flex items-center justify-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5 text-[#636D64]" />
            Specifications
          </Link>
          <button
            type="button"
            onClick={() => onOpenQuote && onOpenQuote(product.categoryName, product.name)}
            className="flex-1 py-2 px-3 text-xs font-semibold rounded-md bg-[#8C460C] text-white hover:bg-[#703709] text-center transition-colors inline-flex items-center justify-center gap-1 shadow-xs"
          >
            Quote
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
