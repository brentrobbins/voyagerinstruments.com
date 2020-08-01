import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
// import {getFluidGatsbyImage} from 'gatsby-source-sanity'
// import clientConfig from '../../../../../client-config'
import styles from './partners.module.css'
const Page = () => {
  const data = useStaticQuery(graphql`
    {
      sanityPartner(id: {eq: "-3ad01268-0a34-5050-a688-a0994ade284c"}) {
        id
        title
        partners {
          _key
          title
          link
          logo {
            alt
            asset {
              fluid(maxWidth:277) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `)

  // const FluidImage = (image) => {
  //   console.log({image})
  //   return image && image.asset ? getFluidGatsbyImage(image.asset._ref, {maxWidth: 400}, clientConfig.sanity) : null
  // }

  return (
    <ul className={styles.contentviews__wrapper}>
      {data.sanityPartner.partners.map(partner => (
        <li key={partner._key} className={styles.contentviews__innercontent_wrapper}>

          {partner.logo && partner.logo.asset && (

            <a href={`mailto:${partner.link}`}>
              <Img style={{maxWidth: '277px'}} loading='eager' fluid={partner.logo.asset.fluid} alt={partner.logo.alt} />
            </a>

          )}

        </li>
      ))}
    </ul>
  )
}

export default Page
