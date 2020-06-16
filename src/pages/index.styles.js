import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  grid-template:
    'hero' auto
    'intro' auto
    / minmax(0, 1fr);
  row-gap: 12vh;
  padding-block-start: 4rem;
  padding-block-end: 50vh;
  color: ${props => props.theme.color.white};

  & .intro {
    grid-area: intro;
  }

  @media screen and (min-width: 1024px) {
    grid-template:
      '. hero .' auto
      'intro intro .' auto
      / 3vw 100rem 3vw;
    justify-content: space-between;
  }
`;

export const BigText = styled.h1`
  grid-area: hero;
  font-weight: ${props => props.theme.fontWeight.bold};
  font-size: ${props => `min(18vw, ${props.theme.fontSize.big})`};
  line-height: 100%;
  word-wrap: break-all;
  margin-inline-start: auto;
  margin-inline-end: auto;
`;

export const GhostText = styled.span`
  color: transparent;
  -webkit-text-stroke: 1px ${props => props.theme.color.white};
`;
