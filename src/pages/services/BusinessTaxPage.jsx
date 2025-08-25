
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building, FileText, Shield, TrendingUp, CheckCircle, ArrowRight, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BusinessTaxPage = () => {

  const services = [
    {
      icon: Building,
      title: 'Corporate Tax Returns',
      description: 'Complete preparation of T2 corporate income tax returns for all business structures.'
    },
    {
      icon: Calculator,
      title: 'HST/GST Filing',
      description: 'Accurate HST/GST return preparation and filing to ensure compliance with CRA requirements.'
    },
    {
      icon: Shield,
      title: 'Tax Compliance',
      description: 'Comprehensive compliance services to keep your business in good standing with tax authorities.'
    },
    {
      icon: TrendingUp,
      title: 'Strategic Tax Planning',
      description: 'Proactive tax planning strategies to minimize your business tax liability legally.'
    }
  ];

  const businessTypes = [
    'Sole Proprietorships',
    'Partnerships',
    'Corporations (CCPC)',
    'Professional Corporations',
    'Non-Profit Organizations',
    'Holding Companies',
    'Investment Companies',
    'Foreign-Controlled Corporations'
  ];

  const taxServices = [
    'T2 Corporate Income Tax Returns',
    'T1 Business Income (Schedule T2125)',
    'HST/GST Returns (RT0001)',
    'Payroll Tax Returns (PD7A)',
    'Provincial Tax Returns',
    'Installment Payment Planning',
    'Tax Audit Support',
    'Voluntary Disclosure Program'
  ];

  return (
    <>
      <Helmet>
        <title>Business Tax Services | Asante CPA Professional Corporation</title>
        <meta name="description" content="Professional business tax services in Toronto. Corporate tax returns, HST/GST filing, tax compliance, and strategic tax planning for all business structures by licensed CPA." />
        <meta property="og:title" content="Business Tax Services | Asante CPA Professional Corporation" />
        <meta property="og:description" content="Professional business tax services including corporate tax returns, HST/GST filing, and strategic tax planning by licensed CPA in Toronto." />
      </Helmet>

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
                Business Tax 
                <span className="text-primary-green"> Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Comprehensive tax solutions for corporations, partnerships, and 
                sole proprietorships. Minimize tax liability while ensuring full compliance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/book-consultation">
                  <Button 
                    className="cta-button text-white px-8 py-3 text-lg font-medium w-full sm:w-auto"
                  >
                    Book Business Consultation
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
                  <span>All Business Types</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary-green" />
                  <span>Tax Planning</span>
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
                alt="Business owner discussing tax strategy with CPA professional"
               src="https://images.unsplash.com/photo-1554224155-a1487473ffd9" />
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
              Our Business Tax Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete tax solutions designed to optimize your business tax position
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

      {/* Business Types */}
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
                Business Structures We Serve
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We provide specialized tax services for all types of business 
                structures, ensuring compliance and optimization for each unique situation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {businessTypes.map((type, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-primary-green flex-shrink-0" />
                    <span className="text-gray-700">{type}</span>
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
                alt="Various business tax forms and corporate documents"
               src="https://images.unsplash.com/photo-1554224154-22dec7ec8818" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tax Services List */}
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
              Comprehensive Tax Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From basic compliance to complex tax planning strategies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {taxServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 text-center hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  {service}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Planning Benefits */}
      <section className="section-padding bg-gray-50">
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
                alt="Business financial charts and tax planning documents"
               src="https://images.unsplash.com/photo-1554224155-a1487473ffd9" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Strategic Tax Planning Benefits
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Minimize Tax Liability
                    </h3>
                    <p className="text-gray-600">
                      Strategic planning to legally reduce your business tax burden through proper structuring and timing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Cash Flow Optimization
                    </h3>
                    <p className="text-gray-600">
                      Improve cash flow through proper tax planning and installment payment strategies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Compliance Assurance
                    </h3>
                    <p className="text-gray-600">
                      Stay compliant with all tax regulations while maximizing available deductions and credits.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Future Planning
                    </h3>
                    <p className="text-gray-600">
                      Long-term tax strategies that support your business growth and succession planning.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
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
              Optimize Your Business Tax Strategy
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Don't let tax complexity hold your business back. Let our expertise 
              help you minimize taxes and maximize profits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-consultation">
                <Button 
                  className="bg-white text-primary-blue hover:bg-gray-100 px-8 py-3 text-lg font-medium"
                >
                  Schedule Business Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary-blue px-8 py-3 text-lg font-medium w-full"
                >
                  Contact Us Today
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BusinessTaxPage;
