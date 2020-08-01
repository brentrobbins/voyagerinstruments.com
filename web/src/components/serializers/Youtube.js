import React from 'react'
import getYouTubeID from 'get-youtube-id'
import {LiteYouTubeEmbed} from 'react-lite-youtube-embed'

function Youtube (props) {
  const id = getYouTubeID(props.url)
  if (!id) {
    return <div>Missing YouTube URL</div>
  }
  return (
    <LiteYouTubeEmbed
      id={id}
      adNetwork={false}
      noCookie
    />
  )
}
export default Youtube
