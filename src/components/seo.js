/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ lang, title, description, canonical, image, imageAlt, locale, author, og }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
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

      <link rel="canonical" href={`${site.siteMetadata.siteUrl}${canonical}`} />

      <meta property="og:type" content={og.type || 'website'} />
      <meta property="og:site_name" content="FSVDR" />
      <meta property="og:title" content={title || site.siteMetadata.title} />
      <meta property="og:description" content={description || site.siteMetadata.description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:url" content={`${site.siteMetadata.siteUrl}${canonical}`} />
      <meta property="og:locale" content={locale} />
      {locale === 'en_US' && <meta property="og:locale:alternate" content="es_MX" />}
      {locale === 'es_MX' && <meta property="og:locale:alternate" content="en_US" />}
      {og.type === 'article' && (
        <meta property="article:published_time" content={new Date(og.published_time).toISOString()} />
      )}
      {og.type === 'article' && <meta property="article:author" content={author} />}
      {og.type === 'article' && <meta property="og:section" content={og.section} />}
      {og.type === 'article' && og.tag.map((t, i) => <meta property="og:tag" content={t} key={i} />)}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site:id" content="@fsvdr" />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:title" content={title || site.siteMetadata.title} />
      <meta name="twitter:description" content={description || site.siteMetadata.description} />
      <meta name="twitter:image" content="" />
      <meta name="twitter:image_alt" content="" />
      <meta name="twitter:url" content={`${site.siteMetadata.siteUrl}${canonical}`} />
    </Helmet>
  );
}

SEO.propTypes = {
  lang: PropTypes.string,
  canonical: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  locale: PropTypes.oneOf(['en_US', 'es_MX']),
  author: PropTypes.string,
  og: PropTypes.shape({
    type: PropTypes.oneOf(['website', 'article']),
    published_time: PropTypes.string,
    section: PropTypes.string,
    tag: PropTypes.arrayOf(PropTypes.string),
  }),
};

SEO.defaultProps = {
  lang: 'en',
  canonical: '',
  title: '',
  description: '',
  image: `${
    process.env.GATSBY_URL
  }/.netlify/functions/share-thumbnail?title=I make websites and apps&cirlce=Based in Mexico City ·${new Date().getFullYear()}·&badge=Own it`,
  imageAlt: 'Reads: I make websites and apps. Year 2020 based in Mexico City. Own it.',
  locale: 'en_US',
  author: '@fsvdr',
  og: { type: 'website' },
};

export default SEO;
