import React from 'react';
import { BROKERAGE_LOGOS } from '../data/siteData';

export default function BrokerageLogoRow() {
  const marqueeItems = [...BROKERAGE_LOGOS, ...BROKERAGE_LOGOS, ...BROKERAGE_LOGOS];

  return (
    <section
      className="trust-marquee-section"
      aria-label="Trusted Brokerages"
      style={{
        padding: '2.5rem 0 2rem 0',
        backgroundColor: '#faf9f7',
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      <div className="container">
        <div
          style={{
            textAlign: 'center',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            color: '#6b7280',
            marginBottom: '1.5rem'
          }}
        >
          TRUSTED BY AGENTS AT
        </div>
      </div>

      <div className="marquee-container" aria-hidden="true">
        <div className="marquee-track" style={{ gap: '2.75rem' }}>
          {marqueeItems.map((broker, idx) => (
            <div
              key={idx}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.65rem 1.4rem',
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.03)'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  color: '#1f2937',
                  whiteSpace: 'nowrap'
                }}
              >
                {broker.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
