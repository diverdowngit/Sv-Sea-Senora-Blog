import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ description, lang, meta, keywords, title }) {
  const data = useStaticQuery(graphql`
    query DefaultSEOQuery {
      contentfulSiteInformation {
        siteName
        siteDescription
        twitterHandle
      }
    }
  `);

  const siteName = data.contentfulSiteInformation.siteName;
  const siteDescription = data.contentfulSiteInformation.siteDescription;
  const twitterHandle = data.contentfulSiteInformation.twitterHandle;

  return (
    <>
      <title>{`${title} | ${siteName}`}</title>
      <meta name="description" content={siteDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={siteDescription} />
      {keywords.length > 0 ? (
        <meta name="keywords" content={keywords.join(`, `)} />
      ) : null}
    </>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default SEO;
