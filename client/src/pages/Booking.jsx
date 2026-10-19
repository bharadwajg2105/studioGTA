import React, { useState } from 'react';
import {
  Calendar,
  ShieldCheck,
  CheckCircle,
  AlertCircle,
  Loader2,
  Check
} from 'lucide-react';
import { PACKAGES, COMPANY } from '../data/siteData';
import { API_BASE_URL } from '../api/client';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    package: 'Basic Photo Package ($185)',
    propertyAddress: '',
    preferredDate: '',
    preferredTime: 'Morning (9 AM – 12 PM)',
    propertySize: '1,500 – 2,500 sq ft',
    notes: '',
    honeypot: ''
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setErrorMsg('');
    setSuccessMsg('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setErrorMsg('Please enter your full name (at least 2 characters).');
      return;
    }

    if (!emailRegex.test(formData.email.trim())) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      setErrorMsg('Please enter a valid phone number.');
      return;
    }

    if (!formData.propertyAddress.trim()) {
      setErrorMsg('Please specify the property address.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/book-package`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccessMsg(data.message || 'Thank you! Your shoot booking request has been submitted. We will confirm shortly.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          package: 'Basic Photo Package ($185)',
          propertyAddress: '',
          preferredDate: '',
          preferredTime: 'Morning (9 AM – 12 PM)',
          propertySize: '1,500 – 2,500 sq ft',
          notes: '',
          honeypot: ''
        });
      } else {
        setErrorMsg(data.error || `Failed to submit booking. Please call ${COMPANY.phone} directly.`);
      }
    } catch (err) {
      console.error('Booking submission error:', err);
      setErrorMsg(`Network error. Please call us at ${COMPANY.phone} or email ${COMPANY.email}.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="booking-page">
      {/* Page Hero */}
      <section className="section section-muted" style={{ paddingBottom: '3.5rem' }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">INSTANT RESERVATION</span>
            <h1 className="section-title">Book Your Real Estate Media Shoot</h1>
            <p className="section-desc">
              Schedule your shoot in 60 seconds with zero deposit. Guaranteed next-morning 9:00 AM delivery, unlimited revisions, and pay only after you love the finished product.
            </p>
          </div>
        </div>
      </section>

      {/* Main Booking Form Section */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <div className="contact-form-wrap">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem' }}>Shoot Details & Logistics</h2>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#065f46', backgroundColor: '#ecfdf5', padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-sm)', fontWeight: 700 }}>
                  ✓ ZERO DEPOSIT REQUIRED
                </span>
              </div>

              {successMsg && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  backgroundColor: '#ecfdf5',
                  border: '1px solid #10b981',
                  color: '#065f46',
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '1.5rem',
                  fontSize: '0.92rem'
                }}>
                  <CheckCircle size={20} color="#10b981" />
                  <span>{successMsg}</span>
                </div>
              )}

              {errorMsg && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  backgroundColor: '#fef2f2',
                  border: '1px solid #ef4444',
                  color: '#991b1b',
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '1.5rem',
                  fontSize: '0.92rem'
                }}>
                  <AlertCircle size={20} color="#ef4444" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                {/* Honeypot field */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="form-group-row">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Sarah Jenkins"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="sarah@royallepage.ca"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group-row">
                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="647-300-0315"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Select Package *</label>
                    <select
                      name="package"
                      value={formData.package}
                      onChange={handleChange}
                      className="form-select"
                    >
                      {PACKAGES.map((pkg) => (
                        <option key={pkg.id} value={`${pkg.name} ($${pkg.price})`}>
                          {pkg.name} (${pkg.price}) — {pkg.sqft}
                        </option>
                      ))}
                      <option value="Custom / À La Carte Only">Custom / À La Carte Services</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Property Address *</label>
                  <input
                    type="text"
                    name="propertyAddress"
                    value={formData.propertyAddress}
                    onChange={handleChange}
                    required
                    placeholder="Full street address, unit number, city & postal code"
                    className="form-input"
                  />
                </div>

                <div className="form-group-row">
                  <div className="form-group">
                    <label className="form-label">Preferred Shoot Date</label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Preferred Time Window</label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="Morning (9 AM – 12 PM)">Morning (9 AM – 12 PM)</option>
                      <option value="Afternoon (12 PM – 4 PM)">Afternoon (12 PM – 4 PM)</option>
                      <option value="Golden Hour / Twilight (5 PM – Sunset)">Golden Hour / Twilight (5 PM – Sunset)</option>
                      <option value="Flexible / First Available">Flexible / First Available</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Approximate Property Size</label>
                  <select
                    name="propertySize"
                    value={formData.propertySize}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="Under 1,500 sq ft">Under 1,500 sq ft (Condo / Townhome)</option>
                    <option value="1,500 – 2,500 sq ft">1,500 – 2,500 sq ft (Standard Detached)</option>
                    <option value="2,500 – 3,500 sq ft">2,500 – 3,500 sq ft (Large Detached)</option>
                    <option value="3,500+ sq ft">3,500+ sq ft (Luxury Estate)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Lockbox Code / Access Details / Special Requests</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="e.g. Lockbox on front porch (code 1234). Sunset is west facing backyard. Cats inside."
                    className="form-textarea"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary btn-full btn-lg"
                  style={{ marginTop: '1rem' }}
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <>
                      <Calendar size={18} />
                      <span>Confirm Booking Request (No Upfront Deposit)</span>
                    </>
                  )}
                </button>

                <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.82rem', color: '#6b7280', fontStyle: 'italic' }}>
                  * {COMPANY.pricingFootnote}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Turnaround Time Timeline */}
      <section className="section section-muted">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">GUARANTEED SPEED</span>
            <h2 className="section-title">12–24 Hour Turnaround Timeline</h2>
            <p className="section-desc">
              Here is how your shoot progresses from shutter click to live MLS listing.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            <div className="step-card">
              <div className="step-number">01</div>
              <h4 className="step-title">Day of Shoot</h4>
              <p className="step-desc">Photographer arrives on time, captures HDR bracketed stills, drone aerials, and 4K video walkthrough.</p>
            </div>
            <div className="step-card">
              <div className="step-number">02</div>
              <h4 className="step-title">Overnight Post-Production</h4>
              <p className="step-desc">Our digital artists perform multi-exposure blending, window pulls, blue sky replacements, and video color grading.</p>
            </div>
            <div className="step-card">
              <div className="step-number">03</div>
              <h4 className="step-title">Next Morning by 9:00 AM</h4>
              <p className="step-desc">Your private media delivery link arrives via email with download links for high-res print files and MLS-ready formats.</p>
            </div>
            <div className="step-card">
              <div className="step-number">04</div>
              <h4 className="step-title">Review & Pay</h4>
              <p className="step-desc">Review your watermarked media. Once you are 100% happy with everything, complete your payment online.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Preparation Checklist */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">SHOOT READINESS</span>
            <h2 className="section-title">Property Preparation Checklist</h2>
            <p className="section-desc">
              Help us capture your listing in the best possible light with these quick preparation tips.
            </p>
          </div>

          <div className="checklist-grid">
            <div className="checklist-card">
              <h4>
                <CheckCircle size={18} color="#cba238" />
                <span>Interior Spaces</span>
              </h4>
              <ul>
                <li><Check size={14} color="#cba238" /> Turn on all lights, lamps, and under-cabinet fixtures</li>
                <li><Check size={14} color="#cba238" /> Open all window blinds horizontally and draw back drapes</li>
                <li><Check size={14} color="#cba238" /> Turn off all ceiling fans and televisions</li>
                <li><Check size={14} color="#cba238" /> Clear kitchen countertops of excess appliances and sponges</li>
                <li><Check size={14} color="#cba238" /> Put toilet lids down and hide personal toiletries in bathrooms</li>
              </ul>
            </div>

            <div className="checklist-card">
              <h4>
                <CheckCircle size={18} color="#cba238" />
                <span>Exterior & Curb Appeal</span>
              </h4>
              <ul>
                <li><Check size={14} color="#cba238" /> Move all vehicles away from driveway and street front</li>
                <li><Check size={14} color="#cba238" /> Put away garbage bins, recycling boxes, and garden hoses</li>
                <li><Check size={14} color="#cba238" /> Tidy lawn, rake leaves, and shovel snow if in winter</li>
                <li><Check size={14} color="#cba238" /> Clean patio furniture and remove protective covers</li>
                <li><Check size={14} color="#cba238" /> Turn on exterior porch and landscape lights</li>
              </ul>
            </div>

            <div className="checklist-card">
              <h4>
                <CheckCircle size={18} color="#cba238" />
                <span>Logistics & Pets</span>
              </h4>
              <ul>
                <li><Check size={14} color="#cba238" /> Secure dogs and cats in a kennel or arrange off-site care</li>
                <li><Check size={14} color="#cba238" /> Tuck away pet beds, litter boxes, and food bowls</li>
                <li><Check size={14} color="#cba238" /> Have lockbox codes or concierge access ready</li>
                <li><Check size={14} color="#cba238" /> Notify building management for condo elevator or roof access</li>
                <li><Check size={14} color="#cba238" /> Tuck away high-value jewelry and private family photographs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cancellation & Weather Policy */}
      <section className="section section-muted">
        <div className="container">
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--color-border)',
            padding: '2.5rem',
            maxWidth: '840px',
            margin: '0 auto'
          }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <ShieldCheck size={24} color="#cba238" />
              <span>Cancellation & Weather Policy</span>
            </h3>
            <p style={{ lineHeight: 1.7, marginBottom: '1rem', color: 'var(--color-fg-muted)' }}>
              We understand real estate is unpredictable. You may cancel or reschedule your shoot free of charge up to <strong>12 hours prior</strong> to the scheduled shoot time.
            </p>
            <p style={{ lineHeight: 1.7, color: 'var(--color-fg-muted)' }}>
              In the event of heavy rain or severe weather, exterior drone and photography work can be rescheduled at zero cost, or our photographer can complete the interior shoot and return on the next clear day to finish exterior captures at no extra fee.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
