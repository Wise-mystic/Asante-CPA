
import React from 'react';
import { Helmet } from 'react-helmet';
import Seo from '@/components/Seo';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { advisoryServices, businessStages, pageServices } from '@/components/services/advisoryData';

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

const AdvisoryPage = () => {

  return (
    <>
      <Seo
        title="Business Advisory & CFO Services"
        description="Professional business advisory and CFO services in Toronto. Financial planning, cash flow management, business valuations, and strategic consulting by licensed CPA."
        path="/services/advisory"
      />

      <Section className="hero-pattern bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Business Advisory & <span className="text-primary-green"> CFO Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Strategic financial advice and CFO services to help your business make informed decisions, optimize performance, and achieve sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/book-consultation">
                <Button className="cta-button text-white px-8 py-3 text-lg font-medium w-full sm:w-auto">
                  Book Strategy Session <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/request-quote">
                <Button variant="outline" className="border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-8 py-3 text-lg font-medium w-full sm:w-auto">Get Quote</Button>
              </Link>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-primary-green" /><span>Strategic Planning</span></div>
              <div className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-primary-green" /><span>CFO Services</span></div>
              <div className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-primary-green" /><span>Business Valuations</span></div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <img  className="rounded-2xl shadow-2xl w-full h-96 object-cover" alt="Business advisory meeting with financial charts and strategic planning" src="https://images.unsplash.com/photo-1681949103006-70066fb25dfe" />
          </motion.div>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionTitle title="Our Advisory Services" subtitle="Strategic financial guidance to drive your business forward" />
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
        <SectionTitle title="Comprehensive Advisory Solutions" subtitle="From financial planning to strategic consulting, we provide the expertise you need" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advisoryServices.map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3"><Lightbulb className="h-5 w-5 text-primary-green flex-shrink-0" /><span className="text-gray-800 font-medium">{service}</span></div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <SectionTitle title="Advisory Services by Business Stage" subtitle="Tailored advice for every stage of your business journey" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {businessStages.map((stage, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} viewport={{ once: true }} className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6"><span className="text-white font-bold text-lg">{index + 1}</span></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{stage.stage}</h3>
              <p className="text-gray-600 mb-6">{stage.description}</p>
              <div className="space-y-3">
                {stage.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="flex items-center space-x-3"><CheckCircle className="h-4 w-4 text-primary-green flex-shrink-0" /><span className="text-sm text-gray-700">{service}</span></div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
      
      <Section className="bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Our Advisory Services?</h2>
            <div className="space-y-6">
              {[
                { title: 'Strategic Expertise', desc: 'CPA-level expertise combined with strategic business acumen to guide your decisions.' },
                { title: 'Objective Perspective', desc: 'Independent, unbiased advice to help you see opportunities and challenges clearly.' },
                { title: 'Actionable Insights', desc: 'Practical recommendations that you can implement immediately to improve performance.' },
                { title: 'Long-term Partnership', desc: 'Ongoing support and guidance as your business grows and evolves.' }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1"><CheckCircle className="h-5 w-5 text-white" /></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
            <img  className="rounded-2xl shadow-xl w-full h-96 object-cover" alt="Business growth chart showing successful strategic planning results" src="https://images.unsplash.com/photo-1595512618325-86df927c7b4c" />
          </motion.div>
        </div>
      </Section>
      
      <Section className="gradient-bg">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Take Your Business to the Next Level?</h2>
          <p className="text-xl text-white/90 mb-8">Let our strategic expertise help you make better decisions, optimize performance, and achieve your business goals.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-consultation">
              <Button className="bg-white text-primary-blue hover:bg-gray-100 px-8 py-3 text-lg font-medium">Schedule Strategy Session</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-blue px-8 py-3 text-lg font-medium w-full sm:w-auto">Learn More</Button>
            </Link>
          </div>
        </motion.div>
      </Section>
    </>
  );
};

export default AdvisoryPage;
