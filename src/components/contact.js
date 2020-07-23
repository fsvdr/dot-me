/* eslint-disable react/forbid-prop-types */
import React, { useRef, useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';
import Image from './image';
import Section from '../styles/section';
import Title from '../styles/title';
import GhostText from '../styles/ghost-text';

const ContactSection = styled(Section)`
  padding-block-start: 6rem;
  padding-block-end: 6rem;

  & > ${Title} {
    font-size: min(12vw, ${props => props.theme.fontSize.xl});
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.portraitTablet}) {
    padding-block-start: 8rem;
  }
`;

const Figure = styled.div`
  position: absolute;
  top: 30%;
  right: 0;
  inline-size: max(50vw, 26rem);
  z-index: -1;
  opacity: 0.6;
`;

const Email = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-size: ${props => props.theme.fontSize.lg};
  font-weight: ${props => props.theme.fontWeight.black};
  text-transform: uppercase;
  margin-block-start: 8rem;
  margin-block-end: 8rem;

  & p {
    margin-block-end: 0;
    margin-inline-start: 4rem;
  }

  & span:last-child {
    margin-inline-start: 8rem;
  }
`;

const Contact = ({ image }) => {
  const elementRef = useRef(null);
  const [elementTop, setElementTop] = useState(0);
  const { scrollY } = useViewportScroll();

  const y = useTransform(scrollY, [elementTop, elementTop + 1], [0, 0.2], { clamp: false });

  useLayoutEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    setElementTop(element.offsetTop);
  }, [elementRef]);

  return (
    <ContactSection ref={elementRef}>
      <Title as="h2" size="xl">
        Got a project? <br />
        Get in touch! <br />
        No commitments. <br />
        No hidden fees. <br />
        All chill.
      </Title>

      <Email>
        <GhostText>dev@fsvdr.me</GhostText>
        <p>dev@fsvdr.me</p>
        <GhostText>dev@fsvdr.me</GhostText>
      </Email>

      <p>
        I’m currently available for freelance projects — and even if you just want to talk about business ideas, tech or
        life itself drop me a line!
      </p>

      <Figure as={motion.div} style={{ y }}>
        <Image image={image} />
      </Figure>
    </ContactSection>
  );
};

Contact.propTypes = {
  image: PropTypes.object.isRequired,
};

export default Contact;
