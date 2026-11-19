import React, { useState } from 'react';
import { Star, Calendar } from 'lucide-react';
import { TESTIMONIALS } from '../data/siteData';
import { ALL_CLIENT_IMAGES } from '../data/imageData';

export default function Portfolio({ onOpenBooking }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sliderPosition, setSliderPosition] = useState(50);

  const filteredItems = ALL_CLIENT_IMAGES.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <div className="portfolio-page">
      {/* Page Hero */}
      <section className="section section-muted" style={{ paddingBottom: '3rem' }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">FEATURED WORK</span>
            <h1 className="section-title">Media Portfolio</h1>
            <p className="section-desc">
              Explore our recent photography across Architecture, Commercial spaces, Hotels, and Residential properties throughout Ontario and the Greater Toronto Area.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="filter-tabs">
            <button
              type="button"
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Media
            </button>
            <button
              type="button"
              className={`filter-btn ${activeFilter === 'architecture' ? 'active' : ''}`}
              onClick={() => setActiveFilter('architecture')}
            >
              Architecture
            </button>
            <button
              type="button"
              className={`filter-btn ${activeFilter === 'commercial' ? 'active' : ''}`}
              onClick={() => setActiveFilter('commercial')}
            >
              Commercial
            </button>
            <button
              type="button"
              className={`filter-btn ${activeFilter === 'hotel' ? 'active' : ''}`}
              onClick={() => setActiveFilter('hotel')}
            >
              Hotel
            </button>
            <button
              type="button"
              className={`filter-btn ${activeFilter === 'residential' ? 'active' : ''}`}
              onClick={() => setActiveFilter('residential')}
            >
              Residential
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="gallery-item"
                style={{
                  position: 'relative',
                  height: '250px',
                  width: '100%',
                  overflow: 'hidden',
                  backgroundColor: '#1f2937'
                }}
              >
                {/* Visible badge showing Category and Location */}
                <div
                  style={{
                    position: 'absolute',
                    top: '0.75rem',
                    left: '0.75rem',
                    backgroundColor: 'rgba(17, 24, 39, 0.85)',
                    backdropFilter: 'blur(4px)',
                    color: '#f9fafb',
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                    padding: '0.25rem 0.6rem',
                    borderRadius: '4px',
                    zIndex: 2,
                    letterSpacing: '0.02em',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
                  }}
                >
                  {item.badge}
                </div>

                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />

                <div className="gallery-overlay">
                  <span className="gallery-caption-sub">{item.badge}</span>
                  <div className="gallery-caption-title">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Before & After Slider */}
      <section className="section section-muted">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">TRANSFORMATION PREVIEW</span>
            <h2 className="section-title">Day-to-Dusk Twilight & Virtual Staging</h2>
            <p className="section-desc">
              Drag the interactive slider below to see how our post-production enhancements elevate ordinary property photography into captivating luxury marketing.
            </p>
          </div>

          <div style={{
            maxWidth: '880px',
            margin: '0 auto',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            position: 'relative',
            aspectRatio: '16 / 10',
            boxShadow: 'var(--shadow-card)',
            border: '1px solid var(--color-border)',
            userSelect: 'none',
            backgroundColor: '#1f2937'
          }}>
            {/* After Image (Twilight Enhanced) */}
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
              alt="Twilight Enhanced Property"
              loading="lazy"
              decoding="async"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />

            {/* Before Image (Daytime / Raw) */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                WebkitClipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop"
                alt="Original Daytime Property"
                loading="lazy"
                decoding="async"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <span style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                backgroundColor: 'rgba(0,0,0,0.65)',
                color: '#ffffff',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 600,
                padding: '0.25rem 0.65rem',
                borderRadius: 'var(--radius-sm)'
              }}>
                ORIGINAL DAYTIME
              </span>
            </div>

            {/* Slider Divider Line */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: `${sliderPosition}%`,
                width: '2px',
                backgroundColor: '#ffffff',
                boxShadow: '0 0 8px rgba(0,0,0,0.4)',
                pointerEvents: 'none'
              }}
            />

            {/* After Tag */}
            <span style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              backgroundColor: 'var(--color-gold)',
              color: '#ffffff',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 700,
              padding: '0.25rem 0.65rem',
              borderRadius: 'var(--radius-sm)'
            }}>
              STUDIOGTA ENHANCED
            </span>

            {/* Range Input Slider Controller */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                opacity: 0,
                cursor: 'ew-resize',
                zIndex: 10
              }}
              aria-label="Before and after transformation slider"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">WHAT REALTORS SAY</span>
            <h2 className="section-title">Client Feedback</h2>
          </div>

          <div className="testimonials-grid">
            {TESTIMONIALS.slice(0, 2).map((t, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#cba238" stroke="#cba238" />
                  ))}
                </div>
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-author-block">
                  <div className="testimonial-author-name">{t.author}</div>
                  <div className="testimonial-brokerage">{t.brokerage} • {t.location}</div>
                </div>
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
              <span>Book Your Next Shoot</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
