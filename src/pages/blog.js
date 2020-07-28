import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Section from '../styles/section';
import Title from '../styles/title';
import GhostText from '../styles/ghost-text';
import { Posts, Post } from './blog.styles';
import SiteNav from '../components/site-nav';

const BlogPage = () => {
  return (
    <Layout>
      <SEO title="Blog" />

      <Section>
        <Title size="big">
          If a post is <GhostText>published</GhostText> but no one is there to <GhostText>read</GhostText> it, does it
          exist? <br /> Well yes.
        </Title>

        <SiteNav showContact={false} />

        <Posts>
          <Post>
            <h2>
              <Link to="/its-here-finally">It&apos;s here. Finally</Link>
            </h2>

            <span>No. 1</span>
          </Post>
        </Posts>
      </Section>
    </Layout>
  );
};

export default BlogPage;
