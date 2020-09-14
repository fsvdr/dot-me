import { useEffect } from 'react';

// Use a system font until our custom font is fully loaded in order to avoid
// FOIT (Flash of Invisible Text)
const useFOITStrategy = () => {
  useEffect(() => {
    Promise.all([
      'normal Trenda',
      'italic normal Trenda',
      '800 Trenda',
      'italic 800 Trenda',
      'normal Wattermellon',
    ]).then(() => {
      // eslint-disable-next-line no-undef
      document.body.classList.add('has-custom-font');
    });
  }, []);
};

export default useFOITStrategy;
