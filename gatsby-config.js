module.exports = {
  siteMetadata: {
    title: `Full Stack Developer`,
    description: `My personal portfolio website`,
    author: `@Kumar`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kumar Gudipalli`,
        short_name: `Kumar Gudipalli`,
        start_url: `/`,
        background_color: `#111a28`,
        theme_color: `#1d293a`,
        display: `minimal-ui`,
        icon: `src/assets/image/profile.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
