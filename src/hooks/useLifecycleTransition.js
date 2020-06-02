import { useState, useEffect, useRef } from 'react';

const useLifecycleTransition = (visible = false, ms = 1500) => {
  const timeoutID = useRef(null);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    // Cancel un mounting if visible is re-set to true to avoid a flicker
    clearTimeout(timeoutID.current);

    if (mount && !visible) {
      timeoutID.current = setTimeout(() => {
        setMount(false);
      }, ms);
    }

    if (visible) setMount(true);
  }, [visible]);

  return mount;
};

export default useLifecycleTransition;
