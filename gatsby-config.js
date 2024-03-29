const siteConfig = require('./config.js');

module.exports = {
  siteMetadata: {
    title: `gaehyun`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    menu: siteConfig.menu,
    copyright: siteConfig.copyright,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
       resolve : `gatsby-source-filesystem`,
       options : {
         name : `markdown-pages`,
         path : `${__dirname}/src/contents`
       }
     },
     `gatsby-transformer-remark`,
     {
           resolve: 'gatsby-plugin-web-font-loader',
           options: {
             google: {
               families: ['Droid Sans', 'Droid Serif','KoPub Dotum','Noto Sans']
             }
           }
      },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
