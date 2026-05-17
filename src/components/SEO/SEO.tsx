import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string | string[];
  canonicalUrl?: string;
  ogType?: 'website' | 'article' | 'profile';
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterCreator?: string;
  robots?: string;
  schema?: object | object[];
}

const DEFAULT_TITLE = 'WorldOfTech | Curated Technology Directory';
const DEFAULT_DESCRIPTION = 'The premium curated directory for tech resources, documentation, guides, and tools.';
const DEFAULT_KEYWORDS = [
  'technology',
  'tools',
  'developer tools',
  'system utilities',
  'media streaming',
  'ai resources',
  'learning',
];
const DEFAULT_OG_IMAGE = 'https://worldoftech.dev/og-image.png';
const SITE_URL = 'https://worldoftech.dev';

export const SEO: React.FC<SEOProps> = ({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  canonicalUrl,
  ogType = 'website',
  ogTitle,
  ogDescription,
  ogImage = DEFAULT_OG_IMAGE,
  ogUrl,
  twitterCard = 'summary_large_image',
  twitterCreator = '@worldoftech',
  robots = 'index, follow',
  schema,
}) => {
  const pageTitle = title ? `${title} | WorldOfTech` : DEFAULT_TITLE;
  const metaKeywords = Array.isArray(keywords) ? keywords.join(', ') : keywords;

  // Resolve absolute canonical URL
  const absoluteCanonicalUrl = canonicalUrl
    ? canonicalUrl.startsWith('http')
      ? canonicalUrl
      : `${SITE_URL}${canonicalUrl}`
    : `${SITE_URL}${window.location.pathname}`;

  // Resolve absolute OG image
  const absoluteOgImage = ogImage.startsWith('http')
    ? ogImage
    : ogImage.startsWith('/')
      ? `${SITE_URL}${ogImage}`
      : `${SITE_URL}/${ogImage}`;

  const finalOgTitle = ogTitle || title || DEFAULT_TITLE;
  const finalOgDescription = ogDescription || description || DEFAULT_DESCRIPTION;
  const finalOgUrl = ogUrl || absoluteCanonicalUrl;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={absoluteCanonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:url" content={finalOgUrl} />
      <meta property="og:site_name" content="WorldOfTech" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
      <meta name="twitter:image" content={absoluteOgImage} />
      {twitterCreator && <meta name="twitter:creator" content={twitterCreator} />}

      {/* Structured Schema Data */}
      {schema &&
        (Array.isArray(schema) ? schema : [schema]).map((sch, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(sch)}
          </script>
        ))}
    </Helmet>
  );
};

export default SEO;
