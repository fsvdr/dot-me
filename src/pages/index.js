import React from 'react';

import { motion } from 'framer-motion';
import Layout from '../components/layout';
import SEO from '../components/seo';

import { Container, BigText, GhostText } from './index.styles';
import useParallax, { PARALLAX_DEPTH } from '../hooks/useParallax';

const IndexPage = () => {
  const { containerRef, y } = useParallax(PARALLAX_DEPTH.FRONT);

  return (
    <Layout>
      <SEO title="fsvdr" />

      <Container>
        <BigText as={motion.h1} style={{ y }}>
          Oh hi, my name is Fernando. I’m a <GhostText>front end developer</GhostText> based in Mexico City.
        </BigText>

        <motion.div className="intro" ref={containerRef}>
          <p>
            I build clean and modern <b>user interfaces</b> <i>a.k.a.</i> websites and apps. Currently I&apos;m digging
            into accessibility and performance.
          </p>

          <p>
            I work as a lead front end developer at Blac-Sheep where I work closely with our clients to bring new
            features to their apps.
          </p>
        </motion.div>
      </Container>
    </Layout>
  );
};

export default IndexPage;
