import styled from 'styled-components';
import Section, { SectionAnchor } from '../styles/section';
import Title from '../styles/title';
import GhostText from '../styles/ghost-text';

export const Hero = styled(Section)`
  margin-block-end: 2rem;
`;

export const HeroImage = styled.div`
  position: relative;
  left: 50%;
  inline-size: min(120vw, 64rem);
  margin-block-start: -50%;
  margin-block-end: 8rem;
  transform: translateX(-50%);
  z-index: -1;
  will-change: scroll-position;

  & > div div {
    opacity: 0.6;
  }

  & small {
    position: relative;
    margin-inline-start: auto;
    margin-inline-end: 12%;
    margin-block-start: -3rem;
  }
`;

export const Lead = styled.p`
  font-size: ${props => props.theme.fontSize.md};
`;

export const Motivation = styled(Section)`
  & p {
    opacity: 0.6;
  }
`;

export const Expertise = styled(Section)`
  margin: 4rem 0;

  & br {
    display: none;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.portraitTablet}) {
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: space-evenly;

    & > ${Title} {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      writing-mode: vertical-rl;
      text-align: right;
      transform: rotate(180deg);
      margin-block-end: 0;

      & ${SectionAnchor} {
        order: 1;
        margin-block-end: 0;
        margin-inline-start: 1.6rem;
      }

      & br {
        display: block;
      }
    }

    & > div {
      margin-inline-start: 2rem;
    }
  }
`;

export const Services = styled.ul`
  inline-size: 100%;
  list-style-type: none;

  & ${Title} {
    font-size: ${props => props.theme.fontSize.lg};
    margin-block-end: 0;
    margin-block-start: 2rem;
  }

  & p {
    margin-block-end: 0;
  }

  & small {
    color: ${props => props.theme.color.textSubtle};
  }
`;

export const Hobbies = styled(Section)`
  margin-block-start: 8rem;
  margin-block-end: 8rem;

  & ${Lead} {
    text-align: center;
    margin: 0 auto;
  }
`;

export const MediaStats = styled.article`
  width: 100%;
  margin-block-start: 10rem;
`;

export const Songs = styled(MediaStats)`
  & ${Title} {
    margin-block-end: 0;

    & ${GhostText} {
      font-size: ${props => props.theme.fontSize.lg};
    }
  }

  & > div {
    counter-reset: top-songs;
    display: flex;
    flex-flow: column nowrap;
    width: 100%;

    & > div {
      counter-increment: top-songs;
      position: relative;
      margin-block-end: 4rem;

      &::after {
        content: counter(top-songs);
        position: absolute;
        top: 25%;
        left: -1rem;
        font-weight: ${props => props.theme.fontWeight.black};
        font-size: ${props => props.theme.fontSize.big};
        color: transparent;
        -webkit-text-stroke: 2px ${props => props.theme.color.white};
        z-index: -1;
        transform: translateY(-50%);
      }
    }

    & > div:nth-child(2) {
      align-self: center;
    }

    & > div:nth-child(3) {
      align-self: flex-end;
    }
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.mediumViewport}) {
    & > div > div:not(:first-child) {
      margin-top: -30%;
    }

    & > div > div::after {
      top: 50%;
      left: -2.6rem;
    }
  }
`;
