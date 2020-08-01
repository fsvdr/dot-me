import styled from 'styled-components';

export const SectionAnchor = styled.span`
  display: block;
  width: 2.4rem;
  height: 2.4rem;
  background-image: url('icons/anchor.svg');
  background-position: center;
  background-repeat: none;
  background-size: contain;
  margin-block-end: 0.8rem;
`;

const Section = styled.section`
  position: relative;
  inline-size: 100%;
  padding: 2.4rem calc(env(safe-area-inset-left) + 0.8rem) 0;
  overflow: hidden;

  & .subtle {
    color: var(--color-text-subtle);
  }

  @media screen and (min-width: 768px) {
    padding-inline-start: 7vw;
    padding-inline-end: 7vw;
  }

  @media screen and (min-width: 1600px) {
    display: grid;
    padding-inline-start: calc((100vw - 1600px) / 2 + 7vw);
    padding-inline-end: calc((100vw - 1600px) / 2 + 7vw);
  }
`;

export default Section;
