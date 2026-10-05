import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, FileText } from 'lucide-react';
import { Button } from '../common/Button';
import { companyData } from '../../data/companyData';

export const QuickEnquiryCta = ({ onOpenQuote }) => {
  return (
    <section className="py-20 bg-[#47704C] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/20 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D17E3A] bg-black/20 px-3 py-1 rounded-full inline-block">
                Direct B2B Inquiries
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                Ready to optimize your woodworking production line?
              </h2>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-xl">
                Whether you need high-tack PVAC glue, D3 water-resistant pails, replacement panel saw blades, or on-site edge bander servicing, our technical team is ready to assist.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  variant="primary"
                  size="md"
                  onClick={onOpenQuote}
                  icon={FileText}
                  iconPosition="left"
                  className="bg-[#8C460C] hover:bg-[#703709] border border-[#a65410]"
                >
                  Request a Quotation
                </Button>
                <Button
                  to="/contact"
                  variant="outlineLight"
                  size="md"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  Contact Nagpur Office
                </Button>
              </div>
            </div>

            {/* Quick Contact Info Tile */}
            <div className="lg:col-span-5 bg-white text-[#1F241F] rounded-2xl p-6 sm:p-7 shadow-lg space-y-4 border border-[#E5E0D8]">
              <h4 className="font-bold text-base text-[#1F241F] border-b border-[#E5E0D8] pb-3">
                Direct Technical Assistance
              </h4>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#8C460C] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#1F241F]">Call Us:</span>
                    <a href={`tel:${companyData.contact.phones[0].clean}`} className="text-[#8C460C] hover:underline font-medium block">
                      {companyData.contact.phones[0].number}
                    </a>
                    <a href={`tel:${companyData.contact.phones[1].clean}`} className="text-[#8C460C] hover:underline font-medium block">
                      {companyData.contact.phones[1].number}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#8C460C] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#1F241F]">Email Inquiries:</span>
                    <a href={`mailto:${companyData.contact.email}`} className="text-[#636D64] hover:text-[#1F241F] break-all">
                      {companyData.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#8C460C] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#1F241F]">Office & Depot:</span>
                    <span className="text-[#636D64] leading-snug">
                      {companyData.contact.address.line1}, {companyData.contact.address.line2}, {companyData.contact.address.city} - {companyData.contact.address.pincode}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
