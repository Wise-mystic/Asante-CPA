
import React from 'react';
import { Helmet } from 'react-helmet';
import Seo from '@/components/Seo';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calculator, FileText, Shield, TrendingUp, CheckCircle, ArrowRight, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

const IndividualTaxPage = () => {

  const services = [
    {
      icon: FileText,
      title: 'Personal Income Tax Returns',
      description: 'Complete preparation of T1 personal income tax returns with maximum deduction optimization.'
    },
    {
      icon: TrendingUp,
      title: 'Tax Planning & Strategy',
      description: 'Proactive tax planning to minimize your tax liability and maximize your refunds.'
    },
    {
      icon: Shield,
      title: 'CRA Representation',
      description: 'Professional representation and communication with Canada Revenue Agency on your behalf.'
    },
    {
      icon: DollarSign,
      title: 'Deduction Optimization',
      description: 'Comprehensive review to ensure you claim all eligible deductions and credits.'
    }
  ];

  const taxSituations = [
    'Employment income (T4)',
    'Self-employment income',
    'Rental property income',
    'Investment income & capital gains',
    'Pension & retirement income',
    'Foreign income reporting',
    'Multiple income sources',
    'Complex family situations'
  ];

  const benefits = [
    'Maximize your tax refund',
    'Ensure compliance with tax laws',
    'Save time and reduce stress',
    'Professional CRA representation',
    'Year-round tax advice',
    'Electronic filing for faster refunds'
  ];

  return (
    <>
      <Seo
        title="Individual Tax Preparation Services"
        description="Professional individual tax preparation services in Toronto. T1 personal income tax returns, tax planning, CRA representation, and deduction optimization by licensed CPA."
        path="/services/individual-tax"
      />

      {/* Hero Section */}
      <section className="hero-pattern bg-gradient-to-br from-slate-50 to-blue-50 section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Individual Tax 
                <span className="text-primary-green"> Preparation</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professional tax preparation services to maximize your refund and 
                ensure full compliance with Canadian tax laws.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/book-consultation">
                  <Button 
                    className="cta-button text-white px-8 py-3 text-lg font-medium w-full sm:w-auto"
                  >
                    Book Tax Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/request-quote">
                  <Button 
                    variant="outline" 
                    className="border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-8 py-3 text-lg font-medium w-full sm:w-auto"
                  >
                    Get Quote
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary-green" />
                  <span>CPA Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary-green" />
                  <span>Electronic Filing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary-green" />
                  <span>CRA Representation</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img  
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                alt="Individual reviewing tax documents with CPA professional"
               src="https://images.unsplash.com/photo-1554224155-6726b3ff858f" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Individual Tax Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tax preparation and planning services tailored to your personal situation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="service-card rounded-xl p-6 bg-white border hover:shadow-xl"
              >
                <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Situations We Handle */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tax Situations We Handle
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                From simple to complex tax situations, we have the expertise 
                to handle all types of personal income tax scenarios.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {taxSituations.map((situation, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-primary-green flex-shrink-0" />
                    <span className="text-gray-700">{situation}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img  
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              alt="Various tax forms and documents organized on desk"
               src="https://images.unsplash.com/photo-1554224154-22dec7ec8818" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Professional Tax Preparation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why choose professional tax preparation over DIY software
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Tax Preparation Process
            </h2>
            <p className="text-xl text-gray-600">
              Simple, efficient, and thorough
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Initial Consultation',
                description: 'We discuss your tax situation and gather necessary documents.'
              },
              {
                step: '02',
                title: 'Document Review',
                description: 'Thorough review of all tax documents and identification of deductions.'
              },
              {
                step: '03',
                title: 'Tax Preparation',
                description: 'Professional preparation of your tax return with optimization strategies.'
              },
              {
                step: '04',
                title: 'Review & Filing',
                description: 'Final review with you before electronic filing with CRA.'
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-6"
              >
                <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {process.title}
                  </h3>
                  <p className="text-gray-600">
                    {process.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Maximize Your Tax Refund?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Don't leave money on the table. Let our CPA expertise work for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-consultation">
                <Button 
                  className="bg-white text-primary-blue hover:bg-gray-100 px-8 py-3 text-lg font-medium"
                >
                  Schedule Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary-blue px-8 py-3 text-lg font-medium w-full"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default IndividualTaxPage;
