import React from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';
import './src/styles/global.css';

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover" />

        <link rel="preload" href="fonts/Trenda/typeface-trenda.css" as="style" />
        <link rel="stylesheet" href="fonts/Trenda/typeface-trenda.css" media="print" onLoad="this.media='all'" />

        <script async defer data-domain="fsvdr.me" src="https://stats.fsvdr.me/js/index.js" />
      </Helmet>

      {element}
    </>
  );
};

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
};
