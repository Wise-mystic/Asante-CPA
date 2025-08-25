import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Calculator, Calendar, FileText, Download, ExternalLink } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { getBlogPosts, storeBlogPosts } from '@/data/blogData.js';
import { blogPosts as initialBlogPostsWithContent } from '@/data/blogData.jsx';

const ResourcesPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // This will initialize the blog posts in localStorage if they don't exist.
    if (!localStorage.getItem('blogPosts')) {
      // We store only the metadata in localStorage, not the JSX content.
      const postsForStorage = initialBlogPostsWithContent.map(({ content, ...rest }) => rest);
      storeBlogPosts(postsForStorage);
    }
    setBlogPosts(getBlogPosts());
  }, []);

  const handleResourceClick = (resourceName) => {
    toast({
      title: "🚧 Resource coming soon!",
      description: `${resourceName} isn't available yet—but don't worry! You can request it in your next prompt! 🚀`,
    });
  };

  const calculators = [
    {
      icon: Calculator,
      title: 'Tax Calculator',
      description: 'Estimate your personal or business tax liability'
    },
    {
      icon: Calculator,
      title: 'HST/GST Calculator',
      description: 'Calculate HST/GST amounts for your transactions'
    },
    {
      icon: Calculator,
      title: 'Payroll Calculator',
      description: 'Calculate employee payroll deductions and net pay'
    },
    {
      icon: Calculator,
      title: 'Business Loan Calculator',
      description: 'Calculate loan payments and interest costs'
    }
  ];

  const resources = [
    {
      icon: FileText,
      title: 'Tax Forms & Documents',
      description: 'Download common tax forms and required documents',
      items: ['T1 Personal Tax Return', 'T2 Corporate Tax Return', 'HST/GST Forms', 'Payroll Forms']
    },
    {
      icon: Calendar,
      title: 'Tax Deadlines Calendar',
      description: 'Important tax deadlines and filing dates',
      items: ['Personal Tax Deadlines', 'Corporate Tax Deadlines', 'HST/GST Filing Dates', 'Payroll Remittance Dates']
    },
    {
      icon: BookOpen,
      title: 'Financial Guides',
      description: 'Comprehensive guides on various financial topics',
      items: ['Small Business Guide', 'Tax Planning Guide', 'Bookkeeping Basics', 'Financial Statements Guide']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Resources & Financial Tools | Asante CPA Professional Corporation</title>
        <meta name="description" content="Free financial resources, tax calculators, guides, and tools for businesses and individuals. Tax deadlines, forms, and expert financial advice from licensed CPA in Toronto." />
        <meta property="og:title" content="Resources & Financial Tools | Asante CPA Professional Corporation" />
        <meta property="og:description" content="Free financial resources, tax calculators, guides, and tools for businesses and individuals from licensed CPA in Toronto." />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-pattern bg-gradient-to-br from-slate-50 to-blue-50 section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Financial Resources & 
              <span className="text-primary-green"> Tools</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Access valuable financial resources, calculators, guides, and expert insights 
              to help you make informed financial decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
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
              Latest Financial Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with our latest articles on tax planning, business finance, and compliance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl border shadow-md hover:shadow-lg transition-shadow flex flex-col"
              >
                <Link to={`/resources/${post.slug}`} className="block p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-primary-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-primary-green font-medium mt-auto">
                    Read More <ExternalLink className="ml-2 h-4 w-4" />
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Calculators Section */}
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
              Financial Calculators
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use our free calculators to estimate taxes, payroll, and other financial calculations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {calculators.map((calculator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer text-center"
                onClick={() => handleResourceClick(calculator.title)}
              >
                <div className="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <calculator.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {calculator.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {calculator.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
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
              Downloadable Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access forms, guides, and important information to help manage your finances
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mb-6">
                  <resource.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {resource.description}
                </p>
                <div className="space-y-3">
                  {resource.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                      onClick={() => handleResourceClick(item)}
                    >
                      <span className="text-gray-700">{item}</span>
                      <Download className="h-4 w-4 text-primary-green" />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Information */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Professional Standards & Compliance
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <p className="text-gray-600 mb-6 leading-relaxed">
                All information and resources provided are for general guidance purposes only and 
                should not be considered as professional advice for specific situations. Tax laws 
                and regulations are subject to change, and individual circumstances may vary.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Asante CPA Professional Corporation is licensed by CPA Ontario and adheres to all 
                professional standards and ethical requirements. We maintain strict confidentiality 
                and professional integrity in all client relationships.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                <span>CPA Ontario Licensed</span>
                <span>•</span>
                <span>Professional Corporation</span>
                <span>•</span>
                <span>Confidentiality Assured</span>
                <span>•</span>
                <span>Ethical Standards</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ResourcesPage;