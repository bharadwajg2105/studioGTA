import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Packages from './pages/Packages';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import FAQ from './pages/FAQ';

function MainRouter({ onOpenBooking, onOpenContact }) {
  const location = useLocation();

  return (
    <div key={location.pathname} className="main-content">
      <Routes location={location}>
        <Route
          path="/"
          element={<Home onOpenBooking={onOpenBooking} onOpenContact={onOpenContact} />}
        />
        <Route
          path="/about"
          element={<About onOpenBooking={onOpenBooking} />}
        />
        <Route
          path="/portfolio"
          element={<Portfolio onOpenBooking={onOpenBooking} />}
        />
        <Route
          path="/services"
          element={<Services onOpenBooking={onOpenBooking} />}
        />
        <Route
          path="/packages"
          element={<Packages onOpenBooking={onOpenBooking} />}
        />
        <Route
          path="/booking"
          element={<Booking onOpenBooking={onOpenBooking} />}
        />
        <Route
          path="/book"
          element={<Booking onOpenBooking={onOpenBooking} />}
        />
        <Route
          path="/contact"
          element={<Contact onOpenBooking={onOpenBooking} />}
        />
        <Route
          path="/faq"
          element={<FAQ onOpenBooking={onOpenBooking} />}
        />

        {/* Fallback to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedPackageId, setSelectedPackageId] = useState('');
  const [formMode, setFormMode] = useState('booking'); // 'booking' or 'contact'

  const handleOpenBooking = (pkgId = '') => {
    setSelectedPackageId(pkgId);
    setFormMode('booking');
    setBookingModalOpen(true);
  };

  const handleOpenContact = () => {
    setFormMode('contact');
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollToTop />
        <div className="site-wrapper">
          {/* Header includes TopBar and Sticky Nav */}
          <Header
            onOpenBooking={handleOpenBooking}
            onOpenContact={handleOpenContact}
          />

          {/* Main Content Router */}
          <main style={{ flexGrow: 1 }}>
            <MainRouter
              onOpenBooking={handleOpenBooking}
              onOpenContact={handleOpenContact}
            />
          </main>

          {/* Global Footer */}
          <Footer
            onOpenBooking={handleOpenBooking}
            onOpenContact={handleOpenContact}
          />

          {/* Global Form Modal (opens for both Booking & Contact) */}
          <BookingModal
            isOpen={bookingModalOpen}
            onClose={handleCloseBooking}
            initialPackageId={selectedPackageId}
            formMode={formMode}
          />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
