import React from 'react';
import { Link } from 'react-router-dom';
import {
  Camera,
  Layers,
  Sun,
  Award,
  Calendar,
  CheckCircle,
  Phone,
  ShieldCheck
} from 'lucide-react';
import { COMPANY, GUARANTEES } from '../data/siteData';

const ARCHITECTURAL_SHOWCASE = [
  {
    title: 'Modern Minimalist Detached Residence',
    category: 'Custom Residential Build',
    location: 'Oakville, ON',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    details: 'Framing sharp geometric lines, continuous glass curtain walls, and natural cedar cladding.'
  },
  {
    title: 'Urban Structural Infill & Atrium',
    category: 'Commercial Architecture',
    location: 'Downtown Toronto, ON',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
    details: 'Multi-story natural light well, exposed concrete finishes, and floating steel staircases.'
  },
  {
    title: 'Contemporary Luxury Estate Elevation',
    category: 'Architectural Exterior',
    location: 'Markham / Unionville, ON',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
    details: 'Golden hour twilight balance highlighting exterior architectural accents and cantilevered roofs.'
  },
  {
    title: 'Refined Interior Millwork & Textures',
    category: 'Interior Design & Detailing',
    location: 'Richmond Hill, ON',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop',
    details: 'Macro texture documentation of white-oak cabinetry, book-matched marble, and ambient cove lighting.'
  }
];

const ARCHITECTURAL_PILLARS = [
  {
    icon: <Layers size={24} />,
    title: 'Perspective & Line Correction',
    desc: 'Eliminating optical distortion and converging vertical lines. We capture true 90-degree elevations and rectilinear alignment essential for portfolio and award standards.'
  },
  {
    icon: <Sun size={24} />,
    title: 'Materiality & Authentic Textures',
    desc: 'High-fidelity capture of tactile surfaces: hand-scraped hardwoods, polished aggregate concrete, Venetian plaster, and natural stone vein patterns without harsh artificial glare.'
  },
  {
    icon: <Camera size={24} />,
    title: 'Ambient & Architectural Lighting',
    desc: 'Carefully staged natural lighting blended with subtle fill flash to showcase how light sculpts volumes and spaces throughout the day.'
  },
  {
    icon: <Award size={24} />,
    title: 'Award & Publication Ready',
    desc: 'Delivered in full uncompressed 300 DPI TIFF and high-res JPEG formats tailored for OAA awards, architectural digest submissions, and design monograph printing.'
  }
];

export default function Architectural({ onOpenBooking }) {
  return (
    <div className="architectural-page">
      {/* Page Hero */}
      <section className="section section-muted" style={{ paddingBottom: '3.5rem' }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">ARCHITECTURAL & BUILDER MEDIA</span>
            <h1 className="section-title">Showcasing Design, Textures, and Structural Beauty</h1>
            <p className="section-desc">
              Precision architectural photography engineered for architects, custom home builders, and interior designers across Ontario.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.75rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => onOpenBooking('photo-premium-walkthrough')}
              >
                <Calendar size={16} />
                <span>Book Architectural Shoot</span>
              </button>
              <a href={`tel:${COMPANY.phoneClean}`} className="btn btn-outline">
                <Phone size={15} />
                <span>Consultation: {COMPANY.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">OUR SPECIALIZATION</span>
            <h2 className="section-title">Built for Structural Integrity & Design Intent</h2>
            <p className="section-desc">
              Standard real estate wide-angle lenses distort proportions. Our architectural workflow respects the true scale, volume, and artisan details of your project.
            </p>
          </div>

          <div className="services-grid">
            {ARCHITECTURAL_PILLARS.map((p, idx) => (
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
            <span className="eyebrow">PORTFOLIO EXCELLENCE</span>
            <h2 className="section-title">Recent Architectural Commissions</h2>
            <p className="section-desc">
              A curated selection of our work capturing high-end custom homes, modern commercial designs, and structural renovations.
            </p>
          </div>

          <div className="architectural-showcase-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {ARCHITECTURAL_SHOWCASE.map((item, idx) => (
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
                    {item.details}
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
          <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>FAST TURNAROUND & COMPLETE REASSURANCE</span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '1rem', color: '#ffffff' }}>
            Elevate Your Firm’s Built Portfolio
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#9ca3af', marginBottom: '2rem', lineHeight: 1.6 }}>
            Guaranteed next day morning turnaround. Secure your production slot with our credited $100 deposit, with balance due only after media review.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => onOpenBooking('photo-premium-walkthrough')}
            >
              <Calendar size={18} />
              <span>Book Architectural Media</span>
            </button>
            <Link to="/contact" className="btn btn-outline" style={{ borderColor: '#4b5563', color: '#ffffff' }}>
              <span>Request Custom Proposal</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
