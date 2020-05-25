import React from 'react';

import { motion } from 'framer-motion';
import Layout from '../components/layout';
import SEO from '../components/seo';

import styles from './index.module.css';
import useParallax, { PARALLAX_DEPTH } from '../hooks/useParallax';

const IndexPage = () => {
  const { containerRef, y } = useParallax(PARALLAX_DEPTH.BACKGROUND);

  return (
    <Layout className={styles.container}>
      <SEO title="fsvdr" />

      <h1 className={styles.huuge}>
        Oh hi, my name is Fernando. I’m a <span className={styles.ghosty}>front end developer</span> based in Mexico
        City.
      </h1>

      <motion.div style={{ y }} className={styles.intro} ref={containerRef}>
        <p className={styles.intro}>
          I build clean and modern <b>user interfaces</b> with performance and accessibility in mind. Which is a nerdy
          way of saying I do websites, apps and everything of the sorts.
        </p>

        <p className={styles.intro}>
          Currently I&apos;m a lead front end developer at Blac-Sheep where I work closely with our clients to bring new
          features to their apps.
        </p>
      </motion.div>
    </Layout>
  );
};

export default IndexPage;
