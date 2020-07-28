import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SocialsNav from './socials-nav';
import Footer from './footer';

export const Wordmark = styled.abbr`
  position: absolute;
  top: 1.6rem;
  left: 1rem;
  font-weight: ${props => props.theme.fontWeight.black};
  font-size: ${props => props.theme.fontSize.sm};
  text-transform: uppercase;
  text-decoration: none;

  @media screen and (min-width: ${props => props.theme.breakpoints.portraitTablet}) {
    position: absolute;
    left: 0.8rem;
    height: 100vh;
    text-align: center;
    writing-mode: vertical-lr;
    padding-block-end: 0.8rem;
    transform: rotate(180deg);
  }
`;

const Layout = ({ children }) => (
  <>
    {children}

    <Wordmark title="Fernando Saavedra">fsvdr</Wordmark>
    <Footer />
    <SocialsNav />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
