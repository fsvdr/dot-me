import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import './src/typeface-trenda.css';
import { theme, GlobalStyles } from './src/App.styles';
import MenuProvider from './src/context/menu';
import SiteNav from './src/components/site-nav';

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <MenuProvider>
        {element}

        <SiteNav />
      </MenuProvider>
    </ThemeProvider>
  );
};

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
};
