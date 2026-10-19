import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
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
              Ontario’s premier real estate media company. Delivering high-definition HDR photography, 4K cinematic video, drone footage, 3D tours, and floor plans with guaranteed 12-hour turnaround.
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
              <li><Link to="/services">Virtual Staging</Link></li>
              <li><Link to="/services">Twilight & Sunset Media</Link></li>
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
              <li>
                <button
                  type="button"
                  onClick={() => (onOpenBooking ? onOpenBooking() : null)}
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
              <li><Link to="/faq">Frequently Asked Questions</Link></li>
            </ul>
          </div>

          {/* Column 4: Service Areas */}
          <div>
            <h4 className="footer-col-title">Coverage Areas</h4>
            <ul className="footer-area-list">
              {SERVICE_AREAS.map((area, idx) => (
                <li key={idx}>
                  <div className="footer-area-region">{area.region}</div>
                  <div className="footer-area-cities">{area.cities.slice(0, 6).join(', ')}...</div>
                </li>
              ))}
              <li style={{ marginTop: '0.5rem', color: '#cba238', fontSize: '0.8rem', fontWeight: 600 }}>
                ✓ $0 Travel Fee within Core Zones
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
              onClick={() => (onOpenBooking ? onOpenBooking() : null)}
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
