const path = require('path');

const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  if (result.errors) console.error(result.errors);

  const pages = result.data.allMarkdownRemark.edges;

  pages.forEach(({ node }, index) => {
    const hasPrevious = index > 0;
    const hasNext = index + 1 < pages.length;

    createPage({
      path: node.frontmatter.path,
      component: path.resolve('src/templates/post.js'),
      context: {
        previous: hasPrevious ? pages[index - 1].node.frontmatter.path : '',
        next: hasNext ? pages[index + 1].node.frontmatter.path : '',
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
