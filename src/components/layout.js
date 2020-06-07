import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { motion, useAnimation } from 'framer-motion';

import styles from './layout.module.css';
import useParallax, { PARALLAX_DEPTH } from '../hooks/useParallax';
import SiteNav from './site-nav';
import useLifecycleTransition from '../hooks/useLifecycleTransition';

const variants = {
  dark: { color: '#ffffff', transition: { duration: 0.6 } },
  light: { color: '#000000', transition: { duration: 0.6 } },
};

const Layout = ({ children, className }) => {
  const { containerRef, y } = useParallax(PARALLAX_DEPTH.FRONT);
  const [revealMenu, setRevealMenu] = useState(false);
  const layoutAnimation = useAnimation();
  const mountMenu = useLifecycleTransition(revealMenu, 1000);

  const toggleMenu = useCallback(() => {
    setRevealMenu(!revealMenu);
    layoutAnimation.start(revealMenu ? 'dark' : 'light');
  }, [revealMenu]);

  return (
    <>
      <Helmet
        meta={[
          { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover' },
        ]}
      />

      <div className={styles.container} ref={containerRef}>
        <motion.header style={{ y }} initial="dark" animate={layoutAnimation} variants={variants}>
          <button
            type="button"
            onClick={() => toggleMenu()}
            aria-label={`${revealMenu ? 'Close' : 'Open'} Site Navigation`}
          >
            {!revealMenu && (
              <span>
                me
                <br />
                nu
              </span>
            )}
            {revealMenu && (
              <span>
                cl
                <br />
                ose
              </span>
            )}
          </button>

          <span className={styles.wordmark}>fsvdr</span>
        </motion.header>

        <main className={className}>{children}</main>

        <motion.footer style={{ y }} initial="dark" animate={layoutAnimation} variants={variants}>
          <nav>
            <li animate={{ marginTop: 0 }}>
              <a href="https://twitter.com/fsvdr" title="Visit me on Twitter">
                Twitter
              </a>
            </li>
            <li animate={{ marginTop: 0 }}>
              <a href="https://instagram.com/fsvdr.me" title="Visit me on Instagram">
                Instagram
              </a>
            </li>
            <li animate={{ marginTop: 0 }}>
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

        {mountMenu && <SiteNav reveal={revealMenu} />}
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
