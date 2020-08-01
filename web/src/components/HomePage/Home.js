import React from 'react'
// import PortableText from '../serializers/portableText'
import ContentComponents from '../serializers/contentComponents/index'
import FlexibleContentComponents from '../serializers/contentComponents/FlexibleContent'
import HomeHero from '../HomeHero'

// import styles from './page.module.css'

const Home = ({content, flexibleContent, hero}) => {
  return (
    <>
      {/* <HomeHero hero={hero} /> */}
      {flexibleContent && <FlexibleContentComponents blocks={flexibleContent} />}
      {content && <ContentComponents blocks={content} />}
    </>
  )
}
export default Home
