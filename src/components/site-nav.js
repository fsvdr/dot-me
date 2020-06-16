import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import styled, { keyframes } from 'styled-components';

import Selfie from './selfie';
import { MenuContext } from '../context/menu';
import Layout from './layout';

const variants = {
  menu: {
    hidden: { height: 0, overflow: 'hidden' },
    visible: {
      height: '100vh',
      overflow: 'initial',
      transition: { duration: 0.3, when: 'beforeChildren' },
    },
  },
  figure: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  links: {
    hidden: { opacity: 0, top: '-2.4rem' },
    visible: { opacity: 1, top: 0, transition: { duration: 0.6, delay: 0.3 } },
  },
};

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  inline-size: 100%;
  block-size: 100%;
  color: ${props => props.theme.color.black};
  background-color: ${props => props.theme.color.white};
  will-change: contents;
`;

const Container = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  }
`;

const ImageReveal = keyframes`
  from { clip-path: polygon(0% 100%, 0% 100%, 100% 100%, 100% 100%); }
  to { clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%); }
`;

const Figure = styled.figure`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  inline-size: max(40vmin, 28rem);
  block-size: 50vmin;
  background-color: ${props => props.theme.color.gray};
  margin-block-end: 10vh;

  & > div {
    width: 100%;
    height: 100%;
    clip-path: polygon(0% 100%, 0% 100%, 100% 100%, 100% 100%);
    animation: ${ImageReveal} 0.6s 0.4s ease-out forwards;
  }

  & figcaption {
    position: absolute;
    top: calc(100% + 0.8rem);
    align-self: flex-end;
    font-size: ${props => props.theme.fontSize.xs};
    font-weight: ${props => props.theme.fontWeight.bold};
  }
`;

const NavLinks = styled.ul`
  position: relative;
  list-style-type: none;
  margin-inline-start: -1.6rem;
  padding-block-end: 10vh;

  & li {
    font-size: ${props => props.theme.fontSize.xl};
    font-weight: ${props => props.theme.fontWeight.bold};
    margin-block-end: 1.6rem;
    margin-block-end: 2.4rem;
    margin-block-start: -1.6rem;

    &:last-of-type {
      margin-block-end: 0;
    }
  }

  & li a {
    display: block;
    transition: all 0.3s;

    &.is-ignored {
      color: ${props => props.theme.color.gray};
    }

    &:hover,
    &:focus {
      transform: translateX(1.6rem);
    }
  }
`;

const SiteNav = () => {
  const [mount, transition, , close] = useContext(MenuContext);
  const [navHoverIndex, setNavHoverIndex] = useState(null);
  const [animateSelfie, setAnimateSelfie] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimateSelfie(true), 400);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    document.body.style.position = transition ? 'fixed' : '';
  }, [transition]);

  if (!mount) return null;

  return ReactDOM.createPortal(
    <Modal
      as={motion.div}
      initial="hidden"
      animate={transition ? 'visible' : 'hidden'}
      variants={variants.menu}
      role="dialog"
      aria-label="Site Navigation"
    >
      <Layout>
        <Container>
          <Figure as={motion.figure} variants={variants.figure}>
            {animateSelfie && <Selfie />}
            <figcaption>— Hey look, it&apos;s me!</figcaption>
          </Figure>

          <NavLinks as={motion.ul} variants={variants.links}>
            <li
              className={navHoverIndex && navHoverIndex !== 1 ? 'is-ignored' : ''}
              onMouseEnter={() => setNavHoverIndex(1)}
              onMouseLeave={() => setNavHoverIndex(null)}
            >
              <Link onClick={close} to="/about">
                About.
              </Link>
            </li>
            <li
              className={navHoverIndex && navHoverIndex !== 2 ? 'is-ignored' : ''}
              onMouseEnter={() => setNavHoverIndex(2)}
              onMouseLeave={() => setNavHoverIndex(null)}
            >
              <Link onClick={close} to="/blog">
                Blog.
              </Link>
            </li>
            <li
              className={navHoverIndex && navHoverIndex !== 3 ? 'is-ignored' : ''}
              onMouseEnter={() => setNavHoverIndex(3)}
              onMouseLeave={() => setNavHoverIndex(null)}
            >
              <Link onClick={close} to="/contact">
                Contact.
              </Link>
            </li>
          </NavLinks>
        </Container>
      </Layout>
    </Modal>,
    // eslint-disable-next-line no-undef
    document.body
  );
};

export default SiteNav;
