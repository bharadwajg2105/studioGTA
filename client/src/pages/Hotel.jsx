import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Coffee,
  CheckCircle,
  Calendar,
  Phone,
  ShieldCheck,
  Star,
  Camera
} from 'lucide-react';
import { COMPANY, GUARANTEES } from '../data/siteData';

const HOTEL_SHOWCASE = [
  {
    title: 'Executive Suite & Living Lounge',
    category: 'Luxury Guest Room',
    location: 'Downtown Toronto, ON',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop',
    desc: 'Crisp layered textures, soft morning window lighting, and plush bedding compositions that inspire restful stays.'
  },
  {
    title: 'Boutique Lobby & Cocktail Bar',
    category: 'Public Spaces & F&B',
    location: 'Yorkville, Toronto, ON',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
    desc: 'Warm evening ambiance, custom brass finishes, and curated bar lighting capturing the hotel’s vibrant nightlife vibe.'
  },
  {
    title: 'Resort Pool & Sunset Terrace',
    category: 'Amenities & Grounds',
    location: 'Niagara-on-the-Lake, ON',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
    desc: 'Pristine water reflections, poolside cabanas, and twilight exterior lighting highlighting outdoor relaxation amenities.'
  },
  {
    title: 'Spa & Wellness Sanctuary',
    category: 'Wellness & Relaxation',
    location: 'Muskoka / GTA, ON',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
    desc: 'Calming earthy tones, steam ambiance, and serene vignette compositions that convey pure luxury and rejuvenation.'
  }
];

const HOTEL_PILLARS = [
  {
    icon: <Sparkles size={24} />,
    title: 'Emotional Guest Visuals',
    desc: 'Guests buy an experience before they book a room. We craft warm, aspirational compositions that communicate luxury comfort and effortless relaxation.'
  },
  {
    icon: <Coffee size={24} />,
    title: 'Amenity & Dining Storytelling',
    desc: 'Capturing the fine details: chef-plated culinary creations, artisan coffee stations, plush robes, and inviting lounge seating that differentiate your property.'
  },
  {
    icon: <Camera size={24} />,
    title: 'OTA & Brand Standards',
    desc: 'Deliverables formatted for high-conversion performance on Marriott, Hilton, Leading Hotels of the World, Expedia VIP, Booking.com, and direct booking web engines.'
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'Next-Day Fast Delivery',
    desc: 'Guaranteed next day morning turnaround so your revenue and marketing teams can launch seasonal campaigns and promo packages without delay.'
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

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {HOTEL_SHOWCASE.map((item, idx) => (
              <div
                key={idx}
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
                <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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
                    {item.category}
                  </div>
                </div>

                <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-gold-deep)', fontWeight: 600, marginBottom: '0.25rem' }}>
                    {item.location}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-dark)' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-fg-muted)', lineHeight: 1.6, marginTop: 'auto' }}>
                    {item.desc}
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
            Guaranteed next day morning turnaround with a $100 credited booking deposit. Minimal disruption to your in-house guests during production.
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
    </div>
  );
}
