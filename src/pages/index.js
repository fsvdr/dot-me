import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import styles from './index.module.css';

const IndexPage = () => (
  <Layout className={styles.container}>
    <SEO title="fsvdr" />

    <h1 className={styles.huuge}>
      Oh hi, my name is Fernando. I’m a <span className={styles.ghosty}>front end developer</span> based in Mexico City.
    </h1>

    <div className={styles.intro}>
      <p className={styles.intro}>
        I build clean and modern <b>user interfaces</b> with performance and accessibility in mind.
      </p>

      <p className={styles.intro}>
        Currently I&apos;m a lead front end developer at Blac-Sheep where I work closely with our clients to bring new
        features to their web and mobile apps.
      </p>
    </div>
  </Layout>
);

export default IndexPage;
