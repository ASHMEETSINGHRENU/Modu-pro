import React, { useEffect } from 'react';
import { useParams, Link, useOutletContext } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, FileText, Factory, ArrowRight } from 'lucide-react';
import { industries } from '../data/industriesData';
import { Button } from '../components/common/Button';

export const IndustryDetailPage = () => {
  const { slug } = useParams();
  const { onOpenQuote } = useOutletContext();

  const industry = industries.find((i) => i.slug === slug);

  useEffect(() => {
    if (industry) {
      document.title = `${industry.name} Solutions | MODUPRO INNOVATION PVT. LTD.`;
    }
  }, [industry]);

  if (!industry) {
    return (
      <div className="py-24 bg-[#F7F4EF] min-h-screen text-center px-4">
        <div className="max-w-md mx-auto bg-white p-8 rounded-2xl border border-[#E5E0D8]">
          <h2 className="text-xl font-bold text-[#1F241F] mb-2">Industry Not Found</h2>
          <p className="text-xs text-[#636D64] mb-6">
            The requested industry profile could not be located.
          </p>
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#8C460C] text-white rounded-lg text-xs font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Industries</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F7F4EF] min-h-screen py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#636D64] hover:text-[#8C460C] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Industries We Serve</span>
          </Link>
        </div>

        <div className="bg-white rounded-2xl border border-[#E5E0D8] p-6 sm:p-10 shadow-sm space-y-8">
          <div className="border-b border-[#E5E0D8] pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8C460C] bg-[#8C460C]/10 px-2.5 py-0.5 rounded">
                Target Industrial Sector
              </span>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-[#1F241F] mt-2">
                {industry.name}
              </h1>
              <p className="text-sm font-semibold text-[#47704C] mt-1">
                {industry.tagline}
              </p>
            </div>

            <Button
              variant="primary"
              size="md"
              onClick={() => onOpenQuote(industry.name, `Industrial requirement for ${industry.name}`)}
              icon={FileText}
              iconPosition="left"
            >
              Request Solution Quote
            </Button>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1F241F]">
              Industry Overview & Production Environment:
            </h3>
            <p className="text-sm text-[#1F241F] leading-relaxed">
              {industry.overview}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1F241F]">
              Supplied Solutions & Technical Engineering:
            </h3>
            <div className="space-y-2.5">
              {industry.solutionsOffered.map((sol, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg border border-[#E5E0D8] bg-[#F7F4EF]/50 flex items-start gap-3 text-xs text-[#1F241F]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#47704C] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{sol}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Common Applications */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1F241F]">
              Workshop Applications:
            </h3>
            <div className="flex flex-wrap gap-2">
              {industry.commonApplications.map((app, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-[#F7F4EF] text-xs font-medium text-[#1F241F] border border-[#E5E0D8]"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>

          {/* Recommended Products */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1F241F]">
              Key Recommended Products:
            </h3>
            <div className="flex flex-wrap gap-2">
              {industry.applicableProducts.map((prod, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-[#8C460C]/10 text-xs font-bold text-[#8C460C] border border-[#8C460C]/25"
                >
                  {prod}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-[#E5E0D8] flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/products"
              className="text-xs font-bold text-[#8C460C] hover:underline inline-flex items-center gap-1.5"
            >
              <span>Explore Matching Products in Catalogue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Button
              to="/contact"
              variant="outline"
              size="sm"
            >
              Inquire With Engineering Desk
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
