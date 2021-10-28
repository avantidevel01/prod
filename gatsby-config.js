const path = require('path')

module.exports = {
  siteMetadata: {
    title: '3 West Medical',
    author: '3 West Medical',
    siteUrl: 'https://3westmedical.com',
    keywords:
      'Endoscpe Repairs, Rigid Endoscopes, Flexible Endoscopes, Endoscopy Equipment',
    description:
      'Specializing in Endoscope Repair and Refurbished Endoscope Sales in the Area of Los Angeles.',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: 'https://3westmedical.com',
        sitemap: 'https://3westmedical.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-32238302-1',
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        base64Width: 20,
        forceBase64Format: `png`,
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 70,
        failOnError: true,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },

    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `3 West Medical`,
        short_name: `3 West`,
        start_url: `/`,
        lang: `en`,
        icon: `./src/images/icon.png`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },

    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
