import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, ExternalLink, ShieldCheck } from 'lucide-react';
import { companyData } from '../../data/companyData';

export const Footer = ({ onOpenQuote }) => {
  return (
    <footer className="bg-[#47704C] text-white border-t border-[#38593c]">
      {/* Pre-footer Industrial Callout */}
      <div className="border-b border-white/10 bg-[#38593c]/60 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[#D17E3A] font-semibold text-xs uppercase tracking-wider block mb-1">
              Industrial B2B Solutions
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Need technical support or custom woodworking tooling?
            </h3>
            <p className="text-sm text-white/80 mt-1">
              Connect directly with our engineering and machine servicing team.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="px-5 py-2.5 rounded-md bg-[#8C460C] hover:bg-[#703709] text-white font-medium text-sm transition-colors shadow-sm"
            >
              Request a Quote
            </button>
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-md border border-white/30 hover:border-white text-white font-medium text-sm transition-colors"
            >
              Contact Office
            </Link>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Company & Logo (Spans 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white p-3 rounded-lg inline-block">
              <img
                src="/assets/logo/modu-pro-logo.png"
                alt="MODUPRO INNOVATION PVT. LTD."
                className="h-12 w-auto object-contain"
              />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white tracking-wide">
                MODUPRO INNOVATION PVT. LTD.
              </h4>
              <p className="text-xs text-[#D17E3A] font-medium italic mt-0.5">
                "Faithfully Delivering Excellence"
              </p>
            </div>
            <p className="text-sm text-white/80 leading-relaxed max-w-sm">
              Manufacturing & trading of PVAC White Glue, industrial adhesives, woodworking tools,
              panel processing machinery, machine services, spares, and PVC edge banding.
              Adhesive business established in 2015.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs text-white/60 uppercase tracking-wider">Divisions:</span>
              <a
                href="https://instagram.com/adhhesi_pro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs bg-white/10 hover:bg-white/20 text-[#D17E3A] px-2.5 py-1 rounded transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>@adhhesi_pro</span>
              </a>
              <a
                href="https://instagram.com/yash_toolingsystem"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs bg-white/10 hover:bg-white/20 text-[#D17E3A] px-2.5 py-1 rounded transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>@yash_toolingsystem</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider text-[#D17E3A] mb-4">
              Company
            </h5>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Product Catalogue
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Machine Services
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-white transition-colors">
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Categories */}
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider text-[#D17E3A] mb-4">
              Categories
            </h5>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <Link to="/products?category=adhhesi-pro" className="hover:text-white transition-colors">
                  1. Adhhesi pro
                </Link>
              </li>
              <li>
                <Link to="/products?category=woodworking-tools" className="hover:text-white transition-colors">
                  2. Wood working tools
                </Link>
              </li>
              <li>
                <Link to="/products?category=panel-processing-machines" className="hover:text-white transition-colors">
                  3. Panel processing machines
                </Link>
              </li>
              <li>
                <Link to="/products?category=pvc-edge-banding-hardware" className="hover:text-white transition-colors">
                  4. PVC edge banding & hardware
                </Link>
              </li>
              <li>
                <Link to="/products?category=machine-spares-services" className="hover:text-white transition-colors">
                  5. Panel processing machines & spares
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Field Machine Servicing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider text-[#D17E3A] mb-4">
              Nagpur Office
            </h5>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D17E3A] shrink-0 mt-1" />
                <span className="leading-snug">
                  PLOT NO. 27, HANUMAN DAAL MILL ROAD, OPPOSITE ROYAL TOUCH, NAGPUR - 440008, MAHARASHTRA, INDIA
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D17E3A] shrink-0" />
                <div>
                  <a href={`tel:${companyData.contact.phones[0].clean}`} className="hover:text-white block">
                    {companyData.contact.phones[0].number}
                  </a>
                  <a href={`tel:${companyData.contact.phones[1].clean}`} className="hover:text-white block">
                    {companyData.contact.phones[1].number}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D17E3A] shrink-0" />
                <a href={`mailto:${companyData.contact.email}`} className="hover:text-white break-all">
                  {companyData.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal / Disclaimer Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            © {new Date().getFullYear()} MODUPRO INNOVATION PVT. LTD. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>B2B Industrial Woodworking & Furniture Solutions</span>
            <span>•</span>
            <span>Nagpur, Maharashtra</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
