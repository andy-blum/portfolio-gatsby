exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Define Entity Queries
  const BlogQuery = await graphql(`{
    allNodeBlog {
      nodes {
        path {
          alias
        }
        id
      }
    }
  }`);

  // Query all entities, build their pages.
  await Promise.all(
    BlogQuery.data.allNodeBlog.nodes.map(node => {
      createPage({
        path: node.path.alias,
        component: require.resolve(`./src/templates/BlogTemplate.js`),
        context: {
          uuid: node.id,
        }
      })
    }),
  );
};
