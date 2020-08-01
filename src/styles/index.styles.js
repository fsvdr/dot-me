import styled from 'styled-components';
import Title from '../styles/title';
import Section, { SectionAnchor } from '../styles/section';

export const Hero = styled.div`
  position: relative;
  inline-size: 100%;

  & ${Title} {
    position: relative;
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
  margin-block-start: 4rem;
  counter-reset: featured-works;

  & > ${Title} {
    letter-spacing: 1px;
    margin-block-end: 4rem;
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

      & ${SectionAnchor} {
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
    font-size: min(12vw, ${props => props.theme.fontSize.xl});
    margin-block-end: 0;
  }

  & small {
    order: -1;
    color: ${props => props.theme.color.textSubtle};
    padding-inline-start: 3.2rem;
  }
`;
