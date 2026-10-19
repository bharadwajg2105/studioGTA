import React, { useState, useEffect, useRef } from 'react';
import { X, Gift, Clock, ShieldCheck } from 'lucide-react';

export default function CounterPopup({ onClaimDiscount }) {
  const [isOpen, setIsOpen] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(486); // 8 minutes 6 seconds (08:06)
  const timeoutRef = useRef(null);

  useEffect(() => {
    // 1. Initial Startup: Exactly 10 seconds (10,000 ms)
    timeoutRef.current = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    // Also trigger on exit-intent (moving mouse towards top)
    const handleMouseLeave = (e) => {
      if (e.clientY <= 15) {
        setIsOpen(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Countdown clock tick
  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen]);

  const closePopup = () => {
    setIsOpen(false);
    // 2. Cooldown: Wait exactly 2 minutes (120,000 ms) before appearing again
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsOpen(true);
    }, 120000);
  };

  const handleClaim = () => {
    setIsOpen(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (onClaimDiscount) {
      onClaimDiscount();
    }
  };

  if (!isOpen) return null;

  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(5px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem'
      }}
      role="dialog"
      aria-modal="true"
      onClick={closePopup}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '18px',
          maxWidth: '430px',
          width: '100%',
          padding: '2.25rem 2rem 1.75rem 2rem',
          position: 'relative',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.35)',
          textAlign: 'center',
          animation: 'popupFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={closePopup}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            color: '#9ca3af',
            cursor: 'pointer',
            padding: '0.35rem',
            borderRadius: '999px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          aria-label="Close discount popup"
        >
          <X size={20} />
        </button>

        {/* Gift Icon Badge */}
        <div
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: '#fef3c7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.25rem auto',
            color: '#d97706'
          }}
        >
          <Gift size={28} />
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.75rem',
            fontWeight: 700,
            color: '#111827',
            marginBottom: '0.4rem',
            lineHeight: 1.2
          }}
        >
          Wait! Don't Miss Out
        </h3>

        {/* Subtitle */}
        <p style={{ fontSize: '0.95rem', color: '#4b5563', marginBottom: '1.25rem' }}>
          Get <strong style={{ color: '#d97706', fontWeight: 700 }}>10% OFF</strong> your first photoshoot
        </p>

        {/* Countdown Box */}
        <div
          style={{
            backgroundColor: '#fffbeb',
            border: '1px solid #fde68a',
            borderRadius: '12px',
            padding: '0.85rem 1rem',
            marginBottom: '1.35rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.2rem'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.78rem',
              color: '#92400e',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            <Clock size={13} />
            <span>Offer expires in:</span>
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '1.9rem',
              fontWeight: 800,
              color: '#b45309',
              lineHeight: 1.1,
              letterSpacing: '0.05em'
            }}
          >
            {formattedTime}
          </div>
        </div>

        {/* Bullet Points */}
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: '0 0 1.5rem 0',
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.6rem',
            fontSize: '0.88rem',
            color: '#374151'
          }}
        >
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ color: '#d97706', fontSize: '1.2rem', lineHeight: 0 }}>•</span>
            <span>Professional show-stopping photography</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ color: '#d97706', fontSize: '1.2rem', lineHeight: 0 }}>•</span>
            <span>12-hour delivery guaranteed</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ color: '#d97706', fontSize: '1.2rem', lineHeight: 0 }}>•</span>
            <span>Free PLUS floor plan included</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ color: '#d97706', fontSize: '1.2rem', lineHeight: 0 }}>•</span>
            <span>100% satisfaction or refund free</span>
          </li>
        </ul>

        {/* CTA Button */}
        <button
          type="button"
          onClick={handleClaim}
          style={{
            width: '100%',
            backgroundColor: '#f59e0b',
            backgroundImage: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
            color: '#111827',
            fontWeight: 700,
            fontSize: '1.02rem',
            padding: '0.9rem 1.5rem',
            borderRadius: '10px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(217, 119, 6, 0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}
        >
          <span>Claim My 10% Discount</span>
          <span>🎁</span>
        </button>

        {/* Decline Link */}
        <button
          type="button"
          onClick={closePopup}
          style={{
            background: 'none',
            border: 'none',
            color: '#9ca3af',
            fontSize: '0.78rem',
            cursor: 'pointer',
            marginTop: '0.85rem',
            textDecoration: 'underline'
          }}
        >
          No thanks, I'll pay full price
        </button>

        {/* Trust Note */}
        <div
          style={{
            marginTop: '1.2rem',
            paddingTop: '0.85rem',
            borderTop: '1px solid #f3f4f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.4rem',
            fontSize: '0.74rem',
            color: '#6b7280'
          }}
        >
          <ShieldCheck size={14} color="#10b981" />
          <span>Trusted by 500+ Ontario Realtors & Developers</span>
        </div>
      </div>
      <style>{`
        @keyframes popupFadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
