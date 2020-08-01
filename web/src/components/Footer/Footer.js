import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import PortableText from '../serializers/portableText'
import Navigation from '../Header/Navigation'
import styles from './footer.module.css'

export default function Footer () {
  const data = useStaticQuery(graphql`
  {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      _rawFooterContent
      footerContent {
          footerImage {
            alt
            asset {
              fluid(maxWidth:453) {
                ...GatsbySanityImageFluid
              }
            }
          }
          footerLogos {
          _key
          title
          link
          logoImage {
            asset {
              url
              fluid(maxWidth:50) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
    footerNav: sanityNavigation(_id: { eq: "24cf3910-28f2-4b53-bea3-18499946a07d" }) {
      links {
        _key
        title
        siteLink
        links {
          _key
          title
          siteLink
        }
      }
    }
  }
  `)
  // console.log({data})
  // console.log(data.footerNav)

  return (
    <>
      <footer className={styles.footer} >
        <div className={styles.footerWrapper}>

          <div className={styles.footerTopWrapper}>

            <div className={styles.footerTopFirst}>
              {/* Footer Message - {body && <PortableText blocks={body} />} */}
              {data.site._rawFooterContent.footerMessage && <PortableText blocks={data.site._rawFooterContent.footerMessage} />}
              {/* Footer Logos */}
              <ul className={styles.footerLogos}>
                {data.site.footerContent.footerLogos.map(logo => (
                  <li key={logo._key}>
                    {logo.link.includes('https') || logo.link.includes('http') ? (
                      <a href={logo.link} target='_blank' rel='noopener noreferrer'>
                        {logo.logoImage.asset && (
                          <Img loading='eager' fluid={logo.logoImage.asset.fluid} alt={logo.title} style={{maxWidth: '50px'}} />)}
                      </a>
                    ) : (
                      <Link to={logo.link}>
                        {logo.logoImage.asset && (<Img loading='eager' fluid={logo.logoImage.asset.fluid} alt={logo.title} style={{maxWidth: '50px'}} />)}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.footerTopSecond}>
              {/* Footer Navigation */}
              <h3>Quick Links</h3>
              <Navigation nav={data.footerNav} />
            </div>

            <div className={styles.footerTopThird}>
              {/* Footer Image */}

              {data.site.footerContent.footerImage && data.site.footerContent.footerImage.asset && (<Img loading='eager' fluid={data.site.footerContent.footerImage.asset.fluid} style={{maxWidth: '453px'}} />)}
              {/* Footer Contact/Address */}
              <div className={styles.addressWrapper}>
                {data.site._rawFooterContent.footerAddressFirstColumn && <PortableText blocks={data.site._rawFooterContent.footerAddressFirstColumn} />}
                {data.site._rawFooterContent.footerAddressSecondColumn && <PortableText blocks={data.site._rawFooterContent.footerAddressSecondColumn} />}
              </div>
            </div>

          </div>
        </div>
      </footer>
      <footer className={styles.footerBottom} >
        <div className={styles.footerWrapper}>
          <div className={styles.footerBottomWrapper}>
            <span> &copy; {new Date().getFullYear()} {data.site.title} All Rights Reserved. Site by: <a href='https://www.variantstudios.com' target='_blank' rel='noopener noreferrer'>Variant Studios</a>.</span>
          </div>
        </div>
      </footer>
    </>
  )
}
