import React from 'react';
import PropTypes from 'prop-types';

import './layout.css';

const Layout = ({ children }) => {
  return (
    <div className="container">
      <header>
        <button type="button" onClick={() => {}}>
          me
          <br />
          nu
        </button>

        <span className="wordmark">fsvdr</span>
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
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
