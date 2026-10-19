import React, { useState, useEffect } from 'react';
import { Camera } from 'lucide-react';

export default function LoadingScreen({ onReady }) {
  const [visible, setVisible] = useState(() => {
    if (typeof window !== 'undefined') {
      const alreadyLoaded = sessionStorage.getItem('studiogta_loaded');
      return !alreadyLoaded;
    }
    return false;
  });

  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    if (!visible) {
      if (onReady) onReady();
      return;
    }

    const timer = setTimeout(() => {
      setFadingOut(true);
      setTimeout(() => {
        setVisible(false);
        sessionStorage.setItem('studiogta_loaded', 'true');
        if (onReady) onReady();
      }, 300);
    }, 450);

    return () => clearTimeout(timer);
  }, [visible, onReady]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fadingOut ? 0 : 1,
        transition: 'opacity 0.3s ease',
        pointerEvents: fadingOut ? 'none' : 'auto'
      }}
      role="status"
      aria-label="Loading StudioGTA"
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
        <Camera size={32} color="#cba238" />
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 700, color: '#121418' }}>
          Studio<span style={{ color: '#cba238' }}>GTA</span>
        </span>
      </div>
      <div
        style={{
          width: '120px',
          height: '2px',
          backgroundColor: '#e5e3df',
          borderRadius: '99px',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '40%',
            height: '100%',
            backgroundColor: '#cba238',
            borderRadius: '99px',
            animation: 'loaderSlide 1s infinite linear'
          }}
        />
      </div>
      <style>{`
        @keyframes loaderSlide {
          0% { left: -40%; }
          100% { left: 100%; }
        }
      `}</style>
    </div>
  );
}
