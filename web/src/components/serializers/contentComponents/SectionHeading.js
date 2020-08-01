import React from 'react'

import styles from './sectionheading.module.css'

export default ({content: {title, subTitle, layoutStyle}}) => {
  // console.log({cta})
  return (
    <div className={` ${styles.sectionheading__wrapper} ${layoutStyle} ${layoutStyle === 'leftAligned' ? styles.layout__left : styles.layout__center} `}>
      {title && (<h3 className={styles.sectionheading__title}>{title}</h3>)}
      {subTitle && (<p className={styles.sectionheading__subtitle}>{subTitle}</p>)}
    </div>
  )
}
