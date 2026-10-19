import React from 'react';
import { Phone, Mail, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { COMPANY } from '../data/siteData';

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container top-bar-inner">
        {/* Left: Contact Info */}
        <div className="top-bar-left">
          <div className="top-bar-item">
            <Phone size={13} className="icon-gold" aria-hidden="true" />
            <a href={`tel:${COMPANY.phoneClean}`} aria-label={`Call StudioGTA at ${COMPANY.phone}`}>
              {COMPANY.phone}
            </a>
          </div>

          <span className="top-bar-separator" aria-hidden="true">•</span>

          <div className="top-bar-item">
            <Mail size={13} className="icon-gold" aria-hidden="true" />
            <a href={`mailto:${COMPANY.email}`} aria-label={`Email StudioGTA at ${COMPANY.email}`}>
              {COMPANY.email}
            </a>
          </div>
        </div>

        {/* Right: Trust badges */}
        <div className="top-bar-right">
          <div className="top-bar-item">
            <ShieldCheck size={13} className="icon-gold" aria-hidden="true" />
            <span>100% Guaranteed</span>
          </div>

          <span className="top-bar-separator" aria-hidden="true">•</span>

          <div className="top-bar-item">
            <Clock size={13} className="icon-gold" aria-hidden="true" />
            <span>12-Hour Delivery</span>
          </div>

          <span className="top-bar-separator" aria-hidden="true">•</span>

          <div className="top-bar-item">
            <MapPin size={13} className="icon-gold" aria-hidden="true" />
            <span>SW Ontario & GTA</span>
          </div>
        </div>
      </div>
    </div>
  );
}
