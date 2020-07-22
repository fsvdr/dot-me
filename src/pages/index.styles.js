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

export const Work = styled(Section)`
  margin-block-start: 2rem;
  counter-reset: featured-works;

  & > ${Title} {
    letter-spacing: 1px;
    margin-block-end: 4rem;

    & .anchor {
      content: '';
      display: block;
      width: 1.6em;
      height: 1.6em;
      background-image: url('icons/anchor.svg');
      background-position: center;
      background-repeat: none;
      background-size: contain;
      margin-block-end: 0.8rem;
    }
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.portraitTablet}) {
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;

    & > ${Title} {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      writing-mode: vertical-rl;
      text-align: right;
      transform: rotate(180deg);
      margin-block-end: 0;

      & .anchor {
        order: 1;
        margin-block-end: 0;
        margin-inline-start: 1.6rem;
      }
    }

    & > div {
      margin-inline-start: 4rem;
    }
  }
`;

export const Project = styled.article`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  counter-increment: featured-works;
  margin-block-end: 4rem;

  &::before {
    content: 'NO. ' counter(featured-works);
    position: absolute;
    display: inline-block;
    font-size: ${props => props.theme.fontSize.sm};
    font-weight: ${props => props.theme.fontWeight.black};
  }

  & ${Title} {
    font-size: min(12vw, ${props => props.theme.fontSize.lg});
    margin-block-end: 0;
  }

  & small {
    order: -1;
    color: ${props => props.theme.color.textSubtle};
    padding-inline-start: 3.2rem;
  }
`;
