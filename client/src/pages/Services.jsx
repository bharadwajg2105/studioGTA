import React from 'react';
import { Camera, Check, Calendar, ShieldCheck } from 'lucide-react';
import { SERVICES, ALACARTE_ADDONS, GUARANTEES } from '../data/siteData';

export default function Services({ onOpenBooking }) {
  return (
    <div className="services-page">
      {/* Page Hero */}
      <section className="section section-muted" style={{ paddingBottom: '3rem' }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">OUR CAPABILITIES</span>
            <h1 className="section-title">Comprehensive Real Estate Media Solutions</h1>
            <p className="section-desc">
              From magazine-grade HDR stills to Transport Canada certified 4K drone cinematography and 3D Matterport digital twins, we deliver high-impact visual assets tailored to maximize buyer interest.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detailed Grid */}
      <section className="section">
        <div className="container">
          <div className="services-grid">
            {SERVICES.map((srv) => (
              <div key={srv.id} className="service-card">
                <div className="service-icon-box">
                  <Camera size={26} />
                </div>
                <h3 className="service-title">{srv.name}</h3>
                <div className="service-tagline">{srv.tagline}</div>
                <p className="service-desc">{srv.desc}</p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--color-gold-deep)' }}>
                    {srv.price}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-fg-subtle)' }}>
                    ⚡ {srv.turnaround}
                  </span>
                </div>

                <ul className="service-feature-list">
                  {srv.features.map((feat, idx) => (
                    <li key={idx} className="service-feature-item">
                      <Check size={15} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className="btn btn-outline-gold btn-sm"
                  style={{ marginTop: '1.5rem', width: '100%' }}
                  onClick={() => onOpenBooking('standard')}
                >
                  <Calendar size={14} />
                  <span>Book This Service</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Comparison Table */}
      <section className="section section-muted">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">MEDIA COMPARISON</span>
            <h2 className="section-title">Compare What Is Included in Each Package</h2>
            <p className="section-desc">
              Select the package best suited for your property's size and price bracket.
            </p>
          </div>

          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th className="col-feature">Features & Inclusions</th>
                  <th>Basic ($199)</th>
                  <th>Basic+ ($249)</th>
                  <th className="col-popular">Standard ($399) ★</th>
                  <th>Pro ($599)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Property Size Ideal</strong></td>
                  <td>Under 1,500 sq ft</td>
                  <td>Up to 2,200 sq ft</td>
                  <td className="col-popular">Up to 3,500 sq ft</td>
                  <td>3,500+ sq ft / Luxury</td>
                </tr>
                <tr>
                  <td><strong>High-Definition HDR Photos</strong></td>
                  <td>25–30 Photos</td>
                  <td>30–35 Photos</td>
                  <td className="col-popular">35–40 Photos</td>
                  <td>40–50+ Photos</td>
                </tr>
                <tr>
                  <td><strong>2D Floor Plan with Measurements</strong></td>
                  <td className="cell-check">✓</td>
                  <td className="cell-check">✓</td>
                  <td className="cell-check col-popular">✓</td>
                  <td className="cell-check">✓ (2D + 3D)</td>
                </tr>
                <tr>
                  <td><strong>Turnaround Guarantee</strong></td>
                  <td>12–24 Hours</td>
                  <td>12–24 Hours</td>
                  <td className="col-popular">12–24 Hours</td>
                  <td>Priority 12 Hours</td>
                </tr>
                <tr>
                  <td><strong>Blue Sky Replacement & Flare Removal</strong></td>
                  <td className="cell-check">✓</td>
                  <td className="cell-check">✓</td>
                  <td className="cell-check col-popular">✓</td>
                  <td className="cell-check">✓</td>
                </tr>
                <tr>
                  <td><strong>Photo Motion Slideshow</strong></td>
                  <td className="cell-check">—</td>
                  <td className="cell-check">✓</td>
                  <td className="cell-check col-popular">—</td>
                  <td className="cell-check">—</td>
                </tr>
                <tr>
                  <td><strong>Cinematic 4K Walkthrough Video</strong></td>
                  <td className="cell-check">—</td>
                  <td className="cell-check">—</td>
                  <td className="cell-check col-popular">✓ 4K Full Tour</td>
                  <td className="cell-check">✓ 4K Extended + Intro</td>
                </tr>
                <tr>
                  <td><strong>Aerial Drone Photos & 4K Video</strong></td>
                  <td className="cell-check">—</td>
                  <td className="cell-check">—</td>
                  <td className="cell-check col-popular">✓ Included</td>
                  <td className="cell-check">✓ Full Suite</td>
                </tr>
                <tr>
                  <td><strong>3D Matterport Interactive Tour</strong></td>
                  <td className="cell-check">—</td>
                  <td className="cell-check">—</td>
                  <td className="cell-check col-popular">—</td>
                  <td className="cell-check">✓ 6 Mos Hosting</td>
                </tr>
                <tr>
                  <td><strong>Virtual Staging Included</strong></td>
                  <td className="cell-check">—</td>
                  <td className="cell-check">—</td>
                  <td className="cell-check col-popular">—</td>
                  <td className="cell-check">✓ 3 Rooms</td>
                </tr>
                <tr>
                  <td><strong>Twilight / Sunset Photography</strong></td>
                  <td className="cell-check">—</td>
                  <td className="cell-check">—</td>
                  <td className="cell-check col-popular">—</td>
                  <td className="cell-check">✓ Real or Virtual Dusk</td>
                </tr>
                <tr>
                  <td><strong>Single-Property Listing Website</strong></td>
                  <td className="cell-check">—</td>
                  <td className="cell-check">—</td>
                  <td className="cell-check col-popular">✓ Included</td>
                  <td className="cell-check">✓ Branded & Unbranded</td>
                </tr>
                <tr>
                  <td><strong>Zero Deposit: Pay After Approval</strong></td>
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

      {/* À La Carte Services */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">CUSTOMIZE YOUR SHOOT</span>
            <h2 className="section-title">À La Carte & Add-On Media Services</h2>
            <p className="section-desc">
              Add individual services to any base package or order as stand-alone appointments.
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

      {/* Guarantees */}
      <section className="section section-muted">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">OUR PROMISE</span>
            <h2 className="section-title">Built On 100% Realtor Confidence</h2>
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
