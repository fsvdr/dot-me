import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Nav = styled.nav`
  width: 100%;
  margin: 4rem 0;

  & ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    list-style-type: none;
  }
`;

const SiteLink = styled(Link)`
  display: flex;
  flex-flow: column nowrap;

  & small {
    font-size: ${props => props.theme.fontSize.xs};
    font-weight: ${props => props.theme.fontWeight.black};
    text-transform: uppercase;

    &::after {
      content: '';
      display: inline-block;
      vertical-align: middle;
      width: 1.6em;
      height: 1.6em;
      background-image: ${props =>
        props.internal ? `url('icons/internal-link.svg')` : `url(icons/external-link.svg)`};
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      margin-inline-start: 0.2rem;
    }
  }

  & span {
    font-weight: ${props => props.theme.fontWeight.black};
    text-transform: uppercase;
  }
`;

const SiteNav = ({ route }) => {
  return (
    <Nav aria-label="Site navigation">
      <ul>
        {route !== '' && (
          <li>
            <SiteLink to="/">
              <small className="">Back</small>
              <span>Home</span>
            </SiteLink>
          </li>
        )}

        <li>
          <SiteLink to="/about">
            <small className="">More</small>
            <span>About me</span>
          </SiteLink>
        </li>

        <li>
          <SiteLink to="/blog">
            <small>Deep writing</small>
            <span>The Blog</span>
          </SiteLink>
        </li>

        <li>
          <SiteLink as="a" href="#contact" internal="true">
            <small>How to</small>
            <span>Contact</span>
          </SiteLink>
        </li>
      </ul>
    </Nav>
  );
};

SiteNav.propTypes = {
  route: PropTypes.oneOf(['', 'about', 'blog']).isRequired,
};

export default SiteNav;
