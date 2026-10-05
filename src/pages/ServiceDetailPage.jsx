import React, { useEffect } from 'react';
import { useParams, Link, useOutletContext } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, FileText, Phone, Wrench, Settings, Zap, Cpu } from 'lucide-react';
import { services } from '../data/servicesData';
import { Button } from '../components/common/Button';
import { companyData } from '../data/companyData';

export const ServiceDetailPage = () => {
  const { slug } = useParams();
  const { onOpenQuote } = useOutletContext();

  const service = services.find((s) => s.slug === slug);

  useEffect(() => {
    if (service) {
      document.title = `${service.name} | MODUPRO INNOVATION PVT. LTD.`;
    }
  }, [service]);

  if (!service) {
    return (
      <div className="py-24 bg-[#F7F4EF] min-h-screen text-center px-4">
        <div className="max-w-md mx-auto bg-white p-8 rounded-2xl border border-[#E5E0D8]">
          <h2 className="text-xl font-bold text-[#1F241F] mb-2">Service Not Found</h2>
          <p className="text-xs text-[#636D64] mb-6">
            The requested service profile is not available.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#8C460C] text-white rounded-lg text-xs font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
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
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#636D64] hover:text-[#8C460C] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Machine Services</span>
          </Link>
        </div>

        <div className="bg-white rounded-2xl border border-[#E5E0D8] p-6 sm:p-10 shadow-sm space-y-8">
          {/* Header */}
          <div className="border-b border-[#E5E0D8] pb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold text-white bg-[#47704C] px-2.5 py-0.5 rounded">
                Service {service.serviceNumber}
              </span>
              <span className="text-xs font-semibold text-[#8C460C] bg-[#8C460C]/10 px-2.5 py-0.5 rounded">
                {service.badge}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1F241F] mb-3">
              {service.name}
            </h1>
            <p className="text-sm font-medium text-[#1F241F] leading-relaxed">
              {service.shortDescription}
            </p>
          </div>

          {/* Handled Components */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1F241F]">
              Handled Machine Disciplines & Subsystems:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {service.handledComponents.map((comp, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg border border-[#E5E0D8] bg-[#F7F4EF] flex items-center gap-2.5"
                >
                  <Wrench className="w-4 h-4 text-[#47704C]" />
                  <span className="text-xs font-bold text-[#1F241F]">{comp} Systems</span>
                </div>
              ))}
            </div>
          </div>

          {/* Full Scope of Work */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1F241F]">
              Comprehensive Scope of Support:
            </h3>
            <div className="space-y-2.5">
              {service.scope.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg border border-[#E5E0D8]/60 bg-[#F7F4EF]/40 flex items-start gap-3 text-xs text-[#1F241F]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#47704C] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Applicable Machinery */}
          <div className="bg-[#F7F4EF] p-5 rounded-xl border border-[#E5E0D8] space-y-2">
            <h4 className="text-xs font-bold text-[#1F241F] uppercase tracking-wider">
              Applicable Woodworking Machinery:
            </h4>
            <div className="flex flex-wrap gap-2 pt-1">
              {service.applicableMachinery.map((mach, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-white text-xs font-medium text-[#1F241F] border border-[#E5E0D8]"
                >
                  {mach}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 border-t border-[#E5E0D8] flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <Button
                variant="primary"
                size="md"
                onClick={() => onOpenQuote('Machine Services', service.name)}
                icon={FileText}
                iconPosition="left"
              >
                Book Service Visit
              </Button>
              <Button
                to="/contact"
                variant="outline"
                size="md"
              >
                Inquire With Engineering Desk
              </Button>
            </div>

            <div className="text-xs text-[#636D64]">
              Direct Phone:{' '}
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
  );
};
