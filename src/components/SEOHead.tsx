import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  articleDate?: string;
  articleAuthor?: string;
  keywords?: string;
  schema?: object | object[];
}

const SITE_URL = "https://ehh-nepal.netlify.app";
const DEFAULT_OG_IMAGE = "https://res.cloudinary.com/dbfknoyxl/image/upload/v1776168905/hero-bg_j8uqng.webp";

const SEOHead = ({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  articleDate,
  articleAuthor,
  keywords,
  schema,
}: SEOHeadProps) => {
  const fullTitle = title.includes("EHH Nepal") ? title : `${title} | EHH Nepal`;
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="EHH Nepal" />

      {/* Article-specific */}
      {ogType === "article" && articleDate && (
        <meta property="article:published_time" content={articleDate} />
      )}
      {ogType === "article" && articleAuthor && (
        <meta property="article:author" content={articleAuthor} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(schema) ? schema : [schema])}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
