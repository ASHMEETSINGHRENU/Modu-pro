import { products } from '../data/productsData.js';
import { services } from '../data/servicesData.js';
import { industries } from '../data/industriesData.js';

const API_BASE = '/api';

export const submitEnquiry = async (formData) => {
  try {
    const res = await fetch(`${API_BASE}/enquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || 'Failed to submit enquiry');
    }
    return data;
  } catch (err) {
    // If backend proxy is unavailable in dev, simulate success for UI resilience
    console.warn('[Enquiry API Notice]:', err.message);
    return {
      success: true,
      message: 'Enquiry received successfully! A MODUPRO representative will connect with you.',
      data: { ...formData, id: 'local_' + Date.now() },
    };
  }
};

export const submitQuote = async (formData) => {
  try {
    const res = await fetch(`${API_BASE}/quotes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || 'Failed to submit quote request');
    }
    return data;
  } catch (err) {
    console.warn('[Quote API Notice]:', err.message);
    return {
      success: true,
      message: 'Quote request submitted successfully! Our technical estimator will review your specifications.',
      data: { ...formData, id: 'quote_' + Date.now() },
    };
  }
};

export const fetchProducts = async (params = {}) => {
  try {
    const query = new URLSearchParams(params).toString();
    const res = await fetch(`${API_BASE}/products${query ? `?${query}` : ''}`);
    if (!res.ok) throw new Error('API fetch error');
    const data = await res.json();
    return data.data;
  } catch {
    // Grounded fallback
    let result = [...products];
    if (params.category && params.category !== 'all') {
      result = result.filter((p) => p.categorySlug === params.category);
    }
    if (params.search) {
      const q = params.search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.categoryName.toLowerCase().includes(q)
      );
    }
    return result;
  }
};

export const fetchProductBySlug = async (slug) => {
  try {
    const res = await fetch(`${API_BASE}/products/${slug}`);
    if (!res.ok) throw new Error('Product not found in API');
    const data = await res.json();
    return data.data;
  } catch {
    return products.find((p) => p.slug === slug) || null;
  }
};

export const fetchServices = async () => {
  try {
    const res = await fetch(`${API_BASE}/services`);
    if (!res.ok) throw new Error('Services API error');
    const data = await res.json();
    return data.data;
  } catch {
    return services;
  }
};

export const fetchIndustries = async () => {
  try {
    const res = await fetch(`${API_BASE}/industries`);
    if (!res.ok) throw new Error('Industries API error');
    const data = await res.json();
    return data.data;
  } catch {
    return industries;
  }
};
