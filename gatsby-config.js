module.exports = {
  siteMetadata: {
    title: "Justin Kaseman",
    author: "Justin Kaseman",
    description: "Justin Kaseman - Software Engineer.",
    siteUrl: "https://justinkaseman.com/"
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
        icon: "src/images/favicon.png"
      }
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-transition-link",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "data",
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75
      }
    },
    `gatsby-transformer-yaml`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Open Sans Condensed:300,700"],
          urls: ["/fonts/fonts.css"]
        },
        custom: {
          families: [
            "Triumph Wheels",
            "Federo Regular",
            "Sullivan Fill",
            "Sullivan Bevel",
            "Sullivan Regular"
          ],
          urls: ["/fonts/fonts.css"]
        }
      }
    }
  ]
};
