import styled from 'styled-components';

const GhostText = styled.span`
  font-size: inherit;
  color: inherit;
  text-transform: inherit;
  color: transparent;
  letter-spacing: inherit;
  -webkit-text-stroke: 2px var(--color-white);
`;

export default GhostText;
