import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import ReadMoreReact from 'read-more-react'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import clientConfig from '../../../../../client-config'
import styles from '../../../../styles/teamview.module.css'
const Page = () => {
  const data = useStaticQuery(graphql`
    {
      sanityTeam(id: {eq: "-8f797356-4d8e-574b-88af-1dd669643954"}) {
        _rawStaff
      }
    }
  `)

  const FluidImage = (image) => {
    // console.log({image})
    return image && image.asset ? getFluidGatsbyImage(image.asset._ref, {maxWidth: 400}, clientConfig.sanity) : null
  }

  return (
    <ul className={styles.contentviews__wrapper}>
      {data.sanityTeam._rawStaff.map(person => (
        <li key={person._key} className={styles.contentviews__innercontent_wrapper}>

          <div className={styles.contentviews__content_wrapper}>
            <h3>{person.name}</h3>
            {person.subTitle && (<p>{person.subTitle}</p>)}
            {person.position && (<h4>{person.position}</h4>)}
            {person.email && (<p><a href={`mailto:${person.email}`}>{person.email}</a></p>)}
            {person.biography && (
              <ReadMoreReact text={person.biography}
                min={960}
                ideal={980}
                max={1080}
                readMoreText='read more...' />
            )}
          </div>

          <div className={styles.contentviews__image_wrapper}>
            {person.headshot && person.headshot.asset && (<Img loading='eager' fluid={FluidImage(person.headshot)} alt={person.headshot.alt} />)}
          </div>

        </li>
      ))}
    </ul>
  )
}

export default Page
