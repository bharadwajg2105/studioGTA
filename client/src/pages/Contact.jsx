import React, { useState, useRef, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle, Loader2, Send } from 'lucide-react';
import { COMPANY } from '../data/siteData';
import { API_BASE_URL } from '../api/client';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Photo & Premium Walkthrough Video Package ($420)',
    location: '',
    preferredDate: '',
    message: '',
    honeypot: ''
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const successTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (successTimerRef.current) {
        clearTimeout(successTimerRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    if (successTimerRef.current) {
      clearTimeout(successTimerRef.current);
    }
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

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      setErrorMsg('Please provide a message or details about your inquiry.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccessMsg(data.message || 'Thank you! Your message has been sent to StudioGTA.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'Standard Package ($399)',
          location: '',
          preferredDate: '',
          message: '',
          honeypot: ''
        });

        successTimerRef.current = setTimeout(() => {
          setSuccessMsg('');
        }, 3000);
      } else {
        setErrorMsg(data.error || `Failed to submit message. Please call ${COMPANY.phone} directly.`);
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setErrorMsg(`Network error. Please call us at ${COMPANY.phone} or email ${COMPANY.email} directly.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Page Hero */}
      <section className="section section-muted" style={{ paddingBottom: '3.5rem' }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">GET IN TOUCH</span>
            <h1 className="section-title">Contact StudioGTA</h1>
            <p className="section-desc">
              Have questions about our packages, custom production shoots, or regional travel? Our team responds within 30 minutes during business hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Left: Contact Info Panels */}
            <div className="contact-info-panel">
              <div className="contact-card">
                <div className="contact-card-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="contact-card-title">Phone Support</div>
                  <div className="contact-card-val">
                    <a href={`tel:${COMPANY.phoneClean}`}>{COMPANY.phone}</a>
                  </div>
                  <div className="contact-card-sub">Direct call or SMS dispatch</div>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="contact-card-title">Email Inquiries</div>
                  <div className="contact-card-val">
                    <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                  </div>
                  <div className="contact-card-sub">Inquiries & booking confirmations</div>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="contact-card-title">Headquarters Office</div>
                  <div className="contact-card-val" style={{ fontSize: '0.98rem', lineHeight: 1.45 }}>
                    {COMPANY.address}
                  </div>
                  <div className="contact-card-sub">Serving GTA & Southwestern Ontario</div>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="contact-card-title">Operating Hours</div>
                  <div className="contact-card-val" style={{ fontSize: '0.98rem' }}>
                    {COMPANY.hours}
                  </div>
                  <div className="contact-card-sub">Weekend shoots & emergency slots available</div>
                </div>
              </div>

              {/* Markham Google Map Embed */}
              <div className="map-wrapper">
                <iframe
                  title="StudioGTA Office Location"
                  src={COMPANY.mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="contact-form-wrap">
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', marginBottom: '0.5rem' }}>
                Send Us a Message
              </h2>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-fg-muted)', marginBottom: '1.75rem' }}>
                Fill out the form below. Guaranteed next day morning turnaround for all media shoots.
              </p>

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
                    <label className="form-label">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. John Smith"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@brokerage.ca"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group-row">
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="647-300-0315"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Service of Interest</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="Basic Photo Package ($185)">Basic Photo Package ($185)</option>
                      <option value="Photo & Premium Walkthrough Video Package ($420)">Photo & Premium Walkthrough Video Package ($420) - Most Popular</option>
                      <option value="Premium Photo Package ($265)">Premium Photo Package ($265)</option>
                      <option value="Photo & Regular Video Package ($280)">Photo & Regular Video Package ($280)</option>
                      <option value="Custom Media / À La Carte">Custom Media / À La Carte</option>
                    </select>
                  </div>
                </div>

                <div className="form-group-row">
                  <div className="form-group">
                    <label className="form-label">Property Location / City</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Markham, Toronto, London"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Target Shoot Date (Optional)</label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Your Message or Property Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about the property, square footage, specific requirements, or questions..."
                    className="form-textarea"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary btn-full"
                  style={{ marginTop: '0.75rem' }}
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
