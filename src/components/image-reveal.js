/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Container = styled.div`
  clip-path: ${props => (props.loaded ? 'inset(0 0 0 0)' : 'inset(0 0 100% 0)')};
  transition: clip-path 0.4s ease-in-out;
`;

const ImageReveal = props => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Container loaded={loaded}>
      <Img {...props} onLoad={() => setLoaded(true)} />
    </Container>
  );
};

export default ImageReveal;
