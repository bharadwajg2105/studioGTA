import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone } from 'lucide-react';
import { FAQS, COMPANY } from '../data/siteData';

export default function FAQ({ onOpenBooking }) {
  const [openIndex, setOpenIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Booking & Scheduling', 'Turnaround & Delivery', 'Pricing & Payment', 'Drone & Regulations', 'Property Preparation'];

  const filteredFaqs = FAQS.filter((faq) => {
    if (selectedCategory === 'All') return true;
    return faq.category === selectedCategory;
  });

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div className="faq-page">
      {/* Page Hero */}
      <section className="section section-muted" style={{ paddingBottom: '3.5rem' }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">COMMON QUESTIONS</span>
            <h1 className="section-title">Frequently Asked Questions</h1>
            <p className="section-desc">
              Everything you need to know about our real estate media services, turnaround guarantees, drone pilot certifications, and zero-deposit payment terms.
            </p>

            {/* Category Filter Pills */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setOpenIndex(0);
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="section">
        <div className="container">
          <div className="faq-accordion">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown size={18} className="faq-icon" />
                  </button>
                  {isOpen && (
                    <div className="faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Need help banner */}
          <div style={{
            maxWidth: '840px',
            margin: '3.5rem auto 0 auto',
            backgroundColor: 'var(--color-muted-bg)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-xl)',
            padding: '2.5rem',
            textAlign: 'center'
          }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', marginBottom: '0.75rem' }}>
              Still have a question?
            </h3>
            <p style={{ color: 'var(--color-fg-muted)', marginBottom: '1.75rem' }}>
              We are here to assist you anytime. Call us directly or send a message and our team will get back to you within 30 minutes.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => onOpenBooking('standard')}
              >
                <span>Book a Shoot</span>
              </button>
              <a href={`tel:${COMPANY.phoneClean}`} className="btn btn-outline">
                <Phone size={15} />
                <span>Call {COMPANY.phone}</span>
              </a>
              <Link to="/contact" className="btn btn-outline">
                <span>Contact Our Team</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
