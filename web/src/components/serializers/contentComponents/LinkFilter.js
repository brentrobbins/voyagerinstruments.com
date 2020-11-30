import React from 'react'
import {Link} from 'gatsby'
export const LinkFilter = ({link, content}) => {
  return (
    <>
      {link.includes('https') || link.includes('http') ? (
        <a href={link} target='_blank' rel='noopener noreferrer'>
          {content}
        </a>
      ) : (
        <Link to={link}>{content}</Link>
      )}
    </>
  )
}
