require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "3 West Medical",
    author: "3 West Medical",
    siteUrl: "https://3westmedical.com",
    keywords:
      "Endoscpe Repairs, Rigid Endoscopes, Flexible Endoscopes, Endoscopy Equipment",
    description:
      "Specializing in Endoscope Repair and Refurbished Endoscope Sales in the Area of Los Angeles.",
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-netlify`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: `${process.env.G_ANALYTICS}`,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: "https://3westmedical.com",
        sitemap: "https://3westmedical.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
}
