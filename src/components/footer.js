import React from 'react';
import styled from 'styled-components';
import CircleText from './circle-text';

const StyledFooter = styled.footer`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
  padding: 1.6rem 0.8rem;
  font-size: ${props => props.theme.fontSize.sm};
  font-weight: ${props => props.theme.fontWeight.black};
  text-transform: uppercase;

  & > small {
    margin: 0 0.8rem;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.portraitTablet}) {
    padding-inline-start: 4.4rem;
    padding-inline-end: 4.4rem;
  }
`;

const Footer = () => (
  <StyledFooter>
    <CircleText radius={2.2} text="Original fsvdr design" badge="2020" />
    <small>
      Be nice y&apos;all{' '}
      <span role="img" aria-label="peace sign">
        ✌
      </span>
    </small>
  </StyledFooter>
);

export default Footer;
