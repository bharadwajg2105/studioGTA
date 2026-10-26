import React from 'react';

// Crisp, uniform SVG logos for top Canadian / North American real estate brokerages
const RemaxLogo = () => (
  <svg viewBox="0 0 160 40" height="32" fill="currentColor" aria-label="RE/MAX">
    <path d="M12 28V12h8.5c3.5 0 5.8 2 5.8 5 0 2.2-1.2 3.8-3.2 4.5l3.8 6.5h-4.2l-3.3-5.8h-3.6V28H12zm3.8-9.2h4.5c1.4 0 2.4-.7 2.4-2s-1-2-2.4-2h-4.5v4z" />
    <path d="M29 28V12h12.5v3.4h-8.7v4h7.5v3.3h-7.5v5.3z" />
    <polygon points="43,28 47.5,12 51.5,12 47,28" />
    <path d="M54 28V12h4.2l5.1 8.5 5.1-8.5h4.2V28h-3.7V17.2l-4.7 7.6h-1.8l-4.7-7.6V28H54z" />
    <path d="M74 28l5.2-16h4.2l5.2 16h-4l-1.3-4.2h-5.4L77.7 28H74zm5-7.4h3.8l-1.9-6.3-1.9 6.3z" />
    <path d="M90 28l5.5-8.2-5.1-7.8h4.4l3 4.8 3-4.8h4.3l-5.2 7.8 5.6 8.2h-4.5l-3.3-5.1-3.3 5.1H90z" />
  </svg>
);

const RoyalLePageLogo = () => (
  <svg viewBox="0 0 190 40" height="30" fill="currentColor" aria-label="Royal LePage">
    {/* Maple leaf symbol */}
    <path d="M20 7l2 4 4.5-1-2 4.5 4.5 2-4.5 2 2 4.5-4.5-1-2 4-2-4-4.5 1 2-4.5-4.5-2 4.5-2-2-4.5 4.5 1z" />
    <rect x="19" y="27" width="2" height="6" />
    {/* Text ROYAL LEPAGE */}
    <text x="36" y="21" fontFamily="Georgia, serif" fontSize="13" fontWeight="bold" letterSpacing="0.08em">ROYAL LEPAGE</text>
    <text x="36" y="32" fontFamily="sans-serif" fontSize="7" letterSpacing="0.18em" opacity="0.8">REAL ESTATE SERVICES</text>
  </svg>
);

const Century21Logo = () => (
  <svg viewBox="0 0 170 40" height="30" fill="currentColor" aria-label="CENTURY 21">
    <rect x="8" y="8" width="24" height="24" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
    <text x="12" y="25" fontFamily="sans-serif" fontSize="12" fontWeight="900">21</text>
    <text x="38" y="22" fontFamily="'Times New Roman', serif" fontSize="14" fontWeight="bold" letterSpacing="0.1em">CENTURY 21</text>
    <text x="39" y="31" fontFamily="sans-serif" fontSize="6.5" letterSpacing="0.22em" opacity="0.75">LEADING EDGE REALTY</text>
  </svg>
);

const SothebysLogo = () => (
  <svg viewBox="0 0 180 40" height="28" fill="currentColor" aria-label="Sotheby's International Realty">
    <text x="10" y="20" fontFamily="Georgia, serif" fontSize="17" fontStyle="italic" fontWeight="600" letterSpacing="0.04em">Sotheby's</text>
    <text x="10" y="32" fontFamily="sans-serif" fontSize="6.8" letterSpacing="0.22em" opacity="0.85">INTERNATIONAL REALTY</text>
  </svg>
);

const ColdwellBankerLogo = () => (
  <svg viewBox="0 0 180 40" height="28" fill="currentColor" aria-label="Coldwell Banker">
    <rect x="8" y="8" width="24" height="24" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
    <text x="12" y="24" fontFamily="sans-serif" fontSize="11" fontWeight="bold">CB</text>
    <polygon points="26,12 28,17 32,17 29,20 30,24 26,22 22,24 23,20 20,17 24,17" transform="scale(0.4) translate(14, 0)" />
    <text x="38" y="21" fontFamily="sans-serif" fontSize="11" fontWeight="800" letterSpacing="0.08em">COLDWELL BANKER</text>
    <text x="39" y="31" fontFamily="sans-serif" fontSize="6.5" letterSpacing="0.18em" opacity="0.8">REALTY</text>
  </svg>
);

