import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';
import { COMPANY, SERVICE_AREAS } from '../data/siteData';

export default function Footer({ onOpenContact, onOpenBooking }) {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand & Direct Contact */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-logo" aria-label="StudioGTA Home">
              <span>Studio<span className="logo-accent">GTA</span></span>
            </Link>
            <p className="footer-bio">
              Ontario’s premier real estate media company. Delivering high-definition HDR photography, 4K cinematic video, drone footage, 3D tours, and floor plans with guaranteed next day morning turnaround.
            </p>

            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <Phone size={15} aria-hidden="true" />
                <a href={`tel:${COMPANY.phoneClean}`} aria-label={`Call StudioGTA at ${COMPANY.phone}`}>
                  {COMPANY.phone}
                </a>
              </li>
              <li className="footer-contact-item">
                <Mail size={15} aria-hidden="true" />
                <a href={`mailto:${COMPANY.email}`} aria-label={`Email StudioGTA at ${COMPANY.email}`}>
                  {COMPANY.email}
                </a>
              </li>
              <li className="footer-contact-item">
                <MapPin size={15} aria-hidden="true" />
                <span>{COMPANY.address}</span>
              </li>
              <li className="footer-contact-item">
                <Clock size={15} aria-hidden="true" />
                <span>{COMPANY.hours}</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Media Services */}
          <div>
            <h4 className="footer-col-title">Media Services</h4>
            <ul className="footer-links">
              <li><Link to="/services">HDR Photography</Link></li>
              <li><Link to="/services">Cinematic 4K Video</Link></li>
              <li><Link to="/services">Aerial Drone Stills & Video</Link></li>
              <li><Link to="/services">3D Matterport Tours</Link></li>
              <li><Link to="/services">2D & 3D Floor Plans</Link></li>
              <li><Link to="/architectural">Architectural Photography</Link></li>
              <li><Link to="/hotel">Hotel & Hospitality Media</Link></li>
              <li><Link to="/services">Virtual Staging</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/portfolio">Media Portfolio</Link></li>
              <li><Link to="/packages">Packages & Pricing</Link></li>
              <li><Link to="/architectural">Architectural</Link></li>
              <li><Link to="/hotel">Hotel & Stays</Link></li>
              <li><Link to="/faq">Frequently Asked Questions</Link></li>
              <li>
                <button
                  type="button"
                  onClick={() => (onOpenBooking ? onOpenBooking('photo-premium-walkthrough') : null)}
                  style={{ background: 'none', border: 'none', color: '#9aa0ac', padding: 0, font: 'inherit', cursor: 'pointer' }}
                >
                  Book Shoot
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => (onOpenContact ? onOpenContact() : (onOpenBooking ? onOpenBooking() : null))}
                  style={{ background: 'none', border: 'none', color: '#9aa0ac', padding: 0, font: 'inherit', cursor: 'pointer' }}
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Service Areas */}
          <div>
            <h4 className="footer-col-title">Coverage Areas</h4>
            <ul className="footer-area-list">
              <li>
                <div className="footer-area-region" style={{ color: '#10b981', fontWeight: 700 }}>
                  Greater Toronto Area (GTA)
                </div>
                <div className="footer-area-cities" style={{ color: '#d1d5db', fontSize: '0.85rem' }}>
                  Serving Toronto, Markham, Richmond Hill, Vaughan, Mississauga with NO extra charge.
                </div>
              </li>
              <li style={{ marginTop: '0.75rem' }}>
                <div className="footer-area-region" style={{ color: '#fbbf24', fontWeight: 700 }}>
                  Out of Town Regions
                </div>
                <div className="footer-area-cities" style={{ color: '#9ca3af', fontSize: '0.85rem' }}>
                  For all other regions across Ontario, out-of-town travel costs apply.
                </div>
              </li>
              <li style={{ marginTop: '1rem' }}>
                <a
                  href="https://www.studiogta.ca/service-area"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    color: '#cba238',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    textDecoration: 'underline'
                  }}
                >
                  <span>Full Service Area Guide</span>
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2026 StudioGTA. All rights reserved.</p>
          <div className="footer-bottom-links">
            <button
              type="button"
              onClick={() => (onOpenContact ? onOpenContact() : null)}
              style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer' }}
            >
              Support
            </button>
            <button
              type="button"
              onClick={() => (onOpenBooking ? onOpenBooking('photo-premium-walkthrough') : null)}
              style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer' }}
            >
              Book Now
            </button>
            <Link to="/faq">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
