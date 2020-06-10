import React from 'react';

import { motion } from 'framer-motion';
import Layout from '../components/layout';
import SEO from '../components/seo';

import styles from './index.module.css';
import useParallax, { PARALLAX_DEPTH } from '../hooks/useParallax';

const IndexPage = () => {
  const { containerRef, y } = useParallax(PARALLAX_DEPTH.FRONT);

  return (
    <Layout className={styles.container}>
      <SEO title="fsvdr" />

      <motion.h1 style={{ y }} className={styles.huuge}>
        Oh hi, my name is Fernando. I’m a <span className={styles.ghosty}>front end developer</span> based in Mexico
        City.
      </motion.h1>

      <motion.div className={styles.intro} ref={containerRef}>
        <p className={styles.intro}>
          I build clean and modern <b>user interfaces</b> <i>a.k.a.</i> websites and apps. Currently I&apos;m digging
          into accessibility and performance.
        </p>

        <p className={styles.intro}>
          I work as a lead front end developer at Blac-Sheep where I work closely with our clients to bring new features
          to their apps.
        </p>
      </motion.div>
    </Layout>
  );
};

export default IndexPage;
