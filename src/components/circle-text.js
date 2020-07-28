/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Character = styled.span`
  position: absolute;
  display: inline-block;
  width: 1ch;
  height: var(--radius);
  font-size: ${props => props.theme.fontSize.sm};
  font-weight: ${props => props.theme.fontWeight.black};
  text-transform: uppercase;
  text-align: center;
  line-height: 1;
  transform-origin: bottom center;
  ${props => `transform: rotate(${(360 / (props.length + 1)) * props.index}deg)`};
  transition: color 0.3s;
`;

const Container = styled.small`
  --radius: ${props => `${props.radius}rem`};
  position: relative;
  display: flex;
  justify-content: center;
  width: calc(var(--radius) * 2);
  height: calc(var(--radius) * 2);
  transform: rotate(-45deg);

  &:hover ${Character} {
    color: ${props => props.theme.color.accent};
  }
`;

const Badge = styled.span`
  position: absolute;
  align-self: center;
  transform: rotate(32deg);
`;

const CircleText = ({ radius, text, badge }) => {
  const characters = text.split('');

  return (
    <Container radius={radius}>
      {characters.map((c, i) => (
        <Character length={characters.length} index={i} key={i}>
          {c}
        </Character>
      ))}

      <Badge>{badge}</Badge>
    </Container>
  );
};

CircleText.propTypes = {
  text: PropTypes.string.isRequired,
  badge: PropTypes.string,
  radius: PropTypes.number,
};

CircleText.defaultProps = {
  radius: 2,
  badge: '',
};

export default CircleText;