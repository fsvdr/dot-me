import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Section from '../styles/section';
import Title from '../styles/title';
import GhostText from '../styles/ghost-text';
import { Posts, Post } from '../styles/blog.styles';
import SiteNav from '../components/site-nav';

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges: posts },
  },
  location,
}) => {
  return (
    <Layout>
      <SEO title="Blog — FSVDR" canonical={location.pathname} />

      <Section>
        <Title size="big">
          If a post is <GhostText>published</GhostText> but no one is there to <GhostText>read</GhostText> it, does it
          exist? <br /> Well yes.
        </Title>

        <SiteNav showContact={false} />

        <Posts>
          {posts.map(({ node: { frontmatter: { path, title, series } } }) => (
            <Post key={path}>
              <h2>
                <Link to={path}>{title}</Link>
              </h2>

              <span>{`No. ${series}`}</span>
            </Post>
          ))}
        </Posts>
      </Section>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___series }) {
      edges {
        node {
          frontmatter {
            path
            title
            series
          }
        }
      }
    }
  }
`;

BlogPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.shape({
        node: PropTypes.shape({
          frontmatter: PropTypes.shape({
            path: PropTypes.string,
            title: PropTypes.string,
            series: PropTypes.number,
          }),
        }),
      }),
    }),
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogPage;
