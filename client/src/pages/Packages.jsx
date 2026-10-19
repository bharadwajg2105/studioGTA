import React, { useState } from 'react';
import {
  Check,
  Calendar,
  ShieldCheck,
  MapPin
} from 'lucide-react';
import {
  PACKAGES,
  ALACARTE_ADDONS,
  SERVICE_AREAS,
  GUARANTEES
} from '../data/siteData';

export default function Packages({ onOpenBooking }) {
  const [selectedSizeFilter, setSelectedSizeFilter] = useState('all');

  const filteredPackages = PACKAGES.filter((pkg) => {
    if (selectedSizeFilter === 'condo') return pkg.id === 'basic';
    if (selectedSizeFilter === 'mid') return pkg.id === 'basic-plus' || pkg.id === 'standard';
    if (selectedSizeFilter === 'large') return pkg.id === 'standard' || pkg.id === 'pro';
    if (selectedSizeFilter === 'luxury') return pkg.id === 'pro';
    return true;
  });

  return (
    <div className="packages-page">
      {/* Page Hero */}
      <section className="section section-muted" style={{ paddingBottom: '3.5rem' }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">TRANSPARENT PRICING</span>
            <h1 className="section-title">Packages & Pricing</h1>
            <p className="section-desc">
              All-inclusive marketing packages with zero hidden fees. Guaranteed 12–24 hour delivery, unlimited revisions, and pay only after you review and approve.
            </p>

            {/* Property Size Selector */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                className={`filter-btn ${selectedSizeFilter === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedSizeFilter('all')}
              >
                All Packages
              </button>
              <button
                type="button"
                className={`filter-btn ${selectedSizeFilter === 'condo' ? 'active' : ''}`}
                onClick={() => setSelectedSizeFilter('condo')}
              >
                Condos (&lt;1,500 sq ft)
              </button>
              <button
                type="button"
                className={`filter-btn ${selectedSizeFilter === 'mid' ? 'active' : ''}`}
                onClick={() => setSelectedSizeFilter('mid')}
              >
                Mid-Sized (1,500–2,500 sq ft)
              </button>
              <button
                type="button"
                className={`filter-btn ${selectedSizeFilter === 'large' ? 'active' : ''}`}
                onClick={() => setSelectedSizeFilter('large')}
              >
                Large Detached (2,500–3,500 sq ft)
              </button>
              <button
                type="button"
                className={`filter-btn ${selectedSizeFilter === 'luxury' ? 'active' : ''}`}
                onClick={() => setSelectedSizeFilter('luxury')}
              >
                Luxury Estates (3,500+ sq ft)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Package Cards Grid */}
      <section className="section">
        <div className="container">
          <div className="packages-grid">
            {filteredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`package-card ${pkg.popular ? 'is-popular' : ''}`}
              >
                {pkg.popular && (
                  <div className="package-badge-tag">{pkg.badge}</div>
                )}

                <div className="package-header">
                  <h3 className="package-tier-name">{pkg.name}</h3>
                  <div className="package-subtitle">{pkg.subtitle}</div>

                  <div className="package-price-wrap">
                    <span className="package-currency">$</span>
                    <span className="package-price">{pkg.price}</span>
                  </div>
                  <div className="package-sqft">{pkg.sqft}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-fg-subtle)', fontStyle: 'italic', marginBottom: '1rem' }}>
                    Ideal for: {pkg.idealFor}
                  </div>
                </div>

                <ul className="package-features">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="package-feature-item">
                      <Check size={16} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="package-card-footer">
                  <button
                    type="button"
                    className={`btn btn-full ${pkg.popular ? 'btn-primary' : 'btn-outline'}`}
                    onClick={() => onOpenBooking(pkg.id)}
                  >
                    <Calendar size={15} />
                    <span>Book {pkg.name}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="section section-muted">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">DETAILED COMPARISON</span>
            <h2 className="section-title">Side-by-Side Feature Comparison</h2>
            <p className="section-desc">
              Understand exactly what is included in each of our professional media packages.
            </p>
          </div>

          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th className="col-feature">Inclusions</th>
                  <th>Basic ($199)</th>
                  <th>Basic+ ($249)</th>
                  <th className="col-popular">Standard ($399) ★</th>
                  <th>Pro ($599)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>HDR Photos</strong></td>
                  <td>25–30 Stills</td>
                  <td>30–35 Stills</td>
                  <td className="col-popular">35–40 Stills</td>
                  <td>40–50+ Stills</td>
                </tr>
                <tr>
                  <td><strong>2D Floor Plan with Room Dimensions</strong></td>
                  <td className="cell-check">✓ Included</td>
                  <td className="cell-check">✓ Included</td>
                  <td className="cell-check col-popular">✓ Included</td>
                  <td className="cell-check">✓ 2D + 3D</td>
                </tr>
                <tr>
                  <td><strong>Turnaround Guarantee</strong></td>
                  <td>12–24 Hours</td>
                  <td>12–24 Hours</td>
                  <td className="col-popular">12–24 Hours</td>
                  <td>Priority 12 Hours</td>
                </tr>
                <tr>
                  <td><strong>Blue Sky Replacement & Lawn Touchups</strong></td>
                  <td className="cell-check">✓ Included</td>
                  <td className="cell-check">✓ Included</td>
                  <td className="cell-check col-popular">✓ Included</td>
                  <td className="cell-check">✓ Included</td>
                </tr>
                <tr>
                  <td><strong>Photo Slideshow Video</strong></td>
                  <td className="cell-check">—</td>
                  <td className="cell-check">✓ HD Slideshow</td>
                  <td className="cell-check col-popular">—</td>
                  <td className="cell-check">—</td>
                </tr>
                <tr>
                  <td><strong>4K Cinematic Video Walkthrough</strong></td>
                  <td className="cell-check">—</td>
                  <td className="cell-check">—</td>
                  <td className="cell-check col-popular">✓ 4K Full Tour</td>
                  <td className="cell-check">✓ 4K Extended + Agent Intro</td>
                </tr>
                <tr>
                  <td><strong>Aerial Drone Stills & 4K Video</strong></td>
                  <td className="cell-check">—</td>
                  <td className="cell-check">—</td>
                  <td className="cell-check col-popular">✓ Included</td>
                  <td className="cell-check">✓ Comprehensive Suite</td>
                </tr>
                <tr>
                  <td><strong>Vertical Social Media Reel (9:16)</strong></td>
                  <td className="cell-check">—</td>
                  <td className="cell-check">—</td>
                  <td className="cell-check col-popular">✓ Included</td>
                  <td className="cell-check">✓ Multiple Formats</td>
                </tr>
                <tr>
                  <td><strong>3D Matterport Interactive Virtual Tour</strong></td>
                  <td className="cell-check">—</td>
                  <td className="cell-check">—</td>
                  <td className="cell-check col-popular">—</td>
                  <td className="cell-check">✓ 6 Months Hosting</td>
                </tr>
                <tr>
                  <td><strong>Virtual Staging Included</strong></td>
                  <td className="cell-check">—</td>
                  <td className="cell-check">—</td>
                  <td className="cell-check col-popular">—</td>
                  <td className="cell-check">✓ 3 Rooms Staged</td>
                </tr>
                <tr>
                  <td><strong>Twilight / Dusk Photography</strong></td>
                  <td className="cell-check">—</td>
                  <td className="cell-check">—</td>
                  <td className="cell-check col-popular">—</td>
                  <td className="cell-check">✓ Real or Virtual</td>
                </tr>
                <tr>
                  <td><strong>Feature Single-Property Website</strong></td>
                  <td className="cell-check">—</td>
                  <td className="cell-check">—</td>
                  <td className="cell-check col-popular">✓ Included</td>
                  <td className="cell-check">✓ Branded & Unbranded</td>
                </tr>
                <tr>
                  <td><strong>Pay After Approval (No Upfront Deposit)</strong></td>
                  <td className="cell-check">✓</td>
                  <td className="cell-check">✓</td>
                  <td className="cell-check col-popular">✓</td>
                  <td className="cell-check">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* À La Carte Services Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">CUSTOM MEDIA</span>
            <h2 className="section-title">À La Carte Services</h2>
            <p className="section-desc">
              Upgrade your package or book individual media elements as standalone services.
            </p>
          </div>

          <div className="alacarte-grid">
            {ALACARTE_ADDONS.map((addon, idx) => (
              <div key={idx} className="alacarte-item">
                <div className="alacarte-info">
                  <div className="alacarte-name">{addon.name}</div>
                  <div className="alacarte-desc">{addon.desc}</div>
                </div>
                <div className="alacarte-price-block">
                  <div className="alacarte-price">{addon.price}</div>
                  <div className="alacarte-unit">{addon.unit}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Airbnb & Short-Term Rental Section */}
      <section className="section section-muted">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">SHORT-TERM RENTALS</span>
            <h2 className="section-title">Airbnb & Short-Term Rental Showcase Media</h2>
            <p className="section-desc">
              High-converting visual storytelling designed specifically for Airbnb Superhosts, VRBO owners, and boutique vacation rental managers.
            </p>
          </div>

          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--color-border)',
            padding: 'clamp(2rem, 4vw, 3rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}>
            <div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>
                Boost Bookings by 30%+ with Hospitality-Grade Photography
              </h3>
              <p style={{ marginBottom: '1.25rem', lineHeight: 1.65 }}>
                Guests choose vacation rentals based on vibe and amenities. We capture warm lifestyle compositions, close-up details (coffee station, luxury toiletries, plush bedding), outdoor firepits, hot tubs, and nearby scenic attractions.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.92rem' }}>
                  <Check size={16} color="#cba238" />
                  <span>Curated amenity vignettes & ambient lifestyle shots</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.92rem' }}>
                  <Check size={16} color="#cba238" />
                  <span>Twilight and outdoor living lighting perfection</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.92rem' }}>
                  <Check size={16} color="#cba238" />
                  <span>Local guidebook & host profile portrait add-on</span>
                </li>
              </ul>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => onOpenBooking('standard')}
              >
                <Calendar size={16} />
                <span>Book Rental Media Shoot</span>
              </button>
            </div>

            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
              <img
                src="https://images.unsplash.com/photo-1540518614846-7ede433c4550?q=80&w=900&auto=format&fit=crop"
                alt="Airbnb Vacation Rental Interior"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Breakdown */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">REGIONAL COVERAGE</span>
            <h2 className="section-title">Service Areas & Travel Policies</h2>
            <p className="section-desc">
              We travel directly to your listings across Ontario. $0 travel fees in all core service zones.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {SERVICE_AREAS.map((area, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-gold-deep)' }}>
                  <MapPin size={20} />
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--color-dark)' }}>{area.region}</h3>
                </div>
                <div style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: '#065f46',
                  backgroundColor: '#ecfdf5',
                  padding: '0.2rem 0.6rem',
                  borderRadius: 'var(--radius-sm)',
                  width: 'fit-content'
                }}>
                  {area.travelFee}
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-fg-muted)', lineHeight: 1.6 }}>
                  Serving {area.cities.join(', ')} and surrounding communities.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="section section-muted">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">GUARANTEED RESULTS</span>
            <h2 className="section-title">Zero Risk. Complete Realtor Confidence.</h2>
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
    </div>
  );
}
