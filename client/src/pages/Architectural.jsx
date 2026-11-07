import React from 'react';
import { Link } from 'react-router-dom';
import {
  Camera,
  Layers,
  Sun,
  Award,
  Calendar,
  Phone,
  TrendingUp,
  Sparkles
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
    title: 'Showcase Architectural & Interior Design Intent',
    desc: 'Carefully selected angles and focal lengths translate three-dimensional spaces into a 2D medium, highlighting the exact structural details, flow, and material choices envisioned by architecture companies and interior designers.'
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'Maximize Condo & Property Value',
    desc: 'Striking architectural photography elevates perceived value, allowing condo developers and real estate agents to justify premium pricing and luxury market positioning before a buyer ever steps inside.'
  },
  {
    icon: <Sun size={24} />,
    title: 'Masterful Lighting for Interior Designers',
    desc: 'Expert exposure blending and perspective correction balance natural daylight with intricate fixtures, ensuring spaces curated by an interior designer appear expansive, inviting, and architecturally accurate.'
  },
  {
    icon: <Sparkles size={24} />,
    title: 'Accelerate New Build Sales & Leasing',
    desc: 'Magazine-quality interior photography captures immediate online attention, driving higher listing click-through rates and shortening the time a newly designed building sits on the market.'
  },
  {
    icon: <Award size={24} />,
    title: 'Elevate Portfolios for Architecture Companies',
    desc: 'Polished images serve as high-caliber marketing assets for architecture companies and designers, providing the exact content needed for award submissions, social campaigns, and winning the next major project.'
  },
  {
    icon: <Camera size={24} />,
    title: 'Advanced Retouching for Design Firms',
    desc: 'Precise perspective alignment and structural retouching remove lingering construction artifacts, presenting a flawless environment that represents your interior design or architectural firm’s project at its absolute best.'
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
