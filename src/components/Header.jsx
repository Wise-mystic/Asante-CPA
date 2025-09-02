import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronUp, Mail, Phone, Facebook, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LogoImage from '@/assets/images/Mr._Ben_Asante_croped_Logo_-removebg-preview.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef(null);

  const services = [
    { name: 'Individual Tax Preparation', path: '/services/individual-tax' },
    { name: 'Business Tax Services', path: '/services/business-tax' },
    { name: 'Bookkeeping & Accounting', path: '/services/bookkeeping' },
    { name: 'Payroll Services', path: '/services/payroll' },
    { name: 'Business Advisory', path: '/services/advisory' },
  ];

  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        // Check if the click target is not the menu button itself
        if (!event.target.closest('button.md\\:hidden')) {
          closeMenus();
        }
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs sm:text-sm text-gray-600">
            <div className="flex items-center space-x-4">
              <a href="https://wa.me/16476280976" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-primary-green" aria-label="WhatsApp">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">+1 (647) 628-0976</span>
              </a>
              <a href="mailto:info@asantecpa.ca" className="flex items-center space-x-1 hover:text-primary-green" aria-label="Email address">
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">info@asantecpa.ca</span>
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <a href="https://www.facebook.com/AsanteCPA" target="_blank" rel="noopener noreferrer" className="hover:text-primary-green" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/company/asante-cpa" target="_blank" rel="noopener noreferrer" className="hover:text-primary-green" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/asantecpa" target="_blank" rel="noopener noreferrer" className="hover:text-primary-green" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://x.com/asantecpa" target="_blank" rel="noopener noreferrer" className="hover:text-primary-green" aria-label="X">
                <X className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0 flex items-center space-x-3">
            <img
              src={LogoImage}
              alt="Asante CPA Professional Corporation Logo"
              className="h-24 w-auto object-contain mt-2"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'text-primary-green' : 'text-gray-700'}`}>
              Home
            </Link>
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'text-primary-green' : 'text-gray-700'}`}>
              About
            </Link>

            <div className="relative" onMouseEnter={() => setIsDesktopServicesOpen(true)} onMouseLeave={() => setIsDesktopServicesOpen(false)}>
              <Link to="/services" className={`nav-link flex items-center ${location.pathname.includes('/services') ? 'text-primary-green' : 'text-gray-700'}`}>
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <AnimatePresence>
                {isDesktopServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border py-2"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-green"
                        onClick={() => setIsDesktopServicesOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/resources" className={`nav-link ${location.pathname === '/resources' ? 'text-primary-green' : 'text-gray-700'}`}>
              Resources
            </Link>
            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'text-primary-green' : 'text-gray-700'}`}>
              Contact
            </Link>
          </div>

          <div className="hidden md:block">
            <Link to="/book-consultation">
              <Button className="cta-button text-white px-6 py-2 rounded-lg font-medium">
                Book Consultation
              </Button>
            </Link>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 z-40"
              onClick={closeMenus}
            />
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="md:hidden py-4 border-t absolute top-full left-0 w-full bg-white z-50"
            >
              <div className="flex flex-col space-y-2 px-4">
                <Link to="/" onClick={closeMenus} className="mobile-nav-link">Home</Link>
                <Link to="/about" onClick={closeMenus} className="mobile-nav-link">About</Link>

                <div>
                  <button onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)} className="w-full flex justify-between items-center text-left mobile-nav-link">
                    <span>Services</span>
                    {isMobileServicesOpen ? <ChevronUp className="h-5 w-5 inline-block ml-2" /> : <ChevronDown className="h-5 w-5 inline-block ml-2" />}
                  </button>
                  <AnimatePresence>
                    {isMobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 mt-2 flex flex-col space-y-2"
                      >
                        {services.map((service) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            onClick={closeMenus}
                            className="mobile-nav-link text-sm"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link to="/resources" onClick={closeMenus} className="mobile-nav-link">Resources</Link>
                <Link to="/contact" onClick={closeMenus} className="mobile-nav-link">Contact</Link>

                <div className="pt-4">
                  <Link to="/book-consultation">
                    <Button onClick={closeMenus} className="cta-button text-white px-6 py-2 rounded-lg font-medium w-full">
                      Book Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;