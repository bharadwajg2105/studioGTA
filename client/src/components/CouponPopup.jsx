import React, { useState, useEffect } from 'react';
import { X, Tag, ArrowRight, Check } from 'lucide-react';

export default function CouponPopup({ onOpenBooking }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Show only once per browser session
    try {
      const hasSeen = sessionStorage.getItem('studiogta_coupon_seen');
      if (hasSeen) return;
    } catch (e) {
      // In case sessionStorage is blocked
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    try {
      sessionStorage.setItem('studiogta_coupon_seen', 'true');
    } catch (e) {}
    setIsOpen(false);
  };

  const handleCopyCode = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText('WELCOME10');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleClaim = () => {
    handleClose();
    if (onOpenBooking) {
      onOpenBooking();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="coupon-popup-overlay"
      onClick={handleClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.72)',
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
    >
      <div
        className="coupon-popup-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#111827',
          color: '#ffffff',
          borderRadius: '16px',
          border: '1.5px solid rgba(203, 162, 56, 0.4)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 35px rgba(203, 162, 56, 0.18)',
          maxWidth: '440px',
          width: '100%',
          padding: '2.25rem 1.75rem',
          position: 'relative',
          textAlign: 'center',
          boxSizing: 'border-box'
        }}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close coupon offer"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            color: '#9ca3af',
            cursor: 'pointer',
            padding: '0.35rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            transition: 'color 0.2s'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
        >
          <X size={20} />
        </button>

        {/* Eyebrow Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            backgroundColor: 'rgba(203, 162, 56, 0.15)',
            border: '1px solid rgba(203, 162, 56, 0.35)',
            color: '#fbbf24',
            padding: '0.35rem 0.85rem',
            borderRadius: '999px',
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}
        >
          <Tag size={13} />
          <span>NEW CLIENT SPECIAL</span>
        </div>

        {/* Headline */}
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.5rem, 4vw, 1.85rem)',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.25,
            marginBottom: '0.75rem'
          }}
        >
          Get 10% Off Your First Shoot!
        </h3>

        {/* Subtext */}
        <p
          style={{
            color: '#d1d5db',
            fontSize: '0.95rem',
            lineHeight: 1.5,
            marginBottom: '1.25rem'
          }}
        >
          Use code <strong style={{ color: '#fbbf24', letterSpacing: '0.05em' }}>WELCOME10</strong> at checkout.
        </p>

        {/* Coupon Code Pill */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            backgroundColor: '#1f2937',
            border: '1.5px dashed #d97706',
            borderRadius: '10px',
            padding: '0.75rem 1rem',
            marginBottom: '1.5rem',
            flexWrap: 'wrap'
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '1.35rem',
              fontWeight: 800,
              letterSpacing: '0.12em',
              color: '#fbbf24'
            }}
          >
            WELCOME10
          </span>
          <button
            type="button"
            onClick={handleCopyCode}
            style={{
              backgroundColor: copied ? '#10b981' : '#374151',
              color: '#ffffff',
              border: 'none',
              padding: '0.35rem 0.75rem',
              borderRadius: '6px',
              fontSize: '0.78rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              transition: 'background-color 0.2s'
            }}
          >
            {copied ? <Check size={13} /> : null}
            <span>{copied ? 'Copied!' : 'Copy Code'}</span>
          </button>
        </div>

        {/* CTA Button */}
        <button
          type="button"
          onClick={handleClaim}
          className="btn btn-primary btn-full"
          style={{
            padding: '0.85rem 1.5rem',
            fontSize: '0.95rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '0.75rem'
          }}
        >
          <span>Claim 10% Off & Book Now</span>
          <ArrowRight size={16} />
        </button>

        {/* Dismiss Link */}
        <button
          type="button"
          onClick={handleClose}
          style={{
            background: 'none',
            border: 'none',
            color: '#9ca3af',
            fontSize: '0.82rem',
            cursor: 'pointer',
            textDecoration: 'underline'
          }}
        >
          No thanks, continue browsing
        </button>
      </div>
    </div>
  );
}
