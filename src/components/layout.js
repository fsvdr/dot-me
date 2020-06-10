import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { motion } from 'framer-motion';

import { Link } from 'gatsby';
import styles from './layout.module.css';
import useParallax, { PARALLAX_DEPTH } from '../hooks/useParallax';
import { MenuContext } from '../context/menu';

const variants = {
  dark: { color: '#ffffff', transition: { duration: 0.6 } },
  light: { color: '#000000', transition: { duration: 0.6 } },
};

const Layout = ({ children, className }) => {
  const [, transition, open, close] = useContext(MenuContext);
  const { containerRef } = useParallax(PARALLAX_DEPTH.FRONT);

  return (
    <>
      <Helmet
        meta={[
          { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover' },
        ]}
      />

      <div className={styles.container} ref={containerRef}>
        <motion.header initial="dark" animate={transition ? 'light' : 'dark'} variants={variants}>
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

          <Link className={styles.wordmark} to="/">
            fsvdr
          </Link>
        </motion.header>

        <div className={`${styles.main} ${className}`}>{children}</div>

        <motion.footer initial="dark" animate={transition ? 'light' : 'dark'} variants={variants}>
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
        </motion.footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Layout.defaultProps = {
  className: '',
};

export default Layout;
