import React from 'react';
import { Camera, Check, Calendar, ShieldCheck } from 'lucide-react';
import { SERVICES, ALACARTE_ADDONS, GUARANTEES, COMPANY } from '../data/siteData';

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
                  <th className="col-feature">Inclusions</th>
                  <th>Basic Photo (CAD $185)</th>
                  <th>Premium Photo (CAD $265)</th>
                  <th className="col-popular">Photo & Regular Video (CAD $280) ★</th>
                  <th>Photo & Premium Walkthrough (CAD $420)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>High Resolution Still Images</strong></td>
                  <td className="cell-check">✓ Included</td>
                  <td className="cell-check">✓ Included</td>
                  <td className="cell-check col-popular">✓ Included</td>
                  <td className="cell-check">✓ Included</td>
                </tr>
                <tr>
                  <td><strong>Editing & Lighting Style</strong></td>
                  <td>Standard HDR MLS</td>
                  <td style={{ color: '#b45309', fontWeight: 600 }}>Magazine Style + HDR & Flash</td>
                  <td className="col-popular">Standard HDR MLS</td>
                  <td style={{ color: '#b45309', fontWeight: 600 }}>Magazine Grade Polish</td>
                </tr>
                <tr>
                  <td><strong>Video Tour Included</strong></td>
                  <td className="cell-check">—</td>
                  <td className="cell-check">—</td>
                  <td className="cell-check col-popular">✓ HD Video Tour</td>
                  <td className="cell-check" style={{ fontWeight: 600 }}>✓ Upgraded Gimbal Walkthrough Video</td>
                </tr>
                <tr>
                  <td><strong>Music Selection</strong></td>
                  <td className="cell-check">—</td>
                  <td className="cell-check">—</td>
                  <td className="cell-check col-popular">Licensed Soundtrack</td>
                  <td className="cell-check" style={{ fontWeight: 600 }}>Custom Music Selection</td>
                </tr>
                <tr>
                  <td><strong>Unbranded & Branded Webpage</strong></td>
                  <td className="cell-check">✓ Included</td>
                  <td className="cell-check">✓ Included</td>
                  <td className="cell-check col-popular">✓ Included</td>
                  <td className="cell-check">✓ Included</td>
                </tr>
                <tr>
                  <td><strong>Marketing Kit + Local Map</strong></td>
                  <td className="cell-check">✓ Included</td>
                  <td className="cell-check">✓ Included</td>
                  <td className="cell-check col-popular">✓ Included</td>
                  <td className="cell-check">✓ Included</td>
                </tr>
                <tr>
                  <td><strong>Photos Ready to Upload to MLS</strong></td>
                  <td className="cell-check">✓ Included</td>
                  <td className="cell-check">✓ Included</td>
                  <td className="cell-check col-popular">✓ Included</td>
                  <td className="cell-check">✓ Included</td>
                </tr>
                <tr>
                  <td><strong>Facebook, Twitter & WeChat Sharing</strong></td>
                  <td className="cell-check">✓ Included</td>
                  <td className="cell-check">✓ Included</td>
                  <td className="cell-check col-popular">✓ Included</td>
                  <td className="cell-check">✓ Included</td>
                </tr>
                <tr>
                  <td><strong>Turnaround Guarantee</strong></td>
                  <td>12–24 Hours</td>
                  <td>12–24 Hours</td>
                  <td className="col-popular">12–24 Hours</td>
                  <td>Priority 12 Hours</td>
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

          {/* Rate Sheet Footnote Under Table */}
          <div
            style={{
              textAlign: 'center',
              marginTop: '1.75rem',
              fontSize: '0.88rem',
              color: 'var(--color-fg-muted)',
              fontStyle: 'italic'
            }}
          >
            * {COMPANY.pricingFootnote}
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
