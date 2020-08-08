import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Title from '../styles/title';
import CircleText from '../components/circle-text';

export const Canvas = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  inline-size: 100%;
  block-size: 630px;
  padding: 2.4rem 2.4rem;
  padding-inline-start: 8vw;

  & ${Title} {
    position: relative;
    margin-block-start: -1rem;
    margin-block-end: 0;
    ${props => (props.length >= 30 ? 'font-size: min(9vw, var(--font-size-big));' : '')}

    & > span {
      display: inline-block;
      -webkit-text-stroke: 0;
      margin-inline-start: -1.6rem;
      margin-block-end: -2.4rem;

      & small {
        font-size: 1rem;
        text-transform: none;
      }

      & span:not(:last-child) {
        color: var(--color-accent);
      }
    }
  }
`;

export const Wordmark = styled.abbr`
  font-weight: var(--font-weight-black);
  text-transform: uppercase;
  text-decoration: none;
`;

const ShareThumbnailPage = ({ location }) => {
  if (!location.href) return null;

  const url = new URL(location.href);
  const title = url.searchParams.get('title');
  const circle = url.searchParams.get('circle');
  const badge = url.searchParams.get('badge');

  return (
    <Canvas length={title.length}>
      <Wordmark>fsvdr</Wordmark>

      <Title size="big">
        {title}

        <span>
          <CircleText radius={3} badge={badge} text={circle} />
        </span>
      </Title>
    </Canvas>
  );
};

ShareThumbnailPage.propTypes = {
  location: PropTypes.shape({
    href: PropTypes.string.isRequired,
  }).isRequired,
};

export default ShareThumbnailPage;
