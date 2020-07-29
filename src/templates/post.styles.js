import styled from 'styled-components';
import Section from '../styles/section';
import Title from '../styles/title';

export const Article = styled(Section)`
  width: 100%;

  @media screen and (min-width: ${props => props.theme.breakpoints.mediumViewport}) {
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
        color: ${props => props.theme.color.accent};
      }
    }
  }
`;

export const Lead = styled.p`
  font-size: ${props => props.theme.fontSize.md};
  margin-block-end: 4rem;
`;

export const Body = styled.div`
  grid-area: body;
  margin-block-end: 4rem;

  & h2 {
    max-inline-size: 62rem;
    font-size: ${props => props.theme.fontSize.lg};
    text-transform: uppercase;
    line-height: 120%;
    -webkit-text-stroke: 2px ${props => props.theme.color.white};
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
    color: ${props => props.theme.color.textSubtle};
  }

  & a {
    text-decoration: underline;
    text-decoration-style: dotted;
    text-decoration-color: ${props => props.theme.color.white};
    transition: color 0.3s;

    &:hover {
      color: ${props => props.theme.color.white};
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
`;

export const Aside = styled.aside`
  grid-area: aside;
  padding-block-start: 4rem;
  margin-block-end: 4rem;
  border-block-start: 1px dotted ${props => props.theme.color.textSubtle};

  & > p {
    color: ${props => props.theme.color.textSubtle};
    margin-block-end: 0.8rem;

    & a {
      color: ${props => props.theme.color.white};
      text-decoration: underline;
      text-decoration-style: dotted;
      text-decoration-color: ${props => props.theme.color.white};
    }
  }

  & nav {
    text-transform: uppercase;
    font-size: ${props => props.theme.fontSize.sm};
    font-weight: ${props => props.theme.fontWeight.black};
    margin-block-start: 1.6rem;

    & span {
      color: ${props => props.theme.color.textSubtle};
      margin-inline-end: 0.8rem;
    }

    & a {
      display: block;
      margin-block-end: 0.8rem;
    }
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.mediumViewport}) {
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
    font-size: ${props => props.theme.fontSize.sm};
  }

  & .time-to-read {
    font-size: ${props => props.theme.fontSize.sm};
    color: ${props => props.theme.color.textSubtle};
    margin-block-end: 0;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.mediumViewport}) {
    margin-block-end: 0;
  }
`;
