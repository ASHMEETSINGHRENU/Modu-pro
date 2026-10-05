import React from 'react';
import { Modal } from './Modal';
import { QuoteForm } from '../forms/QuoteForm';

export const QuoteModal = ({ isOpen, onClose, initialCategory = '', initialProduct = '' }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Request a Quotation"
      subtitle="MODUPRO INNOVATION PVT. LTD. — Technical Sales & Supply Desk"
    >
      <QuoteForm
        initialCategory={initialCategory}
        initialProduct={initialProduct}
        onSuccess={onClose}
      />
    </Modal>
  );
};
