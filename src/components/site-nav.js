import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';

import Selfie from './selfie';
import styles from './site-nav.module.css';
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
    <motion.div
      className={styles.modal}
      initial="hidden"
      animate={transition ? 'visible' : 'hidden'}
      variants={variants.menu}
      role="dialog"
      aria-label="Site Navigation"
    >
      <Layout>
        <nav className={styles.menuContainer}>
          <motion.figure variants={variants.figure}>
            {animateSelfie && <Selfie />}
            <figcaption>— Hey look, it&apos;s me!</figcaption>
          </motion.figure>

          <motion.ul variants={variants.links}>
            <li
              className={navHoverIndex && navHoverIndex !== 1 ? styles.ignored : ''}
              onMouseEnter={() => setNavHoverIndex(1)}
              onMouseLeave={() => setNavHoverIndex(null)}
            >
              <Link onClick={close} to="/about">
                About.
              </Link>
            </li>
            <li
              className={navHoverIndex && navHoverIndex !== 2 ? styles.ignored : ''}
              onMouseEnter={() => setNavHoverIndex(2)}
              onMouseLeave={() => setNavHoverIndex(null)}
            >
              <Link onClick={close} to="/blog">
                Blog.
              </Link>
            </li>
            <li
              className={navHoverIndex && navHoverIndex !== 3 ? styles.ignored : ''}
              onMouseEnter={() => setNavHoverIndex(3)}
              onMouseLeave={() => setNavHoverIndex(null)}
            >
              <Link onClick={close} to="/contact">
                Contact.
              </Link>
            </li>
          </motion.ul>
        </nav>
      </Layout>
    </motion.div>,
    // eslint-disable-next-line no-undef
    document.body
  );
};

export default SiteNav;
