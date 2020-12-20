import React from 'react'
import getVideoId from 'get-video-id'
// import {LiteYoutubeEmbed} from 'react-lite-yt-embed'

function Youtube (props) {
  if (!props || !props.url) {
    return <div>Missing YouTube URL</div>
  }
  const {id} = getVideoId(props.url)

  if (!id) {
    return <div>Missing YouTube URL</div>
  }
  return (
    <iframe width='560' height='315' src={`https://www.youtube.com/embed/${id}?rel=0`} frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
  )
}
export default Youtube
{ /* <LiteYoutubeEmbed id={id} params='rel=0' /> */ }
{ /* <LiteYouTubeEmbed
      id={id}
      adNetwork={false}
      noCookie
    /> */ }
