/* eslint-disable no-undef */
import { useEffect, useReducer, useCallback } from 'react';

const BREAKPOINT = {
  SM: 768,
  MD: 1024,
  LG: 1280,
};

const initialState = {
  isMobile: true,
  isSmall: false,
  isMedium: false,
  isLarge: false,
};

const reducer = (state, action) => {
  if (action.type === 'SM') return { ...initialState, isMobile: false, isSmallViewport: true };
  if (action.type === 'MD') return { ...initialState, isMobile: false, isMedium: true };
  if (action.type === 'LG') return { ...initialState, isMobile: false, isLarge: true };

  return initialState;
};

/**
 * Provides handy state on the current size of the viewport based on a set of predefined breakpoints
 */
const useViewportSize = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const resizeListener = useCallback(() => {
    const width = window.innerWidth;

    const match = Object.keys(BREAKPOINT)
      .reverse()
      .find(key => width >= BREAKPOINT[key]);

    dispatch({ type: match });
  }, []);

  useEffect(() => {
    resizeListener();

    window.addEventListener('resize', resizeListener);
    return () => window.removeEventListener('resize', resizeListener);
  }, []);

  return {
    isMobile: state.isMobile,
    isSmall: state.isSmall,
    isMedium: state.isMedium,
    isLarge: state.isLarge,
  };
};

export default useViewportSize;
