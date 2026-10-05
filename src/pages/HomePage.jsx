import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { HeroSection } from '../components/home/HeroSection';
import { CompanyIntroSection } from '../components/home/CompanyIntroSection';
import { CoreCategoriesGrid } from '../components/home/CoreCategoriesGrid';
import { BrandStructureSection } from '../components/home/BrandStructureSection';
import { FeaturedAdhesivesSection } from '../components/home/FeaturedAdhesivesSection';
import { ToolingMachinerySection } from '../components/home/ToolingMachinerySection';
import { ServiceHighlightsSection } from '../components/home/ServiceHighlightsSection';
import { IndustriesSection } from '../components/home/IndustriesSection';
import { WhyChooseUsSection } from '../components/home/WhyChooseUsSection';
import { QuickEnquiryCta } from '../components/home/QuickEnquiryCta';

export const HomePage = () => {
  const { onOpenQuote } = useOutletContext();

  useEffect(() => {
    document.title = 'MODUPRO INNOVATION PVT. LTD. | Woodworking & Furniture Industry Solutions';
  }, []);

  return (
    <div className="space-y-0">
      <HeroSection onOpenQuote={onOpenQuote} />
      <CompanyIntroSection />
      <CoreCategoriesGrid />
      <BrandStructureSection />
      <FeaturedAdhesivesSection onOpenQuote={onOpenQuote} />
      <ToolingMachinerySection onOpenQuote={onOpenQuote} />
      <ServiceHighlightsSection onOpenQuote={onOpenQuote} />
      <IndustriesSection onOpenQuote={onOpenQuote} />
      <WhyChooseUsSection />
      <QuickEnquiryCta onOpenQuote={onOpenQuote} />
    </div>
  );
};
