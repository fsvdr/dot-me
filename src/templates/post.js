import React, { useRef, useEffect } from 'react';
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
  const focusRef = useRef();
  const thumbnailParams = new URLSearchParams(
    `title=${frontmatter.title}&circle=Published ${frontmatter.formattedDate}&badge=No. ${frontmatter.series}`
  );

  useEffect(() => {
    if (!focusRef.current) return;
    focusRef.current.focus();
  }, []);

  return (
    <Layout>
      <SEO
        title={`${frontmatter.title} — FSVDR`}
        description={frontmatter.description}
        canonical={frontmatter.path}
        image={`/.netlify/functions/share-thumbnail?${thumbnailParams.toString()}`}
        imageAlt={`Reads: ${frontmatter.title}. Published on ${frontmatter.formattedDate}. Article number ${frontmatter.series}.`}
        og={{
          type: 'article',
          published_time: frontmatter.date,
          section: frontmatter.category,
          tag: frontmatter.tags,
        }}
      />

      <Article role="main" aria-label={frontmatter.title}>
        <Header>
          <Title size="big" tabIndex={0} ref={focusRef}>
            {frontmatter.title}

            <time dateTime={frontmatter.date}>
              <CircleText
                radius={3}
                badge={frontmatter.series ? `No. ${frontmatter.series}` : ''}
                text={`Published ${frontmatter.formattedDate}`}
              />
            </time>
          </Title>

          <Lead>{frontmatter.description}</Lead>
        </Header>

        <Author>
          <Image image={avatar} alt="" focusable="false" aria-hidden="true" />

          <div>
            <address className="author-name" aria-label="Author">
              <abbr title="Fernando Saavedra">fsvdr</abbr>
            </address>
            <p className="time-to-read">{`${timeToRead} minute${timeToRead > 1 ? 's' : ''} read`}</p>
          </div>
        </Author>

        <Body dangerouslySetInnerHTML={{ __html: html }} />

        <Aside aria-label="About the author">
          <p>Hey there, my name Fernando, I&apos;m a front end developer based in Mexico City.</p>

          <div aria-labelledby="what where">
            <p id="what">You can read more about me and what I do </p>

            <Link to="/" id="where">
              here.
            </Link>
          </div>

          <nav aria-label="Blog pagination">
            {frontmatter.standalone || !previous ? null : (
              <Link
                to={previous.frontmatter.path}
                rel="prev"
                aria-label={`Previous post: ${previous.frontmatter.title}`}
              >
                <span>Previous one:</span>
                {previous.frontmatter.title}
              </Link>
            )}

            {frontmatter.standalone || !next ? null : (
              <Link to={next.frontmatter.path} rel="next" aria-label={`Next post: ${next.frontmatter.title}`}>
                <span>Next up:</span>
                {next.frontmatter.title}
              </Link>
            )}

            {frontmatter.standalone ? null : <Link to="/blog">See all posts</Link>}
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
        path
        title
        description
        date: date(formatString: "YYYY-MM-DD")
        formattedDate: date(formatString: "MMM DD, YYYY")
        category
        tags
        series
        standalone
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
        path: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        date: PropTypes.string,
        formattedDate: PropTypes.string,
        category: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
        series: PropTypes.number,
        standalone: PropTypes.bool,
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
