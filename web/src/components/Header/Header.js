import React, {useState} from 'react'
import {Link} from 'gatsby'
import Arrow from '../../assets/svgs/icons/arrow.svg'

import styles from './header.module.css'

const SubLinks = ({links, condition, setCondition, rotation, setRotation}) => {
  return (
    <ul className={styles.sublinks} data-depth='1'>
      {links.map((sublink, i) => (
        <li key={i}>
          <span>
            {sublink.siteLink && sublink.siteLink.startsWith('http') ? (
              <a href={sublink.siteLink} target='_blank' rel='noreferrer' title={sublink.title}>
                {sublink.title}
              </a>
            ) : (
              <Link to={sublink.siteLink} title={sublink.title}>
                {sublink.title}
              </Link>
            )}
            {sublink.links && sublink.links.length > 0 && (
              <button
                className={`${styles.mobileDropdown} ${rotation[i] ? styles.rotate : ''}`}
                tabIndex='0'
                aria-label='Toggle sub navigation'
                onClick={() => {
                  setRotation(prev => ({...prev, [i]: !prev[i]}))
                  setCondition(prev => ({...prev, [i]: !prev[i]}))
                }}
              >
                <Arrow />
              </button>
            )}
          </span>
          {condition[i] && <SubLinks links={sublink.links} condition={condition} setCondition={setCondition} rotation={rotation} setRotation={setRotation} />}
        </li>
      ))}
    </ul>
  )
}

function Navigation ({nav, main, top}) {
  const [conditions, setConditions] = useState({})
  const [rotations, setRotations] = useState({})

  const handleConditionChange = (index) => {
    setConditions(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }))
  }

  return (
    <>
      <ul className={main && styles.topMainNav} data-depth='0'>
        {nav && nav.links && nav.links.map((link, i) => (
          <li key={i} className={main && `${conditions[i] ? styles.toggled : ''}`}>
            <span>
              {link.siteLink && link.siteLink.startsWith('http') ? (
                <a href={link.siteLink} target='_blank' rel='noopener noreferrer' title={link.title}>
                  {link.title}
                </a>
              ) : (
                <Link to={link.siteLink} title={link.title} className={main && styles.linkWithToggle}>
                  {link.title}
                </Link>
              )}
              {link.links && link.links.length > 0 && (
                <button
                  className={`${styles.mobileDropdown} ${rotations[i] ? styles.rotate : ''}`}
                  tabIndex='0'
                  aria-label='Toggle sub navigation'
                  onClick={() => {
                    setRotations(prev => ({...prev, [i]: !prev[i]}))
                    handleConditionChange(i)
                  }}
                >
                  <Arrow />
                </button>
              )}
            </span>
            {conditions[i] && <SubLinks links={link.links} condition={conditions} setCondition={setConditions} rotation={rotations} setRotation={setRotations} />}
          </li>
        ))}
      </ul>
      <ul className={top && styles.topMainNav}>
        {top && top.links && top.links.map((link, i) => (
          <li key={i} className={styles.hideOnDesktop}>
            {link.siteLink && link.siteLink.startsWith('http') ? (
              <a href={link.siteLink} target='_blank' rel='noopener noreferrer' title={link.title}>
                {link.title}
              </a>
            ) : (
              <Link to={link.siteLink} title={link.title}>
                {link.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Navigation
