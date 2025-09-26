
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Seo from '@/components/Seo';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const firmAddress = "9 Sparrow way, Tottenham, ON, LOG1W0";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(firmAddress)}`;
  const whatsappUrl = "https://wa.me/16476280976";
  const emailAddress = "info@asantecpa.ca";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    const newSubmission = { ...formData, id: Date.now(), timestamp: new Date().toISOString() };
    submissions.push(newSubmission);
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
    toast({
      title: "Message sent successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours."
    });
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const services = ['Individual Tax Preparation', 'Business Tax Services', 'Bookkeeping & Accounting', 'Payroll Services', 'Business Advisory', 'Other'];
  
  const contactInfo = [
    { icon: Phone, title: 'Phone', details: '+1 (647) 628-0976', description: 'Mon-Fri: 9:00 AM - 6:00 PM', href: whatsappUrl },
    { icon: Mail, title: 'Email', details: emailAddress, description: 'We respond within 24 hours', href: `mailto:${emailAddress}` },
    { icon: MapPin, title: 'Office', details: firmAddress, description: 'By appointment only', href: googleMapsUrl },
    { icon: Clock, title: 'Hours', details: 'Mon-Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 2:00 PM', description: 'Closed Sundays', href: '#' }
  ];

  return (
    <>
      <Seo
        title="Contact Us - Schedule Consultation"
        description="Contact Asante CPA Professional Corporation in Tottenham. Schedule a consultation for tax preparation, bookkeeping, payroll, and business advisory services. Licensed CPA with personalized service."
        path="/contact"
      />

      <section className="hero-pattern bg-gradient-to-br from-slate-50 to-blue-50 section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in <span className="text-primary-green"> Touch</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to take control of your finances? Contact us today to schedule 
              a consultation and discover how we can help you achieve your financial goals.
            </p>
            <Link to="/book-consultation">
              <Button className="cta-button text-white px-8 py-3 text-lg font-medium">Book Consultation</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="text-center">
                <a href={info.href} target="_blank" rel="noopener noreferrer" className="group">
                  <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-green transition-colors">
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-green transition-colors">{info.title}</h3>
                  <p className="text-gray-800 font-medium mb-1 whitespace-pre-line">{info.details}</p>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent" placeholder="Your full name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent" placeholder="+1 (647) 628-0976" />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                      <select id="service" name="service" value={formData.service} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent">
                        <option value="">Select a service</option>
                        {services.map((service, index) => <option key={index} value={service}>{service}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent" placeholder="Tell us about your needs and how we can help..." />
                  </div>
                  <Button type="submit" className="w-full cta-button text-white px-8 py-3 text-lg font-medium">
                    Send Message <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Location</h3>
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="block bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-4 hover:opacity-80 transition-opacity">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">View on Google Maps</p>
                    <p className="text-sm text-gray-500">{firmAddress}</p>
                  </div>
                </a>
                <p className="text-gray-600">
                  Conveniently located to serve clients in Tottenham and surrounding areas.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Why Asante CPA?</h3>
                <div className="space-y-4">
                  {[
                    'CPA Ontario Licensed • Professional Corporation',
                    '20+ years’ experience',
                    'Flexible engagement: remote or in-person',
                    'Transparent fees and proactive communication'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary-green flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="gradient-bg section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8">
              Take the first step towards better financial management. 
              Schedule your consultation today.
            </p>
            <Link to="/book-consultation">
              <Button className="bg-white text-primary-blue hover:bg-gray-100 px-8 py-3 text-lg font-medium">Schedule Consultation</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};
export default ContactPage;
