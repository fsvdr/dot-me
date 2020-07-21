import styled from 'styled-components';

const Title = styled.h1`
  font-weight: ${props => props.theme.fontWeight.black};
  font-size: min(15vw, ${props => props.theme.fontSize.big});
  text-transform: uppercase;
  line-height: 120%;
  -webkit-text-stroke: 2px ${props => props.theme.color.white};
  margin-block-end: 4rem;
`;

export default Title;
