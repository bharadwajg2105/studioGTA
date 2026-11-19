import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Coffee,
  CheckCircle,
  Calendar,
  Phone,
  Star,
  Camera,
  TrendingUp,
  Layers,
  Award
} from 'lucide-react';
import { COMPANY, GUARANTEES } from '../data/siteData';
import { HOTEL_IMAGES } from '../data/imageData';

const HOTEL_PILLARS = [
  {
    icon: <TrendingUp size={24} />,
    title: 'Elevated Room Booking Conversions',
    desc: 'Captivating, professional imagery immediately grabs attention on booking engines, keeping potential guests on your listing longer and directly translating digital views into confirmed hotel room reservations.'
  },
  {
    icon: <Star size={24} />,
    title: 'Premium Hotel Brand Positioning',
    desc: 'Exceptional photography highlights your attention to detail and elevates the perceived luxury of your hotel rooms, allowing you to confidently command and justify higher average daily rates.'
  },
  {
    icon: <Camera size={24} />,
    title: 'Accurate Hotel Room Representation',
    desc: 'Specialized lenses and strategic angles showcase the true size, layout, and flow of your guest suites and hotel rooms, setting accurate expectations and protecting your property from negative reviews.'
  },
  {
    icon: <Coffee size={24} />,
    title: 'The Complete Hospitality Experience',
    desc: 'Beyond the hotel rooms, strategic photography captures the vibrant atmosphere of your unique amenities—like spas, pools, and dining areas—selling the complete lifestyle of your property.'
  },
  {
    icon: <Layers size={24} />,
    title: 'Versatile Room Marketing Assets',
    desc: 'Equip your team with a comprehensive portfolio of high-resolution, meticulously edited hotel room images for a consistent, high-impact visual identity across social media, email campaigns, and online travel agencies (OTAs).'
  },
  {
    icon: <Award size={24} />,
    title: 'Rapid Return on Investment',
    desc: 'The immediate boost in nightly occupancy means the one-time cost of a professional hotel room photoshoot is typically recovered within just a handful of new room bookings.'
  }
];

export default function Hotel({ onOpenBooking }) {
  return (
    <div className="hotel-page">
      {/* Page Hero */}
      <section className="section section-muted" style={{ paddingBottom: '3.5rem' }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">HOSPITALITY & BOUTIQUE STAYS</span>
            <h1 className="section-title">High-End Hospitality Photography for Hotels, Resorts, and Boutique Stays</h1>
            <p className="section-desc">
              Visual media engineered to maximize occupancy, elevate Average Daily Rates (ADR), and turn browser clicks into confirmed reservations.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.75rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => onOpenBooking('photo-premium-walkthrough')}
              >
                <Calendar size={16} />
                <span>Book Hospitality Shoot</span>
              </button>
              <a href={`tel:${COMPANY.phoneClean}`} className="btn btn-outline">
                <Phone size={15} />
                <span>Direct Line: {COMPANY.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">THE HOSPITALITY STANDARD</span>
            <h2 className="section-title">Designed to Increase Direct Bookings</h2>
            <p className="section-desc">
              Over 85% of travel booking decisions start with photography. We ensure your hotel outshines the competition on every platform.
            </p>
          </div>

          <div className="services-grid">
            {HOTEL_PILLARS.map((p, idx) => (
              <div key={idx} className="service-card">
                <div className="service-icon-box" style={{ color: 'var(--color-gold-deep)' }}>
                  {p.icon}
                </div>
                <h3 className="service-title">{p.title}</h3>
                <p className="service-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Grid */}
      <section className="section section-muted">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">VISUAL PORTFOLIO</span>
            <h2 className="section-title">Hospitality & Resort Showcases</h2>
            <p className="section-desc">
              Explore our work capturing Ontario boutique hotels, historic inns, and luxury resort properties.
            </p>
          </div>

          <div className="hotel-showcase-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {HOTEL_IMAGES.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-card)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ height: '250px', overflow: 'hidden', position: 'relative', backgroundColor: '#1f2937' }}>
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                    style={{ width: '100%', height: '250px', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: 'rgba(17, 24, 39, 0.85)',
                    color: '#f9fafb',
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    padding: '0.25rem 0.6rem',
                    borderRadius: '4px',
                    textTransform: 'uppercase'
                  }}>
                    {item.badge}
                  </div>
                </div>

                <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-gold-deep)', fontWeight: 600, marginBottom: '0.25rem' }}>
                    {item.locationName}, ON
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-dark)' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-fg-muted)', lineHeight: 1.6, marginTop: 'auto' }}>
                    High-end hospitality imagery capturing guest suites, public amenities, and ambient boutique experiences.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees & Booking Banner */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container-narrow">
          <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>SEAMLESS PRODUCTION SCHEDULING</span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '1rem', color: '#ffffff' }}>
            Ready to Elevate Your Property’s Visual Presence?
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#9ca3af', marginBottom: '2rem', lineHeight: 1.6 }}>
            Customized scheduling with minimal disruption to your in-house guests and hotel operations.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => onOpenBooking('photo-premium-walkthrough')}
            >
              <Calendar size={18} />
              <span>Schedule Property Media</span>
            </button>
            <Link to="/contact" className="btn btn-outline" style={{ borderColor: '#4b5563', color: '#ffffff' }}>
              <span>Contact Hospitality Specialist</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Keywords */}
      <section style={{ padding: '2rem 1rem', backgroundColor: '#fcfbf9', borderTop: '1px solid #e5e7eb', textAlign: 'center' }}>
        <div className="container">
          <p style={{ fontSize: '0.85rem', color: '#6b7280', margin: 0, lineHeight: 1.6 }}>
            Keywords: Hotel Photography, Hospitality Media, Resort Photography, Boutique Hotel Marketing, Hotel Room Shoots.
          </p>
        </div>
      </section>
    </div>
  );
}
