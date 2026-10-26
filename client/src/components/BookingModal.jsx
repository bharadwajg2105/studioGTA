import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { X, CheckCircle, AlertCircle, Loader2, Calendar, ShieldCheck } from 'lucide-react';
import { PACKAGES, COMPANY } from '../data/siteData';
import { API_BASE_URL } from '../api/client';

export default function BookingModal({
  isOpen,
  onClose,
  initialPackageId = '',
  formMode = 'booking' // 'booking' or 'contact'
}) {
  const resolvePackage = (pkgId) => {
    if (pkgId) {
      const match = PACKAGES.find((p) => p.id === pkgId);
      return match ? `${match.name} ($${match.price})` : pkgId;
    }
    return 'Basic Photo Package ($185)';
  };

  const [mode, setMode] = useState(formMode);
  const [prevFormMode, setPrevFormMode] = useState(formMode);
  if (prevFormMode !== formMode) {
    setPrevFormMode(formMode);
    setMode(formMode);
  }

  const [formData, setFormData] = useState(() => ({
    name: '',
    email: '',
    phone: '',
    package: resolvePackage(initialPackageId),
    service: 'Basic Photo Package ($185)',
    propertyAddress: '',
    location: '',
    preferredDate: '',
    preferredTime: 'Morning (9 AM – 12 PM)',
    propertySize: '1,500 – 2,500 sq ft',
    notes: '',
    message: '',
    honeypot: ''
  }));

  const [prevPkgId, setPrevPkgId] = useState(initialPackageId);
  if (prevPkgId !== initialPackageId) {
    setPrevPkgId(initialPackageId);
    setFormData((prev) => ({
      ...prev,
      package: resolvePackage(initialPackageId),
      service: resolvePackage(initialPackageId)
    }));
  }

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const successTimerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const orig = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = orig;
    };
  }, [isOpen]);

  useEffect(() => {
    return () => {
      if (successTimerRef.current) {
        clearTimeout(successTimerRef.current);
      }
    };
  }, []);

  const handleClose = useCallback(() => {
    if (successTimerRef.current) {
      clearTimeout(successTimerRef.current);
    }
    setSuccessMsg('');
    setErrorMsg('');
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

  if (!isOpen) return null;
  if (typeof document === 'undefined') return null;

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
      setErrorMsg('Please enter your full name.');
      return;
    }

    if (!emailRegex.test(formData.email.trim())) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      setErrorMsg('Please enter a valid contact phone number.');
      return;
    }

    setLoading(true);

    try {
      const endpoint = mode === 'contact' ? `${API_BASE_URL}/api/contact` : `${API_BASE_URL}/api/book-package`;
      const payload = mode === 'contact'
        ? {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: formData.service || formData.package,
            location: formData.location || formData.propertyAddress,
            preferredDate: formData.preferredDate,
            message: formData.message || formData.notes || 'Inquiry from website modal',
            honeypot: formData.honeypot
          }
        : {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            package: formData.package,
            propertyAddress: formData.propertyAddress || formData.location,
            preferredDate: formData.preferredDate,
            preferredTime: formData.preferredTime,
            propertySize: formData.propertySize,
            notes: formData.notes || formData.message,
            honeypot: formData.honeypot
          };

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccessMsg(data.message || 'Thank you! Your request has been received. Our team will contact you shortly.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          package: 'Standard ($359)',
          service: 'Standard Package ($359)',
          propertyAddress: '',
          location: '',
          preferredDate: '',
          preferredTime: 'Morning (9 AM – 12 PM)',
          propertySize: '1,500 – 2,500 sq ft',
          notes: '',
          message: '',
          honeypot: ''
        });

        successTimerRef.current = setTimeout(() => {
          setSuccessMsg('');
          onClose();
        }, 2200);
      } else {
        setErrorMsg(data.error || `Failed to submit. Please call ${COMPANY.phone}.`);
      }
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMsg(`Network error. Please call us at ${COMPANY.phone} or email ${COMPANY.email}.`);
    } finally {
      setLoading(false);
    }
  };

  return createPortal(
    <div
      className="modal-overlay"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div
        className="modal-dialog"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '640px' }}
      >
        <div className="modal-header">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <h3 id="booking-modal-title" className="modal-title">
                {mode === 'contact' ? 'Contact StudioGTA' : 'Book Your Media Shoot'}
              </h3>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--color-fg-muted)' }}>
              Guaranteed next day morning turnaround • $100 Booking Deposit • 100% Satisfaction Guarantee
            </p>
          </div>
          <button
            type="button"
            className="modal-close"
            onClick={handleClose}
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tab switch */}
        <div
          style={{
            display: 'flex',
            borderBottom: '1px solid var(--color-border)',
            backgroundColor: '#faf9f7'
          }}
        >
          <button
            type="button"
            onClick={() => setMode('booking')}
            style={{
              flex: 1,
              padding: '0.75rem',
              fontSize: '0.9rem',
              fontWeight: mode === 'booking' ? 700 : 500,
              color: mode === 'booking' ? '#111827' : '#6b7280',
              borderBottom: mode === 'booking' ? '2px solid #cba238' : 'none',
              backgroundColor: mode === 'booking' ? '#ffffff' : 'transparent',
              cursor: 'pointer'
            }}
          >
            Schedule a Shoot
          </button>
          <button
            type="button"
            onClick={() => setMode('contact')}
            style={{
              flex: 1,
              padding: '0.75rem',
              fontSize: '0.9rem',
              fontWeight: mode === 'contact' ? 700 : 500,
              color: mode === 'contact' ? '#111827' : '#6b7280',
              borderBottom: mode === 'contact' ? '2px solid #cba238' : 'none',
              backgroundColor: mode === 'contact' ? '#ffffff' : 'transparent',
              cursor: 'pointer'
            }}
          >
            General Inquiry / Question
          </button>
        </div>

        <div className="modal-body">
          {successMsg && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                backgroundColor: '#ecfdf5',
                border: '1px solid #10b981',
                color: '#065f46',
                padding: '1rem',
                borderRadius: 'var(--radius-md)',
                marginBottom: '1.25rem',
                fontSize: '0.92rem'
              }}
            >
              <CheckCircle size={20} color="#10b981" />
              <span>{successMsg}</span>
            </div>
          )}

          {errorMsg && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                backgroundColor: '#fef2f2',
                border: '1px solid #ef4444',
                color: '#991b1b',
                padding: '1rem',
                borderRadius: 'var(--radius-md)',
                marginBottom: '1.25rem',
                fontSize: '0.92rem'
              }}
            >
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
                  placeholder="e.g. David Chen"
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
                  placeholder="realtor@brokerage.ca"
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
                <label className="form-label">Package / Service *</label>
                <select
                  name={mode === 'contact' ? 'service' : 'package'}
                  value={mode === 'contact' ? formData.service : formData.package}
                  onChange={handleChange}
                  className="form-select"
                >
                  {PACKAGES.map((pkg) => (
                    <option key={pkg.id} value={`${pkg.name} ($${pkg.price})`}>
                      {pkg.name} (${pkg.price}) — {pkg.sqft}
                    </option>
                  ))}
                  <option value="Custom / À La Carte">Custom / À La Carte Services</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Property Address / City *</label>
              <input
                type="text"
                name={mode === 'contact' ? 'location' : 'propertyAddress'}
                value={mode === 'contact' ? formData.location : formData.propertyAddress}
                onChange={handleChange}
                required
                placeholder="123 Main St, Markham ON"
                className="form-input"
              />
            </div>

            <div className="form-group-row">
              <div className="form-group">
                <label className="form-label">Preferred Date</label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Time Window</label>
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
              <label className="form-label">
                {mode === 'contact' ? 'Your Message or Question *' : 'Special Instructions / Lockbox Code / Notes'}
              </label>
              <textarea
                name={mode === 'contact' ? 'message' : 'notes'}
                value={mode === 'contact' ? formData.message : formData.notes}
                onChange={handleChange}
                rows={3}
                placeholder={
                  mode === 'contact'
                    ? 'How can we help you?'
                    : 'e.g. Lockbox code, pet on site, specific features you want highlighted...'
                }
                className="form-textarea"
                style={{ minHeight: '75px' }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary btn-full"
              style={{ marginTop: '0.5rem' }}
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>Submitting Request...</span>
                </>
              ) : (
                <>
                  <Calendar size={16} />
                  <span>
                    {mode === 'contact' ? 'Send Message' : 'Confirm Shoot Request ($100 Deposit)'}
                  </span>
                </>
              )}
            </button>

            <div style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.76rem', color: '#6b7280', fontStyle: 'italic' }}>
              * {COMPANY.pricingFootnote}
            </div>
          </form>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              marginTop: '1rem',
              fontSize: '0.78rem',
              color: 'var(--color-fg-subtle)'
            }}
          >
            <ShieldCheck size={14} color="#cba238" />
            <span>Guaranteed next day morning turnaround • Balance due after media review</span>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
