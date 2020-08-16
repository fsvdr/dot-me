const path = require('path');

const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(sort: { order: ASC, fields: frontmatter___series }) {
        edges {
          node {
            frontmatter {
              path
              standalone
            }
          }
        }
      }
    }
  `);

  if (result.errors) console.error(result.errors);

  const posts = result.data.allMarkdownRemark.edges.filter(({ node }) => !node.frontmatter.standalone);

  console.log(JSON.stringify(posts));
  posts.forEach(({ node }, index) => {
    const hasPrevious = index > 0;
    const hasNext = index + 1 < posts.length;

    createPage({
      path: node.frontmatter.path,
      component: path.resolve('src/templates/post.js'),
      context: {
        previous: hasPrevious ? posts[index - 1].node.frontmatter.path : '',
        next: hasNext ? posts[index + 1].node.frontmatter.path : '',
      },
    });
  });

  const standalone = result.data.allMarkdownRemark.edges.filter(({ node }) => node.frontmatter.standalone);

  standalone.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve('src/templates/post.js'),
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
