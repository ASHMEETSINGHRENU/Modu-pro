import React, { useState, useEffect } from 'react';
import { useSearchParams, useOutletContext } from 'react-router-dom';
import { Search, Filter, SlidersHorizontal, Package, Check, ArrowRight } from 'lucide-react';
import { ProductCard } from '../components/products/ProductCard';
import { CategoryFilter } from '../components/products/CategoryFilter';
import { SectionHeading } from '../components/common/SectionHeading';
import { LoadingState } from '../components/common/LoadingState';
import { EmptyState } from '../components/common/EmptyState';
import { fetchProducts } from '../api/client';
import { productCategories } from '../data/productsData';

export const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { onOpenQuote } = useOutletContext();

  const categoryParam = searchParams.get('category') || 'all';
  const brandParam = searchParams.get('brand') || 'all';
  const queryParam = searchParams.get('q') || '';

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedBrand, setSelectedBrand] = useState(brandParam);
  const [searchQuery, setSearchQuery] = useState(queryParam);
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Sync state with URL params
  useEffect(() => {
    setSelectedCategory(searchParams.get('category') || 'all');
    setSelectedBrand(searchParams.get('brand') || 'all');
    setSearchQuery(searchParams.get('q') || '');
  }, [searchParams]);

  // Load products from API / grounded data
  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      setLoading(true);
      const data = await fetchProducts({
        category: selectedCategory,
        brand: selectedBrand,
        search: searchQuery,
      });
      if (isMounted) {
        setProductsList(data);
        setLoading(false);
      }
    };
    load();
    return () => {
      isMounted = false;
    };
  }, [selectedCategory, selectedBrand, searchQuery]);

  useEffect(() => {
    document.title = 'Product Catalogue | MODUPRO INNOVATION PVT. LTD.';
  }, []);

  const handleCategoryChange = (slug) => {
    setSelectedCategory(slug);
    const newParams = new URLSearchParams(searchParams);
    if (slug === 'all') {
      newParams.delete('category');
    } else {
      newParams.set('category', slug);
    }
    setSearchParams(newParams);
  };

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
    const newParams = new URLSearchParams(searchParams);
    if (brand === 'all') {
      newParams.delete('brand');
    } else {
      newParams.set('brand', brand);
    }
    setSearchParams(newParams);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const newParams = new URLSearchParams(searchParams);
    if (searchQuery.trim()) {
      newParams.set('q', searchQuery.trim());
    } else {
      newParams.delete('q');
    }
    setSearchParams(newParams);
  };

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedBrand('all');
    setSearchQuery('');
    setSearchParams({});
  };

  return (
    <div className="bg-[#F7F4EF] min-h-screen">
      {/* Catalogue Header */}
      <section className="bg-[#47704C] text-white py-14 sm:py-16 border-b border-[#38593c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-wider text-white mb-3">
              <Package className="w-3.5 h-3.5 text-[#D17E3A]" />
              B2B Product Catalogue
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
              Industrial Products & Machinery
            </h1>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              Explore our full range of industrial woodworking adhesives, precision cutting tools, panel processing machinery, machine spares, and PVC edge banding.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar Section */}
      <section className="py-6 bg-white border-b border-[#E5E0D8] sticky top-[69px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Category Filter */}
            <div className="flex-1">
              <CategoryFilter
                selectedCategory={selectedCategory}
                onSelectCategory={handleCategoryChange}
              />
            </div>

            {/* Search Input Form */}
            <form onSubmit={handleSearchSubmit} className="relative w-full md:w-72 shrink-0">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products or tools..."
                className="w-full pl-9 pr-4 py-2 rounded-lg border border-[#E5E0D8] bg-[#F7F4EF]/60 text-xs font-medium text-[#1F241F] focus:bg-white focus:border-[#8C460C] focus:ring-1 focus:ring-[#8C460C] transition-colors"
              />
              <Search className="w-4 h-4 text-[#636D64] absolute left-3 top-2.5" />
            </form>
          </div>

          {/* Secondary Sub-brand Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#E5E0D8]/60 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#636D64] uppercase tracking-wider text-[11px]">
                Brand Identity:
              </span>
              <div className="flex items-center gap-1.5">
                {[
                  { label: 'All Brands', value: 'all' },
                  { label: 'LOCKPRO', value: 'lockpro' },
                  { label: 'ADHHESI PRO', value: 'adhhesi pro' },
                  { label: 'MODUPRO', value: 'modupro' },
                ].map((b) => (
                  <button
                    key={b.value}
                    onClick={() => handleBrandChange(b.value)}
                    className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-colors ${
                      selectedBrand.toLowerCase() === b.value.toLowerCase()
                        ? 'bg-[#1F241F] text-white'
                        : 'bg-[#F7F4EF] text-[#636D64] hover:text-[#1F241F] border border-[#E5E0D8]'
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-[#636D64] font-medium text-[11px]">
              Showing <span className="font-bold text-[#1F241F]">{productsList.length}</span> products in catalogue
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <LoadingState message="Fetching industrial catalogue data..." />
          ) : productsList.length === 0 ? (
            <EmptyState
              title="No products match your criteria"
              description="Please try choosing another category or clearing your current search filter."
              onReset={handleResetFilters}
            />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {productsList.map((product) => (
                <ProductCard
                  key={product.id || product.slug}
                  product={product}
                  onOpenQuote={onOpenQuote}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* B2B Quotation Footer Banner */}
      <section className="py-14 bg-white border-t border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F7F4EF] rounded-2xl p-8 border border-[#E5E0D8] flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8C460C] block mb-1">
                Custom Workshop Inquiries
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1F241F]">
                Looking for customized tooling or bulk adhesive supply?
              </h3>
              <p className="text-xs sm:text-sm text-[#636D64] mt-1">
                We manufacture customised router cutters and supply industrial adhesive pails directly to modular workshops.
              </p>
            </div>

            <button
              onClick={() => onOpenQuote('Bulk / Custom Request', 'General Catalog Inquiry')}
              className="px-6 py-3 rounded-lg bg-[#8C460C] hover:bg-[#703709] text-white text-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow-sm"
            >
              Request Custom Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
