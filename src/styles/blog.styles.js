import styled from 'styled-components';

export const Posts = styled.div`
  width: 100%;
  margin-block-start: 4rem;
  margin-block-end: 4rem;
`;

export const Post = styled.article`
  width: 100%;
  font-weight: var(--font-weight-black);
  font-size: var(--font-size-md);

  & span {
    font-size: var(--font-size-xs);
    color: var(--color-text-subtle);
    margin-inline-start: 0.8rem;
  }

  & h2 {
    display: inline-block;
  }
`;

export const RSSLink = styled.a`
  display: inline-block;
  font-size: var(--font-size-sm);
  text-decoration: underline;
  text-decoration-style: dotted;
  text-decoration-color: var(--color-white);
  margin-block-end: 4rem;
`;
