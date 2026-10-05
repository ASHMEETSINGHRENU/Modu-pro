import React, { useState, useEffect } from 'react';
import { useParams, Link, useOutletContext } from 'react-router-dom';
import { ArrowLeft, Check, FileText, Phone, Mail, Package, ShieldCheck, Share2 } from 'lucide-react';
import { fetchProductBySlug, fetchProducts } from '../api/client';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { LoadingState } from '../components/common/LoadingState';
import { ProductCard } from '../components/products/ProductCard';
import { companyData } from '../data/companyData';

export const ProductDetailPage = () => {
  const { slug } = useParams();
  const { onOpenQuote } = useOutletContext();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      setLoading(true);
      const prod = await fetchProductBySlug(slug);
      if (isMounted) {
        setProduct(prod);
        if (prod) {
          document.title = `${prod.name} | MODUPRO INNOVATION PVT. LTD.`;
          // Fetch related items from same category
          const allCat = await fetchProducts({ category: prod.categorySlug });
          setRelatedProducts(allCat.filter((p) => p.slug !== prod.slug).slice(0, 3));
        }
        setLoading(false);
      }
    };
    load();
    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <div className="py-24 bg-[#F7F4EF] min-h-screen">
        <LoadingState message="Loading product specifications..." />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="py-24 bg-[#F7F4EF] min-h-screen text-center px-4">
        <div className="max-w-md mx-auto bg-white p-8 rounded-2xl border border-[#E5E0D8]">
          <h2 className="text-xl font-bold text-[#1F241F] mb-2">Product Not Found</h2>
          <p className="text-xs text-[#636D64] mb-6">
            The requested product specifications could not be located in our catalogue.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#8C460C] text-white rounded-lg text-xs font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Product Catalogue</span>
          </Link>
        </div>
      </div>
    );
  }

  const displayImage = product.mockupImage || product.image || '/assets/products/lockpro-wr3-mockup.png';

  return (
    <div className="bg-[#F7F4EF] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Back Link Breadcrumb */}
        <div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#636D64] hover:text-[#8C460C] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Products</span>
          </Link>
        </div>

        {/* Main Product Card */}
        <div className="bg-white rounded-2xl border border-[#E5E0D8] shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-10">
            {/* Left: Product Image Showcase */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center bg-[#F7F4EF] rounded-xl p-8 border border-[#E5E0D8] min-h-[350px]">
              <img
                src={displayImage}
                alt={product.name}
                className="max-h-80 w-auto object-contain drop-shadow-md"
              />
              {product.brand && (
                <div className="mt-4">
                  <Badge variant="primary">{product.brand}</Badge>
                </div>
              )}
            </div>

            {/* Right: Product Details & Verified Specifications */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#8C460C] uppercase tracking-wider">
                    {product.categoryName}
                  </span>
                  {product.badge && (
                    <span className="text-xs bg-[#47704C]/10 text-[#47704C] font-semibold px-2 py-0.5 rounded border border-[#47704C]/25">
                      {product.badge}
                    </span>
                  )}
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1F241F] tracking-tight mb-4">
                  {product.name}
                </h1>

                <p className="text-sm font-medium text-[#1F241F] leading-relaxed mb-4">
                  {product.shortDescription}
                </p>

                <p className="text-xs text-[#636D64] leading-relaxed">
                  {product.fullDescription}
                </p>

                {/* Target Applications */}
                {product.applications && product.applications.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-[#E5E0D8]">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#1F241F] mb-3">
                      Target Industrial Applications:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.applications.map((app, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#1F241F]">
                          <Check className="w-3.5 h-3.5 text-[#47704C] shrink-0" />
                          <span>{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features & Available Information */}
                {product.features && product.features.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-[#E5E0D8]">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#1F241F] mb-3">
                      Verified Product Specifications & Details:
                    </h3>
                    <ul className="space-y-2 text-xs text-[#636D64]">
                      {product.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8C460C] mt-1.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* B2B Action Buttons */}
              <div className="pt-6 border-t border-[#E5E0D8] space-y-4">
                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => onOpenQuote(product.categoryName, product.name)}
                    icon={FileText}
                    iconPosition="left"
                    className="flex-1 sm:flex-none"
                  >
                    Request Product Quotation
                  </Button>
                  <Button
                    to="/contact"
                    variant="outline"
                    size="md"
                    className="flex-1 sm:flex-none"
                  >
                    Request Product Information
                  </Button>
                </div>

                <div className="p-3 bg-[#F7F4EF] rounded-lg border border-[#E5E0D8] flex items-center justify-between text-xs text-[#636D64]">
                  <span>Technical consultations available directly from Nagpur depot.</span>
                  <a
                    href={`tel:${companyData.contact.phones[0].clean}`}
                    className="font-bold text-[#8C460C] hover:underline"
                  >
                    {companyData.contact.phones[0].number}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products from Category */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#1F241F]">
                Related Products in {product.categoryName}
              </h2>
              <Link
                to={`/products?category=${product.categorySlug}`}
                className="text-xs font-semibold text-[#8C460C] hover:underline"
              >
                View Category
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id || rel.slug} product={rel} onOpenQuote={onOpenQuote} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
