import styled from 'styled-components';
import Title from '../components/title';

export const Section = styled.section`
  inline-size: 100%;
  padding: 2.4rem calc(env(safe-area-inset-left) + 0.8rem) 0;
  overflow-x: hidden;

  & .subtle {
    color: ${props => props.theme.color.textSubtle};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.portraitTablet}) {
    padding-inline-start: 7vw;
    padding-inline-end: 7vw;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.widthConstraint}) {
    display: grid;
    padding-inline-start: calc((100vw - ${props => props.theme.breakpoints.widthConstraint}) / 2 + 7vw);
    padding-inline-end: calc((100vw - ${props => props.theme.breakpoints.widthConstraint}) / 2 + 7vw);
  }
`;

export const Hero = styled.div`
  position: relative;
  inline-size: 100%;

  & ${Title} {
    position: relative;
    max-inline-size: 62rem;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.portraitTablet}) {
    margin-block-end: 8rem;
  }
`;

export const Lead = styled.p`
  font-size: ${props => props.theme.fontSize.md};
`;

export const HeroImage = styled.div`
  position: absolute;
  top: 15vh;
  right: -8vw;
  inline-size: max(64vw, 26rem);
  max-inline-size: 46rem;
  z-index: -1;
  opacity: 0.6;
  will-change: scroll-position;

  @media screen and (min-width: ${props => props.theme.breakpoints.widthConstraint}) {
    right: -2vw;
  }
`;

export const Availability = styled.p`
  position: relative;
  font-size: ${props => props.theme.fontSize.sm};
  font-weight: ${props => props.theme.fontWeight.black};
  padding-inline-start: 1.6rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 0.8em;
    height: 0.8em;
    background-color: ${props => props.theme.color.accent};
    border-radius: 50%;
    transform: translateY(-50%);
  }
`;
