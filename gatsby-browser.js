import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import './src/typeface-trenda.css';
import { Helmet } from 'react-helmet';
import { theme, GlobalStyles } from './src/App.styles';

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Helmet
        meta={[
          { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover' },
        ]}
      />

      {element}
    </ThemeProvider>
  );
};

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
};
