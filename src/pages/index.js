import React, { useRef, useEffect } from 'react';

import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import { Hero, HeroImage, Lead, Availability, Work, Project } from '../styles/index.styles';
import GhostText from '../styles/ghost-text';
import Title from '../styles/title';
import Image from '../components/image';
import Layout from '../components/layout';
import useParallax, { PARALLAX_DEPTH } from '../hooks/useParallax';
import useViewportSize from '../hooks/useViewportSize';
import SiteNav from '../components/site-nav';
import Contact from '../components/contact';
import Section, { SectionAnchor } from '../styles/section';
import SEO from '../components/seo';

const IndexPage = ({ data, location }) => {
  const focusRef = useRef();
  const contactRef = useRef();
  const { isMobile } = useViewportSize();
  const { containerRef, y } = useParallax(isMobile ? PARALLAX_DEPTH.FRONT : PARALLAX_DEPTH.BACKGROUND);

  useEffect(() => {
    if (!focusRef.current) return;
    focusRef.current.focus();
  }, []);

  return (
    <Layout ref={containerRef}>
      <SEO />

      <Section>
        <Hero>
          <Title size="big" tabIndex={0} ref={focusRef}>
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
          I make websites and apps
          <span className="subtle"> that express uniqueness through design, interactivity and accessibility.</span>
        </Lead>

        <Availability>Available for freelance</Availability>

        <SiteNav route={location.pathname.slice(1)} focusContact={() => contactRef.current.focus()} />
      </Section>

      <Work>
        <Title as="h2">
          <SectionAnchor />

          <span>
            Featured <br />
            <GhostText>Work</GhostText>
          </span>
        </Title>

        <div>
          <Project aria-labelledby="moco-comics">
            <Title as="h3" size="xl" id="moco-comics">
              <a href="https://moco-comics.com" target="_blank" rel="noopener noreferrer">
                <GhostText>Moco-Comics</GhostText>
                <br /> Blog & E-Commerce
              </a>
            </Title>

            <p>Website branding and front end implementation</p>
            <small>/ javascript es6 / itcss / bem / php</small>
          </Project>

          <Project aria-labelledby="dr-saavedra">
            <Title as="h3" size="xl">
              <a href="https://drsaavedra.mx" target="_blank" rel="noopener noreferrer" id="dr-saavedra">
                <GhostText>Dr. Saavedra</GhostText>
                <br /> Landing Page & Blog
              </a>
            </Title>

            <p>Digital branding and full stack implementation</p>
            <small>/ react / gatsby / css-modules /</small>
          </Project>
        </div>
      </Work>

      <Contact ref={contactRef} />
    </Layout>
  );
};

export const query = graphql`
  query {
    fsvdr: file(relativePath: { eq: "fsvdr.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
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
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default IndexPage;
