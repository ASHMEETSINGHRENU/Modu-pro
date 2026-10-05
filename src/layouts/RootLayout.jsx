import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { QuoteModal } from '../components/common/QuoteModal';

export const RootLayout = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteCategory, setQuoteCategory] = useState('');
  const [quoteProduct, setQuoteProduct] = useState('');
  const location = useLocation();

  // Scroll to top upon route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleOpenQuote = (category = '', product = '') => {
    setQuoteCategory(category);
    setQuoteProduct(product);
    setQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setQuoteModalOpen(false);
    setQuoteCategory('');
    setQuoteProduct('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EF] text-[#1F241F]">
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      <main className="flex-1">
        <Outlet context={{ onOpenQuote: handleOpenQuote }} />
      </main>

      <Footer onOpenQuote={() => handleOpenQuote()} />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuote}
        initialCategory={quoteCategory}
        initialProduct={quoteProduct}
      />
    </div>
  );
};
