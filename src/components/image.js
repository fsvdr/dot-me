/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import Img from 'gatsby-image';

const Image = ({ image, ...props }) => {
  return <Img fluid={image.childImageSharp.fluid} {...props} />;
};

export default Image;
