import React from 'react';
import PropTypes from 'prop-types';
import './src/styles/global.css';

import MenuProvider from './src/context/menu';
import SiteNav from './src/components/site-nav';

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => {
  return (
    <MenuProvider>
      {element}

      <SiteNav />
    </MenuProvider>
  );
};

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
};
