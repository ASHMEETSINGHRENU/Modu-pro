import React, { useState } from 'react';
import { submitEnquiry } from '../../api/client';
import { Button } from '../common/Button';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const EnquiryForm = ({ initialService = '', initialProduct = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    productOrService: initialService || initialProduct || 'General Business Inquiry',
    preferredContactMethod: 'any',
    message: '',
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
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await submitEnquiry(formData);
      if (res.success) {
        setStatus({
          type: 'success',
          message: 'Thank you for reaching out to MODUPRO INNOVATION. Our technical team has received your message and will be in touch shortly.',
        });
        setFormData({
          name: '',
          companyName: '',
          email: '',
          phone: '',
          productOrService: 'General Business Inquiry',
          preferredContactMethod: 'any',
          message: '',
        });
      } else {
        setStatus({ type: 'error', message: res.message || 'Error sending message.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: err.message || 'Submission failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#E5E0D8] shadow-sm">
      <div className="border-b border-[#E5E0D8] pb-4 mb-6">
        <h3 className="text-xl font-bold text-[#1F241F]">Send an Industrial Enquiry</h3>
        <p className="text-xs text-[#636D64] mt-1">
          Direct communication with MODUPRO technical sales and machine support desk.
        </p>
      </div>

      {status.type === 'success' && (
        <div className="mb-6 p-4 rounded-lg bg-[#47704C]/10 border border-[#47704C]/30 text-[#38593c] flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
          <div>
            <h5 className="font-semibold text-sm">Message Sent Successfully</h5>
            <p className="text-xs text-[#38593c]/90 mt-0.5">{status.message}</p>
          </div>
        </div>
      )}

      {status.type === 'error' && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <div className="text-xs">{status.message}</div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F241F] mb-1.5">
              Your Name <span className="text-[#8C460C]">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Ramesh Patel"
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E0D8] bg-[#F7F4EF]/50 text-sm text-[#1F241F] focus:bg-white focus:border-[#8C460C] focus:ring-1 focus:ring-[#8C460C] transition-colors"
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
              placeholder="e.g. Nagpur Modular Furnishers"
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E0D8] bg-[#F7F4EF]/50 text-sm text-[#1F241F] focus:bg-white focus:border-[#8C460C] focus:ring-1 focus:ring-[#8C460C] transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F241F] mb-1.5">
              Email Address <span className="text-[#8C460C]">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="contact@business.com"
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E0D8] bg-[#F7F4EF]/50 text-sm text-[#1F241F] focus:bg-white focus:border-[#8C460C] focus:ring-1 focus:ring-[#8C460C] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F241F] mb-1.5">
              Mobile / Phone Number <span className="text-[#8C460C]">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 86230 41894"
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E0D8] bg-[#F7F4EF]/50 text-sm text-[#1F241F] focus:bg-white focus:border-[#8C460C] focus:ring-1 focus:ring-[#8C460C] transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F241F] mb-1.5">
              Product / Service of Interest
            </label>
            <select
              name="productOrService"
              value={formData.productOrService}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E0D8] bg-[#F7F4EF]/50 text-sm text-[#1F241F] focus:bg-white focus:border-[#8C460C] focus:ring-1 focus:ring-[#8C460C] transition-colors"
            >
              <option value="General Business Inquiry">General Business Inquiry</option>
              <option value="Industrial Adhesives (PVAC / D3 / PUR)">Industrial Adhesives (PVAC / D3 / PUR)</option>
              <option value="Woodworking Tools & Saw Blades">Woodworking Tools & Saw Blades</option>
              <option value="Woodworking Machinery">Woodworking Machinery</option>
              <option value="Machine Installation & Commissioning">Machine Installation & Commissioning</option>
              <option value="Machine Maintenance & Servicing">Machine Maintenance & Servicing</option>
              <option value="Machine Spares & Components">Machine Spares & Components</option>
              <option value="PVC Edge Banding Tapes & Hardware">PVC Edge Banding Tapes & Hardware</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F241F] mb-1.5">
              Preferred Contact Channel
            </label>
            <select
              name="preferredContactMethod"
              value={formData.preferredContactMethod}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E0D8] bg-[#F7F4EF]/50 text-sm text-[#1F241F] focus:bg-white focus:border-[#8C460C] focus:ring-1 focus:ring-[#8C460C] transition-colors"
            >
              <option value="any">Any (Fastest Available)</option>
              <option value="phone">Phone Call</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="email">Email</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F241F] mb-1.5">
            Your Message / Inquiries <span className="text-[#8C460C]">*</span>
          </label>
          <textarea
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Share details of your workshop requirement, plant location, machine model, or product inquiries."
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E0D8] bg-[#F7F4EF]/50 text-sm text-[#1F241F] focus:bg-white focus:border-[#8C460C] focus:ring-1 focus:ring-[#8C460C] transition-colors"
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          size="md"
          loading={loading}
          icon={Send}
          iconPosition="right"
          className="w-full sm:w-auto"
        >
          Submit Industrial Enquiry
        </Button>
      </form>
    </div>
  );
};
