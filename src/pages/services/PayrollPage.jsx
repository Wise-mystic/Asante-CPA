
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { pageServices, payrollFeatures, compliance } from '@/components/services/payrollData';

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

const PayrollPage = () => {

  return (
    <>
      <Helmet>
        <title>Payroll Services | Asante CPA Professional Corporation</title>
        <meta name="description" content="Professional payroll services in Toronto. Complete payroll processing, T4 preparation, remittance filing, and payroll compliance by licensed CPA." />
        <meta property="og:title" content="Payroll Services | Asante CPA Professional Corporation" />
        <meta property="og:description" content="Professional payroll services including payroll processing, T4 preparation, and compliance management by licensed CPA in Toronto." />
      </Helmet>

      <Section className="hero-pattern bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional <span className="text-primary-green"> Payroll Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Complete payroll management including processing, compliance, and reporting. Focus on your business while we handle your payroll.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/book-consultation">
                <Button className="cta-button text-white px-8 py-3 text-lg font-medium w-full sm:w-auto">
                  Book Payroll Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/request-quote">
                <Button variant="outline" className="border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-8 py-3 text-lg font-medium w-full sm:w-auto">Get Quote</Button>
              </Link>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-primary-green" /><span>CRA Compliant</span></div>
              <div className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-primary-green" /><span>Direct Deposit</span></div>
              <div className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-primary-green" /><span>T4 Preparation</span></div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <img  className="rounded-2xl shadow-2xl w-full h-96 object-cover" alt="Professional payroll processing with employee pay stubs and calculations" src="https://images.unsplash.com/photo-1586282391127-20f3952f64f7" />
          </motion.div>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionTitle title="Our Payroll Services" subtitle="Comprehensive payroll solutions to ensure accurate and compliant payroll processing" />
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
        <SectionTitle title="Complete Payroll Features" subtitle="Everything you need for comprehensive payroll management" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {payrollFeatures.map((feature, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3"><CheckCircle className="h-5 w-5 text-primary-green flex-shrink-0" /><span className="text-gray-800 font-medium">{feature}</span></div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <SectionTitle title="Payroll Compliance Management" subtitle="Stay compliant with all federal and provincial payroll regulations" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {compliance.map((section, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} viewport={{ once: true }} className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{section.title}</h3>
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center space-x-3"><CheckCircle className="h-5 w-5 text-primary-green flex-shrink-0" /><span className="text-gray-700">{item}</span></div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Outsource Your Payroll?</h2>
            <div className="space-y-6">
              {[
                { title: "Save Time & Resources", desc: "Free up valuable time and resources to focus on core business activities." },
                { title: "Ensure Compliance", desc: "Stay compliant with ever-changing payroll regulations and avoid penalties." },
                { title: "Reduce Errors", desc: "Professional processing reduces costly payroll errors and corrections." },
                { title: "Cost Effective", desc: "More affordable than hiring dedicated payroll staff or expensive software." }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1"><CheckCircle className="h-5 w-5 text-white" /></div>
                  <div><h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3><p className="text-gray-600">{benefit.desc}</p></div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
            <img  className="rounded-2xl shadow-xl w-full h-96 object-cover" alt="Happy employees receiving accurate paychecks with professional payroll service" src="https://images.unsplash.com/photo-1493882552576-fce827c6161e" />
          </motion.div>
        </div>
      </Section>

      <Section className="gradient-bg">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Simplify Your Payroll Today</h2>
          <p className="text-xl text-white/90 mb-8">Let us handle the complexity of payroll so you can focus on growing your business.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-consultation">
              <Button className="bg-white text-primary-blue hover:bg-gray-100 px-8 py-3 text-lg font-medium">Start Payroll Service</Button>
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

export default PayrollPage;
