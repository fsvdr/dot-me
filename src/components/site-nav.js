import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'gatsby';

import Selfie from './selfie';
import styles from './site-nav.module.css';

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

const SiteNav = ({ reveal }) => {
  const [navHoverIndex, setNavHoverIndex] = useState(null);
  const [animateSelfie, setAnimateSelfie] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    setTimeout(() => setAnimateSelfie(true), 400);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    document.body.style.position = reveal ? 'fixed' : '';
    animation.start(reveal ? 'visible' : 'hidden');
  }, [reveal]);

  return ReactDOM.createPortal(
    <motion.div
      className={styles.modal}
      initial="hidden"
      animate={animation}
      variants={variants.menu}
      role="dialog"
      aria-label="Site Navigation"
    >
      <nav className={styles.menuContainer}>
        <motion.figure variants={variants.figure}>
          {animateSelfie && <Selfie />}
          <figcaption>— Hey look, it&apos;s me!</figcaption>
        </motion.figure>

        <motion.ul variants={variants.links}>
          <li
            className={navHoverIndex && navHoverIndex !== 1 && styles.ignored}
            onMouseEnter={() => setNavHoverIndex(1)}
            onMouseLeave={() => setNavHoverIndex(null)}
          >
            <Link to="/about">About.</Link>
          </li>
          <li
            className={navHoverIndex && navHoverIndex !== 2 && styles.ignored}
            onMouseEnter={() => setNavHoverIndex(2)}
            onMouseLeave={() => setNavHoverIndex(null)}
          >
            <Link to="/blog">Blog.</Link>
          </li>
          <li
            className={navHoverIndex && navHoverIndex !== 3 && styles.ignored}
            onMouseEnter={() => setNavHoverIndex(3)}
            onMouseLeave={() => setNavHoverIndex(null)}
          >
            <Link to="/contact">Contact.</Link>
          </li>
        </motion.ul>
      </nav>
    </motion.div>,
    // eslint-disable-next-line no-undef
    document.body
  );
};

SiteNav.propTypes = {
  reveal: PropTypes.bool.isRequired,
};

export default SiteNav;
