import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, CheckCircle2, Shield, Wrench, Package } from 'lucide-react';
import { Button } from '../common/Button';
import { companyData } from '../../data/companyData';

export const HeroSection = ({ onOpenQuote }) => {
  return (
    <section className="relative bg-[#47704C] text-white overflow-hidden">
      {/* Subtle industrial grid background pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Decorative Brand Accent Corner Bar */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8C460C]/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Value Prop, CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Brand Identifier Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-wider text-white">
              <span className="w-2 h-2 rounded-full bg-[#D17E3A] animate-pulse" />
              <span>{companyData.name}</span>
            </div>

            {/* Main Required Messaging */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
              Woodworking & Furniture Industry Solutions
            </h1>

            {/* Supporting Core Focus Messaging */}
            <p className="text-base sm:text-xl text-white/90 leading-relaxed max-w-2xl font-normal">
              Specialized manufacturing and supply of{' '}
              <span className="text-[#D17E3A] font-semibold">Industrial Adhesives</span>,{' '}
              <span className="text-white font-semibold">Woodworking Tools</span>,{' '}
              <span className="text-white font-semibold">Panel Machinery</span>,{' '}
              <span className="text-[#D17E3A] font-semibold">Machine Services</span>, spares, and hardware.
            </p>

            {/* Factual Core Scope Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-white/90 bg-white/10 px-3 py-2 rounded-lg border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-[#D17E3A] shrink-0" />
                <span>PVAC / D3 / PUR Glue</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/90 bg-white/10 px-3 py-2 rounded-lg border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-[#D17E3A] shrink-0" />
                <span>CNC & Panel Saw Blades</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/90 bg-white/10 px-3 py-2 rounded-lg border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-[#D17E3A] shrink-0" />
                <span>Edge Banders & Saws</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/90 bg-white/10 px-3 py-2 rounded-lg border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-[#D17E3A] shrink-0" />
                <span>Mechanical & PLC Repairs</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/90 bg-white/10 px-3 py-2 rounded-lg border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-[#D17E3A] shrink-0" />
                <span>Direct-Fit Machine Spares</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/90 bg-white/10 px-3 py-2 rounded-lg border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-[#D17E3A] shrink-0" />
                <span>PVC Tapes & 3D Hinges</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                to="/products"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                className="bg-[#8C460C] hover:bg-[#703709] border border-[#a65410]"
              >
                Explore Products
              </Button>

              <Button
                variant="outlineLight"
                size="lg"
                onClick={onOpenQuote}
                icon={FileText}
                iconPosition="left"
              >
                Request a Quote
              </Button>
            </div>

            {/* Established note */}
            <div className="pt-2 text-xs text-white/70">
              <span>Industrial adhesive operations established in {companyData.establishedYear} • Nagpur, Maharashtra</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase Using Real Assets */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
              {/* Product render showcase */}
              <div className="relative flex items-center justify-center py-4 min-h-[300px]">
                <img
                  src="/assets/products/lockpro-wr3-bucket.png"
                  alt="Lockpro WR 3 D3 Water Resistant Adhesive"
                  className="max-h-72 w-auto object-contain drop-shadow-2xl z-10"
                />

                {/* Secondary mockup offset behind */}
                <img
                  src="/assets/products/lockpro-1k-pur.png"
                  alt="Lockpro 1K PUR Adhesive"
                  className="absolute right-0 bottom-2 max-h-48 w-auto object-contain drop-shadow-xl opacity-95 hidden sm:block z-20"
                />

                <img
                  src="/assets/products/lockpro-707.png"
                  alt="LockPro 707"
                  className="absolute left-0 bottom-4 max-h-36 w-auto object-contain drop-shadow-xl opacity-90 hidden sm:block"
                />
              </div>

              {/* Product Label Card */}
              <div className="mt-4 bg-white text-[#1F241F] rounded-xl p-4 shadow-lg border border-[#E5E0D8] flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C460C] bg-[#8C460C]/10 px-2 py-0.5 rounded">
                      Featured Range
                    </span>
                    <span className="text-xs font-semibold text-[#636D64]">LOCKPRO</span>
                  </div>
                  <h4 className="font-bold text-sm text-[#1F241F] mt-1">
                    WR 3 (D3) Water-Resistant & PUR Systems
                  </h4>
                  <p className="text-[11px] text-[#636D64]">
                    Engineered for modular furniture, kitchens & doors
                  </p>
                </div>
                <Link
                  to="/products?category=adhhesi-pro"
                  className="p-2 rounded-lg bg-[#F7F4EF] hover:bg-[#8C460C] hover:text-white text-[#8C460C] transition-colors shrink-0"
                  aria-label="View Adhhesi pro range"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
