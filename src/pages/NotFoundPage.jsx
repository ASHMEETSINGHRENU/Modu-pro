import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '../components/common/Button';

export const NotFoundPage = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#F7F4EF] px-4 py-16">
      <div className="text-center max-w-md bg-white p-8 sm:p-10 rounded-2xl border border-[#E5E0D8] shadow-sm space-y-4">
        <span className="text-4xl font-extrabold text-[#8C460C] block">404</span>
        <h1 className="text-2xl font-bold text-[#1F241F]">Page Not Found</h1>
        <p className="text-xs text-[#636D64] leading-relaxed">
          The industrial page or product specification you requested does not exist or may have been relocated.
        </p>
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Button to="/" variant="primary" size="sm" icon={Home} iconPosition="left">
            Return to Home
          </Button>
          <Button to="/products" variant="outline" size="sm">
            Product Catalogue
          </Button>
        </div>
      </div>
    </div>
  );
};
