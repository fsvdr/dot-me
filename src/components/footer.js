import React from 'react';
import styled from 'styled-components';
import CircleText from './circle-text';

const StyledFooter = styled.footer`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 1.6rem 0.8rem;
  font-size: var(--font-size-sm);
  font-weight: var(--font-size-black);
  text-transform: uppercase;

  & > small {
    flex: 1 1 0;

    &:nth-child(2) {
      margin: 0 0.8rem;
    }
  }

  & > a {
    flex: 1 1 0;
    text-align: right;
    font-size: var(--font-size-sm);
  }

  @media screen and (min-width: 768px) {
    padding-inline-start: 4.4rem;
    padding-inline-end: 4.4rem;
  }

  @media screen and (min-width: 1600px) {
    padding-inline-start: calc((100vw - 1600px) / 2 + 7vw);
    padding-inline-end: calc((100vw - 1600px) / 2 + 7vw);
  }
`;

const Footer = () => (
  <StyledFooter aria-label="Footer">
    <small>
      Be nice y&apos;all
      <span role="img" aria-label="peace sign">
        ✌
      </span>
    </small>

    <CircleText radius={2.2} text="Original fsvdr design" badge="2020" />

    <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">
      Site Map
    </a>
  </StyledFooter>
);

export default Footer;
