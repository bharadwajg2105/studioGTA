import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Check,
  ShieldCheck,
  Clock,
  Zap,
  Award,
  Camera,
  ArrowRight,
  Phone,
  Star,
  Users,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import {
  PACKAGES,
  GUARANTEES,
  HOW_IT_WORKS_STEPS,
  TESTIMONIALS,
  COMPANY,
  HERO_SLIDES
} from '../data/siteData';
import BrokerageLogoRow from '../components/BrokerageLogoRow';

const ROTATING_LOCATIONS = [
  'Oakville',
  'Burlington',
  'Toronto',
  'Mississauga',
  'Markham',
  'Hamilton',
  'London',
  'Vaughan',
  'Richmond Hill'
];

export default function Home({ onOpenBooking, onOpenContact }) {
  // Rotating city in hero headline
  const [cityIndex, setCityIndex] = useState(0);
  const [fadeCity, setFadeCity] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeCity(false);
      setTimeout(() => {
        setCityIndex((prev) => (prev + 1) % ROTATING_LOCATIONS.length);
        setFadeCity(true);
      }, 300);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  // Sliding Hero Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = HERO_SLIDES.length;
  const slideTimerRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    slideTimerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4500);
    return () => clearInterval(slideTimerRef.current);
  }, [totalSlides]);

  const handleSelectCategory = (cat) => {
    const idx = HERO_SLIDES.findIndex(
      (s) => s.category.toLowerCase() === cat.toLowerCase()
    );
    if (idx !== -1) setCurrentSlide(idx);
    else setCurrentSlide(0);
  };

  // Property size filter in pricing section
  const [selectedSizeFilter, setSelectedSizeFilter] = useState('all');

  const scrollToPricing = (e) => {
    e.preventDefault();
    const el = document.getElementById('pricing-preview');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home-page">
      {/* ====================================================================
          1. HERO SECTION (CENTERED LAYOUT MATCHING IMAGE 1)
          ==================================================================== */}
      <section
        className="hero-section-centered"
        style={{
          padding: '3rem 0 3.5rem 0',
          textAlign: 'center',
          backgroundColor: '#ffffff'
        }}
      >
        <div className="container" style={{ maxWidth: '1080px' }}>
          {/* Top Badges */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              flexWrap: 'wrap',
              marginBottom: '1.25rem'
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: '#fef3c7',
                border: '1px solid #fde68a',
                color: '#b45309',
                fontSize: '0.78rem',
                fontWeight: 700,
                padding: '0.35rem 0.85rem',
                borderRadius: '999px',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <span>🏆</span>
              <span>#1 Real Estate Media in Ontario</span>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                color: '#374151',
                fontSize: '0.78rem',
                fontWeight: 600,
                padding: '0.35rem 0.85rem',
                borderRadius: '999px',
                boxShadow: '0 1px 2px rgba(0,0,0,0.04)'
              }}
            >
              <Zap size={13} color="#f59e0b" />
              <span>Same-Day Bookings Available</span>
            </div>
          </div>

          {/* Dynamic Headline with Rotating City */}
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 4.8vw, 3.8rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              color: '#111827',
              marginBottom: '1rem',
              letterSpacing: '-0.02em'
            }}
          >
            Professional Real Estate Photography in{' '}
            <span
              style={{
                color: '#d97706',
                display: 'inline-block',
                transition: 'opacity 0.3s ease, transform 0.3s ease',
                opacity: fadeCity ? 1 : 0,
                transform: fadeCity ? 'translateY(0)' : 'translateY(6px)'
              }}
            >
              {ROTATING_LOCATIONS[cityIndex]}
            </span>
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              color: '#4b5563',
              maxWidth: '720px',
              margin: '0 auto 1.25rem auto',
              lineHeight: 1.55
            }}
          >
            Stunning photos, drone shots, 3D tours & video that help properties sell 32% faster.
          </p>

          {/* Trust Points */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.25rem',
              fontSize: '0.88rem',
              color: '#4b5563',
              fontWeight: 600,
              marginBottom: '2rem'
            }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <Clock size={15} color="#d97706" />
              <span>12-Hour Turnaround</span>
            </div>
            <span style={{ color: '#d1d5db' }}>•</span>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <Star size={15} fill="#d97706" stroke="#d97706" />
              <span>500+ 5-Star Reviews</span>
            </div>
          </div>

          {/* ==================================================================
              SLIDING HERO CAROUSEL (NOT STATIC)
              ================================================================== */}
          <div
            className="hero-carousel-wrap"
            style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 20px 45px rgba(0, 0, 0, 0.12)',
              border: '1px solid rgba(0,0,0,0.08)',
              backgroundColor: '#1f2937',
              aspectRatio: '16 / 9',
              maxHeight: '520px',
              margin: '0 auto'
            }}
          >
            {/* Sliding Container */}
            <div
              style={{
                display: 'flex',
                height: '100%',
                width: `${totalSlides * 100}%`,
                transform: `translateX(-${(currentSlide * 100) / totalSlides}%)`,
                transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
              }}
            >
              {HERO_SLIDES.map((slide, idx) => (
                <div
                  key={slide.id}
                  style={{
                    position: 'relative',
                    width: `${100 / totalSlides}%`,
                    height: '100%',
                    flexShrink: 0
                  }}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                    loading={idx === 0 ? 'eager' : 'lazy'}
                  />
                  {/* Subtle Gradient Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 40%, rgba(0,0,0,0.3) 100%)'
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Top-Left Category Tag */}
            <div
              style={{
                position: 'absolute',
                top: '1.25rem',
                left: '1.25rem',
                backgroundColor: 'rgba(17, 24, 39, 0.75)',
                backdropFilter: 'blur(6px)',
                color: '#ffffff',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '0.35rem 0.75rem',
                borderRadius: '6px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}
            >
              {HERO_SLIDES[currentSlide]?.tag || 'FEATURED'}
            </div>

            {/* Top-Right "Get Quote" Button */}
            <button
              type="button"
              className="hero-carousel-btn-quote"
              onClick={() => onOpenBooking('standard')}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                backgroundColor: '#f59e0b',
                backgroundImage: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
                color: '#111827',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.82rem',
                fontWeight: 700,
                padding: '0.45rem 1rem',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
            >
              <span>+ Get Quote</span>
            </button>

            {/* Bottom-Left Caption */}
            <div
              className="hero-carousel-caption"
              style={{
                position: 'absolute',
                bottom: '1.25rem',
                left: '1.25rem',
                color: '#ffffff',
                textAlign: 'left'
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(0.85rem, 1.4vw, 1.05rem)',
                  fontWeight: 600,
                  textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                }}
              >
                {HERO_SLIDES[currentSlide]?.title}
              </div>
            </div>

            {/* Bottom-Right "View Portfolio" Button */}
            <Link
              to="/portfolio"
              className="hero-carousel-btn-portfolio"
              style={{
                position: 'absolute',
                bottom: '1.25rem',
                right: '1.25rem',
                backgroundColor: 'rgba(255, 255, 255, 0.92)',
                color: '#111827',
                fontSize: '0.82rem',
                fontWeight: 600,
                padding: '0.45rem 0.95rem',
                borderRadius: '8px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
              }}
            >
              <span>View Portfolio</span>
              <ArrowRight size={14} />
            </Link>

            {/* Carousel Arrow Controls */}
            <button
              type="button"
              className="hero-carousel-arrow"
              onClick={prevSlide}
              style={{
                position: 'absolute',
                left: '0.85rem',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                color: '#111827',
                border: 'none',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                transition: 'background-color 0.2s'
              }}
              aria-label="Previous slide"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              type="button"
              className="hero-carousel-arrow"
              onClick={nextSlide}
              style={{
                position: 'absolute',
                right: '0.85rem',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                color: '#111827',
                border: 'none',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                transition: 'background-color 0.2s'
              }}
              aria-label="Next slide"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Filter Pills Under Carousel */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              flexWrap: 'wrap',
              marginTop: '1.25rem',
              marginBottom: '0.75rem'
            }}
          >
            {[
              'Featured',
              'Photography',
              'Virtual Staging',
              'Drone',
              'Virtual Tour',
              'Commercial',
              'Floor Plans'
            ].map((cat) => {
              const active =
                HERO_SLIDES[currentSlide]?.category.toLowerCase() ===
                cat.toLowerCase();
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleSelectCategory(cat)}
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    padding: '0.4rem 0.9rem',
                    borderRadius: '999px',
                    border: '1px solid',
                    borderColor: active ? '#d97706' : '#e5e7eb',
                    backgroundColor: active ? '#fef3c7' : '#f9fafb',
                    color: active ? '#92400e' : '#4b5563',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Caption Below Pills */}
          <p
            style={{
              fontSize: '0.78rem',
              color: '#9ca3af',
              fontStyle: 'italic',
              marginBottom: '1.75rem'
            }}
          >
            Every image shown was professionally shot and edited by the StudioGTA team.
          </p>

          {/* Primary Action Buttons */}
          <div
            className="hero-cta-buttons"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap'
            }}
          >
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => onOpenBooking('standard')}
              style={{
                backgroundColor: '#f59e0b',
                backgroundImage: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
                color: '#111827',
                fontWeight: 700,
                boxShadow: '0 4px 14px rgba(217, 119, 6, 0.35)'
              }}
            >
              <Calendar size={18} />
              <span>Schedule Your Shoot</span>
            </button>

            <button
              type="button"
              className="btn btn-outline btn-lg"
              onClick={() => onOpenBooking('standard')}
              style={{
                borderWidth: '1.5px',
                borderColor: '#d1d5db',
                color: '#111827',
                fontWeight: 600
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }} />
              <span>Check Availability</span>
            </button>
          </div>

          {/* Subtext links */}
          <div
            style={{
              marginTop: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              fontSize: '0.84rem'
            }}
          >
            <a
              href="#pricing-preview"
              onClick={scrollToPricing}
              style={{ color: '#4b5563', textDecoration: 'underline' }}
            >
              View Pricing
            </a>
            <span style={{ color: '#d1d5db' }}>•</span>
            <button
              type="button"
              onClick={() => (onOpenContact ? onOpenContact() : onOpenBooking())}
              style={{
                background: 'none',
                border: 'none',
                color: '#4b5563',
                textDecoration: 'underline',
                cursor: 'pointer',
                font: 'inherit',
                padding: 0
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. TRUSTED BY AGENTS AT (INFINITE MARQUEE TICKER DIRECTLY BELOW HERO)
          ==================================================================== */}
      <BrokerageLogoRow />

      {/* ====================================================================
          3. INVESTMENT OPTIONS / SIMPLE, TRANSPARENT PRICING
          ==================================================================== */}
      <section
        className="section"
        id="pricing-preview"
        style={{ padding: '4.5rem 0 5rem 0', backgroundColor: '#fcfbf9' }}
      >
        <div className="container">
          {/* Section Header */}
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2.5rem auto' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                color: '#b45309',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '0.5rem'
              }}
            >
              INVESTMENT OPTIONS
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.1rem, 3.8vw, 3.1rem)',
                fontWeight: 700,
                color: '#111827',
                marginBottom: '0.75rem'
              }}
            >
              Simple, Transparent{' '}
              <span style={{ color: '#d97706', fontStyle: 'italic' }}>Pricing</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#6b7280' }}>
              Professional real estate photography packages tailored for every property type
            </p>
          </div>

          {/* Interactive Quiz Dark Banner */}
          <div
            className="quiz-dark-banner"
            style={{
              backgroundColor: '#111827',
              borderRadius: '14px',
              padding: '1.25rem 2rem',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.25rem',
              marginBottom: '2rem',
              boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
            }}
          >
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.2rem' }}>
                Not Sure Which Package?
              </div>
              <div style={{ fontSize: '0.88rem', color: '#9ca3af' }}>
                Take our 30-second quiz for a personalized recommendation
              </div>
            </div>

            <div className="quiz-dark-banner-actions" style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <span
                style={{
                  backgroundColor: '#f59e0b',
                  color: '#111827',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  padding: '0.35rem 0.75rem',
                  borderRadius: '999px',
                  textTransform: 'uppercase'
                }}
              >
                Standard Rates
              </span>

              <button
                type="button"
                onClick={() => onOpenBooking('photo-regular-video')}
                style={{
                  backgroundColor: '#ffffff',
                  color: '#111827',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  padding: '0.55rem 1.15rem',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
              >
                <span>Help Me Choose</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Four Pricing Cards Grid in Horizontal Scroller */}
          <div className="packages-scroller" style={{ marginTop: '2.5rem' }}>
            <div className="packages-grid">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`package-card ${pkg.popular ? 'is-popular' : ''}`}
                style={{
                  border: pkg.popular ? '2px solid #d97706' : '1px solid #e5e7eb',
                  backgroundColor: '#ffffff'
                }}
              >
                {pkg.popular && (
                  <div
                    className="package-badge-tag"
                    style={{
                      backgroundColor: '#d97706',
                      backgroundImage: 'linear-gradient(135deg, #f59e0b 0%, #b45309 100%)'
                    }}
                  >
                    {pkg.badge}
                  </div>
                )}

                <div className="package-header">
                  <h3 className="package-tier-name">{pkg.name}</h3>
                  <div className="package-subtitle">{pkg.subtitle}</div>

                  <div className="package-price-wrap" style={{ alignItems: 'baseline', gap: '0.35rem' }}>
                    <span className="package-currency" style={{ color: pkg.popular ? '#b45309' : '#111827', fontSize: '1.25rem', fontWeight: 600 }}>
                      CAD $
                    </span>
                    <span className="package-price" style={{ color: pkg.popular ? '#b45309' : '#111827' }}>
                      {pkg.price}
                    </span>
                  </div>

                  <div className="package-sqft">{pkg.sqft}</div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.78rem',
                      color: '#6b7280',
                      marginBottom: '1.25rem'
                    }}
                  >
                    <Clock size={13} color="#d97706" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                <ul className="package-features">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="package-feature-item">
                      <Check size={16} color="#d97706" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="package-card-footer">
                  <button
                    type="button"
                    className={`btn btn-full ${pkg.popular ? 'btn-primary' : 'btn-outline'}`}
                    onClick={() => onOpenBooking(pkg.id)}
                    style={
                      pkg.popular
                        ? {
                            backgroundColor: '#f59e0b',
                            backgroundImage: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
                            color: '#111827',
                            fontWeight: 700
                          }
                        : {}
                    }
                  >
                    <Calendar size={15} />
                    <span>Book {pkg.name}</span>
                  </button>
                </div>
              </div>
            ))}
            </div>
          </div>

          {/* Rate Sheet Footnote */}
          <div
            style={{
              textAlign: 'center',
              marginTop: '1.75rem',
              fontSize: '0.88rem',
              color: '#4b5563',
              fontStyle: 'italic',
              lineHeight: 1.5
            }}
          >
            * {COMPANY.pricingFootnote}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/packages" className="btn btn-outline">
              <span>Compare All Features & Services</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. WHY AGENTS TRUST STUDIOGTA (FEATURES GRID)
          ==================================================================== */}
      <section className="section section-muted">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">THE STUDIOGTA ADVANTAGE</span>
            <h2 className="section-title">Why Top Ontario Realtors Choose Us</h2>
            <p className="section-desc">
              We operate as your dedicated real estate media team, engineered specifically to help you win listings and close sales faster.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon-box">
                <Clock size={24} />
              </div>
              <h3 className="service-title">Guaranteed 12-Hour Turnaround</h3>
              <p className="service-desc">
                Your listings can’t wait. We deliver fully color-graded, sky-replaced HDR photos by 9:00 AM the following morning so you can launch on MLS without delay.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon-box">
                <ShieldCheck size={24} />
              </div>
              <h3 className="service-title">Pay Only After You Approve</h3>
              <p className="service-desc">
                Zero deposit required to book your shoot. Review watermarked proofs upon delivery and only pay once you are 100% satisfied with the results.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon-box">
                <Zap size={24} />
              </div>
              <h3 className="service-title">MLS & Social Media Ready</h3>
              <p className="service-desc">
                Every booking includes two sets of files: uncompressed high-resolution files for print marketing, plus MLS-compliant web files and vertical video reels.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon-box">
                <Award size={24} />
              </div>
              <h3 className="service-title">Transport Canada Drone Pilots</h3>
              <p className="service-desc">
                All aerial missions are flown by Transport Canada Advanced certified pilots with comprehensive commercial liability coverage for complete peace of mind.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon-box">
                <Camera size={24} />
              </div>
              <h3 className="service-title">Flawless Window Pulls & Color</h3>
              <p className="service-desc">
                No blown-out white windows or unnatural halos. We blend multiple ambient and flash exposures to reveal natural exterior views and true-to-life colors.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon-box">
                <Users size={24} />
              </div>
              <h3 className="service-title">Dedicated Agent Support</h3>
              <p className="service-desc">
                Direct phone and SMS line with your lead photographer. Need a rush edit or extra photo re-ordered? We respond within 30 minutes during business hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. OUR FOUR GUARANTEES
          ==================================================================== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">RISK-FREE PARTNERSHIP</span>
            <h2 className="section-title">Our Ironclad Guarantees</h2>
            <p className="section-desc">
              We eliminate all the risk from hiring a real estate media provider.
            </p>
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
        </div>
      </section>

      {/* ====================================================================
          6. HOW IT WORKS
          ==================================================================== */}
      <section className="section section-muted">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">SEAMLESS WORKFLOW</span>
            <h2 className="section-title">How It Works in 4 Simple Steps</h2>
            <p className="section-desc">
              From reservation to MLS launch in less than 24 hours.
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

      {/* ====================================================================
          7. CLIENT TESTIMONIALS
          ==================================================================== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">REPUTATION & REVIEWS</span>
            <h2 className="section-title">Trusted by Hundreds of Ontario Realtors</h2>
            <p className="section-desc">
              Here is what top-producing real estate professionals have to say about working with StudioGTA.
            </p>
          </div>

          <div className="testimonials-grid">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#d97706" stroke="#d97706" />
                  ))}
                </div>
                <blockquote className="testimonial-quote">
                  "{t.quote}"
                </blockquote>
                <div className="testimonial-author-block">
                  <div>
                    <div className="testimonial-author-name">{t.author}</div>
                    <div className="testimonial-brokerage">{t.brokerage} • {t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          8. CALL TO ACTION BANNER
          ==================================================================== */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container-narrow">
          <span className="eyebrow">GET STARTED TODAY</span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '1.25rem' }}>
            Ready to Make Your Next Listing Stand Out?
          </h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#9aa2b1' }}>
            Book your shoot in 60 seconds with zero deposit. Guaranteed 12-hour delivery across Southwest Ontario and the GTA.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => onOpenBooking('standard')}
              style={{
                backgroundColor: '#f59e0b',
                backgroundImage: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
                color: '#111827',
                fontWeight: 700
              }}
            >
              <Calendar size={18} />
              <span>Book Your Shoot Online</span>
            </button>
            <a
              href={`tel:${COMPANY.phoneClean}`}
              className="btn btn-outline btn-lg"
              style={{ color: '#ffffff', borderColor: '#3a4150' }}
            >
              <Phone size={18} />
              <span>Call {COMPANY.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
