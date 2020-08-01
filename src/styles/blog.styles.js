import styled from 'styled-components';

export const Posts = styled.div`
  width: 100%;
  margin-block-start: 4rem;
  margin-block-end: 4rem;
`;

export const Post = styled.article`
  width: 100%;
  font-weight: ${props => props.theme.fontWeight.black};
  font-size: ${props => props.theme.fontSize.md};

  & span {
    font-size: ${props => props.theme.fontSize.xs};
    color: ${props => props.theme.color.textSubtle};
    margin-inline-start: 0.8rem;
  }

  & h2 {
    display: inline-block;
  }
`;
