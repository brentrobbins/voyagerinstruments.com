import React from 'react'
import Img from 'gatsby-image'
import {LinkFilter} from './LinkFilter'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import clientConfig from '../../../../client-config'
import styles from './hero.module.css'

export default ({content: {title, subTitle, subText, link, mainImage, layoutStyle}}) => {
  const fluidProps = mainImage && mainImage.asset ? getFluidGatsbyImage(mainImage.asset._ref, {maxWidth: 1440, maxHeight: 800}, clientConfig.sanity) : null
  return (
    <div className={` ${styles.hero__wrapper} ${layoutStyle} ${layoutStyle === 'leftAligned' && styles.layout__left} ${layoutStyle === 'centerAligned' && styles.layout__center}`} style={{backgroundImage: fluidProps.src}}>
      <div className={styles.hero__content}>
        <header className={styles.hero__header}>
          {title && (<h1 className={styles.hero__title}><LinkFilter link={link} content={title} /></h1>)}
          {subTitle && (<h2 className={styles.hero__subtitle}><LinkFilter link={link} content={subTitle} /></h2>)}
        </header>
        {subText && (<p className={styles.hero__subText}>
          <LinkFilter link={link} content={subText} />
        </p>)}
      </div>
      {mainImage && mainImage.asset && (<div className={styles.hero__image}><Img loading='eager' fluid={fluidProps} alt={mainImage.alt} /></div>)}
    </div>
  )
}
