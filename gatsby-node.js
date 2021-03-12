exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Define Entity Templates
  const BlogTemplate = require.resolve(`./src/templates/BlogTemplate.js`);

  // Define Entity Queries
  const BlogQuery = await graphql(`{
    allNodeBlog {
      nodes {
        drupal_internal__nid
        created
        changed
        status
        drupal_path: path {
          alias
        }
        title
        body {
          processed
        }
      }
    }
  }`);

  // Query all entities, build their pages.
  await Promise.all(
    BlogQuery.data.allNodeBlog.nodes.map(node => {
      createPage({
        path: node.drupal_path.alias,
        component: BlogTemplate,
        context: node
      })
    }),
  );
};
