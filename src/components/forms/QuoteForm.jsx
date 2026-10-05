import React, { useState } from 'react';
import { submitQuote } from '../../api/client';
import { Button } from '../common/Button';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const QuoteForm = ({ initialCategory = '', initialProduct = '', onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    productCategory: initialCategory || 'Industrial Adhesives',
    productOrService: initialProduct || '',
    scaleOrQuantity: '',
    projectDetails: '',
    location: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status.type === 'error') {
      setStatus({ type: '', message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.projectDetails.trim()) {
      setStatus({ type: 'error', message: 'Please complete all required fields.' });
      return;
    }

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await submitQuote(formData);
      if (res.success) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your quotation request has been recorded. Our engineering & sales team will contact you promptly.',
        });
        if (onSuccess) {
          setTimeout(() => onSuccess(), 2500);
        }
      } else {
        setStatus({ type: 'error', message: res.message || 'Error submitting quote request.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: err.message || 'Submission error. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  if (status.type === 'success') {
    return (
      <div className="py-8 text-center bg-white rounded-lg p-6 border border-[#E5E0D8]">
        <div className="w-14 h-14 bg-[#47704C]/15 text-[#47704C] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#47704C]/25">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h4 className="text-xl font-bold text-[#1F241F] mb-2">Quote Request Received</h4>
        <p className="text-sm text-[#636D64] max-w-md mx-auto mb-6">{status.message}</p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setStatus({ type: '', message: '' });
            setFormData({
              name: '',
              companyName: '',
              email: '',
              phone: '',
              productCategory: 'Industrial Adhesives',
              productOrService: '',
              scaleOrQuantity: '',
              projectDetails: '',
              location: '',
            });
          }}
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status.type === 'error' && (
        <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{status.message}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F241F] mb-1.5">
            Full Name <span className="text-[#8C460C]">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Rajesh Sharma"
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E0D8] bg-white text-sm text-[#1F241F] focus:border-[#8C460C] focus:ring-1 focus:ring-[#8C460C] transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F241F] mb-1.5">
            Company / Workshop Name
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="e.g. Apex Modular Furniture"
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E0D8] bg-white text-sm text-[#1F241F] focus:border-[#8C460C] focus:ring-1 focus:ring-[#8C460C] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F241F] mb-1.5">
            Business Email <span className="text-[#8C460C]">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="name@company.com"
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E0D8] bg-white text-sm text-[#1F241F] focus:border-[#8C460C] focus:ring-1 focus:ring-[#8C460C] transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F241F] mb-1.5">
            Phone / Mobile Number <span className="text-[#8C460C]">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E0D8] bg-white text-sm text-[#1F241F] focus:border-[#8C460C] focus:ring-1 focus:ring-[#8C460C] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F241F] mb-1.5">
            Category of Interest
          </label>
          <select
            name="productCategory"
            value={formData.productCategory}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E0D8] bg-white text-sm text-[#1F241F] focus:border-[#8C460C] focus:ring-1 focus:ring-[#8C460C] transition-colors"
          >
            <option value="Industrial Adhesives">Industrial Adhesives (PVAC, D2, D3, PUR)</option>
            <option value="Woodworking Tools">Woodworking Tools & Blades</option>
            <option value="Woodworking Machinery">Woodworking Machinery</option>
            <option value="Machine Spares">Machine Spares & Components</option>
            <option value="Machine Services">Machine Installation & Servicing</option>
            <option value="PVC Edge Banding & Hardware">PVC Edge Banding & Hardware</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F241F] mb-1.5">
            Specific Item / Machine Model
          </label>
          <input
            type="text"
            name="productOrService"
            value={formData.productOrService}
            onChange={handleChange}
            placeholder="e.g. Lockpro WR 3 (D3) / Automatic Edge Bander"
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E0D8] bg-white text-sm text-[#1F241F] focus:border-[#8C460C] focus:ring-1 focus:ring-[#8C460C] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F241F] mb-1.5">
            City / Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. Nagpur / Pune / Mumbai"
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E0D8] bg-white text-sm text-[#1F241F] focus:border-[#8C460C] focus:ring-1 focus:ring-[#8C460C] transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F241F] mb-1.5">
            Estimated Scale / Quantity
          </label>
          <input
            type="text"
            name="scaleOrQuantity"
            value={formData.scaleOrQuantity}
            onChange={handleChange}
            placeholder="e.g. 50 pails / 1 unit machine"
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E0D8] bg-white text-sm text-[#1F241F] focus:border-[#8C460C] focus:ring-1 focus:ring-[#8C460C] transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F241F] mb-1.5">
          Project Requirements & Specifications <span className="text-[#8C460C]">*</span>
        </label>
        <textarea
          name="projectDetails"
          required
          rows={3}
          value={formData.projectDetails}
          onChange={handleChange}
          placeholder="Please describe your application (substrate materials, workshop machinery, current consumption, delivery schedule, etc.)."
          className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E0D8] bg-white text-sm text-[#1F241F] focus:border-[#8C460C] focus:ring-1 focus:ring-[#8C460C] transition-colors"
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="md"
        loading={loading}
        icon={Send}
        iconPosition="right"
        className="w-full"
      >
        Submit Quotation Request
      </Button>
    </form>
  );
};
