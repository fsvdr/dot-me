import React from 'react';

import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Title from '../styles/title';
import Contact from '../components/contact';
import GhostText from '../styles/ghost-text';
import { Hero, HeroImage, Lead, Motivation, Expertise, Services, Hobbies, Songs } from './about.styles';
import Image from '../components/image';
import CircleText from '../components/circle-text';
import SiteNav from '../components/site-nav';
import useParallax, { PARALLAX_DEPTH } from '../hooks/useParallax';
import { SectionAnchor } from '../styles/section';
import SpotifySong from '../components/spotify-song';

const AboutPage = ({ data, location }) => {
  const { containerRef, y } = useParallax(PARALLAX_DEPTH.BACKGROUND);

  return (
    <Layout ref={containerRef}>
      <SEO title="About me — FSVDR" canonical={location.pathname} />

      <Hero>
        <Title size="big">
          You can&apos;t fit it all in a <GhostText>CV</GhostText>. So let&apos;s roll the <GhostText>about </GhostText>
          page.
        </Title>

        <HeroImage>
          <motion.div style={{ y }}>
            <Image image={data.working} alt="Fernando sits working on his computer at a desk surrounded by trees" />

            <CircleText radius="3" text="No you went full instagramy here" />
          </motion.div>
        </HeroImage>

        <Lead>
          Twenty-four year old front end developer with a<s>n obsession</s> passion for design, productivity and coffee.
        </Lead>

        <SiteNav />
      </Hero>

      <Motivation>
        <p>
          I see technology as a means of empowerment, growing up to stories of <i>common folks</i> building
          world-changing companies through the internet really inspired me and pushed me to peruse a career in tech.
        </p>

        <p>
          Few years ago I graduated in software engineering and while at it, I discovered that my true drive lies in
          optimizing the way people connect with a product — with a whole brand even.
        </p>
      </Motivation>

      <Expertise>
        <Title as="h2">
          <SectionAnchor />

          <span>
            Technical <br />
            <GhostText>Expertise</GhostText>
          </span>
        </Title>

        <div>
          <p>
            A developer&apos;s toolkit is ever changing, right now my focus is on React, Styled Components, Node and
            Gatsby while also keeping an eye on Svelte, Deno and SwiftUI.
          </p>

          <Services>
            <li>
              <Title as="h3">
                Web <GhostText>Development</GhostText>
              </Title>
              <p>From promotional pages, through e-commerce all the way to full blown real time apps.</p>
              <small>HTML, Pug, CSS, ITCSS, BEM, JavaScript, Meteor.js</small>
            </li>
            <li>
              <Title as="h3">
                Mobile <GhostText>Development</GhostText>
              </Title>
              <p>Progressive web apps are the best fit more cases, hybrid apps can take care of more complex apps.</p>
              <small>PWA, React Native, Ionic</small>
            </li>
            <li>
              <Title as="h3">
                Digital product <GhostText>design</GhostText>
              </Title>
              <p>Visual identity is just the beginning of great user experiences.</p>
              <small>Figma, Sketch, Invision, Storybook</small>
            </li>
          </Services>
        </div>
      </Expertise>

      <Hobbies>
        <Lead>
          In my spare time I enjoy going out for some <em>good</em> coffee and <em>tasty</em> pastries. I&apos;m a big
          fan of rainy days and cooking videos.
        </Lead>

        <Songs>
          <Title as="h3">
            <SectionAnchor />
            <GhostText>3 songs</GhostText> <br /> playing on repeat
          </Title>

          <div>
            <SpotifySong
              title="Mind is a Prison by Alec Benjamin"
              uri="https://open.spotify.com/embed/track/2hGQDYmjkwTS0J7Q2bM2sF?si=v7FWRi3CRY6CBJkwB49-iA"
              depth="0.06"
            />

            <SpotifySong
              title="Mind is a Prison by Alec Benjamin"
              uri="https://open.spotify.com/embed/track/41CgzGD7xlgnJe14R4cqkL?si=HNz18UToTOSRTZWCr5IiWw"
              depth="0.06"
            />

            <SpotifySong
              title="Mind is a Prison by Alec Benjamin"
              uri="https://open.spotify.com/embed/track/1ITJTMrS4cx8zdlI7DdSoo?si=-QOTvfhXTf696GVPYYiezQ"
              depth="0.06"
            />
          </div>
        </Songs>
      </Hobbies>

      <Contact />
    </Layout>
  );
};

export const query = graphql`
  query {
    working: file(relativePath: { eq: "working.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

AboutPage.propTypes = {
  data: PropTypes.shape({
    working: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default AboutPage;
