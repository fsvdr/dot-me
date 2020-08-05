import React from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';
import GlobalStyles from './src/App.styles';

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyles />

      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover" />
      </Helmet>

      {element}
    </>
  );
};

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
};
