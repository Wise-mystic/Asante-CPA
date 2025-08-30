import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  FileText, 
  Users, 
  TrendingUp, 
  Shield, 
  Award,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  const services = [
    {
      icon: Calculator,
      title: 'Individual Tax Preparation',
      description: 'Expert tax preparation and planning for individuals and families.',
      link: '/services/individual-tax'
    },
    {
      icon: FileText,
      title: 'Business Tax Services',
      description: 'Comprehensive tax solutions for small and medium businesses.',
      link: '/services/business-tax'
    },
    {
      icon: Users,
      title: 'Bookkeeping & Accounting',
      description: 'Professional bookkeeping services to keep your finances organized.',
      link: '/services/bookkeeping'
    },
    {
      icon: TrendingUp,
      title: 'Business Advisory',
      description: 'Strategic financial advice to help your business grow and thrive.',
      link: '/services/advisory'
    }
  ];

  const trustSignals = [
    { icon: Shield, text: 'CPA Ontario Licensed' },
    { icon: Award, text: '10+ Years Experience' },
    { icon: Users, text: '500+ Satisfied Clients' },
    { icon: CheckCircle, text: 'Professional Corporation' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Small Business Owner',
      content: 'Asante CPA has been instrumental in helping my business grow. Their expertise and personalized service are unmatched.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Individual Client',
      content: 'Professional, reliable, and always available when I need them. My taxes have never been in better hands.',
      rating: 5
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Startup Founder',
      content: 'The advisory services helped us make crucial financial decisions. Highly recommend their expertise.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Trusted Accounting & Advisory Services | Asante CPA Professional Corporation</title>
        <meta name="description" content="Professional CPA services for businesses, individuals, and not-for-profits across Toronto and the Greater Toronto Area. Comprehensive accounting solutions including tax preparation, bookkeeping, corporate accounting, CFO advisory, and church/not-for-profit reporting." />
        <meta property="og:title" content="Asante CPA Professional Corporation - Toronto & GTA Accounting Services" />
        <meta property="og:description" content="Professional CPA services for businesses, individuals, and not-for-profits across Toronto and the Greater Toronto Area. Comprehensive accounting solutions including tax preparation, bookkeeping, corporate accounting, CFO advisory, and church/not-for-profit reporting." />
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Professional CPA Services for 
                <span className="text-primary-green"> Toronto & GTA</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                At Asante CPA Professional Corporation, we provide professional CPA services for businesses, individuals, and not-for-profits across Toronto and the Greater Toronto Area.
                From bookkeeping and tax preparation to corporate accounting, CFO advisory, and church/not-for-profit reporting, we deliver personalized solutions backed by expertise you can trust.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/book-consultation">
                  <Button 
                    className="cta-button text-white px-8 py-3 text-lg font-medium w-full sm:w-auto"
                  >
                    Book Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/request-quote">
                  <Button 
                    variant="outline" 
                    className="border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-8 py-3 text-lg font-medium w-full sm:w-auto"
                  >
                    Request a Quote
                  </Button>
                </Link>
              </div>

              {/* Trust Signals */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {trustSignals.map((signal, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="trust-badge rounded-lg p-3 text-center"
                  >
                    <signal.icon className="h-6 w-6 text-primary-blue mx-auto mb-2" />
                    <p className="text-xs font-medium text-gray-700">{signal.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img  
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                alt="Professional CPA office environment with modern workspace"
               src="https://images.unsplash.com/photo-1570126618953-d437176e8c79" />
              
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-6 -left-6 glass-card rounded-xl p-6 shadow-xl"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-blue">500+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-green">10+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                </div>
              </motion.div>
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
              Our Professional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive accounting and advisory solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={service.link} className="block">
                  <div className="service-card rounded-xl p-6 h-full bg-white hover:shadow-xl">
                    <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-primary-green font-medium">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
                alt="CPA professional reviewing financial documents with client"
               src="https://images.unsplash.com/photo-1554224155-a1487473ffd9" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Asante CPA?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We combine professional expertise with personalized service to deliver 
                exceptional results for our clients.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      CPA-Certified Expertise
                    </h3>
                    <p className="text-gray-600">
                      Licensed CPA with 10+ years of experience and ongoing professional development.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Personalized Service
                    </h3>
                    <p className="text-gray-600">
                      Tailored solutions that meet your specific business and personal needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Modern Solutions
                    </h3>
                    <p className="text-gray-600">
                      Leveraging technology and modern practices for efficient service delivery.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by businesses and individuals across Tottenham
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule a consultation today and discover how we can help you achieve your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-consultation">
                <Button 
                  className="bg-white text-primary-blue hover:bg-gray-100 px-8 py-3 text-lg font-medium"
                >
                  Book Consultation
                </Button>
              </Link>
              <Link to="/request-quote">
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 hover:border-white/80 px-8 py-3 text-lg font-medium"
                >
                  Get a Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;