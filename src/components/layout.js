import React from 'react';
import PropTypes from 'prop-types';

import Helmet from 'react-helmet';
import styles from './layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <Helmet
        meta={[
          { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover' },
        ]}
      />

      <div className={styles.container}>
        <header>
          <button type="button" onClick={() => {}}>
            me
            <br />
            nu
          </button>

          <span className={styles.wordmark}>fsvdr</span>
        </header>

        <main>{children}</main>

        <footer>
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
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
