import React, { useState } from 'react';
import { Star, Calendar } from 'lucide-react';
import { TESTIMONIALS } from '../data/siteData';

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'Modern Architecture Living Room',
    category: 'photography',
    categoryName: 'HDR Photography',
    img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop',
    location: 'Oakville, ON'
  },
  {
    id: 2,
    title: 'Custom Waterfront Estate Aerial',
    category: 'drone',
    categoryName: 'Aerial Drone',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop',
    location: 'Burlington, ON'
  },
  {
    id: 3,
    title: 'Minimalist Chef Kitchen & Island',
    category: 'photography',
    categoryName: 'HDR Photography',
    img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000&auto=format&fit=crop',
    location: 'Toronto, ON'
  },
  {
    id: 4,
    title: 'Virtually Staged Primary Suite',
    category: 'staging',
    categoryName: 'Virtual Staging',
    img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop',
    location: 'Markham, ON'
  },
  {
    id: 5,
    title: 'Twilight Luxury Backyard Oasis',
    category: 'photography',
    categoryName: 'Twilight Stills',
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1000&auto=format&fit=crop',
    location: 'Richmond Hill, ON'
  },
  {
    id: 6,
    title: 'High-Altitude Suburban Panorama',
    category: 'drone',
    categoryName: 'Aerial Drone',
    img: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1000&auto=format&fit=crop',
    location: 'London, ON'
  },
  {
    id: 7,
    title: 'Spa-Inspired Ensuite Bathroom',
    category: 'photography',
    categoryName: 'HDR Photography',
    img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1000&auto=format&fit=crop',
    location: 'Mississauga, ON'
  },
  {
    id: 8,
    title: 'Virtually Staged Open Concept Living',
    category: 'staging',
    categoryName: 'Virtual Staging',
    img: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=1000&auto=format&fit=crop',
    location: 'Vaughan, ON'
  },
  {
    id: 9,
    title: 'Cinematic Walkthrough Feature',
    category: 'video',
    categoryName: '4K Cinema Video',
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop',
    location: 'Kitchener-Waterloo, ON'
  }
];

export default function Portfolio({ onOpenBooking }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sliderPosition, setSliderPosition] = useState(50);

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
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
              Explore our recent photography, aerial drone cinematography, and virtual staging productions across Southwest Ontario and the Greater Toronto Area.
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
              className={`filter-btn ${activeFilter === 'photography' ? 'active' : ''}`}
              onClick={() => setActiveFilter('photography')}
            >
              HDR Photography
            </button>
            <button
              type="button"
              className={`filter-btn ${activeFilter === 'drone' ? 'active' : ''}`}
              onClick={() => setActiveFilter('drone')}
            >
              Aerial Drone
            </button>
            <button
              type="button"
              className={`filter-btn ${activeFilter === 'staging' ? 'active' : ''}`}
              onClick={() => setActiveFilter('staging')}
            >
              Virtual Staging
            </button>
            <button
              type="button"
              className={`filter-btn ${activeFilter === 'video' ? 'active' : ''}`}
              onClick={() => setActiveFilter('video')}
            >
              Cinematic Video
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="gallery-item">
                <img src={item.img} alt={item.title} loading="lazy" />
                <div className="gallery-overlay">
                  <span className="gallery-caption-sub">{item.categoryName} • {item.location}</span>
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
            userSelect: 'none'
          }}>
            {/* After Image (Twilight Enhanced) */}
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
              alt="Twilight Enhanced Property"
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
                top: 0,
                left: 0,
                bottom: 0,
                width: `${sliderPosition}%`,
                overflow: 'hidden',
                borderRight: '2px solid #ffffff'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop"
                alt="Original Daytime Property"
                style={{
                  width: '880px',
                  maxWidth: 'none',
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
