import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import styles from './index.module.css';

const IndexPage = () => (
  <Layout>
    <SEO title="fsvdr" />

    <h1 className={styles.huuge}>
      Oh hi, my name is Fernando. I’m a <span className={styles.ghosty}>front end developer</span> based in Mexico City.
    </h1>
  </Layout>
);

export default IndexPage;
