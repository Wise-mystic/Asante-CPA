
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, Briefcase, FileText, Check, DollarSign, ArrowLeft, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const QuotePage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    clientType: '',
    // Step 2
    services: [],
    // Step 3
    businessType: '',
    businessName: '',
    // Step 4
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service) => {
    setFormData((prev) => {
      const services = prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services };
    });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const quotes = JSON.parse(localStorage.getItem('quoteRequests') || '[]');
    const newQuote = { ...formData, id: Date.now(), timestamp: new Date().toISOString() };
    quotes.push(newQuote);
    localStorage.setItem('quoteRequests', JSON.stringify(quotes));
    toast({
      title: 'Quote Request Sent!',
      description: 'We have received your request and will get back to you with a quote within 48 hours.',
    });
    setStep(5); // Success step
  };
  
  const totalSteps = formData.clientType === 'Business' ? 4 : 3;
  let currentStep = step;
  if(formData.clientType === 'Individual' && step > 2) {
    currentStep = step -1;
  }

  const servicesList = ['Individual Tax', 'Business Tax', 'Bookkeeping', 'Payroll', 'Advisory / CFO'];
  const businessTypes = ['Sole Proprietorship', 'Partnership', 'Corporation', 'Non-Profit'];

  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <>
      <Helmet>
        <title>Request a Quote | Asante CPA Professional Corporation</title>
        <meta name="description" content="Get a personalized quote for professional CPA services. Fill out our form for tax, bookkeeping, payroll, or advisory services." />
        <meta property="og:title" content="Request a Quote | Asante CPA Professional Corporation" />
        <meta property="og:description" content="Fill out our easy form to get a personalized quote for your accounting and advisory needs." />
      </Helmet>

      <section className="hero-pattern bg-gradient-to-br from-slate-50 to-blue-50 section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Request a <span className="text-primary-green">Quote</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get a personalized quote for our professional services. Let's find the right solution for you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-2xl border">
            {step < 5 && (
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-primary-blue">Step {currentStep} of {totalSteps}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <motion.div
                    className="bg-primary-green h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  />
                </div>
              </div>
            )}
            
            <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" variants={stepVariants} initial="hidden" animate="visible" exit="exit">
                <h2 className="text-2xl font-bold text-center mb-6">Are you an individual or a business?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant={formData.clientType === 'Individual' ? 'default' : 'outline'} onClick={() => { setFormData(p => ({...p, clientType: 'Individual'})); nextStep(); }} className="h-auto py-6 text-lg cta-button-behavior">
                    <User className="mr-2"/> Individual
                  </Button>
                  <Button variant={formData.clientType === 'Business' ? 'default' : 'outline'} onClick={() => { setFormData(p => ({...p, clientType: 'Business'})); nextStep(); }} className="h-auto py-6 text-lg cta-button-behavior">
                    <Briefcase className="mr-2"/> Business
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" variants={stepVariants} initial="hidden" animate="visible" exit="exit">
                <h2 className="text-2xl font-bold text-center mb-6">What services are you interested in?</h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {servicesList.map(service => (
                    <Button key={service} variant={formData.services.includes(service) ? 'default' : 'outline'} onClick={() => handleServiceToggle(service)} className="h-auto py-4 cta-button-behavior flex flex-col">
                      <FileText className="mb-2"/>
                      <span className="text-center text-sm">{service}</span>
                    </Button>
                  ))}
                </div>
                <div className="flex justify-between mt-8">
                  <Button variant="ghost" onClick={prevStep}><ArrowLeft className="mr-2"/>Back</Button>
                  <Button onClick={() => formData.clientType === 'Individual' ? setStep(4) : nextStep()} disabled={formData.services.length === 0} className="cta-button">Next</Button>
                </div>
              </motion.div>
            )}

            {step === 3 && formData.clientType === 'Business' && (
              <motion.div key="step3" variants={stepVariants} initial="hidden" animate="visible" exit="exit">
                <h2 className="text-2xl font-bold text-center mb-6">Tell us about your business</h2>
                <div>
                    <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
                    <input type="text" id="businessName" name="businessName" value={formData.businessName} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="Your Company Inc." />
                </div>
                <div className="mt-4">
                  <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">Business Type</label>
                  <select id="businessType" name="businessType" value={formData.businessType} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white">
                      <option value="">Select type...</option>
                      {businessTypes.map(type => <option key={type} value={type}>{type}</option>)}
                  </select>
                </div>
                <div className="flex justify-between mt-8">
                  <Button variant="ghost" onClick={prevStep}><ArrowLeft className="mr-2"/>Back</Button>
                  <Button onClick={nextStep} className="cta-button">Next</Button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="step4" variants={stepVariants} initial="hidden" animate="visible" exit="exit">
                <h2 className="text-2xl font-bold text-center mb-6">Your Contact Information</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="flex items-center text-sm font-medium text-gray-700 mb-2"><User className="mr-2 h-4 w-4" />Full Name *</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                  </div>
                  <div>
                    <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700 mb-2"><Mail className="mr-2 h-4 w-4" />Email *</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                  </div>
                   <div>
                    <label htmlFor="phone" className="flex items-center text-sm font-medium text-gray-700 mb-2"><Phone className="mr-2 h-4 w-4" />Phone</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Additional Message</label>
                    <textarea id="message" name="message" rows="3" value={formData.message} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg"></textarea>
                  </div>
                  <div className="flex justify-between pt-4">
                    <Button variant="ghost" onClick={() => formData.clientType === 'Individual' ? setStep(2) : prevStep()}><ArrowLeft className="mr-2"/>Back</Button>
                    <Button type="submit" className="cta-button"><Send className="mr-2"/>Submit Quote</Button>
                  </div>
                </form>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div key="step5" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="text-center py-8">
                 <div className="w-24 h-24 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="h-12 w-12 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
                <p className="text-gray-600 text-lg mb-8">Your quote request has been sent. We will review your information and get back to you within 48 hours.</p>
                <Button onClick={() => setStep(1)} className="cta-button">Request Another Quote</Button>
              </motion.div>
            )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuotePage;
