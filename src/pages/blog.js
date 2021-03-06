import React, { useRef, useEffect } from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Section from '../styles/section';
import Title from '../styles/title';
import GhostText from '../styles/ghost-text';
import { Posts, Post, RSSLink } from '../styles/blog.styles';
import SiteNav from '../components/site-nav';

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges: posts },
  },
  location,
}) => {
  const focusRef = useRef();

  useEffect(() => {
    if (!focusRef.current) return;
    focusRef.current.focus();
  }, []);

  return (
    <Layout>
      <SEO title="Blog — FSVDR" canonical={location.pathname} />

      <Section>
        <Title size="big" tabIndex={0} ref={focusRef}>
          If a post is <GhostText>published</GhostText> but no one is there to <GhostText>read</GhostText> it, does it
          exist? <br /> Well yes.
        </Title>

        <SiteNav route="blog" showContact={false} />

        <Posts>
          {posts.map(({ node: { frontmatter: { path, title, series } } }) => (
            <Post key={path} aria-label={`Blog post #${series}: ${title}`}>
              <h2>
                <Link to={path} aria-label={`Blog post #${series}: ${title}`}>
                  {title}
                </Link>
              </h2>

              <span>{`No. ${series}`}</span>
            </Post>
          ))}
        </Posts>

        <RSSLink href="/rss.xml" target="_blank" rel="noopener noreferrer">
          RSS Feed
        </RSSLink>
      </Section>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { standalone: { ne: true } } }
      sort: { order: DESC, fields: frontmatter___series }
    ) {
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
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              path: PropTypes.string,
              title: PropTypes.string,
              series: PropTypes.number,
            }),
          }),
        })
      ),
    }),
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogPage;
