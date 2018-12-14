module.exports = {
  siteMetadata: {
    title: "Justin Kaseman",
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
  ],
};
