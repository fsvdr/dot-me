import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { motion } from 'framer-motion';

import styles from './layout.module.css';
import useParallax, { PARALLAX_DEPTH } from '../hooks/useParallax';

const Layout = ({ children, className }) => {
  const { containerRef, y } = useParallax(PARALLAX_DEPTH.FRONT);

  return (
    <>
      <Helmet
        meta={[
          { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover' },
        ]}
      />

      <div className={styles.container} ref={containerRef}>
        <motion.header style={{ y }}>
          <button type="button" onClick={() => {}}>
            me
            <br />
            nu
          </button>

          <span className={styles.wordmark}>fsvdr</span>
        </motion.header>

        <main className={className}>{children}</main>

        <motion.footer style={{ y }}>
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
              <a href="http://github.com/fsvdr" title="Visit me on Github">
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
