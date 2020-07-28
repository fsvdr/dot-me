import styled from 'styled-components';

const Title = styled.h1`
  max-inline-size: 62rem;
  font-weight: ${props => props.theme.fontWeight.black};
  ${props => {
    if (props.size === 'big') {
      return `font-size: min(15vw, ${props.theme.fontSize.big});`;
    }

    if (props.size === 'md') {
      return `font-size: ${props.theme.fontSize.lg};`;
    }

    if (props.size === 'xl') {
      return `font-size: ${props.theme.fontSize.xl};`;
    }

    return `font-size: ${props.theme.fontSize.md};`;
  }}
  text-transform: uppercase;
  line-height: 120%;
  -webkit-text-stroke: 2px ${props => props.theme.color.white};
  margin-block-end: 4rem;
`;

export default Title;
