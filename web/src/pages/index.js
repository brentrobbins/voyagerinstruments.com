import React from 'react'
import {graphql} from 'gatsby'
import Home from '../components/HomePage/Home'
import Layout from '../containers/layout'
import SEO from '../components/SEO/SEO'

export const query = graphql`
  query sanityHome {
    sanityHome {
      title
      _rawFlexibleContentLayout
      homeHeader {
        heroBackground {
          asset {
            fluid(maxWidth:1440) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      seoSettings {
        title
        description
        openGraphImage {
          asset {
            url
          }
        }
      }
    }
  }
`

const PagePage = ({data: {sanityHome: page}}) => (
  <Layout title={page.title}>
    {page.seoSettings && page.seoSettings.title && page.seoSettings.description && (
      <SEO title={page.seoSettings.title} description={page.seoSettings.description} openGraphImage={page.seoSettings.openGraphImage && page.seoSettings.openGraphImage.asset.url} />
    )}
    <Home hero={page.homeHeader} flexibleContent={page._rawFlexibleContentLayout} />
  </Layout>
)

export default PagePage
