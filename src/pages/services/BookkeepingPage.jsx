
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { pageServices, bookkeepingServices, benefits } from '@/components/services/bookkeepingData';

const Section = ({ children, className = "" }) => (
  <section className={`section-padding ${className}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </section>
);

const SectionTitle = ({ title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-center mb-16"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
  </motion.div>
);

const BookkeepingPage = () => {

  return (
    <>
      <Helmet>
        <title>Bookkeeping & Accounting Services | Asante CPA Professional Corporation</title>
        <meta name="description" content="Professional bookkeeping and accounting services in Toronto. Monthly bookkeeping, financial statements, QuickBooks setup, and accounts reconciliation by licensed CPA." />
        <meta property="og:title" content="Bookkeeping & Accounting Services | Asante CPA Professional Corporation" />
        <meta property="og:description" content="Professional bookkeeping services including monthly bookkeeping, financial statements, and QuickBooks setup by licensed CPA in Toronto." />
      </Helmet>

      <Section className="hero-pattern bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Bookkeeping & <span className="text-primary-green"> Accounting</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Professional bookkeeping services to keep your financial records organized, accurate, and ready for decision-making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/book-consultation">
                <Button className="cta-button text-white px-8 py-3 text-lg font-medium w-full sm:w-auto">
                  Book Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/request-quote">
                <Button variant="outline" className="border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-8 py-3 text-lg font-medium w-full sm:w-auto">Get Quote</Button>
              </Link>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-primary-green" /><span>QuickBooks Certified</span></div>
              <div className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-primary-green" /><span>Monthly Reports</span></div>
              <div className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-primary-green" /><span>CPA Supervised</span></div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <img  className="rounded-2xl shadow-2xl w-full h-96 object-cover" alt="Professional bookkeeper working on financial records and QuickBooks" src="https://images.unsplash.com/photo-1554224155-a1487473ffd9" />
          </motion.div>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionTitle title="Our Bookkeeping Services" subtitle="Comprehensive bookkeeping solutions to keep your business finances organized" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pageServices.map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="service-card rounded-xl p-6 bg-white border hover:shadow-xl">
              <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center mb-4"><service.icon className="h-6 w-6 text-white" /></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-gray-50">
        <SectionTitle title="Complete Bookkeeping Solutions" subtitle="Everything you need to keep your books in perfect order" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookkeepingServices.map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3"><CheckCircle className="h-5 w-5 text-primary-green flex-shrink-0" /><span className="text-gray-800 font-medium">{service}</span></div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Benefits of Professional Bookkeeping</h2>
            <p className="text-lg text-gray-600 mb-8">Outsourcing your bookkeeping provides numerous advantages for your business.</p>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1"><CheckCircle className="h-5 w-5 text-white" /></div>
                  <div><h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3><p className="text-gray-600">{benefit.description}</p></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
            <img  className="rounded-2xl shadow-xl w-full h-96 object-cover" alt="Business owner reviewing financial reports with organized bookkeeping" src="https://images.unsplash.com/photo-1554224155-cfa08c2a758f" />
          </motion.div>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <SectionTitle title="Our Bookkeeping Process" subtitle="Streamlined process for accurate and timely bookkeeping" />
        <div className="space-y-8 max-w-4xl mx-auto">
          {[
            { step: '01', title: 'Initial Setup', description: 'We set up your chart of accounts and establish bookkeeping procedures.' },
            { step: '02', title: 'Monthly Processing', description: 'Regular processing of transactions, reconciliations, and adjustments.' },
            { step: '03', title: 'Financial Reporting', description: 'Monthly financial statements and management reports delivered on time.' },
            { step: '04', title: 'Review & Analysis', description: 'Regular review meetings to discuss financial performance and insights.' }
          ].map((process, index) => (
            <motion.div key={index} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center flex-shrink-0"><span className="text-white font-bold text-lg">{process.step}</span></div>
              <div><h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3><p className="text-gray-600">{process.description}</p></div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="gradient-bg">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Organize Your Books?</h2>
          <p className="text-xl text-white/90 mb-8">Let us handle your bookkeeping so you can focus on what you do best - growing your business.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-consultation">
              <Button className="bg-white text-primary-blue hover:bg-gray-100 px-8 py-3 text-lg font-medium">Start Your Bookkeeping</Button>
            </Link>
            <Link to="/request-quote">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-blue px-8 py-3 text-lg font-medium w-full sm:w-auto">Get Free Quote</Button>
            </Link>
          </div>
        </motion.div>
      </Section>
    </>
  );
};

export default BookkeepingPage;
