import React from 'react';

import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import SEO from '../components/seo';

import { Hero, HeroImage, Section, Lead, Availability } from './index.styles';
import GhostText from '../components/ghost-text';
import Title from '../components/title';
import Image from '../components/image';
import Layout from '../components/layout';
import useParallax, { PARALLAX_DEPTH } from '../hooks/useParallax';
import useViewportSize from '../hooks/useViewportSize';

const IndexPage = ({ data }) => {
  const { isMobile } = useViewportSize();
  const { containerRef, y } = useParallax(isMobile ? PARALLAX_DEPTH.FRONT : PARALLAX_DEPTH.BACKGROUND);

  return (
    <Layout ref={containerRef}>
      <SEO title="fsvdr" />

      <Section>
        <Hero>
          <Title>
            Hey now! My name is Fernando, I’m a <GhostText>front end developer</GhostText> based in Mexico City.
          </Title>

          <HeroImage as={motion.div} style={{ y }}>
            <Image
              image={data.fsvdr}
              alt="Fernando sits with his computer at a table, pretending to be cooler than he actually is"
            />
          </HeroImage>
        </Hero>

        <Lead>
          I make websites and apps{' '}
          <span className="subtle">that express uniqueness through design, interactivity and accessibility.</span>
        </Lead>

        <Availability>Available for freelance</Availability>
      </Section>
    </Layout>
  );
};

export const query = graphql`
  query {
    fsvdr: file(relativePath: { eq: "fsvdr.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.shape({
    fsvdr: PropTypes.object.isRequired,
  }).isRequired,
};

export default IndexPage;
