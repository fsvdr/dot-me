import React, { useRef, useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const Container = styled.div`
  width: 300px;
  height: 30rem;

  & > div {
    will-change: scroll-position;
  }
`;

const SpotifySong = ({ title, uri, depth }) => {
  const elementRef = useRef(null);
  const [elementTop, setElementTop] = useState(0);
  const { scrollY } = useViewportScroll();

  const y = useTransform(scrollY, [elementTop, elementTop + 1], [0, depth], { clamp: false });

  useLayoutEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    setElementTop(element.offsetTop);
  }, [elementRef]);

  return (
    <Container ref={elementRef}>
      <motion.div style={{ y }}>
        <iframe
          title={`Play ${title} on Spotify`}
          src={uri}
          width="300"
          height="380"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
          loading="lazy"
        />
      </motion.div>
    </Container>
  );
};

SpotifySong.propTypes = {
  title: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
  depth: PropTypes.number,
};

SpotifySong.defaultProps = {
  depth: 0.02,
};

export default SpotifySong;
