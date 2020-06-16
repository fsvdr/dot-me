import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import styled from 'styled-components';

import useParallax, { PARALLAX_DEPTH } from '../hooks/useParallax';
import { MenuContext } from '../context/menu';

const variants = {
  dark: { color: '#ffffff', transition: { duration: 0.6 } },
  light: { color: '#000000', transition: { duration: 0.6 } },
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 2rem minmax(0, 1fr) 2rem;
  grid-template-rows: 8vh 80vh 1fr;
  grid-column-gap: 0.8rem;
  grid-template-areas:
    'header header header'
    '. main footer'
    '. main .';
  inline-size: 100vw;
  min-block-size: 100vh;
  padding-inline-start: env(safe-area-inset-left);
  padding-inline-end: env(safe-area-inset-right);
  padding-block-end: env(safe-area-inset-bottom);

  & .main {
    grid-area: main;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 6rem minmax(0, 1fr) 5rem;
    grid-template-rows: minmax(40rem, 80vh) 1fr;
    grid-column-gap: 2.4rem;
    grid-template-areas:
      'header main footer'
      '. main .';

    & .main {
      padding-block-start: 6rem;
      padding-inline-end: 0;
    }
  }

  @media screen and (min-width: 1800px) {
    padding-inline: calc((100vw - 180rem) / 2 + 2.4rem);
  }
`;

const Header = styled.header`
  position: relative;
  grid-area: header;
  display: flex;
  flex-flow: row-reverse nowrap;
  justify-content: space-between;
  align-items: center;
  padding-inline-start: 0.4rem;
  padding-inline-end: 0.8rem;

  & button {
    font-weight: ${props => props.theme.fontWeight.bold};
    font-size: ${props => props.theme.fontSize.xs};
    text-align: center;
    letter-spacing: 0.4rem;
    line-height: 1.6rem;
    text-transform: uppercase;
    padding: 0;
  }

  & .wordmark {
    font-size: ${props => props.theme.fontSize.xs};
    font-weight: ${props => props.theme.fontWeight.bold};
    transform: rotate(-90deg);
    margin-inline-start: -0.8rem;
  }

  @media screen and (min-width: 768px) {
    flex-flow: column nowrap;
    justify-content: center;
    padding-block-start: 6rem;
    padding-block-end: 4rem;
    padding-inline-end: 0;

    & button {
      position: absolute;
      top: 6rem;
      left: 50%;
      transform: translateX(-50%);
      transform-origin: center;
      transition: all 0.3s;

      &:hover,
      &:focus {
        transform: translateX(-50%) scale(0.8);
        transition: all 0.3s;
      }
    }

    & .wordmark {
      font-size: var(--font-size-sm);
    }
  }
`;

const Footer = styled.footer`
  grid-area: footer;
  align-self: end;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  padding-block-start: 2rem;
  padding-block-end: 2rem;
  will-change: scroll-position;

  & nav {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    writing-mode: vertical-lr;
  }

  & nav li {
    list-style-type: none;
    font-size: ${props => props.theme.fontSize.xs};
    font-weight: ${props => props.theme.fontWeight.semibold};
    margin-inline-end: 1.6rem;
  }

  & nav a:hover,
  & nav a:focus {
    text-decoration: underline;
  }

  & span {
    font-size: ${props => props.theme.fontSize.xs};
    font-weight: ${props => props.theme.fontWeight.bold};
    writing-mode: vertical-lr;
  }

  @media screen and (min-width: 768px) {
    align-self: stretch;
    justify-content: space-between;
    padding-block-start: 6rem;
  }
`;

const Layout = ({ children }) => {
  const [, transition, open, close] = useContext(MenuContext);
  const { containerRef } = useParallax(PARALLAX_DEPTH.FRONT);

  return (
    <>
      <Helmet
        meta={[
          { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover' },
        ]}
      />

      <Container ref={containerRef}>
        <Header as={motion.header} initial="dark" animate={transition ? 'light' : 'dark'} variants={variants}>
          <button
            type="button"
            onClick={() => (transition ? close() : open())}
            aria-label={`${transition ? 'Close' : 'Open'} Site Navigation`}
          >
            {!transition && (
              <span>
                me
                <br />
                nu
              </span>
            )}
            {transition && (
              <span>
                cl
                <br />
                ose
              </span>
            )}
          </button>

          <Link className="wordmark" to="/">
            fsvdr
          </Link>
        </Header>

        <div className="main">{children}</div>

        <Footer as={motion.footer} initial="dark" animate={transition ? 'light' : 'dark'} variants={variants}>
          <nav>
            <li>
              <a href="https://twitter.com/fsvdr" title="Visit me on Twitter">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://instagram.com/fsvdr.me" title="Visit me on Instagram">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://instagram.com/fsvdr" title="Visit me on Dribbble">
                Dribbble
              </a>
            </li>
            <li>
              <a href="https://github.com/fsvdr" title="Visit me on Github">
                Github
              </a>
            </li>
          </nav>

          <span>— Own it</span>
        </Footer>
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
