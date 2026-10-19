import React from 'react';
import {
  ShieldCheck,
  CheckCircle,
  Calendar
} from 'lucide-react';
import { TRUST_STATS, HOW_IT_WORKS_STEPS, GUARANTEES } from '../data/siteData';

export default function About({ onOpenBooking }) {
  return (
    <div className="about-page">
      {/* Page Hero */}
      <section className="section section-muted" style={{ paddingBottom: '3.5rem' }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">ABOUT STUDIOGTA</span>
            <h1 className="section-title">Visual Storytelling That Elevates Ontario Real Estate</h1>
            <p className="section-desc">
              Founded on a mission to eliminate delays, inconsistent quality, and complex booking friction from real estate marketing. We partner with leading realtors across Southwest Ontario and the GTA to produce captivating, listing-winning visual assets.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story & Mission */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}>
            <div>
              <span className="eyebrow">OUR MISSION</span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '1.25rem' }}>
                Engineered for Speed, Precision, and Realtor Success
              </h2>
              <p style={{ marginBottom: '1.25rem', lineHeight: 1.7 }}>
                In today's fast-moving real estate market, timing is everything. A listing delay of even 48 hours can mean lost buyer momentum or missed weekend open house traffic.
              </p>
              <p style={{ marginBottom: '1.5rem', lineHeight: 1.7 }}>
                That's why StudioGTA was built around a 12-hour delivery model. We combine master bracketed HDR photography, certified drone pilots, and dedicated editing teams to guarantee your photos are in your inbox by 9:00 AM the following morning — with zero upfront deposit required.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <CheckCircle size={18} color="#cba238" />
                  <span style={{ fontWeight: 600, fontSize: '0.92rem' }}>100% On-Time Delivery</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <CheckCircle size={18} color="#cba238" />
                  <span style={{ fontWeight: 600, fontSize: '0.92rem' }}>Transport Canada Certified</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <CheckCircle size={18} color="#cba238" />
                  <span style={{ fontWeight: 600, fontSize: '0.92rem' }}>Unlimited Free Revisions</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <CheckCircle size={18} color="#cba238" />
                  <span style={{ fontWeight: 600, fontSize: '0.92rem' }}>Pay After Approval</span>
                </div>
              </div>
            </div>

            <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=900&auto=format&fit=crop"
                alt="StudioGTA Team On-Site Production"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="section section-dark">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            {TRUST_STATS.map((stat, idx) => (
              <div key={idx}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', fontWeight: 700, color: 'var(--color-gold)' }}>
                  {stat.number}{stat.suffix}
                </div>
                <div style={{ fontWeight: 600, fontSize: '1.05rem', color: '#ffffff', marginTop: '0.25rem' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '0.82rem', color: '#8892a4', marginTop: '0.25rem' }}>
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Process (How It Works) */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">OUR PROCESS</span>
            <h2 className="section-title">The StudioGTA 4-Step Production Flow</h2>
            <p className="section-desc">
              Every shoot is managed through our standardized quality control pipeline to ensure flawless consistency.
            </p>
          </div>

          <div className="steps-grid">
            {HOW_IT_WORKS_STEPS.map((s, idx) => (
              <div key={idx} className="step-card">
                <div className="step-number">{s.step}</div>
                <h4 className="step-title">{s.title}</h4>
                <p className="step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="section section-muted">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">CLIENT COMMITMENT</span>
            <h2 className="section-title">Our Guarantees to You</h2>
          </div>

          <div className="guarantees-grid">
            {GUARANTEES.map((g, idx) => (
              <div key={idx} className="guarantee-card">
                <div className="guarantee-icon-wrap">
                  <ShieldCheck size={22} />
                </div>
                <h4 className="guarantee-title">{g.title}</h4>
                <p className="guarantee-desc">{g.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => onOpenBooking('standard')}
            >
              <Calendar size={18} />
              <span>Book With Zero Deposit</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
