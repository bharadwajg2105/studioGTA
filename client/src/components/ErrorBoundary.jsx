import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an unhandled error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          backgroundColor: '#faf9f7',
          color: '#121418',
          fontFamily: "'Inter', sans-serif",
          textAlign: 'center'
        }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '2.5rem', marginBottom: '1rem' }}>
            Something went wrong
          </h2>
          <p style={{ maxWidth: '500px', marginBottom: '2rem', color: '#575c66' }}>
            We apologize for the inconvenience. Please return to the homepage or refresh your browser.
          </p>
          <a
            href="/"
            style={{
              padding: '0.85rem 1.75rem',
              backgroundColor: '#cba238',
              color: '#ffffff',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 600
            }}
          >
            Return to Homepage
          </a>
        </div>
      );
    }

    return this.props.children;
  }
}
