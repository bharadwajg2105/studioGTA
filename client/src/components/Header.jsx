import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, Camera, Calendar } from 'lucide-react';
import { COMPANY, ANNOUNCEMENT_BAR } from '../data/siteData';
import TopBar from './TopBar';

export default function Header({ onOpenBooking, onOpenContact }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [announcementDismissed, setAnnouncementDismissed] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const orig = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = orig;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleBookingClick = (e) => {
    e.preventDefault();
    closeMenu();
    if (onOpenBooking) onOpenBooking();
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    closeMenu();
    if (onOpenContact) {
      onOpenContact();
    } else if (onOpenBooking) {
      onOpenBooking();
    }
  };

  return (
    <>
      {/* Top Announcement Bar */}
      {!announcementDismissed && (
        <div className="announcement-bar" role="region" aria-label="Announcement">
          <div className="container announcement-inner">
            <span className="announcement-badge">{ANNOUNCEMENT_BAR.badge}</span>
            <span className="announcement-text">{ANNOUNCEMENT_BAR.text}</span>
            <button
              type="button"
              className="announcement-link"
              onClick={handleBookingClick}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              {ANNOUNCEMENT_BAR.ctaText} →
            </button>
            <button
              type="button"
              className="announcement-close"
              onClick={() => setAnnouncementDismissed(true)}
              aria-label="Dismiss announcement"
            >
              <X size={15} />
            </button>
          </div>
        </div>
      )}

      {/* Desktop Top Contact Strip */}
      <TopBar />

      {/* Main Sticky Header */}
      <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="container header-inner">
          {/* Brand Logo */}
          <Link to="/" className="brand-logo" onClick={closeMenu} aria-label="StudioGTA Home">
            <Camera className="brand-icon" strokeWidth={2.2} />
            <span>Studio<span className="logo-accent">GTA</span></span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Primary Navigation">
            <ul className="nav-links">
              <li className="nav-item">
                <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active' : '')}>
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/packages" className={({ isActive }) => (isActive ? 'active' : '')}>
                  Packages
                </NavLink>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  onClick={handleContactClick}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.92rem',
                    fontWeight: 500,
                    color: 'var(--color-fg-muted)',
                    padding: '0.35rem 0'
                  }}
                >
                  Contact
                </button>
              </li>
              <li className="nav-item">
                <NavLink to="/faq" className={({ isActive }) => (isActive ? 'active' : '')}>
                  FAQ
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Header Action Buttons */}
          <div className="header-actions">
            <a
              href={`tel:${COMPANY.phoneClean}`}
              className="header-phone-link header-desktop-only"
              aria-label={`Call ${COMPANY.phone}`}
            >
              <Phone size={15} className="icon-gold" />
              <span>{COMPANY.phone}</span>
            </a>

            <button
              type="button"
              className="btn btn-outline btn-sm header-desktop-only"
              onClick={handleBookingClick}
              style={{
                borderColor: '#e5e3df',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
            >
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#10b981' }} />
              <span>Check Availability</span>
            </button>

            <button
              type="button"
              className="btn btn-primary btn-sm header-desktop-only"
              onClick={handleBookingClick}
            >
              <Calendar size={14} />
              <span>Book Shoot</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`mobile-nav-overlay ${mobileMenuOpen ? 'is-open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      <div
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div className="mobile-nav-header">
          <Link to="/" className="brand-logo" onClick={closeMenu}>
            <Camera className="brand-icon" strokeWidth={2.2} />
            <span>Studio<span className="logo-accent">GTA</span></span>
          </Link>
          <button
            type="button"
            className="mobile-nav-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <ul className="mobile-nav-links">
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/packages" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
              Packages & Pricing
            </NavLink>
          </li>
          <li>
            <button
              type="button"
              onClick={handleContactClick}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.05rem',
                fontWeight: 500,
                color: '#374151',
                padding: '0.5rem 0.75rem',
                textAlign: 'left',
                width: '100%',
                borderRadius: '8px'
              }}
            >
              Contact Us
            </button>
          </li>
          <li>
            <NavLink to="/faq" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
              FAQ
            </NavLink>
          </li>
        </ul>

        <div className="mobile-nav-footer">
          <a
            href={`tel:${COMPANY.phoneClean}`}
            className="btn btn-outline btn-full"
            onClick={closeMenu}
          >
            <Phone size={15} />
            <span>Call {COMPANY.phone}</span>
          </a>

          <button
            type="button"
            className="btn btn-primary btn-full"
            onClick={handleBookingClick}
          >
            <Calendar size={15} />
            <span>Book a Shoot</span>
          </button>
        </div>
      </div>

      <style>{`
        /* Mobile Navigation Media Query (max-width: 1024px) */
        @media (max-width: 1024px) {
          .desktop-nav,
          .nav-links,
          .header-desktop-only,
          .header-phone-link {
            display: none !important;
          }

          .mobile-menu-toggle {
            display: inline-flex !important;
            align-items: center;
            justify-content: center;
            background: transparent;
            border: none;
            padding: 0.5rem;
            color: var(--color-dark, #111827);
            cursor: pointer;
            border-radius: 8px;
            transition: background-color 0.2s ease;
          }

          .mobile-menu-toggle:hover {
            background-color: rgba(0, 0, 0, 0.05);
          }

          .header-inner {
            height: 64px;
          }

          .brand-logo {
            font-size: 1.35rem;
          }
        }

        @media (min-width: 1025px) {
          .desktop-nav {
            display: block !important;
          }
          .mobile-menu-toggle {
            display: none !important;
          }
          .mobile-nav-overlay,
          .mobile-nav-drawer {
            display: none !important;
          }
        }

        .mobile-nav-overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 9998;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .mobile-nav-overlay.is-open {
          opacity: 1;
          pointer-events: auto;
        }

        .mobile-nav-drawer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: min(320px, 85vw);
          background-color: #ffffff;
          z-index: 9999;
          transform: translateX(100%);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          box-shadow: -8px 0 30px rgba(0, 0, 0, 0.2);
          overflow-y: auto;
        }

        .mobile-nav-drawer.is-open {
          transform: translateX(0);
        }

        .mobile-nav-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid #f3f4f6;
        }

        .mobile-nav-close {
          background: none;
          border: none;
          padding: 0.4rem;
          color: #4b5563;
          cursor: pointer;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-nav-links {
          list-style: none;
          padding: 1.5rem;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .mobile-nav-links a {
          font-size: 1.05rem;
          font-weight: 500;
          color: #374151;
          display: block;
          padding: 0.5rem 0.75rem;
          border-radius: 8px;
          transition: all 0.15s ease;
        }

        .mobile-nav-links a:hover,
        .mobile-nav-links a.active {
          color: #b45309;
          background-color: #fef3c7;
          font-weight: 600;
        }

        .mobile-nav-footer {
          margin-top: auto;
          padding: 1.5rem;
          border-top: 1px solid #f3f4f6;
          background-color: #fafaf9;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
      `}</style>
    </>
  );
}
