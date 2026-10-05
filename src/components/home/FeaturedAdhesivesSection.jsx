import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Droplets, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { ProductCard } from '../products/ProductCard';
import { products } from '../../data/productsData';

export const FeaturedAdhesivesSection = ({ onOpenQuote }) => {
  // Select the featured adhesives from products dataset
  const featuredAdhesives = products.filter(
    (p) => p.categorySlug === 'adhesives' && p.isFeatured
  ).slice(0, 4);

  return (
    <section className="py-20 bg-white border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            badge="Adhesive Formulations"
            title="Industrial Adhesives & Chemical Bonding"
            subtitle="Featuring the LOCKPRO and ADHHESI PRO adhesive lines: PVAC White Glue, Certified D3 water-resistant systems, and reactive PUR adhesives."
            className="mb-0"
          />

          <Link
            to="/products?category=adhesives"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#8C460C] hover:text-[#703709] transition-colors shrink-0"
          >
            <span>View All Adhesives (12)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredAdhesives.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenQuote={onOpenQuote}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
