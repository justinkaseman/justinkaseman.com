module.exports = {
  siteMetadata: {
    title: "Justin Kaseman",
    author: "Justin Kaseman",
    description: "Justin Kaseman - Software Engineer.",
    siteUrl: "https://justinkaseman.com/",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Justin Kaseman",
        short_name: "JK, man",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/favicon.png",
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "data",
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    `gatsby-transformer-yaml`,
  ],
};
