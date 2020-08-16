import styled from 'styled-components';
import Section from '../styles/section';
import Title from '../styles/title';

export const Article = styled(Section)`
  width: 100%;

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(18rem, 33%);
    grid-template-rows: auto auto minmax(0, 1fr);
    grid-column-gap: 4rem;
    grid-row-gap: 1.6rem;
    grid-template-areas:
      'header header'
      'body author'
      'body aside';
    margin-block-end: 2rem;
  }
`;

export const Header = styled.header`
  grid-area: header;
  inline-size: 100%;

  & ${Title} {
    margin-block-end: 6rem;
  }

  & time {
    position: relative;
    display: inline-block;

    & small {
      position: absolute;
      top: -2rem;
      left: 0.8rem;
      font-size: 1rem;
      -webkit-text-stroke: 0;

      & span:not(:last-child) {
        color: var(--color-accent);
      }
    }
  }
`;

export const Lead = styled.p`
  font-size: var(--font-size-md);
  margin-block-end: 4rem;
`;

export const Body = styled.div`
  grid-area: body;
  margin-block-end: 4rem;

  & h2 {
    max-inline-size: 62rem;
    font-size: var(--font-size-lg);
    text-transform: uppercase;
    line-height: 120%;
    -webkit-text-stroke: 2px var(--color-white);
    margin-block-end: 2rem;

    &::before {
      content: '';
      display: inline-block;
      vertical-align: middle;
      width: 1em;
      height: 1em;
      background-image: url('icons/anchor.svg');
      background-size: contain;
      background-position: center;
      margin-inline-end: 0.8rem;
    }
  }

  & p {
    color: var(--color-text-subtle);
  }

  & a {
    text-decoration: underline;
    text-decoration-style: dotted;
    text-decoration-color: var(--color-white);
    transition: color 0.3s;

    &:hover {
      color: var(--color-white);
    }
  }

  & b,
  strong {
    color: #ffffff;
  }

  & code {
    font-family: monospace;
  }

  & .inline-code {
    padding: 2px 8px;
    border-radius: 4px;
  }

  & figcaption {
    font-size: var(--font-size-sm);
    text-align: right;
    margin-block-start: 1rem;
    max-width: 800px;
  }

  & li {
    margin-block-end: 0.8rem;
  }

  & li::marker {
    color: var(--color-accent);
  }
`;

export const Aside = styled.aside`
  grid-area: aside;
  padding-block-start: 4rem;
  margin-block-end: 4rem;
  border-block-start: 1px dotted var(--color-text-subtle);

  & > p {
    color: var(--color-text-subtle);
    margin-block-end: 0.8rem;

    & a {
      color: var(--color-white);
      text-decoration: underline;
      text-decoration-style: dotted;
      text-decoration-color: var(--color-white);
    }
  }

  & nav {
    text-transform: uppercase;
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-black);
    margin-block-start: 1.6rem;

    & span {
      color: var(--color-text-subtle);
      margin-inline-end: 0.8rem;
    }

    & a {
      display: block;
      margin-block-end: 0.8rem;
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 0;
    border: 0;
  }
`;

export const Author = styled.div`
  grid-area: author;
  display: flex;
  flex-flow: row nowrap;
  inline-size: 100%;
  margin-block-end: 2rem;

  & div:first-child {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-inline-end: 0.8rem;
  }

  & .author-name {
    text-transform: uppercase;
    font-size: var(--font-size-sm);
  }

  & .time-to-read {
    font-size: var(--font-size-sm);
    color: var(--color-text-subtle);
    margin-block-end: 0;
  }

  @media screen and (min-width: 1024px) {
    margin-block-end: 0;
  }
`;
