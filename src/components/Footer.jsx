import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Facebook, Linkedin, Instagram, Twitter, X } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import FooterLogoImage from '@/assets/images/crop-logo2.png';
import CpaLogo from '@/assets/images/cpa-l-logo.png';

const Footer = () => {
  const firmAddress = "9 Sparrow way, Tottenham, ON, LOG1W0";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(firmAddress)}`;
  const whatsappUrl = "https://wa.me/16476280976";
  const emailAddress = "info@asantecpa.ca";

  // Social media links - replace these with actual URLs
  const socialLinks = {
    facebook: "https://www.facebook.com/AsanteCPA",
    linkedin: "https://www.linkedin.com/company/asante-cpa",
    instagram: "https://www.instagram.com/asantecpa",
    X: "https://x.com/asantecpa"
  };

  // Social media icon component with hover animations
  const SocialIcon = ({ Icon, href }) => (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="group relative inline-block"
    >
      <div className="absolute inset-0 bg-primary-green opacity-0 group-hover:opacity-60 rounded-full transition-opacity duration-300 transform scale-0 group-hover:scale-110"></div>
      <Icon className="h-7 w-8 text-gray-300 group-hover:text-primary-green transition-colors duration-300 relative z-10" />
    </a>
  );

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-3">
              <img 
                src={FooterLogoImage} 
                alt="Asante CPA Professional Corporation Logo" 
                className="h-24 w-auto object-contain" 
                onError={(e) => {
                  console.error('Footer logo failed to load, using fallback');
                  e.target.src = FooterLogoImage;
                }}
              />
              {/* Social Media Links */}
              <div className="flex space-x-4">
                <SocialIcon Icon={Facebook} href={socialLinks.facebook} />
                <SocialIcon Icon={Linkedin} href={socialLinks.linkedin} />
                <SocialIcon Icon={Instagram} href={socialLinks.instagram} />
                <SocialIcon Icon={X} href={socialLinks.X} />
              </div>
            </Link>
            <div className="mt-4">
              <img
                src={CpaLogo}
                alt="CPA Chartered Professional Accountant logo"
                className="h-12 w-auto object-contain"
              />
            </div>
            <div className="mt-4">
              <p className="text-gray-300 mb-4 max-w-md leading-relaxed">
                Trusted accounting and advisory services for businesses and individuals. 
                CPA-certified with 20+ years of experience providing personalized financial solutions.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                <span className="drop-shadow-sm">CPA Ontario Licensed</span>
                <span>•</span>
                <span className="drop-shadow-sm">Professional Corporation</span>
              </div>
              
              
            </div>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">Quick Links</span>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-300 hover:text-primary-green transition-colors">
                About Us
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-primary-green transition-colors">
                Our Services
              </Link>
              <Link to="/resources" className="block text-gray-300 hover:text-primary-green transition-colors">
                Resources
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-primary-green transition-colors">
                Contact
              </Link>
              <Link 
                to="/payment-portal" 
                className="block text-gray-300 hover:text-primary-green transition-colors"
              >
                Payment Portal
              </Link>
            </div>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">Contact Info</span>
            <div className="space-y-3">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group">
                <Phone className="h-4 w-4 text-primary-green" />
                <span className="text-gray-300 group-hover:text-primary-green transition-colors">+1 (647) 628-0976</span>
              </a>
              <a href={`mailto:${emailAddress}`} className="flex items-center space-x-3 group">
                <Mail className="h-4 w-4 text-primary-green" />
                <span className="text-gray-300 group-hover:text-primary-green transition-colors">{emailAddress}</span>
              </a>
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start space-x-3 group">
                <MapPin className="h-4 w-4 text-primary-green mt-1 flex-shrink-0" />
                <span className="text-gray-300 group-hover:text-primary-green transition-colors">
                  {firmAddress}
                </span>
              </a>
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-primary-green mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                  <p>Sat: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Asante CPA Professional Corporation. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm hover:text-primary-green cursor-pointer">
                Privacy Policy
              </span>
              <span className="text-gray-400 text-sm hover:text-primary-green cursor-pointer">
                Terms of Service
              </span>
              <span className="text-gray-400 text-sm hover:text-primary-green cursor-pointer">
                Professional Standards
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;