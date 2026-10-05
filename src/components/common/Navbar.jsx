import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from './Button';
import { companyData } from '../../data/companyData';

export const Navbar = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Industrial Header Bar */}
      <div className="bg-[#47704C] text-white text-xs py-2 px-4 border-b border-[#38593c] hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="font-medium tracking-wide text-white/90">
              MODUPRO INNOVATION PVT. LTD.
            </span>
            <span className="text-white/40">|</span>
            <span className="italic text-white/80">"Faithfully Delivering Excellence"</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`tel:${companyData.contact.phones[0].clean}`}
              className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D17E3A]" />
              <span>{companyData.contact.phones[0].number}</span>
            </a>
            <a
              href={`mailto:${companyData.contact.email}`}
              className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#D17E3A]" />
              <span>{companyData.contact.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-[#E5E0D8] py-2.5'
            : 'bg-white border-b border-[#E5E0D8] py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Real Logo Asset */}
            <Link to="/" className="flex items-center gap-3 shrink-0 focus:outline-none">
              <img
                src="/assets/logo/modu-pro-logo.png"
                alt="MODUPRO INNOVATION PVT. LTD. Logo"
                className="h-10 sm:h-12 w-auto object-contain transition-transform hover:scale-102"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3.5 py-2 text-sm font-semibold rounded-md transition-colors ${
                      isActive
                        ? 'text-[#8C460C] bg-[#8C460C]/8 font-bold'
                        : 'text-[#1F241F] hover:text-[#8C460C] hover:bg-[#F7F4EF]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Right Action CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <Button
                variant="primary"
                size="md"
                onClick={onOpenQuote}
                icon={ArrowUpRight}
                iconPosition="right"
              >
                Request a Quote
              </Button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <Button
                variant="primary"
                size="sm"
                onClick={onOpenQuote}
                className="text-xs px-2.5 py-1.5"
              >
                Quote
              </Button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#1F241F] hover:bg-[#F7F4EF] border border-[#E5E0D8] focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E5E0D8] bg-white px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `block px-3.5 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                    isActive
                      ? 'text-[#8C460C] bg-[#8C460C]/10 font-bold'
                      : 'text-[#1F241F] hover:bg-[#F7F4EF]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="pt-4 border-t border-[#E5E0D8] space-y-3">
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full"
                icon={ArrowUpRight}
                iconPosition="right"
              >
                Request a Quote
              </Button>

              <div className="pt-2 text-xs text-[#636D64] space-y-1.5 px-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#8C460C]" />
                  <a href={`tel:${companyData.contact.phones[0].clean}`} className="hover:underline">
                    {companyData.contact.phones[0].number}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#8C460C]" />
                  <a href={`mailto:${companyData.contact.email}`} className="hover:underline">
                    {companyData.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
