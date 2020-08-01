import styled from 'styled-components';

const Title = styled.h1`
  max-inline-size: 62rem;
  font-weight: var(--font-weight-black);
  ${props => {
    if (props.size === 'big') {
      return `font-size: min(15vw, var(--font-size-big));`;
    }

    if (props.size === 'md') {
      return `font-size: var(--font-size-lg);`;
    }

    if (props.size === 'xl') {
      return `font-size: var(--font-size-xl);`;
    }

    return `font-size: var(--font-size-md);`;
  }}
  text-transform: uppercase;
  line-height: 120%;
  -webkit-text-stroke: 2px var(--color-white);
  margin-block-end: 4rem;
`;

export default Title;
