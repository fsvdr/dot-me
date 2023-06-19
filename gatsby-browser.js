import React from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';
import './src/styles/global.css';
import './src/styles/typeface-trenda.css';
import './src/styles/typeface-wattermellon.css';

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover" />

        <script defer data-domain="fsvdr.me" src="https://plausible.io/js/script.js"></script>
        <script src="https://cdn.usefathom.com/script.js" data-spa="auto" data-site="ZGTSKVXR" defer></script>
      </Helmet>

      {element}
    </>
  );
};

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
};
