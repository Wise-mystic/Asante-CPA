import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import IndividualTaxPage from '@/pages/services/IndividualTaxPage';
import BusinessTaxPage from '@/pages/services/BusinessTaxPage';
import BookkeepingPage from '@/pages/services/BookkeepingPage';
import PayrollPage from '@/pages/services/PayrollPage';
import AdvisoryPage from '@/pages/services/AdvisoryPage';
import ResourcesPage from '@/pages/ResourcesPage';
import BlogPostPage from '@/pages/BlogPostPage';
import ContactPage from '@/pages/ContactPage';
import BookingPage from '@/pages/BookingPage';
import QuotePage from '@/pages/QuotePage';
import ScrollToTop from '@/components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/individual-tax" element={<IndividualTaxPage />} />
            <Route path="/services/business-tax" element={<BusinessTaxPage />} />
            <Route path="/services/bookkeeping" element={<BookkeepingPage />} />
            <Route path="/services/payroll" element={<PayrollPage />} />
            <Route path="/services/advisory" element={<AdvisoryPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/resources/:slug" element={<BlogPostPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/book-consultation" element={<BookingPage />} />
            <Route path="/request-quote" element={<QuotePage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;