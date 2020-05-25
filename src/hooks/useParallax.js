import { useState, useLayoutEffect, useRef } from 'react';
import { useViewportScroll, useTransform } from 'framer-motion';

/**
 * Useful predefined parallax layers
 */
export const PARALLAX_DEPTH = {
  DEEP: 0.8,
  BACKGROUND: 0.25,
  BASE: 0,
  FRONT: -0.5,
  FOREGROUND: -1,
};

/**
 * Calculates a Y-Transformation for parallax effect based on the viewport scroll position and the top offset of the referenced "container" element
 *
 * @param {*} depth The transformation upper bound. If lower than 0 the element will scroll faster,
 *                  likewise, if it's greater than 0 the element will scroll slower. [DEFAULT = 0]
 */
const useParallax = (depth = PARALLAX_DEPTH.BASE) => {
  const elementRef = useRef(null);
  const [elementTop, setElementTop] = useState(0);
  const { scrollY } = useViewportScroll();

  const y = useTransform(scrollY, [elementTop, elementTop + 1], [0, depth], { clamp: false });

  useLayoutEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    setElementTop(element.offsetTop);
  }, [elementRef]);

  return { elementRef, y };
};

export default useParallax;
