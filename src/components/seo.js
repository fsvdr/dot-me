import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import baseURL from '../utils/base-url';

function SEO({ lang, title, description, meta, canonical }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  return (
    <Helmet>
      <html lang={lang} dir="ltr" />
      <title>{title || site.siteMetadata.title}</title>

      <meta name="description" content={description || site.siteMetadata.description} />

      <link rel="canonical" href={`${baseURL()}${canonical}`} />
    </Helmet>
  );
}

SEO.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  canonical: PropTypes.string,
};

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
  canonical: '',
};

export default SEO;
