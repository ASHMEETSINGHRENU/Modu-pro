import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Clock, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { EnquiryForm } from '../components/forms/EnquiryForm';
import { Button } from '../components/common/Button';
import { companyData } from '../data/companyData';

export const ContactPage = () => {
  const { onOpenQuote } = useOutletContext();

  useEffect(() => {
    document.title = 'Contact & Location | MODUPRO INNOVATION PVT. LTD.';
  }, []);

  return (
    <div className="bg-[#F7F4EF] min-h-screen">
      {/* Header */}
      <section className="bg-[#47704C] text-white py-14 sm:py-20 border-b border-[#38593c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-wider text-white mb-3">
              <MapPin className="w-3.5 h-3.5 text-[#D17E3A]" />
              Commercial Inquiries & Support
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Contact MODUPRO INNOVATION
            </h1>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              Connect with our technical sales, product dispatch, and machine service engineers in Nagpur.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Verified Contact Information & Details */}
            <div className="lg:col-span-5 space-y-6">
              {/* Office Location Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E0D8] shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8C460C] block mb-1">
                    Corporate Office & Depot
                  </span>
                  <h3 className="text-xl font-bold text-[#1F241F]">
                    {companyData.name}
                  </h3>
                  <p className="text-xs text-[#636D64] mt-0.5">
                    "Faithfully Delivering Excellence"
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-[#E5E0D8]">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#8C460C]/10 text-[#8C460C] flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#1F241F] uppercase tracking-wider block">
                        Registered Address
                      </span>
                      <p className="text-xs text-[#636D64] leading-relaxed mt-1">
                        {companyData.contact.address.line1},<br />
                        {companyData.contact.address.line2},<br />
                        {companyData.contact.address.city} - {companyData.contact.address.pincode},<br />
                        {companyData.contact.address.state}, {companyData.contact.address.country}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#47704C]/10 text-[#47704C] flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#1F241F] uppercase tracking-wider block">
                        Phone Numbers
                      </span>
                      <div className="text-xs space-y-1 mt-1">
                        <div>
                          <a
                            href={`tel:${companyData.contact.phones[0].clean}`}
                            className="font-bold text-[#8C460C] hover:underline block"
                          >
                            {companyData.contact.phones[0].number}
                          </a>
                        </div>
                        <div>
                          <a
                            href={`tel:${companyData.contact.phones[1].clean}`}
                            className="font-bold text-[#8C460C] hover:underline block"
                          >
                            {companyData.contact.phones[1].number}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#D17E3A]/15 text-[#8C460C] flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#1F241F] uppercase tracking-wider block">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${companyData.contact.email}`}
                        className="text-xs font-medium text-[#636D64] hover:text-[#8C460C] break-all block mt-1"
                      >
                        {companyData.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#1F241F]/10 text-[#1F241F] flex items-center justify-center shrink-0 mt-0.5">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#1F241F] uppercase tracking-wider block">
                        Division Channels
                      </span>
                      <div className="flex flex-wrap gap-2 mt-1.5">
                        <a
                          href="https://instagram.com/adhhesi_pro"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs bg-[#F7F4EF] hover:bg-[#E5E0D8] text-[#1F241F] font-semibold px-2.5 py-1 rounded border border-[#E5E0D8] transition-colors"
                        >
                          @adhhesi_pro
                        </a>
                        <a
                          href="https://instagram.com/yash_toolingsystem"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs bg-[#F7F4EF] hover:bg-[#E5E0D8] text-[#1F241F] font-semibold px-2.5 py-1 rounded border border-[#E5E0D8] transition-colors"
                        >
                          @yash_toolingsystem
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quotation Action Box */}
              <div className="bg-[#47704C] text-white rounded-2xl p-6 border border-[#38593c] space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D17E3A]">
                  Fast Commercial Quotations
                </span>
                <h4 className="text-lg font-bold text-white leading-snug">
                  Need an official price quote for bulk adhesive or woodworking machinery?
                </h4>
                <p className="text-xs text-white/80 leading-relaxed">
                  Use our interactive quotation request modal to submit detailed specifications directly to our estimation team.
                </p>
                <Button
                  variant="primary"
                  size="md"
                  onClick={onOpenQuote}
                  icon={FileText}
                  iconPosition="left"
                  className="w-full bg-[#8C460C] hover:bg-[#703709] border border-[#a65410]"
                >
                  Request a Formal Quote
                </Button>
              </div>
            </div>

            {/* Right Column: Interactive Enquiry Form */}
            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map / Location Context Section */}
      <section className="py-14 bg-white border-t border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F7F4EF] rounded-2xl p-6 sm:p-8 border border-[#E5E0D8]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#8C460C]">
                  Logistics & Distribution Depot
                </span>
                <h3 className="text-xl font-bold text-[#1F241F] mt-1">
                  Nagpur Commercial Location
                </h3>
                <p className="text-xs text-[#636D64]">
                  Centrally situated in Maharashtra for rapid material transit to furniture workshops across the state and country.
                </p>
              </div>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(companyData.contact.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[#8C460C] hover:bg-[#703709] text-white text-xs font-semibold inline-flex items-center gap-1.5 self-start md:self-auto shrink-0 transition-colors"
              >
                <span>Open in Google Maps</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-4 bg-white rounded-xl border border-[#E5E0D8] text-xs text-[#1F241F] leading-relaxed">
              <strong>Depot Directions: </strong>
              {companyData.contact.address.line1}, {companyData.contact.address.line2}, {companyData.contact.address.city} - {companyData.contact.address.pincode}, Maharashtra, India.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
