import React from 'react';
import styled from 'styled-components';

export const StyledSocialsNav = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.8rem calc(env(safe-area-inset-bottom) + 1.6rem);
  font-weight: var(--font-weight-black);
  font-size: var(--font-size-sm);

  & ul {
    display: flex;
    flex-flow: row nowrap;
    list-style-type: none;
  }

  & li:not(:last-child) {
    margin-inline-end: 1.6rem;
  }

  & p {
    margin-block-end: 0;
  }

  & span {
    color: var(--color-accent);
  }

  @media screen and (min-width: 768px) {
    position: fixed;
    top: 0;
    right: 0.8rem;
    min-height: 36rem;
    height: 100vh;
    writing-mode: vertical-lr;
    padding-inline-start: 1.6rem;
    padding-inline-end: 1.6rem;
    padding-block-end: 0.8rem;
  }

  @media screen and (min-width: 1600px) {
    right: calc((100vw - 1600px) / 2);
  }
`;

const SocialsNav = () => (
  <StyledSocialsNav>
    <nav aria-label="Social networks">
      <ul>
        <li>
          <a href="https://twitter.com/fsvdr">Twitter</a>
        </li>
        <li>
          <a href="https://instagram.com/fsvdr.me">Instagram</a>
        </li>
        <li>
          <a href="https://dribbble.com/fsvdr">Dribbble</a>
        </li>
        <li>
          <a href="https://github.com/fsvdr">Github</a>
        </li>
      </ul>
    </nav>

    <p>
      <span>—</span> Own it
    </p>
  </StyledSocialsNav>
);

export default SocialsNav;
