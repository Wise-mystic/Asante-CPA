import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image = "https://asantecpa.ca/src/assets/images/Mr._Ben_Asante_croped_Logo_-removebg-preview.png",
  url,
  type = "website"
}) => {
  const fullTitle = title ? `${title} - Asante CPA Professional Corporation` : 'Asante CPA Professional Corporation - Chartered Professional Accountant';
  const fullDescription = description || 'Professional CPA services including tax preparation, bookkeeping, payroll, and business advisory for SMEs and NPOs in Ontario. Expert accounting solutions for your business.';
  const fullKeywords = keywords || 'CPA, chartered professional accountant, tax preparation, bookkeeping, payroll, business advisory, accounting services, Ontario, SME, NPO';
  const fullUrl = url ? `https://asantecpa.ca${url}` : 'https://asantecpa.ca/';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Asante CPA Professional Corporation" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;