import React from 'react';
import { Helmet } from 'react-helmet';

const SITE_NAME = 'Asante CPA Professional Corporation';
const SITE_URL = 'https://asantecpa.ca';
const DEFAULT_DESCRIPTION = 'CPA Ontario licensed accounting firm offering bookkeeping, tax, payroll, and advisory services. Serving clients across Canada & the U.S.';

export default function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  noindex = false,
}) {
  const url = `${SITE_URL}${path}`.replace(/\/+$/, '/');
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}
    </Helmet>
  );
}


