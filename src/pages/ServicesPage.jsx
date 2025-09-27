import React from 'react';
import SEO from '@/components/SEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  FileText, 
  Users, 
  TrendingUp, 
  DollarSign,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Calculator,
      title: 'Individual Tax Preparation',
      description: 'Comprehensive tax preparation and planning services for individuals and families.',
      features: [
        'Personal income tax returns',
        'Tax planning strategies',
        'Deduction optimization',
        'CRA representation'
      ],
      link: '/services/individual-tax'
    },
    {
      icon: FileText,
      title: 'Business Tax Services',
      description: 'Complete tax solutions for corporations, partnerships, and sole proprietorships.',
      features: [
        'Corporate tax returns',
        'HST/GST filing',
        'Tax compliance',
        'Strategic tax planning'
      ],
      link: '/services/business-tax'
    },
    {
      icon: Users,
      title: 'Bookkeeping & Accounting',
      description: 'Professional bookkeeping services to keep your financial records accurate and up-to-date.',
      features: [
        'Monthly bookkeeping',
        'Financial statements',
        'Accounts reconciliation',
        'QuickBooks setup'
      ],
      link: '/services/bookkeeping'
    },
    {
      icon: DollarSign,
      title: 'Payroll Services',
      description: 'Complete payroll management including compliance and reporting.',
      features: [
        'Payroll processing',
        'T4 preparation',
        'Remittance filing',
        'Payroll compliance'
      ],
      link: '/services/payroll'
    },
    {
      icon: TrendingUp,
      title: 'Business Advisory & CFO Services',
      description: 'Strategic financial advice and CFO services to help your business grow.',
      features: [
        'Financial planning',
        'Cash flow management',
        'Business valuations',
        'Strategic consulting'
      ],
      link: '/services/advisory'
    }
  ];

  const industries = [
    'Professional Services',
    'Retail & E-commerce',
    'Construction',
    'Healthcare',
    'Technology',
    'Real Estate',
    'Manufacturing',
    'Non-Profit Organizations'
  ];

  return (
    <>
      <SEO
        title="Professional Accounting Services"
        description="Comprehensive CPA services including tax preparation, bookkeeping, payroll, and business advisory. Serving individuals and businesses in Toronto with personalized professional solutions."
        url="/services"
      />

      {/* Hero Section */}
      <section className="hero-pattern bg-gradient-to-br from-slate-50 to-blue-50 section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
              Professional <span className="text-primary-green">Accounting Services</span>
            </h1>
            <p className="text-lg text-gray-600 mb-3 text-center">
              Clear, practical CPA support — remote or in-person (Canada & U.S.)
            </p>
            <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
              We help individuals, businesses, and not-for-profits with bookkeeping, tax, reporting, payroll, and CFO advisory —
              delivered with transparent fees, timely communication, and dependable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What we do */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Practical, end-to-end accounting support tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              'Bookkeeping & monthly financial statements',
              'Corporate & personal tax (planning, filing, CRA support)',
              'CFO advisory, budgeting & forecasting',
              'Payroll, HST/GST, and compliance',
              'Systems & process improvement (QuickBooks setup, workflows, controls)'
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary-green mt-1 flex-shrink-0" />
                <span className="text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="service-card rounded-xl p-8 bg-white border hover:shadow-xl"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-primary-blue rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-primary-green flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      to={service.link}
                      className="inline-flex items-center text-primary-green font-semibold hover:text-primary-blue transition-colors"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who We Serve
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Small & mid-sized businesses • Not-for-profits & churches • Professionals & families
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              'Small & mid-sized businesses',
              'Not-for-profits & churches',
              'Professionals & families'
            ].map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 text-center shadow-md"
              >
                <span className="text-gray-900 font-semibold">{group}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Asante CPA */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img  
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
                alt="Professional CPA team working on client financial analysis"
               src="https://images.unsplash.com/photo-1493882552576-fce827c6161e" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Asante CPA?
              </h2>

              <div className="space-y-4">
                {[
                  'CPA Ontario Licensed • Professional Corporation',
                  '20+ years’ experience',
                  'Flexible engagement: remote or in-person',
                  'Transparent fees and proactive communication'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary-green mt-1 flex-shrink-0" />
                    <span className="text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How we work (simple steps) */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Work (simple steps)
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Discovery', text: 'Understand your goals and timelines' },
              { step: '2', title: 'Plan', text: 'Clear scope, pricing, and deliverables' },
              { step: '3', title: 'Execute', text: 'Secure document portal, on-time delivery' },
              { step: '4', title: 'Review', text: 'Practical insights and next steps' }
            ].map((s, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <div className="w-10 h-10 rounded-full bg-primary-green text-white flex items-center justify-center font-bold mb-4">
                  {s.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.text}</p>
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
              Ready to Get Professional Help?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today to discuss your accounting needs and discover how 
              our services can benefit your business or personal finances.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center bg-white text-primary-blue hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-medium transition-colors"
            >
              Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;