// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'
const isGatsbyCloud = process.env.GATSBY_CLOUD === 'true'

var proxy = require('http-proxy-middleware')

module.exports = {
  siteMetadata: {
    title: `Voyager Instruments`,
    description: `Voyager Instruments.`,
    siteUrl: `https://voyagerinstruments.com`
  },
  plugins: [
    'gatsby-plugin-remove-serviceworker',
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-netlify-cache',
      options: {
        cachePublic: true
      }
    },
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://voyagerinstruments.com`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/assets/svgs`
        }
      }
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.GATSBY_SANITY_READ_TOKEN,
        watchMode: !isProd || !isGatsbyCloud,
        overlayDrafts: !isProd || isGatsbyCloud
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-124696010-1'
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat:400,700,900`,
          `Open Sans:400,600,700,800`
          // reg, semi, bold, extra
        ],
        display: 'swap'
      }
    },
    // XMLSitemap
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        exclude: [
          `/contact/thank-you`, `/dev-404-page`, `404`, `404.html`
        ],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
        serialize: ({site, allSitePage}) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7
            }
          })
      }
    }
  ],
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      proxy({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': '',
          logLevel: 'debug'
        }
      })
    )
  }
}
