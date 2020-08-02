import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import Title from '../styles/title';
import CircleText from '../components/circle-text';
import SEO from '../components/seo';
import { Article, Header, Lead, Body, Aside, Author } from './post.styles';
import Image from '../components/image';

const PostTemplate = ({
  data: {
    markdownRemark: { html, timeToRead, frontmatter },
    previous,
    next,
    fsvdr: avatar,
  },
}) => {
  return (
    <Layout>
      <SEO title={`${frontmatter.title} — FSVDR`} description={frontmatter.punchline} canonical={frontmatter.path} />

      <Article role="main">
        <Header>
          <Title size="big">
            {frontmatter.title}

            <time dateTime={frontmatter.date}>
              <CircleText
                radius={3}
                badge={`No. ${frontmatter.series}`}
                text={`Published ${frontmatter.formattedDate}`}
              />
            </time>
          </Title>

          <Lead>{frontmatter.punchline}</Lead>
        </Header>

        <Author>
          <Image
            image={avatar}
            alt="Fernando sits in front of his computer wearing sunglasses as if cooler than he actually is"
          />

          <div>
            <h3 className="author-name">
              <abbr title="Fernando Saavedra">fsvdr</abbr>
            </h3>
            <p className="time-to-read">{`${timeToRead} minute${timeToRead > 1 ? 's' : ''} read`}</p>
          </div>
        </Author>

        <Body dangerouslySetInnerHTML={{ __html: html }} />

        <Aside>
          <p>Hey there, my name Fernando, I&apos;m a front end developer based in Mexico City.</p>
          <p>
            You can read more about me and what I do <Link to="/">here</Link>.
          </p>

          <nav>
            {!previous ? null : (
              <Link to={previous.frontmatter.path} rel="prev">
                <span>Previous one:</span>
                {previous.frontmatter.title}
              </Link>
            )}
            {!next ? null : (
              <Link to={next.frontmatter.path} rel="next">
                <span>Next up:</span>
                {next.frontmatter.title}
              </Link>
            )}
            <Link to="/blog">See all posts</Link>
          </nav>
        </Aside>
      </Article>
    </Layout>
  );
};

export const query = graphql`
  query($path: String!, $previous: String, $next: String) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        title
        date: date(formatString: "YYYY-MM-DD")
        path
        formattedDate: date(formatString: "MMM DD, YYYY")
        series
        punchline
        tags
      }
    }
    previous: markdownRemark(frontmatter: { path: { eq: $previous } }) {
      frontmatter {
        path
        title
      }
    }
    next: markdownRemark(frontmatter: { path: { eq: $next } }) {
      frontmatter {
        path
        title
      }
    }
    fsvdr: file(relativePath: { eq: "fsvdr.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 100, maxHeight: 50, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

PostTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      timeToRead: PropTypes.number,
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
        path: PropTypes.string,
        formattedDate: PropTypes.string,
        series: PropTypes.number,
        punchline: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
      }),
    }).isRequired,
    previous: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        path: PropTypes.string,
      }),
    }),
    next: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        path: PropTypes.string,
      }),
    }),
    fsvdr: PropTypes.object.isRequired,
  }).isRequired,
};

export default PostTemplate;
