import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { FileText, ArrowLeft, Phone, Mail, ShieldCheck } from 'lucide-react';
import { QuoteForm } from '../components/forms/QuoteForm';
import { companyData } from '../data/companyData';

export const QuotePage = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'Industrial Adhesives';
  const productParam = searchParams.get('product') || '';

  useEffect(() => {
    document.title = 'Request a Quote | MODUPRO INNOVATION PVT. LTD.';
  }, []);

  return (
    <div className="bg-[#F7F4EF] min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#636D64] hover:text-[#8C460C] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Products</span>
          </Link>
        </div>

        <div className="bg-white rounded-2xl border border-[#E5E0D8] p-6 sm:p-10 shadow-sm space-y-6">
          <div className="border-b border-[#E5E0D8] pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8C460C]/10 text-[#8C460C] text-xs font-semibold uppercase tracking-wider mb-2">
              <FileText className="w-3.5 h-3.5" />
              Direct Commercial Quotation
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1F241F]">
              Request an Industrial Price Quotation
            </h1>
            <p className="text-xs text-[#636D64] mt-1 leading-relaxed">
              Submit your requirements for adhesives, tooling, machines, or spares. Our technical sales team will review and respond with commercial terms.
            </p>
          </div>

          <QuoteForm
            initialCategory={categoryParam}
            initialProduct={productParam}
          />

          <div className="pt-6 border-t border-[#E5E0D8] text-xs text-[#636D64] flex flex-col sm:flex-row items-center justify-between gap-3">
            <span>Direct Sales Helpdesk: {companyData.contact.phones[0].number}</span>
            <span>Nagpur, Maharashtra, India</span>
          </div>
        </div>
      </div>
    </div>
  );
};
