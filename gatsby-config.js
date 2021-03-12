module.exports = {
  siteMetadata: {
    title: "andy-blum.com",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `http://admin.andy-blum.com/`,
        apiBase: `jsonapi`,
      },
    }
  ],
};
