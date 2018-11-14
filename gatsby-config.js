module.exports = {
  siteMetadata: {
    title: 'TT-kamerat',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Tampereen Teekkarikamerat',
        short_name: 'TT-kamerat',
        start_url: '/',
        background_color: '#9C8367',
        theme_color: '#9C8367',
        display: 'minimal-ui',
        icon: 'src/images/icon/icon-512.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-90193726-1",
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Any additional create only fields (optional)
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "ttkamerat.fi",
      },
    },    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
