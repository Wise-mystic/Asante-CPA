
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Mail, Phone, Book, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookings = JSON.parse(localStorage.getItem('consultationBookings') || '[]');
    const newBooking = { ...formData, id: Date.now(), timestamp: new Date().toISOString() };
    bookings.push(newBooking);
    localStorage.setItem('consultationBookings', JSON.stringify(bookings));
    toast({
      title: 'Consultation Booked!',
      description: "We've received your request and will confirm your appointment shortly.",
      action: <CheckCircle className="text-green-500" />,
    });
    setFormData({ name: '', email: '', phone: '', service: '', date: '', time: '', notes: '' });
  };

  const services = [
    'Individual Tax Consultation',
    'Business Tax Consultation',
    'Bookkeeping Setup Consultation',
    'Payroll Services Consultation',
    'Business Advisory Session',
    'General Inquiry',
  ];

  const availableTimes = ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'];

  return (
    <>
      <Helmet>
        <title>Book a Consultation | Asante CPA Professional Corporation</title>
        <meta name="description" content="Schedule a consultation with a professional CPA. Book your appointment for tax, bookkeeping, payroll, or advisory services today." />
        <meta property="og:title" content="Book a Consultation | Asante CPA Professional Corporation" />
        <meta property="og:description" content="Easily schedule your consultation for professional CPA services. Choose your service, date, and time." />
      </Helmet>

      <section className="hero-pattern bg-gradient-to-br from-slate-50 to-blue-50 section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Book Your <span className="text-primary-green">Consultation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Schedule your one-on-one consultation with our expert team. Choose a service and time that works best for you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-2xl border"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Appointment Details</h2>
                <p className="text-gray-600">Please fill out the form below to book your appointment.</p>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <User className="mr-2 h-4 w-4" /> Full Name *
                  </label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent" placeholder="Your Full Name" />
                </div>
                <div>
                  <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Mail className="mr-2 h-4 w-4" /> Email Address *
                  </label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent" placeholder="your.email@example.com" />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Phone className="mr-2 h-4 w-4" /> Phone Number
                </label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent" placeholder="+1 (555) 123-4567" />
              </div>

              {/* Service and Date/Time */}
              <div>
                <label htmlFor="service" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Book className="mr-2 h-4 w-4" /> Select Service *
                </label>
                <select id="service" name="service" required value={formData.service} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent bg-white">
                  <option value="" disabled>Choose a service...</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="mr-2 h-4 w-4" /> Preferred Date *
                  </label>
                  <input type="date" id="date" name="date" required value={formData.date} onChange={handleInputChange} min={new Date().toISOString().split('T')[0]} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="time" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Clock className="mr-2 h-4 w-4" /> Preferred Time *
                  </label>
                  <select id="time" name="time" required value={formData.time} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent bg-white">
                    <option value="" disabled>Select a time slot...</option>
                    {availableTimes.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                <textarea id="notes" name="notes" rows={4} value={formData.notes} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent" placeholder="Tell us briefly about your needs..."></textarea>
              </div>

              <Button type="submit" className="w-full cta-button text-white px-8 py-3 text-lg font-medium">
                Request Consultation <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BookingPage;