const ExpRealtyLogo = () => (
  <svg viewBox="0 0 150 40" height="28" fill="currentColor" aria-label="eXp Realty">
    <text x="10" y="26" fontFamily="sans-serif" fontSize="24" fontWeight="900" letterSpacing="-0.03em">exp</text>
    <text x="62" y="24" fontFamily="sans-serif" fontSize="9" fontWeight="700" letterSpacing="0.25em">REALTY</text>
  </svg>
);

const CompassLogo = () => (
  <svg viewBox="0 0 160 40" height="26" fill="currentColor" aria-label="Compass">
    <circle cx="20" cy="20" r="11" fill="none" stroke="currentColor" strokeWidth="2" />
    <line x1="20" y1="9" x2="20" y2="31" stroke="currentColor" strokeWidth="2" />
    <line x1="9" y1="20" x2="31" y2="20" stroke="currentColor" strokeWidth="2" />
    <text x="38" y="25" fontFamily="sans-serif" fontSize="14" fontWeight="600" letterSpacing="0.22em">COMPASS</text>
  </svg>
);

const RightAtHomeLogo = () => (
  <svg viewBox="0 0 180 40" height="28" fill="currentColor" aria-label="Right at Home Realty">
    <path d="M12 28V18l8-6 8 6v10h-5v-6h-6v6z" fill="none" stroke="currentColor" strokeWidth="2" />
    <text x="34" y="20" fontFamily="sans-serif" fontSize="10" fontWeight="800" letterSpacing="0.06em">RIGHT AT HOME</text>
    <text x="35" y="30" fontFamily="sans-serif" fontSize="7" letterSpacing="0.2em" opacity="0.8">REALTY BROKERAGE</text>
  </svg>
);

const KellerWilliamsLogo = () => (
  <svg viewBox="0 0 170 40" height="28" fill="currentColor" aria-label="Keller Williams">
    <text x="10" y="25" fontFamily="sans-serif" fontSize="20" fontWeight="900" letterSpacing="-0.02em">kw</text>
    <line x1="42" y1="12" x2="42" y2="28" stroke="currentColor" strokeWidth="1.5" />
    <text x="48" y="20" fontFamily="sans-serif" fontSize="8.5" fontWeight="700" letterSpacing="0.1em">KELLER WILLIAMS</text>
    <text x="48" y="28" fontFamily="sans-serif" fontSize="6.5" letterSpacing="0.15em" opacity="0.8">REFERRED REALTY</text>
  </svg>
);

const LOGO_COMPONENTS = [
  { id: 'remax', component: <RemaxLogo />, name: 'RE/MAX' },
  { id: 'royallepage', component: <RoyalLePageLogo />, name: 'Royal LePage' },
  { id: 'century21', component: <Century21Logo />, name: 'Century 21' },
  { id: 'sothebys', component: <SothebysLogo />, name: "Sotheby's International Realty" },
  { id: 'coldwellbanker', component: <ColdwellBankerLogo />, name: 'Coldwell Banker' },
  { id: 'exp', component: <ExpRealtyLogo />, name: 'eXp Realty' },
  { id: 'compass', component: <CompassLogo />, name: 'Compass' },
  { id: 'rightathome', component: <RightAtHomeLogo />, name: 'Right At Home Realty' },
  { id: 'kellerwilliams', component: <KellerWilliamsLogo />, name: 'Keller Williams' }
];

export default function BrokerageLogoRow() {
  const marqueeItems = [...LOGO_COMPONENTS, ...LOGO_COMPONENTS, ...LOGO_COMPONENTS];

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
            fontSize: '0.74rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            color: '#6b7280',
            marginBottom: '1.5rem'
          }}
        >
          TRUSTED BY TOP AGENTS AT LEADING BROKERAGES
        </div>
      </div>

      <div className="marquee-container" aria-hidden="true" style={{ overflow: 'hidden' }}>
        <div
          className="marquee-track"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2.5rem'
          }}
        >
          {marqueeItems.map((broker, idx) => (
            <div
              key={idx}
              className="brokerage-logo-card"
              title={broker.name}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.75rem 1.4rem',
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
                color: '#374151',
                filter: 'grayscale(100%)',
                opacity: 0.72,
                transition: 'all 0.25s ease',
                flexShrink: 0
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'grayscale(0%)';
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.borderColor = '#d1d5db';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'grayscale(100%)';
                e.currentTarget.style.opacity = '0.72';
                e.currentTarget.style.borderColor = '#e5e7eb';
              }}
            >
              {broker.component}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
