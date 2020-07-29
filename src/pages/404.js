import React from 'react';

import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Title from '../styles/title';
import GhostText from '../styles/ghost-text';
import Section from '../styles/section';
import SiteNav from '../components/site-nav';

const NotFoundPage = ({ location }) => (
  <Layout>
    <SEO title="404: Not found" />

    <Section>
      <Title size="big">
        There ain&apos;t such thing as <GhostText>{location.pathname}</GhostText>. There could be...but no.
      </Title>

      <SiteNav showContact={false} />
    </Section>
  </Layout>
);

NotFoundPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default NotFoundPage;
