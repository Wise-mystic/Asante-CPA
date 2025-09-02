import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Users, Shield, TrendingUp, CheckCircle, Target } from 'lucide-react';
import AboutPageImage from '@/assets/images/image.png';

const AboutPage = () => {
  const values = [
    {
      icon: Shield,
      title: 'Trust & Integrity',
      description: 'We maintain the highest ethical standards and professional integrity in all our client relationships.'
    },
    {
      icon: Users,
      title: 'Personalized Service',
      description: 'Every client receives tailored solutions designed to meet their unique financial needs and goals.'
    },
    {
      icon: TrendingUp,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, continuously improving our services and expertise.'
    },
    {
      icon: Target,
      title: 'Results-Focused',
      description: 'Our success is measured by the financial success and peace of mind we deliver to our clients.'
    }
  ];

  const credentials = [
    'Chartered Professional Accountant (CPA) - Ontario',
    'Bachelor of Commerce, Accounting Major',
    'Advanced Tax Planning Certification',
    'QuickBooks ProAdvisor Certified',
    'Member of CPA Ontario',
    'Professional Corporation License'
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Professional CPA Services | Asante CPA Professional Corporation</title>
        <meta name="description" content="Learn about Asante CPA Professional Corporation. CPA Ontario licensed with 20+ years experience providing personalized accounting and advisory services to businesses and individuals in Tottenham." />
        <meta property="og:title" content="About Us - Professional CPA Services | Asante CPA Professional Corporation" />
        <meta property="og:description" content="CPA Ontario licensed with 20+ years experience providing personalized accounting and advisory services to businesses and individuals in Tottenham." />
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
                About <span className="text-primary-green">Asante CPA</span> Professional Corporation
              </h1>
              <p className="text-lg text-gray-700 mb-3 leading-relaxed">
                Trusted CPA services — remote or in-person
              </p>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We serve clients across Canada & the U.S. with bookkeeping, tax, financial reporting, and CFO advisory—delivered with clear guidance, responsive service, and dependable results.
              </p>
              {/* Centered Experience Card */}
              <div className="flex justify-center">
                <div className="glass-card rounded-xl p-6 shadow-xl text-center">
                  <div className="text-3xl font-bold text-primary-green">20+</div>
                  <div className="text-gray-700">Years Experience</div>
                </div>
              </div>
              
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img  
                className="rounded-2xl shadow-2xl w-full h-100 object-cover"
                alt="Professional headshot of Mr. Ben Asante"
               src={AboutPageImage}/>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-6">
                Asante CPA Professional Corporation was founded with a simple mission: 
                to provide exceptional accounting and advisory services that help our 
                clients achieve their financial goals while maintaining the highest 
                standards of professional integrity.
              </p>
              <p className="mb-6">
                With over 10 years of experience in public accounting, our team has 
                worked with hundreds of businesses and individuals, from startups to 
                established enterprises, helping them navigate complex financial 
                challenges and opportunities.
              </p>
              <p>
                As a CPA Ontario licensed Professional Corporation, we combine 
                technical expertise with personalized service, ensuring that each 
                client receives the attention and solutions they deserve.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
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
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials & Expertise */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Professional Credentials & Expertise
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our team maintains the highest professional standards through 
                continuous education and certification.
              </p>

              <div className="space-y-4">
                {credentials.map((credential, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-primary-green flex-shrink-0" />
                    <span className="text-gray-700">{credential}</span>
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
                alt="Professional certificates and CPA credentials displayed in office"
               src="https://images.unsplash.com/photo-1542884028-7528427f867d" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="gradient-bg section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              "To provide exceptional accounting and advisory services that empower 
              our clients to make informed financial decisions, achieve their goals, 
              and build lasting prosperity. We are committed to delivering personalized 
              service with professional expertise, integrity, and innovation."
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;