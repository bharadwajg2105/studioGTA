import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, Calendar } from 'lucide-react';
import { FAQS, COMPANY } from '../data/siteData';

export default function FAQ({ onOpenBooking }) {
  const [openIndex, setOpenIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Commonly Asked Booking Questions'];

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
            <span className="eyebrow">FREQUENTLY ASKED QUESTIONS</span>
            <h1 className="section-title">We’re Here to Help You Get the Best Out of Your Listing</h1>
            <p className="section-desc">
              Below are answers to our most frequently asked questions. Please let us know if you can’t find what you need.
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
          <div className="faq-accordion" style={{ maxWidth: '840px', margin: '0 auto' }}>
            <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--color-gold-deep)'
              }}>
                Commonly Asked Booking Questions
              </span>
            </div>

            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isOpen}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: isOpen ? 'var(--color-gold-deep)' : 'var(--color-dark)'
                    }}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={20}
                      className="faq-icon"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s ease',
                        flexShrink: 0,
                        marginLeft: '1rem',
                        color: isOpen ? 'var(--color-gold-deep)' : '#9ca3af'
                      }}
                    />
                  </button>
                  {isOpen && (
                    <div
                      className="faq-answer"
                      style={{
                        padding: '0 1.5rem 1.5rem 1.5rem',
                        color: '#4b5563',
                        fontSize: '0.96rem',
                        lineHeight: 1.7,
                        whiteSpace: 'pre-line'
                      }}
                    >
                      <p style={{ margin: 0 }}>{faq.a}</p>
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
              We are here to assist you anytime. Call us directly or send a message and our team will get back to you promptly.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => onOpenBooking('photo-premium-walkthrough')}
              >
                <Calendar size={15} />
                <span>Book a Shoot</span>
              </button>
              <a href={`tel:${COMPANY.phoneClean}`} className="btn btn-outline">
                <Phone size={15} />
                <span>Call {COMPANY.phone}</span>
              </a>
              <Link to="/contact" className="btn btn-outline">
                <Mail size={15} />
                <span>Contact Our Team</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
