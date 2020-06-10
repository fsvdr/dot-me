import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import useLifecycleTransition from '../hooks/useLifecycleTransition';

export const MenuContext = React.createContext();

const MenuProvider = ({ children }) => {
  const [transition, setTransition] = useState(false);
  const mount = useLifecycleTransition(transition, 1000);

  const open = useCallback(() => {
    setTransition(true);
  }, []);

  const close = useCallback(() => {
    setTransition(false);
  }, []);

  const value = useMemo(() => [mount, transition, open, close], [mount, transition]);

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

MenuProvider.propTypes = {
  children: PropTypes.node,
};

MenuProvider.defaultProps = {
  children: null,
};

export default MenuProvider;
